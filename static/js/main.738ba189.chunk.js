(this["webpackJsonpwild-gun"]=this["webpackJsonpwild-gun"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Pop.73ecaaf0.mp3"},function(e,t,n){e.exports=n.p+"static/media/Wrong.ae5caba5.mp3"},function(e,t,n){e.exports=n.p+"static/media/Gunshot.dce02874.mp3"},function(e,t,n){e.exports=n.p+"static/media/Pong.986c2719.mp3"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAACCCAYAAAAt8mRDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABDSURBVHgB7cABDQAAAMKg909tDwcFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8G7VKAAFBnuoFAAAAAElFTkSuQmCC"},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=(n(17),n(18),n(2)),i=n(1),s=n(8),l=n.n(s),A=n(9),f=n.n(A),m=n(4);n(19);var d=["blue","yellow","pink","green","orange"],p=function(e){var t,n=e.el,c=e.i,o=e.del,u=e.miss,s=e.speed,l=Object(a.useRef)(!0),A=Object(a.useState)("wrapper"),f=Object(i.a)(A,2),m=f[0],p=f[1],g=Object(a.useState)(!0),b=Object(i.a)(g,2),v=b[0],j=b[1],h=Object(a.useState)(0),E=Object(i.a)(h,2),O=E[0],w=E[1],S=Object(a.useState)((t=d)[Math.floor(Math.random()*t.length)]),y=Object(i.a)(S,1)[0];return Object(a.useEffect)((function(){var e=null;return v&&!0===v&&l.current&&l.current.offsetTop<-130&&(l.current=!1,j(!1),u(),o(n.id)),v?e=setInterval((function(){w((function(e){return e+1}))}),500):v||0===O||clearInterval(e),function(){return clearInterval(e)}}),[v,O]),Object(a.useEffect)((function(){setTimeout((function(){p(m+" up")}),1e3*c)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{left:"".concat(n.left,"px"),transition:"top ".concat(s,"s")},tabIndex:20-c,className:m,id:n.id,ref:l},r.a.createElement("div",{className:n.bang?"explosion":"balloon "+y},r.a.createElement("h1",null,!n.bang&&n.value))))},g=[50,170,290,410,530,650],b="abcdefghijklmnopqrstuvwxyz".split("");function v(e){return new Promise((function(t,n){setTimeout((function(){t("anything")}),e)}))}for(var j=function(e){return e[Math.floor(Math.random()*e.length)]},h=[],E=0;E<25;E++)h.push({id:Math.random(),left:j(g),value:j(b),bang:!1});var O=function(e){var t=e.pop,n=e.wrong,c=e.info,o=e.start,s=e.changeInfo,l=6-.2*c.games,A=Object(a.useState)(h),f=Object(i.a)(A,2),d=f[0],g=f[1],j=Object(a.useRef)(null),E=function(e){var t=Object(m.a)(d).filter((function(t){return t.id!==e}));g(t)},O=function(){s("missed")};Object(a.useEffect)((function(){j.current.focus()}),[]),Object(a.useEffect)((function(){0===d.length&&(v(1e3).then((function(){return o()})),s("games"))}),[d]);var w=function(e){var a=function(e){var t=d.find((function(t){return t.value===e}))||null;return t&&t.id}(e.key.toLowerCase())||null;if(a){var r=document.getElementById(a).getBoundingClientRect();r.top>=-130&&r.top<480&&(console.log("press"),t.pause(),t.currentTime=0,t.play(),function(e){var t=Object(m.a)(d).map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{bang:!0}):t}));g(t),v(50).then((function(){E(e)})),s("hits")}(a))}else b.includes(e.key.toLowerCase())&&(n.pause(),n.currentTime=0,n.play())};return r.a.createElement("div",{id:"screen",onKeyPress:function(e){return w(e)},ref:j,tabIndex:30},r.a.createElement("div",{className:"game-zone-balloons"},r.a.createElement("div",{id:"cloud-intro"}),d&&d.map((function(t,n){return r.a.createElement(p,{key:t.id,i:n,speed:l,el:t,miss:O,del:E,pop:e.pop,wrong:e.wrong})}))))},w=function(e){var t=e.start,n=e.info,c=Object(a.useRef)(!0);return Object(a.useEffect)((function(){c.current.focus()}),[]),r.a.createElement("div",{className:"game-zone-balloons"},r.a.createElement("div",{className:"info"},n.games?r.a.createElement("p",null,"Rounds: ",n.games):null,n.games?r.a.createElement("p",null,"Hits: ",n.hits):null,n.games?r.a.createElement("p",null,"Missed: ",n.missed):null),r.a.createElement("button",{className:"start",ref:c,onClick:t},0===n.games?"Start Game":"Continue Game"))},S={started:!1,games:0,hits:0,missed:0};var y=function(){var e=Object(a.useState)(new Audio(l.a)),t=Object(i.a)(e,1)[0],n=Object(a.useState)(new Audio(f.a)),c=Object(i.a)(n,1)[0],o=Object(a.useState)(S),s=Object(i.a)(o,2),A=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(i.a)(d,2),g=p[0],b=p[1],v=function(){b(!g)};return r.a.createElement(r.a.Fragment,null,g?r.a.createElement(O,{info:A,pop:t,wrong:c,changeInfo:function(e){var t=Object(u.a)({},A);t[e]+=1,m(t)},start:v}):r.a.createElement(w,{start:v,info:A}))};n(20);var k=[];!function(){for(var e=52,t=51,n=1;n<=3;n++){for(var a=1;a<=7;a++)k.push({top:e,left:t}),t+=107;t=51,e+=182}}();n(10),n(11),n(21);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(22);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.738ba189.chunk.js.map