(this["webpackJsonpyul-yort-admin"]=this["webpackJsonpyul-yort-admin"]||[]).push([[8],{203:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(279),r=n(193),c=n(204),o=n.n(c),i=n(1),s=function(e){var t=e.phones;return Object(i.jsx)(i.Fragment,{children:t&&t.length?t.map((function(e,t){return Object(i.jsx)(a.a,{className:o.a.phone,href:"tel:".concat(e),underline:"none",variant:"subtitle2",align:"left",children:e},e+t)})):Object(i.jsx)(r.a,{className:o.a.phone,variant:"subtitle2",align:"left",color:"text.secondary",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})})}},204:function(e,t,n){e.exports={phone:"styles_phone__1v3IR"}},205:function(e,t,n){"use strict";var a=n(193),r=n(1);t.a=function(e){var t=e.title,n=void 0===t?"\u041e\u0448\u0438\u0431\u043a\u0430":t,c=e.error;return Object(r.jsxs)("div",{children:[Object(r.jsx)(a.a,{variant:"h6",align:"center",color:"error.main",children:n}),Object(r.jsxs)("div",{children:[Object(r.jsx)(a.a,{align:"center",color:"error.main",children:c.name}),Object(r.jsx)(a.a,{align:"center",color:"error.main",children:c.message})]})]})}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(198),r=n(193),c=n(321),o=n(0),i=n(218),s=n.n(i),l=n(108),d=n.n(l),j=n(1),b=Object(o.forwardRef)((function(e,t){var n=e.text,o=void 0===n?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f?":n,i=e.title,l=e.confirmColor,b=void 0===l?"success":l,u=e.cancelColor,O=void 0===u?"info":u,p=e.cancelText,h=void 0===p?"\u041e\u0442\u043c\u0435\u043d\u0430":p,f=e.confirmText,m=void 0===f?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c":f,x=e.onCancel,v=e.onConfirm,y=e.className;return Object(j.jsxs)(a.a,{elevation:0,className:d()(s.a.contentContentWrapper,y),ref:t,children:[Object(j.jsxs)("div",{children:[i&&Object(j.jsx)(r.a,{variant:"h6",component:"h2",children:i}),o&&Object(j.jsx)(r.a,{children:o})]}),Object(j.jsxs)("div",{className:s.a.actions,children:[Object(j.jsx)(c.a,{variant:"text",color:O,onClick:x,"aria-label":"cancel",children:h}),Object(j.jsx)(c.a,{variant:"text",color:b,onClick:v,"aria-label":"confirm",children:m})]})]})}))},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(30),r=n(316),c=n(198),o=n(193),i=n(196),s=n(219),l=n.n(s),d=n(216),j=n.n(d),b=n(208),u=n(327),O=n(1),p=function(e){var t=e.open,n=e.loading,s=void 0!==n&&n,d=e.onClose,p=e.title,h=e.children,f=e.footer,m=(e.dividers,e.showConfirm),x=void 0!==m&&m,v=e.confirmProps;return Object(O.jsx)(r.a,{open:t,onClose:d,onBackdropClick:d,className:l.a.modalWrapper,disableEnforceFocus:!0,disableAutoFocus:!0,children:Object(O.jsxs)(c.a,{elevation:0,className:l.a.modalContentWrapper,children:[Object(O.jsx)("div",{className:l.a.titleWrapper,children:Object(O.jsxs)(o.a,{variant:"h6",component:"h2",children:[p,Object(O.jsx)(i.a,{"aria-label":"close",className:l.a.closeButton,onClick:d,children:Object(O.jsx)(j.a,{fontSize:"small"})})]})}),Object(O.jsx)("div",{className:l.a.contentWrapper,children:h}),f&&Object(O.jsx)("div",{className:l.a.footerWrapper,children:f}),x&&Object(O.jsx)("div",{className:l.a.confirmWrapper,children:Object(O.jsx)(b.a,Object(a.a)({className:l.a.confirmContainer},v))}),s&&Object(O.jsx)("div",{className:l.a.loadingContainer,children:Object(O.jsx)(u.a,{})})]})})}},210:function(e,t,n){"use strict";var a=n(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(88)),c=n(1),o=(0,r.default)((0,c.jsx)("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"EditRounded");t.default=o},218:function(e,t,n){e.exports={contentContentWrapper:"styles_contentContentWrapper__2TnG0",actions:"styles_actions__3Yb02"}},219:function(e,t,n){e.exports={modalWrapper:"styles_modalWrapper__2U5Mn",modalContentWrapper:"styles_modalContentWrapper__17XcD",titleWrapper:"styles_titleWrapper___HKO9",closeButton:"styles_closeButton__3462u",contentWrapper:"styles_contentWrapper__3VAOS",footerWrapper:"styles_footerWrapper__22I-0",confirmWrapper:"styles_confirmWrapper__9WAko",fadeIn:"styles_fadeIn__1In0u",confirmContainer:"styles_confirmContainer__27vpV",slideIn:"styles_slideIn__3AVKs",loadingContainer:"styles_loadingContainer__YOUhJ"}},220:function(e,t,n){e.exports={row:"styles_row__L8Iho",footerWrapper:"styles_footerWrapper__SBQsW"}},223:function(e,t,n){e.exports={block:"styles_block__16gyU",header:"styles_header__1Qxv4",row:"styles_row__3seDI",detail:"styles_detail__1EVHo"}},224:function(e,t,n){"use strict";var a=n(225),r=n.n(a),c=n(327),o=n(1);t.a=function(){return Object(o.jsx)("div",{className:r.a.wrapper,children:Object(o.jsx)(c.a,{})})}},225:function(e,t,n){e.exports={wrapper:"styles_wrapper__1eULN"}},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(209),r=n(30),c=n(313),o=n(196),i=n(321),s=n(222),l=n.n(s),d=n(221),j=n.n(d),b=n(199),u=n(70),O=n(220),p=n.n(O),h=n(1),f=function(e){var t=e.onSave,n=e.onClose,a=Object(b.d)(),s=a.handleSubmit,d=a.control,O=a.register,f=a.formState,m=f.errors,x=f.isSubmitting,v=f.isDirty,y=Object(b.b)({control:d,name:"phones"}),_=y.fields,g=y.append,C=y.remove;return Object(h.jsxs)("form",{onSubmit:s(t),children:[Object(h.jsx)("div",{className:p.a.row,children:Object(h.jsx)(c.a,Object(r.a)({id:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",size:"small",fullWidth:!0,autoFocus:!0,error:!!Object(u.b)(m,"agencyName"),disabled:x,helperText:Object(u.b)(m,"agencyName")},O("agencyName",{required:!0})))}),_.map((function(e,t){return Object(h.jsxs)("div",{className:p.a.row,children:[Object(h.jsx)(c.a,Object(r.a)({id:"phone",label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",variant:"outlined",size:"small",fullWidth:!0,error:!!Object(u.b)(m,"phones",t),disabled:x,helperText:Object(u.b)(m,"phones",t)},O("phones.".concat(t,".value"),{required:!0}))),Object(h.jsx)(o.a,{disabled:x,"aria-label":"delete phone",color:"error",size:"small",onClick:function(){C(t)},children:Object(h.jsx)(j.a,{fontSize:"small"})})]},e.id)})),Object(h.jsx)("div",{className:p.a.row,children:Object(h.jsx)(i.a,{"aria-label":"add phone",disabled:x,size:"small",variant:"text",startIcon:Object(h.jsx)(l.a,{fontSize:"small"}),onClick:function(){return g({value:""})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d"})}),Object(h.jsx)("div",{className:p.a.row,children:Object(h.jsx)(c.a,Object(r.a)({multiline:!0,rows:3,id:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",variant:"outlined",size:"small",fullWidth:!0,error:!!Object(u.b)(m,"description"),disabled:x,helperText:Object(u.b)(m,"description")},O("description")))}),Object(h.jsxs)("div",{className:p.a.footerWrapper,children:[Object(h.jsx)(i.a,{disabled:x,onClick:n,"aria-label":"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(h.jsx)(i.a,{disabled:x||!v,type:"submit","aria-label":"save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})},m=function(e){var t=e.open,n=e.loading,r=void 0!==n&&n,c=e.onClose,o=e.onSave,i=e.onConformClose,s=e.onCancelClose,l=e.showConfirm,d=e.title;return Object(h.jsx)(a.a,{open:t,loading:r,onClose:c,title:d,showConfirm:l,confirmProps:{onConfirm:i,onCancel:s,confirmText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",confirmColor:"error",cancelColor:"success",text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e, \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0432 \u0434\u0430\u043d\u043d\u044b\u0435?"},children:Object(h.jsx)(f,{onSave:o,onClose:c})})}},258:function(e,t,n){e.exports={wrapper:"styles_wrapper__2M1p2",pageHeader:"styles_pageHeader__2r3Ts",headerTitle:"styles_headerTitle__3AV9W",detail:"styles_detail__mrIum"}},259:function(e,t,n){e.exports={modalWrapper:"styles_modalWrapper__3bils"}},260:function(e,t,n){e.exports={phones:"styles_phones__1ZNps"}},261:function(e,t,n){e.exports={icons:"styles_icons__9rvlj",tableRow:"styles_tableRow__1nitJ"}},262:function(e,t,n){e.exports={row:"styles_row__1M2oQ",footerWrapper:"styles_footerWrapper__1D5JA"}},279:function(e,t,n){"use strict";var a=n(14),r=n(12),c=n(15),o=n(4),i=n(0),s=(n(21),n(16)),l=n(182),d=n(5),j=n(184),b=n(19),u=n(17),O=n(22),p=n(71),h=n(40),f=n(193),m=n(157),x=n(183);function v(e){return Object(m.a)("MuiLink",e)}var y=Object(x.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),_=n(1),g=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=Object(u.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return C[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(j.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),N=i.forwardRef((function(e,t){var n=Object(O.a)({props:e,name:"MuiLink"}),r=n.className,d=n.color,j=void 0===d?"primary":d,u=n.component,f=void 0===u?"a":u,m=n.onBlur,x=n.onFocus,y=n.TypographyClasses,C=n.underline,N=void 0===C?"always":C,S=n.variant,W=void 0===S?"inherit":S,k=Object(c.a)(n,g),D=Object(p.a)(),M=D.isFocusVisibleRef,T=D.onBlur,z=D.onFocus,A=D.ref,I=i.useState(!1),V=Object(a.a)(I,2),F=V[0],E=V[1],L=Object(h.a)(t,A),R=Object(o.a)({},n,{color:j,component:f,focusVisible:F,underline:N,variant:W}),B=function(e){var t=e.classes,n=e.component,a=e.focusVisible,r=e.underline,c={root:["root","underline".concat(Object(b.a)(r)),"button"===n&&"button",a&&"focusVisible"]};return Object(l.a)(c,v,t)}(R);return Object(_.jsx)(w,Object(o.a)({className:Object(s.a)(B.root,r),classes:y,color:j,component:f,onBlur:function(e){T(e),!1===M.current&&E(!1),m&&m(e)},onFocus:function(e){z(e),!0===M.current&&E(!0),x&&x(e)},ref:L,ownerState:R,variant:W},k))}));t.a=N},314:function(e,t,n){"use strict";n.r(t);var a=n(103),r=n(200),c=n(30),o=n(2),i=n.n(o),s=n(9),l=n(14),d=n(0),j=n(199),b=n(198),u=n(193),O=n(321),p=n(41),h=n(258),f=n.n(h),m=n(72);var x=n(316),v=n(259),y=n.n(v),_=n(208),g=n(1),C=["open","onCancel"],w=function(e){var t=e.open,n=e.onCancel,a=function(e,t){if(null==e)return{};var n,a,r=Object(m.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,C);return Object(g.jsx)(x.a,{open:t,onClose:n,onBackdropClick:n,className:y.a.modalWrapper,disableEnforceFocus:!0,disableAutoFocus:!0,children:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(_.a,Object(c.a)(Object(c.a)({},a),{},{onCancel:n}))})})},N=n(226),S=n(196),W=n(210),k=n.n(W),D=n(203),M=n(260),T=n.n(M),z=n(223),A=n.n(z),I=function(e){var t=e.handleEdit,n=e.agencyName,a=e.createDate,r=e.editedDate,c=e.phones,o=e.description;return Object(g.jsxs)(b.a,{className:A.a.block,variant:"outlined",children:[Object(g.jsxs)("div",{className:A.a.header,children:[Object(g.jsx)(u.a,{variant:"h6",children:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(g.jsx)(S.a,{"aria-label":"edit",onClick:t,children:Object(g.jsx)(k.a,{fontSize:"small"})})]}),Object(g.jsxs)("div",{className:A.a.row,children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),Object(g.jsx)(u.a,{variant:"body2",children:n})]}),Object(g.jsxs)("div",{className:A.a.row,children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f:"}),Object(g.jsx)(u.a,{variant:"body2",children:a})]}),r&&Object(g.jsxs)("div",{className:A.a.row,children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0432\u043e\u0430\u043d\u0438\u044f:"}),Object(g.jsx)(u.a,{variant:"body2",children:r})]}),Object(g.jsxs)("div",{className:A.a.row,children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u044b:"}),Object(g.jsx)("div",{className:T.a.phones,children:Object(g.jsx)(D.a,{phones:c})})]}),o&&Object(g.jsxs)("div",{className:A.a.row,children:[Object(g.jsx)(u.a,{variant:"subtitle2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),Object(g.jsx)(u.a,{component:"pre",variant:"body2",children:o})]})]})},V=n(328),F=n(329),E=n(330),L=n(331),R=n(332),B=n(333),P=n(221),H=n.n(P),q=n(261),J=n.n(q),U=n(70),Q=function(e){var t=e.handleEditOrder,n=e.agencyOrders,a=e.handleDeleteOrder;return Object(g.jsx)(V.a,{children:Object(g.jsxs)(F.a,{size:"small",children:[Object(g.jsx)(E.a,{children:Object(g.jsxs)(L.a,{children:[Object(g.jsx)(R.a,{children:"\u041e\u0422\u041a\u0423\u0414\u0410"}),Object(g.jsx)(R.a,{children:"\u041a\u0423\u0414\u0410"}),Object(g.jsx)(R.a,{children:"\u0426\u0415\u041d\u0410"}),Object(g.jsx)(R.a,{})]})}),Object(g.jsx)(B.a,{onClick:function(e){var n=e.target.closest("[data-edit-id]"),r=e.target.closest("[data-delete-id]");n&&t(n.dataset.editId),r&&a(r.dataset.deleteId)},children:n.map((function(e){var t=e.id,n=e.route,a=e.price,r=e.currencyISO;return Object(g.jsxs)(L.a,{className:J.a.tableRow,children:[Object(g.jsx)(R.a,{children:n.origin.name}),Object(g.jsx)(R.a,{children:n.destination.name}),Object(g.jsxs)(R.a,{children:[a," ",Object(U.a)(r)]}),Object(g.jsx)(R.a,{children:Object(g.jsxs)("div",{className:J.a.icons,children:[Object(g.jsx)(S.a,{"aria-label":"edit order","data-edit-id":t,children:Object(g.jsx)(k.a,{fontSize:"small"})}),Object(g.jsx)(S.a,{"aria-label":"delete order","data-delete-id":t,color:"error",children:Object(g.jsx)(H.a,{fontSize:"small"})})]})})]},t)}))})]})})},K=n(230),Y=n.n(K),G=function(e){var t=e.handleCreateOrder;return Object(g.jsxs)("div",{className:A.a.header,children:[Object(g.jsx)(u.a,{variant:"h6",children:"\u041f\u043e\u0435\u0437\u0434\u043a\u0438"}),Object(g.jsx)(S.a,{onClick:t,"aria-label":"add order",children:Object(g.jsx)(Y.a,{})})]})},X=n(209),Z=n(313),$=n(31),ee=n(262),te=n.n(ee),ne=function(e){var t=e.onSave,n=e.onClose,a=Object(j.d)(),r=a.handleSubmit,o=a.register,i=a.formState,s=i.errors,l=i.isSubmitting,d=i.isDirty;return Object(g.jsxs)("form",{onSubmit:r(t),children:[Object(g.jsx)("div",{className:te.a.row,children:Object(g.jsx)(Z.a,Object(c.a)({id:"origin",label:"\u041e\u0442\u043a\u0443\u0434\u0430",placeholder:"\u041e\u0442\u043a\u0443\u0434\u0430",variant:"outlined",size:"small",fullWidth:!0,autoFocus:!0,error:!!Object(U.b)(s,"origin"),disabled:l,helperText:Object(U.b)(s,"origin")},o("origin",{required:!0})))}),Object(g.jsx)("div",{className:te.a.row,children:Object(g.jsx)(Z.a,Object(c.a)({id:"destination",label:"\u041a\u0443\u0434\u0430",placeholder:"\u041a\u0443\u0434\u0430",variant:"outlined",size:"small",fullWidth:!0,error:!!Object(U.b)(s,"destination"),disabled:l,helperText:Object(U.b)(s,"destination")},o("destination",{required:!0})))}),Object(g.jsx)("div",{className:te.a.row,children:Object(g.jsx)(Z.a,Object(c.a)({id:"price",label:"\u0426\u0435\u043d\u0430",placeholder:"\u0426\u0435\u043d\u0430",variant:"outlined",size:"small",fullWidth:!0,error:!!Object(U.b)(s,"price"),disabled:l,helperText:Object(U.b)(s,"price")},o("price",{required:!0,pattern:{value:$.a.numberPattern,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432"}})))}),Object(g.jsxs)("div",{className:te.a.footerWrapper,children:[Object(g.jsx)(O.a,{disabled:l,onClick:n,"aria-label":"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(g.jsx)(O.a,{disabled:l||!d,type:"submit","aria-label":"save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})},ae=function(e){var t=e.showModal,n=e.showConfirm,a=e.onClose,r=e.onSave,c=e.onConformClose,o=e.onCancelClose,i=e.titleModal;return Object(g.jsx)(X.a,{open:t,onClose:a,title:i,showConfirm:n,confirmProps:{onConfirm:c,onCancel:o,confirmText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",confirmColor:"error",cancelColor:"success",text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e, \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0432 \u0434\u0430\u043d\u043d\u044b\u0435?"},children:Object(g.jsx)(ne,{onSave:r,onClose:a})})},re=function(e){var t=e.showModal,n=e.handleCloseModal,a=e.titleModal,r=e.methods,o=e.orderID,b=Object(d.useState)(!1),u=Object(l.a)(b,2),O=u[0],p=u[1],h=r.formState,f=r.formState,m=f.isSubmitSuccessful,x=f.isDirty,v=r.reset,y=r.getValues;Object(d.useEffect)((function(){m&&v(y())}),[h,y,m,v]);var _=function(){p(!1),n(),v()},C=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o?console.log("edit",t):console.log("create"),v(),n();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{children:Object(g.jsx)(ae,{titleModal:a,showModal:t,onClose:function(){x?p(!0):_()},onSave:C,showConfirm:O,onConformClose:_,onCancelClose:function(){p(!1)}})}))},ce=function(e){var t=e.agencyOrders,n=Object(d.useState)(!1),a=Object(l.a)(n,2),r=a[0],c=a[1],o=Object(d.useState)(""),i=Object(l.a)(o,2),s=i[0],u=i[1],O=Object(d.useState)(null),p=Object(l.a)(O,2),h=p[0],f=p[1],m=Object(d.useState)(""),x=Object(l.a)(m,2),v=x[0],y=x[1],_=Object(j.c)({}),C=_.setValue;Object(d.useEffect)((function(){h&&(C("origin",h.origin),C("destination",h.destination),C("price",h.price))}),[h,C]);var w=function(e){var n=t.find((function(t){return t.id===e}));n&&(y(n.id),f({origin:n.route.origin.name,destination:n.route.destination.name,price:n.price}))};return Object(g.jsxs)(b.a,{className:A.a.block,variant:"outlined",children:[Object(g.jsx)(G,{handleCreateOrder:function(){c(!0),f(null),u("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043f\u043e\u0435\u0437\u0434\u043a\u0443"),y("")}}),Object(g.jsx)(Q,{handleEditOrder:function(e){c(!0),w(e),u("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0435\u0437\u0434\u043a\u0443")},agencyOrders:t,handleDeleteOrder:function(e){console.log(e)}}),Object(g.jsx)(re,{orderID:v,methods:_,titleModal:s,showModal:r,handleCloseModal:function(){c(!1)}})]})},oe=n(62),ie=n(228),se=function(e){var t=e.agency,n=t.id,a=t.agencyName,r=t.phones,o=void 0===r?[]:r,h=t.createDate,m=t.description,x=t.editedDate,v=e.agencyOrders,y=e.editAgency,_=e.deleteAgency,C=e.editLoading,S=Object(p.e)().navigate,W=Object(d.useState)(!1),k=Object(l.a)(W,2),D=k[0],M=k[1],T=Object(d.useState)(!1),z=Object(l.a)(T,2),A=z[0],V=z[1],F=Object(d.useState)(!1),E=Object(l.a)(F,2),L=E[0],R=E[1],B=Object(ie.a)().setTitle,P=Object(j.c)({defaultValues:{id:n,agencyName:a,description:m,phones:Object(oe.a)(o)}}),H=P.formState,q=P.formState,J=q.isSubmitSuccessful,U=q.isDirty,Q=P.reset,K=P.getValues;Object(d.useEffect)((function(){J&&Q(K())}),[H,K,J,Q]);var Y=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!1),e.next=3,_({id:n});case 3:S("agencies");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){R(!1),V(!1),Q()},X=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(Object(c.a)({},t));case 2:B(t.agencyName),V(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(b.a,{className:f.a.wrapper,children:[Object(g.jsxs)("div",{className:f.a.pageHeader,children:[Object(g.jsx)(u.a,{variant:"h6",className:f.a.headerTitle,children:a}),Object(g.jsx)(O.a,{variant:"outlined",color:"error",onClick:function(){M(!0)},"aria-label":"delete",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]}),Object(g.jsxs)("div",{className:f.a.detail,children:[Object(g.jsx)(I,{handleEdit:function(){V(!0)},agencyName:a,createDate:h,editedDate:x,phones:o,description:m}),Object(g.jsx)(ce,{agencyOrders:v})]})]}),Object(g.jsx)(w,{open:D,onCancel:function(){M(!1)},onConfirm:Y,title:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u0430."}),Object(g.jsx)(j.a,Object(c.a)(Object(c.a)({},P),{},{children:Object(g.jsx)(N.a,{open:A,loading:C,onClose:function(){C||(U?R(!0):G())},onSave:X,onConformClose:G,onCancelClose:function(){R(!1)},showConfirm:L,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0433\u0435\u043d\u0441\u0442\u0432\u043e"})}))]})},le=n(205),de=n(224),je=Object(a.a)((function(){var e=Object(r.a)("agency");return Object(g.jsxs)("div",{children:[e.loading&&Object(g.jsx)(de.a,{}),e.error&&!e.loading&&Object(g.jsx)(le.a,{title:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431 \u0430\u0433\u0435\u043d\u0441\u0442\u0432\u0435",error:e.error}),!e.loading&&!e.error&&e.agency&&e.agencyOrders&&Object(g.jsx)(se,{agency:e.agency,editAgency:e.editAgency,deleteAgency:e.deleteAgency,editLoading:e.editLoading,agencyOrders:e.agencyOrders})]})}));t.default=je}}]);
//# sourceMappingURL=8.642ca3bc.chunk.js.map