/**
 * Combined by jsDelivr.
 * Original files:
 * - /gh/fyzalkarimbd-web/scanner@main/qr-pro.js
 * - /gh/fyzalkarimbd-web/scanner@main/scloud.js
 * - /gh/fyzalkarimbd-web/scanner@main/aipp.js
 * - /gh/fyzalkarimbd-web/scanner@main/pntick.js
 * - /gh/fyzalkarimbd-web/scanner@main/qr-br.js
 * - /gh/fyzalkarimbd-web/scanner@main/wedding.js
 * - /gh/fyzalkarimbd-web/scanner@main/typings.js
 * - /gh/fyzalkarimbd-web/scanner@main/enhancer.js
 * - /gh/fyzalkarimbd-web/scanner@main/fav1.js
 * - /gh/fyzalkarimbd-web/scanner@main/stamp.js
 * - /gh/fyzalkarimbd-web/scanner@main/xts.js
 * - /gh/fyzalkarimbd-web/scanner@main/prompta.js
 * - /gh/fyzalkarimbd-web/scanner@main/receipt.js
 * - /gh/fyzalkarimbd-web/scanner@main/barcodeg.js
 * - /gh/fyzalkarimbd-web/scanner@main/tele.js
 * - /gh/fyzalkarimbd-web/scanner@main/imgkb.js
 * - /gh/fyzalkarimbd-web/scanner@main/ppl.js
 * - /gh/fyzalkarimbd-web/scanner@main/letter.js
 * - /gh/fyzalkarimbd-web/scanner@main/njpro.js
 * - /gh/fyzalkarimbd-web/scanner@main/photonda.js
 * - /gh/fyzalkarimbd-web/scanner@main/studentid.js
 * - /gh/fyzalkarimbd-web/scanner@main/search.js
 * - /gh/fyzalkarimbd-web/scanner@main/biodata.js
 * - /gh/fyzalkarimbd-web/scanner@main/translator-eb.js
 * - /gh/fyzalkarimbd-web/scanner@main/hwconverter.js
 * - /gh/fyzalkarimbd-web/scanner@main/multi-Imgpdfff.js
 * - /gh/fyzalkarimbd-web/scanner@main/psphotosheetj.js
 * - /gh/fyzalkarimbd-web/scanner@main/signpad.js
 * - /gh/fyzalkarimbd-web/scanner@main/noticee.js
 * - /gh/fyzalkarimbd-web/scanner@main/leaflett.js
 * - /gh/fyzalkarimbd-web/scanner@main/land.js
 * - /gh/fyzalkarimbd-web/scanner@main/omr.js
 * - /gh/fyzalkarimbd-web/scanner@main/affidavit.js
 * - /gh/fyzalkarimbd-web/scanner@main/job.js
 * - /gh/fyzalkarimbd-web/scanner@main/onseba.js
 * - /gh/fyzalkarimbd-web/scanner@main/copycost.js
 * - /gh/fyzalkarimbd-web/scanner@main/bdresult.js
 * - /gh/fyzalkarimbd-web/scanner@main/iphcon.js
 * - /gh/fyzalkarimbd-web/scanner@main/examfaq.js
 * - /gh/fyzalkarimbd-web/scanner@main/agreement.js
 * - /gh/fyzalkarimbd-web/scanner@main/pdfms.js
 * - /gh/fyzalkarimbd-web/scanner@main/ramadann.js
 * - /gh/fyzalkarimbd-web/scanner@main/gd.js
 * - /gh/fyzalkarimbd-web/scanner@main/routine.js
 * - /gh/fyzalkarimbd-web/scanner@main/property.js
 * - /gh/fyzalkarimbd-web/scanner@main/pshortcuts.js
 * - /gh/fyzalkarimbd-web/scanner@main/salary.js
 * - /gh/fyzalkarimbd-web/scanner@main/visacrop.js
 * - /gh/fyzalkarimbd-web/scanner@main/familycard.js
 * - /gh/fyzalkarimbd-web/scanner@main/bcalendar.js
 * - /gh/fyzalkarimbd-web/scanner@main/flight.js
 * - /gh/fyzalkarimbd-web/scanner@main/visacheck0.js
 * - /gh/fyzalkarimbd-web/scanner@main/p-n-posts1.js
 * - /gh/fyzalkarimbd-web/scanner@main/bgre1.js
 * - /gh/fyzalkarimbd-web/scanner@main/jophotos1.js
 * - /gh/fyzalkarimbd-web/scanner@main/pp1.js
 * - /gh/fyzalkarimbd-web/scanner@main/datecon1.js
 * - /gh/fyzalkarimbd-web/scanner@main/travelbook0.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
let currentQrType="url";function openQrModal(){"function"==typeof setActiveMode&&setActiveMode("mode-qr-gen");let e=document.getElementById("qrModal");e?(e.style.display="flex",document.body.style.overflow="hidden",setTimeout(generateAdvancedQR,100)):alert("Modal ID 'qrModal' not found in HTML!")}function closeQrModal(){document.getElementById("qrModal").style.display="none",document.body.style.overflow="auto"}function switchQrType(e,t){currentQrType=e,document.querySelectorAll(".dt-tab").forEach(e=>e.classList.remove("active")),t.classList.add("active"),document.getElementById("qr-url-group").style.display="url"===e?"block":"none",document.getElementById("qr-text-group").style.display="text"===e?"block":"none",document.getElementById("qr-wifi-group").style.display="wifi"===e?"block":"none",document.getElementById("qr-email-group").style.display="email"===e?"block":"none",generateAdvancedQR()}function generateAdvancedQR(){let e="",t=document.getElementById("qrColorFG").value||"#000000",l=document.getElementById("qrColorBG").value||"#ffffff",r=document.getElementById("socialCardToggle").checked;if("url"===currentQrType)e=document.getElementById("qrInputUrl").value||"https://www.idcardscannerpro.com";else if("text"===currentQrType)e=document.getElementById("qrInputText").value||"Hello!";else if("wifi"===currentQrType){let n;e="WIFI:S:"+(document.getElementById("qrWifiName").value||"WiFi")+";T:WPA;P:"+(document.getElementById("qrWifiPass").value||"")+";;"}else if("email"===currentQrType){let o;e="MATMSG:TO:"+(document.getElementById("qrEmailTo").value||"mail@example.com")+";SUB:"+(document.getElementById("qrEmailSub").value||"Hello")+";BODY:;;"}let a=document.getElementById("qrFinalLayout"),d=document.getElementById("socialText");r?(a.style.background=l,a.style.border="4px solid "+t,d.style.display="block",d.style.color=t):(a.style.background="transparent",a.style.border="none",d.style.display="none");let y=document.getElementById("qrcodeCanvas");if(y){y.innerHTML="";try{new QRCode(y,{text:e,width:180,height:180,colorDark:t,colorLight:l,correctLevel:QRCode.CorrectLevel.H})}catch(c){console.error("QR Library Error:",c)}}}function downloadAdvancedQR(){let e=document.getElementById("qrExportWrapper");"undefined"!=typeof html2canvas?html2canvas(e,{backgroundColor:null,scale:3}).then(e=>{let t=document.createElement("a");t.download="Pro_QRCode.png",t.href=e.toDataURL("image/png"),t.click()}):alert("Library html2canvas not loaded!")}function resetQR(){document.querySelectorAll("#qrInputFields input, #qrInputFields textarea").forEach(e=>e.value=""),document.getElementById("qrColorFG").value="#000000",document.getElementById("qrColorBG").value="#ffffff",document.getElementById("socialCardToggle").checked=!1;let e=document.getElementById("tab-url");e&&switchQrType("url",e),generateAdvancedQR(),console.log("QR Generator Reset Successfully!")}
;

const CLIENT_ID = '742363063259-hecd6i38ovt8kv16na4c7qrv21hrpg9k.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyCQDzRhsSN13iIsQ81eXBE-bHMSm-X2BDY'; 
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
  const SCOPES = 'https://www.googleapis.com/auth/drive.file';

  let currentCloudMode = 'photo'; 
  let tokenClient, gapiInited = false, gisInited = false;
  let fileToDeleteId = null;
  let elementToRemove = null;

  function triggerAlert(msg) {
    const popup = document.getElementById('customPopup');
    if (popup) {
        document.getElementById('popupMessage').innerText = msg;
        popup.classList.add('active');
    } else { alert(msg); }
  }

  function gapiLoaded() { gapi.load('client', async () => { await gapi.client.init({ apiKey: API_KEY, discoveryDocs: [DISCOVERY_DOC] }); gapiInited = true; checkAuth(); }); }
  function gisLoaded() { tokenClient = google.accounts.oauth2.initTokenClient({ client_id: CLIENT_ID, scope: SCOPES, callback: '' }); gisInited = true; checkAuth(); }
  function checkAuth() { const t = localStorage.getItem('studio_cloud_token'); if(t && gapiInited) { const tk = JSON.parse(t); if(Date.now() < tk.expires_at) { gapi.client.setToken(tk); if(document.getElementById('studioCloudModal').style.display==='flex') showMainUI(); } } }

  function switchCloudMode(mode) {
    currentCloudMode = mode;
    document.getElementById('btn-mode-photo').classList.toggle('active', mode === 'photo');
    document.getElementById('btn-mode-file').classList.toggle('active', mode === 'file');
    document.getElementById('mode-icon-display').className = mode === 'photo' ? 'fa-solid fa-image' : 'fa-solid fa-file-invoice';
    document.getElementById('upload-instruction').innerText = mode === 'photo' ? 'Click to import Photos' : 'Click to import Files';
    document.getElementById('save-mode-text').innerText = mode === 'photo' ? 'Photos' : 'Files';
    document.getElementById('gallery-title').innerHTML = mode === 'photo' ? '<i class="fa-solid fa-images"></i> Photos Database' : '<i class="fa-solid fa-folder-open"></i> Files Database';
    const fi = document.getElementById('st-input-file');
    fi.accept = mode === 'photo' ? 'image/*' : '.pdf,.doc,.docx,.zip,.rar,.txt,.xls,.xlsx,.ppt,.pptx';
    document.getElementById('preview-container').style.display = 'none';
    fi.value = "";
    listCloudFiles();
  }

  function handleAuthClick() {
    tokenClient.callback = (resp) => {
        resp.expires_at = Date.now() + (resp.expires_in * 1000);
        localStorage.setItem('studio_cloud_token', JSON.stringify(resp));
        showMainUI();
    };
    tokenClient.requestAccessToken({prompt: 'consent'});
  }

  function showMainUI() {
    document.getElementById('cloud-auth-section').style.display = 'none';
    document.getElementById('cloud-main-ui').style.display = 'block';
    initHandlers();
    listCloudFiles();
  }

  function initHandlers() {
    const fi = document.getElementById('st-input-file');
    document.getElementById('drop-zone').onclick = () => fi.click();
    fi.onchange = () => { if(fi.files[0]) handlePreview(fi.files[0]); };
  }

  function handlePreview(file) {
    if (currentCloudMode === 'photo' && !file.type.startsWith('image/')) {
        triggerAlert("Error: Only Photos allowed in Photo Mode!");
        document.getElementById('st-input-file').value = "";
        return;
    }
    if (currentCloudMode === 'file' && file.type.startsWith('image/')) {
        triggerAlert("Error: Photos are not allowed in File Mode!");
        document.getElementById('st-input-file').value = "";
        return;
    }
    const container = document.getElementById('preview-container');
    const img = document.getElementById('preview-img');
    const icon = document.getElementById('preview-file-icon');
    const name = document.getElementById('preview-file-name');
    container.style.display = 'flex';
    name.innerText = file.name;
    if(file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => { img.src = e.target.result; img.style.display = 'block'; icon.style.display = 'none'; };
        reader.readAsDataURL(file);
    } else {
        img.style.display = 'none';
        icon.style.display = 'block';
        let ext = file.name.split('.').pop().toLowerCase();
        icon.innerHTML = `<i class="fa-solid fa-file-lines"></i>`;
    }
  }

  async function uploadToDrive() {
    const fileInput = document.getElementById('st-input-file');
    const name = document.getElementById('st-name').value.trim();
    const phone = document.getElementById('st-phone').value.trim();
    const address = document.getElementById('st-address').value.trim();
    const loader = document.getElementById('upload-loader');
    const saveBtn = document.getElementById('save-btn');
    if(!fileInput.files[0] || !name) { triggerAlert("Required: Name and File missing!"); return; }
    loader.style.display = 'block';
    saveBtn.disabled = true;
    const file = fileInput.files[0];
    const metadata = {
        name: `ST_${currentCloudMode.toUpperCase()}_${Date.now()}_${file.name}`,
        mimeType: file.type,
        properties: { 'mode': currentCloudMode, 'custName': name, 'custPhone': phone, 'custAddr': address }
    };
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    formData.append('file', file);
    try {
        const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: new Headers({ 'Authorization': 'Bearer ' + gapi.client.getToken().access_token }),
            body: formData
        });
        if(res.ok) {
            triggerAlert("Success: Saved to Cloud!");
            loader.style.display = 'none'; saveBtn.disabled = false;
            document.getElementById('st-name').value = ''; document.getElementById('st-phone').value = ''; document.getElementById('st-address').value = '';
            document.getElementById('preview-container').style.display = 'none'; fileInput.value = "";
            listCloudFiles();
        } else { throw new Error(); }
    } catch (e) { loader.style.display = 'none'; saveBtn.disabled = false; triggerAlert("Error: Upload failed!"); }
  }

  async function listCloudFiles() {
    const gallery = document.getElementById('cloud-gallery');
    gallery.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:20px; color:#4285F4;"><i class="fa-solid fa-spinner fa-spin"></i> Syncing...</div>';
    try {
        const resp = await gapi.client.drive.files.list({
            q: `name contains 'ST_${currentCloudMode.toUpperCase()}_'`,
            fields: 'files(id, name, thumbnailLink, mimeType, properties, webViewLink)',
            orderBy: 'createdTime desc'
        });
        const files = resp.result.files;
        gallery.innerHTML = '';
        if (files && files.length > 0) {
            files.forEach(file => {
                const cName = (file.properties?.custName || "N/A").replace(/'/g, "\\'");
                const cPhone = (file.properties?.custPhone || "N/A").replace(/'/g, "\\'");
                const cAddr = (file.properties?.custAddr || "No Address").replace(/'/g, "\\'");
                const isImg = file.mimeType.startsWith('image/');
                const thumb = file.thumbnailLink || "";
                let displayBox = isImg ? `<img src="${thumb.replace('s220', 's500')}" />` : `<i class="fa-solid fa-file-invoice" style="font-size:35px; color:#94a3b8;"></i>`;
                gallery.innerHTML += `
                    <div class='st-card'>
                        <div class='st-card-img-box' onclick="openPreview('${file.id}', '${isImg}', '${thumb}', '${file.webViewLink}', '${cName}')">
                            ${displayBox}
                        </div>
                        <div class='st-card-info'>
                            <b>${cName}</b>
                            <p><i class="fa-solid fa-phone" style="font-size:9px;"></i> ${cPhone}</p>
                            <p><i class="fa-solid fa-location-dot" style="font-size:9px;"></i> ${cAddr}</p>
                        </div>
                        <div class='st-card-actions'>
                            <button onclick='deleteFile("${file.id}", this)' class='st-btn-action btn-del'><i class="fa-solid fa-trash"></i> Delete</button>
                            <button onclick='downloadFile("${file.id}", "${file.name}")' class='st-btn-action btn-dl'><i class="fa-solid fa-download"></i> Download</button>
                        </div>
                    </div>`;
            });
        } else { gallery.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:30px; color:#94a3b8;">No records found.</p>'; }
    } catch (e) { gallery.innerHTML = '<p style="color:red; text-align:center; grid-column:1/-1;">Error loading database.</p>'; }
}

  function openPreview(id, isImg, thumb, webLink, name) {
    if (String(isImg) === 'true') {
        const overlay = document.getElementById('studioImgPreview');
        const img = document.getElementById('preview-full-img');
        const caption = document.getElementById('preview-caption');
        if (overlay && img) {
            if (thumb && thumb !== "" && thumb !== "undefined") {
                img.src = thumb.replace('s220', 's1000'); 
                img.style.display = 'block';
                caption.innerText = name;
                overlay.style.display = 'flex';
            } else { window.open(webLink, '_blank'); }
        }
    } else { window.open(webLink, '_blank'); }
  }

  async function downloadFile(id, name) {
    try {
        const res = await fetch(`https://www.googleapis.com/drive/v3/files/${id}?alt=media`, {
            headers: { 'Authorization': 'Bearer ' + gapi.client.getToken().access_token }
        });
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = name.split('_').pop(); a.click();
    } catch (e) { triggerAlert("Error: Download failed!"); }
  }

  function deleteFile(id, btn) {
    fileToDeleteId = id;
    elementToRemove = btn.closest('.st-card');
    triggerAlert("Are you sure? This record will be deleted forever.");
    const popupBtn = document.querySelector('#customPopup .popup-btn');
    if (popupBtn) popupBtn.onclick = confirmAndExecuteDelete;
  }

  async function confirmAndExecuteDelete() {
    if (fileToDeleteId) {
        try {
            await gapi.client.drive.files.delete({ fileId: fileToDeleteId });
            if (elementToRemove) elementToRemove.remove();
            if (typeof closePopup === 'function') closePopup();
        } catch (e) { triggerAlert("Error: Delete failed!"); } 
        finally {
            fileToDeleteId = null; elementToRemove = null;
            const popupBtn = document.querySelector('#customPopup .popup-btn');
            if (popupBtn && typeof closePopup === 'function') popupBtn.onclick = closePopup;
        }
    }
}

  function openStudioCloudModal() { document.getElementById('studioCloudModal').style.display='flex'; checkAuth(); switchCloudMode('photo'); }
  function closeStudioCloudModal() { document.getElementById('studioCloudModal').style.display='none'; }
  function handleSignoutClick() { 
    google.accounts.oauth2.revoke(gapi.client.getToken().access_token);
    gapi.client.setToken(null); localStorage.removeItem('studio_cloud_token');
    document.getElementById('cloud-auth-section').style.display='block';
    document.getElementById('cloud-main-ui').style.display='none';
  }
  function searchRecords() {
    const q = document.getElementById('st-search').value.toLowerCase();
    document.querySelectorAll('.st-card').forEach(c => { c.style.display = c.innerText.toLowerCase().includes(q) ? 'flex' : 'none'; });
  }
;

const aiPrompts = {
    male: "From any photo of any size or head position, create a passport-style front-facing headshot. The face shape, proportions, and features should not be altered in any way — not even slightly. Just adjust the head position so that the person is looking directly at the camera. Keep the natural face exactly as it is. Lighten the skin evenly all over to keep it realistic. Remove any acne, blemishes, or spots from the skin and maintain natural texture. Remove all shadows, harsh lights, or reflections to ensure even, balanced lighting. Keep the original clothing color but the clothing will look clean and new. Use a white background with no shadows. The photo should be high resolution, with the head occupying 70-80% of the frame, perfectly centered, and vertically aligned. Automatically crop the photo to standard passport size (2x2 inches / 600x600 px).",
    female: "From any photo of any size or head position, create a passport-style front-facing headshot. The face shape, proportions, and features should not be altered in any way — not even slightly. Just adjust the head position so that the person is looking directly at the camera. Keep the natural face exactly as it is. Lighten the skin evenly in all areas to keep it realistic. Remove any acne, blemishes, or spots from the skin and maintain natural texture. Remove all shadows, harsh lights, or reflections to ensure even, balanced lighting. Both ears should be fully visible. Keep the original clothing color but the clothing will be clean new. Use a white background with no shadows. The photo should be high resolution, with the head occupying 70-80% of the frame, perfectly centered, and vertically aligned. Automatically crop the photo to standard passport size (2x2 inches / 600x600 px).",
    hijab: "From any photo of any size or head position, create a passport-style front-facing headshot. The face shape, proportions, and features should not be altered in any way — not even slightly. Just adjust the head position so that the person is looking directly at the camera. Keep the natural face exactly as it is. Lighten the skin evenly all over to keep it realistic. Remove any acne, blemishes, or spots from the skin and maintain natural texture. Remove all shadows, harsh lights, or reflections to ensure even, balanced lighting. Keep the original clothing color but the clothing will look clean and new. Use a white background with no shadows. The photo should be high resolution, with the head occupying 70-80% of the frame, perfectly centered, and vertically aligned. Automatically crop the photo to standard passport size (2x2 inches / 600x600 px)."
};

const aiTranslations = {
    en: {
        title: "AI Passport Photo Lab",
        sub: "Click a card to auto-copy the prompt and open Google AI Studio instantly.",
        demoBtn1: "<i class='fa-solid fa-eye'></i> View Usage Method",
        demoBtn2: "<i class='fa-solid fa-eye'></i> View Demo Photos",
        male: "Male Passport Photo:",
        smale: "To automatically generate a natural passport photo meeting official standards.",
        female: "Female Passport Photo:",
        sfemale: "Creating a passport headshot photo from any photo, ears will be there.",
        hijab: "Hijab Passport Photo:",
        shijab: "Creating passport-perfect facial headshots from any photo wearing a hijab.",
        insHead: "🚀 How to Use & Guidelines:",
        insBody: "1. <b>Login:</b> Access AI Studio with your Google account. Connect your <b>Google Drive</b> if prompted for storage.<br/>" +
                 "2. <b>Select Type:</b> Click a photo category above (Prompt will auto-copy).<br/>" +
                 "3. <b>Paste:</b> In AI Studio, <b>Paste (Ctrl+V)</b> the prompt into the chat box.<br/>" +
                 "4. <b>Settings:</b> On the right sidebar, select <b>Aspect Ratio: 4:5</b>.<br/>" +
                 "5. <b>Upload:</b> Click the <b>'+' or Upload icon</b> below the box to add your photo.<br/>" +
                 "6. <b>Generate:</b> Click the <b>Run</b> button. Wait 15 seconds for your HD passport photo!"
    },
    bn: {
        title: "এআই পাসপোর্ট ফটো ল্যাব",
        sub: "বাটন ক্লিক করলে প্রম্পট অটোমেটিক কপি হয়ে গুগল এআই স্টুডিও ওপেন হবে।",
        demoBtn1: "<i class='fa-solid fa-eye'></i> ব্যবহার পদ্ধতি দেখুন",
        demoBtn2: "<i class='fa-solid fa-eye'></i> ডেমো ফটো দেখুন",
        male: "ছেলেদের পাসপোর্ট ছবি:",
        smale: "স্বয়ংক্রিয়ভাবে প্রাকৃতিক মুখের পাসপোর্ট ছবি তৈরি করা, যা অফিসিয়াল মান পূরণ করে।",
        female: "মেয়েদের পাসপোর্ট ছবি:",
        sfemale: "যেকোনো ছবি থেকে পাসপোর্ট-স্টাইলের নিখুঁত ফেসিয়াল হেডশট তৈরি করা, যেখানে কান দৃশ্যমান থাকবে।",
        hijab: "মেয়েদের হিজাব পাসপোর্ট ছবি:",
        shijab: "হিজাব পড়া যেকোনো ছবি থেকে পাসপোর্ট-স্টাইলের নিখুঁত ফেসিয়াল হেডশট তৈরি করা।",
        insHead: "🚀 ব্যবহার বিধি ও গাইডলাইন:",
        insBody: "১. <b>লগইন:</b> আপনার Google একাউন্ট দিয়ে AI Studio লগইন করুন। স্টোরেজের জন্য <b>Google Drive</b> কানেক্ট করুন।<br/>" +
                 "২. <b>ধরন নির্বাচন:</b> উপরের যেকোনো একটি ছবিতে ক্লিক করুন (প্রম্পট অটো-কপি হবে)।<br/>" +
                 "৩. <b>পেস্ট:</b> AI Studio ওপেন হলে ইনপুট বক্সে প্রম্পটটি <b>Paste (Ctrl+V)</b> করুন।<br/>" +
                 "৪. <b>রেশিও:</b> ডান পাশের সেটিংস থেকে <b>Aspect Ratio: 4:5</b> সিলেক্ট করুন।<br/>" +
                 "৫. <b>আপলোড:</b> ইনপুট বক্সের নিচে <b>Upload</b> আইকনে ক্লিক করে আপনার ছবিটি দিন।<br/>" +
                 "৬. <b>রান:</b> সবশেষে <b>Run</b> বাটনে ক্লিক করুন। মাত্র ১৫ সেকেন্ডে তৈরি হবে এইচডি পাসপোর্ট ছবি।"
    }
};

window.openAiPassportModal = function() {
    if (typeof setActiveMode === "function") setActiveMode("mode-ai-passport");
    document.getElementById("aiPassportModal").style.display = "flex";
    document.body.style.overflow = "hidden";
    switchAiLang("en"); 
};

window.closeAiPassportModal = function() {
    document.getElementById("aiPassportModal").style.display = "none";
    document.body.style.overflow = "auto";
};

window.switchAiLang = function(lang) {
    const modal = document.getElementById("aiPassportModal");
    const tabEn = document.getElementById("ai-tab-en");
    const tabBn = document.getElementById("ai-tab-bn");
    const btnContainer = document.getElementById("demo-btn-container");

    if (lang === "en") {
        tabEn.classList.add("active");
        tabBn.classList.remove("active");
        modal.classList.remove("lang-bn");
    } else {
        tabBn.classList.add("active");
        tabEn.classList.remove("active");
        modal.classList.add("lang-bn");
    }

    const t = aiTranslations[lang];
    document.getElementById("ai-title").innerHTML = '<i class="fa-solid fa-robot"></i> ' + t.title;
    document.getElementById("ai-sub").innerHTML = t.sub;

    // Injecting demo buttons inside the script to ensure they work on GitHub
    btnContainer.innerHTML = `
        <button class="ai-demo-trigger" onclick="window.showAiDemo(1)">${t.demoBtn1}</button>
        <button class="ai-demo-trigger" onclick="window.showAiDemo(2)">${t.demoBtn2}</button>
    `;

    document.getElementById("txt-male").innerText = t.male;
    document.getElementById("sub-male").innerText = t.smale;
    document.getElementById("txt-female").innerText = t.female;
    document.getElementById("sub-female").innerText = t.sfemale;
    document.getElementById("txt-hijab").innerText = t.hijab;
    document.getElementById("sub-hijab").innerText = t.shijab;
    document.getElementById("ins-head").innerText = t.insHead;
    document.getElementById("ins-body").innerHTML = t.insBody;
};

window.processAiPassport = function(type) {
    const promptText = aiPrompts[type];
    const el = document.createElement('textarea');
    el.value = promptText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    window.open("https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image", "_blank");
};

window.showAiDemo = function(num) {
    var box = document.getElementById("aiDemoBox" + num);
    if (box) {
        box.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
};

window.hideAiDemo = function(num) {
    var box = document.getElementById("aiDemoBox" + num);
    if (box) {
        box.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
;

window.openBnConverterModal=function(){setActiveMode('mode-bn-converter');document.getElementById("bnConverterModal").style.display="flex",document.body.style.overflow="hidden"},window.closeBnConverterModal=function(){document.getElementById("bnConverterModal").style.display="none",document.body.style.overflow="auto"};let bnTimer;window.processPhonetic=function(){clearTimeout(bnTimer);let e=document.getElementById("bn-input").value,t=document.getElementById("bn-output");if(!e.trim()){t.value="";return}bnTimer=setTimeout(async()=>{try{let n="https://inputtools.google.com/request?itc=bn-t-i0-und&num=1&cp=1&cs=1&ie=utf-8&oe=utf-8&text="+encodeURIComponent(e),l=await fetch(n),o=await l.json();if("SUCCESS"===o[0]){let i="",c=o[1];for(let r=0;r<c.length;r++){let a=c[r][0],s=c[r][1]&&c[r][1].length>0?c[r][1][0]:a;"."===a?i+="।":i+=s}t.value=i}}catch(u){console.error(u)}},250)},window.copyPhonetic=function(e){let t=document.getElementById("bn-output"),n=e.querySelector(".btn-label"),l=e.querySelector("i");if(!t||!t.value)return;let o=n.innerText,i=()=>{n.innerText="Copied!",e.classList.add("success-bg"),l&&(l.className="fa-solid fa-check"),setTimeout(()=>{n.innerText=o,e.classList.remove("success-bg"),l&&(l.className="fa-solid fa-copy")},2e3)};navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t.value).then(i):(t.select(),document.execCommand("copy"),i())},window.clearPhonetic=function(){document.getElementById("bn-input").value="",document.getElementById("bn-output").value="",document.getElementById("bn-input").focus()};
;

function openScannerModal(){document.getElementById("scannerModal").style.display="flex",document.body.style.overflow="hidden",resetScanner()}function closeScannerModal(){document.getElementById("scannerModal").style.display="none",document.body.style.overflow="auto",resetScanner(),hideThemeAlert()}function resetScanner(){let e=document.getElementById("qr-file-input");e&&(e.value="");let t=document.getElementById("scan-output");t&&(t.value=""),document.getElementById("scanner-result-box").style.display="none";let l=document.getElementById("upload-container");l.style.display="block",l.style.opacity="1";let n=document.getElementById("drop-zone");n.innerHTML=`
        <i class='fa-solid fa-cloud-arrow-up' style='font-size: 40px; color: #6366f1; margin-bottom: 15px;'></i>
        <p style='font-weight: 700; color: #1e293b; margin: 0;'>Click to Upload Image</p>
        <p style='font-size: 12px; color: #64748b; margin-top: 5px;'>Supports PNG, JPG, WEBP</p>
    `}async function scanUploadedFile(e){let t=e.target.files[0];if(!t)return;let l=document.getElementById("drop-zone"),n=document.getElementById("upload-container");n.style.opacity="0.7",l.innerHTML="<i class='fa-solid fa-circle-notch fa-spin' style='font-size:40px; color:#6366f1;'></i><p style='margin-top:10px; font-weight:600;'>Scanning... Please wait</p>";let o=new Html5Qrcode("qr-reader-hidden");try{let a=await o.scanFile(t,!0);document.getElementById("scan-output").value=a,document.getElementById("scanner-result-box").style.display="block",n.style.display="none"}catch(s){showThemeAlert("Could not find any QR code or Barcode. Please upload a clear image."),resetScanner()}}function showThemeAlert(e){document.getElementById("theme-alert-msg").innerText=e,document.getElementById("theme-alert-box").style.display="block"}function hideThemeAlert(){document.getElementById("theme-alert-box").style.display="none"}function copyScannerResult(e){let t=document.getElementById("scan-output"),l=document.getElementById("scan-copy-label"),n=e.querySelector("i");t.value&&navigator.clipboard.writeText(t.value).then(()=>{l.innerText="Copied!",e.style.background="#25D366",n&&(n.className="fa-solid fa-check"),setTimeout(()=>{l.innerText="Copy Result",e.style.background="#0f172a",n&&(n.className="fa-solid fa-copy")},2e3)}).catch(e=>{t.select(),document.execCommand("copy")})}
;

let curWedT = 1;

// Language specific texts for static elements and placeholders
const translations = {
    bn: {
        // UI elements
        mainTitle: "বিবাহ স্মরণিকা",
        labelLang: "ভাষা",
        labelReligion: "ধর্ম",
        labelTemplate: "টেমপ্লেট পছন্দ করুন:",
        groomPlaceholder: "বরের নাম",
        bridePlaceholder: "কনের নাম",
        uploadPhoto1: "Upload Photo 1",
        uploadPhoto2: "Upload Photo 2",
        datePlaceholder: "বিবাহ তারিখ",
        venuePlaceholder: "বিবাহ স্থান",
        msgPlaceholder: "স্মরণিকা বার্তা...",
        saveJpg: "JPG সেভ করুন",
        savePdf: "PDF সেভ করুন",

        // Card content
        cardTitle: "বিবাহ স্মরণিকা",
        andSeparator: "ও",
        datePrefix: "বিবাহ তারিখ: ",
        venuePrefix: "বিবাহ স্থান: ",
        
        // Religion specific texts
        islamRel: "বিসমিল্লাহির রহমানির রহিম",
        hinduRel: "ওঁ গণেশায় নমঃ",
        christianRel: "ঈশ্বর প্রেমস্বরূপ",
        buddhistRel: "জগতের সকল প্রাণী সুখী হোক", 
        othersRel: "", 
        
        // Default input values
        groomDefaultVal: "মোঃ ফয়জুল করিম",
        brideDefaultVal: "মোসাঃ কাজল রেখা",
        dateDefaultVal: "১০ই জুন, ২০১২ সাল",
        venueDefaultVal: "ঝাউতলা, চট্টগ্রাম, বাংলাদেশ।",
        msgDefaultVal: "আমাদের বিবাহিত জীবনের সুখ ও সমৃদ্ধির জন্য সকলের কাছে দোয়া প্রার্থী।"
    },
    en: {
        // UI elements
        mainTitle: "Wedding Memento",
        labelLang: "Language",
        labelReligion: "Religion",
        labelTemplate: "Choose Template:",
        groomPlaceholder: "Groom's Name",
        bridePlaceholder: "Bride's Name",
        uploadPhoto1: "Upload Photo 1",
        uploadPhoto2: "Upload Photo 2",
        datePlaceholder: "Wedding Date",
        venuePlaceholder: "Wedding Venue",
        msgPlaceholder: "Memento Message...",
        saveJpg: "SAVE JPG (HD)",
        savePdf: "SAVE PDF (HD)",

        // Card content
        cardTitle: "Wedding Memento",
        andSeparator: "&",
        datePrefix: "Wedding Date: ",
        venuePrefix: "Wedding Venue: ",
        
        // Religion specific texts
        islamRel: "In the name of Allah",
        hinduRel: "Om Ganeshay Namah",
        christianRel: "God is Love",
        buddhistRel: "May all beings be happy",
        othersRel: "", 
        
        // Default input values
        groomDefaultVal: "Md. Faizul Karim",
        brideDefaultVal: "Mst. Kajol Rekha",
        dateDefaultVal: "June 10, 2012",
        venueDefaultVal: "Jhautala, Chattogram, Bangladesh.",
        msgDefaultVal: "We seek everyone's prayers for our happy and prosperous married life."
    }
};

function openWeddingModal() {
    document.getElementById('weddingModal').style.display = 'flex';
    updateWedCard();
}

function closeWeddingModal() {
    document.getElementById('weddingModal').style.display = 'none';
    document.getElementById('wdm-lang').value = 'en'; 
    document.getElementById('wdm-rel').value = 'islam'; 
    const t = translations['en'];
    document.getElementById('in-groom').value = t.groomDefaultVal;
    document.getElementById('in-bride').value = t.brideDefaultVal;
    document.getElementById('in-date').value = t.dateDefaultVal;
    document.getElementById('in-venue').value = t.venueDefaultVal;
    document.getElementById('in-msg').value = t.msgDefaultVal;
    document.getElementById('pv-g').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4xqz238X7tAnCXP2Q8cy1D2HNqWODSe6QQqoALMPow4hvXALRyAswn7IkbImr6CoomoETvzwrzadwZVPGhZmYI6jD_zcJn4og3eH2CLLh3E8CgRtslvJqiJbMlw65TafJJNNWOCJ7JlMOGBvQMWJUU-Yv4ao2Jt_3x_OSV3BCs4VzgjZOR9aI9SbpX90/s1781/fyzal.jpeg';
    document.getElementById('pv-b').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNymKgEuEk43BCasxhyphenhyphen2WrAlXEuCOkhdPCRPyIglB4H33kt3Z0Myu0QhAlreWCN4icd-om-e0uiWsHt6iRwO6AGaRk29w4uOSvu2_wxdl-c0TKXh7Juj7U5SKbZq4doyg1tryMPrEERazhbMANEuYwPIg8V20bfhmyVPb_QM8kLS0viDqGgvwP0piE05g/s1184/kajol.webp';
    document.getElementById('up-g').value = "";
    document.getElementById('up-b').value = "";
    curWedT = 1;
    document.querySelectorAll('.wdm-t-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-temp-1').classList.add('active');
    document.getElementById('wdm-card-preview').className = 'wdm-t1';
    updateWedCard();
}

function setWedTemp(n, btn) {
    curWedT = n;
    document.querySelectorAll('.wdm-t-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('wdm-card-preview').className = 'wdm-t' + n;
}

function updateWedCard() {
    const lang = document.getElementById('wdm-lang').value;
    const rel = document.getElementById('wdm-rel').value;
    const t = translations[lang];

    document.getElementById('wdm-main-title').innerText = t.mainTitle;
    document.getElementById('label-lang').innerText = t.labelLang;
    document.getElementById('label-religion').innerText = t.labelReligion;
    document.getElementById('label-template').innerText = t.labelTemplate;
    document.getElementById('in-groom').placeholder = t.groomPlaceholder;
    document.getElementById('in-bride').placeholder = t.bridePlaceholder;
    document.getElementById('btn-upload-g').innerText = t.uploadPhoto1;
    document.getElementById('btn-upload-b').innerText = t.uploadPhoto2;
    document.getElementById('in-date').placeholder = t.datePlaceholder;
    document.getElementById('in-venue').placeholder = t.venuePlaceholder;
    document.getElementById('in-msg').placeholder = t.msgPlaceholder;
    
    document.querySelector('.actions button:nth-child(1)').innerText = t.saveJpg;
    document.querySelector('.actions button:nth-child(2)').innerText = t.savePdf;

    let relIcon = '';
    let relText = '';
    switch (rel) {
        case 'islam': relIcon = "☪"; relText = t.islamRel; break;
        case 'hindu': relIcon = "🕉"; relText = t.hinduRel; break;
        case 'christian': relIcon = "✝"; relText = t.christianRel; break;
        case 'buddhist': relIcon = "☸"; relText = t.buddhistRel; break;
        case 'others': relIcon = "❤"; relText = t.othersRel; break;
    }
    document.getElementById('pv-rel-icon').innerText = relIcon;
    document.getElementById('pv-rel-txt').innerText = relText;

    document.getElementById('pv-title').innerText = t.cardTitle;
    document.getElementById('pv-and').innerText = t.andSeparator;
    
    document.getElementById('pv-groom').innerText = document.getElementById('in-groom').value;
    document.getElementById('pv-bride').innerText = document.getElementById('in-bride').value;
    
    // নতুন কোড (ম্যানুয়ালি বসান)
document.getElementById('pv-date').innerHTML = '<b>' + t.datePrefix + '</b>' + document.getElementById('in-date').value;
document.getElementById('pv-venue').innerHTML = '<b>' + t.venuePrefix + '</b>' + document.getElementById('in-venue').value;
    document.getElementById('pv-msg').innerText = document.getElementById('in-msg').value;

    const currentGroomVal = document.getElementById('in-groom').value;
    const currentBrideVal = document.getElementById('in-bride').value;
    const currentMsgVal = document.getElementById('in-msg').value;
    const currentDateVal = document.getElementById('in-date').value;
    const currentVenueVal = document.getElementById('in-venue').value;
    const otherLang = lang === 'en' ? 'bn' : 'en';

    if (currentGroomVal === translations[otherLang].groomDefaultVal) document.getElementById('in-groom').value = t.groomDefaultVal;
    if (currentBrideVal === translations[otherLang].brideDefaultVal) document.getElementById('in-bride').value = t.brideDefaultVal;
    if (currentMsgVal === translations[otherLang].msgDefaultVal) document.getElementById('in-msg').value = t.msgDefaultVal;
    if (currentDateVal === translations[otherLang].dateDefaultVal) document.getElementById('in-date').value = t.dateDefaultVal;
    if (currentVenueVal === translations[otherLang].venueDefaultVal) document.getElementById('in-venue').value = t.venueDefaultVal;
}


function loadWedImg(input, id) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => { document.getElementById(id).src = e.target.result; };
        reader.readAsDataURL(input.files[0]);
    }
}

function saveWedJPG() {
    const card = document.getElementById('wdm-card-preview');
    html2canvas(card, { scale: 4, useCORS: true, logging: false }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'wedding-memento-hd.jpg';
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        link.click();
    });
}

function saveWedPDF() {
    const { jsPDF } = window.jspdf;
    const card = document.getElementById('wdm-card-preview');
    html2canvas(card, { scale: 4, useCORS: true }).then(canvas => {
        const img = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfW = pdf.internal.pageSize.getWidth();
        const pdfH = pdf.internal.pageSize.getHeight();
        pdf.addImage(img, 'JPEG', 0, 0, pdfW, pdfH);
        pdf.save('wedding-memento-hd.pdf');
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('wdm-lang').value = 'en';
    updateWedCard(); 
});
;

function triggerAlert(msg) {
    const popup = document.getElementById('customPopup');
    const msgEl = document.getElementById('popupMessage');
    if (popup && msgEl) {
        msgEl.innerText = msg;
        popup.classList.add('active');
    } else {
        alert(msg);
    }
}

function openWriterModal() {
    var modal = document.getElementById('writerModal');
    if (modal) {
        modal.style.display = 'flex';
        if (typeof setActiveMode === 'function') setActiveMode('mode-writer');
        
        const pagesList = document.getElementById('pages-list');
        if (pagesList.innerHTML.trim() === "") {
            addNewPage();
        }
    }
}

function closeWriterModal() {
    document.getElementById('writerModal').style.display = 'none';
}

function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

function applyFontSize(size) {
    document.execCommand('fontSize', false, size);
}

function addNewPage() {
    const pagesList = document.getElementById('pages-list');
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page-unit';
    pageDiv.innerHTML = `
        <button class="del-page-icon" onclick="removeThisPage(this)" title="Delete Page" type="button"><i class="fa-solid fa-xmark"></i></button>
        <div contenteditable="true" class="page-body" data-placeholder="Start your writing here in Bengali, English, any language, etc." spellcheck="false"></div>
    `;
    pagesList.appendChild(pageDiv);
    pageDiv.scrollIntoView({ behavior: 'smooth' });
}

function removeThisPage(btn) {
    const pages = document.querySelectorAll('.page-unit');
    if (pages.length > 1) {
        btn.parentElement.remove();
    } else {
        triggerAlert("There must be at least one page.");
    }
}

function clearWriter() {
    document.getElementById('pages-list').innerHTML = "";
    addNewPage();
}

function printWriterContent() {
    const pages = document.querySelectorAll('.page-body');
    let allHtml = "";
    let hasContent = false;
    
    pages.forEach((page) => {
        if(page.innerText.trim() !== "") {
            allHtml += `<div class="p-wrap">${page.innerHTML}</div>`;
            hasContent = true;
        }
    });

    if (!hasContent) {
        triggerAlert("Write something first.");
        return;
    }

    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
            <head>
                <title>A4_Document_Writer</title>
                <style>
                    @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
                    @page { size: A4; margin: 0; }
                    
                    /* গুরুত্বপূর্ণ: কালার এবং আন্ডারলাইন নিশ্চিত করার জন্য */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    body { margin: 0; padding: 0; background: #fff; }
                    
                    .p-wrap {
                        width: 210mm; 
                        min-height: 297mm;
                        padding: 20mm; 
                        margin: 0 auto;
                        font-family: 'SolaimanLipi', Arial, sans-serif;
                        font-size: 18px; 
                        line-height: 1.6;
                        color: #000; 
                        box-sizing: border-box;
                        word-wrap: break-word; 
                        text-align: left;
                        page-break-after: always;
                    }

                    /* --- আন্ডারলাইন ফিক্স করার কোড --- */
                    u, [style*="underline"] {
                        text-decoration: underline !important;
                        text-decoration-skip-ink: none !important; /* যুক্তবর্ণের নিচে দাগ কাটবে না */
                        text-underline-offset: 3px !important;    /* দাগটি একটু নিচে নামিয়ে দিবে যাতে স্পষ্ট বোঝা যায় */
                        text-decoration-thickness: 1px !important; /* দাগের পুরুত্ব নিশ্চিত করবে */
                    }

                    .p-wrap:last-child { page-break-after: auto; }
                </style>
            </head>
            <body>
                ${allHtml}
                <script>
                    window.onload = function() {
                        setTimeout(function(){
                            window.print();
                            window.close();
                        }, 500);
                    };
                <\/script>
            </body>
        </html>
    `);
    printWin.document.close();
}
;

let enhancedImgData = null;

function openEnhancerModal() {
    document.getElementById('enhancerModal').style.display = 'flex';
    if (typeof setActiveMode === 'function') setActiveMode('mode-ai-enhancer');
    initEnhancerEvents();
}

function closeEnhancerModal() {
    document.getElementById('enhancerModal').style.display = 'none';
}

function initEnhancerEvents() {
    const input = document.getElementById('enhancer-input');
    input.onchange = function(e) {
        if (e.target.files[0]) processEnhance(e.target.files[0]);
    };

    const slider = document.getElementById('comparison-slider');
    const afterBox = document.getElementById('img-after-box');
    const sliderBtn = document.querySelector('.slider-button');
    const sliderBar = document.querySelector('.slider-bar');

    let isDragging = false;

    const startDragging = (e) => {
        isDragging = true;
        sliderBtn.style.cursor = 'grabbing';
        // সিলেকশন বন্ধ করার জন্য
        if (e.cancelable) e.preventDefault(); 
    };

    const stopDragging = () => {
        isDragging = false;
    };

    const moveSlider = (e) => {
        if (!isDragging) return; 

        // ড্র্যাগ করার সময় নীল সিলেকশন বা স্ক্রল হওয়া বন্ধ করবে
        if (e.cancelable) e.preventDefault();

        let rect = slider.getBoundingClientRect();
        let pageX = (e.touches) ? e.touches[0].pageX : e.pageX;
        let x = pageX - rect.left - window.pageXOffset;

        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        let percent = (x / rect.width) * 100;
        afterBox.style.width = percent + "%";
        sliderBtn.style.left = percent + "%";
        sliderBar.style.left = percent + "%";
    };

    // মাউস ইভেন্টস
    sliderBtn.addEventListener('mousedown', startDragging);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mousemove', moveSlider);

    // টাচ ইভেন্টস (মোবাইলের জন্য)
    sliderBtn.addEventListener('touchstart', startDragging, {passive: false});
    window.addEventListener('touchend', stopDragging);
    window.addEventListener('touchmove', moveSlider, {passive: false});
}

/* --- High-Compatibility AI Enhancer Logic --- */
async function processEnhance(file) {
    const uploadBox = document.getElementById('enhancer-upload-box');
    const loader = document.getElementById('enhancer-loader');
    const resultView = document.getElementById('enhancer-result-view');
    
    uploadBox.style.display = 'none';
    loader.style.display = 'block';

    const reader = new FileReader();
    reader.onload = async (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
            document.getElementById('img-before').src = img.src;
            
            setTimeout(() => {
                let src, dst, final;
                try {
                    // ১. ইমেজ রিড করা
                    src = cv.imread(img);
                    
                    // ২. ইমেজ টাইপ চেক ও নর্মালাইজেশন (এরর এড়াতে এটি সবচেয়ে গুরুত্বপূর্ণ)
                    // যদি ছবিতে ট্রান্সপারেন্সি থাকে তবে তা সরিয়ে ৩-চ্যানেল RGB করা হচ্ছে
                    if (src.channels() === 4) {
                        cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
                    }
                    
                    dst = new cv.Mat();
                    
                    // ৩. কালার এনহ্যান্সমেন্ট (Brightness & Contrast)
                    // alpha: 1.1 (হালকা কন্ট্রাস্ট), beta: 8 (হালকা উজ্জ্বলতা)
                    src.convertTo(dst, -1, 1.1, 8);

                    // ৪. এডভান্সড শার্পেনিং (Sharpening Filter)
                    // এটি ঝাপসা ডিটেইলস ক্লিয়ার করবে
                    let kernel = cv.matFromArray(3, 3, cv.CV_32F, [
                        0, -1, 0,
                        -1, 5, -1,
                        0, -1, 0
                    ]);
                    cv.filter2D(dst, dst, -1, kernel);
                    kernel.delete();

                    // ৫. বিল্যাটারাল নয়েজ রিডাকশন (Bilateral Filter)
                    // এটি স্কিন বা পিক্সেল স্মুথ করবে কিন্তু লেখা/চোখ ঝাপসা করবে না
                    final = new cv.Mat();
                    try {
                        cv.bilateralFilter(dst, final, 5, 50, 50);
                    } catch(e) {
                        // যদি বিল্যাটারাল ফিল্টার ফেল করে তবে শার্পেন ইমেজটিই নিবে
                        final = dst.clone();
                    }

                    // ৬. আউটপুট ক্যানভাসে দেখানো
                    cv.imshow('temp-canvas', final);
                    const enhancedUrl = document.getElementById('temp-canvas').toDataURL('image/jpeg', 0.92);
                    
                    document.getElementById('img-after').src = enhancedUrl;
                    enhancedImgData = enhancedUrl;

                    loader.style.display = 'none';
                    resultView.style.display = 'block';
                    
                    // মেমোরি ক্লিয়ার (Browser Hang হওয়া রোধ করবে)
                    src.delete(); dst.delete(); final.delete();

                } catch (err) {
                    console.error("OpenCV processing skipped to prevent crash.");
                    // যদি OpenCV সম্পূর্ণ ফেল করে, তবে অরিজিনাল ইমেজটিই আফটার বক্সে দেখাবে
                    document.getElementById('img-after').src = img.src;
                    enhancedImgData = img.src;
                    loader.style.display = 'none';
                    resultView.style.display = 'block';
                    if(src) src.delete(); if(dst) dst.delete();
                }
            }, 300);
        };
    };
    reader.readAsDataURL(file);
}

function downloadEnhancedImage() {
    if (!enhancedImgData) return;
    const link = document.createElement('a');
    link.href = enhancedImgData;
    link.download = 'Enhanced_by_IDScannerPro.jpg';
    link.click();
    if (typeof triggerAlert === 'function') triggerAlert("Success: Photo saved successfully!");
}

function resetEnhancer() {
    document.getElementById('enhancer-upload-box').style.display = 'block';
    document.getElementById('enhancer-result-view').style.display = 'none';
    document.getElementById('enhancer-input').value = "";
    document.getElementById('preview-img-container').style.display = 'none';
}
;

document.addEventListener('DOMContentLoaded', function() {
    const favContainer = document.getElementById('fav-container');
    const favSection = document.getElementById('fav-tools-section');
    const favSep = document.getElementById('fav-sep');

    // ১. টুল বাটনগুলোতে স্টারের আইকন যোগ করা (যদি বাটন থাকে)
    document.querySelectorAll('.mode-card-btn').forEach(btn => {
        const toolId = btn.id;
        if (!toolId) return;
        
        // ডুপ্লিকেট স্টার প্রতিরোধ করতে চেক
        if (btn.querySelector('.fav-star-btn')) return;

        const star = document.createElement('i');
        star.className = 'fa-solid fa-star fav-star-btn';
        star.setAttribute('title', 'Add to Favorites');
        star.onclick = function(e) {
            e.stopPropagation();
            toggleFavorite(toolId);
        };
        btn.style.position = 'relative';
        btn.appendChild(star);
    });

    // ২. ফেভারিট লিস্ট রেন্ডার করার ফাংশন
    function renderFavorites() {
        // ফিক্স: যদি favContainer না থাকে (যেমন ব্লগ পেজে), তবে এখানেই থেমে যাও
        if (!favContainer) return;

        const favs = JSON.parse(localStorage.getItem('site_favs')) || [];
        favContainer.innerHTML = '';
        
        document.querySelectorAll('.fav-star-btn').forEach(s => s.classList.remove('is-fav'));

        if (favs.length > 0) {
            if (favSection) favSection.style.display = 'block';
            if (favSep) favSep.style.display = 'block';
            
            favs.forEach(id => {
                const originalBtn = document.getElementById(id);
                if (originalBtn) {
                    const starInOriginal = originalBtn.querySelector('.fav-star-btn');
                    if (starInOriginal) starInOriginal.classList.add('is-fav');
                    
                    const clone = originalBtn.cloneNode(true);
                    clone.classList.remove('active');
                    clone.onclick = originalBtn.onclick;
                    
                    const cloneStar = clone.querySelector('.fav-star-btn');
                    if (cloneStar) {
                        cloneStar.onclick = (e) => {
                            e.stopPropagation();
                            toggleFavorite(id);
                        };
                    }
                    favContainer.appendChild(clone);
                }
            });
        } else {
            if (favSection) favSection.style.display = 'none';
            if (favSep) favSep.style.display = 'none';
        }
    }

    // ৩. ফেভারিট টগল করার ফাংশন
    window.toggleFavorite = function(id) {
        let favs = JSON.parse(localStorage.getItem('site_favs')) || [];
        if (favs.includes(id)) {
            favs = favs.filter(item => item !== id);
        } else {
            favs.push(id);
        }
        localStorage.setItem('site_favs', JSON.stringify(favs));
        renderFavorites();
    };

    // প্রথমবার লোড হওয়ার সময় রান করা
    renderFavorites();
});
;

function openStampModal() {
    var modal = document.getElementById('stampModal');
    if (modal) {
        modal.style.display = 'flex';
        if (typeof setActiveMode === 'function') setActiveMode('mode-stamp');
        const list = document.getElementById('stamp-pages-list');
        if (list.innerHTML.trim() === "") addNewStampPage();
    }
}

function closeStampModal() { document.getElementById('stampModal').style.display = 'none'; }

function execCmd(command, value = null) { document.execCommand(command, false, value); }

// সব পাতার মার্জিন একসাথে পরিবর্তন করার ফাংশন
function updateAllStampMargins(val) {
    const allPageBodies = document.querySelectorAll('.stamp-body');
    allPageBodies.forEach(body => {
        body.style.paddingTop = val + 'px';
    });
    document.getElementById('margin-val').innerText = (val/100).toFixed(1) + " Inch";
}

function addNewStampPage() {
    const list = document.getElementById('stamp-pages-list');
    const pageDiv = document.createElement('div');
    pageDiv.className = 'stamp-page-unit';
    
    // বর্তমান স্লাইডারের ভ্যালু নেওয়া
    const currentVal = document.getElementById('stamp-margin-slider').value;
    
    pageDiv.innerHTML = `
        <button class="del-page-icon" onclick="removeThisStampPage(this)" style="position:absolute; top:10px; right:10px; background:#ef4444; color:#fff; border:none; border-radius:50%; width:30px; height:30px; cursor:pointer; z-index:10;"><i class="fa-solid fa-xmark"></i></button>
        <div contenteditable="true" class="stamp-body" style="padding-top: ${currentVal}px" spellcheck="false"></div>
    `;
    list.appendChild(pageDiv);
    pageDiv.scrollIntoView({ behavior: 'smooth' });
}

function removeThisStampPage(btn) {
    const pages = document.querySelectorAll('.stamp-page-unit');
    if (pages.length > 1) {
        btn.parentElement.remove();
    } else {
        if (typeof triggerAlert === 'function') triggerAlert("At least one page is required.");
    }
}

function clearStampWriter() {
    document.getElementById('stamp-pages-list').innerHTML = "";
    addNewStampPage();
}

function printStampContent() {
    const pages = document.querySelectorAll('.stamp-page-unit');
    let allHtml = "";
    const currentMargin = document.getElementById('stamp-margin-slider').value;

    pages.forEach((page) => {
        const content = page.querySelector('.stamp-body').innerHTML;
        // সব পেজের জন্য একই মার্জিন ব্যবহার করা হয়েছে
        allHtml += `<div class="print-page" style="padding-top: ${currentMargin}px">${content}</div>`;
    });

    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
            <head>
                <title>Legal_Document_Print</title>
                <style>
                    @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
                    @page { size: 216mm 345mm; margin: 0; }
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    body { margin: 0; padding: 0; background: #fff; }
                    .print-page {
                        width: 215mm; height: 345mm;
                        padding: 20mm; margin: 0 auto;
                        font-family: 'SolaimanLipi', Arial, sans-serif;
                        font-size: 19px; line-height: 1.8;
                        color: #000; box-sizing: border-box;
                        word-wrap: break-word; text-align: justify;
                        page-break-after: always;
                        background: none !important;
                    }
                    u { text-decoration: underline !important; text-underline-offset: 4px; }
                    b, strong { font-weight: bold !important; }
                </style>
            </head>
            <body>
                ${allHtml}
                <script>
                    window.onload = function() {
                        setTimeout(() => { window.print(); window.close(); }, 500);
                    };
                <\/script>
            </body>
        </html>
    `);
    printWin.document.close();
}
;

function openSheetModal() {
    var modal = document.getElementById('sheetModal');
    if (modal) {
        modal.style.display = 'flex';
        if (typeof setActiveMode === 'function') setActiveMode('mode-sheet');
        setTimeout(initResizers, 100);
    }
}

function closeSheetModal() {
    document.getElementById('sheetModal').style.display = 'none';
}

function execCmd(command, value = null) {
    // জাস্টিফাই ফুল কমান্ডটি টেবিলের জন্য ফিক্সড করা হলো
    if (command === "justifyFull") {
        document.execCommand("justifyFull", false, value);
    } else {
        document.execCommand(command, false, value);
    }
    updateToolbarUI();
}

function autoSerialToggle() {
    const table = document.getElementById('editable-table');
    const rows = table.querySelectorAll('tr');
    const isHidden = rows[0].cells[0].classList.contains('hide-col');

    rows.forEach((row, index) => {
        const cell = row.cells[0];
        if (isHidden) {
            cell.classList.remove('hide-col');
            if (index > 0) cell.innerText = index;
        } else {
            cell.classList.add('hide-col');
        }
    });
}

function updateSheetLayout() {
    const size = document.getElementById('sheet-page-size').value;
    const page = document.getElementById('main-sheet-page');
    page.style.height = "auto"; 
    if (size === 'legal') {
        page.style.width = "216mm";
        page.style.minHeight = "345mm";
    } else {
        page.style.width = "210mm";
        page.style.minHeight = "297mm";
    }
}

function addRow() {
    const tableBody = document.getElementById('table-body');
    const rows = document.querySelectorAll('#editable-table tr');
    const colCount = rows[0].cells.length;
    const isSlHidden = rows[0].cells[0].classList.contains('hide-col');

    const newRow = document.createElement('tr');
    for (let i = 0; i < colCount; i++) {
        const cell = document.createElement('td');
        cell.contentEditable = "true";
        cell.style.fontFamily = "'SolaimanLipi', sans-serif";
        if (i === 0 && isSlHidden) cell.classList.add('hide-col');
        newRow.appendChild(cell);
    }
    tableBody.appendChild(newRow);
    
    if (!isSlHidden) {
        const allRows = document.querySelectorAll('#table-body tr');
        allRows.forEach((r, idx) => { r.cells[0].innerText = idx + 1; });
    }
}

function deleteRow() {
    const rows = document.querySelectorAll('#table-body tr');
    if (rows.length > 1) rows[rows.length - 1].remove();
}

function addColumn() {
    const table = document.getElementById('editable-table');
    const rows = table.querySelectorAll('tr');
    
    rows.forEach((row, index) => {
        const cell = document.createElement(index === 0 ? 'th' : 'td');
        cell.contentEditable = "true";
        cell.style.fontFamily = "'SolaimanLipi', sans-serif";
        
        // এটি নতুন যোগ করা হলো: নিশ্চিত করবে লেখা সবসময় সেন্টারে থাকবে
        cell.style.textAlign = "center"; 
        cell.style.verticalAlign = "middle";

        if (index === 0) {
            cell.innerHTML = "New"; // ডিফল্ট টেক্সট (ঐচ্ছিক)
        }
        
        row.appendChild(cell);
    });
    
    // নতুন কলামের জন্য রিসাইজার হ্যান্ডেল বসানো
    initResizers();
}

function deleteColumn() {
    const table = document.getElementById('editable-table');
    const rows = table.querySelectorAll('tr');
    if (rows[0].cells.length > 1) {
        rows.forEach(row => row.deleteCell(-1));
    }
}

function initResizers() {
    const table = document.getElementById('editable-table');
    const headerRow = table.querySelector('thead tr');
    if(!headerRow) return;
    const cols = headerRow.querySelectorAll('th');
    
    cols.forEach(col => {
        if (!col.querySelector('.resizer')) {
            const resizer = document.createElement('div');
            resizer.className = 'resizer';
            col.appendChild(resizer);
            
            let x = 0;
            let w = 0;
            const onMouseMove = (e) => {
                const dx = e.clientX - x;
                col.style.width = `${w + dx}px`;
            };
            const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };
            resizer.addEventListener('mousedown', (e) => {
                x = e.clientX;
                const styles = window.getComputedStyle(col);
                w = parseInt(styles.width, 10);
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            });
        }
    });
}

function resetTable() {
    document.querySelector('.sheet-header-box').innerHTML = "";
    document.querySelector('.sheet-sub-header-box').innerHTML = "";
    document.querySelector('.sheet-footer-box').innerHTML = "";
    
    const table = document.getElementById('editable-table');
    table.style.width = "100%"; 
    
    const tableHead = table.querySelector('thead');
    tableHead.innerHTML = `<tr><th class='sl-column' contenteditable='true' style='width: 50px;'>SL</th><th contenteditable='true'>Item Description</th><th contenteditable='true'>Qty</th><th contenteditable='true'>Price</th><th contenteditable='true'>Total</th></tr>`;
    
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = `<tr><td class='sl-column' contenteditable='true'>1</td><td contenteditable='true'></td><td contenteditable='true'></td><td contenteditable='true'></td><td contenteditable='true'></td></tr>`;
    
    document.querySelectorAll('.sl-column').forEach(cell => cell.classList.remove('hide-col'));
    document.getElementById('sheet-page-size').value = "a4";
    updateSheetLayout();
    
    setTimeout(initResizers, 100);
    const scrollArea = document.getElementById('sheet-scroll-area');
    if (scrollArea) scrollArea.scrollTop = 0;
}

// টুলবার UI সিঙ্ক লজিক - আপনার চাহিদা অনুযায়ী আপডেট করা হয়েছে
function updateToolbarUI() {
    // ১. ফন্ট সাইজ ডিটেকশন ও সিঙ্ক
    const fontSize = document.queryCommandValue("fontSize");
    const sizeSelector = document.getElementById('sheet-font-size');
    if (sizeSelector && fontSize) {
        sizeSelector.value = fontSize; 
    }

    // ২. টেক্সট কালার ডিটেকশন ও সিঙ্ক
    const foreColor = document.queryCommandValue("foreColor");
    const fontColorInput = document.getElementById('sheet-font-color');
    if (fontColorInput && foreColor) {
        fontColorInput.value = rgbToHex(foreColor);
    }

    // ৩. হাইলাইট কালার ডিটেকশন ও সিঙ্ক
    const bgColor = document.queryCommandValue("hiliteColor");
    const bgColorInput = document.getElementById('sheet-bg-color');
    if (bgColorInput && bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
        bgColorInput.value = rgbToHex(bgColor);
    }
}

// RGB থেকে HEX রূপান্তর ফাংশন
function rgbToHex(rgb) {
    if (!rgb || rgb.indexOf("rgb") === -1) return rgb.startsWith('#') ? rgb : "#000000";
    const parts = rgb.match(/\d+/g);
    const r = parseInt(parts[0]).toString(16).padStart(2, '0');
    const g = parseInt(parts[1]).toString(16).padStart(2, '0');
    const b = parseInt(parts[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

// সিলেকশন চেঞ্জ লিসেনার - এটিই আপনার ম্যাজিক লজিক
document.addEventListener('selectionchange', () => {
    const modal = document.getElementById('sheetModal');
    if (modal && modal.style.display === 'flex') {
        updateToolbarUI();
    }
});

/* --- ডাইনামিক ফাইলনাম সহ প্রিন্ট ফাংশন --- */
function printSheetContent() {
    const header = document.querySelector('.sheet-header-box').innerHTML;
    const subHeader = document.querySelector('.sheet-sub-header-box').innerHTML;
    const tableHtml = document.getElementById('editable-table').outerHTML;
    const footer = document.querySelector('.sheet-footer-box').innerHTML;
    
    const size = document.getElementById('sheet-page-size').value;
    const pageDim = (size === 'legal') ? '216mm 345mm' : 'A4';

    // --- ফাইলনাম কাউন্টার লজিক শুরু ---
    // ব্রাউজারে আগে কোনো নাম্বার সেভ আছে কি না চেক করা, না থাকলে ০ থেকে শুরু
    let currentNum = localStorage.getItem('table_sheet_count') || 0;
    currentNum = parseInt(currentNum) + 1; // নাম্বার ১ বাড়ানো
    localStorage.setItem('table_sheet_count', currentNum); // নতুন নাম্বার সেভ করা

    // আপনার চাহিদা অনুযায়ী ফাইল নাম তৈরি
    const customFileName = `Table-Sheet-www.idcardscannerpro.com-${currentNum}`;
    // --- ফাইলনাম কাউন্টার লজিক শেষ ---

    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
            <head>
                <!-- এখানে ফাইল নাম সেট করা হলো যা পিডিএফ সেভ করার সময় দেখাবে -->
                <title>${customFileName}</title>
                <style>
                    @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
                    @page { size: ${pageDim}; margin: 15mm; }
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    body { 
                        font-family: 'SolaimanLipi', Arial, sans-serif !important; 
                        background: #fff; margin: 0; padding: 0; text-align: justify;
                    }
                    .p-header { font-size: 24px; font-weight: bold; text-align: center; margin-bottom: 5px; font-family: 'SolaimanLipi' !important; }
                    .p-sub { font-size: 16px; margin-bottom: 20px; text-align: left; font-family: 'SolaimanLipi' !important; }
                    table { width: 100%; border-collapse: collapse; font-family: 'SolaimanLipi' !important; page-break-inside: auto; }
                    tr { page-break-inside: avoid; page-break-after: auto; }
                    thead { display: table-header-group; }
                    th, td { border: 1px solid #000; padding: 8px; text-align: center; font-size: 14px; word-wrap: break-word; }
                    th { background: #f1f5f9 !important; }
                    .p-footer { margin-top: 30px; font-size: 14px; font-family: 'SolaimanLipi' !important; }
                    .hide-col, .resizer { display: none !important; }
                    u { text-decoration: underline !important; text-underline-offset: 3px; }
                </style>
            </head>
            <body>
                <div class="p-header">${header}</div>
                <div class="p-sub">${subHeader}</div>
                ${tableHtml}
                <div class="p-footer">${footer}</div>
                <script>
                    window.onload = function() { 
                        setTimeout(() => { window.print(); window.close(); }, 500); 
                    };
                <\/script>
            </body>
        </html>
    `);
    printWin.document.close();
}
;

let phCurrentLang = "en";
let phCurrentCat = "All";

const promptData = [
    // --- HAIR (চুল) --- 11 Prompts
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Fix Messy Hair", title_bn: "এলোমেলো চুল ঠিক করা", prompt: "Tidy up messy hair, fix flyaways, and make the hairstyle look neat and professional." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Add Hair to Bald Head", title_bn: "টাক মাথায় চুল যুক্ত করা", prompt: "Add natural-looking dense hair to the bald head, matching the existing hair texture and color." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Black Hair Color", title_bn: "চুলের রঙ কালো করা", prompt: "Change hair color to a natural black." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Brown Hair Style", title_bn: "চুলের রঙ খয়েরি করা", prompt: "Change hair color to a professional warm chocolate brown." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Remove Hair from Forehead", title_bn: "কপাল থেকে চুল সরানো", prompt: "Remove stray hairs from the forehead, creating a clean and neat hairline." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Increase Hair Volume", title_bn: "চুল ঘন করা", prompt: "Add more volume and thickness to the hair naturally without changing the style." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Comb Hair Side", title_bn: "চুল এক সাইডে আঁচড়ানো", prompt: "Redesign the hair to be neatly combed and partitioned to the side professionally." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Straighten Hair", title_bn: "চুল স্ট্রেট করা", prompt: "Make the curly or wavy hair perfectly straight, smooth and silky." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Fix Receding Hairline", title_bn: "সামনের চুল ভরাট করা", prompt: "Lower the hairline and fill in thin spots at the temples for a youthful look." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Wet Hair Look", title_bn: "চুল ভেজা ভাব দেওয়া", prompt: "Give the hair a fresh, slightly wet and shiny gelled appearance." },
    { cat_en: "Hair", cat_bn: "চুল", title_en: "Add Buzz Cut", title_bn: "ছোট চুল বা বাজ কাট", prompt: "Change the hairstyle to a very short, clean and professional buzz cut." },

    // --- EYES (চোখ) --- 11 Prompts
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Remove Glasses", title_bn: "চশমা সরানো", prompt: "Remove eyeglasses and digitally reconstruct the eyes and surrounding area naturally." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Remove Red Eyes", title_bn: "চোখের লাল ভাব দূর করা", prompt: "Remove the red-eye effect completely from the photograph." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Open Eyes Naturally", title_bn: "চোখ খোলা ও স্বাভাবিক করা", prompt: "Ensure both eyes are fully open, bright, and looking directly at the camera. Correct any lazy eye." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Blue Eye Color", title_bn: "চোখের মণি নীল করা", prompt: "Change the iris color to a realistic deep blue." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Add Thick Eyebrows", title_bn: "ভ্রু ঘন করা", prompt: "Make the eyebrows look thicker, darker, and more defined." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Remove Dark Circles", title_bn: "চোখের নিচের কালো দাগ মোছা", prompt: "Smooth the skin under the eyes and remove any dark circles or puffiness." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Add Eye Makeup", title_bn: "চোখে হালকা মেকআপ দেওয়া", prompt: "Apply subtle eyeliner and mascara to make the eyes look sharp and professional." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Fix Squinting", title_bn: "চোখ বড় ও উজ্জ্বল করা", prompt: "Correct squinting eyes to look relaxed, wide open, and clearly focused." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Sharpen Eye Detail", title_bn: "চোখের মণি উজ্জ্বল করা", prompt: "Enhance the details of the iris and catchlight in the eyes for a professional look." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Remove Crow's Feet", title_bn: "চোখের ধারের বলিরেখা মোছা", prompt: "Remove fine lines and wrinkles around the corners of the eyes." },
    { cat_en: "Eyes", cat_bn: "চোখ", title_en: "Hazel Iris", title_bn: "চোখের মণি হেজেল করা", prompt: "Change eye color to a beautiful and natural hazel brown." },

    // --- BEARD (দাড়ি ও গোঁফ) --- 11 Prompts
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Clean Shave", title_bn: "মুখ ক্লিন শেভ করা", prompt: "Make the face completely clean-shaven, remove all facial hair smoothly." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Add Full Beard", title_bn: "দাড়ি বাড়িয়ে দেওয়া", prompt: "Add a full, thick, well-groomed professional beard to the chin and cheeks." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Reduce Beard", title_bn: "দাড়ি কমিয়ে দেওয়া", prompt: "Reduce the thick beard to a light, well-groomed stubble." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Shape Beard Line", title_bn: "দাড়ির লাইন ঠিক করা", prompt: "Trim the edges of the beard for a sharp, clean neck and cheek line." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Add French Cut", title_bn: "ফ্রেঞ্চ কাট দাড়ি দেওয়া", prompt: "Design a neat and symmetrical French cut beard style." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Thick Mustache", title_bn: "গোঁফ ঘন করা", prompt: "Make the mustache appear dense, dark, and perfectly styled." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Remove Mustache Only", title_bn: "শুধুমাত্র গোঁফ কাটা", prompt: "Remove the mustache while keeping the beard as it is." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Fix Patchy Beard", title_bn: "ফাঁকা দাড়ি ভরাট করা", prompt: "Fill in patchy or thin areas of the beard to make it look uniform and dense." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Grey to Black Beard", title_bn: "পাকা দাড়ি কালো করা", prompt: "Color all white or grey facial hair to a natural dark black." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Add Goatee Style", title_bn: "গোটি (Goatee) স্টাইল করা", prompt: "Add a stylish goatee beard while keeping the rest of the face clean." },
    { cat_en: "Beard", cat_bn: "দাড়ি ও গোঁফ", title_en: "Handlebar Mustache", title_bn: "রাজকীয় গোঁফ যুক্ত করা", prompt: "Add a thick handlebar mustache with curled ends for a classic look." },

    // --- TEETH & MOUTH (দাত ও মুখ) --- 10 Prompts
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Close Mouth", title_bn: "মুখটি বন্ধ ও দাত না দেখা", prompt: "Ensure the mouth is naturally closed, not showing any teeth." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Teeth Whitening", title_bn: "দাত সাদা করা", prompt: "Whiten the teeth naturally and remove any yellow stains." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Gentle Smile", title_bn: "দাত না দেখা ও হালকা হাসি", prompt: "Change the expression to a gentle, closed-mouth smile." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Straighten Teeth", title_bn: "আঁকাবাঁকা দাত সোজা করা", prompt: "Digitally align and straighten the teeth for a perfect smile." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Fix Missing Tooth", title_bn: "ফাঁকা দাত ভরাট করা", prompt: "Fill in gaps between teeth or add a missing tooth naturally." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Natural Expression", title_bn: "মুখ বন্ধ রেখে স্বাভাবিক ছবি", prompt: "Create a neutral facial expression with a closed mouth." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Add Dimples", title_bn: "গালে টোল যুক্ত করা", prompt: "Add subtle, natural-looking dimples to the cheeks when smiling." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Lip Color Correction", title_bn: "ঠোঁটের রঙ স্বাভাবিক করা", prompt: "Correct the lip color to a natural healthy pink or coral tone." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Reduce Lip Swelling", title_bn: "ঠোঁট পাতলা করা", prompt: "Subtly reduce the thickness of the lips for a more balanced facial look." },
    { cat_en: "Teeth", cat_bn: "দাত", title_en: "Fix Chapped Lips", title_bn: "ঠোঁট মসৃণ করা", prompt: "Smooth the texture of the lips to remove dryness and cracks." },

    // --- CLOTHES (পোশাক) --- 11 Prompts
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Clothing is new", title_bn: "পোশাক নতুন করা", prompt: "The clothes will be new and clean." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Professional Suit", title_bn: "প্রফেশনাল স্যুট", prompt: "Dress the person in a formal grey business suit." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Add Professional Tie", title_bn: "টাই যুক্ত করা", prompt: "Add a professional red silk tie, neatly tied under the collar." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Wear Business Suit", title_bn: "স্যুট বা কোট পরানো", prompt: "Dress the person in a professional dark navy blue business suit with a white shirt and a tie." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Change to White Shirt", title_bn: "শার্ট পরিয়ে দেওয়া", prompt: "Change the current attire to a formal white collared shirt, fully buttoned." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Add Black Blazer", title_bn: "কালো ব্লেজার পরানো", prompt: "Add a well-fitted formal black blazer over the existing shirt." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Formal Saree", title_bn: "শাড়ি পরিয়ে দেওয়া", prompt: "Dress the woman in a traditional formal silk saree with elegant drapes." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Doctor's Apron", title_bn: "ডাক্তারের অ্যাপ্রন পরানো", prompt: "Dress the person in a professional white doctor's lab coat with a stethoscope." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Remove Wrinkles", title_bn: "পোশাকের ভাঁজ কমানো", prompt: "Smooth out all wrinkles and creases from the current clothing for a crisp look." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Change Clothes Color", title_bn: "পোশাকের রঙ পরিবর্তন", prompt: "Change the color of the current clothing to a solid formal sky blue." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Add Uniform", title_bn: "ইউনিফর্ম পরানো", prompt: "Change the attire to a professional security or pilot uniform with badges." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Formal Punjabi", title_bn: "পাঞ্জাবি পরিয়ে দেওয়া", prompt: "Dress the man in an elegant, well-fitted white formal Punjabi." },
    { cat_en: "Clothes", cat_bn: "পোশাক", title_en: "Add Leather Jacket", title_bn: "লেদার জ্যাকেট পরানো", prompt: "Change the current top to a stylish black leather biker jacket." },

    // --- BACKGROUND (ব্যাকগ্রাউন্ড) --- 11 Prompts
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Solid White BG", title_bn: "সাদা ব্যাকগ্রাউন্ড", prompt: "Change background to solid white, clean and professional." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Solid Neon Blue BG", title_bn: "নীল ব্যাকগ্রাউন্ড", prompt: "Change background to solid bright Neon Blue." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Light Blue BG", title_bn: "হালকা নিল ব্যাকগ্রাউন্ড", prompt: "Change background to a professional light sky blue." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Studio Bokeh BG", title_bn: "স্টুডিও ব্লার ব্যাকগ্রাউন্ড", prompt: "Change background to a blurry professional photo studio with bokeh lights." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Office Interior", title_bn: "অফিস ব্যাকগ্রাউন্ড", prompt: "Place the subject in a professional blurred corporate office background." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Remove People", title_bn: "পিছনের মানুষ সরানো", prompt: "Remove all unnecessary objects and people from the background." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Solid Grey BG", title_bn: "ধূসর ব্যাকগ্রাউন্ড", prompt: "Set a neutral and professional solid grey background." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Nature Park BG", title_bn: "প্রাকৃতিক ব্যাকগ্রাউন্ড", prompt: "Change the background to a beautiful blurred outdoor park or garden." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Graduation Stage", title_bn: "সমাবর্তন ব্যাকগ্রাউন্ড", prompt: "Change the background to a graduation ceremony stage." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Transparent BG", title_bn: "স্বচ্ছ বা PNG ব্যাকগ্রাউন্ড", prompt: "Remove background completely and make it transparent PNG." },
    { cat_en: "Background", cat_bn: "ব্যাকগ্রাউন্ড", title_en: "Library Background", title_bn: "লাইব্রেরি ব্যাকগ্রাউন্ড", prompt: "Place the subject in front of a blurred bookshelf-filled library background." },

    // --- HEAD & POSTURE (মাথা ও অবস্থান) --- 10 Prompts
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Straighten Head & Ears", title_bn: "মাথা সোজা ও কান দেখা", prompt: "Straighten the head posture, ensuring both ears are equally visible and symmetrical. Align the head perfectly." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Fix Upward Gaze", title_bn: "উপরের দিকে তাকানো ঠিক করা", prompt: "Adjust the head to face directly forward, lowering it from an upward gaze. Subject should look straight into the camera." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Fix Downward Gaze", title_bn: "নিচের দিকে তাকানো ঠিক করা", prompt: "Adjust the head to face directly forward, raising it from a downward gaze. Maintain neutral neck position." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Tilt Correction", title_bn: "মাথার কাত হওয়া ঠিক করা", prompt: "Correct the slight head tilt to the left or right, ensuring a perfectly vertical head alignment." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Symmetrical Shoulders", title_bn: "কাঁধ সমান করা", prompt: "Adjust the posture so that the shoulders are level and symmetrical in the frame." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Center Alignment", title_bn: "ছবি মাঝখানে আনা", prompt: "Center the subject perfectly within the frame, ensuring equal margins on left and right." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Chin Leveling", title_bn: "চিবুক সোজা করা", prompt: "Adjust the chin height to a neutral position, neither too high nor tucked too low." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Fix Looking Away", title_bn: "ক্যামেরার দিকে তাকানো", prompt: "Digitally adjust the eyes and head to look directly into the camera lens." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Remove Hairband", title_bn: "হেয়ারব্যান্ড সরানো", prompt: "Remove any visible hairbands or clips and replace them with natural-looking hair." },
    { cat_en: "Head", cat_bn: "মাথা", title_en: "Natural Symmetries", title_bn: "চেহারার ভারসাম্য ঠিক করা", prompt: "Ensure facial features are balanced and symmetrical without looking artificial." },

    // --- FACE & SKIN (মুখ ও ত্বক) --- 11 Prompts
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Remove Acne & Blemishes", title_bn: "ব্রণ বা দাগ মোছা", prompt: "Retouch skin to be smooth and clear, removing all blemishes, acne, and spots. Maintain natural skin texture." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Remove Face Oil", title_bn: "মুখের তৈলাক্ত ভাব কমানো", prompt: "Remove oily shine from the face, create a natural matte skin finish." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Skin Whitening", title_bn: "ত্বকের রঙ ফর্সা করা", prompt: "Enhance and brighten the skin tone naturally for a glowing and fair appearance." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Remove Double Chin", title_bn: "ডাবল চিন কমানো", prompt: "Digitally reduce the double chin and sharpen the jawline naturally." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Sharpen Jawline", title_bn: "চোয়ালের গঠন শার্প করা", prompt: "Give the face a more defined and sharp masculine jawline." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Slim Face", title_bn: "মুখ চিকন বা স্লিম করা", prompt: "Subtly slim down the cheeks for a more contoured and attractive face look." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Add Gentle Smile", title_bn: "হাসি যুক্ত করা", prompt: "Add a natural and warm gentle smile to the current facial expression." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Remove Forehead Lines", title_bn: "কপালে ভাঁজ মোছা", prompt: "Smooth out deep forehead wrinkles and expression lines for a fresher look." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Soft Skin Texture", title_bn: "ত্বক মসৃণ করা", prompt: "Apply a gentle skin softening effect while preserving the high-end photographic details." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Remove Freckles", title_bn: "মেছতা বা তিল সরানো", prompt: "Remove freckles and pigmentation spots from the face naturally." },
    { cat_en: "Face", cat_bn: "মুখ", title_en: "Glowing Skin", title_bn: "ত্বক উজ্জ্বল করা", prompt: "Add a healthy radiance and natural glow to the overall skin tone." },

    // --- RESTORE & COLOR (রিস্টোর) --- 10 Prompts
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Colorize B&W Photo", title_bn: "সাদকালো থেকে রঙিন ছবি", prompt: "Restore this old photograph into a high-resolution colour portrait with accurate skin tones and studio lighting." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Fix Blurry Image", title_bn: "ঝাপসা ছবি ক্লিয়ার করা", prompt: "Sharpen the blurry features and enhance clarity using AI upscaling to achieve high-definition quality." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Remove Scratches", title_bn: "ছেঁড়া বা ফাটা ছবি ঠিক করা", prompt: "Digitally repair scratches, cracks, and missing parts of the old photo naturally." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Denoise Image", title_bn: "ছবির নয়েজ বা দানা কমানো", prompt: "Remove grainy noise and digital artifacts from the low-quality photo while keeping details sharp." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Increase Resolution", title_bn: "রেজোলিউশন বাড়ানো", prompt: "Upscale this low-resolution photo to 4K quality with realistic facial reconstructions." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Vivid Color Enhance", title_bn: "কালার উজ্জ্বল করা", prompt: "Enhance the saturation and contrast of the photo to make it look vibrant and professionally edited." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Remove Yellow Tint", title_bn: "হলুদ ভাব দূর করা", prompt: "Correct the white balance and remove the aged yellow tint from old photographs." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Facial Details Boost", title_bn: "মুখের ডিটেইল বাড়ানো", prompt: "Rebuild the eyes, lips, and skin texture details in low-quality portraits using advanced AI." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Vintage to Modern", title_bn: "পুরানো ছবি নতুনের মতো করা", prompt: "Modernize this vintage photograph into a clean mirrorless camera-grade portrait." },
    { cat_en: "Restore", cat_bn: "রিস্টোর এন্ড কালার", title_en: "Fix Water Damage", title_bn: "পানির দাগ মোছা", prompt: "Digitally remove water damage stains and mold spots from physical old scans." },

    // --- HIJAB (হিজাব) --- 10 Prompts
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Add Black Hijab", title_bn: "হিজাব পরিয়ে দেওয়া", prompt: "Add a professional and elegant solid black hijab, wrapped neatly around the head and neck." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Change Hijab Color", title_bn: "হিজাবের রঙ পরিবর্তন", prompt: "Change the color of the current hijab to white or neutral beige." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Tidy up Hijab", title_bn: "হিজাব পরিপাটি করা", prompt: "Make the hijab look smooth and perfectly draped, removing any wrinkles or folds." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Add Silk Hijab", title_bn: "সিল্ক হিজাব স্টাইল", prompt: "Change the hijab texture to premium shiny silk with modern elegant styling." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Fix Loose Hijab", title_bn: "হিজাব টাইট ও সেট করা", prompt: "Adjust the loose hijab to be perfectly set around the face and jawline." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Floral Hijab Style", title_bn: "ফুলের ডিজাইনের হিজাব", prompt: "Change the existing hijab to a beautiful floral printed design." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Add Undercap", title_bn: "হিজাবের নিচে ক্যাপ দেওয়া", prompt: "Add a matching undercap visible at the forehead for a more complete hijab look." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Match Hijab to Outfit", title_bn: "পোশাকের সাথে হিজাব ম্যাচ করা", prompt: "Change the hijab color and pattern to perfectly match the subject's existing attire." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Layered Hijab", title_bn: "লেয়ার্ড হিজাব স্টাইল", prompt: "Redesign the hijab into a sophisticated multi-layered wrap style." },
    { cat_en: "Hijab", cat_bn: "হিজাব", title_en: "Remove Hijab Pins", title_bn: "হিজাবের পিন সরানো", prompt: "Cleanly remove visible pins from the hijab for a more seamless and clean appearance." }
];

function openPromptHub() {
    document.getElementById('promptHubModal').style.display = 'flex';
    if(typeof setActiveMode === 'function') setActiveMode('mode-prompt-hub');
    renderPhCategories();
    renderPrompts();
}

function closePromptHub() { document.getElementById('promptHubModal').style.display = 'none'; }

function switchPhLang(lang) {
    phCurrentLang = lang;
    document.getElementById('ph-btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('ph-btn-bn').classList.toggle('active', lang === 'bn');
    
    // ১. সাবটাইটেল পরিবর্তন
    document.getElementById('ph-subtitle').innerText = lang === 'en' ? "Get professional AI prompts for high-end image editing" : "হাই-এন্ড ইমেজ এডিটিং এর জন্য প্রফেশনাল এআই প্রম্পট কপি করুন";
    
    // ২. সার্চ প্লেসহোল্ডার পরিবর্তন
    document.getElementById('ph-search-input').placeholder = lang === 'en' ? "Search prompt..." : "প্রম্পট সার্চ করুন...";

    // ৩. নিচের টিপস মেসেজ পরিবর্তন (আপনার কাঙ্ক্ষিত অংশ)
    const footerTip = document.getElementById('ph-footer-tip');
    if (lang === 'en') {
        footerTip.innerHTML = `<i class='fa-solid fa-lightbulb'></i> <b>Tip:</b> Copy the prompt and paste it into Google AI Studio or Google Gemini.`;
    } else {
        footerTip.innerHTML = `<i class='fa-solid fa-lightbulb'></i> <b>টিপস:</b> প্রম্পট কপি করে Google AI Studio অথবা Google Gemini -তে পেস্ট করুন।`;
    }
    
    renderPhCategories();
    renderPrompts();
}

function renderPhCategories() {
    const tabsList = document.getElementById('ph-tabs-list');
    const categories = ["All", ...new Set(promptData.map(item => item.cat_en))];
    
    tabsList.innerHTML = categories.map(cat => {
        const catName = (cat === "All") ? (phCurrentLang === "en" ? "All" : "সবগুলো") : (phCurrentLang === "en" ? cat : promptData.find(i => i.cat_en === cat).cat_bn);
        return `<button class="cat-btn ${phCurrentCat === cat ? 'active' : ''}" onclick="setPhCategory('${cat}')">${catName}</button>`;
    }).join('');
}

function setPhCategory(cat) {
    phCurrentCat = cat;
    renderPhCategories();
    renderPrompts();
}

function renderPrompts() {
    const grid = document.getElementById('ph-grid');
    const searchVal = document.getElementById('ph-search-input').value.toLowerCase();
    
    const filtered = promptData.filter(item => {
        const matchesCat = (phCurrentCat === "All" || item.cat_en === phCurrentCat);
        const matchesSearch = item.title_en.toLowerCase().includes(searchVal) || item.title_bn.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    grid.innerHTML = filtered.map(item => `
        <div class="prompt-card">
            <h4>${phCurrentLang === 'en' ? item.title_en : item.title_bn}</h4>
            <div class="prompt-box">${item.prompt}</div>
            <button class="btn-copy-ph" onclick="copyPhText(this, '${item.prompt.replace(/'/g, "\\'")}')">
                <i class="fa-solid fa-copy"></i> <span>${phCurrentLang === 'en' ? 'Copy Prompt' : 'প্রম্পট কপি করুন'}</span>
            </button>
        </div>
    `).join('');
}

function searchPrompts() { renderPrompts(); }

// বাটন টেক্সট চেঞ্জিং কপি ফাংশন
function copyPhText(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        const originalContent = btn.innerHTML;
        const copiedText = phCurrentLang === 'en' ? 'Copied!' : 'কপি হয়েছে!';
        
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>${copiedText}</span>`;
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.remove('copied');
        }, 2000);
    });
}
;

let memoLang = "en";

function openMemoModal() {
    var modal = document.getElementById('memoModal');
    if (modal) {
        modal.style.display = 'flex';
        if (typeof setActiveMode === 'function') setActiveMode('mode-memo');
        loadMemoSettings();
        updateMemoDate();
    }
}

function getTodayDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}

function updateMemoDate() {
    const dateLabel = document.getElementById('txt-date');
    if (dateLabel && dateLabel.nextSibling) {
        const today = getTodayDate();
        dateLabel.nextSibling.textContent = " " + convertDigits(today, memoLang);
    }
}

function closeMemoModal() { document.getElementById('memoModal').style.display = 'none'; }

const memoTranslations = {
    en: { title: "Cash Memo Pro", save: "Save Info", add: "Add Item", receipt: "Receipt No:", date: "Date:", sl: "SL", desc: "Description", qty: "Qty", rate: "Rate", total: "Total", grand: "Grand Total:", words: "In Words:", sigC: "Customer Signature", sigA: "Authorized Signature", name: "Name:", addr: "Address:", mob1: "Mobile:", termsP: "Terms & Conditions (Optional)" },
    bn: { title: "ক্যাশ মেমো প্রো", save: "তথ্য সেভ করুন", add: "আইটেম যোগ", receipt: "রশিদ নং:", date: "তারিখ:", sl: "ক্রমিঃ", desc: "বিবরণ", qty: "পরিমাণ", rate: "দর", total: "মোট", grand: "সর্বমোট:", words: "কথায়:", sigC: "ক্রেতার স্বাক্ষর", sigA: "বিক্রেতার স্বাক্ষর", name: "নাম:", addr: "ঠিকানা:", mob1: "মোবাইল:", termsP: "শর্তাবলী (ঐচ্ছিক)" }
};

function convertDigits(text, toLang) {
    if (!text) return "";
    const enDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    let res = text.toString();
    if (toLang === 'bn') {
        enDigits.forEach((en, i) => { res = res.split(en).join(bnDigits[i]); });
    } else {
        bnDigits.forEach((bn, i) => { res = res.split(bn).join(enDigits[i]); });
    }
    return res;
}

function handleTableInput(el) {
    if (memoLang === 'bn') {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const offset = range.startOffset;
        const original = el.innerText;
        const converted = convertDigits(original, 'bn');
        if (original !== converted) {
            el.innerText = converted;
            const newRange = document.createRange();
            const textNode = el.childNodes[0];
            if (textNode) {
                newRange.setStart(textNode, Math.min(offset, textNode.length));
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
            }
        }
    }
    calculateMemoTotal();
}

function switchMemoLang(lang) {
    memoLang = lang;
    const t = memoTranslations[lang];
    document.getElementById('memo-en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('memo-bn-btn').classList.toggle('active', lang === 'bn');
    document.getElementById('memo-tool-title').innerText = t.title;
    document.getElementById('txt-save-settings').innerText = t.save;
    document.getElementById('txt-add-item').innerText = t.add;
    document.getElementById('lbl-name').innerText = t.name;
    document.getElementById('lbl-addr').innerText = t.addr;
    document.getElementById('lbl-mob1').innerText = t.mob1;

    const rLabel = document.getElementById('txt-receipt');
    const dLabel = document.getElementById('txt-date');
    if(rLabel.nextSibling) rLabel.nextSibling.textContent = " " + convertDigits(rLabel.nextSibling.textContent.trim(), lang);
    if(dLabel.nextSibling) dLabel.nextSibling.textContent = " " + convertDigits(dLabel.nextSibling.textContent.trim(), lang);
    rLabel.innerText = t.receipt;
    dLabel.innerText = t.date;

    document.getElementById('txt-sl').innerText = t.sl;
    document.getElementById('txt-desc').innerText = t.desc;
    document.getElementById('txt-qty').innerText = t.qty;
    document.getElementById('txt-rate').innerText = t.rate;
    document.getElementById('txt-total').innerText = t.total;
    document.getElementById('txt-grand').innerText = t.grand;
    document.getElementById('txt-words-label').innerText = t.words;
    document.getElementById('txt-sig-cust').innerText = t.sigC;
    document.getElementById('txt-sig-auth').innerText = t.sigA;
    document.getElementById('txt-terms-placeholder').setAttribute('data-placeholder', t.termsP);

    document.querySelectorAll('#memo-body tr').forEach((row, i) => {
        row.cells[0].innerText = convertDigits(i + 1, lang);
        row.cells[2].innerText = convertDigits(row.cells[2].innerText, lang);
        row.cells[3].innerText = convertDigits(row.cells[3].innerText, lang);
    });
    calculateMemoTotal();
}

function calculateMemoTotal() {
    const rows = document.querySelectorAll('#memo-body tr');
    let grandTotal = 0;
    rows.forEach(row => {
        const qty = parseFloat(convertDigits(row.cells[2].innerText, 'en')) || 0;
        const rate = parseFloat(convertDigits(row.cells[3].innerText, 'en')) || 0;
        const total = qty * rate;
        row.cells[4].innerText = convertDigits(total.toFixed(2), memoLang);
        grandTotal += total;
    });
    document.getElementById('memo-grand-total').innerText = convertDigits(grandTotal.toFixed(2), memoLang);
    document.getElementById('memo-words-display').innerText = numberToWords(grandTotal, memoLang);
}

function numberToWords(amount, lang) {
    const mainAmount = Math.floor(amount);
    const paisaAmount = Math.round((amount - mainAmount) * 100);
    if (amount == 0) return lang === 'en' ? "Zero Taka only." : "শূণ্য টাকা মাত্র।";
    function toEnWords(n) {
        const a = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
        const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        if (n < 20) return a[n];
        if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
        if (n < 1000) return toEnWords(Math.floor(n / 100)) + "Hundred " + (n % 100 !== 0 ? "and " + toEnWords(n % 100) : "");
        if (n < 100000) return toEnWords(Math.floor(n / 1000)) + "Thousand " + (n % 1000 !== 0 ? toEnWords(n % 1000) : "");
        if (n < 10000000) return toEnWords(Math.floor(n / 100000)) + "Lakh " + (n % 100000 !== 0 ? toEnWords(n % 100000) : "");
        return "Large Amount";
    }
    const bnNums = ["শূণ্য", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়", "দশ", "এগারো", "বারো", "তেরো", "চৌদ্দ", "পনেরো", "ষোলো", "সতেরো", "আঠারো", "উনিশ", "বিশ", "একুশ", "বাইশ", "তেইশ", "চব্বিশ", "পঁচিশ", "ছাব্বিশ", "সাতাশ", "আটাশ", "ঊনত্রিশ", "ত্রিশ", "একত্রিশ", "বত্রিশ", "তেত্রিশ", "চৌত্রিশ", "পঁয়ত্রিশ", "ছত্রিশ", "সাঁইত্রিশ", "আটত্রিশ", "ঊনচল্লিশ", "চল্লিশ", "একচল্লিশ", "বিয়াল্লিশ", "তেতাল্লিশ", "চুয়াল্লিশ", "পঁয়তাল্লিশ", "ছেচল্লিশ", "সাতচল্লিশ", "আটচল্লিশ", "ঊনপঞ্চাশ", "পঞ্চাশ", "একান্ন", "বাহান্ন", "তিপ্পান্ন", "চুয়াল্লিশ", "পঞ্চান্ন", "ছাপ্পান্ন", "সাতান্ন", "আটান্ন", "ঊনষাট", "ষাট", "একষট্টি", "বাষট্টি", "তেষট্টি", "চৌষট্টি", "পঁয়ষট্টি", "ছেষট্টি", "সাতষট্টি", "আটষট্টি", "ঊনসত্তর", "সত্তর", "একাত্তর", "বাহাত্তর", "তেয়াত্তর", "চুয়াত্তর", "পঁচাত্তর", "ছেয়াত্তর", "সাতাত্তর", "আটাত্তর", "ঊনআশি", "আশি", "একাশি", "বিরাশি", "তিরাশি", "চুরাশি", "পঁচাশী", "ছেয়াশি", "সাতাশি", "আটাশি", "ঊননব্বই", "নব্বই", "একানব্বই", "বিরানব্বই", "তিরানব্বই", "চুরানব্বই", "পঁচানব্বই", "ছেয়ানব্বই", "সাতানব্বই", "আটানব্বই", "নিরানব্বই"];
    function toBnWords(n) {
        if (n == 0) return "";
        if (n < 100) return bnNums[n] + " ";
        if (n < 1000) return bnNums[Math.floor(n / 100)] + "শত " + toBnWords(n % 100);
        if (n < 100000) return toBnWords(Math.floor(n / 1000)) + "হাজার " + toBnWords(n % 1000);
        if (n < 10000000) return toBnWords(Math.floor(n / 100000)) + "লক্ষ " + toBnWords(n % 100000);
        return toBnWords(Math.floor(n / 10000000)) + "কোটি " + toBnWords(n % 10000000);
    }
    let res = "";
    if (lang === 'en') {
        res = toEnWords(mainAmount) + "Taka ";
        if (paisaAmount > 0) res += "and " + toEnWords(paisaAmount) + " Paisa ";
        res += "Only.";
    } else {
        res = toBnWords(mainAmount) + "টাকা ";
        if (paisaAmount > 0) res += convertDigits(paisaAmount, 'bn') + " পয়সা ";
        res += "মাত্র।";
    }
    return res;
}

function saveMemoSettings() {
    const shopData = {
        name: document.getElementById('set-shop-name').innerHTML,
        addr: document.getElementById('set-shop-addr').innerHTML,
        mob: document.getElementById('set-shop-mob').innerHTML,
        email: document.getElementById('set-shop-email').innerHTML,
        logo: document.getElementById('memo-img').src,
        // নতুন যুক্ত করা হলো শর্তাবলী সেভ করার জন্য
        terms: document.getElementById('txt-terms-placeholder').innerHTML 
    };
    
    // ব্রাউজারে ডাটা সেভ করা হচ্ছে
    localStorage.setItem('memo_shop_data_v3', JSON.stringify(shopData));
    
    if(typeof triggerAlert === 'function') {
        triggerAlert("Shop Info & Terms saved successfully!");
    } else {
        alert("Shop Info & Terms saved successfully!");
    }
}

function loadMemoSettings() {
    const data = JSON.parse(localStorage.getItem('memo_shop_data_v3'));
    if (data) {
        // দোকানের নাম, ঠিকানা, মোবাইল ও ইমেইল লোড
        if(data.name) document.getElementById('set-shop-name').innerHTML = data.name;
        if(data.addr) document.getElementById('set-shop-addr').innerHTML = data.addr;
        if(data.mob) document.getElementById('set-shop-mob').innerHTML = data.mob;
        if(data.email) document.getElementById('set-shop-email').innerHTML = data.email;
        
        // শর্তাবলী (Terms & Conditions) লোড
        if(data.terms) document.getElementById('txt-terms-placeholder').innerHTML = data.terms;
        
        // লোগো লোড
        if(data.logo && data.logo.startsWith('data:image')) {
            document.getElementById('memo-img').src = data.logo;
            document.getElementById('memo-img').style.display = 'block';
            document.getElementById('txt-logo-hint').style.display = 'none';
        }
    }
}

function addMemoRow() {
    const body = document.getElementById('memo-body');
    const row = document.createElement('tr');
    const sl = body.rows.length + 1;
    row.innerHTML = `<td>${convertDigits(sl, memoLang)}</td><td contenteditable='true' style='text-align:left'></td><td contenteditable='true' oninput='handleTableInput(this)'>${convertDigits(1, memoLang)}</td><td contenteditable='true' oninput='handleTableInput(this)'>${convertDigits(0, memoLang)}</td><td class='row-total'>${convertDigits("0.00", memoLang)}</td><td class='no-print' style='border:none;'><button onclick='removeMemoRow(this)' style='color:red; background:none; border:none; cursor:pointer; font-size:18px;'>&#215;</button></td>`;
    body.appendChild(row);
}

function removeMemoRow(btn) {
    if (document.querySelectorAll('#memo-body tr').length > 1) {
        btn.closest('tr').remove();
        document.querySelectorAll('#memo-body tr').forEach((r, i) => r.cells[0].innerText = convertDigits(i + 1, memoLang));
        calculateMemoTotal();
    }
}

function loadMemoLogo(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById('memo-img');
            img.src = e.target.result;
            img.style.display = 'block';
            document.getElementById('txt-logo-hint').style.display = 'none';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function updateMemoLayout() {
    const size = document.getElementById('memo-page-size').value;
    const page = document.getElementById('memo-page-unit');
    const dims = { a4: ["210mm", "297mm"], legal: ["216mm", "345mm"], a5: ["148mm", "210mm"], letter: ["216mm", "279mm"] };
    page.style.width = dims[size][0];
    page.style.minHeight = dims[size][1];
}

function printMemoContent() {
    const content = document.getElementById('memo-page-unit').innerHTML;
    const size = document.getElementById('memo-page-size').value;
    const dims = { 
        a4: "210mm 297mm", 
        legal: "216mm 345mm", 
        a5: "148mm 210mm", 
        letter: "216mm 279mm" 
    };

    let memoPdfCount = localStorage.getItem('memo_pdf_print_count') || 0;
    memoPdfCount = parseInt(memoPdfCount) + 1;
    localStorage.setItem('memo_pdf_print_count', memoPdfCount);

    const bnCount = convertDigits(memoPdfCount, 'bn'); 
    
    const customFileName = `Cash_Memo-www.idcardscannerpro.com-${bnCount}`;

    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
            <head>
                <title>${customFileName}</title>
                <style>
                    @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
                    
                    @page { 
                        size: ${dims[size]}; 
                        margin: 15mm 10mm; 
                    }
                    
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    
                    body { 
                        font-family: 'SolaimanLipi', Arial, sans-serif; 
                        padding: 0; margin: 0; background: #fff; 
                    }

                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin-top: 10px; 
                        border: none !important; 
                        page-break-inside: auto;
                    }
                    
                    thead { display: table-header-group; } 

                    tfoot { display: table-row-group !important; } 
                    
                    tr { page-break-inside: avoid; }

                    th, td { 
                        border: 1px solid #0d9488 !important; 
                        padding: 8px; 
                        text-align: center; 
                    }
                    
                    th { background:#0d9488 !important; color:#fff !important; }

                    .memo-header-top { display: flex; align-items: center; border-bottom: 1px solid #ff3c00; padding-bottom: 10px; margin-bottom: 15px; }
                    .logo-preview img { width: 80px; height: 80px; object-fit: contain; }
                    .shop-info { text-align: center; flex:1; }
                    .shop-info h1 { font-size: 24px; color: #0d9488; margin:0; }
                    .shop-details-row { display: flex; justify-content: center; gap: 8px; margin-top: 5px; }
                    .detail-box { border: 1px dashed #ff6000; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
                    .memo-sub-header { display: flex; justify-content: space-between; color: #000; border-bottom: 1px solid #0d9488; }
                    .memo-customer-container { 
                        border: 1px dashed #0d9488;
                        border-radius: 5px;
                        padding: 10px; 
                        margin-top: 20px !important; 
                        margin-bottom: 15px; 
                    }
                    .cust-info-row-inline { display: flex; gap: 10px; width: 100%; }
                    .cust-field-inline { border-bottom: 1px solid #eee; flex: 1; font-size: 13px; display: flex; gap: 5px; }
                    
                    .signature-row, .in-words-box, .memo-notes {
                        page-break-inside: avoid;
                    }

                    .signature-row { display: flex; justify-content: space-between; margin-top: 50px; }
                    .sig-box { border-top: 1px solid #0d9488;
                        width: 180px;
                        text-align: center;
                        font-size: 13px;
                        padding-top: 5px;
                        font-weight: 700;
                        color: #0d9488;
                    }
                    .in-words-box { margin-top: 20px; font-weight: bold; border-bottom: 1px dashed #0d9488; color: #000; }
                    .memo-notes {
                        margin-top: 35px;
                        font-size: 12px;
                        color: #f00;
                        border-top: 1px dashed #0d9488;
                        padding-top: 10px;
                        outline: none;
                        text-align: center;
                    }
                    .no-print { display:none !important; }
                </style>
            </head>
            <body>
                <div class="sheet-page-unit">${content}</div>
                <script>
                    window.onload = function() {
                        setTimeout(() => { 
                            window.print(); 
                            window.close(); 
                        }, 500);
                    };
                <\/script>
            </body>
        </html>
    `);
    printWin.document.close();
}

function resetMemo() {
    document.getElementById('memo-body').innerHTML = `
        <tr>
            <td class="sl-cell">${convertDigits(1, memoLang)}</td>
            <td contenteditable="true" style="text-align: left;"></td>
            <td contenteditable="true" oninput="handleTableInput(this)">${convertDigits(1, memoLang)}</td>
            <td contenteditable="true" oninput="handleTableInput(this)">${convertDigits(0, memoLang)}</td>
            <td class="row-total">${convertDigits("0.00", memoLang)}</td>
            <td class="no-print" style="border:none;">
                <button onclick="removeMemoRow(this)" style="color:red; background:none; border:none; cursor:pointer; font-size:18px;">&times;</button>
            </td>
        </tr>`;

    document.getElementById('memo-grand-total').innerText = convertDigits("0.00", memoLang);
    document.getElementById('memo-words-display').innerText = memoLang === 'en' ? "Zero Taka only." : "শূণ্য টাকা মাত্র।";

    document.getElementById('txt-cust-name').innerText = "";
    document.getElementById('txt-cust-addr').innerText = "";
    document.getElementById('txt-cust-mob1').innerText = "";

    if (typeof updateMemoDate === 'function') {
        updateMemoDate();
    }
}
;

function openBarcodeModal() {
    document.getElementById('barcodeModal').style.display = 'flex';
    if(typeof setActiveMode === 'function') setActiveMode('mode-barcode');
    generateBarcode(); // শুরুতে একবার জেনারেট করা
}

function closeBarcodeModal() {
    document.getElementById('barcodeModal').style.display = 'none';
}

function generateBarcode() {
    const text = document.getElementById('barcode-text').value;
    const format = document.getElementById('barcode-format').value;
    const width = document.getElementById('bar-width').value;
    const height = document.getElementById('bar-height').value;
    const color = document.getElementById('bar-color').value;
    const background = document.getElementById('bar-bg').value;
    const showText = document.getElementById('show-text').checked;
    const errorMsg = document.getElementById('barcode-error');

    if(!text) return;

    try {
        JsBarcode("#barcode-output", text, {
            format: format,
            width: parseInt(width),
            height: parseInt(height),
            displayValue: showText,
            lineColor: color,
            background: background,
            margin: 10,
            valid: function(valid) {
                if (valid) {
                    errorMsg.style.display = 'none';
                } else {
                    errorMsg.style.display = 'block';
                }
            }
        });
    } catch (err) {
        errorMsg.style.display = 'block';
    }
}

function downloadBarcode(type) {
    const svg = document.getElementById('barcode-output');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    const img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(source)));
    
    img.onload = function() {
        canvas.width = img.width + 40;
        canvas.height = img.height + 40;
        
        context.fillStyle = document.getElementById('bar-bg').value;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 20, 20);
        
        const link = document.createElement('a');
        link.download = `Barcode_${document.getElementById('barcode-text').value}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        
        // এখানে কোনো triggerAlert বা alert রাখা হয়নি
    };
}

function resetBarcode() {
    // ইনপুটগুলো ডিফল্ট ভ্যালুতে ফিরিয়ে আনা
    document.getElementById('barcode-text').value = "12345678";
    document.getElementById('barcode-format').value = "CODE128";
    document.getElementById('bar-width').value = "2";
    document.getElementById('bar-height').value = "80";
    document.getElementById('bar-color').value = "#000000";
    document.getElementById('bar-bg').value = "#ffffff";
    document.getElementById('show-text').checked = true;
    
    // বারকোড পুনরায় জেনারেট করা
    generateBarcode();
    
    // এখানে কোনো কনফার্মেশন বা এলার্ট দেওয়া হয়নি
}
;

let teleCropper = null;
let teleCurrentMode = "photo";
let teleFinalBlob = null;

function openTeletalkModal() {
    document.getElementById('teletalkModal').style.display = 'flex';
    if(typeof setActiveMode === 'function') setActiveMode('mode-teletalk');
}

/* --- ১. পপ-আপ ক্লোজ করার সাথে রিসেট লজিক ফিক্সড --- */
function closeTeletalkModal() { 
    document.getElementById('teletalkModal').style.display = 'none'; 
    resetTele(); // এখানে রিসেট ফাংশনটি কল করা হয়েছে
}

function handleTeleFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const cropImg = document.getElementById('tele-crop-image');
        
        if (teleCropper) {
            teleCropper.destroy();
            teleCropper = null;
        }

        cropImg.src = e.target.result;
        
        document.getElementById('tele-upload-area').style.display = 'none';
        document.getElementById('tele-controls').style.display = 'block';
        document.getElementById('tele-result-area').style.display = 'none';
        
        cropImg.onload = () => {
            teleCropper = new Cropper(cropImg, {
                aspectRatio: (teleCurrentMode === 'photo') ? 1 : (300 / 80),
                viewMode: 1,
                autoCropArea: 1,
                responsive: true,
                zoomOnWheel: false, 
                zoomOnTouch: false,
                toggleDragModeOnDblclick: false
            });
        };
    };
    reader.readAsDataURL(file);
}

function setTelePreset(mode) {
    teleCurrentMode = mode;
    document.querySelectorAll('.preset-card').forEach(card => card.classList.remove('active'));
    
    if(mode === 'photo') {
        document.getElementById('btn-preset-photo').classList.add('active');
    } else {
        document.getElementById('btn-preset-sig').classList.add('active');
    }
    
    if (teleCropper) {
        const ratio = (mode === 'photo') ? 1 : (300 / 80);
        teleCropper.setAspectRatio(ratio);
    }
}

async function processTeleCrop() {
    if (!teleCropper) return;
    
    const targetW = 300;
    const targetH = (teleCurrentMode === 'photo') ? 300 : 80;
    const maxKB = (teleCurrentMode === 'photo') ? 100 : 60;

    const canvas = teleCropper.getCroppedCanvas({
        width: targetW,
        height: targetH,
        fillColor: '#fff',
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high'
    });

    let quality = 0.90;
    let dataUrl = "";
    let finalKB = 0;

    for (let i = 0; i < 15; i++) {
        dataUrl = canvas.toDataURL("image/jpeg", quality);
        finalKB = Math.round((dataUrl.length * 3 / 4) / 1024);
        if (finalKB <= maxKB) break;
        quality -= 0.10;
        if (quality < 0.1) break;
    }

    const preview = document.getElementById('tele-result-preview');
    preview.src = dataUrl;
    teleFinalBlob = dataUrl;

    document.getElementById('tele-result-info').innerText = targetW + " x " + targetH + " Pixels | " + finalKB + " KB";
    document.getElementById('tele-result-area').style.display = 'block';
    document.getElementById('tele-result-area').scrollIntoView({ behavior: 'smooth' });
}

function downloadTeleImg() {
    if (!teleFinalBlob) return;
    const link = document.createElement('a');
    link.href = teleFinalBlob;
    link.download = "Teletalk_" + teleCurrentMode + ".jpg";
    link.click();
}

/* --- ২. সম্পূর্ণ রিসেট ফাংশন (উন্নত করা হয়েছে) --- */
function resetTele() {
    // ক্রপার বন্ধ করা
    if (teleCropper) {
        teleCropper.destroy();
        teleCropper = null;
    }
    
    // সব ভ্যালু এবং প্রিভিউ ক্লিয়ার করা
    document.getElementById('tele-upload-area').style.display = 'block';
    document.getElementById('tele-controls').style.display = 'none';
    document.getElementById('tele-result-area').style.display = 'none';
    document.getElementById('tele-input').value = "";
    document.getElementById('tele-crop-image').src = "";
    document.getElementById('tele-result-preview').src = "";
    
    // মোড ডিফল্ট ভাবে ফটোতে ফিরিয়ে আনা
    teleCurrentMode = "photo";
    document.querySelectorAll('.preset-card').forEach(card => card.classList.remove('active'));
    document.getElementById('btn-preset-photo').classList.add('active');
}
;

let compOriginalImg = null;
let compressedResultData = null;

function openCompressorModal() {
    document.getElementById('compressorModal').style.display = 'flex';
    if(typeof setActiveMode === 'function') setActiveMode('mode-compressor');
}

function closeCompressorModal() {
    document.getElementById('compressorModal').style.display = 'none';
    resetCompressor(); // ক্লোজ করার সময় সব ক্লিয়ার হবে
}

// ফাইল হ্যান্ডলার
function handleCompFile(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
            compOriginalImg = img;
            document.getElementById('comp-orig-preview').src = img.src;
            document.getElementById('orig-size').innerText = "Original: " + (file.size / 1024).toFixed(2) + " KB";
            
            // UI কন্ট্রোল দেখানো
            document.getElementById('comp-upload-area').style.display = 'none';
            document.getElementById('comp-controls').style.display = 'block';
        };
    };
    reader.readAsDataURL(file);
}

// কমপ্রেশন লজিক (শুধুমাত্র কোয়ালিটি অ্যাডজাস্ট করবে)
async function processCompression() {
    if (!compOriginalImg) return;
    
    const targetKB = parseFloat(document.getElementById('target-kb').value);
    const loader = document.getElementById('comp-loader');
    const preview = document.getElementById('comp-result-preview');
    const resultSizeLabel = document.getElementById('result-size');
    const dlBtn = document.getElementById('btn-comp-dl');

    loader.style.display = 'block';
    preview.style.display = 'none';

    // অরিজিনাল রেজোলিউশনে ক্যানভাস তৈরি
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = compOriginalImg.width;
    canvas.height = compOriginalImg.height;
    ctx.drawImage(compOriginalImg, 0, 0);

    let quality = 0.92;
    let dataUrl = "";
    let sizeKB = 0;

    // ইটারেটিভ লুপ চালিয়ে সঠিক কেবি খোঁজা (ম্যাক্স ১৫ বার ট্রাই করবে)
    for (let i = 0; i < 15; i++) {
        dataUrl = canvas.toDataURL("image/jpeg", quality);
        // Base64 থেকে আনুমানিক ফাইল সাইজ বের করা
        sizeKB = Math.round((dataUrl.length * 3 / 4) / 1024);
        
        if (sizeKB <= targetKB) break;
        quality -= 0.08; // প্রতিবার ৮% কোয়ালিটি কমবে
        if (quality < 0.1) break;
    }

    // প্রিভিউ আপডেট
    preview.src = dataUrl;
    preview.style.display = 'inline-block';
    loader.style.display = 'none';
    resultSizeLabel.innerText = "Compressed: " + sizeKB + " KB";
    
    // যদি টার্গেট পূরণ না হয় তবে লাল রঙ দেখাবে
    resultSizeLabel.style.color = (sizeKB <= targetKB) ? "#059669" : "#ef4444";
    
    compressedResultData = dataUrl;
    dlBtn.disabled = false;
}

// ডাউনলোড ফাংশন
function downloadCompressedImg() {
    if (!compressedResultData) return;
    const link = document.createElement('a');
    link.href = compressedResultData;
    link.download = "Compressed_by_IDScannerPro.jpg";
    link.click();
}

// ডিলিট/রিসেট ফাংশন
function resetCompressor() {
    document.getElementById('comp-upload-area').style.display = 'block';
    document.getElementById('comp-controls').style.display = 'none';
    document.getElementById('comp-input').value = "";
    document.getElementById('comp-orig-preview').src = "";
    document.getElementById('comp-result-preview').src = "";
    document.getElementById('btn-comp-dl').disabled = true;
    document.getElementById('result-size').innerText = "Size: 0 KB";
}
;

let gridBaseImg = null;

// আপনার ওয়েবসাইটের ডিফল্ট কাস্টম পপআপ ফাংশন
function triggerAlert(msg) {
    const popup = document.getElementById('customPopup');
    const msgEl = document.getElementById('popupMessage');
    if (popup && msgEl) {
        msgEl.innerText = msg;
        popup.classList.add('active');
    } else {
        alert(msg);
    }
}

function openGridModal() {
    document.getElementById('gridModal').style.display = 'flex';
    if(typeof setActiveMode === 'function') setActiveMode('mode-photo-grid');
}

function closeGridModal() { 
    document.getElementById('gridModal').style.display = 'none'; 
}

// ছবি আপলোড
function handleGridUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            gridBaseImg = e.target.result;
            document.getElementById('grid-count-val').value = 1;
            renderPhotoGrid(true);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// প্লাস-মাইনাস বাটন লজিক
function changeGridCount(val) {
    if (!gridBaseImg) { 
        triggerAlert("Please upload a photo first!"); 
        return; 
    }
    
    let input = document.getElementById('grid-count-val');
    let container = document.getElementById('photo-grid-render');
    let pageBox = document.getElementById('grid-page-unit');
    let current = parseInt(input.value);
    
    if (val === 1) {
        const sizeData = document.getElementById('grid-photo-size').value.split(',');
        const wPx = parseFloat(sizeData[0]) * 96;
        const hPx = parseFloat(sizeData[1]) * 96;

        const item = document.createElement('div');
        item.className = 'grid-photo-item';
        item.style.width = wPx + "px";
        item.style.height = hPx + "px";
        item.innerHTML = `<img src="${gridBaseImg}" />`;
        
        container.appendChild(item);

        // কাট-অফ চেক: ছবি নিচে কেটে যাচ্ছে কি না
        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        if (itemRect.bottom > containerRect.bottom + 2) {
            container.removeChild(item); 
            triggerAlert("Limit Reached! Adding this photo would cut it off at the bottom.");
        } else {
            input.value = current + 1;
        }
    } else {
        if (current > 0) {
            if (container.lastChild) container.removeChild(container.lastChild);
            input.value = current - 1;
        }
    }
}

function renderPhotoGrid(forceAll = false) {
    const container = document.getElementById('photo-grid-render');
    const countInput = document.getElementById('grid-count-val');
    const sizeData = document.getElementById('grid-photo-size').value.split(',');
    
    if (!gridBaseImg) {
        container.innerHTML = `<div style="padding: 100px 0; color: #94a3b8; width:100%; text-align:center; font-weight:700;">Upload a photo to see the layout</div>`;
        return;
    }

    if (forceAll) {
        container.innerHTML = '';
        let count = parseInt(countInput.value);
        const wPx = parseFloat(sizeData[0]) * 96;
        const hPx = parseFloat(sizeData[1]) * 96;
        for (let i = 0; i < count; i++) {
            const item = document.createElement('div');
            item.className = 'grid-photo-item';
            item.style.width = wPx + "px";
            item.style.height = hPx + "px";
            item.innerHTML = `<img src="${gridBaseImg}" />`;
            container.appendChild(item);
        }
    }
}

// আপনার চাহিদা অনুযায়ী: সাইজ পরিবর্তন করলে ১টি ছবি দেখাবে
function resetAndRender() {
    if(gridBaseImg) {
        document.getElementById('grid-count-val').value = 1;
        renderPhotoGrid(true);
    }
}

// আপনার চাহিদা অনুযায়ী: পেপার সাইজ পরিবর্তন করলে ১টি ছবি দেখাবে
function updateGridLayout() {
    const size = document.getElementById('grid-paper-size').value;
    const page = document.getElementById('grid-page-unit');
    const dims = { a4: ["210mm", "297mm"], "4r": ["102mm", "152mm"], legal: ["216mm", "345mm"] };
    
    page.style.width = dims[size][0];
    page.style.height = dims[size][1]; 

    if(gridBaseImg) {
        document.getElementById('grid-count-val').value = 1;
    }
    renderPhotoGrid(true);
}

// ডিরেক্ট প্রিন্ট ফাংশন (১০০% পারফেক্ট আউটপুট)
function printGridContent() {
    const count = parseInt(document.getElementById('grid-count-val').value);
    if (!gridBaseImg || count === 0) {
        triggerAlert("Please upload a photo first!");
        return;
    }
    const content = document.getElementById('photo-grid-render').innerHTML;
    const size = document.getElementById('grid-paper-size').value;
    const dims = { a4: "210mm 297mm", "4r": "102mm 152mm", legal: "216mm 345mm" };
    
    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
            <head>
                <title>Photo_Print_Layout</title>
                <style>
                    @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
                    @page { size: ${dims[size]}; margin: 0; }
                    body { margin: 0; padding: 0; background: #fff; }
                    #wrapper { 
                        width: ${dims[size].split(' ')[0]};
                        height: ${dims[size].split(' ')[1]};
                        display: flex; flex-wrap: wrap; gap: 5px; 
                        justify-content: center; align-content: flex-start;
                        padding: 5px; box-sizing: border-box; overflow: hidden;
                    }
                    .grid-photo-item { border: 1px solid #000 !important; display: flex; box-sizing: border-box; }
                    img { width: 100%; height: 100%; object-fit: cover; }
                </style>
            </head>
            <body><div id="wrapper">${content}</div></body>
        </html>
    `);
    printWin.document.close();
    setTimeout(() => { printWin.print(); printWin.close(); }, 800);
}

function resetGrid() {
    gridBaseImg = null;
    document.getElementById('grid-input').value = "";
    document.getElementById('grid-count-val').value = 0;
    document.getElementById('photo-grid-render').innerHTML = "";
}
;

let ltLang = "en";

// সংখ্যা রূপান্তর ফাংশন (বাংলা তারিখের জন্য)
function convertDigits(text, toLang) {
    if (!text) return "";
    const enDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    let result = text.toString();
    if (toLang === 'bn') {
        enDigits.forEach((en, i) => { result = result.split(en).join(bnDigits[i]); });
    } else {
        bnDigits.forEach((bn, i) => { result = result.split(bn).join(enDigits[i]); });
    }
    return result;
}

// বিস্তারিত এবং দীর্ঘ টেমপ্লেট ডাটাবেজ
const letterTemplates = {
    en: {
        job: `Date: ${new Date().toLocaleDateString('en-GB')}<br><br>
              To,<br>
              The Managing Director / HR Manager,<br>
              [Name of the Organization],<br>
              [Complete Address of the Office].<br><br>
              <b>Subject: Application for the position of [Mention Job Title].</b><br><br>
              Dear Sir/Madam,<br><br>
              I am writing to formally express my keen interest in the [Job Title] position at your esteemed organization, as advertised in [Source of Advertisement]. Having carefully reviewed the job description, I am confident that my educational background, professional experience, and skills align perfectly with the requirements of this role.<br><br>
              I have completed my [Mention Your Degree] from [University Name] and have gained [Number] years of practical experience in [Your Field/Industry]. During my previous tenure at [Previous Organization], I was responsible for [Mention key responsibility], where I successfully demonstrated my ability to [Mention a major achievement]. I possess strong communication skills, a high level of professional integrity, and the ability to work under pressure to meet tight deadlines.<br><br>
              My goal is to contribute my expertise to [Name of Organization] while continuing to develop my professional skills. I am eager to bring my dedication and hardworking nature to your team to help achieve your corporate objectives.<br><br>
              I have attached my detailed Curriculum Vitae (CV) and other necessary documents for your kind consideration. I would welcome the opportunity to discuss my qualifications further in a formal interview.<br><br>
              Thank you for your time and consideration.<br><br>
              Sincerely yours,<br><br>
              (Signature)<br>
              <b>[Your Full Name]</b><br>
              Phone: [Your Mobile Number]<br>
              Email: [Your Email Address]`,
        
        leave: `Date: ${new Date().toLocaleDateString('en-GB')}<br><br>
                To,<br>
                The Principal / Head of Department,<br>
                [Institution/Office Name],<br>
                [Location].<br><br>
                <b>Subject: Application for Leave of Absence due to [Mention Reason].</b><br><br>
                Dear Sir/Madam,<br><br>
                I am writing to respectfully request a leave of absence for [Number] days, starting from [Start Date] to [End Date]. The reason for this request is [Mention reason, e.g., my sister's wedding / sudden illness / personal family matters].<br><br>
                I have ensured that my current responsibilities and pending tasks are properly managed. I will be back in the office/institution on [Return Date] and will resume my duties immediately. I will also be available via email or phone in case of any urgent requirements during my absence.<br><br>
                I kindly request you to grant me this leave and support me during this period. I shall be highly obliged for your kind consideration of my situation.<br><br>
                Yours faithfully,<br><br>
                <b>[Your Name]</b><br>
                [Your Designation/Class/ID]<br>
                Mobile: [Your Number]`,
        
        cover: `Date: ${new Date().toLocaleDateString('en-GB')}<br><br>
                To,<br>
                The Hiring Manager,<br>
                [Company Name],<br>
                [Company Address].<br><br>
                <b>Subject: Cover Letter for the [Position Name] role.</b><br><br>
                Dear Sir/Madam,<br><br>
                I am highly excited to submit my application for the [Position Name] role at [Company Name]. As a professional with [Number] years of experience in [Your Core Skill], I have closely followed your company’s growth and am inspired by your commitment to innovation and quality.<br><br>
                Throughout my career, I have excelled at [Mention a skill, e.g., digital marketing/team management/software development]. My ability to solve complex problems and collaborate effectively with diverse teams makes me a strong fit for your culture. I am particularly drawn to this role because it offers the perfect platform to utilize my expertise in [Specific Skill] to drive tangible results for your organization.<br><br>
                I would be honored to bring my proactive approach and technical proficiency to [Company Name]. Thank you for reviewing my application. I look forward to the possibility of discussing how I can add value to your team.<br><br>
                Best regards,<br><br>
                <b>[Your Name]</b><br>
                LinkedIn: [Your Profile Link]<br>
                Mobile: [Your Number]`
    },
    bn: {
        job: `তারিখ: ${convertDigits(new Date().toLocaleDateString('en-GB'), 'bn')}<br><br>
              বরাবর,<br>
              ব্যবস্থাপক / পরিচালক,<br>
              [প্রতিষ্ঠানের নাম],<br>
              [অফিসের পূর্ণ ঠিকানা]।<br><br>
              <b>বিষয়: [পদের নাম] পদের জন্য আবেদন।</b><br><br>
              মহোদয়,<br><br>
              বিনীত নিবেদন এই যে, গত [তারিখ] তারিখে [পত্রিকার নাম/অনলাইন সোর্স] এ প্রকাশিত বিজ্ঞপ্তির মাধ্যমে জানতে পারলাম যে, আপনার স্বনামধন্য প্রতিষ্ঠানে কিছু সংখ্যক [পদের নাম] নিয়োগ দেওয়া হবে। আমি উক্ত পদের একজন আগ্রহী প্রার্থী হিসেবে আমার প্রয়োজনীয় তথ্যাদি এবং জীবনবৃত্তান্ত আপনার সদয় বিবেচনার জন্য পেশ করছি।<br><br>
              আমি [আপনার শিক্ষাগত যোগ্যতা] সম্পন্ন করেছি এবং আমার [আপনার বিশেষ দক্ষতা/অভিজ্ঞতা] রয়েছে। আমি অত্যন্ত কঠোর পরিশ্রমী, সময়ানুবর্তী এবং যেকোনো প্রতিকূল পরিবেশের সাথে দ্রুত মানিয়ে নিতে সক্ষম। আমার দীর্ঘদিনের অর্জিত অভিজ্ঞতা ও নিষ্ঠা আপনার প্রতিষ্ঠানের ভবিষ্যৎ লক্ষ্য অর্জনে গুরুত্বপূর্ণ ভূমিকা রাখবে বলে আমি বিশ্বাস করি।<br><br>
              আমি আমার পূর্ণাঙ্গ জীবনবৃত্তান্ত (CV) ও প্রয়োজনীয় নথিপত্র এই আবেদনের সাথে সংযুক্ত করেছি। আমার যোগ্যতা যাচাইয়ের জন্য আমাকে একটি সাক্ষাৎকারের সুযোগ দানে আপনার একান্ত মর্জি হয়।<br><br>
              অতএব, মহোদয়ের নিকট বিনীত প্রার্থনা, উপরোক্ত তথ্যাদি বিবেচনা করে আমাকে উক্ত পদে নিয়োগ দানে বাধিত করবেন।<br><br>
              বিনীত নিবেদক,<br><br>
              (স্বাক্ষর)<br>
              <b>[আপনার নাম]</b><br>
              ঠিকানা: [আপনার পূর্ণ ঠিকানা]<br>
              মোবাইল: [আপনার মোবাইল নাম্বার]`,
        
        leave: `তারিখ: ${convertDigits(new Date().toLocaleDateString('en-GB'), 'bn')}<br><br>
                বরাবর,<br>
                প্রধান শিক্ষক / বিভাগীয় প্রধান,<br>
                [শিক্ষা প্রতিষ্ঠান/অফিসের নাম],<br>
                [ঠিকানা]।<br><br>
                <b>বিষয়: [ছুটির কারণ] এর জন্য ছুটির আবেদন।</b><br><br>
                জনাব,<br><br>
                সবিনয় নিবেদন এই যে, আমি আপনার প্রতিষ্ঠানের একজন [আপনার পদবি/শ্রেণি]। আমার [কারণ, যেমন: পারিবারিক অনুষ্ঠান / অসুস্থতা / জরুরি কাজ] এর জন্য আগামী [তারিখ] থেকে [তারিখ] পর্যন্ত মোট [দিন] দিনের ছুটির প্রয়োজন। আমার অনুপস্থিতিকালীন সময়ে আমার উপর অর্পিত দায়িত্বগুলো আমি গুছিয়ে রেখেছি যাতে প্রতিষ্ঠানের কোনো কাজে ব্যাঘাত না ঘটে।<br><br>
                অতএব, মহোদয়ের নিকট আকুল প্রার্থনা এই যে, আমাকে উক্ত দিনগুলোর জন্য ছুটি দানে আপনার একান্ত মর্জি হয়। আমি আপনার এই মহানুভবতার জন্য চিরকৃতজ্ঞ থাকব।<br><br>
                আপনার একান্ত অনুগত,<br><br>
                <b>[আপনার নাম]</b><br>
                পদবি: [আপনার পদবি]<br>
                মোবাইল: [আপনার নাম্বার]`,
        
        cover: `তারিখ: ${convertDigits(new Date().toLocaleDateString('en-GB'), 'bn')}<br><br>
                বরাবর,<br>
                নিয়োগ কর্মকর্তা,<br>
                [প্রতিষ্ঠানের নাম],<br>
                [ঠিকানা]।<br><br>
                <b>বিষয়: [পদের নাম] পদের জন্য কভার লেটার।</b><br><br>
                মহোদয়,<br><br>
                আপনার প্রতিষ্ঠানের [পদের নাম] পদের জন্য প্রকাশিত নিয়োগ বিজ্ঞপ্তিটি আমার দৃষ্টিগোচর হয়েছে। আমি একজন অভিজ্ঞ [আপনার কাজের ক্ষেত্র] পেশাজীবী হিসেবে আপনার প্রতিষ্ঠানের সাথে কাজ করতে অত্যন্ত আগ্রহী। আমি দীর্ঘদিন ধরে আপনার প্রতিষ্ঠানের উন্নয়ন ও অগ্রযাত্রা লক্ষ্য করছি এবং আমি আমার মেধা ও শ্রম দিয়ে আপনার প্রতিষ্ঠানের সাফল্যে অবদান রাখতে চাই।<br><br>
                আমার পেশাগত জীবনে আমি [একটি বিশেষ সাফল্য] অর্জন করেছি এবং আমি বিশ্বাস করি আমার [আপনার বিশেষ দক্ষতা] আপনার প্রতিষ্ঠানের লক্ষ্য অর্জনে সহায়ক হবে। আমি দলের সাথে কাজ করতে পছন্দ করি এবং যেকোনো চ্যালেঞ্জিং কাজ সম্পন্ন করতে আমি আত্মবিশ্বাসী।<br><br>
                আপনার মূল্যবান সময় দেওয়ার জন্য ধন্যবাদ। আমি আশা করছি শীঘ্রই একটি সাক্ষাৎকারের মাধ্যমে আমার যোগ্যতা সবিস্তারে বর্ণনা করার সুযোগ পাব।<br><br>
                ধন্যবাদান্তে,<br><br>
                <b>[আপনার নাম]</b><br>
                মোবাইল: [আপনার নাম্বার]<br>
                ইমেইল: [আপনার ইমেইল]`
    }
};

function openLetterModal() {
    document.getElementById('letterModal').style.display = 'flex';
    if(typeof setActiveMode === 'function') setActiveMode('mode-letter');
    loadTemplate('job'); // ডিফল্ট জব অ্যাপ্লিকেশন লোড
}

function closeLetterModal() { document.getElementById('letterModal').style.display = 'none'; }

function execCmd(command, value = null) { document.execCommand(command, false, value); }

function switchLetterLang(lang) {
    ltLang = lang;
    document.getElementById('lt-en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('lt-bn-btn').classList.toggle('active', lang === 'bn');
    
    const select = document.getElementById('letter-template');
    const tipsBox = document.getElementById('lt-tips-box'); // টিপস বক্সটি ধরা হলো

    if(lang === 'bn') {
        select.options[0].text = "চাকরির আবেদন";
        select.options[1].text = "ছুটির আবেদন";
        select.options[2].text = "সাধারণ কভার লেটার";

        // বাংলা টিপস ইনজেক্ট করা
        tipsBox.innerHTML = `
            <strong><i class='fa-solid fa-circle-info'></i> দরখাস্ত লেখার টিপস:</strong>
            <ul style='margin:0; padding-left:20px; font-size: 13px; font-family: "SolaimanLipi", sans-serif;'>
                <li>যেকোনো টেক্সটের ওপর ক্লিক করে আপনার ব্যক্তিগত তথ্য পরিবর্তন করুন।</li>
                <li>পিডিএফ সেভ করতে: <b>Direct Print</b> বাটনে ক্লিক করুন এবং প্রিন্ট উইন্ডোতে <b>"Save as PDF"</b> সিলেক্ট করুন।</li>
                <li>প্রিন্ট করার আগে <b>তারিখ</b> এবং <b>প্রাপকের ঠিকানা</b> অবশ্যই পুনরায় যাচাই করে নিন।</li>
            </ul>`;
    } else {
        select.options[0].text = "Job Application";
        select.options[1].text = "Leave of Absence";
        select.options[2].text = "General Cover Letter";

        // ইংরেজি টিপস ইনজেক্ট করা
        tipsBox.innerHTML = `
            <strong><i class='fa-solid fa-circle-info'></i> Application Writing Tips:</strong>
            <ul style='margin:0; padding-left:20px; font-size: 12px;'>
                <li>Click on any text to edit and provide your personal information.</li>
                <li>To Save as PDF: Click <b>Direct Print</b> and select <b>"Save as PDF"</b> as the destination.</li>
                <li>Make sure to double-check the <b>Date</b> and <b>Recipient Address</b> before printing.</li>
            </ul>`;
    }
    loadTemplate(select.value);
}

function loadTemplate(type) {
    const editor = document.getElementById('letter-editor');
    editor.innerHTML = letterTemplates[ltLang][type];
}

function updateLetterLayout() {
    const size = document.getElementById('lt-page-size').value;
    const page = document.getElementById('lt-page-unit');
    page.style.width = (size === 'legal') ? "216mm" : "210mm";
    page.style.minHeight = (size === 'legal') ? "345mm" : "297mm";
}

function printLetter() {
    const content = document.getElementById('letter-editor').innerHTML;
    const size = document.getElementById('lt-page-size').value;
    const dim = (size === 'legal') ? '216mm 345mm' : 'A4';
    
    let count = localStorage.getItem('letter_print_count') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('letter_print_count', count);

    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
            <head>
                <title>Cover_Letter_www.idcardscannerpro.com-${count}</title>
                <style>
                    @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
                    @page { size: ${dim}; margin: 0; }
                    body { font-family: 'SolaimanLipi', Arial; padding: 25mm 20mm; background: #fff; }
                    #editor { text-align: justify; font-size: 17px; line-height: 1.6; color: #000; }
                    b, strong { font-weight: bold; }
                </style>
            </head>
            <body><div id="editor">${content}</div></body>
        </html>
    `);
    printWin.document.close();
    setTimeout(() => { printWin.print(); printWin.close(); }, 500);
}

function resetLetter() {
    loadTemplate(document.getElementById('letter-template').value);
}
;

let njpro_frontImg = null;
let njpro_backImg = null;
let njpro_joinedImg = null; 
let njpro_mode = "h"; // CHANGED: Default "h"
let njpro_side = "";
let njpro_pts = [{x:0, y:0}, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}];
let njpro_rawMat = null;
let njpro_scale = 1;
let njpro_currImg = null;

function njpro_openModal() {
    document.getElementById('njpro_main_modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
    if(typeof setActiveMode === 'function') setActiveMode('mode-nid-joiner');
}

function njpro_closeModal() { 
    document.getElementById('njpro_main_modal').style.display = 'none'; 
    document.body.style.overflow = ''; 
    njpro_cancelCrop();
}

function njpro_drawLines() {
    const canvas = document.getElementById('njpro_select_canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(njpro_currImg, 0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#f43f5e";
    ctx.moveTo(njpro_pts[0].x, njpro_pts[0].y);
    ctx.lineTo(njpro_pts[1].x, njpro_pts[1].y);
    ctx.lineTo(njpro_pts[2].x, njpro_pts[2].y);
    ctx.lineTo(njpro_pts[3].x, njpro_pts[3].y);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(244, 63, 94, 0.15)";
    ctx.fill();
}

function njpro_loadPart(input, side) {
    if (input.files && input.files[0]) {
        njpro_side = side;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                njpro_currImg = img;
                const overlay = document.getElementById('njpro_crop_overlay');
                const canvas = document.getElementById('njpro_select_canvas');
                overlay.style.display = 'flex';
                
                const limitW = 750; 
                const limitH = 500; 
                const viewW = Math.min(window.innerWidth * 0.92, limitW);
                const viewH = Math.min(window.innerHeight * 0.7, limitH);
                
                njpro_scale = Math.min(viewW / img.width, viewH / img.height);
                canvas.width = img.width * njpro_scale;
                canvas.height = img.height * njpro_scale;
                
                const pad = 20; 
                njpro_pts = [
                    {id: 'njpro_pt0', x: pad, y: pad},
                    {id: 'njpro_pt1', x: canvas.width - pad, y: pad},
                    {id: 'njpro_pt2', x: canvas.width - pad, y: canvas.height - pad},
                    {id: 'njpro_pt3', x: pad, y: canvas.height - pad}
                ];
                njpro_pts.forEach(p => {
                    const el = document.getElementById(p.id);
                    el.style.left = p.x + 'px'; el.style.top = p.y + 'px';
                    njpro_initDrag(el, p);
                });
                if(njpro_rawMat) njpro_rawMat.delete();
                njpro_rawMat = cv.imread(img);
                njpro_drawLines();
            };
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function njpro_updateZoom(x, y, clientX, clientY) {
    const glass = document.getElementById('njpro_zoom_glass');
    const zCanvas = document.getElementById('njpro_zoom_canvas');
    const zCtx = zCanvas.getContext('2d');
    
    const boundaryEl = document.getElementById('njpro_select_canvas');
    const boundaryRect = boundaryEl.getBoundingClientRect();
    
    const zoomFactor = 2.5; 
    const glassRect = glass.getBoundingClientRect();
    const glassW = glassRect.width;
    const glassH = glassRect.height;
    
    const srcX = x / njpro_scale;
    const srcY = y / njpro_scale;
    const srcW = zCanvas.width / zoomFactor;
    const srcH = zCanvas.height / zoomFactor;
    
    zCtx.clearRect(0,0, zCanvas.width, zCanvas.height);
    zCtx.drawImage(njpro_currImg, 
        srcX - srcW/2, srcY - srcH/2, srcW, srcH, 
        0, 0, zCanvas.width, zCanvas.height
    );
    
    let posLeft = clientX + 30;
    let posTop = clientY - 30 - glassH;

    if (clientX > boundaryRect.left + (boundaryRect.width / 2)) {
        posLeft = clientX - 30 - glassW;
    }
    if (clientY < boundaryRect.top + glassH + 20) {
         posTop = clientY + 40;
    }

    if (posLeft < boundaryRect.left) posLeft = boundaryRect.left;
    if (posLeft + glassW > boundaryRect.right) posLeft = boundaryRect.right - glassW;
    if (posTop < boundaryRect.top) posTop = boundaryRect.top;
    if (posTop + glassH > boundaryRect.bottom) posTop = boundaryRect.bottom - glassH;

    glass.style.left = posLeft + 'px';
    glass.style.top = posTop + 'px';
}

function njpro_initDrag(el, pObj) {
    const glass = document.getElementById('njpro_zoom_glass');
    const move = (e) => {
        const rect = document.getElementById('njpro_select_canvas').getBoundingClientRect();
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        pObj.x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        pObj.y = Math.max(0, Math.min(clientY - rect.top, rect.height));
        el.style.left = pObj.x + 'px'; el.style.top = pObj.y + 'px';
        njpro_drawLines();
        njpro_updateZoom(pObj.x, pObj.y, clientX, clientY);
    };
    const stop = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('touchmove', move);
        glass.style.display = 'none';
    };
    const start = (e) => {
        if(e.cancelable) e.preventDefault();
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        window.addEventListener('mousemove', move);
        window.addEventListener('touchmove', move);
        window.addEventListener('mouseup', stop);
        window.addEventListener('touchend', stop);
        glass.style.display = 'block';
        njpro_updateZoom(pObj.x, pObj.y, clientX, clientY);
    };
    el.onmousedown = start;
    el.ontouchstart = start;
}

function njpro_applyCrop() {
    try {
        let dst = new cv.Mat();
        let coords = [];
        njpro_pts.forEach(p => {
            coords.push(p.x / njpro_scale);
            coords.push(p.y / njpro_scale);
        });
        const stdW = 990, stdH = 630;
        let srcCoords = cv.matFromArray(4, 1, cv.CV_32FC2, coords);
        let dstCoords = cv.matFromArray(4, 1, cv.CV_32FC2, [0, 0, stdW, 0, stdW, stdH, 0, stdH]);
        let M = cv.getPerspectiveTransform(srcCoords, dstCoords);
        cv.warpPerspective(njpro_rawMat, dst, M, new cv.Size(stdW, stdH));
        const tempCan = document.createElement('canvas');
        cv.imshow(tempCan, dst);
        const resImg = new Image();
        resImg.src = tempCan.toDataURL('image/jpeg', 0.95);
        resImg.onload = () => {
            if (njpro_side === 'front') {
                njpro_frontImg = resImg;
                document.getElementById('njpro_txt_f_status').innerText = "Front Cropped ✅";
            } else {
                njpro_backImg = resImg;
                document.getElementById('njpro_txt_b_status').innerText = "Back Cropped ✅";
            }
            njpro_cancelCrop();
            njpro_drawJoined();
        };
        dst.delete(); M.delete(); srcCoords.delete(); dstCoords.delete();
    } catch (e) { alert("Please select all 4 corners correctly."); }
}

function njpro_cancelCrop() { document.getElementById('njpro_crop_overlay').style.display = 'none'; }

function njpro_setMode(mode) {
    njpro_mode = mode;
    document.getElementById('njpro_btn_v').classList.toggle('active', mode === 'v');
    document.getElementById('njpro_btn_h').classList.toggle('active', mode === 'h');
    njpro_drawJoined();
}

function njpro_updateBtns() {
    const isReady = (njpro_frontImg !== null && njpro_backImg !== null);
    const btnJpg = document.getElementById('njpro_dl_jpg');
    const btnPdf = document.getElementById('njpro_dl_pdf');
    if(isReady) {
        btnJpg.disabled = false; btnJpg.style.opacity = '1'; btnJpg.style.cursor = 'pointer';
        btnPdf.disabled = false; btnPdf.style.opacity = '1'; btnPdf.style.cursor = 'pointer';
    } else {
        btnJpg.disabled = true; btnJpg.style.opacity = '0.5'; btnJpg.style.cursor = 'not-allowed';
        btnPdf.disabled = true; btnPdf.style.opacity = '0.5'; btnPdf.style.cursor = 'not-allowed';
    }
}

function njpro_drawJoined() {
    njpro_updateBtns();
    if (!njpro_frontImg && !njpro_backImg) return;
    const canvas = document.getElementById('njpro_main_canvas');
    const ctx = canvas.getContext('2d');
    const hasBorder = document.getElementById('njpro_border_chk').checked;
    document.getElementById('njpro_placeholder').style.display = 'none';
    canvas.style.display = 'inline-block';
    if (njpro_frontImg && njpro_backImg) {
        document.getElementById('njpro_magic_controls').style.display = 'block';
    }
    const stdW = 990, stdH = 630, gap = 30;
    canvas.width = (njpro_mode === 'v') ? stdW + 60 : (stdW * 2) + gap + 60;
    canvas.height = (njpro_mode === 'v') ? (stdH * 2) + gap + 60 : stdH + 60;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    function draw(img, x, y) {
        ctx.drawImage(img, x, y, stdW, stdH);
        if(hasBorder) {
            ctx.strokeStyle = "#000"; ctx.lineWidth = 3; ctx.strokeRect(x, y, stdW, stdH);
        }
    }
    if (njpro_frontImg) draw(njpro_frontImg, 30, 30);
    if (njpro_backImg) {
        if (njpro_mode === 'v') draw(njpro_backImg, 30, stdH + gap + 30);
        else draw(njpro_backImg, stdW + gap + 30, 30);
    }
    if (njpro_frontImg && njpro_backImg) {
        njpro_joinedImg = new Image();
        njpro_joinedImg.src = canvas.toDataURL();
    }
}

function njpro_applyMagic() {
    if (!njpro_joinedImg) return;
    const canvas = document.getElementById('njpro_main_canvas');
    let src = cv.imread(njpro_joinedImg);
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
    let lab = new cv.Mat();
    cv.cvtColor(src, lab, cv.COLOR_RGB2Lab);
    let channels = new cv.MatVector();
    cv.split(lab, channels);
    let clahe = new cv.CLAHE(2.0, new cv.Size(8, 8));
    clahe.apply(channels.get(0), channels.get(0));
    cv.merge(channels, lab);
    cv.cvtColor(lab, dst, cv.COLOR_Lab2RGB);
    cv.imshow(canvas, dst);
    src.delete(); dst.delete(); lab.delete(); channels.delete(); clahe.delete();
    document.getElementById('njpro_range_sat').value = 110;
    document.getElementById('njpro_range_ct').value = 120;
    njpro_updateFilters();
}

function njpro_updateFilters() {
    const canvas = document.getElementById('njpro_main_canvas');
    const sat = document.getElementById('njpro_range_sat').value;
    const ct = document.getElementById('njpro_range_ct').value;
    document.getElementById('njpro_val_sat').innerText = sat + "%";
    document.getElementById('njpro_val_ct').innerText = ct + "%";
    canvas.style.filter = `saturate(${sat}%) contrast(${ct}%) brightness(105%)`;
}

function njpro_downloadPDF() {
    if (!njpro_frontImg || !njpro_backImg) { alert("Please crop both Front and Back sides first."); return; }
    const canvas = document.getElementById('njpro_main_canvas');
    if (canvas.style.display === 'none') return;
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tCtx = tempCanvas.getContext('2d');
    tCtx.filter = canvas.style.filter;
    tCtx.drawImage(canvas, 0, 0);
    const imgData = tempCanvas.toDataURL('image/jpeg', 1.0);
    const coreCardPx = 990; 
    const coreCardMm = 3.3 * 25.4; 
    const imgW = (canvas.width / coreCardPx) * coreCardMm;
    const imgH = (canvas.height / canvas.width) * imgW;
    const a4W = 210;
    const xPos = (a4W - imgW) / 2;
    pdf.addImage(imgData, 'JPEG', xPos, 5, imgW, imgH);
    pdf.save(`NID_Joined_A4_${Date.now()}.pdf`);
}

function njpro_downloadJPG() {
    if (!njpro_frontImg || !njpro_backImg) { alert("Please crop both Front and Back sides first."); return; }
    const canvas = document.getElementById('njpro_main_canvas');
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tCtx = tempCanvas.getContext('2d');
    tCtx.filter = canvas.style.filter;
    tCtx.drawImage(canvas, 0, 0);
    const link = document.createElement('a');
    link.download = `Joined_NID_${Date.now()}.jpg`;
    link.href = tempCanvas.toDataURL("image/jpeg", 0.95);
    link.click();
}

function njpro_resetAll() {
    njpro_frontImg = njpro_backImg = null;
    document.getElementById('njpro_front_in').value = "";
    document.getElementById('njpro_back_in').value = "";
    document.getElementById('njpro_txt_f_status').innerText = "Upload Front Side";
    document.getElementById('njpro_txt_b_status').innerText = "Upload Back Side";
    document.getElementById('njpro_main_canvas').style.display = 'none';
    document.getElementById('njpro_magic_controls').style.display = 'none';
    document.getElementById('njpro_placeholder').style.display = 'block';
    njpro_updateBtns();
}
;

let pndMainImage = null;
let pndCurrentLang = 'en';

function openPndModal() {
    if (typeof setActiveMode === "function") setActiveMode('mode-pnd');
    document.getElementById('pndModal').style.display = 'flex';
}

function closePndModal() {
    document.getElementById('pndModal').style.display = 'none';
}

function setPndLang(lang) {
    pndCurrentLang = lang;
    const modal = document.getElementById('pndModal');
    
    modal.querySelectorAll('.ph-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`pnd-${lang}-btn`).classList.add('active');
    
    const nameInp = document.getElementById('pnd-name');
    const dateInp = document.getElementById('pnd-date');

    if (lang === 'bn') {
        document.getElementById('pnd-main-title').innerHTML = '<i class="fa-solid fa-file-signature"></i> ফটো নাম ও তারিখ এডার';
        document.getElementById('pnd-upload-text').innerText = 'ছবি আপলোড করতে ক্লিক করুন';
        document.getElementById('lbl-pnd-name').innerText = 'পূর্ণ নাম (বাংলায়)';
        document.getElementById('lbl-pnd-date').innerText = 'তারিখ (বাংলায়)';
        document.getElementById('lbl-pnd-line').innerText = 'মাঝখানে লাইন যোগ করুন';
        document.getElementById('pnd-intro-text').innerHTML = 'এখান থেকে ছবিটি ডাউনলোড করে আমাদের <b>পাসপোর্ট ফটো মেকার</b> দিয়ে এ৪ পেপারে সাজিয়ে প্রিন্ট করে নিতে পারবেন।';
        
        nameInp.placeholder = 'মোঃ ফয়জুল করিম';
        dateInp.placeholder = '২৪/০১/২০২৬';
        nameInp.style.fontFamily = "'SolaimanLipi', sans-serif";
        dateInp.style.fontFamily = "'SolaimanLipi', sans-serif";
    } else {
        document.getElementById('pnd-main-title').innerHTML = '<i class="fa-solid fa-file-signature"></i> Photo Name & Date Adder';
        document.getElementById('pnd-upload-text').innerText = 'Click to Upload Photo';
        document.getElementById('lbl-pnd-name').innerText = 'Type Full Name';
        document.getElementById('lbl-pnd-date').innerText = 'Type Date';
        document.getElementById('lbl-pnd-line').innerText = 'Add Separator Line';
        document.getElementById('pnd-intro-text').innerHTML = 'Download your edited photo from here and use our <b>Passport Photo Maker</b> tool to print it on A4 paper.';
        
        nameInp.placeholder = 'MD. FYZAL KARIM';
        dateInp.placeholder = '24/01/2026';
        nameInp.style.fontFamily = "inherit";
        dateInp.style.fontFamily = "inherit";
    }
    drawPndCanvas();
}

function loadPndImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        pndMainImage = new Image();
        pndMainImage.onload = function() {
            // Show preview box only when image is loaded
            document.getElementById('pnd-preview-box-wrapper').style.display = 'flex';
            drawPndCanvas();
        };
        pndMainImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function drawPndCanvas() {
    if (!pndMainImage) return;

    const canvas = document.getElementById('pnd-canvas');
    const ctx = canvas.getContext('2d');
    
    const name = document.getElementById('pnd-name').value;
    const date = document.getElementById('pnd-date').value;
    const nameColor = document.getElementById('pnd-name-color').value;
    const dateColor = document.getElementById('pnd-date-color').value;
    const showLine = document.getElementById('pnd-show-line').checked;
    const lineColor = document.getElementById('pnd-line-color').value;
    const fontSize = document.getElementById('pnd-font-size').value;

    canvas.width = pndMainImage.width;
    canvas.height = pndMainImage.height;

    ctx.drawImage(pndMainImage, 0, 0);

    // Footer white box logic (Only if name or date or line is present)
    if (name || date || showLine) {
        const boxHeight = canvas.height * 0.20;
        ctx.fillStyle = "white";
        ctx.fillRect(0, canvas.height - boxHeight, canvas.width, boxHeight);

        ctx.textAlign = "center";
        const fontFam = pndCurrentLang === 'bn' ? 'SolaimanLipi' : 'Arial';
        const responsiveFS = fontSize * (canvas.width / 400);

        // Draw Name
        ctx.fillStyle = nameColor;
        ctx.font = `bold ${responsiveFS}px ${fontFam}`;
        ctx.fillText(name, canvas.width / 2, canvas.height - (boxHeight * 0.62));

        // Draw Line (Separator Line Fix)
        if (showLine) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            // Line width adjusted for image resolution
            ctx.lineWidth = Math.max(1.5, canvas.width / 250); 
            const lineY = canvas.height - (boxHeight * 0.45);
            ctx.moveTo(canvas.width * 0.1, lineY);
            ctx.lineTo(canvas.width * 0.9, lineY);
            ctx.stroke();
            ctx.closePath();
        }

        // Draw Date
        ctx.fillStyle = dateColor;
        ctx.font = `${responsiveFS * 0.85}px ${fontFam}`;
        ctx.fillText(date, canvas.width / 2, canvas.height - (boxHeight * 0.18));
    }
}

function downloadPndImage() {
    if (!pndMainImage) return alert("Please upload a photo first!");
    const canvas = document.getElementById('pnd-canvas');
    const link = document.createElement('a');
    link.download = 'IDScannerPro_Photo.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
}

function resetPnd() {
    pndMainImage = null;
    document.getElementById('pnd-name').value = '';
    document.getElementById('pnd-date').value = '';
    document.getElementById('pnd-input').value = '';
    document.getElementById('pnd-show-line').checked = false;
    // Hide preview box on reset
    document.getElementById('pnd-preview-box-wrapper').style.display = 'none';
    
    // Clear Canvas
    const canvas = document.getElementById('pnd-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
;

let idmLogoImg = null;
let idmStudentImg = null;
let idmCurrentLang = 'en';
let idmOrient = 'h'; 

function openIdCardModal() {
    if (typeof setActiveMode === "function") setActiveMode('mode-student-id');
    document.getElementById('idCardModal').style.display = 'flex';
}

function closeIdCardModal() {
    document.getElementById('idCardModal').style.display = 'none';
}

function setIdOrient(mode) {
    idmOrient = mode;
    document.getElementById('idm-h-btn').classList.toggle('active', mode === 'h');
    document.getElementById('idm-v-btn').classList.toggle('active', mode === 'v');
    drawIdCard();
}

function setIdLang(lang) {
    idmCurrentLang = lang;
    const modal = document.getElementById('idCardModal');
    modal.querySelectorAll('.ph-tab').forEach(btn => {
        if(btn.id.includes('en') || btn.id.includes('bn')) btn.classList.remove('active');
    });
    document.getElementById(`idm-${lang}-btn`).classList.add('active');

    const elements = {
        'idm-main-title': lang === 'bn' ? '<i class="fa-solid fa-address-card"></i> স্টুডেন্ট আইডি কার্ড মেকার' : '<i class="fa-solid fa-address-card"></i> Student ID Card Maker',
        'lbl-inst-name': lang === 'bn' ? 'প্রতিষ্ঠানের নাম' : 'Institution Name',
        'txt-up-logo': lang === 'bn' ? 'লোগো আপলোড' : 'Upload Logo',
        'txt-up-photo': lang === 'bn' ? 'ছাত্রের ছবি' : 'Student Photo',
        'lbl-idm-name': lang === 'bn' ? 'ছাত্র/ছাত্রীর নাম' : 'Student Name',
        'lbl-idm-class': lang === 'bn' ? 'শ্রেণী' : 'Class',
        'lbl-idm-roll': lang === 'bn' ? 'রোল নং' : 'Roll No',
        'lbl-idm-father': lang === 'bn' ? 'পিতার নাম' : 'Father\'s Name',
        'lbl-idm-blood': lang === 'bn' ? 'রক্তের গ্রুপ' : 'Blood Group',
        'lbl-idm-phone': lang === 'bn' ? 'ফোন' : 'Phone',
        'lbl-idm-theme': lang === 'bn' ? 'কার্ডের থিম কালার' : 'Card Theme Color',
        'idm-intro-text': lang === 'bn' ? 'প্রফেশনাল আইডি কার্ড তৈরি করুন (৩.৩৭ x ২.১২৫ ইঞ্চি)। এটি স্টুডিও প্রিন্টিংয়ের জন্য উপযুক্ত।' : 'Professional Student ID Card (3.37 x 2.125 in). Ready for studio printing.'
    };

    for (let id in elements) {
        let el = document.getElementById(id);
        if(el) el.innerHTML = elements[id];
    }
    drawIdCard();
}

function loadIdAsset(event, type) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            if (type === 'logo') idmLogoImg = img;
            else idmStudentImg = img;
            document.getElementById('idm-canvas').style.display = 'block';
            document.getElementById('idm-placeholder').style.display = 'none';
            drawIdCard();
        };
        img.src = e.target.result;
    };
    if(event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}

function drawIdCard() {
    const canvas = document.getElementById('idm-canvas');
    const ctx = canvas.getContext('2d');
    
    if(idmOrient === 'h') {
        canvas.width = 1012; canvas.height = 638;
    } else {
        canvas.width = 638; canvas.height = 1012;
    }

    const themeColor = document.getElementById('idm-color').value;
    const inst = document.getElementById('idm-inst').value || (idmCurrentLang === 'bn' ? 'প্রতিষ্ঠানের নাম' : 'INSTITUTION NAME');
    const name = document.getElementById('idm-name').value || (idmCurrentLang === 'bn' ? 'ছাত্রের নাম' : 'STUDENT NAME');
    const s_class = document.getElementById('idm-class').value;
    const roll = document.getElementById('idm-roll').value;
    const father = document.getElementById('idm-father').value;
    const blood = document.getElementById('idm-blood').value;
    const phone = document.getElementById('idm-phone').value;

    const fontBN = 'SolaimanLipi';
    const fontEN = 'Arial';
    const activeFont = idmCurrentLang === 'bn' ? fontBN : fontEN;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (idmOrient === 'h') {
        ctx.fillStyle = themeColor; ctx.fillRect(0, 0, canvas.width, 180);
        ctx.fillStyle = "#ffffff"; ctx.textAlign = "center";
        ctx.font = `bold 42px ${activeFont}`; ctx.fillText(inst, canvas.width / 2 + 50, 80);
        ctx.font = `24px ${activeFont}`; ctx.fillText(idmCurrentLang === 'bn' ? 'স্টুডেন্ট আইডি কার্ড' : 'Student ID Card', canvas.width / 2 + 50, 130);
        if (idmLogoImg) ctx.drawImage(idmLogoImg, 40, 30, 120, 120);
        ctx.strokeStyle = themeColor; ctx.lineWidth = 5; ctx.strokeRect(50, 220, 240, 290);
        if (idmStudentImg) ctx.drawImage(idmStudentImg, 55, 225, 230, 280);
        ctx.textAlign = "left"; ctx.fillStyle = themeColor;
        ctx.font = `bold 36px ${activeFont}`; ctx.fillText(name, 330, 260);
        ctx.fillStyle = "#374151"; ctx.font = `26px ${activeFont}`;
        let y = 320;
        const labels = idmCurrentLang === 'bn' ? ['শ্রেণী', 'রোল', 'পিতার নাম', 'রক্ত', 'ফোন'] : ['Class', 'Roll', 'Father', 'Blood', 'Phone'];
        const values = [s_class, roll, father, blood, phone];
        labels.forEach((l, i) => {
            ctx.fillStyle = "#6b7280"; ctx.fillText(l + " :", 330, y);
            ctx.fillStyle = "#111827"; ctx.font = `bold 26px ${activeFont}`;
            ctx.fillText(values[i] || '---', 480, y);
            y += 50;
        });
        ctx.fillStyle = themeColor; ctx.fillRect(0, 600, canvas.width, 38);
    } else {
        ctx.fillStyle = themeColor; ctx.fillRect(0, 0, canvas.width, 220);
        if (idmLogoImg) ctx.drawImage(idmLogoImg, canvas.width/2 - 50, 20, 100, 100);
        ctx.fillStyle = "#ffffff"; ctx.textAlign = "center";
        ctx.font = `bold 35px ${activeFont}`; ctx.fillText(inst, canvas.width / 2, 160);
        ctx.font = `20px ${activeFont}`; ctx.fillText(idmCurrentLang === 'bn' ? 'স্টুডেন্ট আইডি কার্ড' : 'Student ID Card', canvas.width / 2, 195);
        ctx.strokeStyle = themeColor; ctx.lineWidth = 5; ctx.strokeRect(canvas.width/2 - 110, 250, 220, 270);
        if (idmStudentImg) ctx.drawImage(idmStudentImg, canvas.width/2 - 105, 255, 210, 260);
        ctx.fillStyle = themeColor; ctx.font = `bold 34px ${activeFont}`; ctx.fillText(name, canvas.width/2, 580);
        ctx.textAlign = "left"; ctx.font = `24px ${activeFont}`;
        let y = 640;
        const labels = idmCurrentLang === 'bn' ? ['শ্রেণী', 'রোল', 'পিতা', 'রক্ত', 'ফোন'] : ['Class', 'Roll', 'Father', 'Blood', 'Phone'];
        const values = [s_class, roll, father, blood, phone];
        labels.forEach((l, i) => {
            ctx.fillStyle = "#6b7280"; ctx.fillText(l + ":", 100, y);
            ctx.fillStyle = "#111827"; ctx.font = `bold 24px ${activeFont}`; ctx.fillText(values[i] || '---', 220, y);
            y += 55;
        });
        ctx.fillStyle = themeColor; ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
    }
}

function downloadIdCard() {
    const canvas = document.getElementById('idm-canvas');
    if (!idmStudentImg && !idmLogoImg) return alert("Please fill data and upload photo!");
    
    const link = document.createElement('a');
    link.download = 'ID_Card_ScannerPro.jpg';
    
    // এখানে ০.৯৮ এর জায়গায় ১.০ করা হয়েছে ফুল কোয়ালিটির জন্য
    link.href = canvas.toDataURL('image/jpeg', 1.0); 
    link.click();
}

function resetIdCard() {
    idmLogoImg = null; idmStudentImg = null;
    document.querySelectorAll('.idm-inputs-side input').forEach(i => i.value = '');
    document.getElementById('idm-canvas').style.display = 'none';
    document.getElementById('idm-placeholder').style.display = 'flex';
    setIdLang('en'); setIdOrient('h');
}
;

function filterTools() {
    const input = document.getElementById('toolSearchInput');
    const filter = input.value.toLowerCase().trim();
    const clearBtn = document.getElementById('clearSearch');
    const msg = document.getElementById('searchMessage');
    
    // আপনার সাইটের সব বাটন ধরবে, সেগুলো যেখানেই থাকুক না কেন
    const allTools = document.querySelectorAll('.mode-card-btn');
    const allSeparators = document.querySelectorAll('.mode-separator');
    
    let foundCount = 0;

    // ক্লিয়ার বাটন দেখানো বা লুকানো
    if (filter.length > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }

    allTools.forEach(tool => {
        // বাটনের ভেতরের টেক্সট এবং আইডি চেক করা
        const toolText = tool.innerText.toLowerCase();
        const toolId = tool.id.toLowerCase();

        if (toolText.includes(filter) || toolId.includes(filter)) {
            // যদি সার্চের সাথে মিলে যায়
            tool.style.setProperty('display', 'flex', 'important');
            foundCount++;
        } else {
            // যদি না মিলে, তবে একদম হাইড করে দেবে
            tool.style.setProperty('display', 'none', 'important');
        }
    });

    // সেপারেটর বা টাইটেল বারগুলো (Toll section 1, cloud section...) সার্চের সময় হাইড করবে
    allSeparators.forEach(sep => {
        if (filter.length > 0) {
            sep.style.setProperty('display', 'none', 'important');
        } else {
            sep.style.setProperty('display', 'flex', 'important');
        }
    });

    // রেজাল্ট না পাওয়া গেলে মেসেজ দেখানো
    if (filter.length > 0 && foundCount === 0) {
        msg.style.setProperty('display', 'block', 'important');
    } else {
        msg.style.setProperty('display', 'none', 'important');
    }
}

function resetSearch() {
    const input = document.getElementById('toolSearchInput');
    input.value = "";
    filterTools(); // সব টুল আবার দেখাবে
    input.focus();
}
;

let bioPhotoBase64 = null;
let bioCurrentLang = 'en';
let bioType = 'job';

function openBiodataModal() {
    document.getElementById('biodataModal').style.display = 'flex';
    updateBioPreview();
}

function closeBiodataModal() {
    document.getElementById('biodataModal').style.display = 'none';
}

function setBioLang(lang) {
    bioCurrentLang = lang;
    document.getElementById('bio-en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('bio-bn-btn').classList.toggle('active', lang === 'bn');
    updateBioPreview();
}

function setBioType(type) {
    bioType = type;
    document.getElementById('type-job-btn').classList.toggle('active', type === 'job');
    document.getElementById('type-marriage-btn').classList.toggle('active', type === 'marriage');
    document.getElementById('marriage-fields').style.display = type === 'marriage' ? 'grid' : 'none';
    document.getElementById('job-exp-group').style.display = type === 'marriage' ? 'none' : 'block';
    updateBioPreview();
}

function loadBioPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            bioPhotoBase64 = e.target.result;
            updateBioPreview();
        };
        reader.readAsDataURL(file);
    }
}

// ইনপুট ইভেন্ট লিসেনার
const inputIds = ['bio-name', 'bio-father', 'bio-mother', 'bio-dob', 'bio-religion', 'bio-edu', 'bio-exp', 'bio-addr', 'bio-phone', 'bio-email', 'bio-height', 'bio-blood'];
inputIds.forEach(id => {
    document.getElementById(id).addEventListener('input', updateBioPreview);
});

function updateBioPreview() {
    const renderArea = document.getElementById('bio-render-area');
    
    // টাইটেল সেট করা
    const titleObj = {
        job: { en: 'CURRICULUM VITAE', bn: 'জীবনবৃত্তান্ত' },
        marriage: { en: 'BIODATA', bn: 'বায়োডাটা' }
    };
    document.getElementById('pre-title').innerText = titleObj[bioType][bioCurrentLang];
    
    // নাম সেট করা
    document.getElementById('pre-name').innerText = document.getElementById('bio-name').value || (bioCurrentLang === 'bn' ? 'আপনার নাম' : 'YOUR NAME');
    
    // ছবি সেট করা
    if(bioPhotoBase64) {
        document.getElementById('pre-img-box').innerHTML = `<img src="${bioPhotoBase64}" style="width:100%; height:100%; object-fit:cover;">`;
    }

    // ডিটেইলস ডাটা
    const labels = bioCurrentLang === 'bn' ? 
        {f:'পিতার নাম', m:'মাতার নাম', d:'জন্ম তারিখ', r:'ধর্ম', h:'উচ্চতা', b:'রক্তের গ্রুপ', p:'ফোন', e:'ইমেইল'} : 
        {f:"Father's Name", m:"Mother's Name", d:'Date of Birth', r:'Religion', h:'Height', b:'Blood Group', p:'Phone', e:'Email'};

    let detailsHtml = `
        <b>${labels.f}:</b> ${document.getElementById('bio-father').value}<br>
        <b>${labels.m}:</b> ${document.getElementById('bio-mother').value}<br>
        <b>${labels.d}:</b> ${document.getElementById('bio-dob').value}<br>
        <b>${labels.r}:</b> ${document.getElementById('bio-religion').value}<br>
    `;
    
    if(bioType === 'marriage') {
        detailsHtml += `<b>${labels.h}:</b> ${document.getElementById('bio-height').value}<br>`;
        detailsHtml += `<b>${labels.b}:</b> ${document.getElementById('bio-blood').value}<br>`;
    }
    detailsHtml += `<b>${labels.p}:</b> ${document.getElementById('bio-phone').value}<br>`;
    detailsHtml += `<b>${labels.e}:</b> ${document.getElementById('bio-email').value}`;
    document.getElementById('pre-details').innerHTML = detailsHtml;

    // সেকশন ডাটা
    let sectionsHtml = `
        <div style="margin-top:15px; border-top:1px solid #eee; padding-top:10px;">
            <h3 style="font-size:14px; color:#7c3aed; margin-bottom:5px; border-bottom:1px solid #f3f0ff; display:inline-block;">${bioCurrentLang === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education'}</h3>
            <p style="white-space: pre-line; margin:0;">${document.getElementById('bio-edu').value}</p>
        </div>
    `;

    if(bioType === 'job') {
        sectionsHtml += `
            <div style="margin-top:15px;">
                <h3 style="font-size:14px; color:#7c3aed; margin-bottom:5px; border-bottom:1px solid #f3f0ff; display:inline-block;">${bioCurrentLang === 'bn' ? 'অভিজ্ঞতা ও দক্ষতা' : 'Experience & Skills'}</h3>
                <p style="white-space: pre-line; margin:0;">${document.getElementById('bio-exp').value}</p>
            </div>
        `;
    }

    sectionsHtml += `
        <div style="margin-top:15px;">
            <h3 style="font-size:14px; color:#7c3aed; margin-bottom:5px; border-bottom:1px solid #f3f0ff; display:inline-block;">${bioCurrentLang === 'bn' ? 'ঠিকানা' : 'Address'}</h3>
            <p style="white-space: pre-line; margin:0;">${document.getElementById('bio-addr').value}</p>
        </div>
    `;
    document.getElementById('pre-sections').innerHTML = sectionsHtml;
}

// পিডিএফ ডাউনলোড ফাংশন (নিখুঁত করার জন্য আপডেট করা হয়েছে)
async function downloadBiodataPDF() {
    const element = document.getElementById('bio-render-area');
    const btn = document.getElementById('download-btn');
    
    // বাটন সাময়িক পরিবর্তন
    const originalText = btn.innerHTML;
    btn.innerHTML = "Processing...";
    btn.style.opacity = "0.5";

    // পিডিএফ অপশন
    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Biodata_ScannerPro.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 3, 
            useCORS: true, 
            letterRendering: true,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        // html2pdf রান করা
        await html2pdf().set(opt).from(element).save();
    } catch (error) {
        console.error("PDF Error:", error);
        alert("Could not generate PDF. Please try again.");
    } finally {
        btn.innerHTML = originalText;
        btn.style.opacity = "1";
    }
}

function resetBiodata() {
    // অ্যালার্ট ছাড়াই সরাসরি সব ইনপুট ক্লিয়ার করে দিবে
    inputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
    
    bioPhotoBase64 = null;
    document.getElementById('pre-img-box').innerHTML = '<span style="color: #ccc; font-size: 10px;">Photo</span>';
    
    // প্রিভিউ আপডেট করে রিসেট অবস্থা দেখাবে
    updateBioPreview();
}
;

let translationMode = 'en-bn';

function openTranslatorModal() {
    setActiveMode('mode-translator');
    document.getElementById('translatorModal').style.display = 'flex';
}

// ক্লোজ করলে সম্পূর্ণ রিসেট হবে
function closeTranslatorModal() {
    document.getElementById('translatorModal').style.display = 'none';
    resetTranslator(); // রিসেট ফাংশন কল
}

// রিসেট ফাংশন
function resetTranslator() {
    translationMode = 'en-bn';
    document.getElementById('transInput').value = '';
    document.getElementById('transOutput').innerText = 'অনুবাদ এখানে দেখা যাবে...';
    document.getElementById('transInput').placeholder = 'Type English here...';
    
    // মোড লেবেল রিসেট
    const sourceLbl = document.getElementById('label-source');
    const targetLbl = document.getElementById('label-target');
    sourceLbl.innerText = 'ENGLISH';
    sourceLbl.style.color = '#4f46e5';
    targetLbl.innerText = 'BENGALI';
    targetLbl.style.color = '#059669';
    
    // বাটন রিসেট
    document.getElementById('copy-btn-text').innerText = 'Copy';
    document.getElementById('btn-swap').style.transform = 'rotate(0deg)';
}

function swapTranslationMode() {
    const sourceLbl = document.getElementById('label-source');
    const targetLbl = document.getElementById('label-target');
    const inputArea = document.getElementById('transInput');
    const outputArea = document.getElementById('transOutput');
    const swapBtn = document.getElementById('btn-swap');

    swapBtn.style.transform = swapBtn.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

    if (translationMode === 'en-bn') {
        translationMode = 'bn-en';
        sourceLbl.innerText = 'BENGALI';
        sourceLbl.style.color = '#059669';
        targetLbl.innerText = 'ENGLISH';
        targetLbl.style.color = '#4f46e5';
        inputArea.placeholder = 'এখানে বাংলা লিখুন...';
        outputArea.innerText = 'Translation will appear here...';
    } else {
        translationMode = 'en-bn';
        sourceLbl.innerText = 'ENGLISH';
        sourceLbl.style.color = '#4f46e5';
        targetLbl.innerText = 'BENGALI';
        targetLbl.style.color = '#059669';
        inputArea.placeholder = 'Type English here...';
        outputArea.innerText = 'অনুবাদ এখানে দেখা যাবে...';
    }
    inputArea.value = '';
}

async function processTranslation() {
    const text = document.getElementById('transInput').value.trim();
    const outputDiv = document.getElementById('transOutput');
    const btn = document.getElementById('btnTranslate');

    if (!text) return;

    let sl = 'en', tl = 'bn';
    if (translationMode === 'bn-en') {
        sl = 'bn'; tl = 'en';
    }

    try {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        outputDiv.innerHTML = translationMode === 'en-bn' ? "অনুবাদ করা হচ্ছে..." : "Translating...";

        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`);
        const data = await response.json();

        let translatedText = "";
        data[0].forEach(item => {
            if (item[0]) translatedText += item[0];
        });

        outputDiv.innerText = translatedText;
    } catch (error) {
        outputDiv.innerHTML = "<span style='color:red;'>Error! Check internet.</span>";
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-bolt"></i> Translate Now';
    }
}

// কপি ফাংশন (অ্যালার্ট ছাড়া টেক্সট চেঞ্জ)
function copyTranslation() {
    const text = document.getElementById('transOutput').innerText;
    const btnText = document.getElementById('copy-btn-text');
    const placeholder = translationMode === 'en-bn' ? "অনুবাদ এখানে দেখা যাবে..." : "Translation will appear here...";

    if (text && text !== placeholder && !text.includes("Processing")) {
        navigator.clipboard.writeText(text).then(() => {
            btnText.innerText = "Copied!"; // টেক্সট পরিবর্তন
            
            // ২ সেকেন্ড পর আবার আগের লেখা ফিরিয়ে আনা
            setTimeout(() => {
                btnText.innerText = "Copy";
            }, 2000);
        });
    }
}
;

function openUnitModal() {
    setActiveMode('mode-unit-conv');
    document.getElementById('unitModal').style.display = 'flex';
}

function closeUnitModal() {
    document.getElementById('unitModal').style.display = 'none';
    resetUnitConverter();
}

// Reset Logic
function resetUnitConverter() {
    document.getElementById('h-feet').value = '';
    document.getElementById('h-inch').value = '';
    document.getElementById('w-kg').value = '';
    document.getElementById('res-cm').innerText = '0.00';
    document.getElementById('res-lbs').innerText = '0.00';
}

// Height Calculation (Feet/Inch to CM)
function calculateHeight() {
    const feet = parseFloat(document.getElementById('h-feet').value) || 0;
    const inch = parseFloat(document.getElementById('h-inch').value) || 0;
    
    // 1 foot = 30.48 cm, 1 inch = 2.54 cm
    const cm = (feet * 30.48) + (inch * 2.54);
    document.getElementById('res-cm').innerText = cm.toFixed(2);
}

// Weight Calculation (KG to Lbs)
function calculateWeight() {
    const kg = parseFloat(document.getElementById('w-kg').value) || 0;
    
    // 1 kg = 2.20462 lbs
    const lbs = kg * 2.20462;
    document.getElementById('res-lbs').innerText = lbs.toFixed(2);
}

// Copy Logic with Text Change (No Alert)
function copyUnitRes(elementId, btn) {
    const text = document.getElementById(elementId).innerText;
    const originalBtnText = btn.innerText;

    if (text && text !== "0.00") {
        navigator.clipboard.writeText(text).then(() => {
            btn.innerText = "Copied!"; // টেক্সট পরিবর্তন
            btn.style.background = "#059669"; // গ্রিন কালার (সফলতা বোঝাতে)

            // ২ সেকেন্ড পর আবার আগের অবস্থায় ফিরে আসবে
            setTimeout(() => {
                btn.innerText = originalBtnText;
                btn.style.background = (elementId === 'res-cm') ? "#0d9488" : "#475569";
            }, 2000);
        });
    }
}
;

let uploadedImages = [];

function openScannerModal() {
setActiveMode('mode-scanner');
    document.getElementById('scannerModal').style.display = 'flex';
}

function openBnConverterModal() {
setActiveMode('mode-bn-converter');
    document.getElementById('bnConverterModal').style.display = 'flex';
}


function openWeddingModal() {
setActiveMode('mode-wedding');
    document.getElementById('weddingModal').style.display = 'flex';
    updateWedCard();
}


function njpro_openModal() {
    setActiveMode('njpro_launcher_btn');
    document.getElementById('njpro_main_modal').style.display = 'flex';
}


function openBiodataModal() {
    setActiveMode('mode-cv-maker');
    document.getElementById('biodataModal').style.display = 'flex';
    updateBioPreview();
}

function openImgPdfModal() {
    setActiveMode('mode-img-pdf');
    document.getElementById('imgPdfModal').style.display = 'flex';
}

function closeImgPdfModal() {
    document.getElementById('imgPdfModal').style.display = 'none';
    resetPdfTool();
}

function resetPdfTool() {
    uploadedImages = [];
    document.getElementById('imgPdfInput').value = '';
    document.getElementById('pdf-preview-container').innerHTML = '';
    document.getElementById('pdf-actions').style.display = 'none';
}

function handleImageUpload(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('pdf-preview-container');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) continue;

        const reader = new FileReader();
        reader.onload = function(e) {
            const imgData = e.target.result;
            uploadedImages.push(imgData);

            // প্রিভিউ তৈরি (এখানে &#215; ব্যবহার করা হয়েছে)
            const div = document.createElement('div');
            div.style.position = 'relative';
            div.className = 'img-preview-item';
            div.innerHTML = `
                <img src="${imgData}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0;">
                <span onclick="removeImageFromPdf(${uploadedImages.length - 1})" style="position: absolute; top: -5px; right: -5px; background: #ef4444; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; font-weight: bold; border: 2px solid white;">&#215;</span>
            `;
            previewContainer.appendChild(div);
            updatePdfUI();
        };
        reader.readAsDataURL(file);
    }
}

function removeImageFromPdf(index) { // ফাংশনের নাম পরিবর্তন করা হয়েছে
    uploadedImages.splice(index, 1);
    renderPreviews();
    updatePdfUI();
}

function renderPreviews() {
    const previewContainer = document.getElementById('pdf-preview-container');
    previewContainer.innerHTML = '';
    uploadedImages.forEach((img, i) => {
        const div = document.createElement('div');
        div.style.position = 'relative';
        div.innerHTML = `
            <img src="${img}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0;">
            <span onclick="removeImageFromPdf(${i})" style="position: absolute; top: -5px; right: -5px; background: #ef4444; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; font-weight: bold; border: 2px solid white;">&#215;</span>
        `;
        previewContainer.appendChild(div);
    });
}

function updatePdfUI() {
    const actions = document.getElementById('pdf-actions');
    const countText = document.getElementById('imgCount');
    actions.style.display = uploadedImages.length > 0 ? 'block' : 'none';
    countText.innerText = `Total: ${uploadedImages.length} Images`;
}

async function generatePDF() {
    if (uploadedImages.length === 0) return;
    const { jsPDF } = window.jspdf;
    const btn = document.getElementById('btnGeneratePdf');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < uploadedImages.length; i++) {
        if (i > 0) pdf.addPage();
        const imgProps = pdf.getImageProperties(uploadedImages[i]);
        const ratio = Math.min(pdfWidth / imgProps.width, pdfHeight / imgProps.height);
        const width = imgProps.width * ratio;
        const height = imgProps.height * ratio;
        pdf.addImage(uploadedImages[i], 'JPEG', (pdfWidth - width) / 2, (pdfHeight - height) / 2, width, height);
    }

    pdf.save(`Studio_Hub_${Date.now()}.pdf`);
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Downloaded!';
    setTimeout(() => { btn.innerHTML = '<i class="fa-solid fa-file-export"></i> Download PDF'; }, 2000);
}
;

let psImages = [null, null, null, null, null];

// Real Size in mm
const PP_W = 38.1; // 1.5 inch
const PP_H = 48.26; // 1.9 inch
const ST_W = 22;
const ST_H = 27;
const JP_W = 48.26; // 1.9 inch (Joint Photo Width)
const JP_H = 38.1;  // 1.5 inch (Joint Photo Height)

function openPhotoSheetModal() {
    if(typeof setActiveMode === 'function') setActiveMode('mode-photo-sheet');
    document.getElementById('photoSheetModal').style.display = 'flex';
}

function closePhotoSheetModal() {
    document.getElementById('photoSheetModal').style.display = 'none';
    resetPhotoSheet();
}

function resetPhotoSheet() {
    for(let i=0; i<5; i++) removePsImage(i);
}

function loadPsImage(event, index) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            psImages[index] = e.target.result;
            const idx = index + 1;
            document.getElementById('prev' + idx).src = e.target.result;
            document.getElementById('prev' + idx).style.display = 'block';
            document.getElementById('plus' + idx).style.display = 'none';
            document.getElementById('delBtn' + idx).style.display = 'flex';
            document.getElementById('psActionBtns').style.display = 'flex';
            updatePsPreview();
        }
        reader.readAsDataURL(file);
    }
}

function removePsImage(index) {
    psImages[index] = null;
    const idx = index + 1;
    document.getElementById('psInput' + idx).value = '';
    document.getElementById('prev' + idx).style.display = 'none';
    document.getElementById('plus' + idx).style.display = 'block';
    document.getElementById('delBtn' + idx).style.display = 'none';
    
    if(psImages.filter(x => x !== null).length === 0) 
        document.getElementById('psActionBtns').style.display = 'none';
    updatePsPreview();
}

function getDynamicCoords() {
    const margin = 0.53; // 2px Margin
    let currentY = margin;
    const hGap = 2.5; 
    const vGap = 3.5; 
    let coords = [];
    let limitReached = false;

    for (let i = 0; i < 5; i++) {
        const img = psImages[i];
        const layout = document.getElementById('layout' + (i + 1)).value;
        
        if (img && layout !== 'none') {
            if (currentY + PP_H > 296) { limitReached = true; break; }

            if (layout === '5pp') {
                for (let c = 0; c < 5; c++) coords.push({ w: PP_W, h: PP_H, x: margin + (c * (PP_W + hGap)), y: currentY, img: img });
                currentY += (PP_H + vGap);
            } 
            else if (layout === '4jp') {
                for (let c = 0; c < 4; c++) coords.push({ w: JP_W, h: JP_H, x: margin + (c * (JP_W + hGap)), y: currentY, img: img });
                currentY += (JP_H + vGap);
            }
            else if (layout === '8jp') {
                for (let r = 0; r < 2; r++) {
                    if (currentY + JP_H > 296) { limitReached = true; break; }
                    for (let c = 0; c < 4; c++) coords.push({ w: JP_W, h: JP_H, x: margin + (c * (JP_W + hGap)), y: currentY, img: img });
                    currentY += (JP_H + vGap);
                }
            }
            else if (layout === '3pp_3st') {
                for (let c = 0; c < 3; c++) coords.push({ w: PP_W, h: PP_H, x: margin + (c * (PP_W + hGap)), y: currentY, img: img });
                for (let c = 0; c < 3; c++) coords.push({ w: ST_W, h: ST_H, x: margin + (3 * (PP_W + hGap)) + (c * (ST_W + hGap)), y: currentY, img: img });
                currentY += (PP_H + vGap);
            }
            else if (layout === '8st') {
                for (let c = 0; c < 8; c++) coords.push({ w: ST_W, h: ST_H, x: margin + (c * (ST_W + hGap)), y: currentY, img: img });
                currentY += (ST_H + vGap);
            }
            else if (layout === '10pp') {
                for (let r = 0; r < 2; r++) {
                    if (currentY + PP_H > 296) { limitReached = true; break; }
                    for (let c = 0; c < 5; c++) coords.push({ w: PP_W, h: PP_H, x: margin + (c * (PP_W + hGap)), y: currentY, img: img });
                    currentY += (PP_H + vGap);
                }
            }
        }
    }
    return { coords, limitReached };
}

function updatePsPreview() {
    const previewArea = document.getElementById('a4-preview-area');
    const result = getDynamicCoords();
    const coords = result.coords;
    
    document.getElementById('limitWarning').style.display = result.limitReached ? 'block' : 'none';
    document.getElementById('footerNote').style.display = result.limitReached ? 'block' : 'none';

    previewArea.innerHTML = ''; 
    if(coords.length === 0) {
        previewArea.innerHTML = '<p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #94a3b8; font-size: 12px;">No Image Selected</p>';
        return;
    }

    const scale = previewArea.clientWidth / 210; 
    coords.forEach(p => {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = (p.w * scale) + 'px';
        div.style.height = (p.h * scale) + 'px';
        div.style.left = (p.x * scale) + 'px';
        div.style.top = (p.y * scale) + 'px';
        div.style.backgroundImage = "url(" + p.img + ")";
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        if(document.getElementById('psBorder').checked) div.style.border = '0.5px solid #000';
        previewArea.appendChild(div);
    });
}

function directPrintSheet() {
    const { coords } = getDynamicCoords();
    if(coords.length === 0) return;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><style>@page { margin: 0; size: A4; } body { margin: 0; padding: 0; }</style></head><body>');
    coords.forEach(p => {
        let border = document.getElementById('psBorder').checked ? 'border: 0.1mm solid #ccc;' : '';
        printWindow.document.write(`<div style="position: absolute; left: ${p.x}mm; top: ${p.y}mm; width: ${p.w}mm; height: ${p.h}mm; ${border}"><img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;"></div>`);
    });
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 500);
}

async function generatePhotoSheetPDF() {
    const { jsPDF } = window.jspdf;
    const { coords } = getDynamicCoords();
    if(coords.length === 0) return;
    const pdf = new jsPDF('p', 'mm', 'a4');
    coords.forEach(p => {
        pdf.addImage(p.img, 'JPEG', p.x, p.y, p.w, p.h);
        if(document.getElementById('psBorder').checked) {
            pdf.setDrawColor(200, 200, 200); pdf.setLineWidth(0.1); pdf.rect(p.x, p.y, p.w, p.h);
        }
    });
    pdf.save("PhotoSheet_www.idcardscannerpro.com.pdf");
}
;

function openSigPadModal() {
    if(typeof setActiveMode === 'function') setActiveMode('mode-sig-pad');
    document.getElementById('sigPadModal').style.display = 'flex';
    initSpCanvas();
}

function closeSigPadModal() {
    document.getElementById('sigPadModal').style.display = 'none';
}

let spCanvas, spCtx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let spLang = 'en';

const spLabels = {
    "en": { title: "Digital Signature Pad", clear: "Clear", save: "Save PNG", close: "Close", hint: "Sign inside the box above using your Mouse or Finger", note: "The signature will be saved as a high-quality transparent PNG, perfect for online forms and documents." },
    "bn": { title: "ডিজিটাল সিগনেচার প্যাড", clear: "মুছে ফেলুন", save: "সেভ পিএনজি", close: "বন্ধ করুন", hint: "মাউস বা আঙুল দিয়ে উপরের বক্সের ভেতরে স্বাক্ষর করুন", note: "স্বাক্ষরটি স্বচ্ছ পিএনজি হিসেবে সেভ হবে, যা অনলাইন ফর্ম এবং ডকুমেন্টের জন্য উপযুক্ত।" }
};

function setSpLang(l) {
    spLang = l;
    document.getElementById('sp-en-btn').classList.toggle('active', l === 'en');
    document.getElementById('sp-bn-btn').classList.toggle('active', l === 'bn');
    const m = spLabels[l];
    document.getElementById('sp-title').innerText = m.title;
    document.getElementById('txt-sp-clear').innerText = m.clear;
    document.getElementById('txt-sp-save').innerText = m.save;
    document.getElementById('txt-sp-close').innerText = m.close;
    document.getElementById('sp-hint').innerText = m.hint;
    document.getElementById('sp-note-text').innerText = m.note;
}

function initSpCanvas() {
    spCanvas = document.getElementById('sp-canvas');
    spCtx = spCanvas.getContext('2d');
    
    const wrapper = document.getElementById('sp-canvas-wrapper');
    // Ensure canvas matches wrapper size
    spCanvas.width = wrapper.clientWidth;
    spCanvas.height = 300; 

    spCtx.lineCap = 'round';
    spCtx.lineJoin = 'round';
    updateSpSettings();

    // Mouse Events
    spCanvas.addEventListener('mousedown', startSpDrawing);
    spCanvas.addEventListener('mousemove', drawSpMove);
    window.addEventListener('mouseup', stopSpDrawing);

    // Touch Events (Improved for mobile)
    spCanvas.addEventListener('touchstart', (e) => {
        const rect = spCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        startSpDrawing({ 
            offsetX: touch.clientX - rect.left, 
            offsetY: touch.clientY - rect.top 
        });
        e.preventDefault();
    }, { passive: false });

    spCanvas.addEventListener('touchmove', (e) => {
        const rect = spCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        drawSpMove({ 
            offsetX: touch.clientX - rect.left, 
            offsetY: touch.clientY - rect.top 
        });
        e.preventDefault();
    }, { passive: false });

    spCanvas.addEventListener('touchend', stopSpDrawing);
}

function updateSpSettings() {
    spCtx.strokeStyle = document.getElementById('sp-color').value;
    spCtx.lineWidth = document.getElementById('sp-weight').value;
}

function startSpDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function drawSpMove(e) {
    if (!isDrawing) return;
    spCtx.beginPath();
    spCtx.moveTo(lastX, lastY);
    spCtx.lineTo(e.offsetX, e.offsetY);
    spCtx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopSpDrawing() {
    isDrawing = false;
}

function clearSpPad() {
    spCtx.clearRect(0, 0, spCanvas.width, spCanvas.height);
}

// Function to crop the signature (removes extra empty space)
function trimCanvas(canvas) {
    const context = canvas.getContext('2d');
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;

    // Find the boundary of drawn signature
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const index = (y * canvas.width + x) * 4;
            const alpha = pixels[index + 3];
            if (alpha > 0) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }

    // Check if canvas is empty
    if (maxX < minX || maxY < minY) return null;

    // Add small padding (10px)
    const pad = 10;
    const finalWidth = (maxX - minX) + (pad * 2);
    const finalHeight = (maxY - minY) + (pad * 2);

    const trimmed = document.createElement('canvas');
    trimmed.width = finalWidth;
    trimmed.height = finalHeight;
    const trimmedCtx = trimmed.getContext('2d');

    trimmedCtx.drawImage(canvas, minX, minY, maxX - minX, maxY - minY, pad, pad, maxX - minX, maxY - minY);
    return trimmed;
}

function downloadSpPad() {
    const trimmedCanvas = trimCanvas(spCanvas);
    
    if (!trimmedCanvas) {
        alert(spLang === 'en' ? "Please draw a signature first!" : "অনুগ্রহ করে আগে স্বাক্ষর করুন!");
        return;
    }

    const link = document.createElement('a');
    link.download = 'digital-signature.png';
    link.href = trimmedCanvas.toDataURL('image/png');
    link.click();
}
;

let noticeLang = "bn";

function openNoticeModal() {
    if(typeof setActiveMode === 'function') setActiveMode('mode-notice');
    document.getElementById('noticeModal').style.display = 'flex';
    setNoticeLang('bn'); 
}

function closeNoticeModal() {
    document.getElementById('noticeModal').style.display = 'none';
}

function setNoticeLang(lang) {
    noticeLang = lang;
    document.getElementById('not-bn-btn').classList.toggle('active', lang === 'bn');
    document.getElementById('not-en-btn').classList.toggle('active', lang === 'en');
    
    const labels = {
        bn: {
            mTitle: "Ready Notice Maker Pro",
            inst: "প্রতিষ্ঠানের নাম", addr: "ঠিকানা", ref: "স্মারক নং", date: "তারিখ",
            subj: "নোটিশের বিষয়", body: "নোটিশের বিস্তারিত তথ্য", auth: "কর্তৃপক্ষের নাম ও পদবী",
            phInst: "প্রতিষ্ঠানের নাম লিখুন", phAddr: "অবস্থান/ঠিকানা", phRef: "স্মারক নম্বর",
            phSub: "নোটিশের বিষয় লিখুন", phBody: "এখানে বিস্তারিত লিখুন...", phAuth: "অধ্যক্ষ / পরিচালক",
            btnPrint: "প্রিন্ট করুন (A4)", btnReset: "সব মুছুন",
            defaultTitle: "নোটিশ"
        },
        en: {
            mTitle: "Ready Notice Maker Pro",
            inst: "Institution Name", addr: "Address", ref: "Ref No.", date: "Date",
            subj: "Notice Subject", body: "Notice Body Text", auth: "Authority Name & Title",
            phInst: "Example: ABC High School", phAddr: "Location", phRef: "REF/2024/01",
            phSub: "Ex: Holiday Notice", phBody: "Enter notice description here...", phAuth: "Principal / Manager",
            btnPrint: "Print A4 PDF", btnReset: "Clear All",
            defaultTitle: "NOTICE"
        }
    };

    const l = labels[lang];
    // UI Label Update
    document.getElementById('not-main-title').innerHTML = `<i class='fa-solid fa-bullhorn'/> ${l.mTitle}`;
    document.getElementById('lbl-not-inst').innerText = l.inst;
    document.getElementById('lbl-not-addr').innerText = l.addr;
    document.getElementById('lbl-not-ref').innerText = l.ref;
    document.getElementById('lbl-not-date').innerText = l.date;
    document.getElementById('lbl-not-subject').innerText = l.subj;
    document.getElementById('lbl-not-body').innerText = l.body;
    document.getElementById('lbl-not-auth').innerText = l.auth;
    
    // Placeholder Update
    document.getElementById('not-inst').placeholder = l.phInst;
    document.getElementById('not-addr').placeholder = l.phAddr;
    document.getElementById('not-ref').placeholder = l.phRef;
    document.getElementById('not-subject').placeholder = l.phSub;
    document.getElementById('not-body').placeholder = l.phBody;
    document.getElementById('not-auth').placeholder = l.phAuth;
    
    // Button Update
    document.getElementById('btn-not-print').innerHTML = `<i class='fa-solid fa-print'/> ${l.btnPrint}`;
    document.getElementById('btn-not-reset').innerHTML = `<i class='fa-solid fa-trash-can'/> ${l.btnReset}`;
    
    // Preview Title Update
    document.getElementById('p-title').innerText = l.defaultTitle;
    
    // Date Fix: English click must show English numerals
    document.getElementById('not-date').value = new Date().toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB');

    updateNotice();
}

function updateNotice() {
    const isBn = noticeLang === 'bn';
    document.getElementById('p-inst').innerText = document.getElementById('not-inst').value || (isBn ? "প্রতিষ্ঠানের নাম" : "INSTITUTION NAME");
    document.getElementById('p-addr').innerText = document.getElementById('not-addr').value || (isBn ? "এখানে ঠিকানা লিখুন" : "Address Line Here");
    document.getElementById('p-ref').innerText = (isBn ? "স্মারক: " : "Ref: ") + (document.getElementById('not-ref').value || "...");
    document.getElementById('p-date').innerText = (isBn ? "তারিখ: " : "Date: ") + (document.getElementById('not-date').value || "...");
    document.getElementById('p-subject').innerText = (isBn ? "বিষয়: " : "Subject: ") + (document.getElementById('not-subject').value || "...");
    document.getElementById('p-body').innerText = document.getElementById('not-body').value || (isBn ? "নোটিশের বিস্তারিত এখানে লিখুন..." : "Notice content here...");
    document.getElementById('p-auth').innerText = document.getElementById('not-auth').value || (isBn ? "স্বাক্ষর" : "Signature");
}

function printNotice() {
    const content = document.getElementById('a4-notice-preview').innerHTML;
    const win = window.open('', '', 'height=900,width=800');
    win.document.write('<html><head><title>Print Notice</title>');
    win.document.write('<style>@import url("https://fonts.maateen.me/solaiman-lipi/font.css"); @page { size: A4; margin: 20mm; } body{font-family: "SolaimanLipi", Arial, sans-serif; margin:0; padding:0;} #preview-content{display:flex; flex-direction:column; height: 257mm; box-sizing: border-box;} #p-inst{text-align:center; font-size:24px; text-transform: uppercase; margin:0;} #p-addr{text-align:center; margin-bottom:20px; font-size:14px;} #p-body{flex: 1; font-size:16px; line-height:1.6; text-align:justify; margin-bottom:20px;}</style>');
    win.document.write('</head><body>');
    win.document.write(content);
    win.document.write('</body></html>');
    win.document.close();
    setTimeout(() => { win.print(); win.close(); }, 700);
}

function resetNotice() {
    document.querySelectorAll('.notice-inputs input, .notice-inputs textarea').forEach(i => i.value = "");
    setNoticeLang(noticeLang);
}
;

let leafLang = "bn";
let textIsRotated = false;

let sizes = {
    title: 80,
    body: 30,
    footer: 40
};

function openLeafletModal() {
    if(typeof setActiveMode === 'function') setActiveMode('mode-leaflet');
    document.getElementById('leafletModal').style.display = 'flex';
    setLeafLang('bn'); 
}

function closeLeafletModal() {
    document.getElementById('leafletModal').style.display = 'none';
}

function changeSize(section, amount) {
    sizes[section] += amount;
    if(sizes[section] < 10) sizes[section] = 10;
    document.getElementById(section + '-size-val').innerText = sizes[section] + 'px';
    updateLeaflet();
}

function toggleTextRotation() {
    textIsRotated = !textIsRotated;
    const content = document.getElementById('leaflet-content-rotate');
    const page = document.getElementById('a4-portrait-page');
    if (textIsRotated) {
        content.style.transform = "rotate(90deg)";
        content.style.width = page.offsetHeight + "px";
        content.style.height = page.offsetWidth + "px";
    } else {
        content.style.transform = "rotate(0deg)";
        content.style.width = "100%";
        content.style.height = "100%";
    }
    updateLeaflet();
}

const leafletTemplates = {
    bn: {
        // --- টেলিকম ও ডিজিটাল সার্ভিস ---
        'mobile-banking': { title: "ডিজিটাল টেলিকম এন্ড সার্ভিস", body: "বিকাশ • নগদ • রকেট\nএখানে বিশ্বস্ততার সাথে সকল প্রকার\nমোবাইল ব্যাংকিং লেনদেন করা হয়।", footer: "প্রোপ্রাইটর: আব্দুল্লাহ - ০১৭১২-XXXXXX" },
        'recharge': { title: "মোবাইল রিচার্জ পয়েন্ট", body: "জিপি • রবি • বাংলালিংক\nএয়ারটেল • টেলিটক\nসকল সিমের ইন্টারনেট ও মিনিট অফার।", footer: "যোগাযোগ: ০১৮৩৪-XXXXXX" },
        'computer-serv': { title: "কম্পিউটার এন্ড ফটোস্ট্যাট", body: "কম্পোজ • প্রিন্ট • ফটোকপি\nছবি হতে ছবি • স্ক্যান • মেইল\nঅনলাইনে সকল চাকরির আবেদন করা হয়।", footer: "ঠিকানা: মেইন রোড, সখিপুর" },
        'nid-service': { title: "স্মার্ট অনলাইন সেবা কেন্দ্র", body: "এনআইডি কার্ড সংশোধন • জন্ম নিবন্ধন\nপাসপোর্ট আবেদন • টিন সার্টিফিকেট\nসকল অনলাইন ফর্ম নির্ভুলভাবে পূরণ করা হয়।", footer: "পরিচালনায়: ডিজিটাল সেন্টার" },
        'bill-pay': { title: "ইউটিলিটি বিল পে সেন্টার", body: "বিদ্যুৎ বিল • গ্যাস বিল • পানি বিল\nআকাশ ডিটিএইচ রিচার্জ করা হয়।\nসুলভ মূল্যে পল্লী বিদ্যুৎ বিল গ্রহণ করা হয়।", footer: "সকাল ৯টা হতে রাত ১০টা পর্যন্ত" },
        'it-solution': { title: "আইটি সলিউশন এন্ড ল্যাব", body: "সফটওয়্যার ইনস্টল • হার্ডওয়্যার রিপেয়ার\nউইন্ডোজ সেটআপ • নেটওয়ার্ক সেটআপ\nদক্ষ কারিগর দ্বারা মোবাইল সার্ভিসিং করা হয়।", footer: "কল করুন: ০১৫২১-XXXXXX" },
        'banking': { title: "এজেন্ট ব্যাংকিং কেন্দ্র", body: "ইসলামী ব্যাংক • ডাচ বাংলা ব্যাংক\nনতুন অ্যাকাউন্ট খোলা ও টাকা জমা দেওয়া হয়।\nযেকোনো ব্যাংকের টাকা তোলা যায়।", footer: "নির্ভরযোগ্য ব্যাংকিং সেবা" },
        'training': { title: "কম্পিউটার ট্রেনিং সেন্টার", body: "বেসিক অফিস • গ্রাফিক্স ডিজাইন\nফ্রিল্যান্সিং কোর্স • ডিজিটাল মার্কেটিং\nভর্তি চলছে! আসন সংখ্যা সীমিত।", footer: "স্থান: আইটি পার্ক একাডেমি" },
        'travel': { title: "ট্রাভেল এন্ড ট্যুরস গাইড", body: "এয়ার টিকিট • ভিসা প্রসেসিং\nহজ্জ ও ওমরাহ প্যাকেজ বুকিং দেওয়া হয়।\nভারত ও দুবাই ট্যুরিস্ট ভিসা সহায়তা।", footer: "হটলাইন: ০১৯১১-XXXXXX" },
        'photostate': { title: "জরুরি ফটোকপি ও প্রিন্টিং", body: "সাদা-কাল ও রঙিন ফটোকপি\nলেমিনেশন ও বই বাইন্ডিং করা হয়।\nঅফিশিয়াল ডকুমেন্টস প্রিন্ট করা হয়।", footer: "দ্রুত ও পরিচ্ছন্ন সেবা" },
        'admission': { title: "অনলাইন ভর্তি সহায়তা", body: "স্কুল-কলেজ ও ভার্সিটি ভর্তি\nঅনার্স-মাস্টার্স ফর্ম পূরণ\nসকল পরীক্ষার রেজাল্ট প্রদান করা হয়।", footer: "অপারেটর: সাইদুর রহমান" },
        'ticket': { title: "বাস ও ট্রেন টিকিট সেন্টার", body: "এনা • হানিফ • গ্রীন লাইন\nসকল রুটের টিকিট পাওয়া যায়।\nট্রেনের অগ্রিম অনলাইন টিকিট সেবা।", footer: "কল: ০১৬৭৭-XXXXXX" },
        'gift': { title: "টেলিকম এন্ড গিফট শপ", body: "মোবাইল এক্সেসরিজ • গিফট আইটেম\nজন্মদিনের গিফট প্যাক পাওয়া যায়।\nস্টেশনারি ও কসমেটিকস সামগ্রী।", footer: "স্বত্বাধিকারী: মা টেলিকম" },
        'electric': { title: "ইলেক্ট্রিক্যাল সার্ভিসিং", body: "ফ্যান রিপেয়ার • লাইট ফিটিং\nবিল্ডিং ওয়ারিং এর কাজ করা হয়।\nইলেক্ট্রিক মালামাল সুলভ মূল্যে বিক্রয়।", footer: "যোগাযোগ: ০১৭০০-XXXXXX" },
        'cctv-service': { title: "সিসিটিভি ক্যামেরা সলিউশন", body: "ক্যামেরা বিক্রয় ও ইনস্টলেশন\nবাসা ও দোকানের নিরাপত্তা নিশ্চিত করুন।\nঅত্যাধুনিক আইপি ক্যামেরা সেটআপ।", footer: "নিরাপত্তা সবার আগে" },
        'graphic': { title: "ডিজাইন ও কালার প্রিন্ট", body: "ব্যানার • ভিজিটিং কার্ড • লিফলেট\nবিয়ে ও দাওয়াতের কার্ড তৈরি করা হয়।\nপ্রফেশনাল গ্রাফিক্স ডিজাইন সার্ভিস।", footer: "যোগাযোগ: ০১৮০০-XXXXXX" },
        'passport': { title: "পাসপোর্ট ও ভিসা গাইড", body: "নতুন পাসপোর্ট আবেদন সেবা\nপাসপোর্ট রিনিউয়াল সাপোর্ট\nপুলিশ ভেরিফিকেশন ও পরামর্শ।", footer: "ঠিকানা: থানা রোড সংলগ্ন" },
        'solar': { title: "সোলার এন্ড ব্যাটারি হাউস", body: "সোলার প্যানেল • আইপিএস ব্যাটারি\nআইপিএস সার্ভিসিং ও সেলস।\n১ বছরের গ্যারান্টি সহ বিক্রয়।", footer: "কল: ০১৫০০-XXXXXX" },
        'internet': { title: "ব্রডব্যান্ড ইন্টারনেট সংযোগ", body: "নতুন কানেকশন • হাই স্পিড ব্যান্ডউইথ\n৫ এমবিপিএস হতে ১০০ এমবিপিএস।\nনিরবিচ্ছিন্ন ও বাফার মুক্ত ইন্টারনেট।", footer: "আইএসপি প্রোভাইডার" },
        'studio': { title: "ডিজিটাল ফটো স্টুডিও", body: "পাসপোর্ট সাইজ ছবি (৫ মিনিটে)\nছবি এডিটিং ও ব্যাকগ্রাউন্ড পরিবর্তন।\nরঙিন ও হাই কোয়ালিটি ফটো প্রিন্ট।", footer: "ফটোগ্রাফার: রাজিব হাসান" },

        // --- বাসা ভাড়া ও সাধারণ নোটিশ ---
        'to-let': { title: "বাসা ভাড়া", body: "২ রুম, ড্রয়িং, ডাইনিং, কিচেন ও বাথরুমসহ ছিমছাম ফ্ল্যাট ভাড়া দেওয়া হবে।\n(শুধুমাত্র ছোট পরিবার)", footer: "যোগাযোগ: ০১৭১২-৩৪৫৬৭৮" },
        'sublet': { title: "সাবলেট ভাড়া", body: "আগামী মাস থেকে ১টি বড় রুম (সংযুক্ত বাথরুম ও বারান্দাসহ) সাবলেট দেওয়া হবে।\nবিদ্যুৎ ও পানি বিল ফিক্সড।", footer: "যোগাযোগ: ০১৬XXXXXXXX" },
        'shop-rent': { title: "দোকান ভাড়া", body: "বাজারের মেইন রোডে নিচতলায় একটি সুপরিসর দোকান ঘর দীর্ঘ মেয়াদী ভাড়া দেওয়া হবে।", footer: "যোগাযোগ করুন: ০১৯XXXXXXXX" },
        'office-rent': { title: "অফিস ভাড়া", body: "১২০০ স্কয়ার ফিটের একটি সুপরিসর কমার্শিয়াল স্পেস অফিস হিসেবে ভাড়া দেওয়া হবে।", footer: "Call: 017XXXXXXXX" },
        'garage-rent': { title: "গ্যারেজ ভাড়া", body: "একটি প্রাইভেট কার বা বাইক রাখার জন্য নিরাপদ ও সিসিটিভি নিয়ন্ত্রিত গ্যারেজ খালি আছে।", footer: "যোগাযোগ: ০১৭XXXXXXXX" },
        'hostel': { title: "ছাত্রাবাস", body: "ছাত্রদের থাকার জন্য ছিমছাম ও মনোরম পরিবেশে সিট খালি আছে।\n(ওয়াইফাই ও মিল সিস্টেম সুবিধা আছে)", footer: "যোগাযোগ: ০১৫XXXXXXXX" },
        'teacher': { title: "শিক্ষক চাই", body: "অষ্টম ও দশম শ্রেণীর ছাত্রকে পড়ানোর জন্য একজন অভিজ্ঞ গৃহশিক্ষক আবশ্যক।\nবিষয়: গণিত ও বিজ্ঞান।", footer: "মোবাইল: ০১৮৩৪-০৩০৫৪৪" },
        'staff-wanted': { title: "লোক আবশ্যক", body: "দোকান পরিচালনার জন্য ২ জন চটপটে সেলসম্যান আবশ্যক।\nবেতন আলোচনা সাপেক্ষে।", footer: "সাক্ষাৎকার চলছে" },
        'no-parking': { title: "গাড়ি রাখা নিষেধ", body: "এখানে গাড়ি পার্কিং করা সম্পূর্ণ নিষেধ।\nআদেশক্রমে কর্তৃপক্ষ।", footer: "গাড়ি রাখবেন না" },
        'no-entry': { title: "প্রবেশ নিষেধ", body: "অনুমতি ব্যতীত ভিতরে প্রবেশ সম্পূর্ণ নিষেধ।", footer: "কর্তৃপক্ষ" },
        'cctv-alert': { title: "সতর্কবার্তা", body: "আপনি এখন সিসিটিভি ক্যামেরার আওতাধীন আছেন।", footer: "সিসিটিভি ক্যামেরা চলছে" },
        'shoes': { title: "জুতা বাহিরে রাখুন", body: "পবিত্রতা বজায় রাখতে আপনার জুতা অনুগ্রহ করে বাহিরে নির্দিষ্ট স্থানে রাখুন।", footer: "ধন্যবাদ" },
        'discount': { title: "বিরাট মূল্যছাড়", body: "সকল পণ্যের উপর ৫০% পর্যন্ত বিশেষ মূল্যছাড় চলছে! আজই চলে আসুন।", footer: "সীমিত সময়ের জন্য" },
        'danger': { title: "সাবধান!", body: "উচ্চ ভোল্টেজ এলাকা। বৈদ্যুতিক তার স্পর্শ করা বিপদজনক।", footer: "বিপদ এড়ান" },
        'silence': { title: "নীরবতা বজায় রাখুন", body: "হাসপাতাল এলাকা, হর্ন বাজানো নিষেধ।\nঅনুগ্রহ করে নীরবতা বজায় রাখুন।", footer: "ধন্যবাদ" },
        'no-smoking': { title: "ধূমপান নিষেধ", body: "এটি একটি ধূমপান মুক্ত এলাকা। এখানে ধূমপান করা আইনত দণ্ডনীয় অপরাধ।", footer: "ধূমপান ত্যাগ করুন" },
        'house-sale': { title: "বাড়ি বিক্রয়", body: "৩ শতাংশ জমির উপর নির্মিত ২ তলা একটি সুদৃশ্য বাড়ি জরুরি ভিত্তিতে বিক্রয় করা হবে।", footer: "যোগাযোগ: ০১৭১২-XXXXXX" },
        'dog': { title: "কুকুর হতে সাবধান", body: "ভিতরে প্রবেশের আগে সতর্ক হোন। গেটের ভিতরে কুকুর আছে।", footer: "সতর্ক থাকুন" },
        'mask': { title: "জরুরি নির্দেশিকা", body: "মাস্ক ব্যতীত প্রবেশ নিষেধ। আপনার ও আপনার পরিবারের সুরক্ষা নিশ্চিত করুন।", footer: "মাস্ক পরুন" },
        'coaching': { title: "ভর্তি চলছে", body: "নতুন ব্যাচে ৬ষ্ঠ থেকে ১০ম শ্রেণী পর্যন্ত ভর্তি চলছে। স্পেশাল কেয়ার ও সাপ্তাহিক পরীক্ষা।", footer: "স্থান: এ বি সি কোচিং সেন্টার" },
        'arabic': { title: "কুরআন শিক্ষা", body: "সহিহ শুদ্ধভাবে কুরআন শিক্ষার জন্য একজন অভিজ্ঞ হাফেজ সাহেব/শিক্ষক আবশ্যক।", footer: "ফোন: ০১৭১XXXXXXX" },
        'opening': { title: "শুভ উদ্বোধন", body: "আগামী শুক্রবার আমাদের শোরুমের শুভ উদ্বোধন উপলক্ষে সবাইকে আমন্ত্রণ ও স্পেশাল গিফট।", footer: "স্থান: সিটি সেন্টার মার্কেট" },
        'buy-one-get-one': { title: "বিরাট অফার", body: "১টি কিনলে ১টি ফ্রি! সীমিত সময়ের জন্য এই অফারটি সকল পোশাকে প্রযোজ্য।", footer: "আজই ভিজিট করুন" },
        'blood-needed': { title: "রক্তের প্রয়োজন", body: "জরুরি ভিত্তিতে ১ ব্যাগ পজেটিভ (B+) রক্ত প্রয়োজন।\nরোগী: ঢাকা মেডিকেল কলেজে চিকিৎসাধীন।", footer: "যোগাযোগ: ০১৭XXXXXXXX" },
        'lost-found': { title: "হারিয়ে গেছে", body: "একটি কালো রঙের মানিব্যাগ যার ভেতর জরুরি ডকুমেন্টস ছিল তা হারিয়ে গেছে। কেউ পেলে যোগাযোগ করুন।", footer: "পুরস্কার দেওয়া হবে" },
        'milad': { title: "মিলাদ মাহফিল", body: "আগামী ১০ই মে বাদ মাগরিব আমাদের বাসভবনে এক দোয়া ও মিলাদ মাহফিলের আয়োজন করা হয়েছে।", footer: "আমন্ত্রণে: আবুল কাশেম" },
        'wifi': { title: "WiFi পাসওয়ার্ড", body: "এই প্রতিষ্ঠানের ফ্রি ওয়াইফাই ব্যবহার করতে নিচের পাসওয়ার্ডটি দিন।\nPassword: user1234", footer: "ধন্যবাদ - কর্তৃপক্ষ" },
        'garbage': { title: "ময়লা ফেলবেন না", body: "এখানে ময়লা আবর্জনা ফেলা সম্পূর্ণ নিষেধ। আইন ভঙ্গকারীর বিরুদ্ধে ব্যবস্থা নেওয়া হবে।", footer: "আদেশক্রমে: সিটি কর্পোরেশন" },
        'toilet': { title: "টয়লেট", body: "পরিচ্ছন্নতা বজায় রাখুন। ব্যবহারের পর পানি ঢালুন। বাহিরে জুতা রাখুন।", footer: "ধন্যবাদ" },
        'maintenance': { title: "কাজ চলছে", body: "সতর্ক থাকুন! মেরামতের কাজ চলছে। বিকল্প রাস্তা ব্যবহার করুন।", footer: "বিপদ এড়ান" },
        'lift-out': { title: "লিফট বন্ধ", body: "যান্ত্রিক ত্রুটির কারণে লিফট সাময়িকভাবে বন্ধ আছে। সাময়িক অসুবিধার জন্য আমরা দুঃখিত।", footer: "আদেশক্রমে: কর্তৃপক্ষ" },
        'no-mobile': { title: "মোবাইল ব্যবহার নিষেধ", body: "জরুরি প্রয়োজন ব্যতীত এখানে মোবাইল ফোনে কথা বলা সম্পূর্ণ নিষেধ।", footer: "কর্তৃপক্ষ" },
        'clinic': { title: "ফ্রি চেকআপ", body: "আগামী রবিবার সকাল ১০টা থেকে দুপুর ২টা পর্যন্ত বিনামূল্যে ডায়াবেটিস পরীক্ষা করা হবে।", footer: "স্থান: মর্ডান ক্লিনিক" },
        'sale-off': { title: "বিরাট সেল", body: "দোকান ক্লোজিং উপলক্ষে সকল মালামাল উৎপাদন খরচে বিক্রয় করা হচ্ছে।", footer: "স্টক শেষ হওয়ার আগে আসুন" }
    },
    en: {
        // --- Telecom & Digital Services ---
        'mobile-banking': { title: "DIGITAL TELECOM & SERVICE", body: "bKash • Nagad • Rocket\nAll Types of Mobile Banking\nTransactions Done with Trust.", footer: "Proprietor: Abdullah - 01712-XXXXXX" },
        'recharge': { title: "RECHARGE POINT", body: "GP • Robi • Banglalink\nAirtel • Teletalk\nAll SIM Internet & Minute Offers.", footer: "Contact: 01834-XXXXXX" },
        'computer-serv': { title: "COMPUTER & PHOTOSTAT", body: "Compose • Print • Photocopy\nPhoto to Photo • Scan • Email\nAll Online Job Applications Done.", footer: "Address: Main Road, Sakhipur" },
        'nid-service': { title: "SMART ONLINE CENTER", body: "NID Correction • Birth Registration\nPassport Apply • TIN Certificate\nAll Online Forms Filled Accurately.", footer: "Operated by: Digital Center" },
        'bill-pay': { title: "UTILITY BILL PAY POINT", body: "Electricity • Gas • Water Bill\nAkash DTH Recharge Done.\nElectricity Bills Accepted Here.", footer: "9 AM to 10 PM Daily" },
        'it-solution': { title: "IT SOLUTION & LAB", body: "Software Install • Hardware Repair\nWindows Setup • Network Setup\nExpert Mobile & PC Servicing.", footer: "Call: 01521-XXXXXX" },
        'banking': { title: "AGENT BANKING CENTER", body: "Islami Bank • DBBL Agent\nAccount Opening & Cash Deposit.\nCash Withdraw from Any Bank.", footer: "Reliable Banking Services" },
        'training': { title: "COMPUTER TRAINING", body: "Basic Office • Graphics Design\nFreelancing • Digital Marketing\nAdmission Open! Limited Seats.", footer: "Venue: IT Park Academy" },
        'travel': { title: "TRAVEL & TOURS GUIDE", body: "Air Ticket • Visa Processing\nHajj & Umrah Packages Available.\nIndia & Dubai Tourist Visa Support.", footer: "Hotline: 01911-XXXXXX" },
        'photostate': { title: "PHOTOCOPY & PRINTING", body: "B&W & Color Photocopy\nLamination & Book Binding.\nOfficial Document Printing.", footer: "Fast & Clean Services" },
        'admission': { title: "ADMISSION ASSISTANCE", body: "College & Varsity Admission\nHonors & Masters Form Fill-up.\nAll Exam Results Provided.", footer: "Operator: Saidur Rahman" },
        'ticket': { title: "BUS & TRAIN TICKETS", body: "Ena • Hanif • Green Line\nAll Route Tickets Available.\nOnline Advance Booking.", footer: "Call: 01677-XXXXXX" },
        'gift': { title: "TELECOM & GIFT SHOP", body: "Mobile Accessories • Gift Items\nBirthday Gift Packs Available.\nStationery & Cosmetics Items.", footer: "Owner: MA Telecom" },
        'electric': { title: "ELECTRICAL SERVICING", body: "Fan Repair • Light Fitting\nBuilding Wiring Done Here.\nElectric Goods Sales & Service.", footer: "Contact: 01700-XXXXXX" },
        'cctv-service': { title: "CCTV CAMERA SOLUTION", body: "Camera Sales & Installation\nSecure Your Home & Shop.\nModern IP Camera Setup.", footer: "Security First" },
        'graphic': { title: "DESIGN & COLOR PRINT", body: "Banner • Visiting Card • Leaflet\nWedding & Invitation Cards.\nProfessional Graphics Design.", footer: "Contact: 01800-XXXXXX" },
        'passport': { title: "PASSPORT & VISA GUIDE", body: "New Passport Application Service\nPassport Renewal Support\nPolice Verification & Counseling.", footer: "Address: Near Thana Road" },
        'solar': { title: "SOLAR & BATTERY HOUSE", body: "Solar Panel • IPS Battery\nIPS Servicing & Sales.\nSold with 1 Year Warranty.", footer: "Call: 01500-XXXXXX" },
        'internet': { title: "BROADBAND INTERNET", body: "New Connection • High Speed\n5 Mbps to 100 Mbps Plans.\nUninterrupted Buffer-free Internet.", footer: "ISP Provider" },
        'studio': { title: "DIGITAL PHOTO STUDIO", body: "Passport Size Photo (5 Min)\nPhoto Editing & Background Change.\nHigh Quality Photo Prints.", footer: "Photographer: Rajib Hasan" },

        // --- Rentals & Notices ---
        'to-let': { title: "HOUSE FOR RENT", body: "A beautiful flat with 2 rooms, drawing, dining, kitchen, and bathroom will be rented. (Small family only)", footer: "Contact: 01712-345678" },
        'sublet': { title: "SUBLET FOR RENT", body: "1 large room with attached bathroom and balcony will be sublet from next month.", footer: "Contact: 016XXXXXXXX" },
        'shop-rent': { title: "SHOP FOR RENT", body: "A spacious ground floor shop on the main road is available for long-term rent.", footer: "Call: 019XXXXXXXX" },
        'office-rent': { title: "OFFICE RENT", body: "A spacious 1200 sq. ft. commercial space will be rented as an office.", footer: "Call: 017XXXXXXXX" },
        'garage-rent': { title: "GARAGE RENT", body: "Safe and CCTV-monitored parking space available for private cars or bikes.", footer: "Contact: 017XXXXXXXX" },
        'hostel': { title: "HOSTEL SEAT", body: "Seats are available in a clean hostel environment for students. (WiFi & Meal available)", footer: "Call: 015XXXXXXXX" },
        'teacher': { title: "TEACHER WANTED", body: "An experienced tutor is required for a student of Class 8 and 10. Subjects: Math & Science.", footer: "Mobile: 01834-030544" },
        'staff-wanted': { title: "STAFF WANTED", body: "2 smart salesmen are required for shop management. Salary negotiable.", footer: "INTERVIEW ONGOING" },
        'no-parking': { title: "NO PARKING", body: "Parking is strictly prohibited here. By order of the authority.", footer: "DO NOT PARK" },
        'no-entry': { title: "NO ENTRY", body: "Entry without permission is strictly prohibited.", footer: "AUTHORITY" },
        'cctv-alert': { title: "CCTV AREA", body: "You are under CCTV surveillance. Please be careful.", footer: "PROTECTED" },
        'shoes': { title: "SHOES OFF", body: "Please keep your shoes outside in the designated area.", footer: "THANK YOU" },
        'discount': { title: "BIG DISCOUNT", body: "Special discount up to 50% on all products! Visit us today.", footer: "LIMITED TIME" },
        'danger': { title: "DANGER!", body: "High voltage area. Touching electrical wires is dangerous.", footer: "DANGER 440V" },
        'silence': { title: "KEEP SILENCE", body: "Hospital area, blowing horn is prohibited. Please maintain silence.", footer: "SILENCE PLEASE" },
        'no-smoking': { title: "NO SMOKING", body: "This is a smoke-free area. Smoking here is a punishable offense.", footer: "DON'T SMOKE" },
        'house-sale': { title: "HOUSE FOR SALE", body: "A beautiful 2-story house built on 3 decimals of land is for urgent sale.", footer: "Call: 01712-XXXXXX" },
        'dog': { title: "BEWARE OF DOG", body: "Be careful before entering. There is a dog inside the gate.", footer: "WATCH OUT" },
        'mask': { title: "NOTICE", body: "No entry without a mask. Ensure the safety of yourself and your family.", footer: "WEAR A MASK" },
        'coaching': { title: "ADMISSION OPEN", body: "Admission ongoing for Class 6 to 10. Special care and weekly model tests.", footer: "At: ABC Coaching Center" },
        'arabic': { title: "ARABIC TEACHER", body: "An experienced tutor is required for teaching the Holy Quran with Tajweed.", footer: "Call: 017XXXXXXXX" },
        'opening': { title: "GRAND OPENING", body: "Join us for the grand opening of our new showroom. Gifts for first 50 visitors!", footer: "Venue: City Center Market" },
        'buy-one-get-one': { title: "SPECIAL OFFER", body: "Buy 1 Get 1 Free! This offer is valid on all clothing items for a limited time.", footer: "VISIT TODAY" },
        'blood-needed': { title: "BLOOD NEEDED", body: "Emergency 1 bag of B+ blood is needed for a patient at DMCH.", footer: "Contact: 017XXXXXXXX" },
        'lost-found': { title: "LOST ITEM", body: "A black wallet containing important documents was lost. Please contact if found.", footer: "REWARD WILL BE GIVEN" },
        'milad': { title: "Dua & Milad", body: "A Dua and Milad Mahfil has been organized at our residence this Friday after Maghrib.", footer: "Invited by: Abul Kashem" },
        'wifi': { title: "FREE WiFi", body: "To use our free WiFi, please use the following password.\nPassword: user1234", footer: "BY AUTHORITY" },
        'garbage': { title: "NO DUSTBIN", body: "Dumping garbage here is strictly prohibited. Violators will be prosecuted.", footer: "ORDER BY CITY CORP" },
        'toilet': { title: "TOILET", body: "Keep it clean. Use water after use. Leave your shoes outside.", footer: "THANK YOU" },
        'maintenance': { title: "UNDER REPAIR", body: "Work in progress. Please be careful and use the alternative route.", footer: "STAY SAFE" },
        'lift-out': { title: "LIFT OUT OF ORDER", body: "The lift is temporarily out of order due to maintenance. Sorry for the inconvenience.", footer: "BY AUTHORITY" },
        'no-mobile': { title: "NO MOBILE PHONES", body: "Using mobile phones is strictly prohibited here except for emergencies.", footer: "AUTHORITY" },
        'clinic': { title: "FREE CHECKUP", body: "Free diabetes screening will be held next Sunday from 10 AM to 2 PM.", footer: "Venue: Modern Clinic" },
        'sale-off': { title: "CLOSING SALE", body: "Everything must go! All items are being sold at production cost.", footer: "VISIT BEFORE STOCK ENDS" }
    }
};

function setLeafLang(lang) {
    leafLang = lang;
    document.getElementById('leaf-bn-btn').classList.toggle('active', lang === 'bn');
    document.getElementById('leaf-en-btn').classList.toggle('active', lang === 'en');
    
    const ui = {
        bn: { mainTitle: "A4 লিফলেট মেকার", rotate: "লেখা ঘোরান (৯০° ডিগ্রী)", temp: "টেমপ্লেট নির্বাচন করুন", title: "শিরোনাম / হেডলাইন", body: "বিস্তারিত তথ্য", footer: "যোগাযোগ / ফুটার", align: "এলাইনমেন্ট (Alignment)", print: "প্রিন্ট করুন (A4)", reset: "সব মুছুন", c: "মাঝখানে", l: "বামে", r: "ডানে" },
        en: { mainTitle: "A4 Leaflet Maker", rotate: "Rotate Text (90°)", temp: "Select Template", title: "Heading / Title", body: "Details Description", footer: "Contact / Footer", align: "Text Alignment", print: "Print (A4)", reset: "Clear All", c: "Center", l: "Left", r: "Right" }
    }[lang];

    document.getElementById('leaf-ui-main-title').innerHTML = "<i class='fa-solid fa-file-invoice'/> " + ui.mainTitle;
    document.getElementById('lbl-leaf-rotate').innerText = ui.rotate;
    document.getElementById('lbl-leaf-temp').innerText = ui.temp;
    document.getElementById('lbl-leaf-title').innerText = ui.title;
    document.getElementById('lbl-leaf-body').innerText = ui.body;
    document.getElementById('lbl-leaf-footer').innerText = ui.footer;
    document.getElementById('lbl-leaf-align').innerText = ui.align;
    document.getElementById('lbl-leaf-print').innerText = ui.print;
    document.getElementById('lbl-leaf-reset').innerText = ui.reset;
    document.getElementById('opt-center').innerText = ui.c;
    document.getElementById('opt-left').innerText = ui.l;
    document.getElementById('opt-right').innerText = ui.r;

    const select = document.getElementById('leaf-template-select');
    select.innerHTML = "";
    for (let key in leafletTemplates[lang]) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerText = leafletTemplates[lang][key].title;
        select.appendChild(opt);
    }
    applyLeafTemplate(select.value);
}

function applyLeafTemplate(key) {
    const data = leafletTemplates[leafLang][key];
    document.getElementById('leaf-title').value = data.title;
    document.getElementById('leaf-body').value = data.body;
    document.getElementById('leaf-footer').value = data.footer;
    updateLeaflet();
}

function updateLeaflet() {
    const align = document.getElementById('leaf-align').value;
    const previewScale = 0.5;

    // শিরোনাম (Title)
    const titleEl = document.getElementById('lp-title');
    titleEl.innerText = document.getElementById('leaf-title').value;
    titleEl.style.fontSize = (sizes.title * previewScale) + "px";
    titleEl.style.color = document.getElementById('leaf-title-clr').value;
    titleEl.style.textAlign = align;

    // বডি (Body)
    const bodyEl = document.getElementById('lp-body');
    bodyEl.innerText = document.getElementById('leaf-body').value;
    bodyEl.style.fontSize = (sizes.body * previewScale) + "px";
    bodyEl.style.color = document.getElementById('leaf-body-clr').value;
    bodyEl.style.textAlign = align;
    // বডি যেহেতু ফ্লেক্সবক্স ব্যবহার করছে, তাই justify-content ও পরিবর্তন করতে হবে
    if(align === 'center') bodyEl.style.justifyContent = 'center';
    else if(align === 'left') bodyEl.style.justifyContent = 'flex-start';
    else if(align === 'right') bodyEl.style.justifyContent = 'flex-end';

    // ফুটার (Footer)
    const footerEl = document.getElementById('lp-footer');
    footerEl.innerText = document.getElementById('leaf-footer').value;
    footerEl.style.fontSize = (sizes.footer * previewScale) + "px";
    footerEl.style.color = document.getElementById('leaf-footer-clr').value;
    footerEl.style.borderTopColor = document.getElementById('leaf-footer-clr').value;
    footerEl.style.textAlign = align;
}

function printLeaflet() {
    const title = document.getElementById('leaf-title').value;
    const body = document.getElementById('leaf-body').value;
    const footer = document.getElementById('leaf-footer').value;
    const align = document.getElementById('leaf-align').value;
    const clrTitle = document.getElementById('leaf-title-clr').value;
    const clrBody = document.getElementById('leaf-body-clr').value;
    const clrFooter = document.getElementById('leaf-footer-clr').value;

    let flexAlign = align === 'center' ? 'center' : (align === 'left' ? 'flex-start' : 'flex-end');

    const win = window.open('', '', 'height=900,width=800');
    let rotationStyle = textIsRotated ? 
        `transform: rotate(90deg); width: 297mm; height: 210mm; position: absolute; top: 50%; left: 50%; margin-top: -105mm; margin-left: -148.5mm;` : 
        `width: 210mm; height: 297mm;`;

    win.document.write('<html><head><title>Print</title>');
    win.document.write('<style>@import url("https://fonts.maateen.me/solaiman-lipi/font.css"); body{margin:0; padding:0; background:#fff;} .a4-page{width:210mm; height:297mm; position:relative; overflow:hidden;} .content-box{'+ rotationStyle +' padding:20mm; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; text-align:' + align + '; font-family:"SolaimanLipi", sans-serif;} #pt{font-size:'+ sizes.title +'px; font-weight:900; line-height:1.1; color:'+ clrTitle +';} #pb{font-size:'+ sizes.body +'px; font-weight:700; flex:1; display:flex; align-items:center; justify-content:'+ flexAlign +'; white-space:pre-wrap; margin:15mm 0; color:'+ clrBody +';} #pf{font-size:'+ sizes.footer +'px; font-weight:900; border-top:6px solid '+ clrFooter +'; padding-top:10mm; color:'+ clrFooter +';}</style>');
    win.document.write('</head><body><div class="a4-page"><div class="content-box">');
    win.document.write('<div id="pt">' + title + '</div>');
    win.document.write('<div id="pb">' + body + '</div>');
    win.document.write('<div id="pf">' + footer + '</div>');
    win.document.write('</div></div></body></html>');
    win.document.close();
    setTimeout(() => { win.print(); }, 500);
}

function resetLeaflet() {
    document.getElementById('leaf-title').value = "";
    document.getElementById('leaf-body').value = "";
    document.getElementById('leaf-footer').value = "";
    updateLeaflet();
}
;

let landLang = 'en';
let landMode = 'rect';

function openLandModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-land');
    document.getElementById('landModal').style.display = 'flex';
}

function closeLandModal() {
    document.getElementById('landModal').style.display = 'none';
}

function setLandMode(mode) {
    landMode = mode;
    document.getElementById('rect-inputs').style.display = mode === 'rect' ? 'block' : 'none';
    document.getElementById('tri-inputs').style.display = mode === 'tri' ? 'block' : 'none';
    document.getElementById('btn-mode-rect').style.background = mode === 'rect' ? '#059669' : '#64748b';
    document.getElementById('btn-mode-tri').style.background = mode === 'tri' ? '#059669' : '#64748b';
    calculateLand();
}

function setLandLang(lang) {
    landLang = lang;
    document.getElementById('land-en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('land-bn-btn').classList.toggle('active', lang === 'bn');
    
    const d = {
        en: { title:"Land Area Calculator", len:"Average Length (Feet)", wid:"Average Width (Feet)", sa:"Side A", resHead:"Calculated Area:", sqft:"Sq. Feet:", decimal:"Decimal:", katha:"Katha:", bigha:"Bigha:", acre:"Acre:", printBtn:"Print A4 Report", resetBtn:"Reset", info:"Standard: 1 Decimal = 435.6 Sq. Ft" },
        bn: { title:"জমি পরিমাপ ক্যালকুলেটর", len:"গড় দৈর্ঘ্য (ফুট)", wid:"গড় প্রস্থ (ফুট)", sa:"আইল এ", resHead:"জমির মোট পরিমাপ:", sqft:"বর্গফুট:", decimal:"শতাংশ:", katha:"কাঠা:", bigha:"বিঘা:", acre:"একর:", printBtn:"প্রিন্ট রিপোর্ট (A4)", resetBtn:"সব মুছুন", info:"হিসাব: ১ শতাংশ = ৪৩৫.৬ বর্গফুট" }
    };
    const t = d[lang];
    document.getElementById('land-title').innerText = t.title;
    document.getElementById('lbl-len').innerText = t.len;
    document.getElementById('lbl-wid').innerText = t.wid;
    document.getElementById('res-head').innerText = t.resHead;
    document.getElementById('txt-sqft').innerText = t.sqft;
    document.getElementById('txt-decimal').innerText = t.decimal;
    document.getElementById('txt-katha').innerText = t.katha;
    document.getElementById('txt-bigha').innerText = t.bigha;
    document.getElementById('txt-acre').innerText = t.acre;
    document.getElementById('btn-print-text').innerText = t.printBtn;
    document.getElementById('btn-reset-text').innerText = t.resetBtn;
    document.getElementById('land-info').innerText = t.info;
    calculateLand();
}

function calculateLand() {
    let sqft = 0;
    if (landMode === 'rect') {
        sqft = (parseFloat(document.getElementById('land-len').value) || 0) * (parseFloat(document.getElementById('land-wid').value) || 0);
    } else {
        let a = parseFloat(document.getElementById('tri-a').value) || 0, b = parseFloat(document.getElementById('tri-b').value) || 0, c = parseFloat(document.getElementById('tri-c').value) || 0;
        if (a + b > c && a + c > b && b + c > a) {
            let s = (a + b + c) / 2;
            sqft = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        }
    }
    document.getElementById('res-sqft').innerText = sqft.toFixed(2);
    document.getElementById('res-decimal').innerText = (sqft / 435.6).toFixed(2);
    document.getElementById('res-katha').innerText = (sqft / 720).toFixed(2);
    document.getElementById('res-bigha').innerText = (sqft / 435.6 / 33).toFixed(2);
    document.getElementById('res-acre').innerText = (sqft / 435.6 / 100).toFixed(2);
}

function printLandReport() {
    calculateLand();
    const isBn = (landLang === 'bn');
    const sqft = document.getElementById('res-sqft').innerText;
    const decimal = document.getElementById('res-decimal').innerText;
    const katha = document.getElementById('res-katha').innerText;
    const bigha = document.getElementById('res-bigha').innerText;
    const acre = document.getElementById('res-acre').innerText;

    // আইফ্রেম তৈরি
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;

    // সিএসএস এবং এইচটিএমএল একসাথে ইনজেকশন
    const content = `
    <html>
    <head>
        <title>Print Report</title>
        <style>
            @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
            body { margin: 0; padding: 0; background: #fff; font-family: 'SolaimanLipi', Arial, sans-serif; }
            @page { size: A4; margin: 0; }
            .a4-page { width: 210mm; height: 297mm; padding: 20mm; box-sizing: border-box; background: #fff; margin: 0 auto; overflow: hidden; }
            .border-wrap { border: 4px solid #059669; height: 100%; padding: 15mm; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }
            .header { text-align: center; border-bottom: 2px solid #059669; padding-bottom: 10px; margin-bottom: 30px; }
            .header h1 { margin: 0; font-size: 32px; color: #059669; font-weight: bold; }
            .header p { margin: 5px 0 0; font-size: 15px; color: #555; }
            .title { text-align: center; text-decoration: underline; font-size: 26px; margin-bottom: 40px; color: #000; font-weight: bold; }
            .section-head { background: #f3f4f6; padding: 10px; font-size: 19px; border-left: 6px solid #059669; margin-bottom: 20px; font-weight: bold; }
            table { width: 100%; border-collapse: collapse; font-size: 19px; }
            table td { border: 1px solid #cbd5e1; padding: 15px; color: #000; }
            .res-row { background: #f0fdf4; font-weight: bold; }
            .res-val { font-weight: 900; color: #059669; font-size: 22px; text-align: right; }
            .footer { border-top: 1px solid #eee; padding-top: 15px; font-size: 14px; color: #666; text-align: center; }
        </style>
    </head>
    <body>
        <div class="a4-page">
            <div class="border-wrap">
                <div>
                    <div class="header">
                        <h1>${isBn ? 'আইডি কার্ড স্ক্যানার প্রো' : 'ID CARD SCANNER PRO'}</h1>
                        <p>Professional Digital Studio Solutions | www.idcardscannerpro.com</p>
                    </div>
                    <div class="title">${isBn ? 'জমির পরিমাপের রিপোর্ট' : 'Land Measurement Report'}</div>
                    <div class="section-head">${isBn ? 'জমির মোট হিসাব:' : 'Final Calculation Result:'}</div>
                    <table>
                        <tr class="res-row"><td>${isBn ? 'মোট বর্গফুট' : 'Total Sq. Feet'}</td><td class="res-val">${sqft}</td></tr>
                        <tr><td>${isBn ? 'শতাংশ' : 'Decimal'}</td><td style="text-align:right;">${decimal}</td></tr>
                        <tr><td>${isBn ? 'কাঠা' : 'Katha'}</td><td style="text-align:right;">${katha}</td></tr>
                        <tr><td>${isBn ? 'বিঘা' : 'Bigha'}</td><td style="text-align:right;">${bigha}</td></tr>
                        <tr><td>${isBn ? 'একর' : 'Acre'}</td><td style="text-align:right;">${acre}</td></tr>
                    </table>
                </div>
                <div class="footer">
                    ${isBn ? '* হিসাবের নিয়ম: ১ শতাংশ = ৪৩৫.৬ বর্গফুট। এটি একটি কম্পিউটার জেনারেটেড রিপোর্ট।' : '* Standard Calculation: 1 Decimal = 435.6 Sq. Feet. Computer generated report.'}
                </div>
            </div>
        </div>
    </body>
    </html>`;

    doc.open();
    doc.write(content);
    doc.close();

    // লোড হওয়ার পর প্রিন্ট
    iframe.contentWindow.onload = function() {
        iframe.contentWindow.print();
        setTimeout(() => { document.body.removeChild(iframe); }, 1000);
    };
}

function resetLand() {
    document.querySelectorAll('#landModal input').forEach(i => i.value = '');
    calculateLand();
}
;

let currentOmrLang = 'en';

const omrTranslations = {
    en: {
        uiTitle: "OMR Sheet Generator",
        inst: "Institution Name",
        exam: "Exam Title",
        questions: "Total Questions",
        options: "Options",
        printBtn: "Generate & Print OMR",
        placeholder: "Type here...",
        // Print Version Texts
        pName: "Student Name",
        pRoll: "Roll Number / ID",
        pSubject: "Subject",
        pSet: "Set Code",
        pWarning: "* Use Black Ballpoint Pen only. Fill the circles completely. Do not fold this sheet."
    },
    bn: {
        uiTitle: "ওএমআর শিট জেনারেটর",
        inst: "প্রতিষ্ঠানের নাম",
        exam: "পরীক্ষার নাম",
        questions: "মোট প্রশ্ন সংখ্যা",
        options: "অপশন সংখ্যা",
        printBtn: "ওএমআর তৈরি ও প্রিন্ট",
        placeholder: "এখানে লিখুন...",
        // Print Version Texts
        pName: "শিক্ষার্থীর নাম",
        pRoll: "রোল নম্বর / আইডি",
        pSubject: "বিষয়",
        pSet: "সেট কোড",
        pWarning: "* শুধুমাত্র কালো বলপয়েন্ট কলম ব্যবহার করুন। বৃত্তগুলো সম্পূর্ণ ভরাট করুন। এই কাগজটি ভাঁজ করবেন না।"
    }
};

function openOmrModal() {
    document.getElementById('omrModal').style.display = 'flex';
}

function closeOmrModal() {
    document.getElementById('omrModal').style.display = 'none';
}

function setOmrLang(lang) {
    currentOmrLang = lang;
    const t = omrTranslations[lang];
    
    // Update UI Labels
    document.getElementById('omr-ui-title').innerText = t.uiTitle;
    document.getElementById('lbl-omr-inst').innerText = t.inst;
    document.getElementById('lbl-omr-exam').innerText = t.exam;
    document.getElementById('lbl-omr-q').innerText = t.questions;
    document.getElementById('lbl-omr-opt').innerText = t.options;
    document.getElementById('lbl-omr-print').innerText = t.printBtn;
    
    document.getElementById('omr-name').placeholder = t.placeholder;
    document.getElementById('omr-exam').placeholder = t.placeholder;

    // Toggle Button Styles
    document.getElementById('omr-en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('omr-bn-btn').classList.toggle('active', lang === 'bn');
}

function generateAndPrintOMR() {
    const inst = document.getElementById('omr-name').value || (currentOmrLang === 'en' ? "INSTITUTION NAME" : "প্রতিষ্ঠানের নাম");
    const exam = document.getElementById('omr-exam').value || (currentOmrLang === 'en' ? "EXAMINATION TITLE" : "পরীক্ষার নাম");
    const totalQ = parseInt(document.getElementById('omr-q-total').value);
    const totalOpt = parseInt(document.getElementById('omr-opt-total').value);
    const t = omrTranslations[currentOmrLang];
    
    const options = ["A", "B", "C", "D", "E"];
    const optionsBn = ["ক", "খ", "গ", "ঘ", "ঙ"];

    // ১. প্রিন্ট ফরম্যাটের CSS (সুলাইমান লিপি সহ)
    let style = `
    <style>
        @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
        body { font-family: ${currentOmrLang === 'bn' ? "'SolaimanLipi', Arial" : "'Arial'"}, sans-serif; margin: 0; padding: 0; background: #fff; color: #000; }
        .a4-page { width: 210mm; min-height: 297mm; padding: 12mm; margin: auto; box-sizing: border-box; border: 1px solid #eee; position: relative; }
        .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 20px; }
        .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; }
        .header p { margin: 5px 0; font-size: 18px; font-weight: bold; }
        
        .student-info-grid { display: flex; gap: 20px; margin-bottom: 25px; border: 1px solid #000; padding: 12px; }
        .fields { flex: 1.5; font-size: 15px; line-height: 2.2; }
        .roll-id-section { flex: 1; border-left: 1px solid #000; padding-left: 15px; text-align: center; }
        .roll-title { font-size: 12px; font-weight: bold; margin-bottom: 8px; text-decoration: underline; }
        .roll-bubbles { display: flex; gap: 3px; justify-content: center; }
        .roll-col { display: flex; flex-direction: column; gap: 3px; }
        .roll-digit { width: 17px; height: 17px; border: 1px solid #000; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: bold; }

        .set-codes { margin-bottom: 20px; font-size: 14px; font-weight: bold; display: flex; align-items: center; gap: 10px; }
        .set-box { border: 1.5px solid #000; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

        .omr-body { display: grid; grid-template-columns: repeat(${totalQ > 50 ? 4 : 3}, 1fr); gap: 12px; border-top: 1px solid #000; padding-top: 15px; }
        .q-row { display: flex; align-items: center; margin-bottom: 5px; }
        .q-num { width: 28px; font-weight: bold; font-size: 14px; }
        .bubbles { display: flex; gap: 6px; }
        .bubble { width: 21px; height: 21px; border: 1.5px solid #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; }
        
        .footer-note { margin-top: 30px; text-align: center; font-size: 12px; border: 1px solid #000; padding: 8px; border-radius: 5px; }
        @media print { .a4-page { border: none; margin: 0; padding: 10mm; } }
    </style>`;

    // ২. রোল নম্বর এবং ইনফো সেকশন
    let rollHtml = `
    <div class="student-info-grid">
        <div class="fields">
            ${t.pName}: _____________________________________<br>
            ${t.pSubject}: _______________________________________<br>
            ${t.pRoll}: _____________________________________
        </div>
        <div class="roll-id-section">
            <div class="roll-title">${t.pRoll} (0-9)</div>
            <div class="roll-bubbles">`;
    for (let c = 0; c < 6; c++) { 
        rollHtml += `<div class="roll-col">`;
        for (let r = 0; r < 10; r++) {
            rollHtml += `<div class="roll-digit">${r}</div>`;
        }
        rollHtml += `</div>`;
    }
    rollHtml += `</div></div></div>`;

    // ৩. সেট কোড সেকশন
    let setHtml = `
    <div class="set-codes">
        <span>${t.pSet}:</span>
        <div class="set-box">A</div> <div class="set-box">B</div> <div class="set-box">C</div> <div class="set-box">D</div>
    </div>`;

    // ৪. প্রশ্ন গ্রিড জেনারেট করা
    let omrGridHtml = `<div class="omr-body">`;
    for (let i = 1; i <= totalQ; i++) {
        omrGridHtml += `<div class="q-row">
            <div class="q-num">${currentOmrLang === 'bn' ? replaceToBnNum(i) : i}.</div>
            <div class="bubbles">`;
        for (let j = 0; j < totalOpt; j++) {
            omrGridHtml += `<div class="bubble">${currentOmrLang === 'bn' ? optionsBn[j] : options[j]}</div>`;
        }
        omrGridHtml += `</div></div>`;
    }
    omrGridHtml += `</div>`;

    // ৫. সব মিলিয়ে ফাইনাল HTML
    let finalHtml = `
    <html>
    <head>
        <title>OMR Sheet - ${inst}</title>
        ${style}
    </head>
    <body>
        <div class="a4-page">
            <div class="header">
                <h1>${inst}</h1>
                <p>${exam}</p>
            </div>
            ${rollHtml}
            ${setHtml}
            ${omrGridHtml}
            <div class="footer-note">${t.pWarning}</div>
        </div>
    </body>
    </html>`;

    // ৬. প্রিন্ট উইন্ডো প্রোসেস
    const printWin = window.open('', '_blank');
    printWin.document.write(finalHtml);
    printWin.document.close();
    
    printWin.onload = function() {
        printWin.focus();
        printWin.print();
    };
}

// সংখ্যাকে বাংলা করার ফাংশন
function replaceToBnNum(num) {
    const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => bnNums[d] || d).join('');
}
;

function openOmrModal() {
setActiveMode('mode-omr');
    document.getElementById('omrModal').style.display = 'flex';
}

let affLang = 'bn';

const affTemplates = {
  bn: {
    nid: { title: 'জাতীয় পরিচয়পত্র সংশোধনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, মাতা: {{mother}}, ঠিকানা: {{address}}। আমি একজন বাংলাদেশের জন্মসূত্রে স্থায়ী নাগরিক এবং অত্র এলাকার বাসিন্দা। আমি অত্র হলফনামা দ্বারা এই মর্মে শপথপূর্বক ঘোষণা করিতেছি যে, আমার জাতীয় পরিচয়পত্রে আমার তথ্য ভুলবশত {{wrong}} আসিয়াছে। প্রকৃতপক্ষে দাপ্তরিক ও পারিবারিক রেকর্ড অনুযায়ী আমার সঠিক তথ্য হইবে {{correct}}। উক্ত ভুল তথ্য সংশোধন করা আমার জন্য একান্ত আবশ্যক। অত্র হলফনামার মাধ্যমে আমি যথাযথ কর্তৃপক্ষের নিকট এই তথ্য সংশোধনের জোর দাবি জানাইতেছি। আমার এই ঘোষণা জ্ঞানত সত্য এবং সঠিক।' },
    name: { title: 'নাম পরিবর্তনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, ঠিকানা: {{address}}। এই মর্মে ঘোষণা করিতেছি যে, আমার প্রকৃত ও আইনসম্মত নাম হইল {{correct}}। কিন্তু আমার বিভিন্ন গুরুত্বপূর্ণ কাগজপত্রে এবং পূর্ববর্তী রেকর্ডে অসাবধানতাবশত আমার নাম {{wrong}} লিপিবদ্ধ হইয়াছে। অদ্য হইতে আমি সর্বক্ষেত্রে এবং সকল প্রকার দাপ্তরিক কার্যাদিতে আমার ভুল নামের পরিবর্তে সঠিক নাম {{correct}} ব্যবহার করিব। ইহা ব্যতীত অন্য কোন নাম আমার বলিয়া গণ্য হইবে না। অত্র হলফনামা দ্বারা আমি আমার নাম পরিবর্তনের আইনগত ঘোষণা প্রদান করিলাম।' },
    edu: { title: 'শিক্ষাগত সনদ সংশোধনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, মাতা: {{mother}}, ঠিকানা: {{address}}। ঘোষণা করিতেছি যে, আমার মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের সার্টিফিকেট ও অন্যান্য শিক্ষাগত সনদে আমার তথ্য ভুলবশত {{wrong}} লিপিবদ্ধ হইয়াছে। প্রকৃতপক্ষে আমার জন্ম নিবন্ধন ও অন্যান্য সঠিক রেকর্ড অনুযায়ী প্রকৃত তথ্য হইবে {{correct}}। অত্র হলফনামা দ্বারা আমি সংশ্লিষ্ট শিক্ষা বোর্ড ও কর্তৃপক্ষকে আমার সনদে এই তথ্য সংশোধনের জন্য অনুরোধ জানাইতেছি। ইহা সত্য এবং আমার জ্ঞানমতে কোন তথ্য গোপন করা হয় নাই।' },
    dob: { title: 'জন্ম তারিখ সংশোধনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, ঠিকানা: {{address}}। আমি এই মর্মে শপথপূর্বক ঘোষণা করিতেছি যে, আমার জন্ম নিবন্ধন ও ভোটার তালিকায় আমার জন্ম তারিখ ভুলবশত {{wrong}} মুদ্রিত হইয়াছে। প্রকৃতপক্ষে আমার মেডিকেল সার্টিফিকেট ও পারিবারিক সঠিক তথ্য অনুযায়ী আমার প্রকৃত জন্ম তারিখ হইবে {{correct}}। দাপ্তরিক প্রয়োজনে এই সংশোধন একান্ত জরুরি। আমি ঘোষণা করিতেছি যে, এই হলফনামার বর্ণনা আমার জানামতে সম্পূর্ণ সত্য ও নিখুঁত।' },
    warish: { title: 'ওয়ারিশ বা উত্তরাধিকার সংক্রান্ত হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, ঠিকানা: {{address}}। এই মর্মে হলফপূর্বক ঘোষণা করিতেছি যে, আমার নিকটাত্মীয় মরহুম {{wrong}} গত ইংরেজি তারিখ- ............. তারিখে মৃত্যুবরণ করিয়াছেন। মৃত্যুকালে তাঁহার একমাত্র বৈধ ওয়ারিশ বা উত্তরাধিকারীগণ হইলেন {{correct}}। আমরা ব্যতীত তাঁহার আর কোন ওয়ারিশ বা অংশীদার নাই। এই হলফনামা দ্বারা উত্তরাধিকারীগণ যথাযথ পাওনা ও সম্পদ বুঝিয়া লওয়ার আইনগত দাবিদার বলিয়া ঘোষিত হইলাম।' },
    religion: { title: 'ধর্ম পরিবর্তনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, ঠিকানা: {{address}}। আমি অত্র হলফনামা দ্বারা এই মর্মে ঘোষণা করিতেছি যে, আমি ইতিপূর্বে {{wrong}} ধর্মের অনুসারী ছিলাম। বর্তমানে আমি সজ্ঞানে ও স্বেচ্ছায় ইসলাম ধর্ম গ্রহণ করিয়াছি এবং আমার বর্তমান ধর্ম ইসলাম। ইসলাম ধর্ম গ্রহণপূর্বক আমার বর্তমান নাম রাখিয়াছি {{correct}}। অদ্য হইতে আমি ইসলামের সকল নিয়ম-কানুন মানিয়া চলিব এবং দাপ্তরিক সকল কাজে আমার বর্তমান নাম ও ধর্ম ব্যবহার করিব। ইসলাম ছাড়া অন্য কোন ধর্মের প্রতি আমার আর কোন আনুগত্য নাই।' },
    marriage: { title: 'বিবাহ বা কাবিননামা সংশোধনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, ঠিকানা: {{address}}। ঘোষণা করিতেছি যে, আমার কাবিননামা বা বিবাহ নিবন্ধনের নথিতে আমার বৈবাহিক তথ্যাদি ভুলবশত {{wrong}} লিপিবদ্ধ হইয়াছে। প্রকৃতপক্ষে শরিয়ত ও প্রচলিত আইন অনুযায়ী সঠিক তথ্য হইবে {{correct}}। অত্র হলফনামা দ্বারা আমি বিবাহের সঠিক নথিপত্র প্রস্তুত করার ঘোষণা প্রদান করিতেছি এবং সংশ্লিষ্ট রেজিস্টারকে তথ্য সংশোধনের জন্য অবহিত করিতেছি।' },
    passport: { title: 'পাসপোর্ট তথ্য সংশোধনের হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, ঠিকানা: {{address}}। এই মর্মে হলফপূর্বক ঘোষণা করিতেছি যে, আমার পুরাতন পাসপোর্ট অথবা জন্ম সনদে আমার তথ্য {{wrong}} লিপিবদ্ধ রহিয়াছে। বর্তমানে আমার জাতীয় পরিচয়পত্র (NID) ও আধুনিক রেকর্ড অনুযায়ী আমার সঠিক তথ্য হইবে {{correct}}। আমি আমার নতুন পাসপোর্টে উক্ত সঠিক তথ্য ব্যবহারের ঘোষণা প্রদান করিতেছি এবং পাসপোর্ট অধিদপ্তরকে ইহা সংশোধনের জন্য সবিনয় অনুরোধ করিতেছি।' },
    general: { title: 'সাধারণ বা বিবিধ হলফনামা', text: 'আমি, {{name}}, পিতা: {{father}}, মাতা: {{mother}}, ঠিকানা: {{address}}। আমি এই মর্মে শপথপূর্বক ঘোষণা করিতেছি যে, {{wrong}}। প্রকৃতপক্ষে সঠিক বিষয় হইল {{correct}}। অত্র হলফনামার যাবতীয় বর্ণনা আমার জ্ঞান ও বিশ্বাসমতে সত্য এবং কোন প্রকার তথ্য গোপন করা হয় নাই। দাপ্তরিক যে কোন প্রয়োজনে এই হলফনামা ব্যবহারের আইনগত ঘোষণা প্রদান করিলাম।' }
  },
  en: {
    nid: { title: 'Affidavit for NID Correction', text: 'I, {{name}}, Son/Daughter of {{father}}, Mother: {{mother}}, Address: {{address}}, do hereby solemnly affirm and declare on oath that I am a permanent citizen of Bangladesh. Due to a clerical error, my NID card displays {{wrong}} as my personal information. According to my legal documents and birth certificate, the correct information should be {{correct}}. I declare that this statement is true and correct to the best of my knowledge and I request the concerned authority to update my records accordingly.' },
    name: { title: 'Affidavit for Name Change', text: 'I, {{name}}, Son/Daughter of {{father}}, Address: {{address}}, do hereby solemnly declare that my real and legal name is {{correct}}. However, in some previous documents and official records, my name has been mistakenly mentioned as {{wrong}}. From today onwards, I shall be known by the name {{correct}} for all official, legal, and personal purposes. No other name shall be attributed to me hereafter. This affidavit serves as a legal declaration of my name change.' },
    dob: { title: 'Affidavit for Date of Birth Correction', text: 'I, {{name}}, Son/Daughter of {{father}}, Address: {{address}}, do hereby affirm on oath that in my academic records/NID, my date of birth is recorded as {{wrong}}. Based on my primary birth registration and medical records, my actual and correct date of birth is {{correct}}. This correction is essential for my future administrative and legal needs. I certify that this information is accurate and no facts have been concealed.' },
    edu: { title: 'Affidavit for Educational Certificate Correction', text: 'I, {{name}}, Son/Daughter of {{father}}, Mother: {{mother}}, Address: {{address}}, do hereby declare that in my SSC/HSC certificate, my details have been wrongly printed as {{wrong}}. My actual details as per the National Identity Card and Birth Certificate are {{correct}}. I hereby request the Education Board and concerned authorities to correct my academic certificates based on this legal affidavit.' },
    passport: { title: 'Affidavit for Passport Information Correction', text: 'I, {{name}}, Son/Daughter of {{father}}, Address: {{address}}, solemnly declare that there is a discrepancy in my passport records. My information is currently stated as {{wrong}}. According to my updated NID and legal documents, the correct data should be {{correct}}. I request the Passport Authority to issue my new passport with the rectified information. All statements made here are true and verified by me.' },
    marital: { title: 'Affidavit for Marital Status Declaration', text: 'I, {{name}}, Son/Daughter of {{father}}, Address: {{address}}, do hereby declare my marital status. In certain records, it is wrongly mentioned as {{wrong}}. The actual fact is that I am {{correct}} (Married/Single). I provide this statement as a legal declaration for official documentation and verify that all information provided is genuine.' },
    general: { title: 'General Affidavit', text: 'I, {{name}}, Son/Daughter of {{father}}, Mother: {{mother}}, Address: {{address}}, do hereby solemnly affirm and declare that {{wrong}}. The factual reality of the matter is {{correct}}. This affidavit is executed for legal purposes to be presented before the concerned authorities. I state that the contents of this affidavit are true to the best of my knowledge.' }
  }
};

function adjustAffPreviewScale() {
    const container = document.querySelector('.aff-preview-scroll');
    const wrapper = document.getElementById('aff-wrapper');
    const paper = document.getElementById('aff-editor-box');
    if (!container || !paper) return;
    const containerWidth = container.offsetWidth - 30;
    const paperWidth = 812; 
    if (containerWidth < paperWidth) {
        const scale = containerWidth / paperWidth;
        wrapper.style.transform = `scale(${scale})`;
        const newHeight = paper.offsetHeight * scale;
        container.style.height = (newHeight + 50) + "px";
    } else {
        wrapper.style.transform = 'scale(1)';
        container.style.height = "auto";
    }
}

window.addEventListener('resize', adjustAffPreviewScale);

function openAffidavitModal() {
     setActiveMode('mode-affidavit');
    document.getElementById('affidavitModal').style.display = 'flex';
    setAffLang('bn');
    setTimeout(adjustAffPreviewScale, 300);
}

document.getElementById('aff-body-ui').addEventListener('paste', function(e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
});

function closeAffidavitModal() {
    document.getElementById('affidavitModal').style.display = 'none';
}

function setAffLang(lang) {
    affLang = lang;
    document.getElementById('aff-bn-btn').classList.toggle('active', lang === 'bn');
    document.getElementById('aff-en-btn').classList.toggle('active', lang === 'en');
    const isBN = lang === 'bn';
    
    // UI Label Switching
    document.getElementById('aff-main-title').innerHTML = isBN ? "<i class='fa-solid fa-file-contract'/> এফিডেভিট রাইটিং" : "<i class='fa-solid fa-file-contract'/> Affidavit Writing";
    document.getElementById('lbl-aff-temp').innerText = isBN ? 'টেমপ্লেট নির্বাচন করুন' : 'Select Template';
    document.getElementById('lbl-aff-name').innerText = isBN ? 'হলফকারীর নাম' : 'Name of Deponent';
    document.getElementById('lbl-aff-father').innerText = isBN ? 'পিতা/স্বামীর নাম' : 'Father/Husband Name';
    document.getElementById('lbl-aff-mother').innerText = isBN ? 'মাতার নাম' : 'Mother Name';
    document.getElementById('lbl-aff-addr').innerText = isBN ? 'ঠিকানা' : 'Full Address';
    document.getElementById('lbl-aff-wrong').innerText = isBN ? 'ভুল তথ্য (যা আছে)' : 'Incorrect Info';
    document.getElementById('lbl-aff-correct').innerText = isBN ? 'সঠিক তথ্য (যা হবে)' : 'Correct Info';
    document.getElementById('lbl-aff-margin').innerText = isBN ? 'স্ট্যাম্প টপ স্পেস (Inch)' : 'Stamp Top Space (Inch)';
    document.getElementById('lbl-sig-1').innerText = isBN ? 'তদন্তকারী কর্মকর্তা' : 'Attesting Officer';
    document.getElementById('lbl-sig-2').innerText = isBN ? 'হলফকারীর স্বাক্ষর' : 'Deponent Signature';
    document.getElementById('lbl-aff-preview-hint').innerText = isBN ? 'স্ট্যাম্প প্রিভিউ (ইমেজটি প্রিন্টে আসবে না)' : 'STAMP PREVIEW (IMAGE WILL NOT PRINT)';

    // Intro Box Switching
    document.getElementById('aff-intro-box').innerHTML = isBN ? 
        "<b>নির্দেশনা:</b> এটি লিগ্যাল সাইজ (২১৫ মিমি x ৩৪৫ মিম) স্ট্যাম্প পেপারের জন্য তৈরি। প্রিন্ট করার সময় শুধুমাত্র আপনার টাইপ করা লেখাগুলো প্রিন্ট হবে, স্ট্যাম্পের ব্যাকগ্রাউন্ড ইমেজটি প্রিন্ট হবে না।" : 
        "<b>Note:</b> This is designed for Legal Size (215mm x 345mm) stamp paper. Only your typed text will be printed; the stamp background image will not appear in the print.";

    const select = document.getElementById('aff-template-select');
    select.innerHTML = '';
    const data = affTemplates[lang];
    for (let key in data) {
        let opt = document.createElement('option');
        opt.value = key; opt.innerText = data[key].title;
        select.appendChild(opt);
    }
    applyAffTemplate(select.value);
}

function applyAffTemplate(key) {
    window.currentAffKey = key;
    updateAffPreview();
}

function updateAffPreview() {
    const data = affTemplates[affLang][window.currentAffKey];
    document.getElementById('aff-title-ui').innerText = data.title;
    const inputs = {
        name: document.getElementById('aff-name').value || '.......',
        father: document.getElementById('aff-father').value || '.......',
        mother: document.getElementById('aff-mother').value || '.......',
        address: document.getElementById('aff-address').value || '.......',
        wrong: document.getElementById('aff-wrong').value || '.......',
        correct: document.getElementById('aff-correct').value || '.......'
    };
    let body = data.text;
    for (let key in inputs) {
        body = body.replace(new RegExp(`{{${key}}}`, 'g'), `<b style="color:#000">${inputs[key]}</b>`);
    }
    document.getElementById('aff-body-ui').innerHTML = body;
}

function updateAffMargin(val) {
    document.getElementById('aff-top-margin').style.height = val + 'px';
    document.getElementById('aff-margin-val').innerText = (val / 100).toFixed(1) + " Inch";
}

function printAffidavit() {
    const marginHeight = document.getElementById('aff-top-margin').offsetHeight;
    const title = document.getElementById('aff-title-ui').innerText;
    const body = document.getElementById('aff-body-ui').innerHTML;
    const sig1 = document.getElementById('lbl-sig-1').innerText;
    const sig2 = document.getElementById('lbl-sig-2').innerText;

    const printWindow = window.open('', '', 'width=900,height=1000');
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Affidavit</title>
            <link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">
            <style>
                @page { size: 215mm 345mm; margin: 0; }
                body { margin: 0; padding: 0; background: #fff; -webkit-print-color-adjust: exact; }
                .print-container { width: 215mm; min-height: 345mm; margin: 0 auto; padding: 20mm; font-family: 'SolaimanLipi', Arial, sans-serif; box-sizing: border-box; color: #000; text-align: justify; position: relative; }
                .top-space { height: ${marginHeight}px; }
                .title { text-align: center; text-decoration: underline; font-size: 24px; margin-bottom: 30px; font-weight: bold; }
                .body-content { line-height: 1.8; font-size: 18px; min-height: 500px; word-wrap: break-word; overflow-wrap: break-word; white-space: pre-wrap; width: 100%; }
                .footer { margin-top: 80px; display: flex; justify-content: space-between; align-items: flex-start; font-weight: bold; font-size: 16px; width: 100%; }
                .sig-box { text-align: center; min-width: 150px; }
            </style>
        </head>
        <body>
            <div class="print-container">
                <div class="top-space"></div>
                <div class="title">${title}</div>
                <div class="body-content">${body}</div>
                <div class="footer">
                    <div class="sig-box"><br>________________<br>${sig1}</div>
                    <div class="sig-box"><br>________________<br>${sig2}</div>
                </div>
            </div>
            <script>window.onload = function() { setTimeout(() => { window.print(); window.close(); }, 700); };<\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function resetAffidavit() {
    // Reset all text inputs
    document.querySelectorAll('.aff-inputs input, .aff-inputs textarea').forEach(i => i.value = '');
    // Reset margin slider to default
    const slider = document.getElementById('aff-margin-slider');
    slider.value = 330;
    updateAffMargin(330);
    // Refresh preview
    updateAffPreview();
}
;

const allJobSites = [
  // লোগো ভিত্তিক সাইটগুলো (উপরে থাকবে)
  { name: "All Job Teletalk", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMmzAhLqlbjud22fetfPOvRQ6ROSjXkgHg7uTXuV_BvlW1oSdEmkyGYYUsnNvikSeSY7BzH5ikOmWHj8jr0_SDllMqAxQLt5JiBpTQ_fJ2VPkOH95rUIj5dbi8CPmLXOepeJvzxzPxbBBN2HBmEQSEmDvUgXhqgAneeDoPE8ihPVl_kSeFqvq_DHqfQX0/s1600/alljobs.png", link: "https://alljobs.teletalk.com.bd/jobs/government" },
  { name: "All Govt Jobs", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi13wdz3YAlITHIljo09gZEonJKSIC9WUYB2IwHfTjfKzLut377MIzVbskwqvV4tg_3cvfQxPamc5BYF6LFnj9Xv1KUmcPqMBeEEjaJASPQGRaIowBOuYYSrBlQ9s-tn9VHoM5-TDv7S2ZaICgZIucemGR1Xti-QvAyqMGjhvMTsq9KfMcY168gAf9Yizw/s1600/teletalk1.png", link: "http://vas.teletalk.com.bd/clientLivejobs.php" },
  { name: "Job Notice BD", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhET3agC6qyu5CUzuLhyphenhyphent5WaNGrhAhwhAFgvMrL314JsdlpMmD44SDyAAta8LwAxGcXJbQfhlBnQj8AeDzqx-xaUdnbKot4vwS8EcK53mnpwPVmJrBLoJi-ZXDJKjuw3o6OcOoEGMUsUwmG8lnV0prtoDOir6s1wQfED3Z9trHGABQRbQ_XM2XXiigyDB4/s1600/jobsnotice.png", link: "https://jobsnoticebd.com/" },
  { name: "Bikroy Jobs", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl5CohMYBT8reMf3U5DLJ2JjhORZac0OTTs5NIT1f1J5XgmO73riycS_gHCpfbdaW1UYixJmUAlkfv78YFdHZeZI7HPNOKIJuIfzJ-yxMa0F91Uu8jhQ8beevB9ecuy3pCPFhW3E0L3JKjsamEx0g6iLzOi19TgzCYYHsMgYYAhYpQ_0kTbsWvFMywJYQ/s1600/BikroyJobs.png", link: "https://bikroy.com/bn/jobs" },
  { name: "Bangla Cyber", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMJo4yHuQiy2eLiv9tu-0jt11OppH4D0QdyN9cIGlQABU9JZue0KXmYnkt0YeRX_rwuQifdHMjynzSmrM0kz5bIXfaGA_DngMR1GNuFNIDnomhF3xKnjeu97vBVBdDtshXRt6Dd-pH9iASfYtZEao8WNDas-eA03aPgqlkG2kjKCzSEWJXkGSmdNoxyg/s1600/banglacyber.png", link: "https://www.banglacyber.com/" },
  { name: "Job Alert BD", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzsCtmxJENSn1CKo0EGgc-75l7nf9_Z6s33P-MXXj9ZeaL4Cw-D7J3zdbuEkp0AzMmz3v0Cc-vr010-B2yDjrH-e3M2LKrtmWlvZrYv56kadxqw8Aw9uwqzTXy4YpRzaxXxvbm_IotXqXBFQuEYOTzaSdLynffov8fqFcnCo5bBOooQmRNHrfH9NVz02U/s1600/jobss.png", link: "https://jobalertbd.com/" },
  { name: "Shomvob Job", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHvnZ7KGIHMXAmISdX4nIu6pTBkAd8kH5lsnWR1krr2QD1D8GXzJZ6C2de1NE6oYfO2DUxOsqVz8ASjlnDrUMZw0DwzsYUplO3bdTNI8fqgEOqHHtx3lPuFmP23og1ELFXf_ADpglcz264ASJkvt_yjIeLh1zM6DN1eHrjCKF1fT_4JzCutlvNBJB-u30/s1600/shomvob.png", link: "https://app.shomvob.co/govtjobs" },
  { name: "BD Jobs", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSbY0GqXMZnf5OVgW-qAOTlEaTETP4_2xGgFXbxC8YSF9OBNXxNLiH7CsVjJXTNbr93AanP37iPsbAB9yr4U8iWXUJ2mbxTjWenvVrMS4PmIYnpK_BXMvES9DtbYuslun76wcqO7DZBLnjD0-TSQaZyeqlg0CVJ4sMPCyObGJ8uNkDetZLss0-3g4MDro/s1600/bdjobs.png", link: "https://bdjobs.com/" },
  { name: "Biddabari", type: "img", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr63jHSwgYouSTygCpeiwIBfbRx0sYFbHfzmikU4BAiqUbwC41RZ9okb5PJZo_x0mgbkcN0AjEtztEdltlEKG9Vtuofe41jk7k8mldMI00up8aV4GNiVbDv-3h1mYxijZpnpsDyx0XOZgDNTIM335w5aCmLfinkNpLa3Dl7kbHuFTkJwfchyphenhyphenCTbUn6yCk/s1600/biddabari.png", link: "https://biddabari.com/job-circular" },

  // আইকন ভিত্তিক সাইটগুলো (তার নিচেই থাকবে)
  { name: "Bangladesh Bank", type: "icon", src: "fa-building-columns", link: "https://erecruitment.bb.org.bd/" },
  { name: "BPSC Portal", type: "icon", src: "fa-landmark-dome", link: "http://bpsc.teletalk.com.bd/" },
  { name: "Primary Teacher", type: "icon", src: "fa-school", link: "http://dpe.teletalk.com.bd/" },
  { name: "Army Recruitment", type: "icon", src: "fa-person-military-to-person", link: "https://joinbangladesharmy.army.mil.bd/" },
  { name: "Navy Recruitment", type: "icon", src: "fa-anchor", link: "https://joinnavy.navy.mil.bd/" },
  { name: "Police Jobs", type: "icon", src: "fa-shield-halved", link: "http://police.teletalk.com.bd/" },
  { name: "NGO Jobs", type: "icon", src: "fa-hand-holding-heart", link: "https://bdgovtjob.net/category/ngo-job-circular/" },
  { name: "Jagojobs", type: "icon", src: "fa-magnifying-glass", link: "https://www.jagojobs.com/" },
  { name: "Kormo Jobs", type: "icon", src: "fa-google", link: "https://kormo.org/" },
  { name: "Alo Jobs", type: "icon", src: "fa-newspaper", link: "https://todayinbd.com/" },
  { name: "NTRCA (Teacher Reg)", type: "icon", src: "fa-chalkboard-user", link: "http://ntrca.teletalk.com.bd/" }
];

function openJobModal() {
    // setActiveMode আপনার ওয়েবসাইটের ফাংশন
    if(typeof setActiveMode === "function") setActiveMode('mode-job-finder');
    document.getElementById('jobFinderModal').style.display = 'flex';
    renderAllJobCards();
}

function closeJobModal() {
    document.getElementById('jobFinderModal').style.display = 'none';
}

function renderAllJobCards() {
    const container = document.getElementById("job-master-grid");
    if(!container) return;
    container.innerHTML = "";

    allJobSites.forEach(site => {
        const card = document.createElement("div");
        card.className = "job-card-item";
        
        let mediaHtml = site.type === "img" 
            ? `<img src="${site.src}" alt="${site.name}">` 
            : `<i class="fa-solid ${site.src}"></i>`;

        card.innerHTML = `
            ${mediaHtml}
            <span>${site.name}</span>
            <div class="btn-visit">Visit Site</div>
        `;
        
        card.onclick = () => window.open(site.link, '_blank');
        container.appendChild(card);
    });
}

// আপনার ওয়েবসাইটের কাস্টম পপআপ দেখানোর ফাংশন
function triggerSitePopup(msg) {
    const popup = document.getElementById('customPopup');
    const msgBox = document.getElementById('popupMessage');
    if (popup && msgBox) {
        msgBox.innerText = msg;
        popup.style.display = 'flex';
    } else {
        alert(msg); // ব্যাকআপ যদি আইডি খুঁজে না পায়
    }
}

function searchJobs() {
    const input = document.getElementById('jf-search-input');
    const query = input.value.trim();
    
    // বর্তমান সাল অটোমেটিক পাওয়ার জন্য (Dynamic Year)
    const currentYear = new Date().getFullYear();

    if (query !== "") {
        // গুগলে বর্তমান সালসহ সার্চ করা হবে
        const fullQuery = query + " job circular Bangladesh " + currentYear;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(fullQuery)}`, '_blank');
    } else {
        // সার্চ বক্সে কিছু না থাকলে আপনার ওয়েবসাইটের কাস্টম অ্যালার্ট
        triggerSitePopup("দয়া করে পদের নাম অথবা প্রতিষ্ঠানের নাম লিখে সার্চ দিন।");
    }
}
;

const onlineSebaList = [
  { name: "পল্লী বিদ্যুৎ মিটার আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ_tNznpArNXHpj5TQSvrb87xdqCykGYPVcCyE-C1H-BR_AC0A2RNS5ohf8nLX_X7fChOQApTR756-8hj3q6VbAxiOc6oiDp7fngx45zR21avmoGYC02ZeFeVoJN09N6glOekHlY8_jvkoI5BxeItU1cq_7nYKKyXOmKjnap0OUGytQXqU6SdHhTwzekg/s1600/polli.png", link: "http://www.rebpbs.com/Default.aspx" },
  { name: "অনলাইন জিডি আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRSS3qpFjoZIOpP4J8Jf7-EPQZpXYltkk_szsU3UlGR6vpQIQl4JnnllVxCnbMOBffD4PiR-qc0jhWAKifWufihyphenhyphenj3EfG1x4Sy4H6qrSR9zoScC7fQIz60vUDwm-PHSttvpzL_NJ0y2frQxrv8VaK2mIbBSrdc794bjWziVRgJZmXEB-aXCB0eQ-AiKps/s1600/gd.png", link: "https://gd.police.gov.bd/Auth/Account/Login" },
  { name: "কলেজ ভর্তি আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPnngv7ZIQXRP5ONFxBVK7K6uaVgDxQJBWeS_fPPqHsAnVLacQQ_-6mbyVGiegoI_Hu4k4U9yMMR3JC-7tC-6ife-UCV1KS5G7xVgtsVOf72iQ6DitjxXhvOGpod3s2MvThuepV9QTB_ohXKtEwyCKtMa7XRe5wQAd7E7aNvXOAGsgHw/s1600/gov.png", link: "https://xiclassadmission.gov.bd" },
  { name: "সকল ভাতার আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ3pRq4KG_bBUMnIEVkr3tE-rfkQ1qBcKvthP3IDrxtXArD01yA3SO1XO4LF6O6cXkIXxNiWU2-tu4Ym8JnSbrw1EeA8w7csliU8rnAk8vr69qJoCXxf7AORW2sWj3YDRs4YUlrEQp5TiaMKp2-UBZTfn2Bg5_3yiPtImrOHX2-moTAMWrvABJ_GubCsQ/s1600/bhata.png", link: "https://dss.bhata.gov.bd/home" },
  { name: "প্রতিবন্ধী কার্ডের আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIDbHmeCPA_NUHmX_YhdVuglAmU3zo9qYzDmN_uFtCuqQTervhddUhQzhiwErWPf0cmtvRrguLsaCrKky_rkXtqCB6A-kJdRuwewLmvrqH_stsKLO4DxkKy6vaxVFlOmEWHrc0-seSDljVnnqea9Tzhqb84e3N_2S8_42Qm9GvglELS3DVZBQbAmjI8d4/s320/diss.png", link: "https://www.dis.gov.bd/" },
  { name: "এ-চালান", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHGLXrFesWrziYlo8QycQyyRjrvHpnyZfhQ6z6x4YZbP4Ae88FbbaCkAPALJYSYeT0id9MmjJ1GhQQ-ehZ4Dz-JtuDKAbXtePrfgUDIZn6Tk5Hvsebg1dSU16ES6mTY8Iklyr9fVdPth3XQwTpOoDkGeqDU5rRc2wtx0yD91vBC7J2roaTG4bZFnYLV9k/s1600/a.png", link: "https://training.finance.gov.bd/acs/v2/general/home" },
  { name: "জন্ম নিবন্ধন আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIUcfEleYR4vIsscnivWiU3i_Y9_CAKCQWEa_xgZSlzlOX5-_D0O8wUsjxNBAEekSwraFkQQcaUMPPpb5e49aEqZhWteN1LNjHMJoBFUSD2eUFsBfQMFc11EDrBaUDjYUZtBlnsIxK0SJSgo22DZuOCiANEd9zafKTZD4egaGrm0vGPsx8BJDQ4m4Egpw/s1600/dob.png", link: "https://bdris.gov.bd/" },
  { name: "জন্ম নিবন্ধন যাচাই", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_YtLcyQqdG8mF1SEK2V0upbcWkDImMFjPFTAnyNxYmGnmw4FYR3ZoApXGsVSFqz2_ed32oGwCJn2dWhra3bEeZhn-Q9KXMBDtnvyXO0Yg8Hi13QJjgTXqyjOYRVzJty-hUK1OA1ijBBqnCJ2w_09pOW3RNToYRow3lcffGWI6yrl2ZAZWaY6UBGTu-Z8/s1600/jonmo.jpeg", link: "https://www.jonmonibondhonjachai.com/" },
  { name: "এন-আইডি কার্ড আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7vxBu4KQfuo5hnjjucdt3lYBLBYiRB1r44uu7hiqab3gebEP35LPij6iN05N6BKzbOT6ES_XyCDWjY45CMeihFotaqhH-Lr8pq_UPAwHgvzkcdwV6HYDi01bWRgb4vE1VTNQ7vKEzOT7yPzLgZbNw6pcQWpfKrzrse8ayVgbqC5ay_40WWGPzSHLJNkk/s1600/ec.png", link: "https://services.nidw.gov.bd/nid-pub/register-account" },
  { name: "এন-আইডি কার্ড ডাউনলোড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7vxBu4KQfuo5hnjjucdt3lYBLBYiRB1r44uu7hiqab3gebEP35LPij6iN05N6BKzbOT6ES_XyCDWjY45CMeihFotaqhH-Lr8pq_UPAwHgvzkcdwV6HYDi01bWRgb4vE1VTNQ7vKEzOT7yPzLgZbNw6pcQWpfKrzrse8ayVgbqC5ay_40WWGPzSHLJNkk/s1600/ec.png", link: "https://services.nidw.gov.bd/nid-pub/claim-account" },
  { name: "স্মার্ট এন-আইডি স্ট্যাটাস চেক", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7vxBu4KQfuo5hnjjucdt3lYBLBYiRB1r44uu7hiqab3gebEP35LPij6iN05N6BKzbOT6ES_XyCDWjY45CMeihFotaqhH-Lr8pq_UPAwHgvzkcdwV6HYDi01bWRgb4vE1VTNQ7vKEzOT7yPzLgZbNw6pcQWpfKrzrse8ayVgbqC5ay_40WWGPzSHLJNkk/s1600/ec.png", link: "https://services.nidw.gov.bd/nid-pub/card-status/" },
  { name: "পুলিশ ক্লিয়ারেন্স আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmtvx1vEtRMHAg5YP6yfhFYDV8Z3nR_TFtyQrz2oSstd06pi7_5bjClmi34uQOzv6ZuRqeOA4Vve5rR7rEItu18u6pf7Ga47ErScBtpbRWttoVibEHtiYhwLrD8_UInznelVqbEUTBaH_sZnKv9YyzgURZVsfrhxjSj_1fclP9Ea1n2JVatAarjK_wyG4/s1600/images.jpeg", link: "https://pcc.police.gov.bd/ords/r/pcc/pcc/home" },
  { name: "টিন সার্টিফিকেট আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXdnYR5c1Do8RDGkOn7Q-t4ibfSfRAteIBLX4SRavOs2czQDItU-3OWQ0-D7R7FA5Nn6nzSXflAucLedNTcCYrI0AGC_OGWwZFhYeuqmG1monQd3sDn4Jk_j2tYN7vqz2uLgkX0fSKqfUs-QFxoSLw3iCB7bLgfQ2BTpVtG55hBJF-pIyKWY7V_RasGLI/s1600/tin.jpg", link: "https://secure.incometax.gov.bd/TINHome" },
  { name: "ড্রাইভিং লাইসেন্স আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEMf32wPXNpG8c15ixXDF-ra9TP1Wudm1NG5u6vQX5BeBN-X9vFJgyLowTFfSmKS28k6PeqqR5FZvHbYV6HBXj7toG_GUob6QklaFzVx9xIzM6CjcO_M5fQm4LV7Uvv2wXWVAgice0y-zB_G_1HZMZ_WcCk6YLLRfvtlrFZag0_R1oSWC-0UqJndRR56A/s1600/brta.png", link: "https://bsp.brta.gov.bd" },
  { name: "টাইফয়েড ভ্যাকসিন আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvHDbfqFrEbczVCCWZ2KdeouLRWcnEfHcL4C5mcyPW-_oJssL4cxPb8LFT4CFMr9htZh8rSI27oVFaPesb3p6zdOEZ7L4uBzaPJZlEhTNQvRVqpCifWp9b0BnhxIYB1riseXz1dXeT4ZxPOu6EYUtCVT8vMgN2S9IPf_Cd4V_7AnDn74-d4rhYuMB6PJ8/s1600/tica.png", link: "https://vaxepi.gov.bd/registration/tcv" },
  { name: "মেনিনজাইটিস ভ্যাকসিন আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvHDbfqFrEbczVCCWZ2KdeouLRWcnEfHcL4C5mcyPW-_oJssL4cxPb8LFT4CFMr9htZh8rSI27oVFaPesb3p6zdOEZ7L4uBzaPJZlEhTNQvRVqpCifWp9b0BnhxIYB1riseXz1dXeT4ZxPOu6EYUtCVT8vMgN2S9IPf_Cd4V_7AnDn74-d4rhYuMB6PJ8/s1600/tica.png", link: "https://vaxepi.gov.bd/registration/meningitis" },
  { name: "এইচপিভি ভ্যাকসিন আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvHDbfqFrEbczVCCWZ2KdeouLRWcnEfHcL4C5mcyPW-_oJssL4cxPb8LFT4CFMr9htZh8rSI27oVFaPesb3p6zdOEZ7L4uBzaPJZlEhTNQvRVqpCifWp9b0BnhxIYB1riseXz1dXeT4ZxPOu6EYUtCVT8vMgN2S9IPf_Cd4V_7AnDn74-d4rhYuMB6PJ8/s1600/tica.png", link: "https://vaxepi.gov.bd/registration/hpv" },
  { name: "এনরোলমেন্ট কার্ড ডাউনলোড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUzJO-wJMSaip93MkajMd65T4aojN748IeFFJ_rzsm944Kfsp_NQ398_F7-b-FI0EeDaywSybxWJbUzf05fPRDV0piDTIosaX0DNnFt1ILn1dayCMMGL45tW-y1bhdx4Sbe8zMPj_0gkwFHoSZ3fkYTwycm-4LitOdx7IOiUYSIxxi2PSIXaqUOcSBUvk/s1600/tre.png", link: "https://training.oep.gov.bd/pdo-enrollment-card" },
  { name: "ট্রেনিং সার্টিফিকেট ডাউনলোড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUzJO-wJMSaip93MkajMd65T4aojN748IeFFJ_rzsm944Kfsp_NQ398_F7-b-FI0EeDaywSybxWJbUzf05fPRDV0piDTIosaX0DNnFt1ILn1dayCMMGL45tW-y1bhdx4Sbe8zMPj_0gkwFHoSZ3fkYTwycm-4LitOdx7IOiUYSIxxi2PSIXaqUOcSBUvk/s1600/tre.png", link: "https://training.oep.gov.bd/pdo-certificate" },
  { name: "ম্যানপাওয়ার ডাউনলোড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUzJO-wJMSaip93MkajMd65T4aojN748IeFFJ_rzsm944Kfsp_NQ398_F7-b-FI0EeDaywSybxWJbUzf05fPRDV0piDTIosaX0DNnFt1ILn1dayCMMGL45tW-y1bhdx4Sbe8zMPj_0gkwFHoSZ3fkYTwycm-4LitOdx7IOiUYSIxxi2PSIXaqUOcSBUvk/s1600/tre.png", link: "https://self.oep.gov.bd/self-clearance/login" },
  { name: "বিএমইটি আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUzJO-wJMSaip93MkajMd65T4aojN748IeFFJ_rzsm944Kfsp_NQ398_F7-b-FI0EeDaywSybxWJbUzf05fPRDV0piDTIosaX0DNnFt1ILn1dayCMMGL45tW-y1bhdx4Sbe8zMPj_0gkwFHoSZ3fkYTwycm-4LitOdx7IOiUYSIxxi2PSIXaqUOcSBUvk/s1600/tre.png", link: "https://employee.oep.gov.bd/employee/login-with-otp" },
  { name: "ই-পাসপোর্ট আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_AQfad2_5iM7I-0OBASm7oQhUU7Y0Rr_eLY3t4weuYxgnnX0adAjSdoUZst1QZhUajfVAznth0P3QsAcfqTDytRnn71n81TG2CGAFoZBEXw1xq7WBxS4hoY3xn18ZNClD8DNTC_q6keBVJaFsJQtpBGLqh0zcufM3h86TnTaJioxEE2X4vs2YL6qxQ6Q/s1600/pass.jpeg", link: "https://epassport.gov.bd/onboarding" },
  { name: "পাসপোর্ট আবেদন চেক", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_AQfad2_5iM7I-0OBASm7oQhUU7Y0Rr_eLY3t4weuYxgnnX0adAjSdoUZst1QZhUajfVAznth0P3QsAcfqTDytRnn71n81TG2CGAFoZBEXw1xq7WBxS4hoY3xn18ZNClD8DNTC_q6keBVJaFsJQtpBGLqh0zcufM3h86TnTaJioxEE2X4vs2YL6qxQ6Q/s1600/pass.jpeg", link: "https://epassport.gov.bd/authorization/application-status" },
  { name: "জমির খারিজ আবেদন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXPLdr2zh11miyPhvU8DAQ_GOPVVd1Hi7Q3Go2t7z_h_Zh9jVHp8PW9ZvM8tUSQauzCjSTsq7PAX2pCKZ93vWniCNFEEgUTZRXR8xP7d1czW3ZAjbnkbm_k-2VjBs6OZmfDLIMws49ujcbWtGV7PdyTa_824bQAvekD6NOpW6dV85YT0_E8XpOjClROrs/s1600/img.png", link: "https://mutation.land.gov.bd/" },
  { name: "ভূমি উন্নয়ন কর প্রদান", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQPbEEPSG2zQzSlm69zecnUDN-MmmKn63TI9WTtO4q11LV1M6hBkjart0VW6AUQqRiYQ1J0IhB6pOJ6ZIYovzvmltzoXYvgMV47W3TRvGb0MrZVj5AlCxyxL93UzwlEHnGFfY2zAS3VBRBzidA2-ZFvKz2PW3Fe8TRMGfY821pm-lDMNvesOOsf6ARI2Q/s1600/v.webp", link: "https://portal.ldtax.gov.bd/sso" },
  { name: "ভূমি ম্যাপ ও খতিয়ান", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLmPkgq6LF_0oQXrnP0Ko1rhH824k6c53FhhAMazthbZFcj0qc3LfCUt9LuNyQzauffalsdb491ikMuIpMy6XRS2Je-tjx7fn0Px_JWwWTC0G76pFRkHffJosd0JGq3kdJuMZXkjUHSa4hzHlvUuK3TnONJqYrBGsnucMFcTUzDjEvoYqvhhx4F3pk9XE/s1600/map.webp", link: "https://dlrms.land.gov.bd/" },
  { name: "স্মার্ট নাগরিক ইউনিয়ন", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtKj6ftyZJ-sGj1rT6yARFq1ajkDDdYVr45Eqqz620s9fW80NZSnnDEjJ5MiTbUWv3I2-X52uOjEwKduJ8qqwsDEr1piGfAG0oCX2k-6p4lU4uiPFYCOqpZonfQos-t3tJnrviH6geuC34gmLcSDdXoItvV-sLuzaY0xlCk5ImHdPLHa1XxtvaIwHOEOY/s1600/01.png", link: "https://smartnagorik.com.bd" },
  { name: "টিসিবি স্মার্ট কার্ড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0th-c30M1lhcC71nbm1R6WtwkMC7OIHmXSuZxXKy1auXuCxWDgNuj5dtneWhvnHgr_0gCP_F2xDikqB12vHF-Cu-GQ5p6Ui56g5hccCKtk8b5puGJIKFLTzJOstmaKkOo5xMNSIb-MD0hcFtsTr9RqfzrQXdF72PuV_bo8NuGcL7A79rpFQRYZV13z1o/s1600/tcb.jpeg", link: "https://tcbsheba.com/" },
  
{ name: "আমি প্রবাসী", logo: "https://dnq4a6incipq3.cloudfront.net/website/public/img/logo.png", link: "https://www.amiprobashi.com/" },

{ name: "বোয়েসেল", logo: "https://brms.boesl.gov.bd/assets/images/logo_big.png", link: "https://brms.boesl.gov.bd/" },

{ name: "মাই গভ", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu8X7x1D2_bz6MmFspi60T9n6ym379tKQDpCpEu-NKDUjJbeoMJUStSMJ-LFQLmCy6SkjRBhdBi848R5NXlpaz_bSXjvUGLA5O_zi_uuIYeG30rH9WgRl_Pz15gw9-wmRZ0wEHkTFBASyF1qSvWhggRNn1Q6LBIy0GDsub-5-uxKHw9zqhFoHz1TAo7eE/s320/mygov.png", link: "https://www.mygov.bd/" },

{ name: "আমার সেবা", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYjUuEQfS67Ip54bDjq2eCnvfgm0yIw4b1HLeRTPPjnd8sStv0GswWM_7139aSQpB50rQgmVl5agTJ429XzcuCmyTnpMW9m3isFaH31IHyun_7UIQXg7AbNIUmQnqjBZ0yCNP76Du0J9-wrVzGNjanu3oXCPbJNfDGCmaWsRRVzgyCsiOyMIOdc6VEk84/s1600/seba.png", link: "https://e-amarseba.com/" }
];

// গ্রেডিয়েন্ট প্যালেট
const sebaGradients = [
  "linear-gradient(135deg, #ff8a80, #ff5252)",
  "linear-gradient(135deg, #a5d6a7, #66bb6a)",
  "linear-gradient(135deg, #90caf9, #42a5f5)",
  "linear-gradient(135deg, #ffe082, #ffb347)"
];

function openSebaModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-online-seba');
    document.getElementById('onlineSebaModal').style.display = 'flex';
    renderSebaGrid();
}

function closeSebaModal() {
    document.getElementById('onlineSebaModal').style.display = 'none';
}

function renderSebaGrid() {
    const container = document.getElementById("seba-master-grid");
    container.innerHTML = "";

    onlineSebaList.forEach((seba, index) => {
        const card = document.createElement("div");
        card.className = "seba-card-item";
        card.style.background = sebaGradients[index % sebaGradients.length];
        
        card.innerHTML = `
            <img src="${seba.logo}" alt="${seba.name}">
            <span>${seba.name}</span>
            <div class="btn-seba-visit">ভিজিট করুন</div>
        `;
        
        card.onclick = () => window.open(seba.link, '_blank');
        container.appendChild(card);
    });
}
;

let costLang = "en";

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন
function toBengaliNumber(n) {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return n.toString().replace(/\d/g, digit => bengaliDigits[digit]);
}

function openCostCalcModal() {
    // আগের ফাংশনটির মতোই
    if(typeof setActiveMode === "function") setActiveMode('mode-cost-calc');
    document.getElementById('costCalcModal').style.display = 'flex';
    calculatePrintingCost();
}

function closeCostCalcModal() {
    document.getElementById('costCalcModal').style.display = 'none';
}

function setCostLang(lang) {
    costLang = lang;
    document.getElementById('cost-en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('cost-bn-btn').classList.toggle('active', lang === 'bn');

    const strings = {
        en: {
            title: "Photocopy & Print Cost Calculator",
            paper: "Paper Rim Price (BDT)",
            ink: "Ink/Toner Price",
            yield: "Page Yield (Approx)",
            elec: "Electricity/Bill (Per Page)",
            sell: "Selling Price (Per Page)",
            costPer: "Cost Per Page:",
            profitPer: "Profit Per Page:",
            unit: "BDT",
            tip: "Tip: Generally, one Rim has 500 sheets. Calculation is based on single-side print."
        },
        bn: {
            title: "ফটোকপি ও প্রিন্টিং খরচ ক্যালকুলেটর",
            paper: "কাগজের রিমের দাম (টাকা)",
            ink: "কালি বা টোনারের দাম",
            yield: "মোট প্রিন্ট সংখ্যা (আনুমানিক)",
            elec: "বিদ্যুৎ ও অন্যান্য (প্রতি পেইজ)",
            sell: "বিক্রয় মূল্য (প্রতি পেইজ)",
            costPer: "প্রতি পেইজ খরচ:",
            profitPer: "প্রতি পেইজ লাভ:",
            unit: "টাকা",
            tip: "টিপস: সাধারণত ১ রিমে ৫০০ টি কাগজ থাকে। হিসাবটি এক পাশের প্রিন্টের জন্য।"
        }
    };

    document.getElementById('cost-title').innerText = strings[lang].title;
    document.getElementById('lbl-paper-price').innerText = strings[lang].paper;
    document.getElementById('lbl-ink-price').innerText = strings[lang].ink;
    document.getElementById('lbl-ink-yield').innerText = strings[lang].yield;
    document.getElementById('lbl-electricity').innerText = strings[lang].elec;
    document.getElementById('lbl-sell-price').innerText = strings[lang].sell;
    document.getElementById('txt-cost-per-page').innerText = strings[lang].costPer;
    document.getElementById('txt-profit-per-page').innerText = strings[lang].profitPer;
    document.getElementById('cost-tip').innerText = strings[lang].tip;
    
    // কারেন্সি সিম্বল বা ইউনিট আপডেট
    document.getElementById('unit-cost').innerText = strings[lang].unit;
    document.getElementById('unit-profit').innerText = strings[lang].unit;

    calculatePrintingCost(); // ভাষা পরিবর্তনের সাথে সাথে সংখ্যা আপডেট হবে
}

function calculatePrintingCost() {
    const paperPrice = parseFloat(document.getElementById('paper-price').value) || 0;
    const inkPrice = parseFloat(document.getElementById('ink-price').value) || 0;
    const inkYield = parseFloat(document.getElementById('ink-yield').value) || 1;
    const elecCost = parseFloat(document.getElementById('elec-cost').value) || 0;
    const sellPrice = parseFloat(document.getElementById('sell-price').value) || 0;

    const paperCostPerPage = paperPrice / 500;
    const inkCostPerPage = inkPrice / inkYield;
    const totalCost = paperCostPerPage + inkCostPerPage + elecCost;
    const netProfit = sellPrice - totalCost;

    let finalCost = totalCost.toFixed(2);
    let finalProfit = netProfit.toFixed(2);

    // যদি ভাষা বাংলা হয়, তবে সংখ্যা পরিবর্তন করো
    if (costLang === 'bn') {
        finalCost = toBengaliNumber(finalCost);
        finalProfit = toBengaliNumber(finalProfit);
    }

    document.getElementById('res-total-cost').innerText = finalCost;
    document.getElementById('res-net-profit').innerText = finalProfit;
}
;

const bdResultList = [
  { name: "প্রাথমিক শিক্ষা অধিদপ্তর", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXodoER66gM-MD5WM7zYTW5eezYhfMr5jP8vTl1b-EfV661cyeLLCRDiUKsa9xEppY5LPaTypt3YVZ9hEG0xMtYD6PKFNJN-mV9oCUbQpvw7gXET3WGKnbMLGjMXIPNoEysYSMp5eYYvuGc5FO8wqwTSgNun2tQn7RvsgytkC6TPSIHO_FMb4dbgj5lnI/s1600/logo.png", link: "http://180.211.137.51/" },
  { name: "প্রাথমিক শিক্ষা-বিদ্যালয় ভিত্তিক", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXodoER66gM-MD5WM7zYTW5eezYhfMr5jP8vTl1b-EfV661cyeLLCRDiUKsa9xEppY5LPaTypt3YVZ9hEG0xMtYD6PKFNJN-mV9oCUbQpvw7gXET3WGKnbMLGjMXIPNoEysYSMp5eYYvuGc5FO8wqwTSgNun2tQn7RvsgytkC6TPSIHO_FMb4dbgj5lnI/s1600/logo.png", link: "http://180.211.137.51/ResultSchWise.aspx" },
  { name: "বাংলাদেশ শিক্ষা বোর্ড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhj_2hUiFrSnQ6VO2EGrRCBdRkj3cN4YwALyTzAvs-kMEu0hu9lSgHVEPykJC7oGeslSS78SUdEPrzXLDJNhx4gPyrzb5Okr0jsk6VjDRJZkckZXxwhrOsfcU2xpz0KyuLOMNVGIQ83t-e6hBpAb0ykBoIs64NdPYcy5yskUNbtE0LH1wNc-0JpqPHpIA/s1600/teletalk-sim-operator-logo-png_seeklogo-388669.png", link: "http://www.educationboardresults.gov.bd/" },
  { name: "পরীক্ষার রেজাল্ট বিডি", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi75b8dqCJ2Q3-LmZeyVDtemeEQ7LWvnBaW0X-9dNCKRn3MDXr9qePBUoNDXHKeEG0bdeeEzCriwA5Ikvq1Cw7bkb0yPS4pNO4mnrvuRlD3JxRXH4inWWnbg4HYETFDWFYlHfP0MGLnPF9QdapTydA2Of1YcEFK3ZUQKo12BDXJzvdoGNXL9tbFQCY6qnQ/s1600/gov.png", link: "https://eboardresults.com/v2/home?lang=bn" },
  { name: "কওমী মাদরাসা শিক্ষাবোর্ড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAJGMfSZz316xWNK89yzTyYHIGJhGH91xYzs5yl-9aEDfrGEuNeFdaxVo5rUxHzmrpantEBxBZx0DXbDkgymwHY6Yjd9LEaFqwWYK5EjfV8vmGQBod2xY_ocP9MobQxp7KWl6mzudytDErtiQugbupC62vIcGeQv7GM1JEkv2ziIopqC_m_r8Hz3dmXJE/s1600/logog.png", link: "https://wifaqresult.com/" },
  { name: "কারিগরী শিক্ষা বোর্ড", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsWKJbNW1tqGJwAfIjIs9IroBQqybgu0-UAASCTNCIQz7f-LZyqVs7V0c0kU8NoHfaAU-LpPPHfvlJ7BvB_eBdaj0CuYXU0uhlnHQoV4-scnixWwnXEUdCUv0W86Vv2fZzdrWtaHyBjlYUtTMyMPm4xAKeWNmYflffA2iR6PVV5F-WHvdNkbwETkk-ZNk/s1600/bteb.png", link: "http://180.211.162.102:8444/result_arch/index.php" },
  { name: "মেডিকেল রেজাল্ট - MBBS", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcxGGo9qNiX0qYv8ZsJ15ujaxsOZZpLMQwYvTU2nyG5u-HN5wMv8vr0iqVjzPydnppJSdNRZt9OOHj1Zn5xF1jMp4pHuRScWplEVTz0-mex1xuXl_MC1iCnKrLHu7FhKG-cyWXX1VhFeYEK_IZ7ufr6KNfdXzxw3XTmpyQwL5HIgEnxHzbbozWhhsjF4U/s1600/mbbs.png", link: "https://result.dghs.gov.bd/mbbs/" },
  { name: "মেডিকেল রেজাল্ট - BDS", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1k57tM21m-MayivBlMHgrAgXol72eVTZxdoAftCXj2l8n8nWaD5i7rbRBHOGQzEm5MQk9zJpjYbbRA5tXSvEFxIel5MBpBgQaQDnaFahFmZphtpRBU_VvDkN8sDKTQUjRf51ptk6RvWq7Ef-PgA2SdVojOHPXelsgiWkdrjE5Ib8GOIpg1LzX2e3VgK4/s1600/bds.png", link: "https://result.dghs.gov.bd/bds/" },
  { name: "বিদ্যালয়ের অভ্যন্তরীণ রেজাল্ট", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVLfPOctwoXCwYtrjXBdqr7b4e7PNgCdMSY-a30srU935HpcZMmFFfkUnwEb_CzI-36GmuEI3trwWE1dkyc3bH-tRYceoZCqK3iKq6bIm4XdvsdWqKOJDJ3tTHyTDCfMZf-1kk_AFmDIgiPcY_kMkhDm1fYcEu0wbs3TurF38W2qAqxvQSR561ZI8tXRo/s1600/css.png", link: "http://sib.gov.bd/" },
  
  // নতুন ৩টি সাইট নিচে যুক্ত হলো
  { name: "জাতীয় বিশ্ববিদ্যালয় (NU)", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbnFkrCb_igD2AAVIb1ry-WU40ahVN-G9mFv_W_6GNCI4M1XMnbsbbcXhHslPV1Dt3RTXH-DUiEIXMa2AP73zL2nuJHnYBgtSndxto5VfLknT1N1gkXmRx4Rjjzdbs9t3GGZqGeHaxKFs8-hfNJXr_XYtoYpH3cS6keJMt6Ipc0x_US3A4UVEIyL3le98/s320/NU.png", link: "http://results.nu.ac.bd/" },
  { name: "উন্মুক্ত বিশ্ববিদ্যালয় (BOU)", logo: "https://exam.bou.ac.bd/images/boulogo-new.png", link: "https://exam.bou.ac.bd/" },
  { name: "শিক্ষক নিবন্ধন (NTRCA)", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg131ftwBH64wYaULxvxrjArhqa8AF_Bo-oE4WbfLC5O3aVvM8Cpfn5hl9U2ZaDjzImYjoaNWsrZW8i1BCweQhaZnTCxBAzd2o6-tLtyhAbYX7ERp68UKaET0y9hOmeHtGNGrIP2Aan4ia1TA4J619XK7bBnzyr_W73H6xdYbLkPg5w3bYE5LwRjae48IU/s320/ntrca.png", link: "http://ntrca.teletalk.com.bd/result/" }
];

// রেজাল্ট গ্রেডিয়েন্ট প্যালেট
const resGradients = [
  "linear-gradient(135deg, #FF8A80, #FF5252)",
  "linear-gradient(135deg, #A5D6A7, #66BB6A)",
  "linear-gradient(135deg, #90CAF9, #42A5F5)",
  "linear-gradient(135deg, #FFE082, #FFB347)",
  "linear-gradient(135deg, #F48FB1, #F06292)",
  "linear-gradient(135deg, #80CBC4, #26A69A)"
];

function openResultModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-result-check');
    document.getElementById('resultCheckModal').style.display = 'flex';
    renderResultGrid();
}

function closeResultModal() {
    document.getElementById('resultCheckModal').style.display = 'none';
}

function renderResultGrid() {
    const container = document.getElementById("result-master-grid");
    if(!container) return;
    container.innerHTML = "";

    bdResultList.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "res-card-item";
        card.style.background = resGradients[index % resGradients.length];
        
        card.innerHTML = `
            <img src="${item.logo}" alt="${item.name}">
            <span>${item.name}</span>
            <div class="btn-res-visit">ভিজিট করুন</div>
        `;
        
        card.onclick = () => window.open(item.link, '_blank');
        container.appendChild(card);
    });
}
;

let currentHeicFiles = [];
let convertedHeicResults = [];

function openHeicModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-heic-converter');
    document.getElementById('heicConverterModal').style.display = 'flex';
}

function closeHeicModal() {
    document.getElementById('heicConverterModal').style.display = 'none';
}

// ফাইল সিলেক্ট করার লজিক
function handleHeicSelection(event) {
    const files = event.target.files;
    if (!files.length) return;
    
    currentHeicFiles = Array.from(files);
    const status = document.getElementById('heicStatus');
    status.style.display = "block";
    status.innerText = `${currentHeicFiles.length} file(s) selected. Click Convert to start.`;
    
    document.getElementById('convertHeicBtn').style.display = "block";
    document.getElementById('heicActionArea').style.display = "none";
    document.getElementById('previewHEIC').innerHTML = "";
    convertedHeicResults = [];
}

// কনভার্ট করার লজিক
async function processHeicConversion() {
    // ইমেজ আপলোড ছাড়া বাটন কাজ করবে না
    if (currentHeicFiles.length === 0) return;

    const btn = document.getElementById('convertHeicBtn');
    const actionArea = document.getElementById('heicActionArea');
    const status = document.getElementById('heicStatus');
    const format = document.getElementById('heicFormatSelect').value;
    const quality = parseFloat(document.getElementById('heicQualityRange').value);
    const previewArea = document.getElementById('previewHEIC');

    btn.style.display = "none";
    status.style.display = "block";
    previewArea.innerHTML = "";
    convertedHeicResults = [];

    for (let i = 0; i < currentHeicFiles.length; i++) {
        const file = currentHeicFiles[i];
        status.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing (${i + 1}/${currentHeicFiles.length}): ${file.name}`;

        try {
            // HEIC to Blob
            let resultBlob = await heic2any({
                blob: file,
                toType: format === 'image/webp' ? 'image/jpeg' : format,
                quality: quality
            });

            if (Array.isArray(resultBlob)) resultBlob = resultBlob[0];

            // WebP Support via Canvas
            if (format === 'image/webp') {
                resultBlob = await convertHeicToWebP(resultBlob, quality);
            }

            const url = URL.createObjectURL(resultBlob);
            const ext = format.split('/')[1].replace('jpeg', 'jpg');
            const newName = file.name.replace(/\.[^/.]+$/, "") + "." + ext;

            convertedHeicResults.push({ url, name: newName });

            // Preview UI
            const card = document.createElement('div');
            card.style = "background:#fff; border:1px solid #ddd; border-radius:12px; padding:8px; text-align:center; width:120px; box-shadow:0 2px 5px rgba(0,0,0,0.05);";
            card.innerHTML = `
                <img src="${url}" style="width:100px; height:100px; object-fit:cover; border-radius:8px; margin-bottom:5px;">
                <div style="font-size:9px; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#4b5563; margin-bottom:5px;">${newName}</div>
                <a href="${url}" download="${newName}" style="display:inline-block; padding:4px 8px; background:#0ea5e9; color:#fff; border-radius:4px; font-size:9px; font-weight:800; text-decoration:none;" class="single-dl">DOWNLOAD</a>
            `;
            previewArea.appendChild(card);

        } catch (err) {
            console.error("Error converting " + file.name, err);
        }
    }

    status.innerText = "Conversion Finished!";
    actionArea.style.display = "grid";
}

// WebP Helper
function convertHeicToWebP(blob, quality) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(b => resolve(b), 'image/webp', quality);
        };
        img.src = URL.createObjectURL(blob);
    });
}

// ডাউনলোড লজিক
function downloadAllConvertedHeic() {
    if (convertedHeicResults.length === 0) return;
    
    convertedHeicResults.forEach((file, index) => {
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = file.url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, index * 500); // গ্যাপ রাখা হয়েছে যাতে ব্রাউজার ব্লক না করে
    });
}

function resetHeicTool() {
    currentHeicFiles = [];
    convertedHeicResults = [];
    document.getElementById('heicInput').value = "";
    document.getElementById('previewHEIC').innerHTML = "";
    document.getElementById('heicStatus').style.display = "none";
    document.getElementById('heicActionArea').style.display = "none";
    document.getElementById('convertHeicBtn').style.display = "block";
}
;

let fqQuestions = [];
let fqLogoSrc = null;
let fqLang = "bn";

function openFqModal() {
    const modal = document.getElementById('fqMakerModal');
    if (modal) {
        modal.style.display = 'flex';
        if(typeof setActiveMode === "function") setActiveMode('mode-fq-maker');
        setFqLang(fqLang);
    }
}

function closeFqModal() {
    document.getElementById('fqMakerModal').style.display = 'none';
}

function toFqNum(n) {
    if (fqLang !== 'bn') return n;
    const digits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return n.toString().replace(/\d/g, d => digits[d]);
}

function setFqLang(lang) {
    fqLang = lang;
    document.getElementById('fq-btn-bn').classList.toggle('active', lang === 'bn');
    document.getElementById('fq-btn-en').classList.toggle('active', lang === 'en');
    
    const ui = {
        bn: { title: "পরীক্ষার প্রশ্নপত্র মেকার", step1: "১. প্রতিষ্ঠানের তথ্য", step2: "২. প্রশ্নপত্র তৈরি করুন", btnP: "প্রিন্ট করুন", btnR: "সব মুছুন", inst: "প্রতিষ্ঠানের নাম", exam: "পরীক্ষার নাম", cls: "শ্রেণি", sub: "বিষয়", time: "সময়", marks: "পূর্ণমান", addDesc: "+ বড় প্রশ্ন", addMcq: "+ MCQ প্রশ্ন" },
        en: { title: "Exam Question Paper Maker", step1: "1. Institution Info", step2: "2. Create Questions", btnP: "Direct Print", btnR: "Clear All", inst: "Institution Name", exam: "Exam Title", cls: "Class", sub: "Subject", time: "Time", marks: "Marks", addDesc: "+ Descriptive Q.", addMcq: "+ MCQ Question" }
    };
    
    document.getElementById('fq-main-title').innerText = ui[lang].title;
    document.getElementById('lbl-step1').innerText = ui[lang].step1;
    document.getElementById('lbl-step2').innerText = ui[lang].step2;
    document.getElementById('fq-name').placeholder = ui[lang].inst;
    document.getElementById('fq-exam-title').placeholder = ui[lang].exam;
    document.getElementById('fq-class').placeholder = ui[lang].cls;
    document.getElementById('fq-sub').placeholder = ui[lang].sub;
    document.getElementById('fq-time').placeholder = ui[lang].time;
    document.getElementById('fq-marks').placeholder = ui[lang].marks;
    document.getElementById('btn-add-desc').innerText = ui[lang].addDesc;
    document.getElementById('btn-add-mcq').innerText = ui[lang].addMcq;
    document.getElementById('btn-fq-print').innerHTML = `<i class='fa-solid fa-print'></i> ${ui[lang].btnP}`;
    document.getElementById('btn-fq-reset').innerHTML = `<i class='fa-solid fa-trash-can'></i> ${ui[lang].btnR}`;
    
    renderFqInputs();
    drawFq();
}

function loadFqLogo(event) {
    const reader = new FileReader();
    reader.onload = (e) => {
        fqLogoSrc = e.target.result;
        document.getElementById('fq-logo-pv').src = fqLogoSrc;
        document.getElementById('fq-logo-pv').style.display = 'block';
        document.getElementById('fq-plus-ico').style.display = 'none';
        drawFq();
    };
    reader.readAsDataURL(event.target.files[0]);
}

function addFqItem(type) {
    fqQuestions.push({ id: Date.now(), type, qText: '', options: ['', '', '', ''], marks: '' });
    renderFqInputs();
    drawFq();
}

function removeFqItem(id) {
    fqQuestions = fqQuestions.filter(q => q.id !== id);
    renderFqInputs();
    drawFq();
}

function updateFqData(id, field, val, optIdx = null) {
    const q = fqQuestions.find(i => i.id === id);
    if (optIdx !== null) q.options[optIdx] = val;
    else q[field] = val;
    drawFq();
}

function renderFqInputs() {
    const container = document.getElementById('fq-questions-container');
    if (!container) return;
    container.innerHTML = "";

    fqQuestions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = "fq-q-card";

        const qLabel = (fqLang === 'bn') ? 'প্রশ্ন' : 'Question';
        const qPlace = (fqLang === 'bn') ? 'প্রশ্ন লিখুন...' : 'Type question...';
        const optPlace = (fqLang === 'bn') ? 'অপশন' : 'Option';
        const marksPlace = (fqLang === 'bn') ? 'মার্কস' : 'Marks';

        let html = `<button class="fq-rem-btn" onclick="removeFqItem(${q.id})">&times;</button>
            <small style="font-weight:800; color:#4f46e5;">${qLabel} ${toFqNum(index+1)} (${q.type === 'mcq' ? 'MCQ' : (fqLang === 'bn' ? 'বড়' : 'Descriptive')})</small>
            <textarea placeholder="${qPlace}" oninput="updateFqData(${q.id}, 'qText', this.value)">${q.qText}</textarea>`;
        
        if (q.type === 'mcq') {
            html += `<div class="fq-grid-2">
                ${q.options.map((opt, i) => `
                    <input placeholder="${optPlace} ${toFqNum(i+1)}" value="${opt}" oninput="updateFqData(${q.id}, 'options', this.value, ${i})"/>
                `).join('')}
            </div>`;
        }

        html += `<input placeholder="${marksPlace}" value="${q.marks}" oninput="updateFqData(${q.id}, 'marks', this.value)" style="width:85px; margin-top:5px; font-weight:bold;"/>`;
        
        div.innerHTML = html;
        container.appendChild(div);
    });
}

function drawFq() {
    const inst = document.getElementById('fq-name').value || (fqLang === 'bn' ? "প্রতিষ্ঠানের নাম" : "Institution Name");
    const exam = document.getElementById('fq-exam-title').value || (fqLang === 'bn' ? "পরীক্ষার নাম" : "Exam Title");
    const labels = fqLang === 'bn' ? ['শ্রেণি', 'বিষয়', 'সময়', 'পূর্ণমান'] : ['Class', 'Subject', 'Time', 'Marks'];
    const optLabels = fqLang === 'bn' ? ['(ক)', '(খ)', '(গ)', '(ঘ)'] : ['(a)', '(b)', '(c)', '(d)'];

    let html = `<div style="text-align:center; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 10px;">
                    ${fqLogoSrc ? `<img src="${fqLogoSrc}" style="height:45px; margin-bottom:5px;">` : ''}
                    <h1 style="margin:0; font-size:20px;">${inst}</h1>
                    <h2 style="margin:2px 0; font-size:15px;">${exam}</h2>
                </div>
                <div style="display:flex; justify-content:space-between; font-weight:bold; border-bottom: 1px solid #000; padding-bottom:5px; margin-bottom:15px; font-size:13px;">
                    <span>${labels[0]}: ${document.getElementById('fq-class').value}</span>
                    <span>${labels[1]}: ${document.getElementById('fq-sub').value}</span>
                    <span>${labels[2]}: ${document.getElementById('fq-time').value}</span>
                    <span>${labels[3]}: ${toFqNum(document.getElementById('fq-marks').value)}</span>
                </div>`;

    fqQuestions.forEach((q, index) => {
        html += `<div style="margin-bottom:10px; line-height:1.4;">
                    <div style="display:flex; justify-content:space-between;">
                        <span><b>${toFqNum(index+1)}.</b> ${q.qText}</span>
                        <b>${toFqNum(q.marks)}</b>
                    </div>
                    ${q.type === 'mcq' ? `<div style="display:grid; grid-template-columns: 1fr 1fr; margin-left:20px; font-size:12px;">
                        ${q.options.map((opt, i) => `<span>${optLabels[i]} ${opt}</span>`).join('')}
                    </div>` : ''}
                </div>`;
    });
    document.getElementById('fq-render-area').innerHTML = html;
}

function printFqPaper() {
    const printContent = document.getElementById('fq-render-area').innerHTML;
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write('<html><head><title>Question Paper</title>');
    printWindow.document.write('<link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">');
    printWindow.document.write('<style>body{margin:0;padding:0;background:#fff;}#print-wrapper{width:210mm;height:297mm;padding:20mm;box-sizing:border-box;font-family:"SolaimanLipi",Arial,sans-serif!important;font-size:14px;color:#000;}#print-wrapper * {font-family:"SolaimanLipi",Arial,sans-serif!important;} @page{size:A4;margin:0;}h1,h2{margin:5px 0;text-align:center;}</style></head><body>');
    printWindow.document.write('<div id="print-wrapper">' + printContent + '</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 700);
}

function resetFqTool() {
    document.querySelectorAll('#fqMakerModal input').forEach(i => i.value = "");
    document.querySelectorAll('#fqMakerModal textarea').forEach(i => i.value = "");
    fqQuestions = []; fqLogoSrc = null;
    document.getElementById('fq-logo-pv').style.display = 'none';
    document.getElementById('fq-plus-ico').style.display = 'block';
    renderFqInputs(); drawFq();
}
;

function openAgreementModal() {
    setActiveMode('mode-agreement');
    document.getElementById('agreementModal').style.display = 'flex';
    setAgLang('bn');
    setTimeout(adjustAgPreviewScale, 300);
}

let agLang = 'bn';

const agTemplates = {
  bn: {
    rent: { 
      title: 'আবাসিক বাসা ভাড়ার চুক্তিপত্র', 
      text: 'অদ্য ইংরেজি {{val2}} তারিখে এই বাসা ভাড়ার চুক্তিপত্র সম্পাদিত হইল। প্রথম পক্ষ (মালিক): {{name}}, পিতা: ...................., ঠিকানা: {{address}}। দ্বিতীয় পক্ষ (ভাড়াটিয়া): {{p2}}, পিতা: ...................., স্থায়ী ঠিকানা: ....................। শর্তাবলী: ১) অত্র ফ্ল্যাটের মাসিক ভাড়া {{val1}} টাকা মাত্র যা প্রতি মাসের ৫ তারিখের মধ্যে পরিশোধযোগ্য। ২) অগ্রিম জামানত বাবদ ............ টাকা প্রথম পক্ষ বুঝিয়া পাইলেন। ৩) চুক্তির মেয়াদ অদ্য হইতে পরবর্তী ২ (দুই) বছরের জন্য বলবৎ থাকিবে। ৪) বিদ্যুৎ, গ্যাস ও পানির বিল দ্বিতীয় পক্ষ বহন করিবেন। ৫) ফ্ল্যাটের কোনো আসবাবপত্র বা দেয়ালের ক্ষতি হইলে দ্বিতীয় পক্ষ নিজ খরচে মেরামত করিয়া দিবেন। ৬) কোনো পক্ষ চুক্তি বাতিল করিতে চাহিলে ৩ মাস পূর্বে লিখিত নোটিশ প্রদান করিতে হইবে। ৭) অসামাজিক কোনো কাজে লিপ্ত হইলে মালিক বিনা নোটিশে উচ্ছেদ করার অধিকার রাখেন। উভয় পক্ষ সজ্ঞানে অত্র চুক্তিতে স্বাক্ষর করিলেন।' 
    },
    land: { 
      title: 'জমি বিক্রয় বায়না চুক্তিপত্র', 
      text: 'আমি প্রথম পক্ষ (বিক্রেতা): {{name}}, পিতা: {{witness}}, সাং: .................। আপনি দ্বিতীয় পক্ষ (ক্রেতা): {{p2}}। নিম্ন তফশিল বর্ণিত জমি বিক্রয়ের প্রস্তাব করিলে আপনি তাহা ক্রয় করিতে সম্মত হইয়াছেন। জমির মোট মূল্য নির্ধারণ করা হইয়াছে {{val1}} টাকা। অদ্য বায়না বাবদ নগদ ........... টাকা প্রদান করা হইল। শর্তাবলী: ১) অবশিষ্ট টাকা আগামী {{val2}} মাসের মধ্যে পরিশোধ করিয়া দলিল রেজিষ্ট্রি করিয়া লইতে হইবে। ২) বিক্রেতা এই মর্মে অঙ্গীকার করিতেছেন যে, জমিটি সকল প্রকার দায়-মুক্ত ও নিষ্কণ্টক। ৩) নির্ধারিত সময়ের মধ্যে ক্রেতা সম্পূর্ণ মূল্য পরিশোধে ব্যর্থ হইলে বায়ানার টাকা বাজেয়াপ্ত হইবে। ৪) যদি বিক্রেতা দলিল দিতে অস্বীকার করেন তবে ক্রেতা আদালতের মাধ্যমে দলিল করিয়া লইতে পারিবেন। ৫) অদ্য হইতে জমির দখল ক্রেতা বুঝিয়া পাইলেন। সাক্ষীদের উপস্থিতিতে অত্র চুক্তি স্বাক্ষরিত হইল।' 
    },
    shop: { 
      title: 'দোকান ঘর ভাড়ার চুক্তিপত্র', 
      text: 'দোকান মালিক (প্রথম পক্ষ): {{name}}, ঠিকানা: {{address}}। দোকান ভাড়াটিয়া (দ্বিতীয় পক্ষ): {{p2}}। অত্র চুক্তিপত্রের শর্ত নিম্নরূপ: ১) দোকানের অগ্রিম জামানত বাবদ {{val1}} টাকা দ্বিতীয় পক্ষ প্রদান করিলেন। ২) মাসিক ভাড়া নির্ধারণ করা হইল ........... টাকা। ৩) চুক্তির মেয়াদ {{val2}} বছর পর্যন্ত বলবৎ থাকিবে। ৪) দোকান ঘরের ট্রেড লাইসেন্স ও আনুষঙ্গিক কর দ্বিতীয় পক্ষ বহন করিবেন। ৫) দোকান ঘরের অভ্যন্তরীণ সাজসজ্জা ভাড়াটিয়া নিজ খরচে করিবেন, তবে মূল কাঠামোর পরিবর্তন করা যাইবে না। ৬) মেয়াদ শেষে দোকান ছাড়িতে হইলে ৩ মাস পূর্বে নোটিশ দিতে হইবে এবং মালিককে পূর্বের অবস্থায় দোকান বুঝাইয়া দিতে হইবে। ৭) প্রতি মাসের ভাড়া পরবর্তী মাসের ৭ তারিখের মধ্যে পরিশোধ করিতে হইবে। ৮) কোনো পক্ষ শর্ত ভঙ্গ করিলে আইনত ব্যবস্থা গ্রহণ করা যাইবে।' 
    },
    money: { 
      title: 'টাকা ধারের অঙ্গীকারনামা', 
      text: 'দাতা: {{p2}}, গ্রহিতা: {{name}}, পিতা: {{witness}}। আমি গ্রহিতা বিশেষ ব্যবসায়িক প্রয়োজনে দ্বিতীয় পক্ষের নিকট হইতে নগদ {{val1}} টাকা ঋণ হিসেবে গ্রহণ করিলাম। শর্তাবলী: ১) উক্ত টাকা সম্পূর্ণ সুদমুক্ত ধার হিসেবে গণ্য হইবে। ২) আমি অঙ্গীকার করিতেছি যে, আগামী {{val2}} তারিখের মধ্যে উক্ত টাকা এককালীন পরিশোধ করিব। ৩) যদি আমি নির্ধারিত সময়ে টাকা পরিশোধ করিতে ব্যর্থ হই, তবে পাওনাদার আমার বিরুদ্ধে প্রচলিত আইনে মামলা দায়ের করিয়া টাকা আদায় করিতে পারিবেন। ৪) টাকার বিনিময়ে আমি কোনো স্থাবর সম্পত্তি বন্ধক রাখিলে তাহা পাওনাদারের অধীনে থাকিবে। ৫) অত্র চুক্তিতে সাক্ষ্য প্রদানকারী ব্যক্তিগণ এই লেনদেনের সাক্ষী হিসেবে গণ্য হইবেন। আমি সুস্থ মস্তিষ্কে কারো প্ররোচনা ছাড়াই এই অঙ্গীকারনামায় স্বাক্ষর করিলাম।' 
    },
    car: { 
      title: 'মোটরযান বিক্রয় ও হস্তান্তর চুক্তি', 
      text: 'বিক্রেতা: {{name}}, ক্রেতা: {{p2}}। গাড়ির বিবরণ: {{address}}, ইঞ্জিন নং: ..............., চেসিস নং: ...............। বিক্রয় মূল্য: {{val1}} টাকা। অদ্য ক্রেতা বিক্রেতাকে সমুদয় টাকা বুঝাইয়া দিলেন। শর্তাবলী: ১) অদ্য হইতে গাড়ির মালিকানা ও দখল ক্রেতার নিকট অর্পিত হইল। ২) গাড়ির পূর্ববর্তী সকল মামলা, ট্যাক্স টোকেন ও বকেয়া বিক্রেতা পরিশোধ করিলেন। ৩) অদ্যকার পর হইতে গাড়ির যে কোনো দুর্ঘটনা বা অপরাধমূলক কাজের দায়ভার ক্রেতা {{p2}} এর উপর বর্তাইবে। ৪) আগামী {{val2}} দিনের মধ্যে নামজারী বা মালিকানা পরিবর্তনের জন্য বিক্রেতা প্রয়োজনীয় সকল দলিলে স্বাক্ষর প্রদান করিবেন। ৫) ভবিষ্যতে বিক্রেতা এই গাড়ির উপর আর কোনো দাবি করিতে পারিবেন না। উভয় পক্ষ এই চুক্তিতে স্বেচ্ছায় স্বাক্ষর প্রদান করিলেন।' 
    },
    partnership: { 
      title: 'অংশীদারিত্ব ব্যবসায়িক চুক্তিপত্র', 
      text: 'অংশীদারগণ: ১) {{name}}, ২) {{p2}}। ব্যবসার নাম: ...................., ঠিকানা: {{address}}। শর্তাবলী: ১) ব্যবসায় মোট মূলধন {{val1}} টাকা, যাহা উভয় পক্ষ সমানভাবে অথবা আনুপাতিক হারে বিনিয়োগ করিলেন। ২) ব্যবসার লাভ-ক্ষতি বিনিয়োগের অনুপাত অনুযায়ী বন্টন করা হইবে। ৩) চুক্তির মেয়াদ আগামী {{val2}} বছর পর্যন্ত বলবৎ থাকিবে। ৪) ব্যবসার সকল হিসাব-নিকাশ একটি নির্দিষ্ট ব্যাংক অ্যাকাউন্টের মাধ্যমে পরিচালিত হইবে এবং উভয় পক্ষের স্বাক্ষর আবশ্যক। ৫) কোনো অংশীদার ব্যবসা ত্যাগ করিতে চাহিলে ৬ মাস পূর্বে অবহিত করিতে হইবে। ৬) নতুন অংশীদার গ্রহণ করিতে হইলে সকল অংশীদারের লিখিত সম্মতি প্রয়োজন। ৭) ব্যবসার সকল নথিপত্র প্রধান কার্যালয়ে সংরক্ষিত থাকিবে। ৮) মতবিরোধ দেখা দিলে আপোষ-মীমাংসা বা সালিশি আইনের মাধ্যমে সমাধান করা হইবে।' 
    },
    construction: { 
      title: 'বাড়ি নির্মাণ কাজের চুক্তিপত্র', 
      text: 'মালিক: {{name}}, ঠিকাদার: {{p2}}। কাজের স্থান: {{address}}। শর্তাবলী: ১) ভবনটি অনুমোদিত নকশা অনুযায়ী নির্মাণ করিতে হইবে। ২) মোট বাজেট ধরা হইয়াছে {{val1}} টাকা। ৩) কাজ সম্পন্ন করার শেষ সময় {{val2}} তারিখ নির্ধারণ করা হইল। ৪) ব্যবহৃত রড, সিমেন্ট ও অন্যান্য উপকরণের গুণগত মান মালিকের পর্যবেক্ষণ অনুযায়ী হইতে হইবে। ৫) যদি নির্ধারিত সময়ে কাজ শেষ না হয়, তবে ঠিকাদারকে জরিমানা প্রদান করিতে হইবে। ৬) শ্রমিকের নিরাপত্তার দায়িত্ব ঠিকাদারের থাকিবে। ৭) কাজের অগ্রগতির ভিত্তিতে কিস্তিতে টাকা পরিশোধ করা হইবে। ৮) কোনো ত্রুটিপূর্ণ কাজ ধরা পড়িলে ঠিকাদারকে নিজ খরচে তাহা পুনঃনির্মাণ করিয়া দিতে হইবে। মালিক ও ঠিকাদার সজ্ঞানে এই চুক্তিতে আবদ্ধ হইলেন।' 
    },
    flat: { 
      title: 'ফ্ল্যাট বিক্রয় চুক্তিপত্র', 
      text: 'বিক্রেতা: {{name}}, ক্রেতা: {{p2}}। ফ্ল্যাটের ঠিকানা: {{address}}, আয়তন: ............ বর্গফুট। মোট মূল্য: {{val1}} টাকা। অদ্য বুকিং মানি বাবদ নগদ ........... টাকা পরিশোধ করা হইল। শর্তাবলী: ১) বাকি টাকা আগামী {{val2}} তারিখের মধ্যে অথবা কিস্তির মাধ্যমে পরিশোধযোগ্য। ২) ফ্ল্যাট হস্তান্তরের সময় রেজিষ্ট্রেশন ও মিউটেশন সম্পন্ন করিয়া দিতে হইবে। ৩) ফ্ল্যাট নির্মাণে ব্যবহৃত ফিক্সচারসমূহ চুক্তিতে বর্ণিত মান অনুযায়ী হইতে হইবে। ৪) যদি বিক্রেতা ফ্ল্যাট দিতে ব্যর্থ হন, তবে মূল টাকার দ্বিগুণ ফেরত দিতে বাধ্য থাকিবেন। ৫) কমন স্পেস ব্যবহারের নিয়মাবলী সরকারি আইন মোতাবেক হইবে। ৬) গ্যাস, বিদ্যুৎ ও পানি সংযোগের খরচ ক্রেতা বহন করিবেন। উভয় পক্ষ শর্তাবলী মানিয়া চলিতে বাধ্য থাকিবেন।' 
    },
    loan: { 
      title: 'ঋণ পরিশোধের আইনি অঙ্গীকারনামা', 
      text: 'আমি {{name}}, পিতা: {{witness}}, অত্র অঙ্গীকারনামা দ্বারা ঘোষণা করিতেছি যে, আমি দ্বিতীয় পক্ষ {{p2}} এর নিকট হইতে ব্যক্তিগত প্রয়োজনে {{val1}} টাকা ঋণ গ্রহণ করিয়াছি। আমি অঙ্গীকার করিতেছি যে, উক্ত টাকা আগামী {{val2}} তারিখের মধ্যে অথবা নিম্নোক্ত কিস্তি অনুযায়ী পরিশোধ করিব। শর্তাবলী: ১) কোনো কারণে আমি মৃত্যুবরণ করিলে আমার উত্তরসূরিগণ এই ঋণ পরিশোধে বাধ্য থাকিবে। ২) ঋণের টাকা পরিশোধে বিলম্ব হইলে আইনত দণ্ডনীয় হইব। ৩) পাওনাদার চাইলে আমার স্থাবর সম্পত্তি হইতে পাওনা টাকা আদায়ের অধিকার রাখিবেন। ৪) কোনো ওজর-আপত্তি ছাড়াই টাকা ফেরত দিতে আমি অঙ্গীকারবদ্ধ। ৫) পাওনাদার কর্তৃক প্রদত্ত রসিদ পরিশোধের প্রমাণ হিসেবে গণ্য হইবে। অত্র দলিলটি একটি সাক্ষ্য হিসেবে সংরক্ষিত থাকিবে।' 
    },
    servant: { 
      title: 'গৃহকর্মী বা ব্যক্তিগত কর্মচারী নিয়োগ চুক্তি', 
      text: 'নিয়োগকারী: {{name}}, কর্মচারী: {{p2}}। কর্মস্থল: {{address}}। মাসিক বেতন: {{val1}} টাকা। শর্তাবলী: ১) কর্মচারীকে প্রতিদিন সকাল ........... হইতে রাত ........... পর্যন্ত ডিউটি পালন করিতে হইবে। ২) নিয়োগের মেয়াদ অদ্য হইতে {{val2}} মাস/বছর বলবৎ থাকিবে। ৩) কর্মচারীর সততা ও নিষ্ঠার সাথে কাজ করিতে হইবে, কোনো প্রকার চুরির প্রমাণ পাওয়া গেলে তাকে তাৎক্ষণিক বরখাস্ত ও আইনগত ব্যবস্থা নেওয়া হইবে। ৪) মাসে ২ দিন ছুটি ভোগের অধিকার থাকিবে। ৫) নিয়োগকারী কর্মচারীর নিরাপত্তা ও খাদ্যের বিষয় বিবেচনা করিবেন। ৬) চাকরি ছাড়িতে হইলে ১ মাস পূর্বে নোটিশ দিতে হইবে। ৭) বেতন মাসের ১০ তারিখের মধ্যে পরিশোধ করা হইবে। উভয় পক্ষ শর্তাবলীতে একমত হইয়া স্বাক্ষর করিলেন।' 
    },
    lease: { 
      title: 'দীর্ঘমেয়াদী জমি লিজ বা ইজারা চুক্তি', 
      text: 'লিজ দাতা: {{name}}, লিজ গ্রহিতা: {{p2}}। জমির অবস্থান ও বিবরণ: {{address}}। লিজের মেয়াদ: {{val2}} বছর। বাৎসরিক লিজ ফি: {{val1}} টাকা। শর্তাবলী: ১) লিজ গ্রহিতা উক্ত জমিতে কেবলমাত্র চুক্তিতে উল্লিখিত ফসল বা কাঠামো নির্মাণ করিতে পারিবেন। ২) প্রতি বছরের ফি অগ্রিম পরিশোধযোগ্য। ৩) মেয়াদ শেষে লিজ গ্রহিতা জমিটি পূর্বের অবস্থায় দাতার নিকট বুঝাইয়া দিবেন। ৪) দাতা লিজের মেয়াদের মধ্যে জমিতে কোনো বিঘ্ন ঘটাইতে পারিবেন না। ৫) সরকারি কোনো খাজনা বা কর দাতা পরিশোধ করিবেন। ৬) লিজ গ্রহিতা জমিটি তৃতীয় পক্ষের নিকট হস্তান্তর বা উপ-লিজ দিতে পারিবেন না। ৭) শর্ত ভঙ্গে লিজ বাতিল বলিয়া গণ্য হইবে। সাক্ষীদের উপস্থিতিতে অদ্য চুক্তিপত্রটি সম্পাদিত হইল।' 
    },
    marriage_ag: { 
      title: 'দেনমোহর ও দাম্পত্য অধিকার সংক্রান্ত অঙ্গীকারনামা', 
      text: 'আমি {{name}}, পিতা: {{witness}}, অত্র অঙ্গীকারনামা প্রদান করিতেছি যে, আমার স্ত্রী {{p2}} এর পাওনা দেনমোহর বাবদ {{val1}} টাকা ধার্য করা হইয়াছে। অদ্য তারিখে আমি দেনমোহর বাবদ ........... টাকা নগদ পরিশোধ করিলাম। শর্তাবলী: ১) বাকি টাকা ভবিষ্যতে আমি স্ত্রীর চাহিবা মাত্র অথবা কিস্তিতে পরিশোধে বাধ্য থাকিব। ২) আমি আমার স্ত্রীর ভরণ-পোষণ ও সামাজিক নিরাপত্তা বজায় রাখিব। ৩) দাম্পত্য জীবনে কোনো প্রকার নির্যাতন বা অমানবিক আচরণ করিব না। ৪) আমাদের সন্তানদের উজ্জ্বল ভবিষ্যতের জন্য আমি সচেষ্ট থাকিব। ৫) অদ্য {{val2}} তারিখে আমরা এই অঙ্গীকারে আবদ্ধ হইলাম। আমাদের দাম্পত্য জীবন সুখের ও দীর্ঘস্থায়ী হউক। এই অঙ্গীকারনামা আমাদের মধ্যকার সকল ভুল বোঝাবুঝি অবসানের দলিল হিসেবে গণ্য হইবে।' 
    },
    transport: { 
      title: 'পরিবহন বা যানবহন ভাড়া চুক্তিপত্র', 
      text: 'যানবাহন মালিক: {{name}}, ভাড়াটিয়া: {{p2}}। যানের বিবরণ: {{address}}। শর্তাবলী: ১) দৈনিক/মাসিক ভাড়া {{val1}} টাকা নির্ধারণ করা হইল। ২) জ্বালানি খরচ ও পার্কিং ফি ভাড়াটিয়া বহন করিবেন। ৩) চুক্তির মেয়াদ {{val2}} পর্যন্ত বলবৎ থাকিবে। ৪) কোনো যান্ত্রিক ত্রুটি দেখা দিলে মালিক মেরামত করিবেন, তবে দুর্ঘটনাজনিত ক্ষতি ভাড়াটিয়া বহন করিবেন। ৫) চালকের লাইসেন্স ও প্রয়োজনীয় কাগজপত্র মালিক নিশ্চিত করিবেন। ৬) গাড়িটি কোনো প্রকার অবৈধ কাজে ব্যবহার করা যাইবে না। ৭) নির্দিষ্ট সময় শেষে গাড়িটি মালিককে বুঝাইয়া দিতে হইবে। ৮) কোনো দুর্ঘটনা ঘটিলে তাৎক্ষণিক মালিককে অবহিত করিতে হইবে। উভয় পক্ষ অত্র চুক্তিতে একমত পোষণ করিলেন।' 
    },
    event: { 
      title: 'ইভেন্ট ম্যানেজমেন্ট বা অনুষ্ঠান পরিচালনা চুক্তি', 
      text: 'আয়োজক/ক্লায়েন্ট: {{name}}, ইভেন্ট ডিরেক্টর: {{p2}}। অনুষ্ঠানের স্থান: {{address}}। ইভেন্ট সম্পন্ন হওয়ার তারিখ: {{val2}}। মোট চুক্তি মূল্য: {{val1}} টাকা। শর্তাবলী: ১) অগ্রিম ৫০% টাকা অদ্য প্রদান করা হইল। ২) ডেকোরেশন, খাবার ও সাউন্ড সিস্টেমের গুণগত মান নিশ্চিত করিতে হইবে। ৩) অনুষ্ঠানে কোনো বিঘ্ন ঘটিলে ইভেন্ট ডিরেক্টর দায়ী থাকিবেন। ৪) প্রাকৃতিক দুর্যোগ বা জরুরি কারণে অনুষ্ঠান পিছিয়ে গেলে উভয় পক্ষের সম্মতিতে নতুন তারিখ নির্ধারণ হইবে। ৫) অতিরিক্ত কোনো সেবা চাহিলে অতিরিক্ত মূল্য পরিশোধ করিতে হইবে। ৬) অনুষ্ঠান শেষে বাকি টাকা পরিশোধযোগ্য। ৭) নির্ধারিত সময়ের মধ্যে কাজ শুরু ও শেষ করিতে হইবে। উভয় পক্ষ শর্তাবলীতে স্বাক্ষর করিলেন।' 
    },
    mortgage: { 
      title: 'স্থাবর সম্পত্তি বন্ধকী চুক্তিপত্র', 
      text: 'বন্ধক দাতা: {{name}}, বন্ধক গ্রহিতা: {{p2}}। বন্ধকী সম্পদের বিবরণ: {{address}}। ঋণের পরিমাণ: {{val1}} টাকা। শর্তাবলী: ১) ঋণের টাকা পরিশোধ না হওয়া পর্যন্ত সম্পদের মূল দলিল বন্ধক গ্রহিতার নিকট থাকিবে। ২) ঋণের মেয়াদ আগামী {{val2}} তারিখ পর্যন্ত। ৩) যদি দাতা নির্ধারিত সময়ে টাকা পরিশোধে ব্যর্থ হন, তবে গ্রহিতা উক্ত সম্পত্তি বিক্রয় করিয়া পাওনা টাকা আদায়ের অধিকার রাখিবেন। ৪) সম্পদের ভোগ-দখল চুক্তির শর্ত মোতাবেক দাতার নিকট থাকিবে। ৫) বন্ধকী পিরিয়ডে সম্পদের কোনো ক্ষতি সাধন করা যাইবে না। ৬) সরকারি কর ও খাজনা দাতা পরিশোধ করিবেন। ৭) ঋণ পরিশোধের সাথে সাথে দলিল ফেরত প্রদান করা হইবে। উভয় পক্ষ সজ্ঞানে অত্র দলিলে স্বাক্ষর করিলেন।' 
    },
    employment: {
      title: 'চাকরির নিয়োগপত্র ও অঙ্গীকারনামা',
      text: 'নিয়োগকারী প্রতিষ্ঠান: {{name}}, ঠিকানা: {{address}}। কর্মচারী: {{p2}}। পদবী: ...............। শর্তাবলী: ১) মাসিক বেতন {{val1}} টাকা এবং অন্যান্য ভাতা প্রযোজ্য ক্ষেত্রে প্রদান করা হইবে। ২) ডিউটির সময় সকাল ৯টা হইতে সন্ধ্যা ৬টা পর্যন্ত। ৩) পরীক্ষার কাল (Probation Period) {{val2}} মাস। ৪) কর্মচারী প্রতিষ্ঠানের সকল গোপনীয়তা রক্ষা করিবেন। ৫) প্রতিষ্ঠানের স্বার্থের পরিপন্থী কোনো কাজে লিপ্ত হইলে তাৎক্ষণিক বহিষ্কার করা হইবে। ৬) পদত্যাগ করিতে চাইলে ১ মাস পূর্বে লিখিত নোটিশ প্রদান করিতে হইবে। ৭) সকল প্রকার ছুটির জন্য কর্তৃপক্ষের পূর্বানুমতি আবশ্যক। ৮) প্রতিষ্ঠানের শৃঙ্খলা বজায় রাখা কর্মচারীর মৌলিক দায়িত্ব। নিয়োগকারী ও কর্মচারী উভয় পক্ষ এই শর্তাবলীতে একমত।'
    },
    security: {
      title: 'নিরাপত্তা গার্ড বা সিকিউরিটি সার্ভিস চুক্তি',
      text: 'ক্লায়েন্ট: {{name}}, সিকিউরিটি এজেন্সি: {{p2}}। সেবার স্থান: {{address}}। শর্তাবলী: ১) এজেন্সি প্রতিদিন ২৪ ঘণ্টা নিরাপত্তার জন্য গার্ড সরবরাহ করিবে। ২) প্রতি মাসে সার্ভিস চার্জ হিসেবে {{val1}} টাকা প্রদান করিতে হইবে। ৩) চুক্তির মেয়াদ {{val2}} মাস পর্যন্ত। ৪) ডিউটিরত অবস্থায় কোনো চুরি বা ক্ষয়ক্ষতি হইলে এজেন্সি তদন্ত সাপেক্ষে ক্ষতিপূরণ দিতে বাধ্য থাকিবে। ৫) গার্ডদের ইউনিফর্ম ও আনুষঙ্গিক সরঞ্জাম এজেন্সি প্রদান করিবে। ৬) কোনো গার্ডের আচরণ সন্তোষজনক না হইলে তাৎক্ষণিক পরিবর্তন করিয়া দিতে হইবে। ৭) বিল পরবর্তী মাসের ৫ তারিখের মধ্যে পরিশোধ করিতে হইবে। ৮) উভয় পক্ষ নোটিশের মাধ্যমে চুক্তি বাতিল করিতে পারিবে।'
    },
    supply: {
      title: 'পণ্য সরবরাহ বা সাপ্লাই চুক্তিপত্র',
      text: 'সরবরাহকারী: {{name}}, ক্রেতা: {{p2}}। পণ্যের বিবরণ: {{address}}। শর্তাবলী: ১) পণ্যের একক প্রতি মূল্য {{val1}} টাকা নির্ধারণ করা হইল। ২) পণ্য সরবরাহের শেষ তারিখ {{val2}}। ৩) মানসম্মত পণ্য সরবরাহ না করিলে ক্রেতা পণ্য ফেরত দিতে পারিবেন। ৪) ডেলিভারি খরচ সরবরাহকারী/ক্রেতা বহন করিবেন। ৫) পণ্যের বিল ডেলিভারির পর কিস্তিতে বা এককালীন পরিশোধযোগ্য। ৬) জরুরি প্রয়োজনে অর্ডারের পরিমাণ পরিবর্তন করা যাইতে পারে। ৭) কোনো পক্ষ চুক্তি লঙ্ঘন করিলে বাজারমূল্য অনুযায়ী জরিমানা দিতে হইবে। ৮) অত্র চুক্তিপত্রের সকল কপি উভয় পক্ষের নিকট সংরক্ষিত থাকিবে।'
    },
    internet: {
      title: 'আইএসপি বা ইন্টারনেট সংযোগ চুক্তিপত্র',
      text: 'সেবা প্রদানকারী: {{name}}, গ্রাহক: {{p2}}। গ্রাহকের ঠিকানা: {{address}}। ব্যান্ডউইথ: ........... Mbps। মাসিক বিল: {{val1}} টাকা। শর্তাবলী: ১) সংযোগ প্রদানের মেয়াদ অদ্য হইতে {{val2}} বছর। ২) গ্রাহক প্রতি মাসের ১০ তারিখের মধ্যে বিল পরিশোধ করিবেন। ৩) কোনো টেকনিক্যাল সমস্যা হইলে সেবা প্রদানকারী ২৪ ঘণ্টার মধ্যে সমাধান করিবেন। ৪) রাউটার ও আনুষঙ্গিক যন্ত্রপাতি গ্রাহক নিজ দায়িত্বে রক্ষণাবেক্ষণ করিবেন। ৫) অবৈধ কোনো কাজে ইন্টারনেট ব্যবহার করা যাইবে না। ৬) বিল বকেয়া থাকিলে সংযোগ বিচ্ছিন্ন করার অধিকার সেবা প্রদানকারীর রহিয়াছে। ৭) পুনরায় সংযোগের জন্য চার্জ প্রদান করিতে হইবে। উভয় পক্ষ শর্তসমূহ মানিয়া চলিতে সম্মত হইলেন।'
    },
    freelance: {
      title: 'সফটওয়্যার বা আইটি প্রজেক্ট চুক্তিপত্র',
      text: 'ডেভেলপার: {{name}}, ক্লায়েন্ট: {{p2}}। প্রজেক্টের নাম: {{address}}। বাজেট: {{val1}} টাকা। প্রজেক্ট ডেলিভারি সময়: {{val2}}। শর্তাবলী: ১) প্রজেক্ট শুরুর আগে ৩০% টাকা অগ্রিম দিতে হইবে। ২) প্রজেক্ট চলাকালীন ডেভেলপার নিয়মিত আপডেট প্রদান করিবেন। ৩) ডেলিভারির পর ৩ মাস পর্যন্ত বাগ ফিক্সিং সাপোর্ট ফ্রি প্রদান করা হইবে। ৪) সোর্স কোড ক্লায়েন্টের সম্পত্তি হিসেবে গণ্য হইবে। ৫) অতিরিক্ত ফিচারের জন্য অতিরিক্ত পেমেন্ট করিতে হইবে। ৬) চুক্তির শর্ত ভঙ্গ করিলে প্রজেক্ট বাতিল বলিয়া গণ্য হইবে। ৭) কোনো গোপনীয় তথ্য তৃতীয় পক্ষের নিকট শেয়ার করা যাইবে না। অদ্য এই চুক্তিপত্রটি চূড়ান্ত বলিয়া গণ্য হইল।'
    }
  },
  en: {
    rent: { 
      title: 'Residential House Rent Agreement', 
      text: 'This Rental Agreement is executed on {{val2}} between First Party (Landlord): {{name}}, Address: {{address}} and Second Party (Tenant): {{p2}}. Terms and Conditions: 1) The monthly rent is fixed at {{val1}} payable by the 5th of each month. 2) A security deposit of ............ has been received by the landlord. 3) The lease period shall be for 2 years starting from today. 4) Utility bills including electricity, water, and gas shall be paid by the tenant. 5) The tenant shall not make any structural changes to the premises without written consent. 6) Either party can terminate this agreement by giving 3 months advance notice. 7) Any illegal activities within the premises will lead to immediate eviction. Both parties have signed this agreement in sound mind.' 
    },
    land: { 
      title: 'Land Sale Advance (Bayana) Agreement', 
      text: 'This agreement is made between Seller: {{name}} and Buyer: {{p2}}. The seller agrees to sell the land described at {{address}} for a total price of {{val1}}. An advance amount of ........... has been paid today. Conditions: 1) The remaining balance must be paid within {{val2}} months to complete the registration. 2) The seller guarantees that the land is free from all encumbrances and legal disputes. 3) If the buyer fails to pay the balance in time, the advance will be forfeited. 4) If the seller refuses to register the land, the buyer can seek legal remedy through court. 5) Physical possession is handed over to the buyer today. Signed by both parties in the presence of witnesses.' 
    },
    shop: { 
      title: 'Commercial Shop Lease Agreement', 
      text: 'Landlord: {{name}}, Tenant: {{p2}}. Location: {{address}}. Terms: 1) The tenant has paid an advance security deposit of {{val1}}. 2) Monthly rent is fixed at ........... per month. 3) This lease is valid for {{val2}} years. 4) The tenant is responsible for trade licenses and commercial taxes. 5) Internal decorations are allowed but the main structure cannot be altered. 6) The tenant must provide 3 months notice before vacating the shop. 7) Rent must be paid by the 7th of every month. 8) Legal action can be taken by either party for breach of contract. Executed on this day with full consent.' 
    },
    money: { 
      title: 'Financial Loan/Debt Agreement', 
      text: 'Lender: {{p2}}, Borrower: {{name}}, Father: {{witness}}. I, the borrower, have received a cash loan of {{val1}} from the lender for personal business needs. Terms: 1) This loan is interest-free. 2) I promise to repay the full amount by {{val2}}. 3) If I fail to repay on time, the lender has the right to file a legal suit to recover the money. 4) The borrower will be liable for all legal costs incurred. 5) Any property pledged as security will remain with the lender until full repayment. 6) This document serves as legal evidence of the debt. Signed voluntarily without any pressure.' 
    },
    vehicle: { 
      title: 'Vehicle Sale & Transfer Agreement', 
      text: 'Seller: {{name}}, Buyer: {{p2}}. Vehicle Details: {{address}}. Sale Price: {{val1}}. Conditions: 1) The seller has received full payment and handed over the keys and documents. 2) All previous taxes, fines, and legal issues are cleared by the seller. 3) From today, the buyer is solely responsible for any accidents or legal liabilities related to the vehicle. 4) The seller will provide necessary signatures for ownership transfer within {{val2}} days. 5) The seller waives all future claims on the vehicle. 6) Both parties have verified the engine and chassis numbers. Signed on this date.' 
    },
    partnership: { 
      title: 'Business Partnership Agreement', 
      text: 'Partners: {{name}} and {{p2}}. Business Name: ...................., Address: {{address}}. Terms: 1) Total investment is {{val1}} contributed as per agreed shares. 2) Profits and losses will be shared according to the investment ratio. 3) The partnership duration is {{val2}} years. 4) A joint bank account will be operated for all business transactions. 5) Any partner wishing to leave must give 6 months notice. 6) New partners can only be added with unanimous written consent. 7) Proper accounting records must be maintained and accessible to all partners. 8) Disputes will be settled through arbitration or mutual discussion.' 
    },
    construction: { 
      title: 'Building Construction Contract', 
      text: 'Owner: {{name}}, Contractor: {{p2}}. Site Location: {{address}}. Terms: 1) The building must be constructed as per the approved architectural plan. 2) The total budget is fixed at {{val1}}. 3) Completion date is set for {{val2}}. 4) High-quality materials like rod, cement, and sand must be used as specified. 5) Delay in completion will result in a penalty per day. 6) The contractor is responsible for the safety of laborers. 7) Payments will be made in installments based on progress. 8) Any structural defects must be rectified by the contractor at their own cost. Signed by both parties.' 
    },
    flat: { 
      title: 'Flat/Apartment Purchase Agreement', 
      text: 'Seller: {{name}}, Buyer: {{p2}}. Flat Address: {{address}}, Size: ............ Sqft. Total Price: {{val1}}. Booking money of ........... has been paid. Terms: 1) The balance amount shall be paid by {{val2}} or through installments. 2) The seller will provide a clear title and mutation at the time of handover. 3) Fixtures and fittings must be of the quality mentioned in the brochure. 4) If the seller fails to deliver, double the booking amount will be refunded. 5) Utility connection costs are to be borne by the buyer. 6) Common space usage will be as per building bylaws. Both parties agree to abide by these terms.' 
    },
    loan_repay: { 
      title: 'Loan Repayment Commitment Bond', 
      text: 'I, {{name}}, Father: {{witness}}, hereby declare that I owe {{val1}} to {{p2}}. I commit to repaying the said amount by {{val2}} or as per the agreed schedule. Terms: 1) In case of my demise, my legal heirs will be responsible for this debt. 2) Delay in payment will allow the lender to take legal action. 3) The lender has the right to recover the amount from my movable or immovable assets. 4) No excuses for non-payment will be accepted after the deadline. 5) This document is a binding legal instrument. Signed in the presence of witnesses.' 
    },
    employment: { 
      title: 'Employment Contract & Appointment', 
      text: 'Employer: {{name}}, Address: {{address}}. Employee: {{p2}}. Designation: ............... Terms: 1) Monthly salary is {{val1}} plus other applicable benefits. 2) Working hours are 9 AM to 6 PM. 3) The probation period is {{val2}} months. 4) The employee must maintain strict confidentiality of business trade secrets. 5) Any misconduct will lead to immediate termination without notice. 6) Resignation requires a 1-month written notice. 7) Leaves must be pre-approved by the management. 8) The employee must follow all company policies. Both parties accept the terms.' 
    },
    lease_long: { 
      title: 'Long-term Land Lease Agreement', 
      text: 'Lessor: {{name}}, Lessee: {{p2}}. Land Description: {{address}}. Lease Period: {{val2}} years. Annual Lease Fee: {{val1}}. Terms: 1) The lessee can use the land only for the purposes specified in the contract. 2) The annual fee must be paid in advance. 3) Upon expiry, the land must be returned to the lessor in its original state. 4) The lessor will not interfere with the possession during the lease period. 5) Government taxes and land revenue are to be paid by the lessor. 6) Sub-leasing to a third party is strictly prohibited without consent. 7) Breach of terms will nullify the lease. Signed on this day.' 
    },
    dower_marriage: { 
      title: 'Dower (Mahr) & Marital Commitment', 
      text: 'I, {{name}}, Father: {{witness}}, declare that the dower for my wife {{p2}} is fixed at {{val1}}. I have paid ........... as prompt dower today. Terms: 1) The remaining amount will be paid on demand or in installments. 2) I will provide proper maintenance and a safe living environment for my wife. 3) I will treat my wife with respect and dignity. 4) I will be responsible for the welfare of our future children. 5) This commitment is made on {{val2}}. 6) This document serves as a record of our marital rights and obligations. May our marriage be blessed. Signed by both parties.' 
    },
    transport: { 
      title: 'Vehicle Hire/Rental Agreement', 
      text: 'Vehicle Owner: {{name}}, Hirer: {{p2}}. Vehicle Details: {{address}}. Terms: 1) The hire charge is {{val1}} per day/month. 2) Fuel and parking costs are the responsibility of the hirer. 3) The contract is valid until {{val2}}. 4) Mechanical failures are handled by the owner, but damage due to negligence is paid by the hirer. 5) The owner ensures the vehicle has valid insurance and papers. 6) The vehicle must not be used for any illegal activities. 7) Any accident must be reported immediately. 8) The vehicle must be returned in good condition. Agreed by both.' 
    },
    event: { 
      title: 'Event Management Service Agreement', 
      text: 'Client: {{name}}, Event Planner: {{p2}}. Venue: {{address}}. Event Date: {{val2}}. Total Contract Value: {{val1}}. Terms: 1) An advance of 50% is paid today. 2) The planner must ensure the quality of food, decoration, and sound. 3) The planner is responsible for any mismanagement during the event. 4) In case of cancellation, the refund policy will apply as per standard terms. 5) Any extra services will be charged additionally. 6) The balance must be paid immediately after the event. 7) The event must start and end at the scheduled time. Signed by both parties.' 
    },
    mortgage: { 
      title: 'Property Mortgage/Pledge Agreement', 
      text: 'Mortgagor: {{name}}, Mortgagee: {{p2}}. Property Details: {{address}}. Loan Amount: {{val1}}. Terms: 1) The original property documents will remain with the mortgagee until the loan is cleared. 2) The loan must be repaid by {{val2}}. 3) If the mortgagor fails to repay, the mortgagee has the legal right to sell the property to recover the debt. 4) Possession remains with the mortgagor unless specified otherwise. 5) No changes to the property should be made during the mortgage. 6) All taxes are to be paid by the owner. 7) Documents will be returned upon full settlement. Signed with full consent.' 
    },
    security_service: { 
      title: 'Security Guard Service Agreement', 
      text: 'Client: {{name}}, Agency: {{p2}}. Service Location: {{address}}. Terms: 1) The agency will provide 24/7 security personnel. 2) Monthly service charge is {{val1}}. 3) Contract period is {{val2}} months. 4) The agency is liable for losses proven to be due to guard negligence. 5) Guards must be in uniform and well-trained. 6) The client can request a replacement for any unsatisfactory guard. 7) Bills must be cleared within the 5th of every month. 8) Either party can terminate with 1-month notice. Both parties have signed this contract.' 
    },
    supply_goods: { 
      title: 'Goods Supply Agreement', 
      text: 'Supplier: {{name}}, Buyer: {{p2}}. Item Details: {{address}}. Unit Price: {{val1}}. Delivery Deadline: {{val2}}. Terms: 1) Items must meet the quality standards specified. 2) The buyer has the right to reject defective goods. 3) Delivery costs are included in the price. 4) Payment will be made within 15 days of delivery. 5) Orders can be adjusted with mutual consent. 6) Failure to deliver on time may result in a penalty. 7) This contract is binding for both parties. Executed on the date mentioned above.' 
    },
    internet_isp: { 
      title: 'ISP/Internet Service Agreement', 
      text: 'Provider: {{name}}, Subscriber: {{p2}}. Address: {{address}}. Bandwidth: ........... Mbps. Monthly Bill: {{val1}}. Duration: {{val2}}. Terms: 1) The subscriber must pay the bill by the 10th of each month. 2) The provider will resolve any technical downtime within 24 hours. 3) Routers and equipment provided are the property of the ISP/Subscriber as per the plan. 4) Illegal use of internet is strictly prohibited. 5) Non-payment will result in service suspension. 6) Reactivation fees may apply. Both parties agree to the terms of service.' 
    },
    it_project: { 
      title: 'Software Development/IT Project Contract', 
      text: 'Developer: {{name}}, Client: {{p2}}. Project Name: {{address}}. Total Budget: {{val1}}. Deadline: {{val2}}. Terms: 1) 30% advance is required to start work. 2) Regular progress updates must be provided by the developer. 3) Post-delivery support will be provided for 3 months. 4) All source codes and IP rights belong to the client after full payment. 5) Extra features will be billed separately. 6) Strict confidentiality must be maintained regarding project data. Both parties have signed this document.' 
    },
    cleaning: { 
      title: 'Commercial Cleaning Service Agreement', 
      text: 'Client: {{name}}, Service Provider: {{p2}}. Site: {{address}}. Monthly Fee: {{val1}}. Contract Duration: {{val2}}. Terms: 1) Cleaning will be performed daily/weekly as per the schedule. 2) All cleaning chemicals and equipment are provided by the service provider. 3) The provider ensures the background check of their staff. 4) Payment is due at the end of each month. 5) Damages caused during cleaning must be compensated. 6) The client provides access to water and electricity. Signed by both parties in agreement.' 
    }
  }
};

function adjustAgPreviewScale() {
    const container = document.querySelector('.ag-preview-scroll');
    const wrapper = document.getElementById('ag-wrapper');
    const paper = document.getElementById('ag-editor-box');
    if (!container || !paper) return;
    const containerWidth = container.offsetWidth - 30;
    const paperWidth = 812; 
    if (containerWidth < paperWidth) {
        const scale = containerWidth / paperWidth;
        wrapper.style.transform = `scale(${scale})`;
        container.style.height = (paper.offsetHeight * scale + 50) + "px";
    } else {
        wrapper.style.transform = 'scale(1)';
        container.style.height = "auto";
    }
}

function closeAgreementModal() {
    document.getElementById('agreementModal').style.display = 'none';
}

function setAgLang(lang) {
    agLang = lang;
    document.getElementById('ag-bn-btn').classList.toggle('active', lang === 'bn');
    document.getElementById('ag-en-btn').classList.toggle('active', lang === 'en');
    const isBN = lang === 'bn';
    
    document.getElementById('ag-main-title').innerHTML = isBN ? "<i class='fa-solid fa-file-signature'/> চুক্তিপত্র রাইটিং" : "<i class='fa-solid fa-file-signature'/> Agreement letter writing";
    document.getElementById('lbl-ag-temp').innerText = isBN ? 'চুক্তিপত্র নির্বাচন করুন' : 'Select Agreement Template';
    document.getElementById('lbl-ag-p1').innerText = isBN ? 'প্রথম পক্ষের নাম' : 'First Party Name';
    document.getElementById('lbl-ag-p2').innerText = isBN ? 'দ্বিতীয় পক্ষের নাম' : 'Second Party Name';
    document.getElementById('lbl-ag-witness').innerText = isBN ? 'সাক্ষীর নাম/পিতার নাম' : 'Witness/Father Name';
    document.getElementById('lbl-ag-addr').innerText = isBN ? 'বিষয়ের বিবরণ/ঠিকানা' : 'Subject/Address';
    document.getElementById('lbl-ag-val1').innerText = isBN ? 'টাকার পরিমাণ/শর্ত ১' : 'Amount/Condition 1';
    document.getElementById('lbl-ag-val2').innerText = isBN ? 'মেয়াদ/শর্ত ২' : 'Duration/Condition 2';
    document.getElementById('lbl-ag-margin').innerText = isBN ? 'স্ট্যাম্প টপ স্পেস (Inch)' : 'Stamp Top Space (Inch)';
    document.getElementById('lbl-ag-sig1').innerText = isBN ? 'প্রথম পক্ষের স্বাক্ষর' : 'First Party Signature';
    document.getElementById('lbl-ag-sig2').innerText = isBN ? 'দ্বিতীয় পক্ষের স্বাক্ষর' : 'Second Party Signature';
    document.getElementById('lbl-ag-preview-hint').innerText = isBN ? 'স্ট্যাম্প প্রিভিউ (ইমেজটি প্রিন্টে আসবে না)' : 'STAMP PREVIEW (IMAGE WILL NOT PRINT)';

    document.getElementById('ag-intro-box').innerHTML = isBN ? 
        "<b>নির্দেশনা:</b> বিভিন্ন টেমপ্লেট ক্ষেত্রে শূন্যস্থান পূরণ না হলে ম্যানুয়ালি টাইপ করে নিবেন। এটি লিগ্যাল (২১৫ মিমি x ৩৪৫ মিমি) সাইজ স্ট্যাম্প পেপারের জন্য। শুধুমাত্র ব্যাকগ্রাউন্ড ছাড়া লেখাগুলো প্রিন্ট হবে।" : 
        "<b>Note:</b> If the blanks are not filled in various template fields, type them manually. This is for legal (215mm x 345mm) size stamp paper. Only texts without background will be printed.";

    const select = document.getElementById('ag-template-select');
    select.innerHTML = '';
    const data = agTemplates[lang];
    for (let key in data) {
        let opt = document.createElement('option');
        opt.value = key; opt.innerText = data[key].title;
        select.appendChild(opt);
    }
    applyAgTemplate(select.value);
}

function applyAgTemplate(key) {
    window.currentAgKey = key;
    updateAgPreview();
}

function updateAgPreview() {
    const data = agTemplates[agLang][window.currentAgKey];
    document.getElementById('ag-title-ui').innerText = data.title;
    const inputs = {
        name: document.getElementById('ag-p1').value || '.......',
        p2: document.getElementById('ag-p2').value || '.......',
        witness: document.getElementById('ag-witness').value || '.......',
        address: document.getElementById('ag-address').value || '.......',
        val1: document.getElementById('ag-val1').value || '.......',
        val2: document.getElementById('ag-val2').value || '.......'
    };
    let body = data.text;
    for (let key in inputs) {
        body = body.replace(new RegExp(`{{${key}}}`, 'g'), `<b>${inputs[key]}</b>`);
    }
    document.getElementById('ag-body-ui').innerHTML = body;
}

function updateAgMargin(val) {
    document.getElementById('ag-top-margin').style.height = val + 'px';
    document.getElementById('ag-margin-val').innerText = (val / 100).toFixed(1) + " Inch";
}

function printAgreement() {
    const margin = document.getElementById('ag-top-margin').offsetHeight;
    const title = document.getElementById('ag-title-ui').innerText;
    const body = document.getElementById('ag-body-ui').innerHTML;
    const s1 = document.getElementById('lbl-ag-sig1').innerText;
    const s2 = document.getElementById('lbl-ag-sig2').innerText;

    const win = window.open('', '', 'width=900,height=1000');
    win.document.write(`
        <html><head><title>Print Agreement</title>
        <link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">
        <style>
            @page { size: 215mm 345mm; margin: 0; }
            body { margin: 0; padding: 0; font-family: 'SolaimanLipi', Arial, sans-serif; text-align: justify; }
            .p-cont { width: 215mm; min-height: 345mm; padding: 20mm; box-sizing: border-box; }
            .t-sp { height: ${margin}px; }
            .tit { text-align: center; text-decoration: underline; font-size: 24px; margin-bottom: 30px; font-weight: bold; }
            .content { line-height: 1.8; font-size: 18px; min-height: 500px; white-space: pre-wrap; }
            .foot { margin-top: 80px; display: flex; justify-content: space-between; font-weight: bold; font-size: 16px; }
        </style></head>
        <body><div class="p-cont"><div class="t-sp"></div><div class="tit">${title}</div><div class="content">${body}</div>
        <div class="foot"><div><br>________________<br>${s1}</div><div><br>________________<br>${s2}</div></div></div>
        <script>window.onload=function(){setTimeout(()=>{window.print();window.close();},700);};<\/script></body></html>
    `);
    win.document.close();
}

function resetAgreement() {
    document.querySelectorAll('.ag-inputs input, .ag-inputs textarea').forEach(i => i.value = '');
    updateAgPreview();
}
window.addEventListener('resize', adjustAgPreviewScale);
;

let mergeFiles = [];
let splitFile = null;

// আপনার ওয়েবসাইটের ডিফল্ট অ্যালার্ট ফাংশন (নিশ্চিত করার জন্য পুনরায় দেওয়া হলো)
function triggerSiteAlert(msg) {
    if (typeof showAlert === "function") {
        showAlert(msg);
    } else {
        // যদি showAlert ফাংশনটি গ্লোবাল না হয় তবে সরাসরি আপনার পপআপ আইডি ব্যবহার করবে
        const popup = document.getElementById('customPopup');
        const msgBox = document.getElementById('popupMessage');
        if (popup && msgBox) {
            msgBox.innerText = msg;
            popup.style.display = 'flex';
        } else {
            alert(msg); // ব্যাকআপ
        }
    }
}

function openPdfToolModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-pdf-tool');
    document.getElementById('pdfToolModal').style.display = 'flex';
}

function closePdfToolModal() {
    document.getElementById('pdfToolModal').style.display = 'none';
}

function switchPdfTab(tab) {
    document.getElementById('tab-merge-btn').classList.toggle('active', tab === 'merge');
    document.getElementById('tab-split-btn').classList.toggle('active', tab === 'split');
    document.getElementById('section-merge').style.display = tab === 'merge' ? 'block' : 'none';
    document.getElementById('section-split').style.display = tab === 'split' ? 'block' : 'none';
    document.getElementById('pdf-tool-status').style.display = 'none';
}

// --- MERGER LOGIC ---
function handleMergeFiles(event) {
    const files = Array.from(event.target.files);
    mergeFiles = [...mergeFiles, ...files];
    renderMergeList();
}

function renderMergeList() {
    const list = document.getElementById('merge-file-list');
    const btn = document.getElementById('btn-merge-start');
    list.innerHTML = "";
    if(mergeFiles.length > 0) {
        list.style.display = "block";
        btn.style.display = "block";
        mergeFiles.forEach((f, i) => {
            list.innerHTML += `<div class="pdf-item">
                <span>${i+1}. ${f.name}</span>
                <button class="pdf-rem-btn" onclick="removeMergeFile(${i})">&times;</button>
            </div>`;
        });
    } else {
        list.style.display = "none";
        btn.style.display = "none";
    }
}

function removeMergeFile(index) {
    mergeFiles.splice(index, 1);
    renderMergeList();
}

async function processMergePDF() {
    const status = document.getElementById('pdf-tool-status');
    
    if (mergeFiles.length < 2) {
        triggerSiteAlert("Please select at least 2 PDF files to merge!");
        return;
    }

    status.style.display = "block";
    status.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Merging PDFs...';

    try {
        if (typeof PDFLib === 'undefined') {
            throw new Error("PDF Library is not loaded yet. Please check your internet.");
        }

        const mergedPdf = await PDFLib.PDFDocument.create();
        for (const f of mergeFiles) {
            const bytes = await f.arrayBuffer();
            let pdf;
            try {
                pdf = await PDFLib.PDFDocument.load(bytes);
            } catch (e) {
                throw new Error(`File "${f.name}" is password protected or corrupted. Please remove the password first.`);
            }
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }
        const pdfBytes = await mergedPdf.save();
        downloadBlob(pdfBytes, "Merged_By_ID_Scanner_Pro.pdf", "application/pdf");
        status.innerHTML = '<span style="color:#059669;">Success! Files Merged.</span>';
    } catch (err) {
        status.style.display = "none";
        triggerSiteAlert(err.message);
    }
}

// --- SPLITTER LOGIC ---
function handleSplitFile(event) {
    splitFile = event.target.files[0];
    if(splitFile) {
        document.getElementById('split-file-name').innerText = splitFile.name;
        document.getElementById('split-controls').style.display = "block";
    }
}

async function processSplitPDF() {
    const rangeInput = document.getElementById('split-pages-input').value.trim();
    const status = document.getElementById('pdf-tool-status');

    if (!splitFile) {
        triggerSiteAlert("Please select a PDF file first!");
        return;
    }
    if (!rangeInput) {
        triggerSiteAlert("Please enter the page numbers or range to extract (e.g. 1, 2-5)!");
        return;
    }

    status.style.display = "block";
    status.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Extracting pages...';

    try {
        const bytes = await splitFile.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(bytes);
        const newPdf = await PDFLib.PDFDocument.create();
        const totalPages = pdf.getPageCount();
        
        const pagesToExtract = parsePageRange(rangeInput, totalPages);
        
        if (pagesToExtract.length === 0) {
            throw new Error("Invalid page range. Please check the page numbers.");
        }

        const copiedPages = await newPdf.copyPages(pdf, pagesToExtract.map(p => p - 1));
        copiedPages.forEach(p => newPdf.addPage(p));

        const pdfBytes = await newPdf.save();
        downloadBlob(pdfBytes, "Extracted_Pages.pdf", "application/pdf");
        status.innerHTML = '<span style="color:#059669;">Success! Pages Extracted.</span>';
    } catch (err) {
        status.style.display = "none";
        triggerSiteAlert(err.message);
    }
}

function parsePageRange(input, max) {
    const pages = new Set();
    input.split(',').forEach(part => {
        if(part.includes('-')) {
            const [start, end] = part.split('-').map(Number);
            if(start > 0 && end >= start) {
                for(let i = start; i <= end; i++) if(i <= max) pages.add(i);
            }
        } else {
            const val = Number(part.trim());
            if(val > 0 && val <= max) pages.add(val);
        }
    });
    return Array.from(pages).sort((a,b) => a-b);
}

// Helper Download Function
function downloadBlob(data, fileName, mimeType) {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
;

const dhakaRamadanTimes = [
    { r: 1, date: "১৯ ফেব্রুয়ারি", day: "বৃহস্পতিবার", s: "5:12", i: "5:58", type: "রহমত" },
    { r: 2, date: "২০ ফেব্রুয়ারি", day: "শুক্রবার", s: "5:11", i: "5:58", type: "রহমত" },
    { r: 3, date: "২১ ফেব্রুয়ারি", day: "শনিবার", s: "5:11", i: "5:59", type: "রহমত" },
    { r: 4, date: "২২ ফেব্রুয়ারি", day: "রবিবার", s: "5:10", i: "5:59", type: "রহমত" },
    { r: 5, date: "২৩ ফেব্রুয়ারি", day: "সোমবার", s: "5:09", i: "6:00", type: "রহমত" },
    { r: 6, date: "২৪ ফেব্রুয়ারি", day: "মঙ্গলবার", s: "5:08", i: "6:00", type: "রহমত" },
    { r: 7, date: "২৫ ফেব্রুয়ারি", day: "বুধবার", s: "5:08", i: "6:01", type: "রহমত" },
    { r: 8, date: "২৬ ফেব্রুয়ারি", day: "বৃহস্পতিবার", s: "5:07", i: "6:01", type: "রহমত" },
    { r: 9, date: "২৭ ফেব্রুয়ারি", day: "শুক্রবার", s: "5:06", i: "6:02", type: "রহমত" },
    { r: 10, date: "২৮ ফেব্রুয়ারি", day: "শনিবার", s: "5:05", i: "6:02", type: "রহমত" },
    { r: 11, date: "০১ মার্চ", day: "রবিবার", s: "5:05", i: "6:03", type: "মাগফেরাত" },
    { r: 12, date: "০২ মার্চ", day: "সোমবার", s: "5:04", i: "6:03", type: "মাগফেরাত" },
    { r: 13, date: "০৩ মার্চ", day: "মঙ্গলবার", s: "5:03", i: "6:04", type: "মাগফেরাত" },
    { r: 14, date: "০৪ মার্চ", day: "বুধবার", s: "5:02", i: "6:04", type: "মাগফেরাত" },
    { r: 15, date: "০৫ মার্চ", day: "বৃহস্পতিবার", s: "5:01", i: "6:05", type: "মাগফেরাত" },
    { r: 16, date: "০৬ মার্চ", day: "শুক্রবার", s: "5:00", i: "6:05", type: "মাগফেরাত" },
    { r: 17, date: "০৭ মার্চ", day: "শনিবার", s: "4:59", i: "6:06", type: "মাগফেরাত" },
    { r: 18, date: "০৮ মার্চ", day: "রবিবার", s: "4:48", i: "6:06", type: "মাগফেরাত" },
    { r: 19, date: "০৯ মার্চ", day: "সোমবার", s: "4:57", i: "6:07", type: "মাগফেরাত" },
    { r: 20, date: "১০ মার্চ", day: "মঙ্গলবার", s: "4:57", i: "6:07", type: "মাগফেরাত" },
    { r: 21, date: "১১ মার্চ", day: "বুধবার", s: "4:56", i: "6:07", type: "নাজাত" },
    { r: 22, date: "১২ মার্চ", day: "বৃহস্পতিবার", s: "4:55", i: "6:08", type: "নাজাত" },
    { r: 23, date: "১৩ মার্চ", day: "শুক্রবার", s: "4:54", i: "6:08", type: "নাজাত" },
    { r: 24, date: "১৪ মার্চ", day: "শনিবার", s: "4:53", i: "6:09", type: "নাজাত" },
    { r: 25, date: "১৫ মার্চ", day: "রবিবার", s: "4:52", i: "6:09", type: "নাজাত" },
    { r: 26, date: "১৬ মার্চ", day: "সোমবার", s: "4:51", i: "6:10", type: "নাজাত" },
    { r: 27, date: "১৭ মার্চ", day: "মঙ্গলবার", s: "4:50", i: "6:10", type: "নাজাত" },
    { r: 28, date: "১৮ মার্চ", day: "বুধবার", s: "4:49", i: "6:10", type: "নাজাত" },
    { r: 29, date: "১৯ মার্চ", day: "বৃহস্পতিবার", s: "4:48", i: "6:11", type: "নাজাত" },
    { r: 30, date: "২০ মার্চ", day: "শুক্রবার", s: "4:47", i: "6:11", type: "নাজাত" }
];

const ramDistOffsets = {
    "ঢাকা": { s: 0, i: 0 },
    "ফরিদপুর": { s: 1, i: 2 }, "গাজীপুর": { s: -1, i: -1 }, "গোপালগঞ্জ": { s: 1, i: 2 }, "কিশোরগঞ্জ": { s: -3, i: -3 }, "মাদারীপুর": { s: 0, i: 1 }, "মানিকগঞ্জ": { s: 1, i: 1 }, "মুন্সীগঞ্জ": { s: -1, i: -1 }, "নারায়ণগঞ্জ": { s: -1, i: -1 }, "নরসিংদী": { s: -2, i: -3 }, "রাজবাড়ী": { s: 3, i: 3 }, "শরীয়তপুর": { s: -1, i: -1 }, "টাঙ্গাইল": { s: 1, i: 1 },
    "চট্টগ্রাম": { s: -7, i: -5 }, "বান্দরবান": { s: -10, i: -7 }, "ব্রাহ্মণবাড়িয়া": { s: -3, i: -3 }, "চাঁদপুর": { s: -2, i: -2 }, "কুমিল্লা": { s: -4, i: -3 }, "কক্সবাজার": { s: -9, i: -6 }, "ফেনী": { s: -5, i: -4 }, "খাগড়াছড়ি": { s: -7, i: -6 }, "লক্ষ্মীপুর": { s: -2, i: -2 }, "নোয়াখালী": { s: -4, i: -3 }, "রাঙ্গামাটি": { s: -9, i: -7 },
    "রাজশাহী": { s: 6, i: 6 }, "বগুড়া": { s: 3, i: 3 }, "জয়পুরহাট": { s: 5, i: 3 }, "নওগাঁ": { s: 6, i: 5 }, "নাটোর": { s: 5, i: 5 }, "চাঁপাইনবাবগঞ্জ": { s: 8, i: 7 }, "পাবনা": { s: 3, i: 3 }, "সিরাজগঞ্জ": { s: 3, i: 2 },
    "খুলনা": { s: 3, i: 4 }, "বাগেরহাট": { s: 2, i: 3 }, "চুয়াডাঙ্গা": { s: 6, i: 5 }, "যশোর": { s: 4, i: 5 }, "ঝিনাইদহ": { s: 4, i: 5 }, "কুষ্টিয়া": { s: 5, i: 5 }, "মাগুরা": { s: 3, i: 3 }, "মেহেরপুর": { s: 7, i: 6 }, "নড়াইল": { s: 3, i: 3 }, "সাতক্ষীরা": { s: 4, i: 5 },
    "বরিশাল": { s: -1, i: 1 }, "বরগুনা": { s: 0, i: 2 }, "ভোলা": { s: -3, i: -1 }, "ঝালকাঠি": { s: 0, i: 1 }, "পটুয়াখালী": { s: -1, i: 1 }, "পিরোজপুর": { s: 1, i: 1 },
    "সিলেট": { s: -8, i: -8 }, "হবিগঞ্জ": { s: -4, i: -5 }, "মৌলভীবাজার": { s: -7, i: -7 }, "সুনামগঞ্জ": { s: -4, i: -5 },
    "রংপুর": { s: 5, i: 2 }, "দিনাজপুর": { s: 5, i: 4 }, "গাইবান্ধা": { s: 4, i: 2 }, "কুড়িগ্রাম": { s: 3, i: 0 }, "লালমনিরহাট": { s: 4, i: 2 }, "নীলফামারী": { s: 6, i: 3 }, "পঞ্চগড়": { s: 8, i: 4 }, "ঠাকুরগাঁও": { s: 8, i: 6 },
    "ময়মনসিংহ": { s: -1, i: -1 }, "জামালপুর": { s: 2, i: 0 }, "নেত্রকোনা": { s: -3, i: -3 }, "শেরপুর": { s: 1, i: -1 }
};

function toBnNum(n) {
    return n.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
}

// বর্তমান তারিখ ফরম্যাট করা (যেমন: ২০ ফেব্রুয়ারি)
function getTodayString() {
    const now = new Date();
    const day = now.getDate();
    const monthIndex = now.getMonth();
    const months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
    
    // তারিখ ২ ডিজিট করা (যেমন ১ এর জায়গায় ০১)
    const formattedDay = day < 10 ? "০" + toBnNum(day) : toBnNum(day);
    return formattedDay + " " + months[monthIndex];
}

function calculateTime(timeStr, offsetMins) {
    let [h, m] = timeStr.split(':').map(Number);
    let totalMinutes = h * 60 + m + offsetMins;
    let newH = Math.floor(totalMinutes / 60);
    let newM = totalMinutes % 60;
    
    // ১২ ঘণ্টার ফরম্যাট
    let displayH = newH > 12 ? newH - 12 : newH;
    if (displayH === 0) displayH = 12;
    
    return toBnNum(`${displayH}:${newM < 10 ? '0' + newM : newM}`);
}

function openRamadanModal() {
    document.getElementById('ramadanModal').style.display = 'flex';
    initDistrictSelector();
}

function closeRamadanModal() {
    document.getElementById('ramadanModal').style.display = 'none';
}

function initDistrictSelector() {
    const select = document.getElementById('ram-district-select');
    if (select.children.length > 0) return;
    
    const sortedDistricts = Object.keys(ramDistOffsets).sort((a, b) => a.localeCompare(b, 'bn'));
    sortedDistricts.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.innerText = d;
        if(d === "ঢাকা") opt.selected = true;
        select.appendChild(opt);
    });
    changeDistrict();
}

function changeDistrict() {
    const dist = document.getElementById('ram-district-select').value;
    const offset = ramDistOffsets[dist];
    const body = document.getElementById('ram-table-body');
    const todayStr = getTodayString();
    
    body.innerHTML = "";
    let currentType = "";
    
    // আজকের ডেটা ড্যাশবোর্ডে দেখানোর জন্য ভ্যারিয়েবল
    let todayData = dhakaRamadanTimes[0]; // ডিফল্ট প্রথম দিন

    dhakaRamadanTimes.forEach(item => {
        if (item.type !== currentType) {
            currentType = item.type;
            body.innerHTML += `<tr class="section-header"><td colspan="5" style="background:#f1f5f9; color:#059669; font-weight:800; padding:10px;">${currentType} (১০ দিন)</td></tr>`;
        }

        const sehri = calculateTime(item.s, offset.s);
        const iftar = calculateTime(item.i, offset.i);
        
        // চেক করা হচ্ছে আজকের তারিখ কি না
        const isToday = item.date === todayStr;
        if(isToday) todayData = item;

        body.innerHTML += `<tr class="${isToday ? 'highlight-today' : ''}">
            <td>${toBnNum(item.r)}</td>
            <td>${item.date}</td>
            <td>${item.day}</td>
            <td>${sehri}</td>
            <td>${iftar}</td>
        </tr>`;
    });

    // ড্যাশবোর্ড আপডেট
    document.getElementById('today-sehri').innerText = calculateTime(todayData.s, offset.s);
    document.getElementById('today-iftar').innerText = calculateTime(todayData.i, offset.i);
    document.getElementById('current-location-info').innerText = `স্থান: ${dist} | আজকের তারিখ: ${todayStr}`;
}
;

let gdLang = "bn";

const gdTemplates = {
    bn: {
        mobile: { title: "মোবাইল ফোন হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, আজ ইংরেজি {{time}} ঘটিকার সময় {{place}} হইতে আমার ব্যবহৃত মোবাইল ফোনটি অসাবধানতাবশত হারাইয়া গিয়াছে। ফোনটির বিবরণ: {{desc}}। অনেক খোঁজাখুঁজি করিয়াও ফোনটি পাওয়া যায় নাই। বিষয়টি আপনার থানায় সাধারণ ডায়েরিভুক্ত করার জন্য অনুরোধ জানাচ্ছি।" },
        nid: { title: "ভোটার আইডি (NID) কার্ড হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, আজ ইংরেজি {{time}} ঘটিকার সময় {{place}} হইতে আমার মূল জাতীয় পরিচয়পত্র (NID Card) হারাইয়া গিয়াছে। কার্ডের বিবরণ: {{desc}}। আইনগত প্রয়োজনে বিষয়টি ডায়েরিভুক্ত করা একান্ত আবশ্যক। বিষয়টি থানায় সাধারণ ডায়েরিভুক্ত করার জন্য সবিনয় অনুরোধ করিতেছি।" },
        certificate: { title: "শিক্ষাগত সনদপত্র হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, অদ্য ইংরেজি {{time}} তারিখ {{place}} হইতে যাতায়াতের সময় আমার শিক্ষাগত যোগ্যতার মূল সনদপত্রটি হারাইয়া গিয়াছে। সার্টিফিকেটের বিবরণ: {{desc}}। বিষয়টি থানায় সাধারণ ডায়েরিভুক্ত করিয়া আমাকে বাধিত করিবেন।" },
        passport: { title: "পাসপোর্ট হারিয়ে যাওয়া", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, {{place}} হইতে যাতায়াতের পথে আমার আন্তর্জাতিক পাসপোর্টটি হারাইয়া গিয়াছে। পাসপোর্ট নম্বর: {{desc}}। উক্ত পাসপোর্টটি ভবিষ্যতে আইনগত সুরক্ষার জন্য আপনার থানায় সাধারণ ডায়েরিভুক্ত করা প্রয়োজন।" },
        license: { title: "ড্রাইভিং লাইসেন্স হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, ইংরেজি {{time}} ঘটিকায় {{place}} হইতে আমার মূল ড্রাইভিং লাইসেন্সটি হারাইয়া গিয়াছে। লাইসেন্স নম্বর: {{desc}}। বিষয়টি ডায়েরিভুক্ত করার আবেদন জানাচ্ছি।" },
        cheque: { title: "ব্যাংক চেক বই হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, আমার নিম্নবর্ণিত ব্যাংক চেক বইটি হারাইয়া গিয়াছে। ব্যাংকের নাম ও অ্যাকাউন্ট নম্বর: {{desc}}। স্থান: {{place}}। উক্ত চেক বইটির অপব্যবহার রোধে বিষয়টি ডায়েরিভুক্ত করার অনুরোধ জানাচ্ছি।" },
        sim: { title: "সিম কার্ড হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, আমার ব্যবহৃত সিম কার্ডটি {{place}} হইতে হারাইয়া গিয়াছে। সিম নম্বর: {{desc}}। সিমটি পুনরায় উত্তোলন করার লক্ষ্যে বিষয়টি থানায় ডায়েরিভুক্ত করার আবেদন জানাচ্ছি।" },
        money: { title: "নগদ টাকা ও মানিব্যাগ হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, {{place}} হইতে আমার ব্যবহৃত মানিব্যাগটি হারাইয়া গিয়াছে। ব্যাগের ভেতর নগদ ........... টাকা এবং {{desc}} ছিল। বিষয়টি আপনার থানায় ডায়েরিভুক্ত করার জন্য অনুরোধ করছি।" },
        deed: { title: "জমির দলিল হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, {{place}} হইতে যাতায়াতের সময় আমার নিম্নবর্ণিত জমির মূল দলিলটি হারাইয়া গিয়াছে। দলিলের বিবরণ: {{desc}}। বিষয়টি ডায়েরিভুক্ত করিয়া পরবর্তী ব্যবস্থা গ্রহণে বাধিত করিবেন।" },
        missing: { title: "ব্যক্তি নিখোঁজ সংবাদ", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, আমার নিকটাত্মীয় {{name}} গত ইংরেজি {{time}} তারিখ হইতে {{place}} হইতে নিখোঁজ রহিয়াছেন। তাঁহার বিবরণ: {{desc}}। সম্ভাব্য সকল স্থানে সন্ধান করিয়াও তাঁহার খোঁজ পাওয়া যায় নাই। বিষয়টি ডায়েরিভুক্ত করার অনুরোধ জানাচ্ছি।" },
        threat: { title: "হুমকি সংক্রান্ত জিডি", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, গত ইংরেজি {{time}} তারিখ হইতে {{place}} এলাকায় কতিপয় অজ্ঞাত ব্যক্তি আমাকে প্রাণনাশের হুমকি প্রদান করিতেছে। বিবরণ: {{desc}}। বর্তমানে আমি নিরাপত্তাহীনতায় ভুগিতেছি। বিষয়টি ডায়েরিভুক্ত করিয়া আইনগত সুরক্ষা প্রদানের অনুরোধ জানাচ্ছি।" },
        land_issue: { title: "জমির সীমানা বিরোধ", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, আমার নিম্নবর্ণিত জমিতে বিবাদীগণ বেআইনিভাবে প্রবেশের চেষ্টা করিতেছে। জমির বিবরণ: {{desc}}। বিষয়টি শান্তি-শৃঙ্খলা বজায় রাখার স্বার্থে থানায় ডায়েরিভুক্ত করার আবেদন জানাচ্ছি।" },
        atm_card: { title: "এটিএম কার্ড হারানো", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, ইংরেজি {{time}} ঘটিকায় {{place}} হইতে আমার ডেবিট/ক্রেডিট কার্ডটি হারাইয়া গিয়াছে। কার্ডের বিবরণ: {{desc}}। বিষয়টি ডায়েরিভুক্ত করার অনুরোধ জানাচ্ছি।" },
        tenant: { title: "ভাড়াটিয়া তথ্য প্রদান", body: "আমি নিম্নস্বাক্ষরকারী অত্র বাড়ির মালিক। আমার বাড়িতে নতুন ভাড়াটিয়া নিয়োগ করা হইয়াছে। ভাড়াটিয়ার নাম ও এনআইডি নম্বর: {{desc}}। ঠিকানা: {{address}}। আইনগত নিয়ম পালনার্থে ভাড়াটিয়ার তথ্য আপনার থানায় ডায়েরিভুক্ত করার আবেদন জানাচ্ছি।" },
        general: { title: "সাধারণ হারানো সংবাদ", body: "আমি নিম্নস্বাক্ষরকারী এই মর্মে জানাচ্ছি যে, ইংরেজি {{time}} ঘটিকায় {{place}} হইতে আমার নিম্নবর্ণিত জিনিসটি হারাইয়া গিয়াছে। বিবরণ: {{desc}}। অনেক খোঁজাখুঁজি করিয়াও পাওয়া যায় নাই। বিষয়টি থানায় সাধারণ ডায়েরিভুক্ত করার অনুরোধ জানাচ্ছি।" }
    },
    en: {
        mobile: { title: "Loss of Mobile Phone", body: "I, the undersigned, would like to report that today at {{time}}, I lost my mobile phone at {{place}}. Mobile Details: {{desc}}. Despite a thorough search, I couldn't find it. I request you to record this in the General Diary (GD)." },
        nid: { title: "Loss of NID Card", body: "I, the undersigned, am reporting that my original National Identity (NID) Card was lost today at {{place}}. NID Details: {{desc}}. This GD is required for future legal procedures. I request you to record this matter." },
        certificate: { title: "Loss of Educational Certificate", body: "I, the undersigned, state that my original educational certificate was lost while traveling through {{place}} at {{time}}. Certificate Details: {{desc}}. Please record this in your station's General Diary." },
        passport: { title: "Loss of International Passport", body: "I, the undersigned, am reporting the loss of my International Passport at {{place}}. Passport No: {{desc}}. To avoid any future legal complications, I request you to record this GD." },
        license: { title: "Loss of Driving License", body: "I, the undersigned, report that my original Driving License was lost at {{place}} around {{time}}. License Details: {{desc}}. I request you to record this information in the GD." },
        bank_cheque: { title: "Loss of Bank Cheque Book", body: "I, the undersigned, report that my bank cheque book has been lost at {{place}}. Bank & A/C Details: {{desc}}. Please record this in the General Diary to prevent misuse." },
        money: { title: "Loss of Cash and Wallet", body: "I, the undersigned, state that I lost my wallet containing cash and documents at {{place}} at {{time}}. Wallet Details: {{desc}}. I request you to record this loss in the GD." },
        general: { title: "General Loss Report", body: "I, the undersigned, report that I lost the following item at {{place}} at {{time}}. Description: {{desc}}. I request you to record this in the General Diary for legal security." }
    }
};

function openGdModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-gd-maker');
    document.getElementById('gdMakerModal').style.display = 'flex';
    setGdLang(gdLang);
}

function closeGdModal() {
    document.getElementById('gdMakerModal').style.display = 'none';
}

function setGdLang(lang) {
    gdLang = lang;
    document.getElementById('gdm-btn-bn').classList.toggle('active', lang === 'bn');
    document.getElementById('gdm-btn-en').classList.toggle('active', lang === 'en');
    const isBN = lang === 'bn';
    
    // UI Labels
    document.getElementById('gdm-ui-title').innerText = isBN ? "পুলিশ জিডি আবেদন রাইটিং" : "Police GD Application Writing";
    document.getElementById('lbl-gdm-temp').innerText = isBN ? 'জিডির বিষয় নির্বাচন করুন' : 'Select GD Subject';
    document.getElementById('lbl-gdm-step1').innerText = isBN ? '১. থানা ও তারিখ' : '1. Station & Date';
    document.getElementById('lbl-gdm-step2').innerText = isBN ? '২. আবেদনকারীর তথ্য' : '2. Applicant Info';
    document.getElementById('lbl-gdm-step3').innerText = isBN ? '৩. হারানো জিনিসের বিবরণ' : '3. Details of Loss';
    
    document.getElementById('gdm-ps-name').placeholder = isBN ? "থানার নাম" : "Police Station Name";
    document.getElementById('gdm-date').placeholder = isBN ? "আবেদনের তারিখ" : "Application Date";
    document.getElementById('gdm-name').placeholder = isBN ? "আপনার পূর্ণ নাম" : "Full Name";
    document.getElementById('gdm-father').placeholder = isBN ? "পিতা/স্বামীর নাম" : "Father/Husband Name";
    document.getElementById('gdm-phone').placeholder = isBN ? "মোবাইল নম্বর" : "Mobile Number";
    document.getElementById('gdm-address').placeholder = isBN ? "পূর্ণ ঠিকানা (গ্রাম, ডাকঘর, উপজেলা, জেলা)" : "Full Address";
    document.getElementById('gdm-lost-place').placeholder = isBN ? "কোথা থেকে হারিয়েছে?" : "Place of loss?";
    document.getElementById('gdm-lost-time').placeholder = isBN ? "কখন হারিয়েছে? (সময় ও তারিখ)" : "Time & Date of loss?";
    document.getElementById('gdm-lost-desc').placeholder = isBN ? "ব্র্যান্ড, আইডি নম্বর বা অন্যান্য বিবরণ" : "Brand, ID No, or details";
    
    document.getElementById('btn-gdm-print').querySelector('span').innerText = isBN ? "প্রিন্ট করুন (A4)" : "Print (A4)";
    document.getElementById('btn-gdm-reset').querySelector('span').innerText = isBN ? "সব মুছুন" : "Clear All";

    const select = document.getElementById('gdm-template-select');
    select.innerHTML = '';
    const data = gdTemplates[lang];
    for (let key in data) {
        let opt = document.createElement('option');
        opt.value = key; opt.innerText = data[key].title;
        select.appendChild(opt);
    }
    applyGdTemplate(select.value);
}

function applyGdTemplate(key) {
    window.currentGdKey = key;
    updateGd();
}

function toGdN(n) {
    if (gdLang !== 'bn') return n;
    const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return n.toString().replace(/\d/g, x => d[x]);
}

function updateGd() {
    const val = (id) => document.getElementById(id).value;
    const data = gdTemplates[gdLang][window.currentGdKey] || gdTemplates[gdLang]['general'];
    
    const ps = val('gdm-ps-name') || ".......";
    const date = val('gdm-date') || "01/01/2026";
    const name = val('gdm-name') || ".......";
    const father = val('gdm-father') || ".......";
    const phone = val('gdm-phone') || ".......";
    const addr = val('gdm-address') || ".......";
    const place = val('gdm-lost-place') || ".......";
    const time = val('gdm-lost-time') || ".......";
    const desc = val('gdm-lost-desc') || ".......";

    let bodyText = data.body
        .replace(/{{time}}/g, `<b>${time}</b>`)
        .replace(/{{place}}/g, `<b>${place}</b>`)
        .replace(/{{desc}}/g, `<b>${desc}</b>`)
        .replace(/{{name}}/g, `<b>${name}</b>`)
        .replace(/{{address}}/g, `<b>${addr}</b>`);

    const html = `
        <div style="font-size:16px; line-height:1.8; color:#000;">
            <p>${gdLang === 'bn' ? 'তারিখ:' : 'Date:'} ${toGdN(date)}</p>
            <p>${gdLang === 'bn' ? 'বরাবর,<br>ভারপ্রাপ্ত কর্মকর্তা' : 'To,<br>The Officer In Charge'}<br>
            ${ps} ${gdLang === 'bn' ? 'থানা, বাংলাদেশ।' : 'Police Station, Bangladesh.'}</p>
            
            <p><b>${gdLang === 'bn' ? 'বিষয়: সাধারণ ডায়েরি (GD) করার জন্য আবেদন।' : 'Subject: Prayer for recording a General Diary (GD).'}</b></p>
            
            <p>${gdLang === 'bn' ? 'জনাব,' : 'Sir,'}</p>
            <p style="text-align:justify;">${bodyText}</p>
            
            <p style="margin-top:25px;">${gdLang === 'bn' ? 'আবেদনকারীর তথ্য:' : "Applicant's Details:"}<br>
            ${gdLang === 'bn' ? 'নাম:' : 'Name:'} ${name}<br>
            ${gdLang === 'bn' ? 'পিতা/স্বামী:' : 'Father/Husband:'} ${father}<br>
            ${gdLang === 'bn' ? 'ঠিকানা:' : 'Address:'} ${addr}</p>

            <div style="margin-top:60px;">
                <p>${gdLang === 'bn' ? 'বিনীত নিবেদক,' : 'Sincerely Yours,'}</p>
                <br>
                <p>____________________<br>
                (${name})<br>
                ${gdLang === 'bn' ? 'মোবাইল:' : 'Mobile:'} ${toGdN(phone)}</p>
            </div>
        </div>
    `;

    document.getElementById('gdm-render-area').innerHTML = html;
}

function printGd() {
    const printContent = document.getElementById('gdm-render-area').innerHTML;
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write('<html><head><title>Print GD Application</title>');
    printWindow.document.write('<link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">');
    printWindow.document.write('<style>body{margin:0;padding:0;background:#fff;}#wrap{width:210mm;height:297mm;padding:25mm;box-sizing:border-box;font-family:"SolaimanLipi",Arial,sans-serif!important;}</style></head><body>');
    printWindow.document.write('<div id="wrap">' + printContent + '</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 700);
}

function resetGd() {
    document.querySelectorAll('#gdm-input-panel input, #gdm-input-panel textarea').forEach(i => i.value = "");
    updateGd();
}
;

let rtLang = "bn";
let rtPeriods = ["1st", "2nd", "3rd", "4th"];
let rtDaysKeys = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let rtData = {}; 

const bnSuffixMap = {
    1: "ম", 2: "য়", 3: "য়", 4: "র্থ", 5: "ম", 6: "ষ্ঠ", 7: "ম", 8: "ম", 9: "ম", 10: "ম",
    11: "শ", 12: "শ", 13: "শ", 14: "শ", 15: "শ"
};
const enSuffixMap = { 1: "st", 2: "nd", 3: "rd" };

function openRoutineModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-routine-maker');
    document.getElementById('routineMakerModal').style.display = 'flex';
    initializeRtData();
    setRtLang(rtLang);
}

function closeRoutineModal() {
    document.getElementById('routineMakerModal').style.display = 'none';
}

function initializeRtData() {
    rtDaysKeys.forEach(day => {
        if (!rtData[day]) rtData[day] = {};
        rtPeriods.forEach(p => {
            if (!rtData[day][p]) rtData[day][p] = "";
        });
    });
}

function formatPeriodName(n, lang) {
    let num = parseInt(n);
    if (isNaN(num)) return n;
    if (lang === 'bn') {
        const digits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
        let bnNum = num.toString().replace(/\d/g, d => digits[d]);
        return bnNum + (bnSuffixMap[num] || "তম");
    } else {
        return num + (enSuffixMap[num] || "th");
    }
}

function setRtLang(lang) {
    rtLang = lang;
    document.getElementById('rt-btn-bn').classList.toggle('active', lang === 'bn');
    document.getElementById('rt-btn-en').classList.toggle('active', lang === 'en');

    const ui = {
        bn: {
            title: "ক্লাস রুটিন মেকার", step1: "১. প্রতিষ্ঠানের তথ্য", step2: "২. পিরিয়ড ও সময়", step3: "৩. বিষয় বিন্যাস",
            inst: "প্রতিষ্ঠানের নাম", head: "রুটিনের শিরোনাম", cls: "শ্রেণি", ver: "শাখা/সেকশন",
            addP: "+ পিরিয়ড যোগ করুন", print: "প্রিন্ট করুন (A4)", reset: "সব মুছুন", 
            days: ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"]
        },
        en: {
            title: "Class Routine Maker", step1: "1. Institution Details", step2: "2. Periods & Time", step3: "3. Subjects Grid",
            inst: "Institution Name", head: "Routine Title", cls: "Class", ver: "Section/Shift",
            addP: "+ Add Period", print: "Print (A4)", reset: "Clear All", 
            days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }
    };

    document.getElementById('rt-main-title').innerText = ui[lang].title;
    document.getElementById('lbl-rt-step1').innerText = ui[lang].step1;
    document.getElementById('lbl-rt-step2').innerText = ui[lang].step2;
    document.getElementById('lbl-rt-step3').innerText = ui[lang].step3;
    document.getElementById('rt-inst-name').placeholder = ui[lang].inst;
    document.getElementById('rt-sub-title').placeholder = ui[lang].head;
    document.getElementById('rt-class-info').placeholder = ui[lang].cls;
    document.getElementById('rt-version-info').placeholder = ui[lang].ver;
    document.getElementById('btn-add-period').innerText = ui[lang].addP;
    document.getElementById('btn-rt-print').innerHTML = `<i class='fa-solid fa-print'></i> ${ui[lang].print}`;
    document.getElementById('btn-rt-reset').innerHTML = `<i class='fa-solid fa-trash-can'></i> ${ui[lang].reset}`;

    renderRtInputs();
    updateRoutine();
}

function addRtPeriod() {
    if (rtPeriods.length >= 15) return;
    let n = rtPeriods.length + 1;
    rtPeriods.push(n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : n + "th");
    initializeRtData();
    renderRtInputs();
    updateRoutine();
}

function renderRtInputs() {
    const pContainer = document.getElementById('rt-periods-container');
    pContainer.innerHTML = "";
    rtPeriods.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = "rt-input-row";
        div.innerHTML = `<input value="${formatPeriodName(i + 1, rtLang)}" oninput="rtPeriods[${i}]=this.value; updateRoutine()"/>
                         <button onclick="rtPeriods.splice(${i},1); renderRtInputs(); updateRoutine()" style="border:none; background:#fee2e2; color:red; cursor:pointer;">&times;</button>`;
        pContainer.appendChild(div);
    });

    const dContainer = document.getElementById('rt-days-container');
    dContainer.innerHTML = "";
    const dayLabels = rtLang === 'bn' ? ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"] : ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
    rtDaysKeys.forEach((dayKey, dIdx) => {
        const div = document.createElement('div');
        div.className = "rt-day-box";
        let html = `<p style="margin:0 0 8px; font-weight:800; font-size:12px; color:#4b5563;">${dayLabels[dIdx]}</p>
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap:5px;">`;
        rtPeriods.forEach((p, i) => {
            html += `<input placeholder="${formatPeriodName(i+1, rtLang)}" value="${rtData[dayKey][p] || ''}" oninput="rtData['${dayKey}']['${p}']=this.value; updateRoutine()"/>`;
        });
        html += `</div>`;
        div.innerHTML = html;
        dContainer.appendChild(div);
    });
}

function toBnN(n) {
    if (rtLang !== 'bn') return n;
    return n.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
}

function updateRoutine() {
    const inst = document.getElementById('rt-inst-name').value || (rtLang === 'bn' ? "প্রতিষ্ঠানের নাম" : "Institution Name");
    const head = document.getElementById('rt-sub-title').value || (rtLang === 'bn' ? "রুটিনের শিরোনাম" : "Routine Title");
    const cls = document.getElementById('rt-class-info').value;
    const ver = document.getElementById('rt-version-info').value;
    const dayLabels = rtLang === 'bn' ? ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"] : ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    let html = `<div style="text-align:center; border-bottom:2px solid #000; padding-bottom:8px; margin-bottom:10px;">
                    <h1 style="margin:0; font-size:18px; font-weight:900;">${inst}</h1>
                    <h2 style="margin:2px 0; font-size:14px;">${head}</h2>
                    <div style="display:flex; justify-content:center; gap:20px; font-weight:bold; font-size:12px; margin-top:3px;">
                        <span>${rtLang === 'bn' ? 'শ্রেণি:' : 'Class:'} ${cls || '...'}</span>
                        <span>${rtLang === 'bn' ? 'শাখা:' : 'Section:'} ${ver || '...'}</span>
                    </div>
                </div>
                <table><thead><tr><th style="width:70px;">${rtLang === 'bn' ? 'দিন/বার' : 'Day'}</th>`;
    rtPeriods.forEach((p, i) => { html += `<th>${formatPeriodName(i + 1, rtLang)}</th>`; });
    html += `</tr></thead><tbody>`;

    rtDaysKeys.forEach((dayKey, i) => {
        html += `<tr><td><b>${dayLabels[i]}</b></td>`;
        rtPeriods.forEach(p => { html += `<td>${rtData[dayKey][p] || ''}</td>`; });
        html += `</tr>`;
    });
    html += `</tbody></table>`;
    document.getElementById('rt-render-area').innerHTML = html;
}

function printRoutinePaper() {
    const content = document.getElementById('rt-render-area').innerHTML;
    const pWin = window.open('', '', 'height=1100,width=850');
    pWin.document.write('<html><head><title>Routine Print</title>');
    pWin.document.write('<link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">');
    pWin.document.write(`<style>
        body{margin:0;padding:0;background:#fff;}
        #p-wrap{ width: 210mm; height: 297mm; padding: 20mm; box-sizing: border-box; font-family:"SolaimanLipi", Arial, sans-serif!important; }
        table{width:100%; border-collapse:collapse; table-layout:fixed; margin-top:15px;}
        th, td{border:1px solid #000; padding:6px; text-align:center; font-size:12px; font-family:"SolaimanLipi", Arial, sans-serif!important;}
        h1{font-size:22px; margin:0; text-align:center;} h2{font-size:16px; text-align:center;}
        @page { size: A4 portrait; margin: 0; }
    </style></head><body>`);
    pWin.document.write('<div id="p-wrap">' + content + '</div>');
    pWin.document.write('</body></html>');
    pWin.document.close();
    setTimeout(() => { pWin.print(); pWin.close(); }, 1000);
}

function resetRoutineTool() {
    document.querySelectorAll('#routineMakerModal input').forEach(i => i.value = "");
    rtData = {}; initializeRtData(); renderRtInputs(); updateRoutine();
}
;

let propLang = "bn";

function openPropModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-property-calc');
    document.getElementById('propertyCalcModal').style.display = 'flex';
    setPropLang(propLang);
}

function closePropModal() {
    document.getElementById('propertyCalcModal').style.display = 'none';
}

function toPropN(n) {
    if (propLang !== 'bn') return n.toLocaleString();
    const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return n.toString().replace(/\d/g, x => d[x]);
}

function setPropLang(lang) {
    propLang = lang;
    document.getElementById('prop-bn-btn').classList.toggle('active', lang === 'bn');
    document.getElementById('prop-en-btn').classList.toggle('active', lang === 'en');
    
    const ui = {
        bn: {
            title: "সম্পত্তি বন্টন ক্যালকুলেটর (ফারায়েজ)",
            step1: "১. সম্পত্তির বিবরণ", step2: "২. জীবিত উত্তরাধিকারীগণ",
            land: "মোট জমি (শতাংশ)", cash: "মোট টাকা (নগদ)",
            wife: "স্ত্রী", husband: "স্বামী", son: "পুত্র", daughter: "কন্যা", father: "পিতা", mother: "মাতা",
            note: "<b>নির্দেশনা:</b> মৃত ব্যক্তির স্ত্রী, স্বামী, সন্তান বা পিতা-মাতা যারা বেঁচে আছেন তাদের পাশে টিক দিন এবং সংখ্যা লিখুন।",
            btnP: "প্রিন্ট রিপোর্ট", btnR: "সব মুছুন"
        },
        en: {
            title: "Property Distribution Calculator (Farayez)",
            step1: "1. Property Details", step2: "2. Living Heirs",
            land: "Total Land (Decimal)", cash: "Total Money (Cash)",
            wife: "Wife", husband: "Husband", son: "Son", daughter: "Daughter", father: "Father", mother: "Mother",
            note: "<b>Note:</b> Check the heirs who are alive and enter their quantity to calculate the shares.",
            btnP: "Print Report", btnR: "Clear All"
        }
    };

    const d = ui[lang];
    document.getElementById('prop-ui-title').innerText = d.title;
    document.getElementById('lbl-prop-step1').innerText = d.step1;
    document.getElementById('lbl-prop-step2').innerText = d.step2;
    document.getElementById('lbl-prop-land').innerText = d.land;
    document.getElementById('lbl-prop-cash').innerText = d.cash;
    document.getElementById('t-wife').innerText = d.wife;
    document.getElementById('t-husband').innerText = d.husband;
    document.getElementById('t-son').innerText = d.son;
    document.getElementById('t-daughter').innerText = d.daughter;
    document.getElementById('t-father').innerText = d.father;
    document.getElementById('t-mother').innerText = d.mother;
    document.getElementById('prop-info-note').innerHTML = d.note;
    document.getElementById('btn-prop-print').innerHTML = `<i class='fa-solid fa-print'></i> ${d.btnP}`;
    document.getElementById('btn-prop-reset').innerHTML = `<i class='fa-solid fa-trash-can'></i> ${d.btnR}`;

    calculateFarayez();
}

function calculateFarayez() {
    const land = parseFloat(document.getElementById('prop-land').value) || 0;
    const cash = parseFloat(document.getElementById('prop-cash').value) || 0;

    const wife = document.getElementById('h-wife').checked;
    const husband = document.getElementById('h-husband').checked;
    const father = document.getElementById('h-father').checked;
    const mother = document.getElementById('h-mother').checked;
    const hasSon = document.getElementById('h-son').checked;
    const hasDaughter = document.getElementById('h-daughter').checked;

    const qWife = parseInt(document.getElementById('q-wife').value) || 1;
    const qSon = parseInt(document.getElementById('q-son').value) || 0;
    const qDaughter = parseInt(document.getElementById('q-daughter').value) || 0;

    let heirs = [];
    let residue = 1.0;

    if (wife) {
        let share = (hasSon || hasDaughter) ? (1/8) : (1/4);
        heirs.push({ label: propLang==='bn'?'স্ত্রী':'Wife', count: qWife, totalShare: share });
        residue -= share;
    }

    if (husband) {
        let share = (hasSon || hasDaughter) ? (1/4) : (1/2);
        heirs.push({ label: propLang==='bn'?'স্বামী':'Husband', count: 1, totalShare: share });
        residue -= share;
    }

    if (mother) {
        let share = (hasSon || hasDaughter) ? (1/6) : (1/3);
        heirs.push({ label: propLang==='bn'?'মাতা':'Mother', count: 1, totalShare: share });
        residue -= share;
    }

    if (father) {
        let share = (hasSon || hasDaughter) ? (1/6) : 0; 
        if (share > 0) {
            heirs.push({ label: propLang==='bn'?'পিতা':'Father', count: 1, totalShare: share });
            residue -= share;
        }
    }

    if (hasSon || hasDaughter || (father && residue > 0)) {
        let totalUnits = (qSon * 2) + (qDaughter * 1);
        
        if (totalUnits === 0 && father) {
            let pIdx = heirs.findIndex(h => h.label === (propLang==='bn'?'পিতা':'Father'));
            if (pIdx !== -1) heirs[pIdx].totalShare += residue;
            else heirs.push({ label: propLang==='bn'?'পিতা':'Father', count: 1, totalShare: residue });
            residue = 0;
        } else if (totalUnits > 0) {
            let unitValue = residue / totalUnits;
            if (hasSon) heirs.push({ label: propLang==='bn'?'পুত্র':'Son', count: qSon, totalShare: unitValue * 2 * qSon });
            if (hasDaughter) heirs.push({ label: propLang==='bn'?'কন্যা':'Daughter', count: qDaughter, totalShare: unitValue * qDaughter });
            residue = 0;
        }
    }

    renderPropReport(heirs, land, cash);
}

function renderPropReport(heirs, land, cash) {
    const area = document.getElementById('prop-print-area');
    const labels = propLang === 'bn' ? 
        { h1: "উত্তরাধিকার বন্টননামা রিপোর্ট", h3: "সম্পত্তি বন্টনের বিস্তারিত হিসাব", th1: "উত্তরাধিকারী", th2: "অংশ", th3: "জমি (শতাংশ)", th4: "টাকা (নগদ)", empty: "উত্তরাধিকারী নির্বাচন করুন।" } :
        { h1: "Inheritance Distribution Report", h3: "Detailed Calculation of Property", th1: "Heir", th2: "Share", th3: "Land (Decimal)", th4: "Cash (Money)", empty: "Please select heirs to calculate." };

    if (heirs.length === 0) {
        area.innerHTML = `<p style="text-align:center; padding:100px; color:#94a3b8;">${labels.empty}</p>`;
        return;
    }

    let rows = "";
    heirs.forEach(h => {
        let pShare = (h.totalShare / h.count);
        rows += `<tr>
            <td>${h.label} ${h.count > 1 ? '('+toPropN(h.count)+')' : ''}</td>
            <td>${(pShare * 100).toFixed(3)}%</td>
            <td>${toPropN((pShare * land).toFixed(2))}</td>
            <td>${toPropN((pShare * cash).toFixed(2))}</td>
        </tr>`;
    });

    area.innerHTML = `
        <h1>${labels.h1}</h1>
        <h3>${labels.h3}</h3>
        <div style="margin-bottom:20px; font-weight:bold;">
            ${propLang === 'bn' ? 'মোট জমি:' : 'Total Land:'} ${toPropN(land)} | 
            ${propLang === 'bn' ? 'মোট নগদ:' : 'Total Cash:'} ${toPropN(cash)}
        </div>
        <table class="prop-table">
            <thead>
                <tr>
                    <th>${labels.th1}</th>
                    <th>${labels.th2}</th>
                    <th>${labels.th3}</th>
                    <th>${labels.th4}</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
        <div style="margin-top:50px; border-top:1px solid #ddd; padding-top:10px; font-size:12px; color:#666; text-align:center;">
            Generated by: ID Card Scanner Pro - www.idcardscannerpro.com
        </div>
    `;
}

function printPropPaper() {
    const printContent = document.getElementById('prop-print-area').innerHTML;
    const distName = document.getElementById('ram-district-select') ? document.getElementById('ram-district-select').value : '';
    
    const pWin = window.open('', '', 'height=900,width=1000');
    
    pWin.document.write('<html><head><title>Inheritance Report - www.idcardscannerpro.com</title>');
    
    pWin.document.write('<link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">');
    
    pWin.document.write('<style>');
    pWin.document.write(`
        body { margin: 0; padding: 0; background: #fff; }
        #p-wrapper { 
            width: 210mm; 
            min-height: 297mm; 
            padding: 20mm; 
            box-sizing: border-box; 
            font-family: "SolaimanLipi", Arial, sans-serif !important;
            color: #000;
        }
        h1 { font-size: 26px; text-align: center; margin-bottom: 5px; color: #059669; }
        h3 { font-size: 18px; text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
        .prop-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .prop-table th, .prop-table td { border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; font-size: 15px; }
        thead { background: #f2f2f2 !important; -webkit-print-color-adjust: exact; }
        @page { size: A4; margin: 0; }
        .footer-note { margin-top: 50px; text-align: center; font-size: 12px; border-top: 1px solid #ddd; padding-top: 10px; }
    `);
    pWin.document.write('</style></head><body>');
    
    pWin.document.write('<div id="p-wrapper">' + printContent + '</div>');
    pWin.document.write('</body></html>');
    
    pWin.document.close();
    
    setTimeout(() => {
        pWin.print();
        pWin.close();
    }, 700);
}

function resetPropTool() {
    document.getElementById('prop-land').value = "";
    document.getElementById('prop-cash').value = "";
    document.querySelectorAll('#propertyCalcModal input[type="checkbox"]').forEach(c => c.checked = false);
    calculateFarayez();
}
;

const psShortcutsData = [
    // --- TOOLS (Single Key) ---
    { key: "V", category: "tool", bn: "মুভ টুল (Move Tool)", en: "Move Tool" },
    { key: "M", category: "tool", bn: "রেকট্যাঙ্গুলার/ইলিপটিক্যাল মার্কুই টুল", en: "Marquee Tool" },
    { key: "L", category: "tool", bn: "ল্যাসো টুল (Lasso/Polygonal/Magnetic)", en: "Lasso Tool" },
    { key: "W", category: "tool", bn: "ম্যাজিক ওয়ান্ড / কুইক সিলেকশন", en: "Magic Wand / Quick Selection" },
    { key: "C", category: "tool", bn: "ক্রপ টুল / স্লাইস টুল", en: "Crop / Slice Tool" },
    { key: "I", category: "tool", bn: "আইড্রপার / রুলার / নোট", en: "Eyedropper / Ruler" },
    { key: "J", category: "tool", bn: "স্পট হিলিং / প্যাচ / কনটেন্ট অ্যাওয়ার", en: "Spot Healing / Patch Tool" },
    { key: "B", category: "tool", bn: "ব্রাশ / পেন্সিল / কালার রিপ্লেসমেন্ট", en: "Brush / Pencil Tool" },
    { key: "S", category: "tool", bn: "ক্লোন স্ট্যাম্প / প্যাটার্ন স্ট্যাম্প", en: "Clone Stamp Tool" },
    { key: "Y", category: "tool", bn: "হিস্ট্রি ব্রাশ / আর্ট হিস্ট্রি ব্রাশ", en: "History Brush Tool" },
    { key: "E", category: "tool", bn: "ইরেজার টুল (Eraser)", en: "Eraser Tool" },
    { key: "G", category: "tool", bn: "গ্রেডিয়েন্ট / পেইন্ট বাকেট", en: "Gradient / Paint Bucket" },
    { key: "O", category: "tool", bn: "ডজ / বার্ন / স্পঞ্জ টুল", en: "Dodge / Burn Tool" },
    { key: "P", category: "tool", bn: "পেন টুল (Pen Tool)", en: "Pen Tool" },
    { key: "T", category: "tool", bn: "টাইপ টুল (Horizontal/Vertical Text)", en: "Type Tool" },
    { key: "A", category: "tool", bn: "পাথ সিলেকশন / ডিরেক্ট সিলেকশন", en: "Path / Direct Selection" },
    { key: "U", category: "tool", bn: "শেপ টুল (Rectangle/Ellipse/Line)", en: "Shape Tool" },
    { key: "K", category: "tool", bn: "ফ্রেম টুল (Frame Tool)", en: "Frame Tool" },
    { key: "H", category: "tool", bn: "হ্যান্ড টুল (Hand Tool)", en: "Hand Tool" },
    { key: "R", category: "tool", bn: "রোটেট ভিউ টুল (Rotate View)", en: "Rotate View Tool" },
    { key: "Z", category: "tool", bn: "জুম টুল (Zoom Tool)", en: "Zoom Tool" },
    { key: "D", category: "tool", bn: "ডিফল্ট কালার (সাদা-কালোর) রিসেট", en: "Default Colors" },
    { key: "X", category: "tool", bn: "ফোরগ্রাউন্ড ও ব্যাকগ্রাউন্ড কালার সুইচ", en: "Switch FG/BG Colors" },
    { key: "Q", category: "tool", bn: "কুইক মাস্ক মোড অন/অফ", en: "Quick Mask Mode" },
    { key: "F", category: "tool", bn: "স্ক্রিন মোড পরিবর্তন (Full Screen)", en: "Change Screen Mode" },
    { key: "Shift + Tool Key", category: "tool", bn: "একই গ্রুপের টুলের মধ্যে সুইচ করা", en: "Cycle Through Hidden Tools" },

    // --- FILE & APP MANAGEMENT ---
    { key: "Ctrl + N", category: "file", bn: "নতুন ফাইল বা ডকুমেন্ট তৈরি", en: "New Document" },
    { key: "Ctrl + O", category: "file", bn: "ফাইল ওপেন করা", en: "Open File" },
    { key: "Ctrl + Alt + O", category: "file", bn: "অ্যাডোবি ব্রিজ থেকে ওপেন", en: "Open in Bridge" },
    { key: "Ctrl + W", category: "file", bn: "বর্তমান ফাইলটি বন্ধ করা", en: "Close Document" },
    { key: "Ctrl + Alt + W", category: "file", bn: "সবগুলো ফাইল একসাথে বন্ধ করা", en: "Close All" },
    { key: "Ctrl + S", category: "file", bn: "ফাইল সেভ করা", en: "Save" },
    { key: "Ctrl + Shift + S", category: "file", bn: "সেভ অ্যাজ (Save As)", en: "Save As" },
    { key: "Ctrl + Alt + S", category: "file", bn: "কপি সেভ করা", en: "Save a Copy" },
    { key: "Ctrl + Shift + Alt + S", category: "file", bn: "ওয়েবের জন্য সেভ করা (Legacy)", en: "Save for Web" },
    { key: "Ctrl + P", category: "file", bn: "প্রিন্ট মেনু ওপেন", en: "Print" },
    { key: "Ctrl + K", category: "file", bn: "প্রেফারেন্স সেটিংস (Preferences)", en: "Preferences" },
    { key: "Ctrl + Q", category: "file", bn: "ফটোশপ থেকে বের হওয়া", en: "Exit Photoshop" },
    { key: "F12", category: "file", bn: "ফাইল রিভার্ট করা (Revert)", en: "Revert File" },

    // --- EDITING & TRANSFORMATION ---
    { key: "Ctrl + Z", category: "edit", bn: "আনডু / রিডু (Undo/Redo)", en: "Undo/Redo" },
    { key: "Ctrl + Alt + Z", category: "edit", bn: "ধাপে ধাপে পেছনে যাওয়া", en: "Step Backward" },
    { key: "Ctrl + Shift + Z", category: "edit", bn: "ধাপে ধাপে সামনে যাওয়া", en: "Step Forward" },
    { key: "Ctrl + C", category: "edit", bn: "কপি করা", en: "Copy" },
    { key: "Ctrl + X", category: "edit", bn: "কাট করা", en: "Cut" },
    { key: "Ctrl + V", category: "edit", bn: "পেস্ট করা", en: "Paste" },
    { key: "Ctrl + Shift + V", category: "edit", bn: "একই জায়গায় পেস্ট করা", en: "Paste in Place" },
    { key: "Ctrl + T", category: "edit", bn: "ফ্রি ট্রান্সফর্ম (ছোট/বড় করা)", en: "Free Transform" },
    { key: "Ctrl + Shift + T", category: "edit", bn: "আগের ট্রান্সফর্ম রিপিট করা", en: "Repeat Last Transform" },
    { key: "Ctrl + Alt + Shift + T", category: "edit", bn: "ট্রান্সফর্ম ডুপ্লিকেট রিপিট", en: "Duplicate & Repeat Transform" },
    { key: "Shift + F5", category: "edit", bn: "ফিল মেনু (Fill)", en: "Fill" },
    { key: "Alt + Backspace", category: "edit", bn: "ফোরগ্রাউন্ড কালার দিয়ে ফিল", en: "Fill with Foreground Color" },
    { key: "Ctrl + Backspace", category: "edit", bn: "ব্যাকগ্রাউন্ড কালার দিয়ে ফিল", en: "Fill with Background Color" },

    // --- IMAGE ADJUSTMENTS ---
    { key: "Ctrl + L", category: "adjust", bn: "লেভেলস ঠিক করা (Levels)", en: "Levels" },
    { key: "Ctrl + M", category: "adjust", bn: "কার্ভস ঠিক করা (Curves)", en: "Curves" },
    { key: "Ctrl + U", category: "adjust", bn: "হিউ / স্যাচুরেশন পরিবর্তন", en: "Hue/Saturation" },
    { key: "Ctrl + B", category: "adjust", bn: "কালার ব্যালেন্স (Color Balance)", en: "Color Balance" },
    { key: "Ctrl + Shift + L", category: "adjust", bn: "অটো লেভেলস (Auto Levels)", en: "Auto Levels" },
    { key: "Ctrl + Shift + Alt + L", category: "adjust", bn: "অটো কন্ট্রাস্ট", en: "Auto Contrast" },
    { key: "Ctrl + Shift + B", category: "adjust", bn: "অটো কালার (Auto Color)", en: "Auto Color" },
    { key: "Ctrl + I", category: "adjust", bn: "কালার ইনভার্ট (উল্টানো)", en: "Invert Color" },
    { key: "Ctrl + Shift + U", category: "adjust", bn: "সাদা-কালোর করা (Desaturate)", en: "Desaturate" },
    { key: "Ctrl + Alt + I", category: "adjust", bn: "ইমেজ সাইজ পরিবর্তন", en: "Image Size" },
    { key: "Ctrl + Alt + C", category: "adjust", bn: "ক্যানভাস সাইজ পরিবর্তন", en: "Canvas Size" },
    { key: "Ctrl + Shift + Alt + B", category: "adjust", bn: "ব্ল্যাক অ্যান্ড হোয়াইট অ্যাডজাস্ট", en: "Black & White" },

    // --- LAYERS ---
    { key: "Ctrl + J", category: "layer", bn: "লেয়ার কপি বা ডুপ্লিকেট করা", en: "Duplicate Layer" },
    { key: "Ctrl + Shift + J", category: "layer", bn: "কাট করে নতুন লেয়ারে নেওয়া", en: "Layer via Cut" },
    { key: "Ctrl + Shift + N", category: "layer", bn: "নতুন লেয়ার তৈরি", en: "New Layer" },
    { key: "Ctrl + G", category: "layer", bn: "লেয়ারগুলো গ্রুপ করা", en: "Group Layers" },
    { key: "Ctrl + Shift + G", category: "layer", bn: "লেয়ারগুলো আনগ্রুপ করা", en: "Ungroup Layers" },
    { key: "Ctrl + E", category: "layer", bn: "নিচের লেয়ারের সাথে যুক্ত করা", en: "Merge Down" },
    { key: "Ctrl + Shift + E", category: "layer", bn: "সব ভিজিবল লেয়ার এক করা", en: "Merge Visible" },
    { key: "Ctrl + Alt + Shift + E", category: "layer", bn: "সব লেয়ার এক করে নতুন লেয়ার", en: "Stamp Visible" },
    { key: "Ctrl + Alt + G", category: "layer", bn: "ক্লিপিং মাস্ক তৈরি/বাতিল", en: "Clipping Mask" },
    { key: "Ctrl + [", category: "layer", bn: "লেয়ার এক ধাপ নিচে নামানো", en: "Send Backward" },
    { key: "Ctrl + ]", category: "layer", bn: "লেয়ার এক ধাপ উপরে উঠানো", en: "Bring Forward" },
    { key: "Ctrl + Shift + [", category: "layer", bn: "লেয়ার সবার নিচে পাঠানো", en: "Send to Back" },
    { key: "Ctrl + Shift + ]", category: "layer", bn: "লেয়ার সবার উপরে আনা", en: "Bring to Front" },
    { key: "Alt + [ / ]", category: "layer", bn: "একটি লেয়ার থেকে অন্য লেয়ারে যাওয়া", en: "Select Layers" },
    { key: "Ctrl + /", category: "layer", bn: "লেয়ার লক বা আনলক করা", en: "Lock/Unlock Layer" },

    // --- SELECTION ---
    { key: "Ctrl + A", category: "select", bn: "সবকিছু সিলেক্ট করা", en: "Select All" },
    { key: "Ctrl + D", category: "select", bn: "সিলেকশন বাতিল (Deselect)", en: "Deselect" },
    { key: "Ctrl + Shift + D", category: "select", bn: "পুনরায় সিলেকশন করা (Reselect)", en: "Reselect" },
    { key: "Ctrl + Shift + I", category: "select", bn: "সিলেকশন উল্টানো (Inverse)", en: "Inverse Selection" },
    { key: "Ctrl + Alt + R", category: "select", bn: "সিলেক্ট অ্যান্ড মাস্ক / রিফাইন এজ", en: "Select and Mask" },
    { key: "Shift + F6", category: "select", bn: "ফেদার সিলেকশন (Feather)", en: "Feather" },

    // --- BRUSH & PAINTING ---
    { key: "[", category: "brush", bn: "ব্রাশের সাইজ কমানো", en: "Decrease Brush Size" },
    { key: "]", category: "brush", bn: "ব্রাশের সাইজ বাড়ানো", en: "Increase Brush Size" },
    { key: "{", category: "brush", bn: "ব্রাশের হার্ডনেস কমানো", en: "Decrease Hardness" },
    { key: "}", category: "brush", bn: "ব্রাশের হার্ডনেস বাড়ানো", en: "Increase Hardness" },
    { key: "0 - 9", category: "brush", bn: "ব্রাশের অপাসিটি পরিবর্তন (১০% - ১০০%)", en: "Change Opacity" },
    { key: "Shift + 0-9", category: "brush", bn: "ব্রাশের ফ্লো (Flow) পরিবর্তন", en: "Change Flow" },
    { key: ",", category: "brush", bn: "আগের ব্রাশে যাওয়া", en: "Previous Brush" },
    { key: ".", category: "brush", bn: "পরের ব্রাশে যাওয়া", en: "Next Brush" },
    { key: "Caps Lock", category: "brush", bn: "প্রিসিশন কার্সার অন/অফ", en: "Precise Cursor" },

    // --- VIEW & NAVIGATION ---
    { key: "Ctrl + R", category: "view", bn: "রুলার (Ruler) দেখানো বা লুকানো", en: "Rulers" },
    { key: "Ctrl + ;", category: "view", bn: "গাইড (Guides) দেখানো বা লুকানো", en: "Show Guides" },
    { key: "Ctrl + '", category: "view", bn: "গ্রিড (Grid) দেখানো বা লুকানো", en: "Show Grid" },
    { key: "Ctrl + 0", category: "view", bn: "স্ক্রিনের সাথে ইমেজ ফিট করা", en: "Fit on Screen" },
    { key: "Ctrl + 1", category: "view", bn: "আসল সাইজে দেখা (100%)", en: "Actual Pixels" },
    { key: "Ctrl + +", category: "view", bn: "জুম ইন (Zoom In)", en: "Zoom In" },
    { key: "Ctrl + -", category: "view", bn: "জুম আউট (Zoom Out)", en: "Zoom Out" },
    { key: "Spacebar (Hold)", category: "view", bn: "হ্যান্ড টুল নেভিগেশন", en: "Hand Tool (Hold)" },
    { key: "Tab", category: "view", bn: "সব প্যানেল লুকানো বা দেখানো", en: "Show/Hide Panels" },
    { key: "Shift + Tab", category: "view", bn: "শুধুমাত্র টুলবার ও ডান পাশের প্যানেল লুকানো", en: "Hide Side Panels" },

    // --- BLENDING MODES ---
    { key: "Shift + +", category: "blend", bn: "ব্লেন্ডিং মোড পরেরটিতে যাওয়া", en: "Next Blending Mode" },
    { key: "Shift + -", category: "blend", bn: "ব্লেন্ডিং মোড আগেরটিতে যাওয়া", en: "Previous Blending Mode" },
    { key: "Shift + Alt + N", category: "blend", bn: "নরমাল মোড (Normal Mode)", en: "Normal Mode" },
    { key: "Shift + Alt + M", category: "blend", bn: "মাল্টিপ্লাই মোড (Multiply)", en: "Multiply Mode" },
    { key: "Shift + Alt + S", category: "blend", bn: "স্ক্রিন মোড (Screen)", en: "Screen Mode" },
    { key: "Shift + Alt + O", category: "blend", bn: "ওভারলে মোড (Overlay)", en: "Overlay Mode" },
    { key: "Shift + Alt + H", category: "blend", bn: "হার্ড লাইট (Hard Light)", en: "Hard Light" },
    { key: "Shift + Alt + C", category: "blend", bn: "কালার মোড (Color)", en: "Color Blending" },

    // --- TEXT & TYPOGRAPHY ---
    { key: "Ctrl + Shift + L", category: "text", bn: "টেক্সট বামে রাখা (Align Left)", en: "Align Left" },
    { key: "Ctrl + Shift + C", category: "text", bn: "টেক্সট মাঝে রাখা (Align Center)", en: "Align Center" },
    { key: "Ctrl + Shift + R", category: "text", bn: "টেক্সট ডানে রাখা (Align Right)", en: "Align Right" },
    { key: "Ctrl + Shift + >", category: "text", bn: "টেক্সটের সাইজ বাড়ানো", en: "Increase Font Size" },
    { key: "Ctrl + Shift + <", category: "text", bn: "টেক্সটের সাইজ কমানো", en: "Decrease Font Size" },
    { key: "Alt + ↓ / ↑", category: "text", bn: "লাইন স্পেসিং পরিবর্তন (Leading)", en: "Change Leading" },
    { key: "Ctrl + Enter", category: "text", bn: "টেক্সট টাইপ সম্পন্ন করা (Commit)", en: "Commit Text Edit" },

    // --- FILTERS & SPECIAL ---
    { key: "Ctrl + Shift + X", category: "filter", bn: "লিকুইফাই ফিল্টার (Liquify)", en: "Liquify Filter" },
    { key: "Ctrl + Shift + A", category: "filter", bn: "ক্যামেরা র ফিল্টার (Camera Raw)", en: "Camera Raw Filter" },
    { key: "Ctrl + Alt + V", category: "filter", bn: "ভ্যানিশিং পয়েন্ট", en: "Vanishing Point" },
    { key: "Ctrl + F", category: "filter", bn: "সবশেষে ব্যবহৃত ফিল্টার আবার দেওয়া", en: "Apply Last Filter" }
];

let psLang = "bn";
let currentPsCat = "all";

function openPsShortcutsModal() {
    if(typeof setActiveMode === "function") setActiveMode('mode-ps-shortcuts');
    document.getElementById('psShortcutsModal').style.display = 'flex';
    renderPsShortcuts(psShortcutsData);
}

function closePsModal() {
    document.getElementById('psShortcutsModal').style.display = 'none';
}

function setPsLang(lang) {
    psLang = lang;
    document.getElementById('ps-btn-bn').classList.toggle('active', lang === 'bn');
    document.getElementById('ps-btn-en').classList.toggle('active', lang === 'en');
    
    const ui = {
        bn: { title: "ফটোশপ মাস্টার শর্টকাট", placeholder: "টুল বা কমান্ড লিখে সার্চ করুন..." },
        en: { title: "Photoshop Master Shortcuts", placeholder: "Search for tool or command..." }
    };
    
    document.getElementById('ps-ui-title').innerText = ui[lang].title;
    document.getElementById('ps-search-input').placeholder = ui[lang].placeholder;
    filterPsShortcuts();
}

function renderPsShortcuts(data) {
    const container = document.getElementById("ps-master-grid");
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "ps-card-item";
        card.innerHTML = `
            <div class="ps-key-box">${item.key}</div>
            <div class="ps-desc-text">${psLang === 'bn' ? item.bn : item.en}</div>
        `;
        container.appendChild(card);
    });
}

function filterPsByCategory(cat) {
    currentPsCat = cat;
    document.querySelectorAll('.ps-cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase().includes(cat));
    });
    filterPsShortcuts();
}

function filterPsShortcuts() {
    const query = document.getElementById('ps-search-input').value.toLowerCase();
    const filtered = psShortcutsData.filter(item => {
        const matchesQuery = item.bn.toLowerCase().includes(query) || 
                             item.en.toLowerCase().includes(query) || 
                             item.key.toLowerCase().includes(query);
        const matchesCat = currentPsCat === "all" || item.category === currentPsCat;
        return matchesQuery && matchesCat;
    });
    renderPsShortcuts(filtered);
}
;

let salList = [];
let salLogoData = null;
let salLanguage = "bn";
let salOrientation = "p";

function openSalModal() {
    document.getElementById('salaryMakerModal').style.display = 'flex';
    if(typeof setActiveMode === "function") setActiveMode('mode-salary');
    
    if (salList.length === 0) {
        const defaultName = salLanguage === 'bn' ? "নাম লিখুন" : "Enter Name";
        const defaultDesig = salLanguage === 'bn' ? "পদবী" : "Designation";
        salList = [["1", defaultName, defaultDesig, "0", "0", "0", "0", "0"]];
    }
    setSalLang(salLanguage);
}

function closeSalModal() {
    document.getElementById('salaryMakerModal').style.display = 'none';
}

function setSalLang(lang) {
    salLanguage = lang;
    document.getElementById('sal-btn-bn').classList.toggle('active', lang === 'bn');
    document.getElementById('sal-btn-en').classList.toggle('active', lang === 'en');
    
    salList.forEach(row => {
        if (lang === 'en') {
            if (row[1] === "নাম লিখুন") row[1] = "Enter Name";
            if (row[2] === "পদবী") row[2] = "Designation";
        } else {
            if (row[1] === "Enter Name") row[1] = "নাম লিখুন";
            if (row[2] === "Designation") row[2] = "পদবী";
        }
    });

    const ui = {
        bn: {
            title: "স্যালারি শীট মেকার",
            step1: "১. প্রতিষ্ঠানের তথ্য",
            step2: "২. সেটিংস",
            inst: "প্রতিষ্ঠানের নাম লিখুন",
            month: "মাস ও বছর (উদা: জানুয়ারি - ২০২৬)",
            add: "+ কর্মচারী যোগ",
            print: "প্রিন্ট",
            reset: "রিসেট",
            orientP: "লম্বালম্বি প্রিন্ট (P)",
            orientL: "আড়াআড়ি প্রিন্ট (L)"
        },
        en: {
            title: "Salary Sheet Maker",
            step1: "1. Institution Info",
            step2: "2. Settings",
            inst: "Enter Institution Name",
            month: "Month & Year (e.g. Jan - 2026)",
            add: "+ Add Employee",
            print: "Print",
            reset: "Reset",
            orientP: "Portrait Print (P)",
            orientL: "Landscape Print (L)"
        }
    };

    document.getElementById('sal-ui-title').innerText = ui[lang].title;
    document.getElementById('lbl-sal-step1').innerText = ui[lang].step1;
    document.getElementById('lbl-sal-step2').innerText = ui[lang].step2;
    document.getElementById('sal-inst-name').placeholder = ui[lang].inst;
    document.getElementById('sal-sub-title').placeholder = ui[lang].month;
    document.getElementById('btn-add-sal').innerText = ui[lang].add;
    document.getElementById('btn-sal-print-ui').innerHTML = `<i class='fa-solid fa-print'/> ${ui[lang].print}`;
    document.getElementById('btn-sal-reset-ui').innerHTML = `<i class='fa-solid fa-trash-can'/> ${ui[lang].reset}`;
    
    const sel = document.getElementById('sal-orient');
    sel.options[0].text = ui[lang].orientP;
    sel.options[1].text = ui[lang].orientL;

    drawSal();
}

function loadSalLogo(event) {
    const reader = new FileReader();
    reader.onload = (e) => {
        salLogoData = e.target.result;
        document.getElementById('sal-logo-pv').src = salLogoData;
        document.getElementById('sal-logo-pv').style.display = 'block';
        document.getElementById('sal-plus-ico').style.display = 'none';
        drawSal();
    };
    reader.readAsDataURL(event.target.files[0]);
}

function addSalRow() {
    let sl = salList.length + 1;
    salList.push([sl.toString(), "", "", "0", "0", "0", "0", "0"]);
    drawSal();
}

function updateSalData(r, c, val) {
    salList[r][c] = val;
    if (c >= 3 && c <= 6) {
        let b = parseFloat(salList[r][3]) || 0;
        let a = parseFloat(salList[r][4]) || 0;
        let bo = parseFloat(salList[r][5]) || 0;
        let d = parseFloat(salList[r][6]) || 0;
        salList[r][7] = (b + a + bo - d).toString();
    }
    drawSal();
}

function toSalBN(n) {
    if (salLanguage !== 'bn') return n;
    return n.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
}

function setSalOrient(orient) {
    salOrientation = orient;
    drawSal();
}

function drawSal() {
    const inst = document.getElementById('sal-inst-name').value || (salLanguage === 'bn' ? "প্রতিষ্ঠানের নাম" : "Institution Name");
    const sub = document.getElementById('sal-sub-title').value || (salLanguage === 'bn' ? "বেতন তালিকা - ২০২৬" : "Salary Sheet - 2026");
    const renderArea = document.getElementById('sal-render-area');
    renderArea.className = salOrientation === 'p' ? 'sal-p-size' : 'sal-l-size';

    const headers = salLanguage === 'bn' ? 
        ["ক্র.নং", "নাম", "পদবী", "মূল বেতন", "ভাতা", "বোনাস", "কর্তন", "নিট বেতন"] : 
        ["SL", "Name", "Designation", "Basic", "Allow.", "Bonus", "Deduc.", "Net Pay"];

    let table = `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    salList.forEach((row, rIdx) => {
        table += '<tr>';
        row.forEach((cell, cIdx) => {
            const isReadonly = (cIdx === 0 || cIdx === 7);
            const displayValue = (cIdx >= 3) ? toSalBN(cell) : (cIdx === 0 ? toSalBN(cell) : cell);
            table += `<td ${!isReadonly ? 'contenteditable="true"' : ''} onblur="updateSalData(${rIdx}, ${cIdx}, this.innerText)">${displayValue}</td>`;
        });
        table += '</tr>';
    });
    table += '</tbody></table>';

    renderArea.innerHTML = `
        <div style="text-align:center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
            ${salLogoData ? `<img src="${salLogoData}" style="height:50px; margin-bottom:5px;">` : ''}
            <h1 style="margin:0; font-size:22px; font-weight:900;">${inst}</h1>
            <h2 style="margin:5px 0 0; font-size:16px; color:#333;">${sub}</h2>
        </div>
        ${table}
        <div style="margin-top:60px; display:flex; justify-content:space-between; font-weight:bold; font-size:13px; padding: 0 30px;">
            <div style="text-align:center; border-top:1px solid #000; width:150px; padding-top:5px;">${salLanguage==='bn'?'ক্যাশিয়ার':'Cashier'}</div>
            <div style="text-align:center; border-top:1px solid #000; width:150px; padding-top:5px;">${salLanguage==='bn'?'অধ্যক্ষ/মালিক':'Owner/Principal'}</div>
        </div>`;
}

function printSalPaper() {
    const content = document.getElementById('sal-render-area').innerHTML;
    const isL = salOrientation === 'l';
    const pWin = window.open('', '', 'height=850,width=1100');
    pWin.document.write('<html><head><title>Salary Sheet</title>');
    pWin.document.write('<link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet">');
    // প&#2509;র&#2495;ন&#2509;ট সিএসএস য&#2494; অট&#2507;ম&#2503;ট&#2495;ক ম&#2494;র&#2509;জ&#2495;ন ও প&#2503;জ ব&#2509;র&#2503;ক ম&#2503;ইনট&#2503;ইন করব&#2503;
    pWin.document.write(`<style>
        @import url('https://fonts.maateen.me/solaiman-lipi/font.css');
        body { margin: 0; padding: 0; background: #fff; }
        #p-wrap { 
            width: ${isL ? '297mm' : '210mm'}; 
            padding: 15mm; 
            margin: 0 auto;
            box-sizing: border-box; 
            font-family: "SolaimanLipi", Arial, sans-serif !important;
        }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; border: 1.5px solid #000; table-layout: auto; page-break-inside: auto; }
        tr { page-break-inside: avoid; page-break-after: auto; }
        th, td { border: 1px solid #000; padding: 6px; font-size: 13px; text-align: center; color: #000; }
        thead { display: table-header-group; background: #f2f2f2; }
        @page { size: A4 ${isL ? 'landscape' : 'portrait'}; margin: 15mm 10mm; }
    </style></head><body><div id="p-wrap">${content}</div></body></html>`);
    pWin.document.close();
    setTimeout(() => { pWin.print(); pWin.close(); }, 800);
}

function resetSalTool() {
    document.getElementById('sal-inst-name').value = "";
    document.getElementById('sal-sub-title').value = "";
    salLogoData = null;
    
    document.getElementById('fq-logo-pv').style.display = 'none';
    document.getElementById('fq-plus-ico').style.display = 'block';
    
    const defaultName = salLanguage === 'bn' ? "নাম লিখুন" : "Enter Name";
    const defaultDesig = salLanguage === 'bn' ? "পদবী" : "Designation";
    
    salList = [["1", defaultName, defaultDesig, "0", "0", "0", "0", "0"]];
    
    drawSal();
}
;

let visaCropper = null;
let currentVisaWidthMM = 51;
let currentVisaHeightMM = 51;
let finalCroppedVisaBase64 = null;

// 100+ Countries Visa Photo Dimensions (Width x Height in mm)
const visaCountriesData = [
    { name: "United States (US)", w: 51, h: 51 },
    { name: "India", w: 51, h: 51 },
    { name: "United Kingdom (UK)", w: 35, h: 45 },
    { name: "Schengen (Europe)", w: 35, h: 45 },
    { name: "Canada (Visa)", w: 35, h: 45 },
    { name: "Canada (PR/Passport)", w: 50, h: 70 },
    { name: "Australia", w: 35, h: 45 },
    { name: "New Zealand", w: 35, h: 45 },
    { name: "China", w: 33, h: 48 },
    { name: "Japan", w: 35, h: 45 },
    { name: "Saudi Arabia", w: 40, h: 60 },
    { name: "United Arab Emirates (UAE)", w: 40, h: 60 },
    { name: "Malaysia", w: 35, h: 50 },
    { name: "Singapore", w: 35, h: 45 },
    { name: "South Korea", w: 35, h: 45 },
    { name: "Thailand", w: 35, h: 45 },
    { name: "South Africa", w: 35, h: 45 },
    { name: "Russia", w: 35, h: 45 },
    { name: "Brazil", w: 50, h: 70 },
    { name: "Argentina", w: 40, h: 40 },
    { name: "Bangladesh (Passport)", w: 40, h: 50 },
    { name: "Pakistan", w: 35, h: 45 },
    { name: "Nepal", w: 35, h: 45 },
    { name: "Sri Lanka", w: 35, h: 45 },
    { name: "Maldives", w: 35, h: 45 },
    { name: "Afghanistan", w: 35, h: 45 },
    { name: "Albania", w: 36, h: 47 },
    { name: "Algeria", w: 35, h: 45 },
    { name: "Angola", w: 35, h: 45 },
    { name: "Armenia", w: 35, h: 45 },
    { name: "Austria", w: 35, h: 45 },
    { name: "Azerbaijan", w: 35, h: 45 },
    { name: "Bahamas", w: 50, h: 50 },
    { name: "Bahrain", w: 40, h: 60 },
    { name: "Belarus", w: 35, h: 45 },
    { name: "Belgium", w: 35, h: 45 },
    { name: "Bolivia", w: 40, h: 40 },
    { name: "Bosnia", w: 35, h: 45 },
    { name: "Bulgaria", w: 35, h: 45 },
    { name: "Cambodia", w: 40, h: 60 },
    { name: "Cameroon", w: 40, h: 40 },
    { name: "Chile", w: 40, h: 40 },
    { name: "Colombia", w: 40, h: 40 },
    { name: "Costa Rica", w: 50, h: 50 },
    { name: "Croatia", w: 35, h: 45 },
    { name: "Cuba", w: 40, h: 40 },
    { name: "Cyprus", w: 35, h: 45 },
    { name: "Czech Republic", w: 35, h: 45 },
    { name: "Denmark", w: 35, h: 45 },
    { name: "Dominican Republic", w: 50, h: 50 },
    { name: "Ecuador", w: 40, h: 40 },
    { name: "Egypt", w: 40, h: 60 },
    { name: "Estonia", w: 35, h: 45 },
    { name: "Ethiopia", w: 40, h: 40 },
    { name: "Fiji", w: 35, h: 45 },
    { name: "Finland", w: 36, h: 47 },
    { name: "France", w: 35, h: 45 },
    { name: "Georgia", w: 35, h: 45 },
    { name: "Germany", w: 35, h: 45 },
    { name: "Greece", w: 35, h: 45 },
    { name: "Hong Kong", w: 40, h: 50 },
    { name: "Hungary", w: 35, h: 45 },
    { name: "Iceland", w: 36, h: 47 },
    { name: "Indonesia", w: 35, h: 45 },
    { name: "Iran", w: 40, h: 60 },
    { name: "Iraq", w: 40, h: 60 },
    { name: "Ireland", w: 35, h: 45 },
    { name: "Israel", w: 51, h: 51 },
    { name: "Italy", w: 35, h: 45 },
    { name: "Jamaica", w: 50, h: 50 },
    { name: "Jordan", w: 40, h: 60 },
    { name: "Kazakhstan", w: 40, h: 50 },
    { name: "Kenya", w: 35, h: 45 },
    { name: "Kuwait", w: 40, h: 60 },
    { name: "Lebanon", w: 40, h: 60 },
    { name: "Lithuania", w: 40, h: 50 },
    { name: "Luxembourg", w: 35, h: 45 },
    { name: "Macau", w: 40, h: 50 },
    { name: "Malta", w: 35, h: 45 },
    { name: "Mexico", w: 40, h: 40 },
    { name: "Morocco", w: 40, h: 60 },
    { name: "Myanmar", w: 40, h: 60 },
    { name: "Netherlands", w: 35, h: 45 },
    { name: "Nigeria", w: 35, h: 45 },
    { name: "Norway", w: 35, h: 45 },
    { name: "Oman", w: 40, h: 60 },
    { name: "Panama", w: 50, h: 50 },
    { name: "Peru", w: 50, h: 50 },
    { name: "Philippines", w: 35, h: 45 },
    { name: "Poland", w: 35, h: 45 },
    { name: "Portugal", w: 35, h: 45 },
    { name: "Qatar", w: 38, h: 48 },
    { name: "Romania", w: 35, h: 45 },
    { name: "Serbia", w: 35, h: 45 },
    { name: "Slovakia", w: 35, h: 45 },
    { name: "Spain", w: 35, h: 45 },
    { name: "Sweden", w: 35, h: 45 },
    { name: "Switzerland", w: 35, h: 45 },
    { name: "Syria", w: 40, h: 40 },
    { name: "Taiwan", w: 35, h: 45 },
    { name: "Turkey", w: 50, h: 60 },
    { name: "Ukraine", w: 35, h: 45 },
    { name: "Uruguay", w: 40, h: 40 },
    { name: "Uzbekistan", w: 35, h: 45 },
    { name: "Venezuela", w: 40, h: 40 },
    { name: "Vietnam", w: 40, h: 60 },
    { name: "Yemen", w: 40, h: 60 },
    { name: "Zimbabwe", w: 50, h: 50 }
];

// Initialize Modal & Dropdown
function openVisaModal() {
    setActiveMode('mode-visa-photo');
    document.getElementById('visaModal').style.display = 'flex';
    populateCountryList(visaCountriesData);
}

function closeVisaModal() {
    document.getElementById('visaModal').style.display = 'none';
    deleteVisaImage(); 
}

// Dropdown Logic
function toggleVisaDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
    if(menu.classList.contains('show')) {
        document.getElementById('visaSearchInput').focus();
    }
}

function populateCountryList(data) {
    const list = document.getElementById('visaCountryList');
    list.innerHTML = '';
    data.forEach(country => {
        let unit = (country.w === 51) ? 'inch' : 'mm';
        let displayW = (country.w === 51) ? '2' : country.w;
        let displayH = (country.h === 51) ? '2' : country.h;
        
        let li = document.createElement('li');
        li.innerHTML = `${country.name} <span>${displayW}x${displayH} ${unit}</span>`;
        li.onclick = () => selectCountry(country.name, country.w, country.h);
        list.appendChild(li);
    });
}

function filterVisaCountries() {
    const input = document.getElementById('visaSearchInput').value.toLowerCase();
    const filtered = visaCountriesData.filter(c => c.name.toLowerCase().includes(input));
    populateCountryList(filtered);
}

function selectCountry(name, w, h) {
    currentVisaWidthMM = w;
    currentVisaHeightMM = h;
    
    let unit = (w === 51 || w === 50) && h === 51 ? 'inch' : 'mm';
    let displayW = w === 51 ? '2' : w;
    let displayH = h === 51 ? '2' : h;
    
    document.getElementById('selected-country-text').innerText = `${name} (${displayW} x ${displayH} ${unit})`;
    document.getElementById('visa-specs-text').innerText = `${displayW} x ${displayH} ${unit}`;
    
    document.getElementById('dropdownMenu').classList.remove('show');

    if(visaCropper) {
        visaCropper.setAspectRatio(w / h);
    }
}

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!document.getElementById('visaDropdown').contains(e.target)) {
        document.getElementById('dropdownMenu').classList.remove('show');
    }
});


// Image & Cropper Logic
function loadVisaImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const image = document.getElementById('visa-image');
        image.src = e.target.result;
        
        document.getElementById('visa-placeholder').style.display = 'none';
        document.getElementById('visa-upload-btn').style.display = 'none';
        document.getElementById('visa-result-preview').style.display = 'none';
        image.style.display = 'block';
        
        document.getElementById('visa-precrop-actions').style.display = 'grid';
        document.getElementById('btn-visa-reset').style.display = 'none';
        document.getElementById('btn-visa-jpg').disabled = true;
        document.getElementById('btn-visa-pdf').disabled = true;
        finalCroppedVisaBase64 = null;

        if (visaCropper) {
            visaCropper.destroy();
        }

        const ratio = currentVisaWidthMM / currentVisaHeightMM;

        visaCropper = new Cropper(image, {
            aspectRatio: ratio,
            viewMode: 1,
            autoCropArea: 0.8,
            dragMode: 'move',
            guides: true,
            center: true,
            highlight: false,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: false,
            zoomOnWheel: false
        });
    };
    reader.readAsDataURL(file);
}

function getPxAt300DPI(mm) {
    return Math.round((mm / 25.4) * 300);
}

function performVisaCrop() {
    if (!visaCropper) return;
    
    const targetWidthPx = getPxAt300DPI(currentVisaWidthMM);
    const targetHeightPx = getPxAt300DPI(currentVisaHeightMM);

    const canvas = visaCropper.getCroppedCanvas({
        width: targetWidthPx,
        height: targetHeightPx,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high'
    });

    finalCroppedVisaBase64 = canvas.toDataURL('image/jpeg', 1.0);

    visaCropper.destroy();
    visaCropper = null;
    document.getElementById('visa-image').style.display = 'none';
    
    const resultImg = document.getElementById('visa-result-preview');
    resultImg.src = finalCroppedVisaBase64;
    resultImg.style.display = 'block';

    document.getElementById('visa-precrop-actions').style.display = 'none';
    document.getElementById('btn-visa-reset').style.display = 'block';
    
    document.getElementById('btn-visa-jpg').disabled = false;
    document.getElementById('btn-visa-pdf').disabled = false;

    document.getElementById('visaDropdown').style.pointerEvents = 'none';
    document.getElementById('visaDropdown').style.opacity = '0.5';
}

function deleteVisaImage() {
    if(visaCropper) {
        visaCropper.destroy();
        visaCropper = null;
    }
    finalCroppedVisaBase64 = null;
    
    document.getElementById('visa-input').value = '';
    document.getElementById('visa-image').src = '';
    document.getElementById('visa-result-preview').src = '';
    
    document.getElementById('visa-image').style.display = 'none';
    document.getElementById('visa-result-preview').style.display = 'none';
    document.getElementById('visa-placeholder').style.display = 'block';
    document.getElementById('visa-upload-btn').style.display = 'block';
    
    document.getElementById('visa-precrop-actions').style.display = 'none';
    document.getElementById('btn-visa-reset').style.display = 'none';
    document.getElementById('btn-visa-jpg').disabled = true;
    document.getElementById('btn-visa-pdf').disabled = true;

    document.getElementById('visaDropdown').style.pointerEvents = 'auto';
    document.getElementById('visaDropdown').style.opacity = '1';
}

function downloadVisaSingle() {
    if (!finalCroppedVisaBase64) return;
    const link = document.createElement('a');
    link.download = `Visa_Photo_${currentVisaWidthMM}x${currentVisaHeightMM}.jpg`;
    link.href = finalCroppedVisaBase64;
    link.click();
}

function openVisaCopiesModal() {
    if (!finalCroppedVisaBase64) return;
    // Set default value to 6
    document.getElementById('visa-copy-count').value = 4;
    // Show the custom UI
    document.getElementById('visaCopiesModal').style.display = 'flex';
}

function closeVisaCopiesModal() {
    document.getElementById('visaCopiesModal').style.display = 'none';
}

function changeVisaCopies(amount) {
    let input = document.getElementById('visa-copy-count');
    let val = parseInt(input.value) || 0;
    val += amount;
    if (val < 1) val = 1;
    if (val > 100) val = 100; // Limit to maximum 100 copies
    input.value = val;
}

function executeVisaPDF() {
    // Hide the modal first
    closeVisaCopiesModal();
    
    // Get the quantity from our custom UI
    let copiesInput = document.getElementById('visa-copy-count').value;
    const totalCopies = parseInt(copiesInput);
    
    if (isNaN(totalCopies) || totalCopies <= 0) return;

    // Proceed with jsPDF generation
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ format: 'a4', unit: 'mm' });

    // A4 paper dimensions and margins
    const pageWidth = 210; 
    const pageHeight = 297; 
    const margin = 15; 
    const gap = 5; 

    let currentX = margin;
    let currentY = margin;

    // Automatic Grid Layout Logic
    for (let i = 0; i < totalCopies; i++) {
        
        // Check if next image exceeds right margin
        if (currentX + currentVisaWidthMM > pageWidth - margin) {
            currentX = margin;
            currentY += currentVisaHeightMM + gap;
        }
        
        // Check if next image exceeds bottom margin
        if (currentY + currentVisaHeightMM > pageHeight - margin) {
            doc.addPage();
            currentX = margin;
            currentY = margin;
        }
        
        // Add cut line (border)
        doc.setDrawColor(200, 200, 200);
        doc.rect(currentX - 0.2, currentY - 0.2, currentVisaWidthMM + 0.4, currentVisaHeightMM + 0.4);
        
        // Add cropped image
        doc.addImage(finalCroppedVisaBase64, 'JPEG', currentX, currentY, currentVisaWidthMM, currentVisaHeightMM);
        
        // Move X to the right for the next image
        currentX += currentVisaWidthMM + gap;
    }

    doc.save(`Visa_Print_A4_${currentVisaWidthMM}x${currentVisaHeightMM}.pdf`);
}
;

function openFamilyCardModal() {
      setActiveMode('mode-family-card');
      document.getElementById('familyCardModal').style.display = 'flex';
      updateFamilyCard(); 
  }

  function closeFamilyCardModal() {
      document.getElementById('familyCardModal').style.display = 'none';
  }

  // English to Bangla Number Converter Logic
  const engToBdNum = (str) => {
      const bnMap = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
      return str.replace(/[0-9]/g, match => bnMap[match]);
  };

  function updateFamilyCard() {
      // 1. ইনপুট ডাটা গ্রহণ
      let authority = document.getElementById('fc-authority').value || 'ওয়ার্ড মেম্বার';
      let union = document.getElementById('fc-union').value || '[ইউনিয়ন/পৌরসভার নাম]';
      let name = document.getElementById('fc-name').value || '.........................................................';
      let father = document.getElementById('fc-father').value || '...........................................................';
      let mother = document.getElementById('fc-mother').value || '.................................................................';
      let nid = document.getElementById('fc-nid').value || '......................................................';
      let mobile = document.getElementById('fc-mobile').value || '..............................................................';
      
      let vill = document.getElementById('fc-vill').value || '...........................';
      let po = document.getElementById('fc-po').value || '...........................';
      let wordRaw = document.getElementById('fc-word').value;
      let word = wordRaw ? engToBdNum(wordRaw) : '.........';
      let upz = document.getElementById('fc-upz').value || '...........................';
      let dist = document.getElementById('fc-dist').value || '...........................';

      let sonRaw = document.getElementById('fc-son').value;
      let daughterRaw = document.getElementById('fc-daughter').value;
      let son = sonRaw !== '' ? engToBdNum(sonRaw) : '......';
      let daughter = daughterRaw !== '' ? engToBdNum(daughterRaw) : '......';

      // 2. ডাইনামিক প্রিন্ট টেমপ্লেট (HTML এবং CSS সহ)
      const printContent = `
          <!-- ছবির ফ্রেম -->
          <div style="position: absolute; top: 20mm; right: 20mm; width: 40mm; height: 50mm; border: 1px dashed #000; display: flex; align-items: center; justify-content: center; text-align: center; padding: 5px; font-size: 12px; color: #4b5563;">
              পাসপোর্ট সাইজ ছবি<br/>(স্ট্যাপলার দিয়ে সংযুক্ত করুন)
          </div>

          <!-- টাইটেল -->
          <div style="text-align: center; margin-bottom: 25px; padding-right: 45mm;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 900; color: #000; display: inline-block; border-bottom: 1px solid #000; padding-bottom: 5px; margin-top: 10px;">ফ্যামিলি কার্ড প্রাপ্তির আবেদন</h1>
          </div>

          <!-- আবেদন বডি -->
          <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #000;">
              বরাবর,<br/>
              <span style="font-weight: 900; font-size: 18px;">${authority}</span><br/>
              <span style="font-weight: bold;">${union}</span><br/><br/>
              <b style="font-size: 17px;">বিষয়: ফ্যামিলি কার্ড / ফ্যামিলি কার্ড পাওয়ার আবেদন প্রসঙ্গে।</b><br/><br/>
              জনাব,<br/>
              বিনীত নিবেদন এই যে, আমি আপনার এলাকার একজন স্থায়ী বাসিন্দা। আমার পরিবারের বর্তমান আর্থ-সামাজিক অবস্থার প্রেক্ষিতে সরকারি সুবিধাদি ও রেশন পাওয়ার জন্য একটি ফ্যামিলি কার্ড পাওয়া আমার জন্য অত্যন্ত প্রয়োজন। নিচে আমার এবং আমার পরিবারের বিস্তারিত তথ্যাদি প্রদান করা হলো:
          </div>

          <div style="font-size: 16px; line-height: 1.8; margin-bottom: 20px; color: #000;">
              ১। আবেদনকারীর নাম: <b style="font-size: 17px;">${name}</b><br/>
              ২। পিতা/স্বামীর নাম: <span>${father}</span><br/>
              ৩। মাতার নাম: <span>${mother}</span><br/>
              ৪। জাতীয় পরিচয়পত্র নং: <span>${nid}</span><br/>
              ৫। মোবাইল নম্বর: <span>${mobile}</span><br/>
          </div>

          <div style="font-size: 16px; margin-bottom: 8px; color: #000;"><b>৬। বর্তমান ও স্থায়ী ঠিকানা:</b></div>
          <div style="font-size: 16px; line-height: 1.8; margin-bottom: 20px; padding-left: 20px; color: #000;">
              গ্রাম / মহল্লা: <span style="font-weight:bold;">${vill}</span>, 
              ডাকঘর: <span style="font-weight:bold;">${po}</span> <br/>
              ওয়ার্ড নং: <span style="font-weight:bold;">${word}</span>, 
              উপজেলা: <span style="font-weight:bold;">${upz}</span>, 
              জেলা: <span style="font-weight:bold;">${dist}</span>
          </div>

          <div style="font-size: 16px; margin-bottom: 8px; color: #000;"><b>৭। পরিবারের সদস্য বিবরণ:</b></div>
          <div style="font-size: 16px; line-height: 1.8; margin-bottom: 25px; padding-left: 20px; color: #000;">
              ছেলে সন্তান: <b>${son}</b> জন, 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; মেয়ে সন্তান: <b>${daughter}</b> জন।
          </div>

          <div style="font-size: 16px; line-height: 1.6; margin-bottom: 10px; color: #000;">
              অতএব, মহোদয়ের নিকট বিনীত প্রার্থনা, উপরোক্ত তথ্যাদি যাচাইপূর্বক আমাকে একটি ফ্যামিলি কার্ড প্রদানের প্রয়োজনীয় ব্যবস্থা গ্রহণে মর্জি হয়।
          </div>

          <!-- সিগনেচার -->
          <div style="display: flex; justify-content: space-between; font-size: 16px; color: #000; margin-top: auto; padding-top: 20px;">
              <div style="text-align: center; font-weight: bold;">
                  <br/>_______________________<br/>
                  স্বাক্ষর (প্রাপক / ওয়ার্ড প্রতিনিধি)
              </div>
              <div style="text-align: center; font-weight: bold;">
                  <br/>_______________________<br/>
                  আবেদনকারীর স্বাক্ষর
              </div>
          </div>
      `;

      // 3. এইচটিএমএল বক্সে ডাটা যুক্ত করা
      document.getElementById('fc-pdf-container').innerHTML = printContent;
  }

  function downloadFamilyCardPDF() {
    const element = document.getElementById('fc-pdf-container');
    const btn = document.getElementById('btn-fc-download');
    
    // Original styles to restore later
    const originalTransform = element.style.transform;
    const originalMarginBottom = element.style.marginBottom;
    const originalMarginLeft = element.style.marginLeft;
    const originalMarginRight = element.style.marginRight;
    const originalBoxShadow = element.style.boxShadow;

    // Loading state
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ডাউনলোডিং...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Wait for fonts to be loaded before proceeding
    document.fonts.ready.then(() => {
        // Temporarily remove transform and box-shadow for cleaner capture
        element.style.transform = 'scale(1)'; // Set to full size for capture
        element.style.marginBottom = '0';
        element.style.marginLeft = '0';
        element.style.marginRight = '0';
        element.style.boxShadow = 'none';

        // Add a small delay to ensure browser re-renders with new styles
        setTimeout(() => {
            var opt = {
                margin:       0,
                filename:     'Family_Card_Form_2026.pdf',
                image:        { type: 'jpeg', quality: 1.0 },
                html2canvas:  { 
                    scale: 2, 
                    useCORS: true, 
                    scrollY: 0,
                    logging: true, 
                    allowTaint: true,
                    backgroundColor: null // Transparent background if not explicitly set in CSS
                }, 
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak:    { mode: 'avoid-all' }
            };

            html2pdf().set(opt).from(element).save().then(() => {
                // Restore original styles
                element.style.transform = originalTransform;
                element.style.marginBottom = originalMarginBottom;
                element.style.marginLeft = originalMarginLeft;
                element.style.marginRight = originalMarginRight;
                element.style.boxShadow = originalBoxShadow;
                
                // Restore button
                btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> PDF ডাউনলোড করুন';
                btn.style.opacity = '1';
                btn.disabled = false;
            }).catch(err => {
                console.error("PDF Error: ", err);
                
                // Restore original styles even on error
                element.style.transform = originalTransform;
                element.style.marginBottom = originalMarginBottom;
                element.style.marginLeft = originalMarginLeft;
                element.style.marginRight = originalMarginRight;
                element.style.boxShadow = originalBoxShadow;

                btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> PDF ডাউনলোড করুন';
                btn.style.opacity = '1';
                btn.disabled = false;
                alert("দুঃখিত, PDF তৈরি করতে সমস্যা হচ্ছে। বিস্তারিত জানতে Console চেক করুন।");
            });
        }, 100); // 100ms delay
    }).catch(err => {
        console.error("Font loading error: ", err);
        // Restore button if font loading fails
        btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> PDF ডাউনলোড করুন';
        btn.style.opacity = '1';
        btn.disabled = false;
        alert("ফন্ট লোড করতে সমস্যা হয়েছে। PDF তৈরি সম্ভব নয়। বিস্তারিত জানতে Console চেক করুন।");
    });
  }

  function resetFamilyCard() {
      const inputs = document.querySelectorAll('#familyCardModal input, #familyCardModal textarea');
      inputs.forEach(input => input.value = '');
      document.getElementById('fc-authority').value = 'ওয়ার্ড মেম্বার';
      updateFamilyCard();
  }

  // অটো ইনিশিয়ালাইজ করার জন্য
  window.addEventListener('load', function() {
      updateFamilyCard();
  });
;

let currentCalDate = new Date();
  let clockInterval;
  
  // বাংলাদেশের চাঁদ দেখার ওপর ভিত্তি করে ১ দিন পেছানো (৩ মার্চ = ১৩ রমজান)
  let hijriOffset = -1; 

  // Close modal when clicked outside
  window.addEventListener('click', function(event) {
      let modal = document.getElementById('calendarModal');
      if (event.target == modal) {
          closeCalendarModal();
      }
  });

  function openCalendarModal() {
      // setActiveMode undefined থাকলে যেন error না দেয় তাই try-catch যুক্ত করা হয়েছে
      try {
          if (typeof setActiveMode === 'function') {
              setActiveMode('mode-calendar');
          }
      } catch (e) {}

      document.getElementById('calendarModal').style.display = 'flex';
      
      currentCalDate = new Date(); 
      startClock();
      updateTodaySummary(); 
      renderCalendar();     
  }

  function closeCalendarModal() {
      document.getElementById('calendarModal').style.display = 'none';
      if (clockInterval) clearInterval(clockInterval); // ঘড়ি বন্ধ করা
  }

  function changeMonth(dir) {
      currentCalDate.setMonth(currentCalDate.getMonth() + dir);
      renderCalendar();
  }

  function goToToday() {
      currentCalDate = new Date();
      renderCalendar();
  }

  // ইংরেজি থেকে বাংলা সংখ্যা কনভার্টার
  function toBnNum(num) {
      if (num === undefined || num === null) return '';
      const eng = ['0','1','2','3','4','5','6','7','8','9'];
      const bng =['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
      return num.toString().split('').map(c => eng.includes(c) ? bng[eng.indexOf(c)] : c).join('');
  }

  // কততম মাস (Ordinal Numbers in Bengali)
  function getOrdinalBn(num) {
      if(num == 1) return '১ম'; if(num == 2) return '২য়'; if(num == 3) return '৩য়';
      if(num == 4) return '৪র্থ'; if(num == 5) return '৫ম'; if(num == 6) return '৬ষ্ঠ';
      if(num == 7) return '৭ম'; if(num == 8) return '৮ম'; if(num == 9) return '৯ম';
      if(num == 10) return '১০ম'; if(num == 11) return '১১তম'; if(num == 12) return '১২শ';
      return toBnNum(num) + 'তম';
  }

  function getBnDateWithSuffix(day) {
      if (day === 1) return '১লা';
      if (day === 2) return '২রা';
      if (day === 3) return '৩রা';
      if (day === 4) return '৪ঠা';
      if (day >= 5 && day <= 18) return toBnNum(day) + 'ই';
      if (day >= 19 && day <= 31) return toBnNum(day) + 'শে';
      return toBnNum(day);
  }

  // লাইভ ঘড়ি ফাংশন
  function startClock() {
      if (clockInterval) clearInterval(clockInterval); // Prevent memory leak / overlap
      function updateTime() {
          let now = new Date();
          let h = now.getHours();
          let m = now.getMinutes();
          let s = now.getSeconds();
          let ampm = h >= 12 ? 'পিএম' : 'এএম';
          h = h % 12;
          h = h ? h : 12; // 0 কে 12 বানাবে
          let timeStr = toBnNum(h.toString().padStart(2, '0')) + ':' + 
                        toBnNum(m.toString().padStart(2, '0')) + ':' + 
                        toBnNum(s.toString().padStart(2, '0')) + ' ' + ampm;
          document.getElementById('cal-clock-text').innerHTML = '<i class="fa-regular fa-clock"></i> বর্তমান সময়: ' + timeStr;
      }
      updateTime();
      clockInterval = setInterval(updateTime, 1000);
  }

  const enMonthsBn =["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
  const bnMonthsList =["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"];
  
  function getSeason(monthIndex) {
      const seasons =['গ্রীষ্ম', 'গ্রীষ্ম', 'বর্ষা', 'বর্ষা', 'শরৎ', 'শরৎ', 'হেমন্ত', 'হেমন্ত', 'শীত', 'শীত', 'বসন্ত', 'বসন্ত'];
      return seasons[monthIndex];
  }

  function getBengaliDate(gDate) {
      // Government Revised Calendar Logic (2018/2019 BD)
      const bnDays =[31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 29, 30]; 
      
      let gy = gDate.getFullYear();
      let isLeap = (gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0);
      bnDays[10] = isLeap ? 30 : 29; 
      
      let bYear = gy - 593;
      let baishakh1 = new Date(gy, 3, 14); 
      
      if (gDate < baishakh1) {
          bYear -= 1;
          baishakh1 = new Date(gy - 1, 3, 14);
          let prevIsLeap = ((gy - 1) % 4 === 0 && (gy - 1) % 100 !== 0) || ((gy - 1) % 400 === 0);
          bnDays[10] = prevIsLeap ? 30 : 29;
      }
      
      let utc1 = Date.UTC(gDate.getFullYear(), gDate.getMonth(), gDate.getDate());
      let utc2 = Date.UTC(baishakh1.getFullYear(), baishakh1.getMonth(), baishakh1.getDate());
      let diffDays = Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
      
      let d = diffDays;
      let mIdx = 0;
      while (d >= bnDays[mIdx]) {
          d -= bnDays[mIdx];
          mIdx++;
      }
      
      return { date: d + 1, month: bnMonthsList[mIdx], monthIndex: mIdx, year: bYear };
  }

  function getHijriDateObj(date) {
      try {
          let adjustedDate = new Date(date.getTime() + (hijriOffset * 24 * 60 * 60 * 1000));
          let formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', { day: 'numeric', month: 'numeric', year: 'numeric' });
          let parts = formatter.formatToParts(adjustedDate);
          
          let hd = parseInt(parts.find(p => p.type === 'day').value);
          let hm = parseInt(parts.find(p => p.type === 'month').value);
          let hy = parts.find(p => p.type === 'year').value;
          
          const hijriMonths =["মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জিলকদ", "জিলহজ"];
          
          return { day: hd, monthStr: hijriMonths[hm - 1], monthIndex: hm, yearStr: toBnNum(hy) };
      } catch (e) {
          return { day: 1, monthStr: "হিজরি মাস", monthIndex: 1, yearStr: "১৪৪৭" };
      }
  }

  function updateTodaySummary() {
      const today = new Date();
      const daysBn =['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
      const dayName = daysBn[today.getDay()];
      
      const bdDate = getBengaliDate(today); 
      const season = getSeason(bdDate.monthIndex);
      
      const enDateSuffix = getBnDateWithSuffix(today.getDate());
      const enMonthName = enMonthsBn[today.getMonth()];
      const enMonthOrd = getOrdinalBn(today.getMonth() + 1);
      const enYear = toBnNum(today.getFullYear());
      
      const hjDateObj = getHijriDateObj(today);
      const hjMonthOrd = getOrdinalBn(hjDateObj.monthIndex);
      
      const summaryText = `আজ ${dayName}, ${getBnDateWithSuffix(bdDate.date)} ${bdDate.month} ${toBnNum(bdDate.year)} বঙ্গাব্দ, যা বাংলা ক্যালেন্ডারের ${season} ঋতুতে পড়ে। সংশ্লিষ্ট ইংরেজি তারিখ ${enDateSuffix} ${enMonthName} ${enYear} খ্রিষ্টাব্দ (বছরের ${enMonthOrd} মাস) এবং হিজরি তারিখ ${getBnDateWithSuffix(hjDateObj.day)} ${hjDateObj.monthStr} ${hjDateObj.yearStr} হিজরি (হিজরি বছরের ${hjMonthOrd} মাস)। বর্তমান বাংলা মাস হলো ${bdDate.month}, বাংলা বছরের ${getOrdinalBn(bdDate.monthIndex + 1)} মাস।`;
      
      document.getElementById('cal-summary-text').innerText = summaryText;
  }

  function renderCalendar() {
      const year = currentCalDate.getFullYear();
      const month = currentCalDate.getMonth();
      const today = new Date(); 

      document.getElementById('cal-title-main').innerText = `${enMonthsBn[month]} ${toBnNum(year)}`;
      
      let firstDayDate = new Date(year, month, 1);
      let lastDayDate = new Date(year, month + 1, 0);
      
      let bdFirst = getBengaliDate(firstDayDate);
      let bdLast = getBengaliDate(lastDayDate);
      let hjLast = getHijriDateObj(lastDayDate);

      document.getElementById('cal-title-sub').innerText = `${bdFirst.month} - ${bdLast.month} ${toBnNum(bdLast.year)} | হিজরি ${hjLast.yearStr}`;

      const firstDayIndex = firstDayDate.getDay(); 
      const totalDays = lastDayDate.getDate();
      
      const calBody = document.getElementById('cal-body');
      let html = '';

      for (let x = 0; x < firstDayIndex; x++) {
          html += `<div class="cal-day-box empty"></div>`;
      }

      for (let i = 1; i <= totalDays; i++) {
          let currDate = new Date(year, month, i);
          let bd = getBengaliDate(currDate);
          let hj = getHijriDateObj(currDate);

          let isTodayClass = (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) ? 'today' : '';
          let dayOfWeek = currDate.getDay();
          let isWeekendClass = (dayOfWeek === 5 || dayOfWeek === 6) ? 'weekend' : ''; 
          
          let titleText = `ইংরেজি: ${toBnNum(i)} ${enMonthsBn[month]} ${toBnNum(year)}\nবাংলা: ${toBnNum(bd.date)} ${bd.month} ${toBnNum(bd.year)}\nআরবি: ${toBnNum(hj.day)} ${hj.monthStr} ${hj.yearStr}`;

          // Full string inside the boxes with Tooltip
          html += `
          <div class="cal-day-box ${isTodayClass} ${isWeekendClass}" title="${titleText}">
              <div class="en-date">${toBnNum(i)} ${enMonthsBn[month]}</div>
              <div class="bn-date">${toBnNum(bd.date)} ${bd.month}</div>
              <div class="ar-date">${toBnNum(hj.day)} ${hj.monthStr}</div>
          </div>`;
      }

      calBody.innerHTML = html;
  }
;

const flightData =[
      { name: "Bangladesh", flag: "bd", url: "https://www.biman-airlines.com/#flight#check-in" },
      { name: "Saudi Arabia", flag: "sa", url: "https://www.saudia.com/en-SA/book-and-manage/manage/manage-booking" },
      { name: "Oman", flag: "om", url: "https://www.omanair.com/en/manage-bookings" },
      { name: "United Arab Emirates", flag: "ae", url: "https://www.emirates.com/english/manage-booking/online-check-in/" },
      { name: "Malaysia", flag: "my", url: "https://www.malaysiaairlines.com/hq/en/travel-info/check-in.html" },
      { name: "Malaysia (US)", flag: "my", url: "https://www.malaysiaairlines.com/us/en/travel-info/check-in.html" },
      { name: "Qatar", flag: "qa", url: "https://cki.qatarairways.com/cki/dashboard" },
      { name: "Kuwait", flag: "kw", url: "https://kuwaitairways.com/en/manage-booking" },
      { name: "Italy", flag: "it", url: "https://www.ita-airways.com/en_en/check-in-search.html" },
      { name: "Singapore", flag: "sg", url: "https://www.singaporeair.com/en_UK/sg/plan-travel/your-booking/managebooking/" },
      { name: "USA", flag: "us", url: "https://www.united.com/en/us" },
      { name: "France", flag: "fr", url: "https://wwws.airfrance.fr/en/check-in" },
      { name: "France (Egypt Trip)", flag: "fr", url: "https://wwws.airfrance.com.eg/trip" },
      { name: "Australia", flag: "au", url: "https://check-in.virginaustralia.com/checkin/index.html#/login" },
      { name: "Maldives", flag: "mv", url: "https://maldivian.aero/" },
      { name: "Japan", flag: "jp", url: "https://booking.flyairjapan.com/en/checkin" },
      { name: "Japan (Jeju Air)", flag: "jp", url: "https://wcc.jejuair.net/en/ibe/checkin/viewCheckin.do" },
      { name: "Bahrain", flag: "bh", url: "https://www.gulfair.com/flying-with-us/before-you-travel/manage" },
      { name: "Kenya", flag: "ke", url: "https://www.kenya-airways.com/en/book-manage/manage-booking/" },
      { name: "Vietnam", flag: "vn", url: "https://www.vietnamairlines.com/vn/en/travel-information/check-in/online-check-in" },
      { name: "Turkey", flag: "tr", url: "https://www.turkishairlines.com/en-us/tccmanagebooking/main.html" },
      { name: "Ethiopia", flag: "et", url: "https://www.ethiopianairlines.com/us/book/manage/manage-booking" },
      { name: "Ethiopia (EG)", flag: "et", url: "https://www.ethiopianairlines.com/eg/book/manage" },
      { name: "Iceland", flag: "is", url: "https://www.icelandair.com/support/pre-flight/manage-booking/" },
      { name: "Zambia", flag: "zm", url: "https://www.zambia-airways.com/" },
      { name: "Jordan", flag: "jo", url: "https://www.rj.com/en/plan-and-book/before-you-fly/book-your-ticket" },
      { name: "Spain", flag: "es", url: "https://www.iberia.com/us/booking/manage-booking/" },
      { name: "Germany", flag: "de", url: "https://www.lufthansa.com/jo/en/my-bookings" },
      { name: "Brazil", flag: "br", url: "https://www.latamairlines.com/us/en/latam-travel/manage-booking" },
      { name: "India", flag: "in", url: "https://www.airindia.com/content/air-india/in/en/manage/booking.html" },
      { name: "China", flag: "cn", url: "https://www.airchina.com.cn/en/index/managebooking" },
      { name: "Canada", flag: "ca", url: "https://www.aircanada.com/us/en/aco/home/book/manage-reservation.html" },
      { name: "United Kingdom", flag: "gb", url: "https://www.britishairways.com/travel/manage-your-booking/public/en_us" },
      { name: "South Africa", flag: "za", url: "https://www.flysaa.com/gb/en/book-manage/your-booking" },
      { name: "Russia", flag: "ru", url: "https://www.aeroflot.ru/ru-en/menu/check-in" },
      { name: "Mexico", flag: "mx", url: "https://www.aeromexico.com/en-us/travel-resources/manage-my-trip" },
      { name: "Argentina", flag: "ar", url: "https://www.aerolineas.com.ar/en/manage-booking" },
      { name: "Thailand", flag: "th", url: "https://www.thaiairways.com/en_SA/Manage_My_Booking/My_Booking.page" },
      { name: "Egypt", flag: "eg", url: "https://digital.egyptair.com/ssci/identification" },
      { name: "Egypt (Air Cairo)", flag: "eg", url: "https://aircairo.com/en-gl/my-booking" },
      { name: "South Korea", flag: "kr", url: "https://flyairseoul.com/I/en/viewCheckInList.do" },
      { name: "South Korea (Air Busan)", flag: "kr", url: "https://en.airbusan.com/web/individual/reserve/index" },
      { name: "South Korea (Korean Air)", flag: "kr", url: "https://www.koreanair.com/?hl=en" },
      { name: "Nepal", flag: "np", url: "https://www.nepalairlines.com.np/manage-booking/" },
      { name: "Nepal (Himalaya)", flag: "np", url: "https://www.himalaya-airlines.com/" },
      { name: "Hong Kong", flag: "hk", url: "https://www.cathaypacific.com/cx/en_HK/book-manage/manage-your-booking.html" },
      { name: "Bhutan", flag: "bt", url: "https://www.drukair.com.bt/manage-your-booking/" },
      { name: "Sri Lanka", flag: "lk", url: "https://www.srilankaairlines.com/book/manage-booking" },
      { name: "Philippines", flag: "ph", url: "https://www.philippineairlines.com/us/en/manage-booking.html" },
      { name: "Indonesia", flag: "id", url: "https://www.garuda-indonesia.com/sg/en" },
      { name: "Indonesia (Amadeus)", flag: "id", url: "https://checkin.si.amadeus.net/1ASIHSSCWEBGA/sscwga/checkin?ln=en" },
      { name: "Brunei", flag: "bn", url: "https://www.flyroyalbrunei.com/brunei/en/book-manage/online-check-in/" },
      { name: "Lebanon", flag: "lb", url: "https://www.beirutairport.gov.lb/_flight.php" },
      { name: "Lebanon (Air Arabia)", flag: "lb", url: "https://webcheckin.airarabia.com/accelaero/en/index.html#/en" },
      { name: "Pakistan", flag: "pk", url: "https://www.piac.com.pk/" },
      { name: "Iraq", flag: "iq", url: "https://www.ixigo.com/airlines/iraqi_airways-ia/flight-status" },
      { name: "Iraq (Jazeera)", flag: "iq", url: "https://www.jazeeraairways.com/en-bd?#check-in" },
      { name: "Netherlands", flag: "nl", url: "https://www.klm.com/check-in" },
      { name: "Switzerland", flag: "ch", url: "https://www.swiss.com/gb/en/fly/check-in/online-check-in.html" },
      { name: "Sweden", flag: "se", url: "https://www.flysas.com/en/checkin" },
      { name: "Denmark", flag: "dk", url: "https://dat.dk/en/online-check-in/" },
      { name: "Poland", flag: "pl", url: "https://www.lot.com/pl/en/manage-booking/overview" },
      { name: "Portugal", flag: "pt", url: "https://www.flytap.com/en-dk/check-in-information" },
      { name: "Greece", flag: "gr", url: "https://en.aegeanair.com/plan/manage-booking/" },
      { name: "New Zealand", flag: "nz", url: "https://flightbookings.airnewzealand.com/vmanage/actions/retrieve/webcheck" },
      { name: "Morocco", flag: "ma", url: "https://www.royalairmaroc.com/us-en/booking/online-check-in" },
      { name: "Romania", flag: "ro", url: "https://digital.tarom.ro/ssci/identification?lang=ro-RO" }, // TAROM Airlines
      { name: "Taiwan", flag: "tw", url: "https://booking.evaair.com/flyeva/eva/b2c/manage-your-trip/online-checked-in-login.aspx?lang=en-global" }, // EVA Air
      { name: "Nigeria", flag: "ng", url: "https://flyairpeace.com/" },
      { name: "Austria", flag: "at", url: "https://www.austrian.com/us/en/online-check-in" }, // Austrian Airlines
      { name: "Belgium", flag: "be", url: "https://www.brusselsairlines.com/be/en/check-in-options-and-info/online-check-in-options.html" }, // Brussels Airlines
      { name: "Croatia", flag: "hr", url: "https://wci.croatiaairlines.hr/web/ck_retrieve?langCode=en" }, // Croatia Airlines
      { name: "Finland", flag: "fi", url: "https://www.finnair.com/en/check-in" },
      { name: "Ireland", flag: "ie", url: "https://www.aerlingus.com/html/en-US/home.html" }, // Aer Lingus
      { name: "Colombia", flag: "co", url: "https://checkinnew.avianca.com/Check-In?lang=En" } // Avianca
  ];

  function openFlightModal() {
      setActiveMode('mode-flight-check');
      document.getElementById('flightModal').style.display = 'flex';
      document.getElementById('flightSearchInput').value = ''; // Clear search box
      renderFlights(flightData); // Render all cards initially
  }

  function closeFlightModal() {
      document.getElementById('flightModal').style.display = 'none';
      document.getElementById('flightSearchInput').value = '';
  }

  function renderFlights(data) {
      const grid = document.getElementById('flightGrid');
      grid.innerHTML = '';
      
      if(data.length === 0) {
          grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ef4444; font-weight: bold; font-family: \'Inter\', sans-serif; font-size: 16px;">Sorry, no country found with this name!</p>';
          return;
      }

      data.forEach(item => {
          const card = document.createElement('a');
          card.href = item.url;
          card.target = '_blank';
          card.className = 'flight-card';
          card.innerHTML = `
              <img src="https://flagcdn.com/w40/${item.flag}.png" alt="${item.name}">
              <span>${item.name}</span>
          `;
          grid.appendChild(card);
      });
  }

  function filterFlights() {
      const query = document.getElementById('flightSearchInput').value.toLowerCase();
      const filtered = flightData.filter(item => item.name.toLowerCase().includes(query));
      renderFlights(filtered);
  }
;

// Unique variable name for Visa tool
  const vchkDataList = [
      { name: "KSA Visa", flag: "sa", url: "https://ksavisa.sa/?c=0" },
      { name: "Saudi Arabia (MOFA)", flag: "sa", url: "https://visa.mofa.gov.sa/VisaPerson/GetApplicantData" },
      { name: "Saudi Arabia (Portal)", flag: "sa", url: "https://visa.mofa.gov.sa/" },
      { name: "UAE", flag: "ae", url: "https://smart.gdrfad.gov.ae/Public_Th/StatusInquiry_New.aspx" },
      { name: "Malaysia", flag: "my", url: "https://malaysiavisa.imi.gov.my/evisa/check-evisa" },
      { name: "Oman", flag: "om", url: "https://evisa.rop.gov.om/en/track-your-application" },
      { name: "Qatar", flag: "qa", url: "https://portal.moi.gov.qa/wps/portal/MOIInternet/services/inquiries/visaservices/enquiryandprinting" },
      { name: "Kuwait (Enquiry)", flag: "kw", url: "https://rnt.moi.gov.kw/esrv/VisaStat.do?lang=eng" },
      { name: "Kuwait (eVisa)", flag: "kw", url: "https://e-visa-kuwait.com/visa-check-status" },
      { name: "Italy", flag: "it", url: "https://blsitalyvisa.com/senegal/page/track_application" },
      { name: "Singapore", flag: "sg", url: "https://service2.mom.gov.sg/workpass/enquiry/search" },
      { name: "USA", flag: "us", url: "https://ceac.state.gov/ceacstattracker/status.aspx" },
      { name: "France", flag: "fr", url: "https://www.atlys.com/tools/france-visa-status-checker" },
      { name: "Iraq", flag: "iq", url: "https://eservice.evisa.iq/" },
      { name: "Australia", flag: "au", url: "https://online.immi.gov.au/evo/firstParty" },
      { name: "Turkey", flag: "tr", url: "https://evisa.gov.tr/en/status/" },
      { name: "Greece", flag: "gr", url: "https://bd-gr.gvcworld.eu/en/what-is-the-status-of-my-visa-application" },
      { name: "New Zealand", flag: "nz", url: "https://nzeta.immigration.govt.nz/check-status" },
      { name: "Egypt", flag: "eg", url: "https://www.egyptianivisa.org/egypt-evisa-status-enquiry" },
      { name: "Denmark", flag: "dk", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/Ey/UM5rKPMuPWoM9so6dErw9MlQ/wjq9lJGkU959vsBvrOFDstsG0wBzADuf+qGXcEGxkEz8sbjc3mvJlPR49k=" },
      { name: "Albania", flag: "al", url: "https://consular.indonesianembassy.org.uk/check/trackvisa" },
      { name: "Indonesia", flag: "id", url: "https://consular.indonesianembassy.org.uk/check/trackvisa" },
      { name: "Lithuania", flag: "lt", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/BlZx7aT/DWezFVMeYX2hmCSlRWDIXclcabmR5zKiHoZVNKPNERmgyRABJaNCwx2aNZmzCtnJ5Bpf2LBrfP6k2X0Q1z2DPxJQm33rNuqa4Iv" },
      { name: "Cambodia", flag: "kh", url: "https://www.evisa.gov.kh/check_change" },
      { name: "Thailand", flag: "th", url: "https://thailand-e-visas.com/application-status/" },
      { name: "Vietnam", flag: "vn", url: "https://evisa.xuatnhapcanh.gov.vn/tra-cuu-thi-thuc" },
      { name: "Philippines", flag: "ph", url: "https://evisa.gov.ph/verifier" },
      { name: "Canada", flag: "ca", url: "https://services3.cic.gc.ca/ecas/authenticate.do" },
      { name: "Norway", flag: "no", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/MMWoQ2u/1NQd8ht0KuMDeqNJEBHzf/pf00e1uZwPSD2zYt8RkPOrijzqBSPrG6SpBLEnwcTgTEc55ZX0BXECrU=" },
      { name: "Sweden", flag: "se", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/A9+3ayKh2o6XUmXfdhngCYyU8AwlJS2teDiX9NGhCu5j7J2hGzy30dPAPM6bu3jEpSgRCiBikLlY7P5ZmCR3Qk=" },
      { name: "Switzerland", flag: "ch", url: "https://www.swiss-visa.ch/" },
      { name: "Netherlands", flag: "nl", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/GAZMwphNakm2hstnNbT9MeLtMSNCgJ8GiT50RSS4w+IoAskZVw2rQ7iiIFWAOR5ntDOxlsmSQFg9knxElfrZWb0fOJES+KlD+VXNw0o9R+8" },
      { name: "Belgium", flag: "be", url: "https://infovisa.ibz.be/InfovisaNl.aspx" },
      { name: "Spain", flag: "es", url: "https://sutramiteconsular.maec.es/" },
      { name: "Germany", flag: "de", url: "https://videx.diplo.de/videx/visum-erfassung/en/videx-langfristiger-aufenthalt" },
      { name: "UK", flag: "gb", url: "https://www.gov.uk/visa-processing-times" },
      { name: "India", flag: "in", url: "https://www.passtrack.net/regular_passport.php" },
      { name: "Pakistan", flag: "pk", url: "https://visa.nadra.gov.pk/verify/" },
      { name: "Nepal", flag: "np", url: "https://nepaliport.immigration.gov.np/visa-check" },
      { name: "Sri Lanka", flag: "lk", url: "https://eta.gov.lk/etaslvisa/pages/checkStatus.jsp" },
      { name: "Bangladesh", flag: "bd", url: "https://www.bdvisa.com/track-your-application.html" },
      { name: "Japan", flag: "jp", url: "https://www.atlys.com/tools/japan-visa-status-checker" },
      { name: "Malaysia (US)", flag: "my", url: "https://ceac.state.gov/CEACStatTracker/Status.aspx?App=NIV" },
      { name: "France (Egypt Trip)", flag: "fr", url: "https://www.atlys.com/tools/france-visa-status-checker" },
      { name: "Maldives", flag: "mv", url: "https://www.immigration.gov.mv/visa/status" },
      { name: "Japan (Jeju Air)", flag: "jp", url: "https://www.atlys.com/tools/japan-visa-status-checker" },
      { name: "Bahrain", flag: "bh", url: "https://www.lmra.gov.bh/EMS_Web/checkEligibilityRW.action?methodName=loadPageInEnglish" },
      { name: "Kenya", flag: "ke", url: "https://etakenya.go.ke/" },
      { name: "Ethiopia", flag: "et", url: "https://www.evisa.gov.et/visa-extension" },
      { name: "Ethiopia (EG)", flag: "et", url: "https://www.evisa.gov.et/#/checkstatus" },
      { name: "Iceland", flag: "is", url: "https://visa.government.is/" },
      { name: "Zambia", flag: "zm", url: "https://zambia-visa.com/application-status/" },
      { name: "Jordan", flag: "jo", url: "https://www.jsdbiz.com/jordan-visa/check-status" },
      { name: "Brazil", flag: "br", url: "https://formulario-mre.serpro.gov.br/sci/pages/web/ui/#/consultar-situacao" },
      { name: "China", flag: "cn", url: "https://www.visaforchina.cn/FRA3_EN/qianzhengyewu" },
      { name: "United Kingdom", flag: "gb", url: "https://atlantis-abs-uk.vfsglobal.com/track-status?missionCode=GBR&countryCode=bgd&lang=en" },
      { name: "South Africa", flag: "za", url: "https://www.vfsvisaonline.com/DHAOnlineTracking/OnlineTracking.aspx" },
      { name: "Russia", flag: "ru", url: "https://evisacheck.kdmid.ru/" },
      { name: "Mexico", flag: "mx", url: "https://ceac.state.gov/CEACStatTracker/Status.aspx?App=NIV" },
      { name: "Argentina", flag: "ar", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/OVMz2fDVFo4HOHOD9+ZsS2aHQ5OzxnlPZonjofTOFmXYjYZNB/WcybRu22/pkuUnBnZFnpXvi+eqDV278ea0+cviut6qFkTvksiSXp49VJmi8S4ALf6edfaHHbBMlJkoQ==" },
      { name: "Egypt (Air Cairo)", flag: "eg", url: "https://www.egyptianivisa.org/egypt-evisa-status-enquiry" },
      { name: "South Korea South", flag: "kr", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10301" },
      { name: "South Korea (Air Busan)", flag: "kr", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10301" },
      { name: "South Korea (Korean Air)", flag: "kr", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10301" },
      { name: "Nepal (Himalaya)", flag: "np", url: "https://nepaliport.immigration.gov.np/visa-check" },
      { name: "Hong Kong", flag: "hk", url: "https://www.gov.hk/en/residents/immigration/nonpermanent/appstatusenq.htm" },
      { name: "Bhutan", flag: "bt", url: "https://immi.gov.bt/track-application/" },
      { name: "Indonesia (Amadeus)", flag: "id", url: "https://consular.indonesianembassy.org.uk/check/trackvisa" },
      { name: "Brunei", flag: "bn", url: "https://ceac.state.gov/CEACStatTracker/Status.aspx?App=NIV" },
      { name: "Lebanon", flag: "lb", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/CQ1P0LBKn66dLdNUfueK+xykiaI75SBZmV+meEP0Shx+uY52hy40GYbxyEPSfVV0g==" },
      { name: "Lebanon (Air Arabia)", flag: "lb", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/CQ1P0LBKn66dLdNUfueK+xykiaI75SBZmV+meEP0Shx+uY52hy40GYbxyEPSfVV0g==" },
      { name: "Iraq (Jazeera)", flag: "iq", url: "https://evisatraveller.mfa.ir/en/request/status/" },
      { name: "Poland", flag: "pl", url: "https://www.lot.com/rs/en/journey/special-services/travel-documents/travel-poland" },
      { name: "Portugal", flag: "pt", url: "https://in-gr.gvcworld.eu/en/what-is-the-status-of-my-visa-application" },
      { name: "Morocco", flag: "ma", url: "https://www.acces-maroc.ma/#/" },
      { name: "Romania", flag: "ro", url: "https://eviza.mae.ro/checkvisasticker" },
      { name: "Taiwan", flag: "tw", url: "https://www.jsdbiz.com/taiwan-visa/check-status" },
      { name: "Nigeria", flag: "ng", url: "https://immigration.gov.ng/check-visa-status/" },
      { name: "Austria", flag: "at", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon%2Fx%2FB1eRfIlnOB2pWKLJ+6DYKyWgZoHLe2GNbJkZ93iyjEl6rOHB0%2Fcj6EXI40E2L+qrDDcWx6thm8IQSpoEhrPV5Y%3D" },
      { name: "Croatia", flag: "hr", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/LP5/hPag7COaFyhj+cLMlOg9lNxUTlJ+42mSIvhkjncyNlltInk2p6br8++WFRun6cSkO/+CjAWX4wQx/eUVBg=" },
      { name: "Finland", flag: "fi", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/K3TR28D6QZe7ZMQ849/GyMRu9oyBCGJ+NHqcGb/3GtVGbtnQ4WSUJQfYtSTvHun11+DkcDbTJUiJ8V2wuqc1Kk=" },
      { name: "Ireland", flag: "ie", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/KgjqpWLKpJv1+Cz1ga9/6EJfiYm1eKv4NloVE0HSGxAWwDd5VF9ztQ5srrLkyiWzIGvaqmiihvJ+fYFO3rrCDY=" },
      { name: "Colombia", flag: "co", url: "https://tramitesmre.cancilleria.gov.co/tramites/enlinea/consultarEstadoSolicitud.xhtml" },

      // নতুন যুক্ত করা দেশসমূহ
      { name: "Azerbaijan", flag: "az", url: "https://evisa.gov.az/en/check-status" },
      { name: "Georgia", flag: "ge", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/DeEEtn3ZhPEQYqzaKN/BsKSM/nm00Fis8ALFgXo4W8j+jiCvWBCuYHbampJnUCUIZTJpGTKOr/CwH627D3ueSc=" },
      { name: "Kazakhstan", flag: "kz", url: "https://www.vmp.gov.kz/en/services/visa-service" },
      { name: "Uzbekistan", flag: "uz", url: "https://e-visa.gov.uz/status" },
      { name: "Ukraine", flag: "ua", url: "https://evisa.mfa.gov.ua/" },
      { name: "Belarus", flag: "by", url: "https://visa.by/en/" },
      { name: "Serbia", flag: "rs", url: "https://www.evisawelcometoserbiagov.online/track-your-visa-application.php" },
      { name: "Bosnia and Herzegovina", flag: "ba", url: "https://bihembassygov.com/application-tracking/" },
      { name: "Montenegro", flag: "me", url: "https://evisa-gov.me/montenegro-visa-status-checker.html" },
      { name: "North Macedonia", flag: "mk", url: "https://evisa-gov.me/montenegro-visa-status-checker.html" },
      { name: "Bulgaria", flag: "bg", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/AoKGAVyoVK/e8oAZk1pB9ed+n4cBnpujmSr+kOjjctvXM4q1Ljd0+2VRpM1gmxlg7swPiJ4N9yq1xcqMFsmkXk=" },
      { name: "Cyprus", flag: "cy", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/Gf42uXe16FaHjaImDmi3NThsPkForn5Z0KgMyi+TRO/LgKgOeYhx9STbQ9Tu05ACIpVIq9IsbUcEEzzIkqZcxo=" },
      { name: "Malta", flag: "mt", url: "https://identita.gov.mt/central-visa-unit-services-visa-application-tracking/" },
      { name: "Slovakia", flag: "sk", url: "https://blsslovakiavisa.com/vietnam/track-application.php" },
      { name: "Slovenia", flag: "si", url: "https://svvmzz.adapta.si/statusnew.php" },
      { name: "Hungary", flag: "hu", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/FVWGkYuENF3aj/jI+9gY9pE83UEf2P6x9Sl8cvMqFf44wJKuUWVDH9Jtdz9xIMJdOsTyX1xa5hqsDlAXWW6bgaCacs7ghVCD/m/hX3R1bli" },
      { name: "Czech Republic", flag: "cz", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/Jdf3aByYnqcjO/DruY4vPZfAMLbwkob13WiEvth/SSJfQ80KIaOztETUA08burPeR4P2J0qDrahwmCCZxPpk4WVr/NoFf/4JSJx33ePxMq4" },
      { name: "Latvia", flag: "lv", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/H4U4Yoxvegz1LFctYtWZRfI62JQCrj2NXrFipZADwMYWhmeoXqut6WKqRfOVcdxV84uSQ9PQpcGmZumtlL3TqQ=" },
      { name: "Estonia", flag: "ee", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/CbH0A9wGBx658I5hrzrIX1gbnQaKHsBo/ZKbK61qsclzAGD3HS+9eeZitNQBHMmLSC2eA5W19fJFkwvEXpuzIw=" },
      { name: "Luxembourg", flag: "lu", url: "https://luxembourgvisacheck.com/verify-luxembourg-visa/" },
      { name: "Iran", flag: "ir", url: "https://evisatraveller.mfa.ir/en/request/status/" },
      { name: "Israel", flag: "il", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/E0nJ2YmLdPRwhIGpRxXn6XIAjxpzt2kVi+fwWg5R+RrqFTrFQAgsMnLxFfy23QVJFAiZIA0BbyUbFH9o/ukXH6CiYJWiv+OfCetxh/dwanY" },
      { name: "Ghana", flag: "gh", url: "https://www.ghana.gov.gh/find-application/" },
      { name: "South Sudan", flag: "ss", url: "https://www.evisa.gov.ss/" },
      { name: "Uganda", flag: "ug", url: "https://www.jsdbiz.com/uganda-visa/check-status" },
      { name: "Rwanda", flag: "rw", url: "https://irembo.gov.rw/user/citizen/service/rdb/tourism_and_travel/visa_and_permit" },
      { name: "Tanzania", flag: "tz", url: "https://visa.immigration.go.tz/checkapplicationstatus" },
      { name: "Mozambique", flag: "mz", url: "https://mnzonline.vfsevisa.com/moz/en/track-status" },
      { name: "Angola", flag: "ao", url: "https://www.jsdbiz.com/angola-visa/check-status" },
      { name: "Democratic Republic of Congo", flag: "cd", url: "https://congo-evisa.com/application-status/" },
      { name: "Congo (Republic of the)", flag: "cg", url: "https://congovisacheck.com/" },
      { name: "Gabon", flag: "ga", url: "https://evisa.dgdi.ga/#/check" },
      { name: "Cameroon", flag: "cm", url: "https://cameroon-visa.info/application-status/" },
      { name: "Senegal", flag: "sn", url: "https://visatracking.vfsglobal.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/MMWoQ2u/1NQd8ht0KuMDeqNJEBHzf/pf00e1uZwPSD2sHw7Ed+0eLzULaYh51OqLY73Hw1opL/fy3AJ9TC6LQM=" },
      { name: "Cote d'Ivoire", flag: "ci", url: "https://www.ivorycoastimmigration.org/check-status" },
      { name: "Fiji", flag: "fj", url: "https://www.vfsvisaonline.com/Global-Passporttracking/Track/Index?q=shSA0YnE4pLF9Xzwon/x/K3TR28D6QZe7ZMQ849/GyMRu9oyBCGJ+NHqcGb/3GtVjHzLqLb4jbd05jwMIb65+LszmBPTl5tEfBJ22L1R8eY=" },
      { name: "Papua New Guinea", flag: "pg", url: "https://evisa.ica.gov.pg/evisa/account/status" },
      { name: "Samoa", flag: "ws", url: "https://ws.usembassy.gov/visas/visa-information/" },
      { name: "Tonga", flag: "to", url: "https://www.tongaconsul.com/visa" },
      { name: "Vanuatu", flag: "vu", url: "https://visa.vfsglobal.com/vut/en/aus/track-application" },
      { name: "Solomon Islands", flag: "sb", url: "https://immigration.gov.sb/know-your-visa-requirements/" },
      { name: "Kenya", flag: "ke", url: "https://etakenya.go.ke/" }

  ];

  function openVchkModal() {
      setActiveMode('mode-vchk-tool');
      document.getElementById('vchkModalMain').style.display = 'flex';
      document.getElementById('vchkSearchInput').value = '';
      renderVchk(vchkDataList);
  }

  function closeVchkModal() {
      document.getElementById('vchkModalMain').style.display = 'none';
      document.getElementById('vchkSearchInput').value = '';
  }

  function renderVchk(data) {
      const grid = document.getElementById('vchkGridArea');
      grid.innerHTML = '';

      if (data.length === 0) {
          grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ef4444; font-weight: bold; font-family: \'Inter\', sans-serif; font-size: 16px;">Sorry, no visa link found for this country!</p>';
          return;
      }

      data.forEach(item => {
          const card = document.createElement('a');
          card.href = item.url;
          card.target = '_blank';
          card.className = 'vchk-card';
          const flagImgSrc = item.flag === 'globe' ? 'https://upload.wikimedia.org/wikipedia/commons/2/22/Globe_icon.svg' : `https://flagcdn.com/w40/${item.flag}.png`;
          card.innerHTML = `
              <img src="${flagImgSrc}" alt="${item.name}">
              <span>${item.name}</span>
          `;
          grid.appendChild(card);
      });
  }

  function filterVchk() {
      const query = document.getElementById('vchkSearchInput').value.toLowerCase();
      const filtered = vchkDataList.filter(item => item.name.toLowerCase().includes(query));
      renderVchk(filtered);
  }
;

!function() {
    var e = -1 !== window.location.search.indexOf("m=1");

    function t(t) {
        if (!t) return "";
        var l = -1 !== t.indexOf("?") ? "&" : "?";
        return t = -1 !== t.indexOf("max-results=") ? t.replace(/max-results=\d+/, "max-results=6") : t + l + "max-results=6", e && -1 === t.indexOf("m=1") && (t += "&m=1"), t
    }
    
    document.querySelectorAll(".nav-menu a").forEach(function(t) {
        var l = t.getAttribute("href");
        if (l && (-1 !== l.indexOf("/search") || l.endsWith("/blog"))) {
            var i = "/search?max-results=6";
            e && (i += "&m=1"), t.setAttribute("href", i)
        }
    });

    let l = document.getElementById("native-newer-link"),
        i = document.getElementById("native-older-link"),
        n = document.getElementById("custom-prev"),
        r = document.getElementById("custom-next"),
        s = document.getElementById("custom-pagination"),
        a = document.querySelectorAll(".post-card-grid").length,
        f = window.location.href,
        d = !1;

    // Fix: এলিমেন্টগুলো (r, n, s) আছে কিনা তা চেক করে কাজ করা
    if (r) {
        if (i && a >= 3) {
            let o = i.getAttribute("href");
            r.setAttribute("href", t(o));
            r.style.display = "inline-block";
            d = !0;
        } else {
            r.style.display = "none";
        }
    }

    if (n) {
        if (-1 === f.indexOf("updated-max")) {
            n.style.display = "none";
        } else if (l) {
            let u = l.getAttribute("href"),
                m = window.location.origin;
            if (u === m + "/" || u === m || "/" === u || -1 !== u.indexOf(m + "/?m=1")) {
                let c = "/search?max-results=6";
                e && (c += "&m=1"), n.setAttribute("href", c)
            } else {
                n.setAttribute("href", t(u));
            }
            n.style.display = "inline-block";
            d = !0;
        } else {
            n.style.display = "none";
        }
    }

    if (d && s) {
        s.style.display = "flex";
    }
}();
;

let selfieSegmentation = null;

// ১. মোডাল ওপেন করার ফাংশন
async function openBgRemoverModal() {
    if (typeof setActiveMode === "function") setActiveMode("mode-bg-remover");
    var modal = document.getElementById("bgRemoverModal");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    // ইঞ্জিন আগে থেকে লোড করে রাখা
    if (!selfieSegmentation) {
        selfieSegmentation = new SelfieSegmentation({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`
        });
        selfieSegmentation.setOptions({ modelSelection: 1 }); 
    }
}

// ২. মোডাল ক্লোজ
function closeBgRemoverModal() {
    var modal = document.getElementById("bgRemoverModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementById("bgResultArea").style.display = "none";
        document.getElementById("bgInput").value = "";
    }
}

// ৩. মেইন প্রসেসিং (Fast & Free)
async function processBgRemoval() {
    let fileInput = document.getElementById("bgInput");
    let file = fileInput.files[0];
    let btn = document.getElementById("bgRemoveBtn");
    let loader = document.getElementById("bgLoader");
    let resultArea = document.getElementById("bgResultArea");
    let resultImg = document.getElementById("bgResultImage");
    let downloadBtn = document.getElementById("bgDownloadLink");

    if (!file) {
        alert("Please select an image!");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing AI...';
    loader.style.display = "block";
    resultArea.style.display = "none";

    const inputImg = new Image();
    inputImg.src = URL.createObjectURL(file);

    inputImg.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        // ছবি অনেক বড় হলে প্রসেসিং স্পিড বাড়ানোর জন্য রিসাইজ করা
        const maxDim = 1080;
        let w = inputImg.width;
        let h = inputImg.height;
        if(w > h && w > maxDim){ h *= maxDim/w; w = maxDim; }
        else if(h > maxDim){ w *= maxDim/h; h = maxDim; }
        
        canvas.width = w;
        canvas.height = h;

        selfieSegmentation.onResults((results) => {
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(results.segmentationMask, 0, 0, canvas.width, canvas.height);

            // মাস্কিং লজিক
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
            ctx.restore();

            // রেজাল্ট দেখানো
            const finalData = canvas.toDataURL("image/png");
            resultImg.src = finalData;
            downloadBtn.href = finalData;
            
            resultArea.style.display = "block";
            loader.style.display = "none";
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Remove Background';
            resultArea.scrollIntoView({ behavior: "smooth" });
        });

        await selfieSegmentation.send({ image: inputImg });
    };
}

// ইনপুট চেঞ্জ হ্যান্ডলার
document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("bgInput");
    if (input) {
        input.addEventListener("change", function() {
            if (this.files && this.files[0]) {
                document.getElementById("bgFileName").innerText = this.files[0].name;
            }
        });
    }
});
;

let jState = {
    L: { img: null, zoom: 1, rot: 0, straighten: 0, flip: 1, x: 0, y: 0, br: 100, ct: 100, st: 100 },
    R: { img: null, zoom: 1, rot: 0, straighten: 0, flip: 1, x: 0, y: 0, br: 100, ct: 100, st: 100 }
}, jCanvas, jCtx, jActiveSide = null, isJDragging = !1, jStartX, jStartY, jLastMoveTime = 0, hasMovedJ = !1, jInputLock = 0;

// MediaPipe Variable
let jSelfieSegmentation = null;
let jGlobalBG = "#ffffff", jBorderWidth = 0;

async function openJointProModal() {
    if (typeof setActiveMode === "function") setActiveMode("mode-joint-pro");
    document.getElementById("jointProModal").style.display = "flex";
    document.body.style.overflow = "hidden";
    jCanvas = document.getElementById("jointProCanvas");
    jCtx = jCanvas.getContext("2d");
    jCanvas.width = 570;
    jCanvas.height = 450;
    
    // AI ইঞ্জিন আগে থেকে রেডি করা
    initJointAI();
    
    setupJEvents();
    renderJPro();
}

// ১. এআই ইঞ্জিন ইনিশিয়ালাইজ করা (ফ্রি ও আনলিমিটেড)
function initJointAI() {
    if (!jSelfieSegmentation && typeof SelfieSegmentation !== "undefined") {
        jSelfieSegmentation = new SelfieSegmentation({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`,
        });
        jSelfieSegmentation.setOptions({ modelSelection: 1 });
    }
}

function closeJointProModal() {
    document.getElementById("jointProModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function handleJCanvasClick(t) {
    let e = Date.now();
    if (e - jInputLock < 500 || hasMovedJ || isJDragging || e - jLastMoveTime < 300) return;
    let a = jCanvas.getBoundingClientRect(),
        n = t.changedTouches ? t.changedTouches[0].clientX : t.clientX,
        o = (n - a.left) * (jCanvas.width / a.width),
        i = o < jCanvas.width / 2 ? "L" : "R";
    if (null === jState[i].img) {
        jInputLock = e;
        document.getElementById("jInput" + i).click();
    }
}

function renderJPro() {
    if (!jCtx) return;
    jCtx.fillStyle = jGlobalBG;
    jCtx.fillRect(0, 0, jCanvas.width, jCanvas.height);
    drawJSide("L", 0, 285);
    drawJSide("R", 285, 285);
    if (jBorderWidth > 0) {
        jCtx.strokeStyle = "#000000";
        jCtx.lineWidth = 2 * jBorderWidth;
        jCtx.strokeRect(0, 0, jCanvas.width, jCanvas.height);
    }
}

function drawJSide(t, e, a) {
    let n = jState[t];
    if (n.img) {
        jCtx.save();
        jCtx.beginPath();
        jCtx.rect(e, 0, a, jCanvas.height);
        jCtx.clip();
        jCtx.translate(e + a / 2 + n.x, jCanvas.height / 2 + n.y);
        jCtx.rotate((n.rot + n.straighten) * Math.PI / 180);
        jCtx.scale(n.zoom * n.flip, n.zoom);
        jCtx.filter = `brightness(${n.br}%) contrast(${n.ct}%) saturate(${n.st}%)`;
        jCtx.drawImage(n.img, -n.img.width / 2, -n.img.height / 2);
        jCtx.restore();
    }
}

function rotateJoint(t) { jState[t].rot = (jState[t].rot + 90) % 360; renderJPro(); }
function flipJoint(t) { jState[t].flip *= -1; renderJPro(); }

function setupJEvents() {
    let getCoord = t => {
        let e = jCanvas.getBoundingClientRect(),
            a = t.touches && t.touches[0] ? t.touches[0].clientX : t.clientX,
            n = t.touches && t.touches[0] ? t.touches[0].clientY : t.clientY;
        return { x: (a - e.left) * (jCanvas.width / e.width), rawX: a, rawY: n };
    };

    let onStart = e => {
        if ("INPUT" === e.target.tagName || "range" === e.target.type) { isJDragging = !1; return; }
        let a = getCoord(e);
        jActiveSide = a.x < jCanvas.width / 2 ? "L" : "R";
        hasMovedJ = !1;
        if (e.target === jCanvas && jState[jActiveSide].img) {
            isJDragging = !0; jStartX = a.rawX; jStartY = a.rawY;
        }
    };

    let onMove = e => {
        if (!isJDragging) return;
        let a = getCoord(e);
        if (Math.abs(a.rawX - jStartX) > 5 || Math.abs(a.rawY - jStartY) > 5) {
            hasMovedJ = !0; jLastMoveTime = Date.now();
            jState[jActiveSide].x += a.rawX - jStartX;
            jState[jActiveSide].y += a.rawY - jStartY;
            jStartX = a.rawX; jStartY = a.rawY;
            renderJPro();
        }
        if (e.cancelable) e.preventDefault();
    };

    let onEnd = t => {
        if (isJDragging) isJDragging = !1;
        else if (t.target === jCanvas) handleJCanvasClick(t);
        setTimeout(() => { hasMovedJ = !1; }, 150);
    };

    jCanvas.onmousedown = onStart;
    jCanvas.addEventListener("touchstart", onStart, { passive: !1 });
    window.addEventListener("mousemove", onMove, { passive: !1 });
    window.addEventListener("touchmove", onMove, { passive: !1 });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);

    ["Br", "Ct", "St", "Straighten", "Zoom"].forEach(t => {
        let e = "Straighten" === t ? "straighten" : t.toLowerCase();
        ["L", "R"].forEach(side => {
            let el = document.getElementById("j" + t + side);
            if (el) {
                el.oninput = n => {
                    let val = "Zoom" === t ? parseFloat(n.target.value) : parseInt(n.target.value);
                    jState[side][e] = val;
                    document.getElementById("v-j" + t + side).innerText = val + ("Straighten" === t ? "°" : "Zoom" === t ? "x" : "%");
                    renderJPro();
                };
            }
        });
    });

    document.getElementById("jBorder").oninput = t => {
        jBorderWidth = parseInt(t.target.value);
        document.getElementById("v-jBorder").innerText = jBorderWidth + "px";
        renderJPro();
    };

    document.getElementById("jInputL").onchange = t => loadJImg(t.target.files[0], "L");
    document.getElementById("jInputR").onchange = t => loadJImg(t.target.files[0], "R");
}

function loadJImg(file, side) {
    if (!file) return;
    let reader = new FileReader();
    reader.onload = e => {
        let img = new Image();
        img.onload = () => {
            jState[side].img = img; jState[side].x = 0; jState[side].y = 0;
            document.getElementById("jHint" + side).style.display = "none";
            renderJPro();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ২. সংশোধিত ব্যাকগ্রাউন্ড রিমুভাল ফাংশন (MediaPipe Local AI)
async function removeJointBg(side) {
    if (!jState[side].img) {
        alert("Please add photo first!");
        return;
    }

    let btn = document.getElementById("jAiBtn" + side), 
        oldText = btn.innerHTML;

    btn.disabled = true; 
    btn.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i> AI Processing...";

    if (!jSelfieSegmentation) initJointAI();

    const imgElement = jState[side].img;
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    // প্রসেসিং স্পিডের জন্য ছবি বেশি বড় হলে রিসাইজ করা (Max 1080px)
    const maxDim = 1080;
    let w = imgElement.width;
    let h = imgElement.height;
    if(w > h && w > maxDim){ h *= maxDim/w; w = maxDim; }
    else if(h > maxDim){ w *= maxDim/h; h = maxDim; }
    
    tempCanvas.width = w;
    tempCanvas.height = h;

    jSelfieSegmentation.onResults((results) => {
        tempCtx.save();
        tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.drawImage(results.segmentationMask, 0, 0, tempCanvas.width, tempCanvas.height);

        tempCtx.globalCompositeOperation = 'source-in';
        tempCtx.drawImage(results.image, 0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.restore();

        const resultImg = new Image();
        resultImg.onload = () => {
            jState[side].img = resultImg;
            renderJPro();
            btn.disabled = false;
            btn.innerHTML = oldText;
        };
        resultImg.src = tempCanvas.toDataURL("image/png");
    });

    await jSelfieSegmentation.send({ image: imgElement });
}

function downloadJointPro(t) {
    if (!jState.L.img || !jState.R.img) {
        alert("Please add both photos first!");
        return;
    }

    let rows = parseInt(document.getElementById("jRows").value) || 1,
        cols = parseInt(document.getElementById("jCols").value) || 1,
        n = jCanvas.toDataURL("image/jpeg", 0.95);

    if ("jpg" === t) {
        let link = document.createElement("a");
        link.download = "Joint_Photo.jpg";
        link.href = n;
        link.click();
    } else {
        let { jsPDF: i } = window.jspdf,
            pdf = new i("p", "mm", "a4");

        const imgW = 48.26; 
        const imgH = 38.1;  
        const startX = 2;   
        const startY = 3;   
        const gapX = 3;   
        const gapY = 3; 

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let x = startX + (imgW + gapX) * c;
                let y = startY + (imgH + gapY) * r;
                if (x + imgW <= 208 && y + imgH <= 290) { 
                    pdf.addImage(n, "JPEG", x, y, imgW, imgH);
                }
            }
        }

        if ("print" === t) {
            pdf.autoPrint();
            const blobUrl = pdf.output('bloburl');
            window.open(blobUrl, '_blank');
        } else {
            pdf.save("Joint_Photo_A4.pdf");
        }
    }
}

window.adjustJLayout = function(id, val) {
    let el = document.getElementById(id), 
        n = parseInt(el.value) || 1;
    n += val;
    if (id === "jRows") n = Math.max(1, Math.min(7, n));
    else if (id === "jCols") n = Math.max(1, Math.min(4, n));
    el.value = n;
};

window.setGlobalJBG = function(color) { jGlobalBG = color; renderJPro(); };

function deleteJointImage(t) {
    if (!jState[t].img) {
        alert("No image to delete!");
        return;
    }
    jState[t] = { img: null, zoom: 1, rot: 0, straighten: 0, flip: 1, x: 0, y: 0, br: 100, ct: 100, st: 100 };
    ["Br", "Ct", "St", "Straighten", "Zoom"].forEach(ctrl => {
        let inputEl = document.getElementById("j" + ctrl + t);
        let labelEl = document.getElementById("v-j" + ctrl + t);
        if (inputEl) inputEl.value = (ctrl === "Zoom" ? 1 : ctrl === "Straighten" ? 0 : 100);
        if (labelEl) labelEl.innerText = (ctrl === "Zoom" ? "1.00x" : ctrl === "Straighten" ? "0°" : "100%");
    });
    document.getElementById("jInput" + t).value = "";
    document.getElementById("jHint" + t).style.display = "flex";
    renderJPro();
}
;

let ps4Img = new Image, ps4Canvas, ps4Ctx, ps4CropBox, ps4Loaded = !1, ps4Rotation = 0, ps4IsCropped = !1, ps4PhotoType = "passport", ps4CurrentBG = "transparent", cbX = 0, cbY = 0, cbW = 0, cbH = 0, isResizing = !1, currentHandle = null, isDragging = !1, startMX, startMY;

// MediaPipe AI Variable
let ps4SelfieSegmentation = null;

function getPst4Elements() {
    ps4Canvas || ((ps4Canvas = document.getElementById("ps4Canvas")) && (ps4Ctx = ps4Canvas.getContext("2d", { willReadFrequently: !0 })), ps4CropBox = document.getElementById("ps4CropBox"))
}

function isPhotoReady() {
    return !!ps4Loaded || ("function" == typeof showAlert ? showAlert("Please import a photo first!") : alert("Please import a photo first!"), !1)
}

function openPassportProModal() {
    getPst4Elements();
    "function" == typeof setActiveMode && setActiveMode("mode-passport-pro");
    let t = document.getElementById("ppProModal");
    t && (t.style.display = "flex", document.body.style.overflow = "hidden");
    
    // AI ইঞ্জিন আগে থেকে ইনিশিয়ালাইজ করে রাখা
    initPs4AI();
}

// ১. এআই ইঞ্জিন ইনিশিয়ালাইজ করা (ফ্রি ও আনলিমিটেড)
function initPs4AI() {
    if (!ps4SelfieSegmentation && typeof SelfieSegmentation !== "undefined") {
        ps4SelfieSegmentation = new SelfieSegmentation({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`,
        });
        ps4SelfieSegmentation.setOptions({ modelSelection: 1 });
    }
}

function closePassportProModal() {
    let t = document.getElementById("ppProModal");
    t && (t.style.display = "none"), document.body.style.overflow = "auto"
}

function handleViewportClick(e) {
    ps4Loaded || document.getElementById("ps4FileInput").click()
}

function setFinalType(e, t) {
    t && t.stopPropagation(), ps4PhotoType = e, document.getElementById("ps4SizePicker").style.display = "none", initPs4Canvas(!0)
}

function initPs4Canvas(e = !1) {
    if (ps4Canvas && ps4Img.src) {
        if (ps4Canvas.width = ps4Img.width, ps4Canvas.height = ps4Img.height, renderPs4Editor(), e) {
            let t = "passport" === ps4PhotoType ? 4.5 / 3.5 : 1.25;
            cbH = (cbW = .5 * ps4Canvas.width) * t, cbX = (ps4Canvas.width - cbW) / 2, cbY = (ps4Canvas.height - cbH) / 2
        }
        updateCropBoxUI(), ps4CropBox.style.display = "block"
    }
}

document.getElementById("ps4FileInput") && document.getElementById("ps4FileInput").addEventListener("change", function(e) {
    let t = e.target.files[0];
    if (!t) return;
    if (t.size > 10485760) {
        "function" == typeof showAlert && showAlert("File is too large! Please use a photo under 10MB.");
        return
    }
    let i = new FileReader;

    function n() {
        ps4Loaded = !0, ps4Rotation = 0, ps4IsCropped = !1, document.getElementById("ps4Hint").style.display = "none", document.getElementById("ps4Canvas").style.display = "block", document.getElementById("ps4SizePicker").style.display = "block", document.getElementById("ps4CropBox").style.display = "none", initPs4Canvas(!1)
    }
    i.onload = e => {
        let t = new Image;
        t.onload = () => {
            let e = t.width,
                i = !1;
            if (e < 800 ? (e = 1200, i = !0) : e > 2500 && (e = 2e3, i = !0), i) {
                let l = e / t.width,
                    a = document.createElement("canvas");
                a.width = e, a.height = t.height * l;
                let s = a.getContext("2d", { alpha: !1 });
                s.imageSmoothingEnabled = !0, s.imageSmoothingQuality = "medium", s.drawImage(t, 0, 0, a.width, a.height), (ps4Img = new Image).onload = () => n(), ps4Img.src = a.toDataURL("image/jpeg", .9)
            } else ps4Img = t, n()
        }, t.src = e.target.result
    }, i.readAsDataURL(t)
});

function renderPs4Editor() {
    if (!ps4Loaded) return;
    let t = document.getElementById("p4-br").value,
        e = document.getElementById("p4-ct").value,
        i = document.getElementById("p4-st").value,
        l = document.getElementById("p4-border").value,
        h = document.getElementById("p4-rotation"),
        n = h ? parseInt(h.value) : 0;
    ps4Ctx.clearRect(0, 0, ps4Canvas.width, ps4Canvas.height);
    ps4Ctx.save();
    if ("transparent" !== ps4CurrentBG) {
        ps4Ctx.fillStyle = ps4CurrentBG;
        ps4Ctx.fillRect(0, 0, ps4Canvas.width, ps4Canvas.height)
    }
    ps4Ctx.translate(ps4Canvas.width / 2, ps4Canvas.height / 2);
    ps4Ctx.rotate(n * Math.PI / 180);
    ps4Ctx.filter = `brightness(${t}%) contrast(${e}%) saturate(${i}%)`;
    ps4Ctx.drawImage(ps4Img, -ps4Canvas.width / 2, -ps4Canvas.height / 2, ps4Canvas.width, ps4Canvas.height);
    ps4Ctx.restore();
    if (l > 0) {
        ps4Ctx.filter = "none";
        ps4Ctx.lineWidth = ps4Canvas.width * l / 100;
        ps4Ctx.strokeStyle = "#000000";
        ps4Ctx.strokeRect(0, 0, ps4Canvas.width, ps4Canvas.height)
    }
}

function updateCropBoxUI() {
    let t = ps4Canvas.getBoundingClientRect(),
        e = t.width / ps4Canvas.width;
    ps4CropBox.style.left = cbX * e + "px", ps4CropBox.style.top = cbY * e + "px", ps4CropBox.style.width = cbW * e + "px", ps4CropBox.style.height = cbH * e + "px"
}

function getPos(e) {
    return e.touches && e.touches.length > 0 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY }
}

function initResize(e, t) {
    e.cancelable && e.preventDefault(), e.stopPropagation(), isResizing = !0, currentHandle = t;
    let n = getPos(e);
    startMX = n.x, startMY = n.y
}
if (document.getElementById("ps4CropBox")) {
    let e = document.getElementById("ps4CropBox"),
        t = e => {
            if (isResizing) return;
            e.stopPropagation(), isDragging = !0;
            let t = getPos(e);
            startMX = t.x, startMY = t.y
        };
    e.addEventListener("mousedown", t), e.addEventListener("touchstart", t, { passive: !1 })
}

function handleMove(e) {
    if (!ps4Loaded || !isResizing && !isDragging) return;
    let t = ps4Canvas.getBoundingClientRect(),
        n = ps4Canvas.width / t.width,
        o = getPos(e),
        s = (o.x - startMX) * n,
        i = (o.y - startMY) * n;
    if (isResizing) {
        "br" === currentHandle ? cbW += s : "tl" === currentHandle ? (cbX += s, cbW -= s, cbY += s * ("passport" === ps4PhotoType ? 4.5 / 3.5 : 1.25)) : "tr" === currentHandle ? (cbW += s, cbY -= s * ("passport" === ps4PhotoType ? 4.5 / 3.5 : 1.25)) : "bl" === currentHandle && (cbX += s, cbW -= s), cbW = Math.max(40, cbW);
        cbH = cbW * ("passport" === ps4PhotoType ? 4.5 / 3.5 : 1.25)
    } else isDragging && (cbX += s, cbY += i);
    cbX = Math.max(0, Math.min(ps4Canvas.width - cbW, cbX)), cbY = Math.max(0, Math.min(ps4Canvas.height - cbH, cbY)), startMX = o.x, startMY = o.y, updateCropBoxUI(), e.cancelable && e.preventDefault()
}
window.addEventListener("mousemove", handleMove), window.addEventListener("touchmove", handleMove, { passive: !1 }), window.addEventListener("mouseup", () => {
    isResizing = !1, isDragging = !1
}), window.addEventListener("touchend", () => {
    isResizing = !1, isDragging = !1
});

function confirmPs4Crop(e) {
    if (e && e.stopPropagation(), !isPhotoReady()) return;
    if (ps4IsCropped) {
        "function" == typeof showAlert && showAlert("Photo already cropped!");
        return
    }
    let t = document.createElement("canvas");
    t.width = 600, t.height = "passport" === ps4PhotoType ? 770 : 750;
    t.getContext("2d").drawImage(ps4Canvas, Math.floor(cbX), Math.floor(cbY), Math.floor(cbW), Math.floor(cbH), 0, 0, t.width, t.height), (ps4Img = new Image).onload = () => {
        ps4IsCropped = !0;
        let e = document.getElementById("ps4CropBtn");
        e && (e.style.opacity = "0.5", e.style.pointerEvents = "none");
        let t = document.getElementById("p4-rotation");
        t && (t.value = 0, t.disabled = !0, t.style.opacity = "0.5", document.getElementById("v4-rotation").innerText = "0\xb0"), initPs4Canvas(!0), ps4CropBox.style.display = "none"
    }, ps4Img.src = t.toDataURL("image/png")
}

function rotatePs4(e) {
    if (e && e.stopPropagation(), !isPhotoReady() || ps4IsCropped) return;
    let t = document.createElement("canvas"),
        n = t.getContext("2d");
    t.width = ps4Img.height, t.height = ps4Img.width, n.translate(t.width / 2, t.height / 2), n.rotate(Math.PI / 2), n.drawImage(ps4Img, -ps4Img.width / 2, -ps4Img.height / 2), (ps4Img = new Image).onload = () => renderPs4Editor(), ps4Img.src = t.toDataURL("image/png")
}

// ২. সংশোধিত ব্যাকগ্রাউন্ড রিমুভাল ফাংশন (MediaPipe Local AI - Unlimited & Free)
async function runPs4AI() {
    if (!isPhotoReady()) return;
    let e = document.getElementById("ps4AiBtn"),
        t = '<i class="fa-solid fa-wand-magic-sparkles"></i> Remove Background';
    e.disabled = !0, e.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Locally...';

    if (!ps4SelfieSegmentation) initPs4AI();

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    
    // প্রসেসিং এর জন্য ছবির আকার ঠিক করা
    tempCanvas.width = ps4Img.width;
    tempCanvas.height = ps4Img.height;

    ps4SelfieSegmentation.onResults((results) => {
        tempCtx.save();
        tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.drawImage(results.segmentationMask, 0, 0, tempCanvas.width, tempCanvas.height);

        tempCtx.globalCompositeOperation = 'source-in';
        tempCtx.drawImage(results.image, 0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.restore();

        const resultImg = new Image();
        resultImg.onload = () => {
            ps4Img = resultImg;
            e.innerHTML = t, e.disabled = !1;
            renderPs4Editor();
        };
        resultImg.src = tempCanvas.toDataURL("image/png");
    });

    await ps4SelfieSegmentation.send({ image: ps4Img });
}

function setPs4BG(e) {
    isPhotoReady() && (ps4CurrentBG = e, renderPs4Editor())
}

async function exportPs4(e) {
    if (!isPhotoReady()) return;
    let t = ps4Canvas.toDataURL("image/png");
    if ("png" === e) {
        let n = document.createElement("a");
        n.download = ps4PhotoType + ".png", n.href = t, n.click()
    } else {
        let { jsPDF: l } = window.jspdf, a = new l("p", "mm", "a4"), r = Math.min(parseInt(document.getElementById("p4-rows").value) || 1, "passport" === ps4PhotoType ? 6 : 10), d = Math.min(parseInt(document.getElementById("p4-cols").value) || 1, "passport" === ps4PhotoType ? 5 : 8), i = "passport" === ps4PhotoType ? 38.1 : 20, s = "passport" === ps4PhotoType ? 48.26 : 25;
        for (let p = 0; p < r; p++)
            for (let o = 0; o < d; o++) {
                let u = 3 + o * (i + 3),
                    m = 2 + p * (s + 3);
                u + i <= 210 && m + s <= 297 && a.addImage(t, "PNG", u, m, i, s)
            }
        a.save(ps4PhotoType + "_Sheet.pdf")
    }
}

function deletePs4(e) {
    e && e.stopPropagation(), ps4Loaded = !1, ps4IsCropped = !1, ps4CurrentBG = "transparent", ps4Img = new Image, ps4Ctx.clearRect(0, 0, ps4Canvas.width, ps4Canvas.height), ps4Canvas.style.display = "none", document.getElementById("ps4Hint").style.display = "block", ps4CropBox.style.display = "none", document.getElementById("ps4FileInput").value = "";
    let t = document.getElementById("ps4CropBtn");
    t && (t.style.opacity = "1", t.style.pointerEvents = "auto");
    let n = document.getElementById("p4-rotation");
    n && (n.disabled = !1, n.style.opacity = "1", n.value = 0, document.getElementById("v4-rotation").innerText = "0\xb0"), document.getElementById("p4-br").value = 100, document.getElementById("p4-ct").value = 100, document.getElementById("p4-st").value = 100, document.getElementById("p4-border").value = 0, document.getElementById("v4-br").innerText = "100%", document.getElementById("v4-ct").innerText = "100%", document.getElementById("v4-st").innerText = "100%", document.getElementById("v4-border").innerText = "0"
}

["p4-br", "p4-ct", "p4-st", "p4-border", "p4-rotation"].forEach(e => {
    let t = document.getElementById(e);
    if (!t) return;
    let n = !1,
        l = t.value,
        a = e => {
            if (t.disabled) return;
            let a = t.getBoundingClientRect(),
                r = e.touches ? e.touches[0].clientX : e.clientX,
                d = (t.value - t.min) / (t.max - t.min),
                i = a.left + d * a.width;
            Math.abs(r - i) > 30 ? n = !1 : (n = !0, l = t.value)
        };
    t.addEventListener("mousedown", a), t.addEventListener("touchstart", a, { passive: !0 }), t.addEventListener("input", a => {
        if (t.disabled || !n) {
            t.value = l;
            return
        }
        let r = document.getElementById("v4-" + e.split("-")[1]);
        if (r) {
            let d = "p4-border" === e ? "" : "p4-rotation" === e ? "\xb0" : "%";
            r.innerText = a.target.value + d
        }
        ps4Loaded && renderPs4Editor()
    });
    let r = () => {
        n = !1
    };
    window.addEventListener("mouseup", r), window.addEventListener("touchend", r)
});
;

(function() {
    let currentUI_Lang = 'bn';

    // ১. মোডাল কন্ট্রোল ফাংশন
    window.showDateConverter = function() {
        try { if (typeof setActiveMode === 'function') setActiveMode('mode-date-converter'); } catch(e) {}
        const modal = document.getElementById("dateConverterModal");
        const dateInput = document.getElementById('eng-date-input');
        
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";

            // বর্তমান তারিখ (Today's Date) সিলেক্ট করার লজিক
            if (dateInput && !dateInput.value) {
                const today = new Date();
                const yyyy = today.getFullYear();
                const mm = String(today.getMonth() + 1).padStart(2, '0');
                const dd = String(today.getDate()).padStart(2, '0');
                dateInput.value = `${yyyy}-${mm}-${dd}`;
            }

            switchDateLang('bn');
        }
    };

    window.hideDateConverter = function() {
        const modal = document.getElementById("dateConverterModal");
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    // ২. ভাষা পরিবর্তন
    window.switchDateLang = function(lang) {
        currentUI_Lang = lang;
        document.getElementById('dc-btn-bn').classList.toggle('active', lang === 'bn');
        document.getElementById('dc-btn-en').classList.toggle('active', lang === 'en');

        const labels = {
            bn: { title: "তারিখ কনভার্টার (অ্যাডভান্সড)", input: "ইংরেজি তারিখ নির্বাচন করুন:", en: "ইংরেজি তারিখ:", bn: "বাংলা তারিখ (বঙ্গাব্দ):", ar: "আরবি তারিখ (হিজরি):" },
            en: { title: "Advanced Date Converter", input: "Select English Date:", en: "English Date:", bn: "Bangla Date (Bengali):", ar: "Arabic Date (Hijri):" }
        };

        const t = labels[lang];
        document.getElementById('dc-ui-title').innerText = t.title;
        document.getElementById('dc-lbl-input').innerText = t.input;
        document.getElementById('dc-res-en-title').innerText = t.en;
        document.getElementById('dc-res-bn-title').innerText = t.bn;
        document.getElementById('dc-res-ar-title').innerText = t.ar;

        if (document.getElementById('eng-date-input').value) processAllDateConversions();
    };

    // ৩. মূল লজিক (৭ মার্চ = ১৭ রমজান = ২২ ফাল্গুন)
    window.processAllDateConversions = function() {
        const input = document.getElementById('eng-date-input').value;
        if (!input) return;

        const date = new Date(input);
        document.getElementById('dc-results').style.display = 'block';

        const bnNums = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
        const toBn = (n) => n.toString().split('').map(d => bnNums[d] || d).join('');

        // --- English ---
        const enVal = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
        document.getElementById('res-en-num').innerText = enVal;

        // --- Arabic (Fixed Offset for 17 Ramadan) ---
        const arMonthsBn = ["মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জিলকদ", "জিলহজ"];
        const arMonthsEn = ["Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"];
        
        const arDate = new Date(date.getTime() + (-1 * 24 * 60 * 60 * 1000)); // -1 day offset
        const arFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {day:'numeric', month:'numeric', year:'numeric'});
        const arParts = arFormatter.formatToParts(arDate);
        const hd = parseInt(arParts.find(p => p.type === 'day').value);
        const hm = parseInt(arParts.find(p => p.type === 'month').value);
        const hy = arParts.find(p => p.type === 'year').value;

        if (currentUI_Lang === 'bn') {
            document.getElementById('res-ar-num').innerText = toBn(hd) + "ই " + arMonthsBn[hm - 1] + " " + toBn(hy) + " হিজরি";
        } else {
            document.getElementById('res-ar-num').innerText = hd + " " + arMonthsEn[hm - 1] + " " + hy + " Hijri";
        }

        // --- Bangla (Government Revised Logic) ---
        const bnMonths = ["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"];
        const enBnMonths = ["Boishakh", "Jyaistha", "Asharh", "Srabon", "Bhadra", "Ashwin", "Kartika", "Agrahayana", "Pousha", "Magha", "Falgun", "Chaitra"];
        
        const bnDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 29, 30]; 
        let gy = date.getFullYear();
        if ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) bnDays[10] = 30;

        let bYear = gy - 593;
        let bishakh1 = new Date(gy, 3, 14);
        if (date < bishakh1) {
            bYear--;
            bishakh1 = new Date(gy - 1, 3, 14);
            let py = gy - 1;
            if ((py % 4 === 0 && py % 100 !== 0) || (py % 400 === 0)) bnDays[10] = 30; else bnDays[10] = 29;
        }

        let diff = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(bishakh1.getFullYear(), bishakh1.getMonth(), bishakh1.getDate())) / 86400000);
        let mi = 0;
        while (diff >= bnDays[mi]) { diff -= bnDays[mi]; mi++; }
        let bd = diff + 1;

        if (currentUI_Lang === 'bn') {
            document.getElementById('res-bn-num').innerText = toBn(bd) + "ই " + bnMonths[mi] + " " + toBn(bYear) + " বঙ্গাব্দ";
        } else {
            document.getElementById('res-bn-num').innerText = bd + " " + enBnMonths[mi] + " " + bYear + " Bangabda";
        }
    };

    window.resetDatePro = function() {
        document.getElementById('eng-date-input').value = '';
        document.getElementById('dc-results').style.display = 'none';
    };

    // --- আপডেট করা কপি লজিক ---
    window.copyDateResult = function(btn) {
        const en = document.getElementById('res-en-num').innerText;
        const bn = document.getElementById('res-bn-num').innerText;
        const ar = document.getElementById('res-ar-num').innerText;
        
        const textToCopy = (currentUI_Lang === 'bn') ? 
            `ইংরেজি: ${en}\nবাংলা: ${bn}\nআরবি: ${ar}` : 
            `English: ${en}\nBangla: ${bn}\nArabic: ${ar}`;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btn.innerText;
            const originalBg = btn.style.background;
            
            btn.innerText = (currentUI_Lang === 'bn' ? "কপি হয়েছে!" : "Copied!");
            btn.style.background = "#10b981";

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = originalBg;
            }, 2000);
        }).catch(err => {
            console.error('Copy failed: ', err);
        });
    };

})();
;

const travelData = {
    airline: [
        { name: "Air Astra - Airways Limited", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzFwE1JacbyZYGxfFGlgrAzNHpcHIC3cGStp3sFdzQExU3t_SbY7TAKf_nu-NjAkHsAFnKzOfQ2Eb7EjMfYzNpt1tVARx9KcArP0KTLkgJ18XmszIWPtP72q_qyzD-CUP3aCwU9jgpXAdCc4kHip_WDbbdfJGJrW4TNHGdvuEirE476SmL5YunKaBbyGk/s310/airastra.jpeg", url: "https://airastra.com/" },
        { name: "NovoAir - Flight journey", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmCdx87khpWyigXErtMmgY3pCa0eLX7TujrfpJirNlUWDXLviPS3mBE3WR-O2PTffw35SE9Te5aNV9bMj7oODetlxpPd25xgfs-JMMCjQD_Lj8ZEqsPd-Y_b8FhzNAIzBvMFMlrbeBFZ4YJRx0H9kKwm3n5cA3wHpU-_l5w_oqZJib5jXh6L4v5G_3u6M/s282/novoair.jpeg", url: "https://www.flynovoair.com/" },
        { name: "CheapOair - Flight Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdBeTFWZoK078de1HgMF6-SUsDaCXWwRCc_X1eMiKinq9RL30OvnESoSdRgwmuF5gOMqYNZ5slqcZfAg1wwAp3hid8lhQxaZ6JbgcvWHXOjy3SHtSE0uGs0Nl-oasjxQNikJ3DDBSeMARhPBnmcoynxZaOf06TTP9hhO_65qzLcC8PrPzPSlL9CK8IVrI/s280/cheapoair.jpeg", url: "https://www.cheapoair.com/" },
        { name: "Bangladesh Biman Airlines", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFBygpOUNHZd6oZF1cELJFQcYZrQyZXqFdQXTg1b1tef2NPW3AxTGB8nAgqcVG25Zx8TU6N7oxE_SBIWl141QVEWsx9XtF2wA5wg9i2MqFs4MQCEEABYZMbsu18MCguaVSIFg6wYtWsIBYKs-KvZF1MQWfQt6zaFcZpkDW5KO8mFoLyxWSCwuXpqkFATo/s301/hsia.jpeg", url: "https://www.hsia.gov.bd/bn/" },
        { name: "OneTravel - Flights & Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiIp1CXwAMFZnngeZ4cYTnIt7wbH5-1rKzUI-FOChONcdpFu4pC1Hw95cyI7XYTBtHPj75GojeSCRNwAM4m5DHLQuHzlBk0WfMHZkNxfkB18zNaxoXdh6aL0_3aoNESjxKk1QzWVxtaONY5gF3_VV-jcfTpTPKcGgNkVHXEp79Vr-ZEmDtBZErN8AdOF8/s300/onetravel.jpeg", url: "https://www.onetravel.com/" },
        { name: "Trips Insider - Air Ticket", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis30Ww8khsAtOYGvq-sJtGkr2oMs6plzmy30qK2Cg-8haqTeS7ZXghzVQ6QZoaFWTxKlSj7zrC7Pxpa_U9jxThFxj02vu_IaFHqXuWEoXcYBwHuB_XCURdfur9GeNnJBM_WS3bj2wfgj_0HjURUh2QYd20BxTXXzLA8NpXS85sKrCBuIeUrDcWc3ZK7Vs/s299/tripsinsider.jpeg", url: "https://www.tripsinsider.com/flights/" },
        { name: "Flight Fare - Ticket Bangladesh", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMo5RPw8fmeiruDpAFlHSItavRqG7oAwdfaUpoS04i1lN0HGLn_OBoaTW569j2sJjKx_S84G0ym3_0CIjax-BdU7qh-T57lyskttzztWaRke0QhhekclTFZJoR9hJilm_HwMKccnLuDoXL22uQgOTBsHp1usMLxZc3uWhnSbquieDWRG1Me305sOrI27Y/s298/flight-fare.jpeg", url: "https://www.flight-fare.com/" },
        { name: "Shohoz - Air Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6-YOiojE9oOsZIYy9inW1J0iv3sS8lL5diptKtFW1x2bE2ZV5QlHLV2oBKr4ucXtkg2SHH9k5upQzIm0ZhMkGdXukUUENc5Td_OCP5Ec5H_M43ZskW6pd4F7Ux6Evnzj8e-6M6wJFKwelKEiguIU1QmyZa-dwF6_9X7j87VVJRksTy8W4hKIbD_IPtuQ/s300/shohoz.jpeg", url: "https://www.shohoz.com/air-tickets" },
        { name: "US-Bangla Airlines", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLDIS9PBmqJVLytVi7xNwUUpE1pKXvvRqWDz1uo8WEKQOrXdZFMcqtSxiNfZufUkH5beF3l3GJkc1MrKzq3rA-eGj6QtKEgA2ZMo_GcthwK84SFhHZmCkfyKu41AAAW9Tjxy_Ibfaq3X10S-7TKYK9nlkBCfThSVbmvidm1OPMGKJhBbG6tmqRilN6ZJk/s180/usbair.jpeg", url: "https://usbair.com/" },
        { name: "Biman Bangladesh Airlines", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx2zt7gC9GxQiXxDnk1jjcy225VjMuKVdLpJakdKnafkYwBautVNlZ1XLNX5R1b6e9kHfHh3VV9FE3VtHOp2y5K4TXUfeKz-8OY7mz4uQLchCcE8__WHPIoexLztlNJSNqQ5SKqSdofQL0uX0J2LQndh39hCfdFK9hZrY3iAW-NPnDN-kgPFOR4QUlBps/s208/biman-airlines.jpeg", url: "https://www.biman-airlines.com/" },
        { name: "Buy Tickets BD", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlaUNTVCv_7H0Cqt5O15tbLfy27iBBVTtcpOJ4V_dfmukM1ByTCKg_s8NJ4KmZYJcwfZ5p-tUNkVF7BUg4w5X-BDNEZicNja6OLLwAb-C5ovYFBBvUXas1WEWRTQsrlNqdpJP81DwpPvKgqwrkEXWseOJYQFlGFpvRyeEwLXg6OyBzdnNSJIZdeK2Fiz8/s256/buytickets.jpeg", url: "https://buytickets.com.bd/" },
        { name: "Amy Travel Agency", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtswuB4Rzm-FPOJmoD-q-JfaHMXni3NU2rg6_0VuOsga6ddAP8zCsPMnvB3LaUKL35SCaom4Pg42Po8z8JtI9pVv9nr5Z5c0_9GyQLzhcR3aiGBF93tmycLCHj1M6Nd1yuecPaKWbglLBpn9J6Xn_HlFRgJshcDJzJ_HxW8nWPdDrjz0YLZf4Hy5GY1Hw/s605/amy.jpeg", url: "https://www.amybd.com/" },
        { name: "Firsttrip - Flight Booking", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilY131MwEU9OziE6aO2japzvY0UtXasuJ8oPOeRXa_Em4MKsbXQJAsUGJAfD7DeZuHH_XiyesjbnxdTF2OX3fCvdJnEV-tKm_wq2oZTajp-fYY4pUZZaDECYhcI85loxnO5XKEvuh3Bysw4RWVH9K7gf8Brsg1TBSMFFxQMwwlYnkgr1MYDQhA2uBXxaY/s494/firsttrip.jpeg", url: "https://firsttrip.com/" },
        { name: "GoZayaan Travel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifWUi0ebKglTSr6lXMXSHmvXP3q62xJ-CvvnDikM5emQVPybzf0fA-nFmKAb4uqf9X4zd5Qux3fxnBNu9hrPxthyphenhyphenXQOI7sc55ejOM5KF7fzxWX_dP0kX80-Ls707TXV-XjWmqOQCcu70vKkjIIUmpaz7u3fmNvPdXBFzmuIVO4tg7frFtd6HmGJGQMETA/s130/gozayaan.jpeg", url: "https://gozayaan.com/" },
        { name: "Airpaz - Traveling", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi11IN9cCtfiUcC4VTZ29mGIulxAG4TLWwKIodNcPkmG5P-iNZFejbLECtEKRJF4f-LtsZu3X-4GEDLVhRzwB3RdA3mqssL34kUaMGZC2LlqpmgmwyxaviWZwRXBC0uw-PWImkoDjBskcnk1dfPoAcPC5mY5Gg1RajBZompYAYo82h5NbuBxzHU4KjzM5A/s140/airpaz.png", url: "https://www.airpaz.com/" },
        { name: "ShareTrip - Air Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0NOdrWQEVXv7y_5zQljA9j21ieRiyjxWlrJaWC5YdoD1JkzePW2HOSg79WEFortmh6sNhpd7SRQGDniDlPb9pyb-GDGOKv0A1YRcXlqopbPHcwVZK0K8Z8h0tQEg2ANFKWjkAeemd7ifYa1kdk1SikwKSKX2jQPEjc0VBE7tv1nusYCeCSpMwV3ZET64/s568/sharetrip.jpeg", url: "https://sharetrip.net/" }
    ],
    bus: [
        { name: "Jatri - Bus Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2jOMe7fIgGFZQF7rz9B4kGYd71gFVmsUYMDUYVHa2daMP5Y5GHu2mNI_Ns0S-XBiQMf-z0MNZ-sCKGsaEa1eCmh5qIKvq91-7-MVQDikXpAGCHOsQhhT1Yhv00HskGBhLWwcTACKFOxxcjXbVagPrC5IuJpuQTKYG-8DAuO2s3zk37xZOvrvT4hEulVM/s72/jatri.jpeg", url: "https://jatri.co/" },
        { name: "BdTickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4rj1LljIDCXWGKxsQq1rshi9PrmhT3-bEIHwELuEF5-XbLhD4aEPTwcM_MngUzcXaWdnylrUzGHjvW8FLINCQdbAb-TUmC7ZEFPZVOO9tUgCOX8Hc-vPFSKZE_kmoJWwNDf2uhwwqnuu2MeKVO27otb7qnSIfuT-JaK_iIeMrDo6Z52yW9Ts6VdjtJqM/s384/bdtickets.jpeg", url: "https://bdtickets.com/" },
        { name: "Shohoz - Bus Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6-YOiojE9oOsZIYy9inW1J0iv3sS8lL5diptKtFW1x2bE2ZV5QlHLV2oBKr4ucXtkg2SHH9k5upQzIm0ZhMkGdXukUUENc5Td_OCP5Ec5H_M43ZskW6pd4F7Ux6Evnzj8e-6M6wJFKwelKEiguIU1QmyZa-dwF6_9X7j87VVJRksTy8W4hKIbD_IPtuQ/s300/shohoz.jpeg", url: "https://www.shohoz.com/bus-tickets" },
        { name: "Busbd - Tickets Online", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRile9ABFI4-9lV2oLolGu85XXHl5D34FCr7lbD6-5oAd1Nk969fDvBHrutrpiPcQ0P2k4LlzDpctuyOyuAKlZOReDk3L03L0NPKM7HcZjZ-cu8WfAOpGTkNWcBRFpBjCn-QN0bHzQsD3SfNJYKL8qrMzbmjT3ATJwc_VYc746bQSmrwcvSupDQXYKRjI/s118/busbd.jpeg", url: "https://www.busbd.com.bd/" },
        { name: "Green Line – E-ticketing", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgre2Shmq2gWKs5sEp-aXh-zlkk-NqbLpBbjRjGCWnsaJMnaqqQZIg5zSLBE-J1cWajtivhZe-06QnMqUaWgnx2y67zTPAdREUoTBvXYqZDMhi4BH-lFmAHj8PrESGL1BHOTZB7IGhIIylgvQREjSPjAP9jh6PCZ1imxx-yiod7hv91dRLwOt_U7Ekt66U/s332/greenlinebd.png", url: "https://greenlinebd.com/" },
        { name: "Hanif Enterprise", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9z7-GH0VJC0GFVfq4PyJ79axGfwf_40h_8LEU-KiMDxaKuYi-tyTUhMQqzU6CHQZvJGnYTyhqcRu_HJ_V7ScAUmE5d003g031dumwyUEH-FlS9nujkNwILxeacMrmIcbFmEdnWV4ABaiCIQ0Er5-K13uBo1g1_GjrbSKJXY-T9y2AXzlDccSsVxa2QEk/s600/hanif.jpeg", url: "https://www.hanifenterprisebd.com/" },
        { name: "S-Alam - Online Bus Ticket", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhW4DjoagK_DMcIi_k2EQPETNBQ0HOpXg4MLYtzKirvOtREe12Oj1x4XHaU8peQxutAjWhuiPfjAP_BwqenX6wUthif8xgmHlLAZtHh52cKLpM1w0E7QEqHAHAbXHin-rt-fAQvkIB16x9-91iyvuzvPzr8BeqG3panbQ1QT3RP1efZOKqhnbvu2zbMUYM/s160/s-alambus.jpg", url: "https://s-alambus.com/" },
        { name: "Shyamoli Paribahan", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFOnwIs_g29y-bVAqVSYgxOmucraz7QsXP_z9ZJIUtO7aBbyW_mgnIui7vy_4uUgoUvvW0DfGmRjxcJhtrP92pV8kS7ZK4k9Gw2lF6j2qom8TByf-MQOknIIZ9eYytfNOHlzviFHAhmYd5wPLES136JyMUZev_oxYYQO4RG4WzCS8-v3ZtVO_8RYWqxZc/s400/shyamoliparibahan.jpeg", url: "https://shyamolitickets.com/" },
        { name: "National Travels", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8-U2juN1vbAIzy1GR3jVP6Zan80BX63YJBSL1iZtcITAmuY7ppwovjOOSJz689zKabdQ-cuttwd1n6JNgULuxN4eQTKxuL1p8F8NGGaRdzz7ur9WEygkZ7AwMa0nY0z8lx8bsPwI8TAgZ7rMflnSriyelruPeaVc77OrFcV-8-NoBcg5NRAfwHfIe7-0/s336/nationaltravels.jpeg", url: "https://www.nationaltravels-bd.com/" },
        { name: "Shohagh Paribahan", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOBbOgDcSH_mpk2U7xLzbqjh2by5JLmuLReysuEnDMGkXJU-50OV6HdmG8flwg_gDFIYuIZsvcjUkYy9JskjkG4ZOYtGZs8pARu9WXXy5d2lw-SXA1Z8MdU2XwyZKSELmEg4lGX1i_RQYFyxvY5n7SOS7hkDEfUI65p54rrYYYgPTKcpc5E5mbDOYPJoc/s1366/shohagh.png", url: "https://shohagh.com/" },
        { name: "Chapai Express", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEwO0jSzYF2DQxoHdQuF9Ps1LiDTg0QEpH0l6GXYYE_mkI6ASMYTq_D_TEuhzSzhlZhCDp6J9w-mGaGOxpBaVm54uLI0Ma8nqYHxkaQGAHnD83OxksY-Z9U94hxgGlzceXcfXmXpXsCAtmGPUD7_OcjqK-FwCZLTM-KKfK-vPd5avf5PsP8vTjlOjL2Jk/s211/chapaiexpressbd.jpg", url: "https://chapaiexpressbd.com/" },
        { name: "Grameen Travels", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi629AEP8pdiHZ5ucQLNlKVbtb7TfynFIKx8QIIXUTagDLppBp7VIJs4GTvwyJHvLc5DqBDaa8zxYjid-d5o-2YU9mUO9YnnwxRkePVUxgvYdbtlnmXkEac-OINQUBqu7jdBUyOh_72rAutYSeLV69ozyoSLnp2nHGunzV4VnhnudpThKSN-k13ugSzaak/s350/grameentravels.jpg", url: "https://grameentravelsbd.com/" },
        { name: "Ena Transport", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGmlE-en2rk-y5VMqTGBXr1p-efgQgPcoUnsxTs13-1QsCSBRGnOgMKh8A2w6p5HeLX99PEhA4-T_xrMwVkW2HbIiF6A224dX-OJ4DE7uQ_TymTi0-wet-eM-IjosYbmDrDlVzGuntpJNcGXz9aUeEhSZOtFbcnAq03FsYumhGmrCUiRcP27TJaQ5dBZk/s1000/enatransport.jpeg", url: "https://enatransport.com.bd/" },
        { name: "Sonya Enterprise - Ticket", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAdKgCw4HkQ3YQ1nThz_O59FiGX_J-cdE3uf_fDlJmi0zpBogxanMXMK-wIPxIMXrdXq5w7u64kRT1F1T8uExxFP_ny4zlp0ZMImwl0Bq5sNoVEAbOHj7lG_-ebJCdqeTJ6a1LjZCf3SYTRsvEQkZnvmIiGkUNZ7e7RAKp8pYgqa5jehMctWcjfEhK6Ek/s1280/sonyabus.jpeg", url: "https://sonyabus.com/" },
        { name: "Lal Sobuj Paribahan", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuv0VDG5aYMoKca0MORqz-MdT9mZwULfx4mLb-74pStYrAfhhvWlDZ6sstWuvnj-gT9JXAGucUq8VX5JZFDxzyjD5R9mEDkyvvQX8KR2dMr_oywEQrIh9VWMUK7SaXHwmnI7nPcwfN5TbPBBiGYlYj9bj-oTp9_KACZtnYGz3DyIEbgAa7E56BlovYbxc/s350/lalsobujbus.jpeg", url: "https://lalsobujbus.com/" },
        { name: "Sara Express - Bus Ticket", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguqLE2pXxwK3uVxUFUr1iFA9r-odINPYPdCi0MVmPE99DpIrlIIZoXHfPAs8N0u5fgKZcKJUUqc4p03EToc6diZAFBpQNKzABCt5ONjjRwtV7pjZyseDmk62Qr1znFvjX00eMAeBzntIl2SqUbBXIfDxWm-A1rNua4XIYbr4Y2HEOCm8IvLSJNKvmIprk/s826/saraexpress.jpeg", url: "https://www.saraexpress.com/" },
        { name: "Desh Travels", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpjHgzEGNn-phOJnR6jGBWCuWkcglmKSedRohuBuGi39XZUc_5fdZ_nk9f7PbSOm0bbLBgO5sRGBeTExL4oQ0sSfJ-JHl1PdD7pRXRgVhPoJZQE-WH_xk0CvcLa90QMwMJ7GnUUeMhiit9T79Oi41fIPW-quSN3zuIeq4yPAEsSOeluuVVHPJehrJLe4E/s344/deshtravels.jpeg", url: "https://deshtravelsbd.com/" }
    ],
    launch: [
        { name: "Shohoz - Launch Ticket", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6-YOiojE9oOsZIYy9inW1J0iv3sS8lL5diptKtFW1x2bE2ZV5QlHLV2oBKr4ucXtkg2SHH9k5upQzIm0ZhMkGdXukUUENc5Td_OCP5Ec5H_M43ZskW6pd4F7Ux6Evnzj8e-6M6wJFKwelKEiguIU1QmyZa-dwF6_9X7j87VVJRksTy8W4hKIbD_IPtuQ/s300/shohoz.jpeg", url: "https://www.shohoz.com/launch-tickets/" },
        { name: "BdTickets - Launch", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4rj1LljIDCXWGKxsQq1rshi9PrmhT3-bEIHwELuEF5-XbLhD4aEPTwcM_MngUzcXaWdnylrUzGHjvW8FLINCQdbAb-TUmC7ZEFPZVOO9tUgCOX8Hc-vPFSKZE_kmoJWwNDf2uhwwqnuu2MeKVO27otb7qnSIfuT-JaK_iIeMrDo6Z52yW9Ts6VdjtJqM/s384/bdtickets.jpeg", url: "https://bdtickets.com/launch" },
        { name: "Karnafuly Express", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh29xXRVquqMBCDDp3T4Tb8bQLO7xbSEi2Mwh3ONo-4duzqdCGgWAEq-6dznZHG5LEjnBGrHXhjXMHWNXJ9rcUKbU5Ah4vPJriRDRS290Gd9Czm8fEITnKAgmrFFed0bn123EJgzpX3QPhRTGmhySU1AccB4VCTPsqmBfV8Rz0V902NNB0CbLEiftBNEg/s755/karnafulyexpresss.png", url: "https://karnafulyexpress.com.bd/" },
        { name: "Jatri - Launch", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2jOMe7fIgGFZQF7rz9B4kGYd71gFVmsUYMDUYVHa2daMP5Y5GHu2mNI_Ns0S-XBiQMf-z0MNZ-sCKGsaEa1eCmh5qIKvq91-7-MVQDikXpAGCHOsQhhT1Yhv00HskGBhLWwcTACKFOxxcjXbVagPrC5IuJpuQTKYG-8DAuO2s3zk37xZOvrvT4hEulVM/s72/jatri.jpeg", url: "https://jatri.co/" },
        { name: "Asha Jawa Launch", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2tcV07jJJ-3LUvKhu9Of8crlVpsyn5Psk2-gD8AFtBTafJhKRuva0_kqEEdH2f_Cq-Hfqc1DAkPqgWXqn5k99uKfsduNiVNjNxMTCWGY1Si7TasKlYjBmBfdzIjq2-gAM6HSgSrzeyGaMs83sQpZ0weZ8TP4EEbVweRLbNWoATyhvzDcaf5-FGDSp2Cc/s124/ashajawaa.png", url: "http://ashajawa.com/" },
        { name: "BDTIX - Launch Operators", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif7hZGTz4PCSYeD0C_87nsNnuK7K1YBg9IL3jdfEY4ZWWbeVRIbFQBYDvFN_FQajktAFYNikuzRHqpjgv7MX4-ELx2TUZPPE8yZxFE7Wv9sS7J4tPh8V8oM9mmoTPzsbL-Fwwiew6gzGklNyEBZFSUc-sCHz10w-TnAvaV1c9ySsTt1fBDRION4_Lm-Q0/s180/bdtix.jpeg", url: "https://bdtix.com/launch-tickets" },
        { name: "Launch BD - Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjizJ3ElqL6JylcdW4LTevA5WCg1YXXo8rnEP4BtejTevI9mRa6HBmEl6bFz9VqNP99bPge5EUeV1t0TPc_ZgKifFNA2_7M9hWmYKE5MoR9jCK-oiVkfnOn3-5xcQWn_sSNVvvcy-uN4-_qh3x_ISCrNhCF-fnKvBmZBm5Yu42Zfu88MdONalX-2WTnrYU/s214/launchbd.jpeg", url: "https://www.launchbd.com/" },
        { name: "MV Manami - Launch", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZfCbfkdrYrg-aGuaSRbpNmF9XVYdWzMvCT7iwEJM2RO_TvoWMcIfx7R-hZzHnlOaQdtavTiQUw1rHZraFRl6U4e0df2tads6uI34XILBqHYxvp8YcCX_mjQ-0fIA8_bzDKKuuCVkbrOk7TAvzw1iw14O1cv8t25BrOvn59Q16UkWQjK_XAWEZJRoNRTo/s1076/mvmanami.png", url: "https://booking.mvmanami.com/" }
    ],
    train: [
        { name: "Bangladesh Railway", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSUNuH_uSABZQfbFLMOBTHiV86pyIyb3zc-06PSckvlbnek0P6Squ9T3R2cPQA2kh9b9mqaxPhzHC3Yh46LTcQEuyrtdHBrTuaDLwxfKHbtI6XbKDzDB1kvH-uc6LfX94Hb8CvFa5cD7XvkfIzgtGclNgX7WfRr5kvVK0OyNQN6tI5dgAa-I3JhSuKkds/s250/bdrailwayticket.jpeg", url: "https://bdrailwayticket.com/" },
        { name: "Shohoz - Train Tickets", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6-YOiojE9oOsZIYy9inW1J0iv3sS8lL5diptKtFW1x2bE2ZV5QlHLV2oBKr4ucXtkg2SHH9k5upQzIm0ZhMkGdXukUUENc5Td_OCP5Ec5H_M43ZskW6pd4F7Ux6Evnzj8e-6M6wJFKwelKEiguIU1QmyZa-dwF6_9X7j87VVJRksTy8W4hKIbD_IPtuQ/s300/shohoz.jpeg", url: "https://train.shohoz.com/" },
        { name: "Rapid Pass - Metrorail", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBCX1n-0arj87F-JKGO67nEdIn2EYNP6cSa6hbLm5jQJDd3bEpQLeZ8XGaCGlJI4Al2MNSTRAnv12PNjYwwRvUACeSrvVPq8djVmMh-cE5n-8W9X3dA4oIwTZa1_q9FK3bFvumNnLwbmb0yQ5U4q9vDUfctOib2HHoGfJY4_IVHyUdDfYsosHQjhDRElw/s193/rapidpass.jpeg", url: "https://rapidpass.com.bd/" },
        { name: "12Go - International", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNhXZxGNOY2x21KA_I3h8BJvIxZYixoZUgpcnTz80CNGiFUJ-ifAkyWKS5_PGg6y45j3ljBucfSgFjO7_H1yluNPfwes02kk-T35vrC28Tv8ehvMl3BRdW8YVIVzOLHdq5Wfws4o0G8x2kqHME9jkcsiAcsiEVuCJ53I3eYZP1Vk7eUAVXpCtCIfSFIGk/s300/12go.jpeg", url: "https://12go.asia/en/operator/bangladesh-railway" }
    ],
    hotel: [
        { name: "Booking.com - Hotel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvPNk3TvT0lL4BfXkm-l7iteYJ22HtXrk6GMgyn5gtmBkfjNGgWbxMF6E8ANHVU0GNI5uS5nt4_wTgD8uXc49W5aFLrUQYkMVCJZsTUr4BWmLsNGfWkiqDOPMzCkSgz7shvqhvHpXSmyXiCXkI2NbkulMJF9eY4455gx_VrMBIhfSPIqjWMqfKsoVWyvY/s300/booking.jpeg", url: "https://www.booking.com/" },
        { name: "Agoda.com - Hotel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLbrGvPslGvcE3u0olRG1t3shIsMmleIhXtPNi6SY-K7iYajlUYirqASrSoG6WB53SEMxAM_7oEa5lymsrlMqZzBfYTGMoE-SAW1WP5QL6B5wMA7IwJzlbw4_hXYOrrJnwKhJSn4ymFjGJsfL6A68UecD9E1s7miWNMFZ3YR_IjqPDx0BF25K5lPtmmXQ/s1660/agoda.jpeg", url: "https://www.agoda.com/" },
        { name: "ShareTrip - Hotel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0NOdrWQEVXv7y_5zQljA9j21ieRiyjxWlrJaWC5YdoD1JkzePW2HOSg79WEFortmh6sNhpd7SRQGDniDlPb9pyb-GDGOKv0A1YRcXlqopbPHcwVZK0K8Z8h0tQEg2ANFKWjkAeemd7ifYa1kdk1SikwKSKX2jQPEjc0VBE7tv1nusYCeCSpMwV3ZET64/s568/sharetrip.jpeg", url: "https://sharetrip.net/hotel" },
        { name: "BdTickets - Hotel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4rj1LljIDCXWGKxsQq1rshi9PrmhT3-bEIHwELuEF5-XbLhD4aEPTwcM_MngUzcXaWdnylrUzGHjvW8FLINCQdbAb-TUmC7ZEFPZVOO9tUgCOX8Hc-vPFSKZE_kmoJWwNDf2uhwwqnuu2MeKVO27otb7qnSIfuT-JaK_iIeMrDo6Z52yW9Ts6VdjtJqM/s384/bdtickets.jpeg", url: "https://bdtickets.com/hotel" },
        { name: "Travel Price Drops", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLM7KwbKjxq0SN_QULLz9kJjpx6b_P_8GyxOqh19wMDrswAN-WnT0fOAKpd4ro5iONxZTMsTpqGw04Ii4Fu1BMVqsvHIrYF6TY4s4e_b6sRQGdf2OJsiWJ0T3laa_jXytHHLE3_Bz3oNmIPVd9_DZagk9wkN1KieW5sqrwrtWOaXVszxVqwtmboBQgdc4/s256/travelpricedrops.jpeg", url: "https://travelpricedrops.com/hotels" },
        { name: "Search Hotel Prices", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoIacr8PbawoscDvUZM6d1Gln5d4A9OyJv8zRWvBJievvhvhBS_yB4CWN147W8zXrNFPhELTAiyNjm0YwmTw-GddPA7c4avE-XCAC03niLb0JrSD5jfMaRshM_AOGZJCQFOuFLh7xRYzUouVUFybfGh2QrIpWuLaCAD01LPOjd-sensnKPWET6OCHwhVI/s384/searchhotelprices.jpeg", url: "https://searchhotelprices.com/hotels" },
        { name: "Bangladesh Parjatan", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoskqjqcY12UxVGVHWTESNssefykiXr-zctxbaNng9MaMUutUlJ_4UbzOB90gcTwP3ZMS1G4DlG9yqH1BHfDaFw8S7Z6ieKwiw0XCj1KFoh_iZKDenTCqGIaa8YSboyLk2bokfszCSfk1LRDwTMMIEsQkZoYOhgYAhkY3wQ7mq2xz5_FZOO2d1LzhLGjk/s107/hotels.jpeg", url: "https://hotels.gov.bd/" },
        { name: "BdBooking.com", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQHe13NMMdGw0SVB1ncNI5nMlNW8MXGKpxmSebUOCiUcsZVAiZgcmqZR6w302ZHijTu5cJkvgvA6q2huCbtKnIdWQJ5WEGuHFnX-nVVeyXqwU1K2Pl7fhu-Q4-Mc1Z1-vXTP0XkBtic8B0TRNne7KW68x45Cd11R1FskJ30pkImaznX_yGQPQeGRT-uFQ/s224/bdbooking.png", url: "https://www.bdbooking.com/" },
        { name: "GoZayaan - Hotel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifWUi0ebKglTSr6lXMXSHmvXP3q62xJ-CvvnDikM5emQVPybzf0fA-nFmKAb4uqf9X4zd5Qux3fxnBNu9hrPxthyphenhyphenXQOI7sc55ejOM5KF7fzxWX_dP0kX80-Ls707TXV-XjWmqOQCcu70vKkjIIUmpaz7u3fmNvPdXBFzmuIVO4tg7frFtd6HmGJGQMETA/s130/gozayaan.jpeg", url: "https://gozayaan.com/?search=hotel" },
        { name: "Cozycozy - BD Hotels", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAKOJ_IrcKlZ0zvIsEmbF2jhxNxJtMOz0rW4no3lh-25FD5wTcN1H7Y0trgCDVCpUXKWnoZL2VHby85hjA2kw37NxBYWYw8ydD7JEhxBLJlJaDiFrUCd-W2_SiauXwZY-Xn8L88j4Z9Z4nD1_3uIPbvn6ZvVC-rTcoSuYv_ZaGKvyqaiJHlWxKVrDOsMM/s182/cozycozy.png", url: "https://www.cozycozy.com/ie/bangladesh-hotels" },
        { name: "Hotels Booking BD", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWd1MrTp-niXRr_JApChVBH3oqOFyz9KKIK2QtN9aQTQ_Gc2awdIksi4YsfHOPZjAzgh4pRwGF4HlfoF7YmkH0JLnBrZ1NJUVnaMfm0Mk0IUvNdC8W6L6_V3YmGZIfsJ2cD-NdnGlUPzSKR56IwGw7bxadOypyu3d1_YBj-Nyqiq9hhgN5rwwA3cdq7l4/s800/hotelsbookingbd.jpeg", url: "https://hotelsbookingbd.com/" },
        { name: "Firsttrip - Hotel", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilY131MwEU9OziE6aO2japzvY0UtXasuJ8oPOeRXa_Em4MKsbXQJAsUGJAfD7DeZuHH_XiyesjbnxdTF2OX3fCvdJnEV-tKm_wq2oZTajp-fYY4pUZZaDECYhcI85loxnO5XKEvuh3Bysw4RWVH9K7gf8Brsg1TBSMFFxQMwwlYnkgr1MYDQhA2uBXxaY/s494/firsttrip.jpeg", url: "https://firsttrip.com/hotel" }
    ]
};

let travelActiveCat = "airline";

function openTravelModal() {
    if (typeof setActiveMode === "function") setActiveMode("mode-travel-booking");
    document.getElementById("travelBookingModal").style.display = "flex";
    document.body.style.overflow = "hidden";
    renderTravelGrid(travelActiveCat);
}

function closeTravelModal() {
    document.getElementById("travelBookingModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function showTravelCat(cat, btn) {
    travelActiveCat = cat;
    document.querySelectorAll(".t-tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    renderTravelGrid(cat);
}

function renderTravelGrid(cat, search = "") {
    const grid = document.getElementById("travelMasterGrid");
    grid.innerHTML = "";
    
    let list = [];
    if (search) {
        Object.keys(travelData).forEach(k => { list = list.concat(travelData[k]); });
    } else {
        list = travelData[cat];
    }

    const filtered = list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    if (filtered.length === 0) {
        grid.innerHTML = "<div style='grid-column:1/-1; padding:50px; text-align:center; color:#94a3b8;'>No result found!</div>";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "travel-item-card";
        card.innerHTML = `
            <div class="travel-img-box"><img src="${item.img}" alt="${item.name}" loading="lazy"/></div>
            <strong>${item.name}</strong>
            <a href="${item.url}" class="travel-go-btn" target="_blank">Book Now</a>
        `;
        grid.appendChild(card);
    });
}

function filterTravel() {
    const val = document.getElementById("travelSearch").value;
    renderTravelGrid(travelActiveCat, val);
}
//# sourceMappingURL=/sm/aa44be05f34a376fbcdf896d37382b0c0134868d9580b07089e6713954af6202.map