"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[984],{5984:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(2791),r=n(9434),c="ContactsPage_contactSection__Vrnyk",s="ContactItem_contactItem__Z4FuP",o=n(6052),i=n(184),u=function(e){var t=e.contactData,n=(0,r.I0)();return(0,i.jsxs)("li",{className:s,children:[(0,i.jsxs)("h4",{className:"contactName",children:["Name: ",t.name]}),(0,i.jsxs)("p",{className:"contactPhone",children:["Phone: ",t.number]}),(0,i.jsx)("button",{className:"deleteButton",onClick:function(){return e=t.id,void n((0,o.xX)(e));var e},children:"Delete"})]})},l=function(e){return e.contacts.contacts},m=function(e){return e.contacts.isLoading},d="ContactsList_contactList__qIIH9",h=function(){var e=(0,r.v9)(l);return(0,i.jsx)("ul",{className:d,children:e?e.map((function(e){return(0,i.jsx)(u,{contactData:e},e.id)})):(0,i.jsx)("h3",{children:"There is no contacts in your phonebook"})})},f="NewContactForm_contactForm__pKgob",x=function(){var e=(0,r.I0)();return(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("h3",{children:"Add Contact"}),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements,a={name:n.name.value,number:n.number.value};e((0,o.je)(a)),t.currentTarget.reset()},children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,i.jsx)("input",{type:"text",id:"name",name:"name",required:!0}),(0,i.jsx)("label",{htmlFor:"number",children:"Number:"}),(0,i.jsx)("input",{type:"tel",id:"number",name:"number",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Add Contact"})]})]})},j=n(4289),b=n(4691),p=function(){return(0,i.jsx)(b.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})},v=function(){var e=(0,r.v9)(m),t=(0,r.v9)(j.Qb),n=(0,r.I0)();return(0,a.useEffect)((function(){t&&n((0,o.m$)())}),[n,t]),(0,i.jsxs)("div",{className:c,children:[(0,i.jsx)(x,{}),e&&(0,i.jsx)(p,{}),(0,i.jsx)("h2",{children:"Contact List"}),(0,i.jsx)(h,{})]})}}}]);
//# sourceMappingURL=984.b52c0126.chunk.js.map