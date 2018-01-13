# data-social-share-click

Share current page url across social networks. No more.

No icons, no CSS, no UI, no effects, no dependencies.

## Install

Node

```
npm install data-social-share-click --save
```

##Usage

Javascript
```javascript
import DataSocialShareClick from "data-social-share-click";
let socialShares=new DataSocialShareClick();
socialShares.listenClicks();
```

Html
```html
<button data-social-share-click="facebook">Facebook</button>
<button data-social-share-click="twitter">Twittet</button>
<button data-social-share-click="googlePlus">G+</button>
<a href="#" data-social-share-click="linkedIn">LinkedIn</button>
```

##What does it do?

When the script is included, it listens for click events on document. 
When a click occurs on element with `data-social-share-click="facebook"` attribute, 
it will open a Facebook share popin to share the current browser's url.
