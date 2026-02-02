<script>
    (function() {
        // আপনার সঠিক ডোমেইন নাম
        var allowedDomain = "toontoon-tv.blogspot.com";
        var currentDomain = window.location.hostname;

        // ডোমেইন চেক: যদি ডোমেইন না মিলে তবে সব মুছে ফেলবে
        if (currentDomain !== allowedDomain && currentDomain !== "www." + allowedDomain) {
            // পুরো পেজ সাদা করে দেওয়া
            document.documentElement.innerHTML = ""; 
            // কনসোলে সতর্কবার্তা (অপশনাল)
            console.error("Unauthorized Domain!");
            // আসল সাইটে পাঠিয়ে দেওয়া (Redirect)
            window.location.replace("https://" + allowedDomain);
            return;
        }
    })();
</script>
