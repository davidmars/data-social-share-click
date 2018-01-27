"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * <button data-social-share-click="facebook">FB</button>
 * <button data-social-share-click="twitter">Twittet</button>
 * <button data-social-share-click="googlePlus">G+</button>
 * <a href="#" data-social-share-click="linkedIn">LinkedIn</button>
 */
var DataSocialShareClick = function () {
    function DataSocialShareClick() {
        _classCallCheck(this, DataSocialShareClick);
    }

    /**
     * Start listenning the data-social-share-click clicks on document.
     * Should be called once.
     */


    _createClass(DataSocialShareClick, [{
        key: "listenClicks",
        value: function listenClicks() {
            var attr = "data-social-share-click";
            var selector = "[" + attr + "]";
            document.addEventListener("click", function (e) {
                for (var target = e.target; target && target !== this; target = target.parentNode) {
                    if (target.matches(selector)) {
                        e.stopPropagation();
                        e.preventDefault();
                        var a = target.getAttribute(attr);
                        DataSocialShareClick[a]();
                        break;
                    }
                }
            }, false);
        }

        /**
         * Open a popup window (should be called from click handler)
         * @param {int} w Pop width
         * @param {int}h Pop height
         * @param {string} url Url to load
         */

    }], [{
        key: "popup",
        value: function popup(w, h, url) {
            var l, t;
            l = window.screen.width / 2 - (w / 2 + 10);
            t = window.screen.height / 2 - (h / 2 + 50);
            var o = "status=no,height=" + h + ",width=" + w + ",resizable=yes,left=" + l + ",top=" + t + ",screenX=" + l + ",screenY=" + t + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
            window.open(url, '', o);
        }

        /**
         * Open Facebook current page share popin
         */

    }, {
        key: "facebook",
        value: function facebook() {
            var u = location.href;
            var t = document.title;
            var url = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t);
            this.popup("626", "436", url);
        }

        /**
         * Open Twitter current page share popin
         */

    }, {
        key: "twitter",
        value: function twitter() {
            var u = location.href;
            var t = document.title;
            var url = 'http://twitter.com/share?text=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u);
            this.popup("626", "436", url);
        }
    }, {
        key: "googlePlus",


        /**
         * Open Google plus current page share popin
         */
        value: function googlePlus() {
            var u = location.href;
            u = 'https://plus.google.com/share?url=' + u;
            this.popup("626", "436", u);
        }
    }, {
        key: "linkedIn",


        /**
         * Open linkedIn current page share popin
         */
        value: function linkedIn() {
            var u = location.href;
            u = "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(u) + "&";
            this.popup("520", "570", u);
        }
    }]);

    return DataSocialShareClick;
}();

exports.default = DataSocialShareClick;
