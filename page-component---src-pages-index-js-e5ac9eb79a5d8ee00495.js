webpackJsonp([0x37beb808d31a9600],{"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},"./src/data/finalThoughts.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["Passion is just so.","Luck finds the one who does not rely on it."];t.default=n,e.exports=t.default},"./src/data/imagelinks.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["https://imgur.com/jqGlvtC.jpg","http://i.imgur.com/8uoi4tl.jpg","http://i.imgur.com/bdOP5KN.jpg","http://i.imgur.com/i338o2j.jpg"];t.default=n,e.exports=t.default},"./src/data/quotes.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["The path to enlightenment has many stones","Do not stray from your path, for enlightenment comes with perseverance","Enlightenment occurs when someone becomes inspired by information and uses it to enhance their life","The reward of all action is to be found in enlightenment","The real meaning of enlightenment is to gaze with undimmed eyes on all darkness","Enlightenment must come little by little - otherwise it would overwhelm","In the beginner's mind there are many possibilities, but in the expert's mind there are few","Only the hand that erases can write the true thing","Enlightenment is ego's ultimate disappointment","Man suffers only because he takes seriously what the gods made for fun","It is easy to believe we are each waves and forget we are also the ocean","Wherever you are, be there totally","If you can dream it, you can do it","Aim for the moon. If you miss, you might hit a star","The highest mountain is but a mountain"];t.default=n,e.exports=t.default},"./src/pages/index.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".quotewrapper{max-width:80%;margin:0 auto}.quote{display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;-webkit-justify-content:center;justify-content:center;border:10px solid #846c89;padding:3em;background-color:hsla(0,0%,100%,.5)}.quote p{text-align:center!important;font-size:36px;font-family:Clicker Script,cursive;margin-bottom:0}.imagewrapper{margin-top:100px}.footer{padding:50px 20px;background:#8bc6ec linear-gradient(135deg,#8bc6ec,#9599e2);display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center}.footer p{font-size:12px;color:#522856;font-family:Roboto Mono,monospace;margin-bottom:0}",""])},'./node_modules/babel-loader/lib/index.js?{"plugins":["d:/programming/blank-keycaps-fu/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","d:/programming/blank-keycaps-fu/node_modules/babel-plugin-add-module-exports/lib/index.js","d:/programming/blank-keycaps-fu/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["d:/programming/blank-keycaps-fu/node_modules/babel-preset-env/lib/index.js","d:/programming/blank-keycaps-fu/node_modules/babel-preset-stage-0/lib/index.js","d:/programming/blank-keycaps-fu/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("./node_modules/react/react.js"),u=o(l),d=n("./src/data/quotes.js"),c=o(d),f=n("./src/data/imagelinks.js"),p=o(f),m=n("./src/data/finalThoughts.js"),h=o(m);n("./src/pages/index.css");var g=p.default[0],b=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={quote:"",footerText:""},e}return i(t,e),s(t,[{key:"componentWillMount",value:function(){this.setState({quote:c.default[Math.floor(Math.random()*c.default.length)],footerText:h.default[Math.floor(Math.random()*h.default.length)]})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({quote:c.default[Math.floor(Math.random()*c.default.length)],footerText:h.default[Math.floor(Math.random()*h.default.length)]})},15e3)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{style:{backgroundImage:"url("+g+")",backgroundSize:"cover",borderBottom:"2px solid #522856",minHeight:"90vh"}},u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,paddingTop:70}},u.default.createElement("div",{className:"quotewrapper"},u.default.createElement("div",{className:"quote"},u.default.createElement("p",null,this.state.quote,"."))),u.default.createElement("div",{className:"imagewrapper"},u.default.createElement("img",{src:"http://i.imgur.com/AQaoTpX.png",alt:"keyboard layout"})))),u.default.createElement("div",{className:"footer",style:{minHeight:"10vh"}},u.default.createElement("p",null,this.state.footerText," Be at peace and return wiser."),u.default.createElement("br",null)))}}]),t}(u.default.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-index-js-e5ac9eb79a5d8ee00495.js.map