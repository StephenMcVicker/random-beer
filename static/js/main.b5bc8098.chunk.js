(this["webpackJsonprandom-beer"]=this["webpackJsonprandom-beer"]||[]).push([[0],{37:function(e,n,t){e.exports=t(65)},43:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(32),l=t.n(i),o=t(15),c=t.n(o),s=t(19),m=t(9),d=(t(43),t(17)),p=t.n(d),u=t(1),b=t(11),f=t(2),x=t(3),h=t(36);function g(){var e=Object(f.a)(["\n  display: inline-block;\n\n  margin: 1rem 0 0.4rem 0;\n  padding: 1rem;\n\n  border-radius: 50vh;\n\n  background-color: #00416d;\n  color: white;\n\n  text-transform: uppercase;\n  font-weight: bold;\n\n  cursor: pointer;\n\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n\n  /* remove default button styles */\n  outline: none;\n  border: none;\n\n  transition: all 0.3s;\n\n  :active {\n    -webkit-box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.51);\n    -moz-box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.51);\n    box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.51);\n    transform: translateY(4px);\n    transform: scale(0.98);\n  }\n"]);return g=function(){return e},e}var w=x.a.button(g());function v(){var e=Object(f.a)(["\n  position: relative;\n  width: 160px;\n  height: 200px;\n\n  margin-top: 160px;\n  margin-bottom: 2rem;\n\n  background: rgb(41, 0, 1);\n  background: linear-gradient(\n    -90deg,\n    rgba(41, 0, 1, 1) 0%,\n    rgba(135, 67, 29, 1) 100%\n  );\n\n  border-radius: 0px 0px 10px 10px;\n\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n\n  > .bottle__image {\n    position: absolute;\n    width: 100%;\n    height: 120px;\n    margin: 0 0 1rem 0;\n\n    > img {\n      width: 100%;\n      height: 100%;\n      object-fit: fill;\n    }\n  }\n\n  /* Extra parts to the bottle */\n  .bottle__top {\n    position: absolute;\n    width: 160px;\n    height: 80px;\n\n    border-radius: 50px 50px 0 0;\n\n    /* position it on top */\n    top: 0%;\n    transform: translateY(-100%);\n\n    background-color: #290001;\n\n    .bottle__top2 {\n      position: absolute;\n      width: 60px;\n      height: 80px;\n\n      border-radius: 10px 10px 0 0;\n\n      /* position it on top */\n      top: 10px;\n      left: 50%;\n      transform: translate(-50%, -100%);\n\n      background-color: #290001;\n    }\n  }\n"]);return v=function(){return e},e}var E=x.a.div(v());function y(e){var n=e.imgURL;return r.a.createElement(E,null,r.a.createElement("div",{className:"bottle__image"},r.a.createElement("img",{src:n,alt:"logo-pic"})),r.a.createElement("div",{className:"bottle__top"},r.a.createElement("div",{className:"bottle__top2"})))}function k(){var e=Object(f.a)(["\n  width: auto;\n\n  /*border: 1px solid #ba6e00;*/\n  background-color: #ed9418;\n  color: white;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: bold;\n\n  margin: 0.5rem 0 0.5rem 0;\n  padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n"]);return k=function(){return e},e}var j=x.a.div(k());function O(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 0.5rem 0 0.5rem 0;\n\n  display: flex;\n  flex-direction: row;\n  background-color: #e1eaf7;\n  border-radius: 6px;\n\n  justify-content: space-evenly;\n\n  .extraDetailsItem {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: bold;\n    > span {\n      font-size: 0.8rem;\n      font-weight: 400;\n    }\n  }\n"]);return O=function(){return e},e}var N=x.a.div(O());function C(){var e=Object(f.a)(["\n  background: none;\n  border: 1px solid #00416d;\n  color: #00416d;\n"]);return C=function(){return e},e}function D(){var e=Object(f.a)(["\n  padding: 0.5rem;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  /* Medium/Larger screens */\n  @media only screen and (min-width: 768px) {\n    margin-left: 2rem;\n  }\n\n  .name {\n    font-size: 1.4rem;\n    font-weight: bold;\n    color: #00416d;\n    margin-bottom: 0.5rem;\n  }\n\n  .brewery {\n    margin-top: 0.8rem;\n    margin-bottom: 0.3rem;\n    > span {\n      margin-left: 2px;\n      margin-right: 0.2rem;\n    }\n  }\n"]);return D=function(){return e},e}function L(){var e=Object(f.a)(["\n  position: relative;\n  width: 300px;\n  padding: 1rem 1rem 0 1rem;\n  margin-top: 0.5rem;\n  border-radius: 10px;\n\n  background-color: #f1f3f8;\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n\n  display: flex;\n  flex-direction: column;\n  align-items: ",";\n  flex: 0 0 auto;\n\n  /* Medium/Larger screens */\n  @media only screen and (min-width: 768px) {\n    flex-direction: row;\n    width: 700px;\n  }\n\n  /* solely error display style-overrides */\n  height: ",";\n  color: ",";\n\n  .error {\n    width: 90%;\n    height: 90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: rgb(33, 33, 33);\n    text-align: center;\n    font-size: 1.2rem;\n    > h2 {\n      color: red;\n      margin: 0 0 5rem 0;\n    }\n  }\n\n  .bottleContainer {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media only screen and (min-width: 768px) {\n      width: auto;\n      height: 100%;\n    }\n  }\n"]);return L=function(){return e},e}var I=Object(x.a)(h.a.div)(L(),(function(e){return e.error?"center":"flex-start"}),(function(e){return e.error?"500px":""}),(function(e){return e.error?"red":""})),S=x.a.div(D()),_=Object(x.a)(w)(C());function z(e){var n=e.beer,t=e.brewery,i=e.category,l=e.error,o=e.handleClick,c=(e.history,Object(a.useState)(!1)),s=Object(m.a)(c,2),d=s[0],p=s[1],u=n.name,f="";"undefined"===typeof n.style.description&&null==n.style.description||(f=n.style.description);var x=n.labels.medium,h=t.nameShortDisplay,g=n.abv,w="Y"===n.isOrganic?"Yes":"No",v=n.createDate.slice(0,4);return r.a.createElement(I,{animate:{opacity:[0,1],rotate:[35,0],x:[100,0],y:[20,0],transitionEnd:{}},transition:{duration:.5},error:l},!1===l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bottleContainer"},r.a.createElement(y,{imgURL:x})),r.a.createElement(S,null,r.a.createElement("p",{className:"name"},u),r.a.createElement(j,null,i),r.a.createElement(N,null,r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"ABV"),g),r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"Organic"),w),r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"Year"),v)),h.length>1?r.a.createElement("div",{className:"brewery"},r.a.createElement("span",{role:"img","aria-label":"brewery location"},"\ud83c\udfed"),h):r.a.createElement(r.a.Fragment,null),r.a.createElement(b.b,{to:"/brewery"},r.a.createElement(_,{onClick:function(){(function(e){var n=typeof e===typeof Function;return!1===n&&console.log("Attempted to call an undefined function"),n})(o)&&o()}},"Brewery Info ",r.a.createElement("i",{className:"fas fa-angle-right"}))),!0===d&&f.length>=1?r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{onClick:function(){return p(!d)}},"Hide Description ",r.a.createElement("i",{className:"fas fa-angle-up"})),r.a.createElement("p",null,f)):r.a.createElement(_,{onClick:function(){return p(!d)}},"Read Description ",r.a.createElement("i",{className:"fas fa-angle-down"})))):r.a.createElement("div",{className:"error"},r.a.createElement("h2",null,"Error!"),r.a.createElement("p",null,r.a.createElement("b",null,"Whoops."),r.a.createElement("br",null),"Seems there was an error loading the lovely beer.",r.a.createElement("br",null),"Check your connection and try again.")))}function B(){var e=Object(f.a)(["\n  padding: 1.4rem;\n  margin: 2rem 0 1rem 0;\n  font-size: 1.3rem;\n  position: relative;\n\n  width: ",";\n  height: ",";\n  background-color: ",";\n  cursor: ",";\n\n  .lds-ellipsis {\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-10%, -50%);\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return B=function(){return e},e}z.defaultProps={beer:{id:"wXVeJD",name:"Incorrigible",description:"Limited availability.",isOrganic:"N",abv:"4.5",createDate:"2013-09-28 14:21:25",labels:{medium:"https://brewerydb-images.s3.amazonaws.com/beer/wXVeJD/upload_ZVFd9k-medium.png"}},category:"American-Style Sour Ale",brewery:{nameShortDisplay:"New Holland"}};var A=Object(x.a)(w)(B(),(function(e){return!0===e.isLoading?"330px":""}),(function(e){return!0===e.isLoading?"74px":""}),(function(e){return!0===e.isLoading?"#003254":""}),(function(e){return!0===e.isLoading?"default":"pointer"}));function Y(e){var n=e.isLoading,t=e.handleClick;return!0===n?r.a.createElement(A,{isLoading:n},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))):r.a.createElement(A,{onClick:t},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{role:"img","aria-label":"beer emoji"},"\ud83c\udf7a")," ","Another Beer, Please"))}function F(e){var n=e.isLoading,t=e.fetchCallback,i=e.beer,l=e.brewery,o=e.category,c=e.handleClickNewBeer,s=e.handleShowMoreInfo,m=e.error,d=e.history;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("p",{style:{padding:"2rem",textAlign:"center"}},"Find exciting beers from around the world for your tasting pleasure"),!0===n?r.a.createElement("div",{style:{padding:"2rem",width:"300px",height:"480px",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("h4",null,"Loading...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Like this one"),r.a.createElement(z,{beer:i,brewery:l,category:o,handleClick:s,error:m,history:d})),r.a.createElement(Y,{isLoading:n,handleClick:c}))}function M(){var e=Object(f.a)(["\n  position: relative;\n  width: 300px;\n  padding: 1rem 1rem 0 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  border-radius: 10px;\n\n  background-color: #f1f3f8;\n  -webkit-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  -moz-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.51);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 auto;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: #00416d;\n  }\n\n  img {\n    width: 100%;\n    height: 200px;\n  }\n\n  /* Medium/Larger screens */\n  @media only screen and (min-width: 768px) {\n    width: 700px;\n  }\n"]);return M=function(){return e},e}function V(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  flex: 0 0 auto;\n"]);return V=function(){return e},e}var R=x.a.div(V()),J=x.a.div(M());function W(e){var n=e.brewery,t=e.fetchCallback;Object(a.useEffect)((function(){t()}),[t]);var i="Y"===n.isInBusiness,l="Y"===n.isVerified,o="";return"undefined"===typeof n.images&&null==n.images||(o=n.images.medium),r.a.createElement(R,null,r.a.createElement(J,null,r.a.createElement("h1",null,n.name),r.a.createElement("div",{className:"bottle__image"},r.a.createElement("img",{src:o,alt:"logo-pic"})),r.a.createElement("h4",null,"About"),r.a.createElement("p",null,n.description),r.a.createElement(N,null,r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"established"),n.established),!0===i?r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"Operating"),r.a.createElement("i",{className:"fas fa-thumbs-up"})):r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"Operating"),r.a.createElement("i",{className:"fas fa-thumbs-down"})),!0===l?r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"Verified"),r.a.createElement("i",{className:"fas fa-thumbs-up"})):r.a.createElement("div",{className:"extraDetailsItem"},r.a.createElement("span",null,"Operating"),r.a.createElement("i",{className:"fas fa-thumbs-down"})))),r.a.createElement(b.b,{to:"/"},r.a.createElement(w,null,r.a.createElement("i",{className:"fas fa-chevron-left",style:{marginRight:"0.5rem"}}),"Back")))}function H(){var e=Object(f.a)(["\n  position: relative;\n  width: 100vw;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: 1rem;\n\n  background-color: #00416d;\n  color: white;\n"]);return H=function(){return e},e}var P=x.a.div(H()),U="a5c1b917e7ba62dcd79f434ed73bc72d";function X(e){return"https://thingproxy.freeboard.io/fetch/".concat(e)}var T=function(){var e=Object(a.useState)(!0),n=Object(m.a)(e,2),t=n[0],i=n[1],l=Object(a.useState)(!1),o=Object(m.a)(l,2),d=o[0],f=o[1],x=Object(a.useState)([]),h=Object(m.a)(x,2),g=h[0],w=h[1],v=Object(a.useState)(""),E=Object(m.a)(v,2),y=E[0],k=E[1],j=Object(a.useState)({}),O=Object(m.a)(j,2),N=O[0],C=O[1],D=Object(a.useState)({}),L=Object(m.a)(D,2),I=L[0],S=L[1],_=Object(a.useState)(""),z=Object(m.a)(_,2),B=z[0],A=z[1],Y=Object(u.f)(),M=Object(a.useCallback)(Object(s.a)(c.a.mark((function e(){var n,t,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),f(!1),e.prev=2,e.next=5,p.a.get(X("".concat("http://api.brewerydb.com/v2/","/beer/random/?withBreweries=Y&hasLabels=Y&key=").concat(U)));case 5:return n=e.sent,t=n.data.data.id,C(n.data.data.breweries[0]),A(n.data.data.style.category.name),e.next=11,p.a.get(X((l=t,"".concat("http://api.brewerydb.com/v2/","/beer/").concat(l,"/?key=").concat(U))));case 11:a=e.sent,r=a.data.data,w(r),k(r.description),i(!1),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),f(!0),i(!1),console.error(e.t0);case 23:case"end":return e.stop()}var l}),e,null,[[2,18]])}))),[]),V=Object(a.useCallback)(Object(s.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(X((a=N.id,"".concat("http://api.brewerydb.com/v2/","/brewery/").concat(a,"/?key=").concat(U))));case 3:n=e.sent,t=n.data.data,S(t),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),f(!0),i(!1),console.error(e.t0);case 13:case"end":return e.stop()}var a}),e,null,[[0,8]])}))),[N.id]);return r.a.createElement(b.a,{history:Y},r.a.createElement("div",{className:"App"},r.a.createElement(P,null,r.a.createElement("h2",null,"The Random Beer App")),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/brewery",children:r.a.createElement(W,{brewery:I,fetchCallback:V})}),r.a.createElement(u.a,{exact:!0,path:"/",children:r.a.createElement(F,{isLoading:t,fetchCallback:M,beer:g,brewery:N,beerDescription:y,category:B,handleClickNewBeer:function(){M()},handleShowMoreInfo:function(){},error:d,history:Y})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b5bc8098.chunk.js.map