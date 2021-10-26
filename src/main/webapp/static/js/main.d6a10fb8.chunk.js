(this["webpackJsonpdoordash-app"]=this["webpackJsonpdoordash-app"]||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(23),r=n.n(s),i=(n(152),n(36)),o=n(239),l=n(236),u=(n(153),n(85)),j=n(134),d=n(106),h=n(104),b=n(143),f=n(234),m=n(238),p=n(57),O=n(241),g=n(242),x=function(e){var t="/login?username=".concat(e.username,"&password=").concat(e.password);return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to log in")}))},y=function(e){return fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to sign up")}))},v=n(7),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loading:!1},e.onFinish=function(t){e.setState({loading:!0}),x(t).then((function(){b.b.success("Login Successful"),e.props.onSuccess()})).catch((function(e){b.b.error(e.message)})).finally((function(){e.setState({loading:!1})}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(f.a,{name:"normal_login",className:"login-form",style:{width:300,margin:"auto"},onFinish:this.onFinish,children:[Object(v.jsx)(f.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(v.jsx)(m.a,{prefix:Object(v.jsx)(O.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(v.jsx)(f.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(v.jsx)(m.a,{prefix:Object(v.jsx)(g.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(v.jsx)(f.a.Item,{children:Object(v.jsx)(p.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.state.loading,children:"Log in"})})]})}}]),n}(a.Component),w=S,C=n(76),F=n(70),I=n(235),P=n(233),k=n(147),T=C.a.Option,E=function(e){var t=e.itemId,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(v.jsx)(F.a,{title:"Add to shopping cart",children:Object(v.jsx)(p.a,{icon:Object(v.jsx)(k.a,{}),type:"primary",loading:s,onlick:function(){r(!0),function(e){return fetch("/order/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to add menu item to shopping cart")}))}(t).then((function(){return b.b.success("Successfully add item")})).catch((function(e){return b.b.error(e.message)})).finally((function(){r(!1)}))}})})};var L=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(a.useState)(!1),d=Object(i.a)(j,2),h=d[0],f=d[1],m=Object(a.useState)([]),p=Object(i.a)(m,2),O=p[0],g=p[1];return Object(a.useEffect)((function(){f(!0),fetch("/restaurants").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get restaurants");return e.json()})).then((function(e){console.log("res data ->",e),u(e)})).catch((function(e){console.log("err ->",e.message)})).finally((function(){f(!1)}))}),[]),Object(a.useEffect)((function(){var e;c&&(f(!0),(e=c,fetch("/restaurant/".concat(e,"/menu")).then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get menus");return e.json()}))).then((function(e){g(e)})).catch((function(e){b.b.error(e.message)})).finally((function(){f(!1)})))}),[c]),Object(v.jsxs)("div",{children:[Object(v.jsx)(C.a,{value:c,style:{width:300},onSelect:function(e){return s(e)},placeholder:"Select a restaurant",loading:h,children:l.map((function(e){return Object(v.jsx)(T,{value:e.id,children:e.name},e.id)}))}),c&&Object(v.jsx)(I.b,{dataSource:O,style:{marginTop:20},loading:h,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3},renderItem:function(e){return Object(v.jsx)(I.b.Item,{children:Object(v.jsxs)(P.a,{title:e.name,extra:Object(v.jsx)(E,{itemId:e.id}),children:[Object(v.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:"auto",width:"100%",display:"block"}}),"Price: ",e.price]})})}})]})},M=n(240),N=l.a.Text;var q=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(a.useState)({totalPrice:0,orderItemList:[]}),d=Object(i.a)(j,2),h=d[0],f=d[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),g=O[0],x=O[1];return Object(a.useEffect)((function(){c&&(u(!0),fetch("/cart").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to get shopping cart data");return e.json()})).then((function(e){f(e)})).catch((function(e){b.b.error(e.message)})).finally((function(){u(!1)})))}),[c]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{type:"primary",onClick:function(){s(!0)},shape:"round",children:"Cart"}),Object(v.jsx)(M.a,{title:"My shopping Cart",placement:"right",onClose:function(){s(!1)},visible:c,footer:Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsx)(N,{children:"Total price: ".concat(h?h.totalPrice.toFixed(2):0)}),Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{children:"Cancel"}),Object(v.jsx)(p.a,{onClick:function(){x(!0),fetch("/checkout").then((function(e){if(e.status<200||e.status>=300)throw Error("Fail to checkout")})).then((function(){b.b.success("Successfully checkout"),s(!1)})).catch((function(e){b.b.error(e.message)})).finally((function(){x(!1)}))},type:"primary",loading:g,disabled:l||0===(null===h||void 0===h?void 0:h.orderItemList.length),children:"Checkout"})]})]}),children:Object(v.jsx)(I.b,{dataSource:h.orderItemList,loading:l,renderItem:function(e){return Object(v.jsx)(I.b.Item,{children:Object(v.jsx)(I.b.Item.Meta,{title:e.menuItem.name,description:"$".concat(e.price)})})}})})]})},A=n(237),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){y(t).then((function(){e.setState({displayModal:!1}),b.b.success("Successfully signed up")})).catch((function(e){b.b.error(e.message)}))},e.render=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(v.jsx)(A.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(v.jsxs)(f.a,{name:"normal_register",onFinish:e.onFinish,preserve:!1,children:[Object(v.jsx)(f.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(v.jsx)(m.a,{prefix:Object(v.jsx)(O.a,{}),placeholder:"Email"})}),Object(v.jsx)(f.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(v.jsx)(m.a,{prefix:Object(v.jsx)(g.a,{}),placeholder:"Password"})}),Object(v.jsx)(f.a.Item,{name:"firstName",rules:[{required:!0,message:"Please input your first name!"}],children:Object(v.jsx)(m.a,{placeholder:"firstname"})}),Object(v.jsx)(f.a.Item,{name:"lastName",rules:[{required:!0,message:"Please input your last name!"}],children:Object(v.jsx)(m.a,{placeholder:"lastname"})}),Object(v.jsx)(f.a.Item,{children:Object(v.jsx)(p.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(a.Component),H=B,J=o.a.Header,R=o.a.Content,U=l.a.Title;var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)(o.a,{style:{height:"100vh"},children:[Object(v.jsx)(J,{children:Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)(U,{level:2,style:{color:"white",lineHeight:"inherit",marginBottom:0},children:"Lai Food"}),Object(v.jsx)("div",{children:n?Object(v.jsx)(q,{}):Object(v.jsx)(H,{})})]})}),Object(v.jsx)(R,{style:{padding:"50px",maxHeight:"calc(100% - 64px)",overflowY:"auto"},children:n?Object(v.jsx)(L,{}):Object(v.jsx)(w,{onSuccess:function(){return c(!0)}})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),D()}},[[231,1,2]]]);
//# sourceMappingURL=main.d6a10fb8.chunk.js.map