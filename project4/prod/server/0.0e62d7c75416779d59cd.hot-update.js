exports.id=0,exports.modules={"./src/server/server.js":function(e,n,t){"use strict";t.r(n),function(e){t("babel-polyfill");function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,n)||r(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n,t,r,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void t(e)}u.done?n(i):Promise.resolve(i).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var c=e.apply(n,t);function u(e){a(c,r,o,u,i,"next",e)}function i(e){a(c,r,o,u,i,"throw",e)}u(void 0)}))}}var u=t("./build/contracts/FlightSuretyApp.json"),i=(t("./build/contracts/FlightSuretyData.json"),t("./src/server/config.json")),s=t("web3"),l=t("express"),f=i.localhost,d=new s(new s.providers.WebsocketProvider(f.url.replace("http","ws")));d.eth.defaultAccount=d.eth.accounts[0];var h=new d.eth.Contract(u.abi,f.appAddress),p=new Map,m=[],v=[20,0,10,30,40,50],g=function(){var e=c(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:m=e.sent,n=20;case 5:if(!(n<40)){e.next=16;break}return e.next=8,b(m[n]);case 8:return e.next=10,w(m[n]);case 10:t=e.sent,p.set(m[n],t),console.log("Oracle number ".concat(n-10," - ").concat(m[n]," has indexes =  ").concat(t));case 13:n++,e.next=5;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),y=function(){return new Promise((function(e,n){d.eth.getAccounts((function(t,r){t?(console.error("Error encountered while getting accounts"),n(t)):e(r)}))}))},b=function(e){return new Promise((function(n,t){h.methods.registerOracle.send({from:e,value:d.utils.toWei("1","ether"),gas:3e6},(function(r,o){r?(console.error("Error encountered while registering oracle  "+e),t(r)):n(o)}))}))},w=function(e){return new Promise((function(n,t){h.methods.getMyIndexes.call({from:e,gas:5e5},(function(r,o){r?(console.log("Error encountered while getOracleIndexes for   "+e+"because "+r.message),t(r)):n(o)}))}))},x=function(){var e=c(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(n.returnValues.index).forEach(function(){var e=c(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t,n.returnValues.index,n.returnValues.airline,n.returnValues.flight,n.returnValues.departureTime);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Unable to submitOracleResponse for Oracle Address "+t);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),A=function(e){var t,o=[],a=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){i=!0,c=e},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw c}}}}(p);try{var c=function(){var r=n(t.value,2),a=r[0];r[1].forEach((function(n){n==e&&(o.push(a),console.log(e+"->"+a))}))};for(a.s();!(t=a.n()).done;)c()}catch(e){a.e(e)}finally{a.f()}return o},O=function(e,n,t,r,o){return new Promise((function(a,c){var u=R();console.log("Oracle ".concat(e," is submitting flight status code of ").concat(u)),h.methods.submitOracleResponse(n,t,r,o,u).send({from:e,gas:5e5},(function(n,t){n?(console.log("oracle ".concat(e," was rejected while submitting oracle response with status statusCode ").concat(u)),c(n)):a(t)}))}))},R=function(){return Math.floor(Math.random()*Math.floor(10))<=7?v[0]:v[Math.floor(Math.random()*Math.floor(5))+1]};h.events.OracleRequest({fromBlock:0},(function(e,n){e?console.log(e):(console.log("OracleRequest event received"),x(n))})),h.events.OracleReport({fromBlock:0},(function(e,n){e?console.log(e):console.log("OracleReport event received")})),h.events.FlightStatusInfo({fromBlock:0},(function(e,n){e?console.log(e):console.log("".concat(n.event," Received with attributes : \n            airline ").concat(n.returnValues.airline," \n            flight ").concat(d.utils.toUtf8(n.returnValues.flight)," \n            departureTime ").concat(Number(n.returnValues.departureTime)," \n            statusCode : ").concat(n.returnValues.status,"\n        "))}));var S=l();S.get("/api",(function(e,n){n.send({message:"An API for use with your Dapp!"})})),g(),e.export={app:S}}.call(this,t("./node_modules/webpack/buildin/harmony-module.js")(e))}};