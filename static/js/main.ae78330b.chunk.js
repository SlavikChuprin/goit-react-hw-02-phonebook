(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"ContactForm_form__1AIl9",input:"ContactForm_input__32ZBt",btn:"ContactForm_btn__1WAEI"}},,,,,,,function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__2z7Rg",filterInput:"Filter_filterInput__3FzHV"}},function(t,e,n){t.exports={contactItem:"ContactListItem_contactItem__icHTs",btnDel:"ContactListItem_btnDel__20zAz"}},,function(t,e,n){t.exports={contactList:"ContactList_contactList__2EQPi"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),o=(n(18),n(9)),s=n(4),l=n(5),u=n(7),b=n(6),m=(n(19),n(10)),d=n.n(m),h=n(0),j=function(t){var e=t.value,n=t.onChange;return Object(h.jsx)("div",{className:d.a.filterWrapper,children:Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:d.a.filterInput})]})})},f=n(2),p=n(3),O=n.n(p),C=n(23),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:null},t.handleChange=function(e){var n,a=e.currentTarget,c=a.name,r=a.value;t.setState((n={},Object(f.a)(n,c,r),Object(f.a)(n,"id",Object(C.a)()),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.form,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{className:O.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{className:O.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:O.a.btn,children:"Add contact"})]})}}]),n}(a.Component),x=v,_=n(13),g=n.n(_),y=function(t){var e=t.children;return Object(h.jsx)("ul",{className:g.a.contactList,children:e})},A=n(11),F=n.n(A),N=function(t){t.contacts;var e=t.visibleContacts,n=t.onDeleteContact;return e.map((function(t){return Object(h.jsxs)("li",{className:F.a.contactItem,children:[t.name,": ",t.number,Object(h.jsx)("button",{type:"button",className:F.a.btnDel,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))},S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitFromForm=function(e){var n=e.name;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:Object(o.a)(Object(o.a)({},t.contacts),e)}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state,n=e.filter,a=e.contacts;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:this.submitFromForm}),Object(h.jsx)("h2",{children:" Contacts"}),Object(h.jsx)(j,{value:n,onChange:this.changeFilter}),Object(h.jsx)(y,{children:Object(h.jsx)(N,{contacts:a,visibleContacts:t,onDeleteContact:this.deleteContact})})]})}}]),n}(a.Component),I=S;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ae78330b.chunk.js.map