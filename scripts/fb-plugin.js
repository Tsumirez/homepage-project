window.addEventListener('load', (e) => {
    var chatbox = document.getElementById('fb-customer-chat');
    // chatbox.setAttribute("page_id", "409602669206817");
    chatbox.setAttribute("page_id", "111564121915694");
    chatbox.setAttribute("attribution", "biz_inbox");
    
    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: 'v15.0'
        });
    };
    
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
})