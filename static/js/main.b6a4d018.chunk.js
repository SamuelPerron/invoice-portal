(this["webpackJsonpinvoice-portal"]=this["webpackJsonpinvoice-portal"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),u=(n(13),n(4)),l=n(2),i=n(1),m=(n(14),function(e){return r.a.createElement("tr",{className:"Line"},-1===e.context?r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null,"Code"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Dimensions"),r.a.createElement("th",null,"Unit price"),r.a.createElement("th",null,"Format"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Subtotal")):null,1!==e.context||e.product.hide?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,"[",e.product.code,"]"),r.a.createElement("td",{onClick:e.openProductModal},r.a.createElement("span",{className:"name"},e.product.name)),r.a.createElement("td",null,"(",e.product.dimensions,")"),r.a.createElement("td",null,e.moneyFormat(e.product.unitPrice)),r.a.createElement("td",null,r.a.createElement("select",{onChange:function(t){return e.changeFormat(parseInt(t.target.value))},defaultValue:e.product.format.id},e.product.formats.map((function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.name," (",e.qty," units)")})))),r.a.createElement("td",null,r.a.createElement("input",{type:"number",onChange:function(t){return e.changeQuantity(""!==t.target.value?parseInt(t.target.value):0)},value:e.product.quantity})),r.a.createElement("td",null,e.moneyFormat(e.product.subtotal))),2===e.context?r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,"[",e.product.code,"]"),r.a.createElement("td",{onClick:e.openProductModal},r.a.createElement("span",{className:"name"},e.product.name)),r.a.createElement("td",null,"(",e.product.dimensions,")"),r.a.createElement("td",null,e.moneyFormat(e.product.unitPrice)),r.a.createElement("td",null,e.product.format.name," (",e.product.format.qty," units)"),r.a.createElement("td",null,e.product.quantity," (",e.product.quantity*e.product.format.qty," units)",e.product.boQuantity>0?r.a.createElement("span",null," (+ ",e.product.boQuantity," ",e.product.format.name,"(s) / bo)"):null),r.a.createElement("td",null,e.moneyFormat(e.product.subtotal))):null)}),d=function(e){return r.a.createElement("div",{className:"Search"},r.a.createElement("strong",null,"Search"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Code"),r.a.createElement("input",{onChange:function(t){return e.searchHandler({productCode:t.target.value})},value:e.search.productCode})),r.a.createElement("li",null,r.a.createElement("span",null,"Name"),r.a.createElement("input",{onChange:function(t){return e.searchHandler({productName:t.target.value})},value:e.search.productName}))))},s=function(e){return r.a.createElement("div",{className:"ProductsSelection"},r.a.createElement(d,{products:e.products,search:e.search,searchHandler:function(t){return e.searchHandler(t)}}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(m,{context:-1})),r.a.createElement("tbody",null,e.products.map((function(t,n){return r.a.createElement(m,{changeQuantity:function(n){return e.changeQuantity(t.id,n)},changeFormat:function(n){return e.changeFormat(t.id,n)},openProductModal:function(){return e.openProductModal(t.id)},moneyFormat:e.moneyFormat,product:t,context:1,key:n})})))),r.a.createElement("p",null,"Total: ",r.a.createElement("strong",null,e.moneyFormat(e.total))),r.a.createElement("button",{onClick:e.submit,disabled:e.total<=0},"Next step"))},p=function(e){return r.a.createElement("div",{className:"ProductsValidation"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(m,{context:-1})),r.a.createElement("tbody",null,e.order.map((function(t,n){return r.a.createElement(m,{moneyFormat:function(t){return e.moneyFormat(t)},product:t,context:2,openProductModal:function(){return e.openProductModal(t.id)},key:n})})))),r.a.createElement("p",null,"Total: ",r.a.createElement("strong",null,e.moneyFormat(e.total))),r.a.createElement("button",{onClick:e.back},"Edit order"),r.a.createElement("button",{onClick:e.submit},"Next step"))},f=(n(15),function(e){return r.a.createElement("li",{className:"BackOrderOption",onClick:e.click},r.a.createElement("strong",null,e.option.name),r.a.createElement("p",null,e.option.description.replace(/{CODE}/,e.product.code).replace(/{AVAILQTY}/,Math.floor(e.product.inventory/e.product.format.qty)).replace(/{AVAILUNITS}/,e.product.inventory+" unit(s)").replace(/{BOUNITS}/,e.product.quantity*e.product.format.qty-e.product.inventory+" unit(s)").replace(/{FORMAT}/,e.product.format.name+"(s)")))}),E=function(e){return r.a.createElement("ul",{className:"BackOrderOptions"},e.options.map((function(t,n){return r.a.createElement(f,{option:t,product:e.product,click:function(){return e.selectOption(t.id)},key:n})})))},b=(n(16),function(e){return r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"darken",onClick:e.close}),r.a.createElement("div",{className:"content"},e.close?r.a.createElement("span",{className:"close",onClick:e.close},"Close"):null,e.children))}),y=function(e){var t=Object(a.useState)(1),n=Object(i.a)(t,2),o=n[0],c=n[1],m=Object(a.useState)([]),d=Object(i.a)(m,2),f=d[0],y=d[1],h=Object(a.useState)([]),v=Object(i.a)(h,2),O=v[0],g=v[1],j=Object(a.useState)([]),q=Object(i.a)(j,2),N=q[0],k=q[1],C=Object(a.useState)("Place an order"),F=Object(i.a)(C,2),S=F[0],A=F[1],P=Object(a.useState)(0),M=Object(i.a)(P,2),I=M[0],T=M[1],Q=Object(a.useState)([{id:1,name:"Don't order this product",description:"Remove {CODE} from your order"},{id:2,name:"Only order the available inventory",description:"Only order {AVAILQTY} {FORMAT} ( {AVAILUNITS} )"},{id:3,name:"Order the available inventory and put the rest in back order",description:"Only order {AVAILQTY} {FORMAT} ( {AVAILUNITS} ) and put {BOUNITS} in back order"}]),x=Object(i.a)(Q,2),L=x[0],V=(x[1],Object(a.useState)({productName:"",productCode:""})),w=Object(i.a)(V,2),B=w[0],D=w[1];Object(a.useEffect)((function(){var t=Object(l.a)(e.products);t.map((function(e){return e.format=e.formats[0],e.quantity=0,e.subtotal=0,e.boQuantity=0,e.hide=!1,e})),y(t)}),[e.products]),Object(a.useEffect)((function(){for(var e=0,t=0;t<f.length;t++)e+=f[t].subtotal;T(e)}),[f]),Object(a.useEffect)((function(){var e=Object(l.a)(f);e.map((function(e){return e.code.includes(B.productCode)&&e.name.includes(B.productName)?e.hide=!1:e.hide=!0,e})),y(e)}),[B]),Object(a.useEffect)((function(){k(Object(l.a)(O).filter((function(e){return e.quantity*e.format.qty>e.inventory})))}),[O]);var U=function(e){var t=Object(l.a)(e);return t.map((function(e){return e.subtotal=e.format.qty*e.quantity*e.unitPrice,e})),t},H=function(e){return e.toLocaleString("en-CA",{style:"currency",currency:"CAD",minimumFractionDigits:4})},R=function(){g(Object(l.a)(e.products).filter((function(e){return e.quantity>0})))},Y=r.a.createElement(s,{changeQuantity:function(e,t){return function(e,t){var n=Object(l.a)(f);n.find((function(t){return t.id===e})).quantity=t,n=U(n),y(n)}(e,t)},changeFormat:function(e,t){return function(e,t){var n=Object(l.a)(f),a=n.find((function(t){return t.id===e}));a.format=a.formats.find((function(e){return e.id===t})),n=U(n),y(n)}(e,t)},openProductModal:function(t){return e.openProductModal(t)},products:f,total:I,search:B,searchHandler:function(e){return t=e,void D(Object(u.a)(Object(u.a)({},B),t));var t},submit:function(){R(),A("Validate order"),c(2)},moneyFormat:function(e){return H(e)}}),J=r.a.createElement(p,{order:O,openProductModal:function(t){return e.openProductModal(t)},total:I,submit:function(){console.log(O)},back:function(){g([]),D({productName:"",productCode:""}),A("Modify order"),c(1)},moneyFormat:function(e){return H(e)}});return r.a.createElement("div",{className:"Order"},r.a.createElement("h1",null,S),1===o?Y:null,2===o?J:null,N.length>0?r.a.createElement(b,null,r.a.createElement("h1",null,"This product is in back order"),r.a.createElement("h2",null,"[",N[0].code,"] ",N[0].name),r.a.createElement("span",null,"Please select one of these options"),r.a.createElement(E,{options:L,product:N[0],selectOption:function(e){return function(e,t){var n=Object(l.a)(O).map((function(n){if(n.id===t)if(1===e)n.quantity=0;else if(2===e)n.quantity=Math.floor(n.inventory/n.format.qty);else if(3===e){var a=n.quantity;n.quantity=Math.floor(n.inventory/n.format.qty),n.boQuantity=a-n.quantity}return n}));n=n.filter((function(e){return e.quantity>0}));var a=U(n);g(a)}(e,N[0].id)}})):null)},h=function(e){return r.a.createElement("div",{className:"Product"},r.a.createElement("h1",null,e.infos.name),r.a.createElement("h2",null,e.infos.code),r.a.createElement("p",null,e.infos.description))},v=(n(17),function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],c=n[1],m=Object(a.useState)({open:!1,product:null}),d=Object(i.a)(m,2),s=d[0],p=d[1],f=function(){var e,t=(e=5,Object(l.a)(Array(e).keys()).map((function(e){return{id:e+1,code:"AA-000"+e,name:"Contenant mince pour mets \xe0 emporter \xe0 rebord doubl\xe9",dimensions:3*e+2+"PO",inventory:1e3,formats:[{id:1,name:"Boite",qty:100},{id:2,name:"Caisse",qty:1e3}],unitPrice:.0852*e+.7,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae enim quis ligula facilisis viverra. Sed tortor sem, facilisis in nibh in, aliquet elementum felis. Sed sit amet gravida orci, eu rutrum urna. Pellentesque auctor orci at nunc accumsan cursus. Maecenas tempus mauris eget tempus eleifend. Sed mollis, leo in cursus convallis, risus metus sodales risus, ut vestibulum felis dolor non enim. Aliquam lobortis massa eget sodales sollicitudin."}})));c(t)};return Object(a.useEffect)((function(){f()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(y,{openProductModal:function(e){return p({open:!0,product:e})},products:o}),s.open?r.a.createElement(b,{close:function(){return p({open:!1,product:null})}},r.a.createElement(h,{infos:Object(u.a)({},o.find((function(e){return e.id===s.product})))})):null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b6a4d018.chunk.js.map