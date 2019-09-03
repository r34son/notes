(window.webpackJsonpnotes=window.webpackJsonpnotes||[]).push([[0],{26:function(e,t,n){e.exports=n(44)},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(5),i=n(9),s=n(12),u=n(2),m=function(e){return{type:"LOGIN_FAILURE",error:e}},f=(n(35),Object(l.b)(function(e){return{email:e.auth.email,loggedIn:e.auth.loggedIn,token:e.auth.token,error:e.auth.loginError}},function(e){return{onLogin:function(t,n){return e(function(e,t){return function(n){return fetch("http://localhost:5000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return e.ok?e:Promise.reject(e)}).then(function(t){return t.json().then(function(t){return n(function(e,t){return{type:"LOGIN_SUCCESS",token:e,email:t}}(t.token,e))})}).catch(function(e){return e.json().then(function(e){return n(m(e))})})}}(t,n))},onError:function(t){return e(m(t))}}})(function(e){var t=e.loggedIn,n=(e.token,e.error),o=e.email,c=e.onLogin,l=e.onError,m=Object(a.useState)(o||""),f=Object(u.a)(m,2),d=f[0],h=f[1],E=Object(a.useState)(""),p=Object(u.a)(E,2),g=p[0],b=p[1];return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},"Log in"),r.a.createElement("form",{className:"form",onSubmit:function(e){return e.preventDefault(),d?g?void c(d,g):l("You must enter password"):l("You must specify email")}},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"form-label",htmlFor:"email"},r.a.createElement("i",{className:"fas fa-envelope-square"})),r.a.createElement("input",{className:"form-input",type:"email",name:"email",id:"email",placeholder:"Email",value:d,onChange:function(e){return h(e.target.value)}})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"form-label",htmlFor:"password"},r.a.createElement("i",{className:"fas fa-lock"})),r.a.createElement("input",{className:"form-input",type:"password",name:"password",id:"password",placeholder:"Password",value:g,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"error-msg"},n),r.a.createElement("button",{className:"btn-submit",type:"submit"},"Log In")),r.a.createElement("p",{className:"text"},"Haven't account yet?"),r.a.createElement(i.b,{className:"link",to:"/signup"},"Sign Up"))})),d=function(e){return function(t){return t({type:"FETCHING"}),fetch("http://localhost:5000/api/notes",{method:"GET",headers:{auth:e}}).then(function(e){return e.ok?e:Promise.reject(e)}).then(function(e){return e.json().then(function(e){return t({type:"FETCH_SUCCESS",notes:e})})}).catch(function(e){return e.json().then(function(e){return t({type:"FETCH_FAILURE",error:e})})})}},h=n(13),E=(n(37),function(e){var t=e._id,n=e.title,o=e.text,c=e.deleteNote,l=e.token,i=Object(a.useState)(n),s=Object(u.a)(i,2),m=s[0],f=s[1],d=Object(a.useState)(o),E=Object(u.a)(d,2),p=E[0],g=E[1],b=Object(a.useState)(!1),N=Object(u.a)(b,2),O=N[0],v=N[1],j=Object(a.useState)(!1),y=Object(u.a)(j,2),S=y[0],w=y[1],C=Object(a.useRef)(null);Object(a.useEffect)(function(){C.current.style.height="auto",C.current.style.height="".concat(C.current.scrollHeight+15,"px")},[p]);var k=function(e,n){fetch("http://localhost:5000/api/notes/".concat(e,"/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",auth:l},body:JSON.stringify(Object(h.a)({},e,n))}).then(function(e){return e.ok?e:Promise.reject(e)}).then(function(e){return e.json().then(function(e){return console.log(e)})}).catch(function(e){return e.json().then(function(e){return console.log(e)})})};return r.a.createElement("div",{className:"note"},r.a.createElement("div",{className:"note-title-container"},r.a.createElement("textarea",{id:"title",readOnly:!O,maxLength:"20",placeholder:"Note title",value:m,onChange:function(e){return f(e.target.value)}}),r.a.createElement("label",{className:"title-edit",htmlFor:"title",onClick:function(){return v(!O)}},O?r.a.createElement("i",{className:"far fa-save",onClick:function(e){return k("title",m)}}):r.a.createElement("i",{className:"fas fa-pencil-alt"}))),r.a.createElement("div",{className:"note-text-container"},r.a.createElement("textarea",{id:"text",readOnly:!S,placeholder:"Note text",value:p,ref:C,onChange:function(e){g(e.target.value)}}),r.a.createElement("label",{className:"text-edit",htmlFor:"text",onClick:function(){return w(!S)}},S?r.a.createElement("i",{className:"far fa-save",onClick:function(e){return k("text",p)}}):r.a.createElement("i",{className:"fas fa-pencil-alt"}))),r.a.createElement("div",{className:"delete",onClick:c},r.a.createElement("i",{className:"far fa-trash-alt"})))}),p=(n(38),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),g=(n(39),Object(l.b)(function(e){return{token:e.auth.token,error:e.data.addError}},function(e){return{onAdd:function(t,n,a){return e(function(e,t,n){return function(a){return fetch("http://localhost:5000/api/notes",{method:"POST",headers:{"Content-Type":"application/json",auth:e},body:JSON.stringify({title:t,text:n})}).then(function(e){return e.ok?e:Promise.reject(e)}).then(function(t){return t.json().then(function(e){console.log("added:",e),a({type:"ADD_SUCCESS"})}).then(function(){return a(d(e))})}).catch(function(e){return e.json().then(function(e){var t;console.log(e),a({type:"ADD_FAILURE",error:t})})})}}(t,n,a))}}})(function(e){e.error;var t=e.token,n=e.onAdd,o=(e.fetchNotes,Object(a.useState)(!1)),c=Object(u.a)(o,2),l=c[0],i=c[1],s=Object(a.useState)(),m=Object(u.a)(s,2),f=m[0],d=m[1],h=Object(a.useState)(),E=Object(u.a)(h,2),p=E[0],g=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"add-note",onClick:function(){return i(!0)}},r.a.createElement("i",{className:"fas fa-plus"})),l&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"new-note"},r.a.createElement("div",{className:"close",onClick:function(){return i(!1)}},r.a.createElement("i",{class:"far fa-times-circle"})),r.a.createElement("form",{className:"new-note-form",onSubmit:function(e){e.preventDefault(),n(t,f,p),i(!1),g(""),d("")}},r.a.createElement("label",{className:"label",htmlFor:"newtitle"},"Note title"),r.a.createElement("textarea",{id:"newtitle",maxLength:"20",placeholder:"title",value:f,required:!0,onChange:function(e){return d(e.target.value)}}),r.a.createElement("hr",null),r.a.createElement("label",{className:"label",htmlFor:"newtext"},"Note text"),r.a.createElement("textarea",{id:"newtext",placeholder:"text",value:p,required:!0,onChange:function(e){return g(e.target.value)},onKeyDown:function(e){e.target.style.cssText="height:auto;",e.target.style.height=e.target.scrollHeight+"px"}}),r.a.createElement("button",{type:"submit",className:"new-note-btn"},r.a.createElement("i",{className:"fas fa-plus"}))))))})),b=(n(40),Object(l.b)(function(e){return{isFetching:e.data.isFetching,notes:e.data.notes,token:e.auth.token}},function(e){return{fetchNotes:function(t){return e(d(t))},deleteNote:function(t,n){e(function(e,t){return function(n){return fetch("http://localhost:5000/api/notes/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",auth:e}}).then(function(e){return e.ok?e:Promise.reject(e)}).then(function(t){return t.json().then(function(e){console.log("deleted:",e),n({type:"DELETE_SUCCESS"})}).then(function(){return n(d(e))})}).catch(function(e){return e.json().then(function(e){var t;console.log(e),n({type:"DELETE_FAILURE",error:t})})})}}(t,n)),e(d(t))}}})(function(e){var t=e.notes,n=e.isFetching,o=e.token,c=e.fetchNotes,l=e.deleteNote;return Object(a.useEffect)(function(){c(o)},[c,o]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(p,null):0===t.length?r.a.createElement("div",null,"no notes"):r.a.createElement("div",{className:"notes"},t.map(function(e){return r.a.createElement(E,Object.assign({key:e._id},e,{token:o,deleteNote:function(){return l(o,e._id)}}))})),r.a.createElement(g,null))})),N=(n(41),Object(l.b)(function(e){return{email:e.auth.email,logged:e.auth.loggedIn}},function(e){return{logOut:function(){return e({type:"LOG_OUT"})}}})(function(e){var t=e.email,n=e.logged,a=e.logOut;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},"Notes"),n&&r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"border email"},t),r.a.createElement("div",{className:"logout",onClick:a},r.a.createElement("i",{className:"fas fa-sign-out-alt"})))),n?r.a.createElement(b,null):r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"signup card"},r.a.createElement("h1",{className:"text-opacity"},"Sign Up"),r.a.createElement("p",{className:"text"},"Create account and use our perfect service! You will never forget anything with this notes!"),r.a.createElement(i.b,{className:"link border border-blue",to:"/signup"},"Sign Up")),r.a.createElement("span",{className:"divider"},"or"),r.a.createElement("div",{className:"login card"},r.a.createElement("h1",{className:"text-opacity"},"Log In"),r.a.createElement("p",{className:"text"},"Use notes every day and your life will be much easier!"),r.a.createElement(i.b,{className:"link border border-red",to:"/login"},"Log In"))))})),O=(n(42),Object(l.b)(function(e){return{error:e.auth.signUpError,registered:e.auth.registered}},function(e){return{onSignUp:function(t,n){return e(function(e,t){return function(n){return fetch("http://localhost:5000/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return e.ok?e:Promise.reject(e)}).then(function(t){return t.json().then(function(t){return n(function(e){return{type:"SIGNUP_SUCCESS",email:e}}(e))})}).catch(function(e){return e.json().then(function(e){return n({type:"SIGNUP_FAILURE",error:e})})})}}(t,n))}}})(function(e){var t=e.error,n=e.registered,o=e.onSignUp,c=Object(a.useState)(""),l=Object(u.a)(c,2),m=l[0],f=l[1],d=Object(a.useState)(""),h=Object(u.a)(d,2),E=h[0],p=h[1];return n?r.a.createElement(s.a,{to:"/login"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},"Sign Up"),r.a.createElement("h4",{className:"subheader text-opacity"},"Create new account!"),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),o(m,E)}},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"form-label",htmlFor:"email"},r.a.createElement("i",{className:"fas fa-envelope-square"})),r.a.createElement("input",{className:"form-input",type:"email",name:"email",id:"email",placeholder:"Email",onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{className:"form-label",htmlFor:"password"},r.a.createElement("i",{className:"fas fa-lock"})),r.a.createElement("input",{className:"form-input",type:"password",name:"password",id:"password",placeholder:"Password",onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"error-msg"},t),r.a.createElement("button",{className:"btn-submit",type:"submit"},"Sign Up")),r.a.createElement("p",{className:"text-opacity"},"Already have account?"),r.a.createElement(i.b,{className:"link",to:"/login"},"Log In"))}));n(43);var v=function(){return r.a.createElement(i.a,null,r.a.createElement(s.b,{exact:!0,path:"/",component:N}),r.a.createElement(s.b,{path:"/signup",component:O}),r.a.createElement(s.b,{path:"/login",component:f}))},j=n(11);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={loggedIn:!1,registered:!1};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I={isFetching:!1,fetchError:null,notes:[]},U=Object(j.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILURE":return S({},e,{loggedIn:!1,loginError:t.error});case"LOGIN_SUCCESS":return S({},e,{loggedIn:!0,token:t.token,error:null,email:t.email});case"SIGNUP_FAILURE":return S({},e,{signUpError:t.error});case"SIGNUP_SUCCESS":return S({},e,{registered:!0,loggedIn:!1,email:t.email});case"LOG_OUT":return S({},e,{loggedIn:!1,email:null,token:null});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING":return k({},e,{isFetching:!0});case"FETCH_SUCCESS":return k({},e,{isFetching:!1,notes:t.notes});case"FETCH_FAILURE":return k({},e,{isFetching:!1,fetchError:t.error});case"ADD_FAILURE":return k({},e,{addError:t.error});case"DELETE_FAILURE":return k({},e,{deleteError:t.error});default:return e}}}),F=n(25),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,x=Object(j.e)(U,P(Object(j.a)(F.a)));c.a.render(r.a.createElement(l.a,{store:x},r.a.createElement(v,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cd689c47.chunk.js.map