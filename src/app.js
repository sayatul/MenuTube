exports.continueInit = function (wv, controls) {

    console.info('Main process is initialised and seems to works');

    if (typeof wv !== 'undefined' && typeof wv.loadURL === 'function') {
        var globalShortcuts = require('./globalShortcuts.js');
        var uiControls = require('./ui-controls.js');

        var options = {
            // userAgent: 'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>'
            // userAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36'
            userAgent : 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'
        };

        wv.loadURL('https://www.youtube.com/', options);

        globalShortcuts.init(wv);
        uiControls.init(wv, controls);

        // wv.addEventListener('will-navigate', function(e) {
        //     console.log(e)
        //    if (typeof e !== 'undefined' && typeof e.url !== 'undefined' && e.url.test(new RegExp('youtube'))) {

        //    } else {
        //         wv.loadURL('https://www.youtube.com/', options);                   
        //    }
        // });


    } else {
        alert('Something went wrong, cannot create webview...');
    }
};
