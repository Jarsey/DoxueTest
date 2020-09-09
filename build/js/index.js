"use strict";function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var o=0;o<t.length;o++){var c=t[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function _createClass(n,t,o){return t&&_defineProperties(n.prototype,t),o&&_defineProperties(n,o),n}var SchoolList=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"appendItem",value:function(n){var a=document.createDocumentFragment();n.forEach(function(n){var t=n.logoUrl,o=n.num,c=n.linkHref,l=n.cb,e=new SchoolItem(t,o,c,l).createSchoolItem(),i=$(e).get(0);a.appendChild(i)}),$("#school-list").append(a)}}]),n}(),SchoolItem=function(){function l(n,t,o,c){_classCallCheck(this,l),this.logoUrl=n,this.num=t,this.linkHref=o,this.cb=c}return _createClass(l,[{key:"createSchoolItem",value:function(){return'\n            <div class="school-item">\n                <div class="school-logo">\n                    <img src="'.concat(this.logoUrl,'" alt="北京交通大学">\n                </div>\n                <div class="school-data">\n                    <div class="data-column">\n                        <p class="grey-text font-18">').concat(this.num,'</p>\n                        <p class="grey-text m-t-5">参访人数</p>\n                    </div>\n                    <div class="line"></div>\n                    <div class="data-column">\n                        <img src="../../static/icon-ppt.png" alt="PPT"></img>\n                        <a class="grey-text normal-link m-t-5" href="').concat(this.linkHref,'">宣讲PPT</a>\n                    </div>\n                </div>\n                <button class="primary-btn-large" onclick="').concat(this.cb,'">\n                    了解详情>\n                </button>\n            </div>\n        ')}}]),l}(),mockData=[{logoUrl:"../../static/logo.png",num:123,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:254,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:136,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:25,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:256,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:111,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:137,linkHref:"",cb:function(){}},{logoUrl:"../../static/logo.png",num:159,linkHref:"",cb:function(){}}],schoolList=new SchoolList;schoolList.appendItem(mockData);