(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){},36:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(21),o=a.n(r),l=(a(29),a(2)),i=a(4),j=(a(36),function(e){var t=e.logout;return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-primary ",children:[Object(n.jsx)(i.a,{className:"btn",to:"/dashboard",children:"Apartment Connect"}),Object(n.jsx)("div",{className:"",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.a,{className:"btn",to:"/calendar",children:"Resources Calendar"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.a,{className:"btn",to:"/connect",children:"Claim your Apartment"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.a,{className:"btn",to:"/newrepair",children:"Request Repair"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.a,{className:"btn",to:"/repairlist",children:"Repair List"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("button",{className:"btn btn-outline-danger",onClick:t,children:"Logout"})})]})})]})}),d=a(3),b=a.n(d),u=function(e){var t=e.setLoggedIn,a=Object(c.useState)(""),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(c.useState)(""),d=Object(l.a)(j,2),u=d[0],m=d[1],h=Object(c.useState)(""),O=Object(l.a)(h,2),p=O[0],g=O[1];return Object(n.jsxs)("fieldset",{children:[Object(n.jsx)("legend",{children:"Sign In"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("http://localhost:8000/api/login",{email:r,password:u},{withCredentials:!0}).then((function(e){console.log("sign in response: ",e),localStorage.setItem("loggedIn","true"),t(),Object(i.c)("/dashboard")})).catch((function(e){console.log(e),g(e.response.data.msg)}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"text",name:"email",onChange:function(e){return o(e.target.value)},value:r})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",name:"password",onChange:function(e){return m(e.target.value)},value:u})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"submit",value:"Sign In",className:"btn btn-primary"}),Object(n.jsx)("p",{className:"error-message",children:p||""})]})]})]})},m=function(e){e.setLoggedIn;var t,a,s,r,o,i=Object(c.useState)(""),j=Object(l.a)(i,2),d=j[0],u=j[1],m=Object(c.useState)(""),h=Object(l.a)(m,2),O=h[0],p=h[1],g=Object(c.useState)(""),f=Object(l.a)(g,2),x=f[0],v=f[1],N=Object(c.useState)(""),w=Object(l.a)(N,2),S=w[0],C=w[1],y=Object(c.useState)(""),I=Object(l.a)(y,2),k=I[0],R=I[1],F=Object(c.useState)(!1),A=Object(l.a)(F,2),L=A[0],_=A[1],P=Object(c.useState)(null),B=Object(l.a)(P,2),E=B[0],U=B[1];return Object(n.jsxs)("fieldset",{children:[Object(n.jsx)("legend",{children:"Sign Up"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={firstName:d,lastName:O,email:x,password:S,confirmPassword:k,maintenance:L};b.a.post("http://localhost:8000/api/users/new",t,{withCredentials:!0}).then((function(e){console.log(e),u(""),p(""),v(""),C(""),R(""),_("")})).catch((function(e){console.log(e),U(e.response.data.errors)}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(n.jsx)("input",{type:"text",name:"firstName",onChange:function(e){return u(e.target.value)},value:d}),(null===E||void 0===E?void 0:E.firstName)&&Object(n.jsx)("span",{className:"error-message",children:null===(t=E.firstName)||void 0===t?void 0:t.message})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(n.jsx)("input",{type:"text",name:"lastName",onChange:function(e){return p(e.target.value)},value:O}),(null===E||void 0===E?void 0:E.lastName)&&Object(n.jsx)("span",{className:"error-message",children:null===(a=E.lastName)||void 0===a?void 0:a.message})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"text",name:"email",onChange:function(e){return v(e.target.value)},value:x}),(null===E||void 0===E?void 0:E.email)&&Object(n.jsx)("span",{className:"error-message",children:null===(s=E.email)||void 0===s?void 0:s.message})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",name:"password",onChange:function(e){return C(e.target.value)},value:S}),(null===E||void 0===E?void 0:E.password)&&Object(n.jsx)("span",{className:"error-message",children:null===(r=E.password)||void 0===r?void 0:r.message})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password:"}),Object(n.jsx)("input",{type:"password",name:"confirmPassword",onChange:function(e){return R(e.target.value)},value:k}),(null===E||void 0===E?void 0:E.confirmPassword)&&Object(n.jsx)("span",{className:"error-message",children:null===(o=E.confirmPassword)||void 0===o?void 0:o.message})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"maintenance",children:"Maintenance?"}),Object(n.jsxs)("select",{name:"maintenance",onChange:function(e){return _(e.target.value)},value:L,children:[Object(n.jsx)("option",{value:!0,children:"Yes"}),Object(n.jsx)("option",{value:!1,children:"No"})]})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:"Sign Up",className:"btn btn-success"})})]})]})},h=function(e){var t=e.setLoggedIn;return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(u,{setLoggedIn:t})}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(m,{setLoggedIn:t})})]})})},O=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],r=a[1],o=function(){b.a.get("http://localhost:8000/api/users/loggedin",{withCredentials:!0}).then((function(e){return console.log(e)})).catch(console.log)};return Object(c.useEffect)((function(){b.a.get("http://localhost:8000/api/users",{withCredentials:!0}).then((function(e){r(e.data),console.log(e)})).catch((function(e){console.log("not authorized"),console.log(e.response),Object(i.c)("/")}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"All Users:"}),Object(n.jsx)("button",{onClick:function(){return o},children:"Get Logged In User"}),Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Created On"})]}),s.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.firstName}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.createdAt})]},e._id)}))]})})]})},p=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)({firstName:"",lastName:"",email:""}),j=Object(l.a)(o,2),d=j[0],u=j[1],m=Object(c.useState)({_id:""}),h=Object(l.a)(m,2),O=h[0],p=h[1];Object(c.useEffect)((function(){b.a.get("http://localhost:8000/api/apartments").then((function(e){var t=e.data.filter((function(e){return""===e.tenants}));r(t),console.log(e.data._id)})).catch((function(e){return console.log(e)})),b.a.get("http://localhost:8000/api/users/loggedin",{withCredentials:!0}).then((function(e){var t=e.data;u(t),console.log(t)})).catch((function(e){return console.log(e)}))}),[]);return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target.apartments),b.a.patch("http://localhost:8000/api/apartments/".concat(O._id,"/tenants/new"),{tenants:d._id}).then((function(e){"success"===e.data.message||console.log(e.data)})).catch((function(e){return console.log(e)})),Object(i.c)("/calendar")},children:[Object(n.jsx)("legend",{className:"offset-1",children:"Claim your apartment for ability to request repairs and reserve common areas"}),Object(n.jsxs)("div",{className:"row form-group offset-3",children:[Object(n.jsx)("label",{htmlFor:"apartments",children:"Apartment :"}),Object(n.jsxs)("select",{name:"apartments",onChange:function(e){p({_id:e.target.value})},children:[Object(n.jsx)("option",{children:"Select your apartment"}),s.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e,t){return Object(n.jsx)("option",{value:e._id,children:e.name},t)}))]})]}),Object(n.jsx)("div",{className:"row form- offset-4",children:Object(n.jsx)("input",{type:"submit",value:"Add User as Tenant",className:"btn btn-primary"})})]})},g=a(6),f=a(23),x=function(e){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row offset-4",children:Object(n.jsx)("h2",{children:"Book an Area"})}),Object(n.jsx)("div",{id:"calendar_container",children:Object(n.jsx)(f.a,{url:"https://calendly.com/apartmentconnect"})})]})},v=a(8),N=function(e){var t=e.repair,a=e.errors,c=e.changeHandler,s=e.submitHandler,r=(e.checkBoxHandler,e.action);return Object(n.jsxs)("form",{onSubmit:s,children:[Object(n.jsxs)("div",{className:"row form-group",children:[a.name?Object(n.jsx)("span",{className:"col-sm-8 offset-sm-4 text-danger",children:a.name}):"",Object(n.jsx)("label",{htmlFor:"details",className:"col-sm-4",children:"What needs to be fixed? "}),Object(n.jsx)("input",{type:"text",name:"details",className:"col-sm-8 form-control",onChange:c,value:t.details})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("label",{htmlFor:"location",className:"col-sm-6 offset-sm-2",children:["Where is the problem located?",Object(n.jsxs)("select",{name:"location",onChange:c,value:t.location,children:[Object(n.jsx)("option",{value:"Kitchen",children:"Kitchen"}),Object(n.jsx)("option",{value:"Living Room",children:"Living Room"}),Object(n.jsx)("option",{value:"Bath Room",children:"Bath Room"}),Object(n.jsx)("option",{value:"Bed Room 1",children:"Bed Room 1"}),Object(n.jsx)("option",{value:"Bed Room 2",children:"Bed Room 2"})]})]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("label",{htmlFor:"urgency",className:"col-sm-6 offset-sm-2",children:["How urgent is this?",Object(n.jsxs)("select",{name:"urgency",onChange:c,value:t.urgency,children:[Object(n.jsx)("option",{value:1,children:"Anytime is fine"}),Object(n.jsx)("option",{value:2,children:"Today would be good"}),Object(n.jsx)("option",{value:3,children:"Stuff is on fire!!!"})]})]})})]}),Object(n.jsx)("div",{className:"row form-group",children:Object(n.jsx)("input",{type:"submit",value:r,className:"col-sm-4 offset-sm-4 btn btn-primary"})})]})},w=function(e){var t=Object(c.useState)({location:"",details:"",urgency:""}),a=Object(l.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)({name:""}),j=Object(l.a)(o,2),d=j[0],u=j[1],m=Object(c.useState)({firstName:"",lastName:"",email:""}),h=Object(l.a)(m,2),O=h[0],p=h[1];Object(c.useEffect)((function(){var e;console.log("running use effect"),b.a.get("http://localhost:8000/api/users/loggedin",{withCredentials:!0}).then((function(t){return console.log("first then"),p(t.data),e=t.data,console.log("User Object ".concat(JSON.stringify(e))),console.log("User ID: ".concat(e._id)),b.a.get("http://localhost:8000/api/getapt/".concat(t.data._id),{withCredentials:!0})})).then((function(e){console.log("res"),console.log(e),e.data[0].name&&p((function(t){return Object(g.a)(Object(g.a)({},t),{},{apartment:e.data[0].name,apartmentId:e.data[0]._id})}))})).catch((function(e){return console.log(e)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"col-sm-8 offset-3",children:[Object(n.jsxs)("h2",{children:["Hello  ",O.firstName,"  ",O.apartmentId?Object(n.jsxs)("span",{children:["Apartment: ",O.apartment]}):""]}),Object(n.jsx)("h1",{className:"offset-sm-1",children:"Repair Request"})]}),Object(n.jsxs)("div",{className:"container offset-1",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"row",children:O.apartment?Object(n.jsx)(N,{changeHandler:function(e){r(Object(g.a)(Object(g.a)({},s),{},Object(v.a)({},e.target.name,e.target.value)))},submitHandler:function(e){console.log("inside submitHandler"),console.log("repair: ".concat(JSON.stringify(s))),console.log("Apartment ID: ".concat(O.apartmentId)),e.preventDefault(),b.a.patch("http://localhost:8000/api/apartments/".concat(O.apartmentId,"/repair/new"),s).then((function(e){"error"==e.data.message?u({name:e.data.message}):Object(i.c)("/dashboard")})).catch((function(e){return console.log(e)}))},checkBoxHandler:function(e){var t=e.target,a=("checkbox"===t.type?t.checked:t.value).toString(),n=t.name;r(Object(g.a)(Object(g.a)({},s),{},Object(v.a)({},n,a)))},repair:s,errors:d,action:"Create a Repair Request"}):Object(n.jsxs)("div",{className:"offset-2",children:[Object(n.jsx)("p",{children:"Please add an apartment before requesting a repair."}),Object(n.jsx)("button",{className:"btn btn-primary offset-4",onClick:function(){return Object(i.c)("/connect")},children:"Add Apartment"})]})})]})]})},S=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)({name:""}),j=Object(l.a)(o,2),d=(j[0],j[1],Object(c.useState)({firstName:"",lastName:"",email:""})),u=Object(l.a)(d,2),m=u[0],h=u[1];return Object(c.useEffect)((function(){var e;console.log("running use effect"),b.a.get("http://localhost:8000/api/users/loggedin",{withCredentials:!0}).then((function(t){return console.log("first then"),h(t.data),e=t.data,console.log("User Object ".concat(JSON.stringify(e))),console.log("User ID: ".concat(e._id)),b.a.get("http://localhost:8000/api/getapt/".concat(t.data._id),{withCredentials:!0})})).then((function(e){return console.log("second then"),console.log("resp"),console.log(e),e.data[0].name&&h((function(t){return Object(g.a)(Object(g.a)({},t),{},{apartment:e.data[0].name,apartmentId:e.data[0]._id})})),b.a.get("http://localhost:8000/api/apartments/".concat(e.data[0]._id),{withCredentials:!0})})).then((function(e){console.log("Third then"),console.log("response.data.repairs "),console.log(e.data.repairs),r(e.data.repairs)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-8",children:Object(n.jsxs)("h1",{children:["Repair List for Apartment ",m.apartment," "]})})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:m.apartment?Object(n.jsx)(n.Fragment,{children:s.map((function(e,t){return Object(n.jsx)("div",{className:"col-10",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(n.jsx)("li",{class:"list-group-item bg-dark text-danger",children:e.details}),Object(n.jsx)("li",{class:"list-group-item bg-dark",children:e.location}),Object(n.jsx)("li",{class:"list-group-item bg-dark",children:e.urgency}),Object(n.jsxs)("li",{class:"list-group-item bg-dark ",children:["Completed? ",!0===e.status?Object(n.jsx)("span",{className:"text-success",children:"Yes"}):Object(n.jsx)("span",{className:"text-danger",children:"No"})]})]})})},t)}))}):Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Please add an apartment to view repairs."}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return Object(i.c)("/connect")},children:"Add Apartment"})]})})]})})},C=a(10),y=function(e){var t=e.logout,a=Object(c.useState)({firstName:"",lastName:"",email:"",maintenance:""}),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(c.useState)({}),d=Object(l.a)(j,2),u=(d[0],d[1]),m=Object(c.useState)(""),h=Object(l.a)(m,2),O=h[0],p=h[1],f=function(e){p(e)},v=Object(c.useState)([]),N=Object(l.a)(v,2);N[0],N[1];return Object(c.useEffect)((function(){b.a.get("http://localhost:8000/api/users/loggedin",{withCredentials:!0}).then((function(e){var t=e.data;return o(t),console.log(t),e.data.maintenance?(console.log("I'm a maintenance worker, give me all apts."),b.a.get("http://localhost:8000/api/apartments",{withCredentials:!0})):(console.log("just give me my apt"),b.a.get("http://localhost:8000/api/getapt/".concat(e.data._id),{withCredentials:!0}))})).then((function(e){if(console.log("response: ",e.data),e.data[0]){var t=Object(C.mergeSortArrObj)(e.data[0].repairs.filter((function(e){return!1===e.status})),"urgency").reverse();console.log("sorted Repairs: ",t),u(Object(g.a)(Object(g.a)({},e.data[0]),{},{repairs:t}))}})).catch((function(e){console.log("not authorized"),console.log("error",e),Object(i.c)("/"),t()}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row offset-sm-3",children:Object(n.jsxs)("h2",{children:["Welcome ",r.firstName]})}),Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("button",{className:"btn btn-primary ",onClick:function(){return f("repair")},children:"Repairs"})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("button",{className:"btn btn-primary ",onClick:function(){return f("listrepairs")},children:"List Repairs"})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return f("reserve")},children:"Reserve a Time"})})]}),Object(n.jsx)("br",{}),"repair"===O?Object(n.jsx)(w,{user:r,setUser:o}):"listrepairs"===O?Object(n.jsx)(S,{user:r,setUser:o}):"reserve"===O?Object(n.jsx)(x,{}):"",Object(n.jsx)("div",{className:"row",children:r.maintenance?Object(n.jsx)(i.a,{className:"btn btn-primary offset-4",to:"/maintenance",children:"Maintenance Portal"}):""})]})},I=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){b.a.get("http://localhost:8000/api/apartments",{withCredentials:!0}).then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"offset-3",children:"Maintenance Portal"}),Object(n.jsx)("br",{}),s.map((function(e){return e.repairs.map((function(t,a){if(!t.status)return Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{id:a,class:"list-group",children:[Object(n.jsx)("li",{class:"list-group-item bg-dark",children:Object(n.jsxs)("h3",{children:["Repair: ",t.details]})}),Object(n.jsxs)("li",{class:"list-group-item bg-dark",children:["Location: ",t.location," of apartment ",e.name," "]}),Object(n.jsxs)("li",{class:"list-group-item bg-dark",children:["Completed? ",JSON.stringify(t.status)]}),Object(n.jsx)("li",{class:"list-group-item bg-dark",children:Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(e,t){b.a.patch("http://localhost:8000/api/apartments/".concat(e,"/repair/update"),{status:!0},{withCredentials:!0}).then((function(e){"success"===e.data.message&&document.getElementById(t).parentNode.removeChild(document.getElementById(t))})).catch((function(e){return console.log(e)}))}(t._id,a)},children:"Mark as fixed"})})]},a)})}))}))]})};var k=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("loggedIn"))),t=Object(l.a)(e,2),a=(t[0],t[1]),s=function(){b.a.post("http://localhost:8000/api/logout",{},{withCredentials:!0}).then((function(){localStorage.setItem("loggedIn","false"),a(!1)})).catch((function(e){return console.log(e)})),Object(i.c)("/")};return Object(c.useEffect)((function(){JSON.parse(localStorage.getItem("loggedIn"))&&Object(i.c)("/dashboard")}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"jumbotron-dark",children:[Object(n.jsx)("h1",{className:"offset-3",children:"Apartment Connect"}),JSON.parse(localStorage.getItem("loggedIn"))&&Object(n.jsx)(j,{logout:s})]}),Object(n.jsxs)(i.b,{children:[Object(n.jsx)(h,{setLoggedIn:function(){return a(!0)},path:"/"}),Object(n.jsx)(O,{path:"/users"}),Object(n.jsx)(y,{logout:s,path:"/dashboard"}),Object(n.jsx)(p,{path:"/connect"}),Object(n.jsx)(w,{path:"/newrepair"}),Object(n.jsx)(x,{path:"/calendar"}),Object(n.jsx)(S,{path:"/repairlist"}),Object(n.jsx)(I,{path:"/maintenance"})]})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),R()}},[[56,1,2]]]);
//# sourceMappingURL=main.3e02a505.chunk.js.map