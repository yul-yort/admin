(this["webpackJsonpyul-yort-admin"]=this["webpackJsonpyul-yort-admin"]||[]).push([[9],{199:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(111),c=function(e){return Object(a.a)()[e]}},205:function(e,t,n){"use strict";var a=n(206),c=n.n(a),r=n(1);t.a=function(e){var t=e.children;return Object(r.jsx)("div",{className:c.a.body,children:t})}},206:function(e,t,n){e.exports={body:"styles_body__7aA_M"}},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(12),c=n(0),r=n(69),i=function(){var e=Object(c.useState)(document.title||""),t=Object(a.a)(e,2),n=t[0],i=t[1],s=document.querySelector("title"),o=new MutationObserver((function(e){e.forEach((function(){i(document.title)}))}));return s&&o.observe(s,{childList:!0}),{title:n,setTitle:r.b}}},240:function(e,t,n){e.exports={title:"styles_title__30_lW"}},242:function(e,t,n){e.exports={title:"styles_title__3Kn8f",listItem:"styles_listItem__1ypiD",menuWrapper:"styles_menuWrapper__17ELK",link:"styles_link__3f_MU",logoutButton:"styles_logoutButton__2Y58K"}},301:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthorizedApp",(function(){return V}));var a=n(2),c=n.n(a),r=n(10),i=n(12),s=n(15),o=n(0),l=n(49),u=n(223),j=n(54),b=n(101),d=n(110),O=n(304),h=n(305),p=n(193),x=n(190),f=n(241),m=n.n(f),_=n(240),v=n.n(_),y=n(1),g=function(e){var t=e.openDrawer,n=e.title;return Object(y.jsx)(O.a,{position:"fixed",children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(p.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:t,children:Object(y.jsx)(m.a,{})}),n&&Object(y.jsx)(x.a,{variant:"h6",noWrap:!0,component:"div",className:v.a.title,children:n})]})})},N=n(302),k=n(306),w=n(300),W=n(307),C=n(308),z=n(303),K=n(309),U=n(208),E=n.n(U),L=n(242),S=n.n(L),A=n(94),B=n(243),D=n.n(B),I=n(244),M=n.n(I),P={agencies:Object(y.jsx)(D.a,{}),dashboard:Object(y.jsx)(M.a,{})},T=n(34),J=function(e){var t=e.open,n=e.onClose,a=e.onLogout,c=e.loading;return Object(y.jsxs)(N.a,{variant:"temporary",anchor:"left",open:t,onClose:n,children:[Object(y.jsx)(O.a,{position:"relative",children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(x.a,{variant:"h6",noWrap:!0,component:"div",className:S.a.title,children:T.a.projectName}),Object(y.jsx)(p.a,{onClick:n,color:"inherit",children:Object(y.jsx)(E.a,{})})]})}),Object(y.jsxs)("div",{className:S.a.menuWrapper,children:[Object(y.jsx)(k.a,{children:A.a.map((function(e){return P[e.name]?Object(y.jsx)(w.a,{onClick:function(){n()},className:S.a.listItem,children:Object(y.jsxs)(j.a,{routeName:e.name,className:S.a.link,children:[Object(y.jsx)(W.a,{children:P[e.name]}),Object(y.jsx)(C.a,{children:e.title})]})},e.name):null}))}),Object(y.jsx)(z.a,{variant:"outlined",className:S.a.logoutButton,onClick:a,children:c?Object(y.jsx)(K.a,{size:25}):"\u0412\u044b\u0439\u0442\u0438"})]})]})},R=n(205),q=n(199),F=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,297))})),Y=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15),n.e(8)]).then(n.bind(null,299))})),G=Object(o.lazy)((function(){return n.e(13).then(n.bind(null,294))})),H=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,246))})),Q=Object(s.a)({agencies:Object(y.jsx)(Y,{}),"agencies.agency":Object(y.jsx)(F,{}),dashboard:Object(y.jsx)(G,{})},l.a.UNKNOWN_ROUTE,Object(y.jsx)(H,{})),V=Object(b.a)((function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(u.a)().title,b=Object(q.a)("user"),O=Object(j.c)(),h=O.route,p=h.name,x=h.params,f=O.router.navigate,m=function(){a(!n)},_=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.logout();case 2:f("login",{redirectName:p,redirectParams:x});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(g,{openDrawer:m,title:s}),Object(y.jsx)(J,{open:n,onClose:m,onLogout:_,loading:b.loading}),Object(y.jsx)(R.a,{children:Object(y.jsx)(o.Suspense,{fallback:Object(y.jsx)(d.a,{}),children:Q[p]||Q[l.a.UNKNOWN_ROUTE]})})]})}));t.default=V}}]);
//# sourceMappingURL=9.5a3643fd.chunk.js.map