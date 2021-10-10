import{S,i as A,s as G,x as I,v as C,f as h,F as d,y as q,j as g,k as T,z as D,A as K,B as M,C as z,t as p,a as b,l as k,r as R,w as F,c as x,m as v,Z as N,d as j,D as w,g as B,K as L,q as O,X as Q,p as U,h as V,n as H,M as Y,$ as y}from"./vendor.c02447eb.js";import{L as ee,C as te,R as le}from"./Link.b95b6983.js";import{C as se,G as ae}from"./Grid.11b3279e.js";import{T as ne}from"./Tile.879fb408.js";import{f as re}from"./index.53a5fded.js";function oe(n){let e,a,t;const l=n[3].default,s=I(l,n,n[2],null);let o=[n[1]],c={};for(let r=0;r<o.length;r+=1)c=C(c,o[r]);return{c(){e=h("div"),a=h("div"),s&&s.c(),d(a,"bx--aspect-ratio--object",!0),q(e,c),d(e,"bx--aspect-ratio",!0),d(e,"bx--aspect-ratio--2x1",n[0]==="2x1"),d(e,"bx--aspect-ratio--16x9",n[0]==="16x9"),d(e,"bx--aspect-ratio--4x3",n[0]==="4x3"),d(e,"bx--aspect-ratio--1x1",n[0]==="1x1"),d(e,"bx--aspect-ratio--3x4",n[0]==="3x4"),d(e,"bx--aspect-ratio--3x2",n[0]==="3x2"),d(e,"bx--aspect-ratio--9x16",n[0]==="9x16"),d(e,"bx--aspect-ratio--1x2",n[0]==="1x2")},m(r,i){g(r,e,i),T(e,a),s&&s.m(a,null),t=!0},p(r,[i]){s&&s.p&&(!t||i&4)&&D(s,l,r,r[2],t?M(l,r[2],i,null):K(r[2]),null),q(e,c=z(o,[i&2&&r[1]])),d(e,"bx--aspect-ratio",!0),d(e,"bx--aspect-ratio--2x1",r[0]==="2x1"),d(e,"bx--aspect-ratio--16x9",r[0]==="16x9"),d(e,"bx--aspect-ratio--4x3",r[0]==="4x3"),d(e,"bx--aspect-ratio--1x1",r[0]==="1x1"),d(e,"bx--aspect-ratio--3x4",r[0]==="3x4"),d(e,"bx--aspect-ratio--3x2",r[0]==="3x2"),d(e,"bx--aspect-ratio--9x16",r[0]==="9x16"),d(e,"bx--aspect-ratio--1x2",r[0]==="1x2")},i(r){t||(p(s,r),t=!0)},o(r){b(s,r),t=!1},d(r){r&&k(e),s&&s.d(r)}}}function ie(n,e,a){const t=["ratio"];let l=R(e,t),{$$slots:s={},$$scope:o}=e,{ratio:c="2x1"}=e;return n.$$set=r=>{e=C(C({},e),F(r)),a(1,l=R(e,t)),"ratio"in r&&a(0,c=r.ratio),"$$scope"in r&&a(2,o=r.$$scope)},[c,l,o,s]}class fe extends S{constructor(e){super();A(this,e,ie,oe,G,{ratio:0})}}var ce=fe;function ue(n){let e;const a=n[5].default,t=I(a,n,n[13],null);return{c(){t&&t.c()},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&8192)&&D(t,a,l,l[13],e?M(a,l[13],s,null):K(l[13]),null)},i(l){e||(p(t,l),e=!0)},o(l){b(t,l),e=!1},d(l){t&&t.d(l)}}}function de(n){let e,a;const t=[n[4],{disabled:n[2]},{class:"bx--tile bx--tile--clickable "+(n[0]&&"bx--tile--is-clicked")+" "+(n[1]&&"bx--tile--light")+" "+n[4].class},{href:n[3]}];let l={$$slots:{default:[ue]},$$scope:{ctx:n}};for(let s=0;s<t.length;s+=1)l=C(l,t[s]);return e=new ee({props:l}),e.$on("click",n[6]),e.$on("click",n[7]),e.$on("keydown",n[8]),e.$on("keydown",n[9]),e.$on("mouseover",n[10]),e.$on("mouseenter",n[11]),e.$on("mouseleave",n[12]),{c(){x(e.$$.fragment)},m(s,o){v(e,s,o),a=!0},p(s,[o]){const c=o&31?z(t,[o&16&&N(s[4]),o&4&&{disabled:s[2]},o&19&&{class:"bx--tile bx--tile--clickable "+(s[0]&&"bx--tile--is-clicked")+" "+(s[1]&&"bx--tile--light")+" "+s[4].class},o&8&&{href:s[3]}]):{};o&8192&&(c.$$scope={dirty:o,ctx:s}),e.$set(c)},i(s){a||(p(e.$$.fragment,s),a=!0)},o(s){b(e.$$.fragment,s),a=!1},d(s){j(e,s)}}}function _e(n,e,a){const t=["clicked","light","disabled","href"];let l=R(e,t),{$$slots:s={},$$scope:o}=e,{clicked:c=!1}=e,{light:r=!1}=e,{disabled:i=!1}=e,{href:P=void 0}=e;function f(u){w.call(this,n,u)}const _=()=>{a(0,c=!c)};function $(u){w.call(this,n,u)}const m=({key:u})=>{(u===" "||u==="Enter")&&a(0,c=!c)};function E(u){w.call(this,n,u)}function Z(u){w.call(this,n,u)}function J(u){w.call(this,n,u)}return n.$$set=u=>{e=C(C({},e),F(u)),a(4,l=R(e,t)),"clicked"in u&&a(0,c=u.clicked),"light"in u&&a(1,r=u.light),"disabled"in u&&a(2,i=u.disabled),"href"in u&&a(3,P=u.href),"$$scope"in u&&a(13,o=u.$$scope)},[c,r,i,P,l,s,f,_,$,m,E,Z,J,o]}class me extends S{constructor(e){super();A(this,e,_e,de,G,{clicked:0,light:1,disabled:2,href:3})}}var pe=me;function W(n,e,a){const t=n.slice();return t[1]=e[a],t}function be(n){let e,a,t;return{c(){e=h("h1"),e.textContent="Selamat Datang di",a=B(),t=h("h2"),t.textContent="Biro Inovasi Pembelajaran"},m(l,s){g(l,e,s),g(l,a,s),g(l,t,s)},d(l){l&&k(e),l&&k(a),l&&k(t)}}}function he(n){let e,a;return e=new ne({props:{class:"flex w-full flex-col h-72",light:!0,$$slots:{default:[be]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,l){v(e,t,l),a=!0},p(t,l){const s={};l&16&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function $e(n){let e,a;return e=new le({props:{$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,l){v(e,t,l),a=!0},p(t,l){const s={};l&16&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ge(n){let e,a;return e=new te({props:{$$slots:{default:[$e]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,l){v(e,t,l),a=!0},p(t,l){const s={};l&16&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ke(n){let e,a;return e=new ae({props:{$$slots:{default:[ge]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,l){v(e,t,l),a=!0},p(t,l){const s={};l&16&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function xe(n){let e,a,t=n[1].body+"",l,s;return{c(){e=h("div"),a=h("h3"),l=V(t),L(e,"class","w-full h-full justify-center flex items-center")},m(o,c){g(o,e,c),T(e,a),T(a,l)},p:H,i(o){s||Y(()=>{s=y(e,re,{}),s.start()})},o:H,d(o){o&&k(e)}}}function ve(n){let e,a,t;return e=new ce({props:{$$slots:{default:[xe]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),a=B()},m(l,s){v(e,l,s),g(l,a,s),t=!0},p(l,s){const o={};s&16&&(o.$$scope={dirty:s,ctx:l}),e.$set(o)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){j(e,l),l&&k(a)}}}function X(n){let e,a;return e=new pe({props:{href:n[1].ref,class:"w-1/4",$$slots:{default:[ve]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,l){v(e,t,l),a=!0},p(t,l){const s={};l&16&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(p(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function je(n){let e,a,t,l,s,o,c;e=new se({props:{$$slots:{default:[ke]},$$scope:{ctx:n}}});let r=n[0],i=[];for(let f=0;f<r.length;f+=1)i[f]=X(W(n,r,f));const P=f=>b(i[f],1,1,()=>{i[f]=null});return{c(){x(e.$$.fragment),a=B(),t=h("div"),l=h("div"),l.innerHTML='<h3 class="text-light-50">Program</h3>',s=B(),o=h("div");for(let f=0;f<i.length;f+=1)i[f].c();L(l,"class","w-full bg-dark-900 p-5"),L(o,"class","flex flex-row h-full"),L(t,"class","flex flex-col h-full")},m(f,_){v(e,f,_),g(f,a,_),g(f,t,_),T(t,l),T(t,s),T(t,o);for(let $=0;$<i.length;$+=1)i[$].m(o,null);c=!0},p(f,[_]){const $={};if(_&16&&($.$$scope={dirty:_,ctx:f}),e.$set($),_&1){r=f[0];let m;for(m=0;m<r.length;m+=1){const E=W(f,r,m);i[m]?(i[m].p(E,_),p(i[m],1)):(i[m]=X(E),i[m].c(),p(i[m],1),i[m].m(o,null))}for(U(),m=r.length;m<i.length;m+=1)P(m);O()}},i(f){if(!c){p(e.$$.fragment,f);for(let _=0;_<r.length;_+=1)p(i[_]);c=!0}},o(f){b(e.$$.fragment,f),i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)b(i[_]);c=!1},d(f){j(e,f),f&&k(a),f&&k(t),Q(i,f)}}}function Ce(n){return[[{ref:"https://bip.ums.ac.id/pekerti",body:"PEKERTI"},{ref:"https://bip.ums.ac.id",body:"WEBSITE"},{ref:"",body:""},{ref:"",body:""}]]}class Be extends S{constructor(e){super();A(this,e,Ce,je,G,{})}}export{Be as default};