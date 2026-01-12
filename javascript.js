const BLOG_URL = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6e\x65\x77\x73\x6e\x65\x74\x72\x61\x32\x34\x2e\x62\x6c\x6f\x67\x73\x70\x6f\x74\x2e\x63\x6f\x6d'; 
        let newsData = [];
        let staticPages = [];
        let currentFontSize = 19;
        let activePost = null;

        function fetchNews() {
            const script = document.createElement('script');
            script.src = `${BLOG_URL}/feeds/posts/default?alt=json-in-script&callback=processData&max-results=150`;
            document.body.appendChild(script);
        }

        function fetchPages() {
            const script = document.createElement('script');
            script.src = `${BLOG_URL}/feeds/pages/default?alt=json-in-script&callback=processPages`;
            document.body.appendChild(script);
        }

        function processData(data) {
            if (!data.feed.entry) return;
            newsData = data.feed.entry.map((entry) => {
                let img = "https://via.placeholder.com/600x400";
                if (entry.media$thumbnail) img = entry.media$thumbnail.url.replace('/s72-c/', '/s1600/');
                const postLink = entry.link.find(l => l.rel === 'alternate').href;
                const slug = postLink.split('/').pop().replace('.html', '');
                return {
                    slug: slug, title: entry.title.$t, category: entry.category ? entry.category[0].term : "সাধারণ",
                    image: img, summary: entry.content.$t.replace(/<[^>]*>?/gm, '').substring(0, 150) + "...",
                    content: entry.content.$t, author: entry.author[0].name.$t,
                    date: new Date(entry.published.$t).toLocaleDateString('bn-BD', { day:'numeric', month:'long', year:'numeric' }),
                    link: postLink
                };
            });
            renderNavs(); renderHome(); setFullDate(); checkUrl(); fetchPages();
        }

        function processPages(data) {
            if (!data.feed.entry) return;
            staticPages = data.feed.entry.map(entry => ({
                title: entry.title.$t, content: entry.content.$t,
                slug: entry.link.find(l => l.rel === 'alternate').href.split('/').pop().replace('.html', '')
            }));
            renderPagesList();
        }

        function openArticle(slug) {
            const post = newsData.find(n => n.slug == slug);
            if(!post) return;
            activePost = post;
            window.history.pushState({slug: slug}, '', '?post=' + slug);
            showPage('articlePage');
            window.scrollTo(0,0);

            let cleanContent = post.content;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.content;
            const firstImg = tempDiv.querySelector('img');
            if (firstImg) { firstImg.remove(); cleanContent = tempDiv.innerHTML; }

            document.getElementById('article-content').innerHTML = `
                <nav class="text-sm text-gray-500 mb-2 font-bold">প্রচ্ছদ / ${post.category}</nav>
                <h1 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">${post.title}</h1>
                
                <div class="flex flex-wrap items-center justify-between gap-4 border-y py-3 mb-6">
                    <div class="text-gray-500 text-sm">
                        <span><i class="fa-regular fa-clock mr-1"></i> ${post.date}</span>
                        <span class="ml-4"><i class="fa-regular fa-user mr-1"></i> ${post.author}</span>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="shareSocial('facebook')" class="w-8 h-8 rounded-full bg-[#1877F2] text-white text-xs"><i class="fa-brands fa-facebook-f"></i></button>
                        <button onclick="shareSocial('whatsapp')" class="w-8 h-8 rounded-full bg-[#25D366] text-white text-xs"><i class="fa-brands fa-whatsapp"></i></button>
                        <button onclick="shareSocial('twitter')" class="w-8 h-8 rounded-full bg-[#1DA1F2] text-white text-xs"><i class="fa-brands fa-twitter"></i></button>
                        <button onclick="shareSocial('messenger')" class="w-8 h-8 rounded-full bg-[#0084FF] text-white text-xs"><i class="fa-brands fa-facebook-messenger"></i></button>
                        <button onclick="shareSocial('copy')" class="w-8 h-8 rounded-full bg-gray-500 text-white text-xs"><i class="fa-solid fa-link"></i></button>
                    </div>
                </div>

                <img src="${post.image}" class="w-full rounded-lg mb-6 shadow-md">
                <div id="article-body" style="font-size:${currentFontSize}px">${cleanContent}</div>
            `;
            renderSidebarAndRelated(post);
        }

        function renderHome() {
            showPage('home-view');
            if(newsData.length === 0) return;
            document.getElementById('hero-left-main').innerHTML = `<div class="cursor-pointer group" onclick="openArticle('${newsData[0].slug}')"><img src="${newsData[0].image}" class="w-full h-[400px] object-cover rounded shadow"><h2 class="text-3xl font-bold mt-4 group-hover:text-amRed">${newsData[0].title}</h2><p class="text-gray-600 mt-2">${newsData[0].summary}</p></div>`;
            document.getElementById('hero-right-list').innerHTML = `<div class="section-header"><h2>শীর্ষ সংবাদ</h2></div>` + newsData.slice(1, 6).map(i => `<div class="flex gap-3 border-b pb-2 mb-2 cursor-pointer group" onclick="openArticle('${i.slug}')"><img src="${i.image}" class="w-20 h-14 object-cover rounded"><h4 class="text-sm font-bold group-hover:text-amRed leading-tight">${i.title}</h4></div>`).join('');
            const cats = [...new Set(newsData.map(i => i.category))].slice(0, 6);
            document.getElementById('category-blocks').innerHTML = cats.map(cat => {
                const items = newsData.filter(n => n.category === cat).slice(0, 4);
                return `<section class="mb-12"><div class="section-header"><h2 onclick="filterCategory('${cat}')">${cat}</h2></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6">${items.map(i => `<div class="cursor-pointer group" onclick="openArticle('${i.slug}')"><img src="${i.image}" class="w-full h-32 md:h-40 object-cover rounded mb-2"><h4 class="font-bold text-sm group-hover:text-amRed">${i.title}</h4></div>`).join('')}</div></section>`;
            }).join('');
        }

        function executeSearch() {
            const query = document.getElementById('search-input').value.toLowerCase();
            if(!query) return;
            toggleSearch();
            showPage('searchPage');
            document.getElementById('search-title-view').innerText = `ফলাফল: ${query}`;
            const results = newsData.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query));
            document.getElementById('search-grid').innerHTML = results.length ? results.map(i => `<div class="cursor-pointer group" onclick="openArticle('${i.slug}')"><img src="${i.image}" class="w-full h-40 object-cover rounded mb-2"><h4 class="font-bold text-sm group-hover:text-amRed">${i.title}</h4></div>`).join('') : "<p class='col-span-full py-10 text-center text-gray-500'>কোন সংবাদ পাওয়া যায়নি।</p>";
        }

        function shareSocial(type) {
            const url = window.location.href;
            const text = activePost ? activePost.title : "নিউজ নেত্র ২৪";
            if(type === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            else if(type === 'whatsapp') window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`, '_blank');
            else if(type === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
            else if(type === 'messenger') window.open(`fb-messenger://share?link=${encodeURIComponent(url)}`, '_blank');
            else if(type === 'copy') { navigator.clipboard.writeText(url); alert("লিংক কপি করা হয়েছে!"); }
        }

        function setFullDate() { 
            const d = new Date().toLocaleDateString('bn-BD', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
            document.getElementById('header-date').innerText = d + " | ২৭ পৌষ ১৪৩২"; 
        }

        function renderNavs() {
            const hNav = document.getElementById('header-nav'), dNav = document.getElementById('drawer-links'), fCats = document.getElementById('footer-cats');
            const cats = [...new Set(newsData.map(i => i.category))];
            hNav.innerHTML = ''; dNav.innerHTML = ''; fCats.innerHTML = '';
            cats.forEach(cat => {
                const btn = `<button onclick="filterCategory('${cat}')" class="hover:text-amRed transition">${cat}</button>`;
                hNav.innerHTML += btn;
                dNav.innerHTML += `<button onclick="filterCategory('${cat}'); toggleDrawer()" class="text-left border-b pb-2 font-bold">${cat}</button>`;
                fCats.innerHTML += `<li><button onclick="filterCategory('${cat}')">${cat}</button></li>`;
            });
        }

        function renderPagesList() {
            const fPages = document.getElementById('footer-pages'), dPages = document.getElementById('drawer-pages');
            fPages.innerHTML = '<li><button onclick="goHome()">প্রচ্ছদ</button></li>';
            dPages.innerHTML = '';
            staticPages.forEach(p => {
                fPages.innerHTML += `<li><button onclick="openStaticPage('${p.slug}')">${p.title}</button></li>`;
                dPages.innerHTML += `<button onclick="openStaticPage('${p.slug}'); toggleDrawer()" class="text-left">${p.title}</button>`;
            });
        }

        function showPage(p) { document.querySelectorAll('#home-view, #articlePage, #categoryPage, #staticPage, #searchPage').forEach(pg => pg.style.display = 'none'); document.getElementById(p).style.display = 'block'; }
        function goHome() { window.history.pushState({}, '', window.location.pathname); renderHome(); }
        function toggleDrawer() { document.getElementById('drawer').classList.toggle('open'); document.getElementById('overlay').classList.toggle('show'); }
        function toggleSearch() { document.getElementById('search-box').classList.toggle('hidden'); }
        function openShareModal() { document.getElementById('modal-share').classList.remove('hidden'); document.getElementById('modal-share').classList.add('flex'); }
        function closeAll() { document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); document.getElementById('modal-share').classList.add('hidden'); }
        function changeFontSize(n) { currentFontSize += n; document.getElementById('article-body').style.fontSize = currentFontSize + 'px'; }
        
        function renderSidebarAndRelated(post) {
            const related = newsData.filter(n => n.category === post.category && n.slug !== post.slug).slice(0, 4);
            document.getElementById('related-news').innerHTML = `<div class="section-header"><h2>আরও পড়ুন</h2></div><div class="grid grid-cols-2 gap-6">${related.map(i => `<div class="cursor-pointer group" onclick="openArticle('${i.slug}')"><img src="${i.image}" class="w-full h-32 object-cover rounded mb-2"><h4 class="font-bold text-sm group-hover:text-amRed">${i.title}</h4></div>`).join('')}</div>`;
            document.getElementById('article-sidebar').innerHTML = `<div class="section-header"><h2>সর্বশেষ</h2></div>` + newsData.slice(0, 10).map(i => `<div class="flex gap-3 border-b pb-2 mb-3 cursor-pointer group" onclick="openArticle('${i.slug}')"><img src="${i.image}" class="w-16 h-12 object-cover rounded"><h4 class="text-sm font-bold group-hover:text-amRed leading-tight">${i.title}</h4></div>`).join('');
            if(window.FB) { document.getElementById('fb-comment-box').setAttribute('data-href', post.link); FB.XFBML.parse(); }
        }

        function filterCategory(cat) { 
            window.history.pushState({cat: cat}, '', '?category=' + encodeURIComponent(cat));
            showPage('categoryPage'); document.getElementById('cat-title-view').innerText = cat;
            document.getElementById('cat-grid').innerHTML = newsData.filter(i => i.category === cat).map(i => `<div class="cursor-pointer group" onclick="openArticle('${i.slug}')"><img src="${i.image}" class="w-full h-40 object-cover rounded mb-2"><h4 class="font-bold text-sm group-hover:text-amRed">${i.title}</h4></div>`).join('');
        }

        function openStaticPage(slug) {
            const page = staticPages.find(p => p.slug == slug);
            if(!page) return;
            showPage('staticPage');
            document.getElementById('static-content').innerHTML = `<h1 class="text-4xl font-bold mb-8 border-b pb-4">${page.title}</h1><div class="prose max-w-none text-lg">${page.content}</div>`;
        }

        function checkUrl() {
            const p = new URLSearchParams(window.location.search);
            if(p.get('post')) openArticle(p.get('post')); 
            else if(p.get('category')) filterCategory(p.get('category')); 
            else goHome();
        }

        window.onpopstate = checkUrl;
        fetchNews();
 
/**
 * @license
 */
(function() {
    "use strict";

    // 
    const _0xBase = "Y29kZXItYmR0aGVtZXguYmxvZ3Nwb3QuY29t";
    
    // 
    const _check = function() {
        try {
            // লিঙ্ক থেকে ডোমেইন নাম আলাদা করা
            const _target = atob(_0xBase).replace('https://', '').replace('/', '');
            const _current = window.location.hostname;

            if (_current !== _target && _current !== 'localhost') {
                // 
                document.body.innerHTML = `
                <div style="background:#000; color:#fff; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; text-align:center; position:fixed; top:0; left:0; width:100%; z-index:999999;">
                    <h1 style="color:#ed1c24; font-size:40px; margin-bottom:10px;">License Denied!</h1>
                    <p style="font-size:18px;">এই ডোমেইনটি ব্যবহারের জন্য অনুমোদিত নয়।</p>
                    <p style="color:#666;">Contact BDthemeX for a valid license.</p>
                    <a href="https://${_target}" style="margin-top:20px; padding:10px 25px; background:#ed1c24; color:#fff; text-decoration:none; border-radius:5px; font-weight:bold;">অফিসিয়াল সাইটে যান</a>
                </div>`;
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    };

    // ৩. 
    const _antiTamper = function() {
        const _s = _check.toString();
        if (!_s.includes('atob') || !_s.includes('_0xBase')) {
            document.body.innerHTML = "Security Violation detected!";
            location.reload();
        }
    };

    // ৪. ব্রাউজার রেস্ট্রিকশন (F12, Right Click ব্লক)
    const _restrict = function() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.onkeydown = function(e) {
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) {
                return false;
            }
        };
    };

    // সব লজিক এক্সিকিউট করা
    if (_check()) {
        _restrict();
        setInterval(_antiTamper, 3000); // প্রতি ৩ সেকেন্ড পর পর চেক করবে
        console.log("%c License Verified: newsnetra24.blogspot.com ", "color: white; background: green; padding: 5px;");
        
        // আপনার মূল নিউজ বা থিম ফাংশন এখানে কল করুন
        if (typeof fetchNews === 'function') {
            fetchNews();
        }
    }

})();
