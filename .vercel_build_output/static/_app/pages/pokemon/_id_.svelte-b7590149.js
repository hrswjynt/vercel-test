import{S as V,i as $,s as z,e as h,t as f,k as J,c as m,a as v,g as u,d as _,n as M,b as d,J as P,f as A,D as t,h as q,E as U}from"../../chunks/vendor-20f4fcab.js";function F(s){let e,r,l=s[0].name+"",c,g,o,N,k,O,R,E,y=s[0].height+"",w,b,S,T=s[0].weight+"",G,j,i,D,H;return{c(){e=h("div"),r=h("h1"),c=f(l),g=J(),o=h("p"),N=f("Type: "),k=h("strong"),O=f(s[1]),R=f(" | Height: "),E=h("strong"),w=f(y),b=f(` | Weight:\r
		`),S=h("strong"),G=f(T),j=J(),i=h("img"),this.h()},l(n){e=m(n,"DIV",{class:!0});var a=v(e);r=m(a,"H1",{class:!0});var I=v(r);c=u(I,l),I.forEach(_),g=M(a),o=m(a,"P",{});var p=v(o);N=u(p,"Type: "),k=m(p,"STRONG",{});var W=v(k);O=u(W,s[1]),W.forEach(_),R=u(p," | Height: "),E=m(p,"STRONG",{});var B=v(E);w=u(B,y),B.forEach(_),b=u(p,` | Weight:\r
		`),S=m(p,"STRONG",{});var C=v(S);G=u(C,T),C.forEach(_),p.forEach(_),j=M(a),i=m(a,"IMG",{class:!0,src:!0,alt:!0}),a.forEach(_),this.h()},h(){d(r,"class","text-4xl text-center my-8 uppercase"),d(i,"class","card-image"),P(i.src,D=s[0].sprites.front_default)||d(i,"src",D),d(i,"alt",H=s[0].name),d(e,"class","flex flex-col items-center")},m(n,a){A(n,e,a),t(e,r),t(r,c),t(e,g),t(e,o),t(o,N),t(o,k),t(k,O),t(o,R),t(o,E),t(E,w),t(o,b),t(o,S),t(S,G),t(e,j),t(e,i)},p(n,[a]){a&1&&l!==(l=n[0].name+"")&&q(c,l),a&1&&y!==(y=n[0].height+"")&&q(w,y),a&1&&T!==(T=n[0].weight+"")&&q(G,T),a&1&&!P(i.src,D=n[0].sprites.front_default)&&d(i,"src",D),a&1&&H!==(H=n[0].name)&&d(i,"alt",H)},i:U,o:U,d(n){n&&_(e)}}}async function Q({page:s}){const r=`https://pokeapi.co/api/v2/pokemon/${s.params.id}`;return{props:{pokeman:await(await fetch(r)).json()}}}function K(s,e,r){let{pokeman:l}=e;const c=l.types[0].type.name;return s.$$set=g=>{"pokeman"in g&&r(0,l=g.pokeman)},[l,c]}class X extends V{constructor(e){super();$(this,e,K,F,z,{pokeman:0})}}export{X as default,Q as load};