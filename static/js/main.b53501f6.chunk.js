(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=(c(18),c(19),c(6)),r=c.n(s),j=c(2),i=(c(20),c(4)),l=c(1),o=c.n(l);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(21);var d=c(0),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.person,c=t.name,n=t.slug,s=t.sex;return Object(d.jsx)(a.b,{to:"/people/".concat(n),className:r()({"has-text-danger":"f"===s}),children:c})},x=o.a.memo((function(e){var t=e.people,c=e.personId;return Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var n=e.sex,a=e.born,s=e.died,j=e.fatherName,i=e.motherName,l=e.slug,o=t.find((function(e){return e.name===i})),b=t.find((function(e){return e.name===j}));return Object(d.jsxs)("tr",{"data-cy":"person",className:r()({"has-background-warning":l===c}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(O,{person:e})}),Object(d.jsx)("td",{children:n}),Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:s}),Object(d.jsx)("td",{children:o?Object(d.jsx)(O,{person:o}):i||"-"}),Object(d.jsx)("td",{children:b?Object(d.jsx)(O,{person:b}):j||"-"})]},l)}))})]})})),p=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),s=Object(i.a)(a,2),r=s[0],o=s[1],O=Object(l.useState)(!1),p=Object(i.a)(O,2),u=p[0],m=p[1],f=Object(j.g)("/people/:personId"),v=(null===f||void 0===f?void 0:f.params.personId)||"";return Object(l.useEffect)((function(){o(!0),b().then(n).catch((function(){return m(!0)})).finally((function(){return o(!1)}))}),[]),Object(d.jsx)("div",{className:"block",children:r?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"box table-container",children:[u&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(d.jsx)(x,{people:c,personId:v})]})})},u=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(a.c,{className:function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(d.jsx)(a.c,{className:function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(j.b,{path:"/home",element:Object(d.jsx)(j.a,{to:"/",replace:!0})}),Object(d.jsxs)(j.b,{path:"/people",children:[Object(d.jsx)(j.b,{index:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)(p,{})]})}),Object(d.jsx)(j.b,{path:":personId",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)(p,{})]})})]}),Object(d.jsx)(j.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(u,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b53501f6.chunk.js.map