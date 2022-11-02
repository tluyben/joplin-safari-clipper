(this["webpackJsonpjoplin-webclipper-popup"]=this["webpackJsonpjoplin-webclipper-popup"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t),n.d(t,"bridge",(function(){return l}));var r=n(1),a=n.n(r),s=n(2),i=n(5),o=n(6),c=n(34).randomClipperPort;function u(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}var p=new(function(){function e(){Object(i.a)(this,e),this.nounce_=Date.now(),this.token_=null}return Object(o.a)(e,[{key:"init",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n,r){var i,o,c=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e){return{title:e.title,body_html:e.html,base_url:e.base_url,source_url:e.url,parent_id:e.parent_id,tags:e.tags||"",image_sizes:e.image_sizes||{},anchor_names:e.anchor_names||[],source_command:e.source_command,convert_to:e.convert_to,stylesheets:e.stylesheets}},console.info("Popup: Init bridge"),this.browser_=t,this.dispatch_=r.dispatch,this.store_=r,this.browserSupportsPromises_=n,this.clipperServerPort_=null,this.clipperServerPortStatus_="searching",this.browser_notify=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.info("Popup: Got command:",t),t.warning?(console.warn("Popup: Got warning: ".concat(t.warning)),c.dispatch({type:"WARNING_SET",text:t.warning})):c.dispatch({type:"WARNING_SET",text:""}),"clippedContent"===t.name&&(n=i(t),c.dispatch({type:"CLIPPED_CONTENT_SET",content:n})),"sendContentToJoplin"===t.name&&(r=i(t),c.dispatch({type:"CLIPPED_CONTENT_SET",content:r}),s=c.store_.getState(),r.parent_id=s.selectedFolderId,r.parent_id&&c.sendContentToJoplin(r)),"isProbablyReaderable"===t.name&&c.dispatch({type:"IS_PROBABLY_READERABLE",value:t.value});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.browser_.runtime.onMessage.addListener(this.browser_notify),e.next=12,this.backgroundPage(this.browser_);case 12:o=e.sent,this.env_=o?o.joplinEnv():"prod",console.info("Popup: Env:",this.env()),this.dispatch({type:"ENV_SET",env:this.env()});case 16:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"token",value:function(){return this.token_}},{key:"onReactAppStarts",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,i,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findClipperServerPort();case 2:if("found"===this.clipperServerPortStatus_){e.next=5;break}return console.info("Skipping initialisation because server port was not found"),e.abrupt("return");case 5:return e.next=7,this.restoreState();case 7:return t=e.sent,e.next=10,this.checkAuth();case 10:if(this.token_){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,this.folderTree();case 14:n=e.sent,this.dispatch({type:"FOLDERS_SET",folders:n.items?n.items:n}),r=[],s=1;case 18:if(!(s<1e4)){e.next=30;break}return e.next=21,this.clipperApiExec("GET","tags",{page:s,order_by:"title",order_dir:"ASC"});case 21:if(i=e.sent,o=i.items?i.items:i,c="has_more"in i&&i.has_more,r=r.concat(o),c){e.next=27;break}return e.abrupt("break",30);case 27:s++,e.next=18;break;case 30:this.dispatch({type:"TAGS_SET",tags:r}),t.selectedFolderId&&this.dispatch({type:"SELECTED_FOLDER_SET",id:t.selectedFolderId});case 32:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkAuth",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.dispatch({type:"AUTH_STATE_SET",value:"starting"}),e.next=3,this.storageGet(["token"]);case 3:return t=e.sent,this.token_=t.token,e.next=7,this.clipperApiExec("GET","auth/check",{token:this.token_});case 7:if(!e.sent.valid){e.next=12;break}return console.info("checkAuth: we already have a valid token - exiting"),this.dispatch({type:"AUTH_STATE_SET",value:"accepted"}),e.abrupt("return");case 12:return this.token_=null,e.next=15,this.storageSet({token:this.token_});case 15:return this.dispatch({type:"AUTH_STATE_SET",value:"waiting"}),e.next=18,this.storageGet(["authToken","authTokenTimestamp"]);case 18:if(n=e.sent,r=null,!(n.authToken&&Date.now()-n.authTokenTimestamp<3e5)){e.next=25;break}console.info("checkAuth: we already have an auth token - reusing it"),r=n.authToken,e.next=32;break;case 25:return console.info("checkAuth: we do not have an auth token - requesting it..."),e.next=28,this.clipperApiExec("POST","auth");case 28:return s=e.sent,r=s.auth_token,e.next=32,this.storageSet({authToken:r,authTokenTimestamp:Date.now()});case 32:console.info("checkAuth: we do not have a token - requesting one using auth_token: ",r),e.prev=33;case 34:return e.next=37,this.clipperApiExec("GET","auth/check",{auth_token:r});case 37:if("rejected"!==(i=e.sent).status){e.next=44;break}return console.info("checkAuth: Auth request was not accepted",i),this.dispatch({type:"AUTH_STATE_SET",value:"rejected"}),e.abrupt("break",61);case 44:if("accepted"!==i.status){e.next=53;break}return console.info("checkAuth: Auth request was accepted",i),this.dispatch({type:"AUTH_STATE_SET",value:"accepted"}),this.token_=i.token,e.next=50,this.storageSet({token:this.token_});case 50:return e.abrupt("break",61);case 53:if("waiting"!==i.status){e.next=58;break}return e.next=56,u(1e3);case 56:e.next=59;break;case 58:throw new Error("Unknown auth/check status: ".concat(i.status));case 59:e.next=34;break;case 61:return e.prev=61,e.next=64,this.storageSet({authToken:"",authTokenTimestamp:0});case 64:return e.finish(61);case 65:case"end":return e.stop()}}),e,this,[[33,,61,65]])})));return function(){return e.apply(this,arguments)}}()},{key:"backgroundPage",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.extension.getBackgroundPage())){e.next=3;break}return e.abrupt("return",n);case 3:return e.abrupt("return",new Promise((function(e){t.runtime.getBackgroundPage((function(t){e(t)}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"env",value:function(){return this.env_}},{key:"browser",value:function(){return this.browser_}},{key:"dispatch",value:function(e){return this.dispatch_(e)}},{key:"scheduleStateSave",value:function(e){var t=this;this.scheduleStateSaveIID&&(clearTimeout(this.scheduleStateSaveIID),this.scheduleStateSaveIID=null),this.scheduleStateSaveIID=setTimeout((function(){t.scheduleStateSaveIID=null;var n={selectedFolderId:e.selectedFolderId};console.info("Popup: Saving state",n),t.storageSet(n)}),100)}},{key:"restoreState",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storageGet(null);case 2:return t=e.sent,console.info("Popup: Restoring saved state:",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findClipperServerPort",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.dispatch({type:"CLIPPER_SERVER_SET",foundState:"searching"}),t=null,n=0;case 3:if(!(n<10)){e.next=26;break}return t=c(t,this.env()),e.prev=5,console.info("findClipperServerPort: Trying ".concat(t.port)),e.next=9,fetch("http://127.0.0.1:".concat(t.port,"/ping"));case 9:return r=e.sent,e.next=12,r.text();case 12:if(s=e.sent,console.info("findClipperServerPort: Got response: ".concat(s)),"JoplinClipperServer"!==s.trim()){e.next=19;break}return this.clipperServerPortStatus_="found",this.clipperServerPort_=t.port,this.dispatch({type:"CLIPPER_SERVER_SET",foundState:"found",port:t.port}),e.abrupt("return");case 19:e.next=23;break;case 21:e.prev=21,e.t0=e.catch(5);case 23:n++,e.next=3;break;case 26:return this.clipperServerPortStatus_="not_found",this.dispatch({type:"CLIPPER_SERVER_SET",foundState:"not_found"}),e.abrupt("return",null);case 29:case"end":return e.stop()}}),e,this,[[5,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"clipperServerPort",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=function(){return"not_found"===t.clipperServerPortStatus_?(n(new Error("Could not find clipper service. Please make sure that Joplin is running and that the clipper server is enabled.")),!0):"found"===t.clipperServerPortStatus_&&(e(t.clipperServerPort_),!0)};if(!r()){t.dispatch({type:"CONTENT_UPLOAD",operation:{searchingClipperServer:!0}});var a=setInterval((function(){r()&&(t.dispatch({type:"CONTENT_UPLOAD",operation:null}),clearInterval(a))}),1e3)}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"clipperServerBaseUrl",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clipperServerPort();case 2:return t=e.sent,e.abrupt("return","http://127.0.0.1:".concat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"tabsExecuteScript",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.browserSupportsPromises_){e.next=2;break}return e.abrupt("return",this.browser().tabs.executeScript(t));case 2:return e.abrupt("return",new Promise((function(e,r){n.browser().tabs.executeScript(t,(function(){var a=n.browser().runtime.lastError;if(a){var s=["tabsExecuteScript: Cannot load ".concat(JSON.stringify(t))];a.message&&s.push(a.message),r(new Error(s.join(": ")))}e()}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"tabsQuery",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.browserSupportsPromises_){e.next=2;break}return e.abrupt("return",this.browser().tabs.query(t));case 2:return e.abrupt("return",new Promise((function(e){n.browser().tabs.query(t,(function(t){e(t)}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"tabsSendMessage",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.browserSupportsPromises_){e.next=2;break}return e.abrupt("return",this.browser().tabs.sendMessage(t,n));case 2:return e.abrupt("return",new Promise((function(e){r.browser().tabs.sendMessage(t,n,(function(t){e(t)}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"tabsCreate",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.browserSupportsPromises_){e.next=2;break}return e.abrupt("return",this.browser().tabs.create(t));case 2:return e.abrupt("return",new Promise((function(e){n.browser().tabs.create(t,(function(){e()}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"folderTree",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.clipperApiExec("GET","folders",{as_tree:1}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"storageSet",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.browserSupportsPromises_){e.next=2;break}return e.abrupt("return",this.browser().storage.local.set(t));case 2:return e.abrupt("return",new Promise((function(e){n.browser().storage.local.set(t,(function(){e()}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"storageGet",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s=this,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:null,!this.browserSupportsPromises_){e.next=14;break}return e.prev=2,e.next=5,this.browser().storage.local.get(t);case 5:return r=e.sent,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",n);case 12:e.next=15;break;case 14:return e.abrupt("return",new Promise((function(e){s.browser().storage.local.get(t,(function(t){e(t)}))})));case 15:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"sendCommandToActiveTab",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tabsQuery({active:!0,currentWindow:!0});case 2:if((n=e.sent).length){e.next=6;break}return console.warn("No valid tab"),e.abrupt("return");case 6:return this.dispatch({type:"CONTENT_UPLOAD",operation:null}),console.info("Sending message ",t),e.next=10,this.tabsSendMessage(n[0].id,t);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"clipperApiExec",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){var i,o,c,u,p,l,h,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Popup: ".concat(t," ").concat(n)),e.next=3,this.clipperServerBaseUrl();case 3:if(i=e.sent,o={method:t,headers:{"Content-Type":"application/json"}},s&&(o.body="string"===typeof s?s:JSON.stringify(s)),r=Object.assign(r||{},{token:this.token_}),c="",!r){e.next=20;break}u=[],e.t0=a.a.keys(r);case 11:if((e.t1=e.t0()).done){e.next=18;break}if(p=e.t1.value,r.hasOwnProperty(p)){e.next=15;break}return e.abrupt("continue",11);case 15:u.push("".concat(encodeURIComponent(p),"=").concat(encodeURIComponent(r[p]))),e.next=11;break;case 18:(c=u.join("&"))&&(c="?".concat(c));case 20:return e.next=22,fetch("".concat(i,"/").concat(n).concat(c),o);case 22:if((l=e.sent).ok){e.next=28;break}return e.next=26,l.text();case 26:throw h=e.sent,new Error(h);case 28:return e.next=30,l.json();case 30:return d=e.sent,e.abrupt("return",d);case 32:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"sendContentToJoplin",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.info("Popup: Sending to Joplin..."),e.prev=1,this.dispatch({type:"CONTENT_UPLOAD",operation:{uploading:!0}}),t){e.next=5;break}throw new Error("Cannot send empty content");case 5:return e.next=7,this.clipperApiExec("POST","notes",{nounce:this.nounce_++},t);case 7:return n=e.sent,this.dispatch({type:"CONTENT_UPLOAD",operation:{uploading:!1,success:!0}}),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(1),'{"error":"Duplicate Nounce"}'===e.t0.message?this.dispatch({type:"CONTENT_UPLOAD",operation:{uploading:!1,success:!0}}):this.dispatch({type:"CONTENT_UPLOAD",operation:{uploading:!1,success:!1,errorMessage:e.t0.message}});case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),l=function(){return p}},18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQlJREFUeNpiXOjAwMD3kcFcSMeyls/Jz/w/ExPjwyNbTz88d6iF5R/DUYYFNgzm16ri3v579fo/DPx79+7/6fq0j5N0GWxZJP6w1mv+EhRieP+CgeHXVwYGBkYGxu+fGUz+CPI9/8vaxCLHpWDGcPMmA8Oe7QwMikoMYPDwPgPD1UsMioIK+iwcfCKMDLo6DAxszAwMH95CFLAC2braDIxXPjEyPf32+iyDsgoDg6gEAwMnHwSLiDMwqKgz3Pv77jLT/ed3G89cP/qJgYWHgYFblIGBB4hZeBnO3zr+5eGTmw3MQRIMj288unTk5Yt7cn9+fRd8/fT2jxMHV5y4dGJzBvPf//sBAgwATg5okojpGQ0AAAAASUVORK5CYII="},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQlJREFUeNpi5FzIwCDKx2BuImRZa8vnZ874n4lx18Otp488PNTCwsJwlIFnAYN5xbW4t1/+vfoPA1//vftffTrto+gkBlsWMQnWemNNQaG3DC8ZvgEhIxB+ZfzMYGoiyLf5OWsTs1uV8kQR0X9cPxn+Mvxg+M7wjuEZwwOG0wyPGU4w/Pn9j59FlEOEUYRBh+EfAzPDZ4a3DBDAzCDKoM3Ay/iJkenu09dnRRlUGAQZJBh4GfjAWIBBnEGSQZ3hxr13l5l/Or6/x/FbMMRUyoCdHyjJxcAN1M/EsOH8ni/bLu/NYJRezMDw8Q2DjbWiWb2jspUxIyMjw6G7Jy4cfnC8iZWF4QBAgAEAwzdc4OHO/RAAAAAASUVORK5CYII="},20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQVJREFUeNo0js1KAlEAhb87XsG0BkYHciEy/UBFQYuioaAnCHqEli16h7KGnqAnKFoFbaNtRGIwRVEgjKA2C5k0NNTMCPI2JB04cBYfh0+cOKD3sZOZ1V19dtNWQhN+8cL1S9eHEvIc72EXz7eag3ZD/WfQayn3bLt9tMO6TMtobk4aSb7r0PkEJRA/XZYThh7Eoo7Mjlgr1D0oXUJqkr+8VyF4YsKwFmUsbgqyCxCNwFdzCMhwZ+YRvY7Qat23e8xpSKQhog8bHw/fZqj0W89a9bV8cOflO6hR0FIhYIYeYzxUCh9+4O1LIVT+xj3dqDW83JS1thQqUvZvH1/8giMVV78CDAB2jGGahqf6iwAAAABJRU5ErkJggg=="},24:function(e,t,n){e.exports=n(35)},30:function(e,t,n){},34:function(e,t){function n(e){return"prod"===e?41184:27583}e.exports={randomClipperPort:function(e,t){return e?e.offset++:e={offset:0},e.port=n(t)+e.offset,e},startPort:n}},35:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(2),i=n(0),o=n.n(i),c=n(17),u=n.n(c),p=n(4),l=n(5),h=n(6),d=n(11),f=n(9),v=n(12),b=(n(30),n(18)),g=n.n(b),m=n(19),S=n.n(m),k=n(20),E=n.n(k),w=n(16).connect,T=n(15).bridge;var A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).bodyRef=o.a.createRef(),e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){if(this.bodyRef.current){var e=this.bodyRef.current.getElementsByTagName("img"),t=!0,n=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var i=a.value;i.width/=2,i.height/=2}}catch(o){n=!0,r=o}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}}},{key:"render",value:function(){return o.a.createElement("div",{className:"Preview"},o.a.createElement("h2",null,"Title:"),o.a.createElement("input",{className:"Title",value:this.props.title,onChange:this.props.onTitleChange}),o.a.createElement("p",null,o.a.createElement("span",null,"Type:")," ",function(e){var t=[];"simplifiedPageHtml"===e.name&&t.push("Simplified page"),"completePageHtml"===e.name&&t.push("Complete page"),"selectedHtml"===e.name&&t.push("Selection"),"pageUrl"===e.name&&t.push("URL only");var n=e.preProcessFor?e.preProcessFor:"markdown";return t.push("(".concat(n,")")),t.join(" ")}(this.props.command)),o.a.createElement("a",{className:"Confirm Button",href:"#",onClick:this.props.onConfirmClick},"Confirm"))}}]),t}(o.a.PureComponent),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={contentScriptLoaded:!1,selectedTags:[],contentScriptError:"",newNoteId:null},e.confirm_click=Object(s.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=Object.assign({},e.props.clippedContent)).tags=e.state.selectedTags.join(","),n.parent_id=e.props.selectedFolderId,t.next=5,T().sendContentToJoplin(n);case 5:r=t.sent,e.setState({newNoteId:r.id});case 7:case"end":return t.stop()}}),t)}))),e.contentTitle_change=function(t){e.props.dispatch({type:"CLIPPED_CONTENT_TITLE_SET",text:t.currentTarget.value})},e.clipSimplified_click=function(){T().sendCommandToActiveTab({name:"simplifiedPageHtml"})},e.clipComplete_click=function(){T().sendCommandToActiveTab({name:"completePageHtml",preProcessFor:"markdown"})},e.clipCompleteHtml_click=function(){T().sendCommandToActiveTab({name:"completePageHtml",preProcessFor:"html"})},e.clipSelection_click=function(){T().sendCommandToActiveTab({name:"selectedHtml"})},e.clipUrl_click=function(){T().sendCommandToActiveTab({name:"pageUrl"})},e.clipScreenshot_click=Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T().clipperServerBaseUrl();case 3:return n=t.sent,t.next=6,T().sendCommandToActiveTab({name:"screenshot",api_base_url:n,parent_id:e.props.selectedFolderId,tags:e.state.selectedTags.join(","),token:T().token()});case 6:window.close(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.props.dispatch({type:"CONTENT_UPLOAD",operation:{uploading:!1,success:!1,errorMessage:t.t0.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e.clipperServerHelpLink_click=function(){T().tabsCreate({url:"https://joplinapp.org/clipper/"})},e.folderSelect_change=function(t){e.props.dispatch({type:"SELECTED_FOLDER_SET",id:t.target.value})},e.tagCompChanged=e.tagCompChanged.bind(Object(p.a)(e)),e.onAddTagClick=e.onAddTagClick.bind(Object(p.a)(e)),e.onClearTagButtonClick=e.onClearTagButtonClick.bind(Object(p.a)(e)),e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"onAddTagClick",value:function(){var e=this.state.selectedTags.slice();e.push(""),this.setState({selectedTags:e}),this.focusNewTagInput_=!0}},{key:"onClearTagButtonClick",value:function(e){var t=e.target.getAttribute("data-index"),n=this.state.selectedTags.slice();n.splice(t,1),this.setState({selectedTags:n})}},{key:"tagCompChanged",value:function(e){var t=Number(e.target.getAttribute("data-index")),n=e.target.value;if(this.state.selectedTags.length<=t){var r=this.state.selectedTags.slice();r.push(n),this.setState({selectedTags:r})}else if(this.state.selectedTags[t]!==n){var a=this.state.selectedTags.slice();a[t]=n,this.setState({selectedTags:a})}}},{key:"loadContentScripts",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().tabsExecuteScript({file:"/content_scripts/JSDOMParser.js"});case 2:return e.next=4,T().tabsExecuteScript({file:"/content_scripts/Readability.js"});case 4:return e.next=6,T().tabsExecuteScript({file:"/content_scripts/Readability-readerable.js"});case 6:return e.next=8,T().tabsExecuteScript({file:"/content_scripts/index.js"});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T().onReactAppStarts(),e.prev=1,e.next=4,this.loadContentScripts();case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),console.error("Could not load content scripts",e.t0),this.setState({contentScriptError:e.t0.message}),e.abrupt("return");case 11:this.setState({contentScriptLoaded:!0}),t=!1,function e(n){for(var a=0;a<n.length;a++){var s=n[a];s.id===r.props.selectedFolderId&&(t=!0),s.children&&e(s.children)}}(this.props.folders),t||(n=this.props.folders.length?this.props.folders[0].id:null,this.props.dispatch({type:"SELECTED_FOLDER_SET",id:n})),T().sendCommandToActiveTab({name:"isProbablyReaderable"});case 17:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){if(this.focusNewTagInput_){this.focusNewTagInput_=!1;for(var e=null,t=0;t<100;t++){var n=this.refs["tagSelector".concat(t)];if(!n)break;e=n}e&&e.focus()}}},{key:"renderStartupScreen",value:function(){var e={serverFoundState:{searching:"Connecting to the Joplin application...",not_found:"Error: Could not connect to the Joplin application. Please ensure that it is started and that the clipper service is enabled in the configuration."},authState:{starting:"Starting...",waiting:"The Joplin Web Clipper requires your authorisation in order to access your data. To proceed, please open the Joplin desktop application and grant permission. Note: Joplin 2.1+ is needed to use this version of the Web Clipper.",rejected:"Permission to access your data was not granted. To try again please close this popup and open it again."}},t=this.props.clipperServer.foundState,n="",r="";if(e.serverFoundState[t]?n=e.serverFoundState[t]:(n=e.authState[this.props.authStatus],r=o.a.createElement("h1",null,"Permission needed")),!n)throw new Error("Invalidate state: ".concat(t," / ").concat(this.props.authStatus));return o.a.createElement("div",{className:"App Startup"},r,n)}},{key:"render",value:function(){var e=this;if("accepted"!==this.props.authStatus)return this.renderStartupScreen();if(!this.state.contentScriptLoaded){var t="Loading...";return this.state.contentScriptError&&(t="The Joplin extension is not available on this tab due to: ".concat(this.state.contentScriptError)),o.a.createElement("div",{style:{padding:10,fontSize:12,maxWidth:200}},t)}var n=this.props.warning?o.a.createElement("div",{className:"Warning"},this.props.warning):null,r=!!this.props.clippedContent,a=this.props.clippedContent,s=null,i=this.props.contentUploadOperation;if(i){var c="";c=i.searchingClipperServer?"Searching clipper service... Please make sure that Joplin is running.":i.uploading?"Processing note... The note will be available in Joplin as soon as the web page and images have been downloaded and converted. In the meantime you may close this popup.":i.success?"Note was successfully created!":"There was some error creating the note: ".concat(i.errorMessage),s=o.a.createElement("div",{className:"Preview"},o.a.createElement("p",{className:"Info"},c))}else r&&(s=o.a.createElement(A,{onConfirmClick:this.confirm_click,title:a.title,body_html:a.body_html,onTitleChange:this.contentTitle_change,command:a.source_command}));for(var u=[],p=0;p<this.props.tags.length;p++){var l=this.props.tags[p];u.push(o.a.createElement("option",{key:l.id},l.title))}var h="Clip simplified page",d="";return this.props.isProbablyReaderable||(h+=" \u26a0\ufe0f",d="It might not be possible to create a good simplified version of this page.\nYou may want to clip the complete page instead."),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Controls"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{className:"Button",href:"#",onClick:this.clipSimplified_click,title:d},h)),o.a.createElement("li",null,o.a.createElement("a",{className:"Button",href:"#",onClick:this.clipComplete_click},"Clip complete page (Markdown)")),o.a.createElement("li",null,o.a.createElement("a",{className:"Button",href:"#",onClick:this.clipCompleteHtml_click},"Clip complete page (HTML)")),o.a.createElement("li",null,o.a.createElement("a",{className:"Button",href:"#",onClick:this.clipSelection_click},"Clip selection")),o.a.createElement("li",null,o.a.createElement("a",{className:"Button",href:"#",onClick:this.clipScreenshot_click},"Clip screenshot")),o.a.createElement("li",null,o.a.createElement("a",{className:"Button",href:"#",onClick:this.clipUrl_click},"Clip URL")))),function(){var t=[];return function e(n,r){for(var a=0;a<n.length;a++){var s=n[a];t.push(o.a.createElement("option",{key:s.id,value:s.id},("    ".repeat(r)+s.title).replace(/ /g,"\xa0"))),s.children&&e(s.children,r+1)}}(e.props.folders,0),o.a.createElement("div",{className:"Folders"},o.a.createElement("label",null,"In notebook: "),o.a.createElement("select",{value:e.props.selectedFolderId||"",onChange:e.folderSelect_change},t))}(),o.a.createElement("div",{className:"Tags"},o.a.createElement("label",null,"Tags:"),function(){for(var t=[],n=0;n<e.state.selectedTags.length;n++)t.push(o.a.createElement("div",{key:n},o.a.createElement("input",{ref:"tagSelector".concat(n),"data-index":n,type:"text",list:"tags",value:e.state.selectedTags[n],onChange:e.tagCompChanged,onInput:e.tagCompChanged}),o.a.createElement("a",{"data-index":n,href:"#",className:"ClearTagButton",onClick:e.onClearTagButtonClick},"[x]")));return o.a.createElement("div",null,t,o.a.createElement("a",{className:"AddTagButton",href:"#",onClick:e.onAddTagClick},"Add tag"))}(),o.a.createElement("datalist",{id:"tags"},u)),n,s,e.state.newNoteId?o.a.createElement("a",{className:"Button",href:"joplin://x-callback-url/openNote?id=".concat(encodeURIComponent(e.state.newNoteId)),target:"_blank",onClick:function(){return e.setState({newNoteId:null})}},"Open newly created note"):null,function(){var t,n="",r=null,a=null,s=e.props.clipperServer.foundState;return"found"===s?(n="Ready on port ".concat(e.props.clipperServer.port),r=S.a):(n="not_found"===(t=s)?"Not found":t.charAt(0).toUpperCase()+t.slice(1),r="searching"===s?E.a:g.a,"not_found"===s&&(a=o.a.createElement("a",{className:"Help",onClick:e.clipperServerHelpLink_click,href:"help"},"[Help]"))),n="Service status: ".concat(n),o.a.createElement("div",{className:"StatusBar"},o.a.createElement("img",{alt:s,className:"Led",src:r}),o.a.createElement("span",{className:"ServerStatus"},n,a))}())}}]),t}(i.Component),_=w((function(e){return{warning:e.warning,clippedContent:e.clippedContent,contentUploadOperation:e.contentUploadOperation,clipperServer:e.clipperServer,folders:e.folders,tags:e.tags,selectedFolderId:e.selectedFolderId,isProbablyReaderable:e.isProbablyReaderable,authStatus:e.authStatus}}))(y),C=n(16).Provider,x=n(15).bridge,P=n(8),O=P.createStore,N=P.applyMiddleware,j={warning:"",clippedContent:null,contentUploadOperation:null,clipperServer:{foundState:"idle",port:null},folders:[],tags:[],selectedFolderId:null,env:"prod",isProbablyReaderable:!0,authStatus:"starting"},I=function(e){return function(t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t(r),i=e.getState(),["SELECTED_FOLDER_SET"].indexOf(r.type)>=0&&x().scheduleStateSave(i),n.abrupt("return",s);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}};function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=e;if("WARNING_SET"===t.type)(n=Object.assign({},e)).warning=t.text;else if("IS_PROBABLY_READERABLE"===t.type)(n=Object.assign({},e)).isProbablyReaderable=t.value;else if("CLIPPED_CONTENT_SET"===t.type)(n=Object.assign({},e)).clippedContent=t.content;else if("CLIPPED_CONTENT_TITLE_SET"===t.type){var r=(n=Object.assign({},e)).clippedContent?Object.assign({},n.clippedContent):{};r.title=t.text,n.clippedContent=r}else if("CONTENT_UPLOAD"===t.type)(n=Object.assign({},e)).contentUploadOperation=t.operation;else if("FOLDERS_SET"===t.type)(n=Object.assign({},e)).folders=t.folders,!n.selectedFolderId&&t.folders.length&&(n.selectedFolderId=t.folders[0].id);else if("TAGS_SET"===t.type)(n=Object.assign({},e)).tags=t.tags;else if("SELECTED_FOLDER_SET"===t.type)(n=Object.assign({},e)).selectedFolderId=t.id;else if("CLIPPER_SERVER_SET"===t.type){n=Object.assign({},e);var a=Object.assign({},n.clipperServer);"foundState"in t&&(a.foundState=t.foundState),"port"in t&&(a.port=t.port),n.clipperServer=a}else"ENV_SET"===t.type?(n=Object.assign({},e)).env=t.env:"AUTH_STATE_SET"===t.type&&((n=Object.assign({},e)).authStatus=t.value);return n}function D(){return(D=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(R,N(I)),console.info("Popup: Init bridge and restore state..."),e.next=4,x().init(window.browser?window.browser:window.chrome,!!window.browser,t);case 4:console.info("Popup: Creating React app..."),u.a.render(o.a.createElement(C,{store:t},o.a.createElement(_,null)),document.getElementById("root"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return D.apply(this,arguments)})().catch((function(e){console.error("Fatal error on initialisation:",e)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.chunk.js.map