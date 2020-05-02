setShareLinks();

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url, "NewWindow", params);
}

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = document.querySelector("meta[property='og:description']").getAttribute("content");

    facebookShareButton = document.getElementById("share-facebook");
    facebookShareButton.addEventListener("click", function(){
        url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
        socialWindow(url);
    });

    twitterShareButton = document.getElementById("share-twitter");
    twitterShareButton.addEventListener("click", function(){
        url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
        socialWindow(url);
    });

    linkShareButton = document.getElementById("share-link");
    linkShareButton.addEventListener("click", function(){
            const el = document.createElement('textarea');
            el.value = document.URL;
            el.setAttribute('readonly', '');              
            el.setAttribute('aria-hidden', 'true');
            document.body.appendChild(el);
            const selected =
              document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {           
              document.getSelection().removeAllRanges();
              document.getSelection().addRange(selected);
            }
    });
}