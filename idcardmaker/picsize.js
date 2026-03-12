/* Domain Protection Script */
(function() {
    // আপনার অনুমোদিত ডোমেইন
    var allowedDomain = "www.service-bangla.blogspot.com";
    
    // বর্তমান সাইটের ডোমেইন চেক
    if (window.location.hostname !== allowedDomain) {
        // যদি না মিলে তবে রিডাইরেক্ট হবে
        window.location.href = "https://" + allowedDomain;
    }
})();
