/**
 *
 *
 * <button data-social-share-click="facebook">FB</button>
 * <button data-social-share-click="twitter">Twittet</button>
 * <button data-social-share-click="googlePlus">G+</button>
 * <a href="#" data-social-share-click="linkedIn">LinkedIn</button>
 */
export default class DataSocialShareClick{

    constructor(){}

    /**
     * Start listenning the data-social-share-click clicks on document.
     * Should be called once.
     */
    listenClicks(){
        let attr="data-social-share-click";
        let selector="["+attr+"]";
        document.addEventListener("click", function(e) {
            for (var target=e.target; target && target!==this; target=target.parentNode) {
                if (target.matches(selector)) {
                    e.stopPropagation();
                    e.preventDefault();
                    let a = target.getAttribute(attr);
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
    static popup(w,h,url){
        var l, t;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        let o = "status=no,height=" + h + ",width=" + w + ",resizable=yes,left=" + l + ",top=" + t + ",screenX=" + l + ",screenY=" + t + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
        window.open(url, '', o);

    }

    /**
     * Open Facebook current page share popin
     */
    static facebook(){
        let u = location.href;
        let t = document.title;
        let url = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t);
        this.popup("626", "436", url);
    }

    /**
     * Open Twitter current page share popin
     */
    static twitter(){
        let u = location.href;
        let t = document.title;
        let url = 'http://twitter.com/share?text=' + encodeURIComponent(t) + '&url='+encodeURIComponent(u);
        this.popup("626", "436", url);
    };

    /**
     * Open Google plus current page share popin
     */
    static googlePlus(){
        let u = location.href;
        u = 'https://plus.google.com/share?url='+u;
        this.popup("626", "436", u);
    };

    /**
     * Open linkedIn current page share popin
     */
    static linkedIn(){
        let u = location.href;
        u="http://www.linkedin.com/shareArticle?mini=true&url="+ encodeURIComponent(u)+"&";
        this.popup("520", "570", u);
    };

}
