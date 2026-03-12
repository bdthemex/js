/* Domain Protection Script */
(function() {
    // 
    var allowedDomain = "https://service-bangla.blogspot.com";
    
    // 
    if (window.location.hostname !== allowedDomain) {
        //ে
        window.location.href = "https://" + allowedDomain;
    }
})();
