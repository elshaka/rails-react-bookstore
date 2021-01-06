(this.webpackJsonpBookStore=this.webpackJsonpBookStore||[]).push([[0],{24:function(e,t,n){e.exports=n(53)},35:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),l=n.n(o),c=n(2),u=n(3),i=n(22),f=(n(35),n(6)),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS":return t.books;case"CREATE_BOOK":return[].concat(Object(f.a)(e),[t.book]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.book.id}));default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.filter;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return t.loading;default:return e}},d=Object(u.c)({books:m,filter:s,loading:E}),b=function(e){var t=e.book,n=e.remove;return a.a.createElement("tr",null,a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.category),a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:function(){return n(t)}},"Remove")))},g=n(7),k=n.n(g),y=function(e){return{type:"SET_LOADING",loading:e}},h=Object(c.b)((function(e){return{books:e.books,filter:e.filter,loading:e.loading}}),(function(e){return{getBooks:function(){return e((function(e){e(y(!0)),k.a.get("/books.json").then((function(t){e({type:"SET_BOOKS",books:t.data}),e(y(!1))}))}))},destroyBook:function(t){return e(function(e){return function(t){k.a.delete("/books/".concat(e.id,".json")).then((function(){t(function(e){return{type:"REMOVE_BOOK",book:e}}(e))}))}}(t))}}}))((function(e){var t=e.books,n=e.filter,o=e.loading,l=e.getBooks,c=e.destroyBook;Object(r.useEffect)((function(){l()}),[l]);var u=n?t.filter((function(e){return e.category===n})):t;return a.a.createElement("div",{className:"BookList"},o&&a.a.createElement("span",null,"Loading..."),u.length>0&&a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Category"),a.a.createElement("th",null,"Actions"))),a.a.createElement("tbody",null,u.map((function(e){return a.a.createElement(b,{key:e.id,book:e,remove:c})})))))})),v=n(5),O=n(11),p=n(23),B=["Action","Biography","History","Horror","Kids","Learning","Sci-Fi"],j={newBook:function(e){return function(t){k.a.post("/books.json",{book:e}).then((function(e){t(function(e){return{type:"CREATE_BOOK",book:e}}(e.data))}))}}},C=Object(c.b)(null,j)((function(e){var t=e.newBook,n={title:"",category:"Action"},r=a.a.useState(n),o=Object(p.a)(r,2),l=o[0],c=o[1],u=function(e){c(Object(O.a)({},l,Object(v.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"BookForm"},a.a.createElement("form",null,a.a.createElement("label",{htmlFor:"title"},"Title",a.a.createElement("input",{required:!0,type:"text",id:"title",name:"title",value:l.title,onChange:u})),a.a.createElement("label",{htmlFor:"category"},"Category",a.a.createElement("select",{required:!0,id:"category",name:"category",value:l.category,onChange:u},B.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement("input",{type:"submit",onClick:function(e){e.preventDefault(),t(Object(O.a)({ID:Math.floor(1e3*Math.random()+1)},l)),c(n)}})))})),A=Object(c.b)((function(e){return{filter:e.filter}}),(function(e){return{changeFilter:function(t){return e(function(e){return{type:"CHANGE_FILTER",filter:e}}(t))}}}))((function(e){var t=e.filter,n=e.changeFilter;return a.a.createElement("div",{className:"CategoryFilter"},a.a.createElement("label",{htmlFor:"category"},"Filter by category",a.a.createElement("select",{id:"category",value:t,onChange:function(e){var t=e.target.value;n("All"===t?"":t)}},["All"].concat(Object(f.a)(B)).map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))))})),F=function(){return a.a.createElement("div",{className:"BookStore"},a.a.createElement(C,null),a.a.createElement(A,null),a.a.createElement(h,null))},S=Object(u.d)(d,Object(u.a)(i.a));l.a.render(a.a.createElement(c.a,{store:S},a.a.createElement(F,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.33ae9e51.chunk.js.map