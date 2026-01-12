/* * Protected Script for newsnetra24.blogspot.com
 * Unauthorized copying or use is strictly prohibited.
 */
(function() {
    const authorized = 'newsnetra24.blogspot.com';
    if (window.location.hostname !== authorized && window.location.hostname !== 'localhost') {
        alert('Unauthorized Domain! Access Denied.');
        window.location.href = 'https://' + authorized;
        return;
    }

    // Obfuscated Core Logic
    const _0x5a12 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x77\x73\x6E\x65\x74\x72\x61\x32\x34\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D", "\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74"];
    window.BLOG_URL = _0x5a12[0];
    window.newsData = [];

    window.fetchNews = function() {
        const s = document.createElement('script');
        s.src = `${BLOG_URL}/feeds/posts/default?alt=json-in-script&callback=processData&max-results=150`;
        document.body.appendChild(s);
    };

    window.processData = function(data) {
        if (!data.feed.entry) return;
        newsData = data.feed.entry.map(e => {
            let img = "https://via.placeholder.com/600x400";
            if (e.media$thumbnail) img = e.media$thumbnail.url.replace('/s72-c/', '/s1600/');
            const link = e.link.find(l => l.rel === 'alternate').href;
            return {
                slug: link.split('/').pop().replace('.html', ''),
                title: e.title.$t,
                category: e.category ? e.category[0].term : "সাধারণ",
                image: img,
                content: e.content.$t,
                author: e.author[0].name.$t,
                date: new Date(e.published.$t).toLocaleDateString('bn-BD', { day:'numeric', month:'long', year:'numeric' }),
                link: link
            };
        });
        renderNavs(); renderHome(); setFullDate(); checkUrl();
    };

    // UI Rendering Functions
    window.showPage = (p) => { 
        document.querySelectorAll('#home-view, #articlePage, #categoryPage, #staticPage, #searchPage').forEach(x => x.style.display = 'none'); 
        document.getElementById(p).style.display = 'block'; 
    };

    window.openArticle = (slug) => {
        const post = newsData.find(n => n.slug == slug);
        if(!post) return;
        window.history.pushState({slug: slug}, '', '?post=' + slug);
        showPage('articlePage');
        window.scrollTo(0,0);
        document.getElementById('article-content').innerHTML = `
            <h1 class="text-4xl font-bold mb-4">${post.title}</h1>
            <div class="flex justify-between items-center border-y py-3 mb-6">
                <div class="text-sm font-bold text-gray-500">${post.date} | ${post.author}</div>
                <div class="flex gap-2">
                    <button onclick="shareSocial('facebook')" class="w-8 h-8 rounded-full bg-[#1877F2] text-white"><i class="fa-brands fa-facebook-f"></i></button>
                    <button onclick="shareSocial('whatsapp')" class="w-8 h-8 rounded-full bg-[#25D366] text-white"><i class="fa-brands fa-whatsapp"></i></button>
                    <button onclick="shareSocial('messenger')" class="w-8 h-8 rounded-full bg-[#0084FF] text-white"><i class="fa-brands fa-facebook-messenger"></i></button>
                    <button onclick="shareSocial('copy')" class="w-8 h-8 rounded-full bg-gray-500 text-white"><i class="fa-solid fa-link"></i></button>
                </div>
            </div>
            <img src="${post.image}" class="w-full rounded-lg mb-6 shadow">
            <div id="article-body" class="text-lg leading-relaxed">${post.content}</div>
        `;
        renderSidebar();
    };

    window.renderHome = () => {
        showPage('home-view');
        if(!newsData.length) return;
        document.getElementById('hero-left-main').innerHTML = `
            <div class="cursor-pointer group" onclick="openArticle('${newsData[0].slug}')">
                <img src="${newsData[0].image}" class="w-full h-[400px] object-cover rounded">
                <h2 class="text-3xl font-bold mt-4 group-hover:text-amRed">${newsData[0].title}</h2>
            </div>`;
        // ... (বাকি রেন্ডারিং লজিক আগের মতোই থাকবে)
    };

    window.shareSocial = (type) => {
        const url = window.location.href;
        if(type==='facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        else if(type==='whatsapp') window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`);
        else if(type==='copy') { navigator.clipboard.writeText(url); alert("Link Copied!"); }
    };

    window.setFullDate = () => {
        const d = new Date().toLocaleDateString('bn-BD', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
        document.getElementById('header-date').innerText = d + " | ২৭ পৌষ ১৪৩২";
    };

    window.goHome = () => { window.history.pushState({}, '', window.location.pathname); renderHome(); };
    window.toggleDrawer = () => { document.getElementById('drawer').classList.toggle('open'); document.getElementById('overlay').classList.toggle('show'); };
    window.closeAll = () => { document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); };

    window.checkUrl = () => {
        const p = new URLSearchParams(window.location.search);
        if(p.get('post')) openArticle(p.get('post')); else renderHome();
    };

    fetchNews();
})();