_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"b/jV":function(e,t,n){"use strict";n.r(t);var o=n("h4VS"),a=n("q1tI"),r=n.n(a),i=n("5Yp1"),d=n("YFqc"),l=n.n(d),c=n("UYTu"),s=n("+TN3"),u=n("o0o1"),p=n.n(u),m=n("HaE+"),b=n("ODXe"),f=n("pZLH"),g=n("PSD3"),v=n.n(g),h=r.a.createElement;function x(){var e=Object(o.a)(["\n    query obtenerPedidosVendedor { \n        obtenerPedidosVendedor{\n            id\n        }\n    }\n"]);return x=function(){return e},e}function w(){var e=Object(o.a)(["\n    mutation eliminarPedido($id : ID!){\n        eliminarPedido(id:$id)\n    }\n"]);return w=function(){return e},e}function N(){var e=Object(o.a)(["\n    mutation actualizarPedido($id : ID!, $input : PedidoInput){\n        actualizarPedido(id : $id, input : $input){\n            estado \n        }\n    }\n"]);return N=function(){return e},e}var O=Object(c.a)(N()),P=Object(c.a)(w()),E=Object(c.a)(x()),k=function(e){var t=e.pedido;console.log(t);var n=t.id,o=t.total,r=t.cliente,i=r.nombre,d=r.apellido,l=r.telefono,c=r.email,s=t.cliente,u=t.estado,g=Object(f.a)(O),x=Object(b.a)(g,1)[0],w=Object(f.a)(P,{update:function(e){var t=e.readQuery({query:E}).obtenerPedidosVendedor;e.writeQuery({query:E,data:{obtenerPedidosVendedor:t.filter((function(e){return e.id!==n}))}})}}),N=Object(b.a)(w,1)[0],k=Object(a.useState)(u),j=k[0],y=k[1],C=Object(a.useState)(""),V=C[0],T=C[1];Object(a.useEffect)((function(){j&&y(j),D()}),[j]);var D=function(){T("PENDIENTE"===j?"border-yellow-500":"COMPLETADO"===j?"border-green-500":"border-red-800")},L=function(){var e=Object(m.a)(p.a.mark((function e(t){var o,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({variables:{id:n,input:{estado:t,cliente:s.id}}});case 3:o=e.sent,a=o.data,y(a.actualizarPedido.estado),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return h("div",{className:"".concat(V," border-t-4 mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg'")},h("div",null,h("p",{className:"font-bold text-gray-800"},"Cliente :  ",i," ",d),c&&h("p",{className:"flex items-center my-2"},h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})),c),l&&h("p",{className:"flex items-center my-2"},h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})),l),h("h2",{className:"text-gray-800 font-bold mt-10"},"Estado Pedido : "),h("select",{className:"mt-2 appearance-none bg-blue-600 border border-blue-600 text-white p-2 text-center rounded leading-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold",defaultValue:j,onChange:function(e){return L(e.target.value)}},h("option",{value:"COMPLETADO"},"COMPLETADO"),h("option",{value:"PENDIENTE"},"PENDIENTE"),h("option",{values:"CANCELADO"},"CANCELADO"))),h("div",{className:"text-gray-800 font-bold mt-2"},h("h2",null,"Resumen del Pedido"),t.pedido.map((function(e){return h("div",{key:e.id,className:"mt-4"},h("p",{className:"text-sm text-gray-600 font-light"},"Producto: ",e.nombre),h("p",{className:"text-sm text-gray-600 font-light"},"Cantidad: ",e.cantidad))})),h("p",{className:"text-gray-800 mt-3 font-bold"},"Total a pagar:",h("span",{className:"font-light"},"$ ",o)),h("button",{className:"uppercase text-xs font-bold flex items-center mt-4 bg-red-800 px-5 py-2 inline-block text-white rounded leading-tight",onClick:function(){v.a.fire({title:"\xbfEst\xe1s seguro de eliminar el pedido?",text:"No se podr\xe1 deshacer esta acci\xf3n",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, b\xf3rralo!",cancelButtonText:"No, canc\xe9lalo"}).then(function(){var e=Object(m.a)(p.a.mark((function e(t){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=11;break}return e.prev=1,e.next=4,N({variables:{id:n}});case 4:o=e.sent,v.a.fire("Eliminado",o.eliminarPedido,"success"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}},"Eliminar Pedido",h("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},h("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})))))},j=r.a.createElement;function y(){var e=Object(o.a)(["\n    query obtenerPedidosVendedor{\n        obtenerPedidosVendedor{\n            id\n            pedido{\n                id\n                nombre\n                cantidad\n            }\n            cliente{\n                id\n                nombre\n                apellido\n                email\n                telefono\n            }\n            vendedor\n            total\n            estado\n        }\n    }\n"]);return y=function(){return e},e}var C=Object(c.a)(y());t.default=function(){var e=Object(s.a)(C),t=e.data,n=e.loading;e.error;if(n)return"cargando .... ";console.log(t);var o=t.obtenerPedidosVendedor;return j(r.a.Fragment,null,j(i.a,null,j("h1",{className:"text-2xl text-gray-800 font-light"},"Pedidos"),j(l.a,{href:"/nuevopedido"},j("a",{className:"bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded "},"Nuevo Pedido")),0===o.length?j("p",{className:"mt-5 text-center text-2xl"},"No hay pedidos a\xfan"):o.map((function(e){return j(k,{key:e.id,pedido:e})}))))}},zOM9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pedidos",function(){return n("b/jV")}])}},[["zOM9",0,2,1,3,4,5,6]]]);