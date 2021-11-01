(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1AIl9",input:"ContactForm_input__32ZBt",btn:"ContactForm_btn__1WAEI"}},,,,,function(t,e,n){t.exports={contactList:"ContactList_contactList__2EQPi",contactItem:"ContactList_contactItem__1t6M3",btnDel:"ContactList_btnDel__209CH"}},,function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__2z7Rg",filterInput:"Filter_filterInput__3FzHV"}},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(16),n(3)),s=n(4),l=n(6),u=n(5),b=n(21),m=n(9),d=n.n(m),h=n(0),f=function(t){var e=t.value,n=t.onChange;return Object(h.jsx)("div",{className:d.a.filterWrapper,children:Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:d.a.filterInput})]})})},j=n(11),p=n(2),C=n.n(p),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.form,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{className:C.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:C.a.btn,children:"Add contact"})]})}}]),n}(a.Component),v=O,g=n(7),x=n.n(g),_=function(t){var e=t.visibleContacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){return Object(h.jsxs)("li",{className:x.a.contactItem,children:[t.name,": ",t.number,Object(h.jsx)("button",{type:"button",className:x.a.btnDel,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},F=(n(18),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitFromForm=function(e){var n=e.name,a=e.number,c=t.state.contacts.find((function(t){return t.name===n}));console.log("~ nameAlreadyIs",c),c?alert("".concat(n," is already in contacts")):t.setState((function(t){return t.contacts.push({id:Object(b.a)(),name:n,number:a})}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.submitFromForm}),Object(h.jsx)("h2",{children:" Contacts"}),Object(h.jsx)(f,{value:e,onChange:this.changeFilter}),Object(h.jsx)(_,{visibleContacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component)),y=F,A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),A()}],[[19,1,2]]]);
//# sourceMappingURL=main.819ded45.chunk.js.map