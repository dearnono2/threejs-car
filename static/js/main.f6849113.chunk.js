(this["webpackJsonpreact-three-fiber"]=this["webpackJsonpreact-three-fiber"]||[]).push([[0],{30:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var r=i(3),a=i(21),c=i.n(a),s=i(6),o=(i(30),i(8)),n=i(22),l=i(4);var u=function(){var e=Object(o.e)(),t=e.camera,i=e.gl;return Object(l.jsx)("orbitControls",{attach:"orbitControls",args:[t,i.domElement]})},j=i(25),d=i(0),m={cameraPos:new d.Vector3(6,0,7),target:new d.Vector3(0,0,0),shouldUpdate:!0,activeName:"Cube001_0",activeMesh:{}};var b=function(e){var t=Object(o.d)(j.a,e.path).scene;return m.activeMesh=t.getObjectByName(m.activeName),Object(l.jsx)("primitive",{object:t,position:e.position,scale:new Array(3).fill(e.scale),dispos:null})};var p=function(){return Object(o.c)((function(e){var t=e.camera,i=e.scene;m.shouldUpdate&&(t.position.lerp(m.cameraPos,.05),i.orbitControls.target.lerp(m.target,.05),i.orbitControls.update(),t.position.clone().sub(m.cameraPos).length()<.1&&(m.shouldUpdate=!1))})),null},O=i(7),h=i(9);var x=function(e){var t=e.setIndex,i=Object(r.useRef)(null),a={0:{cameraPos:[7,0,7],target:[0,0,0]},1:{cameraPos:[0,3,10],target:[1,-2,0]},2:{cameraPos:[-7,-1,7],target:[0,0,0]},3:{cameraPos:[-9,0,-2],target:[0,0,0]},4:{cameraPos:[-1,2,-4],target:[0,1,0]},5:{cameraPos:[6,1,-2],target:[1,0,0]}};return Object(l.jsx)("ul",{className:"cameraBtns",ref:i,children:["Consect","Dolor","Lorem","Sit amet","Adipisic","Corporis"].map((function(e,r){var c="";return 0===r&&(c="on"),Object(l.jsx)("li",{className:c,onClick:function(){return function(e){var r,c,s,o=i.current.querySelectorAll("li"),n=Object(h.a)(o);try{for(n.s();!(s=n.n()).done;)s.value.classList.remove("on")}catch(l){n.e(l)}finally{n.f()}o[e].classList.add("on"),(r=m.cameraPos).set.apply(r,Object(O.a)(a[e].cameraPos)),(c=m.target).set.apply(c,Object(O.a)(a[e].target)),m.shouldUpdate=!0,t(e)}(r)},children:e},r)}))})};var f=function(e){var t=e.index,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){i.current.querySelectorAll("article").forEach((function(e){var t,i=e.querySelector("h2"),r=i.innerText,a="",c=0,s=Object(h.a)(r);try{for(s.s();!(t=s.n()).done;){var o=t.value;a+="<span style='transition-delay: ".concat(.1*c++,"s'>").concat(o,"</span>")}}catch(n){s.e(n)}finally{s.f()}i.innerHTML=a}))}),[]),Object(r.useEffect)((function(){var e,r=i.current.querySelectorAll("article"),a=Object(h.a)(r);try{for(a.s();!(e=a.n()).done;){e.value.classList.remove("on")}}catch(c){a.e(c)}finally{a.f()}r[t].classList.add("on")}),[t]),Object(l.jsxs)("section",{className:"txt",ref:i,children:[Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Consect"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nihil totam minus, expedita debitis quas! Reiciendis distinctio in fugit molestiae."})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Dolor"}),Object(l.jsxs)("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit enim obcaecati. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Rem id saepe sapiente provident. Itaque dicta explicabo, minima assumenda corporis nemo placeat optio quam consectetur! Vel ad praesentium aspernatur doloremque quae maxime ipsum exercitationem magnam ipsam voluptas?"]})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Lorem"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi suscipit enim officiis porro, eligendi excepturi repudiandae corrupti molestiae."})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Sit amet"}),Object(l.jsxs)("p",{children:["Necessitatibus eos maxime eaque quaerat iusto est modi temporibus.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Aliquid quaerat accusamus amet blanditiis deserunt eaque, labore nobis tempore facere minus inventore totam quo nulla doloremque deleniti dolore qui officia consequatur corrupti. ",Object(l.jsx)("br",{}),"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quod!"]})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Adipisic"}),Object(l.jsxs)("p",{children:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"/Soluta deserunt quam impedit, sunt atque similique expedita accusamus omnis, pariatur debitis, perspiciatis adipisci exercitationem natus illum ratione neque id placeat voluptas sed minima odio sint."]})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:" Corporis"}),Object(l.jsxs)("p",{children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",Object(l.jsx)("br",{}),"Minima iste quo doloremque veritatis assumenda quam reiciendis! Et pariatur delectus dicta asperiores, iste, modi doloribus architecto rerum a omnis molestias."]})]})]})};var v=function(){var e=function(e){m.activeMesh&&(m.activeMesh.material.color=new d.Color(e.target.getAttribute("data-color")))},t=["#bdf2ee","#c2e699","#c9c0f5"];return Object(l.jsx)("ul",{className:"colorPicker",children:["transparent","#fcfc81","#ea9dff"].map((function(i,r){return Object(l.jsx)("li",{"data-color":i,style:{backgroundColor:t[r]},onClick:e},i)}))})};var g=function(){var e=Object(r.useRef)(null);return Object(o.c)((function(){e.current.rotation.x+=.03,e.current.rotation.y+=.03})),Object(l.jsxs)("mesh",{ref:e,children:[Object(l.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),Object(l.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,wireframe:!0,color:"#000",opacity:.5})]})};Object(o.b)({OrbitControls:n.a});var q=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("figure",{children:[Object(l.jsx)("h1",{children:"Three.js Car"}),Object(l.jsxs)(o.a,{shadowMap:!0,style:{background:"#cdcfd3"},camera:{position:[7,7,7]},children:[Object(l.jsx)(u,{}),Object(l.jsx)(p,{}),Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)(g,{}),children:Object(l.jsx)(b,{path:"/threejs-car/car/scene.gltf",position:[0,-1,4],scale:1})})]}),Object(l.jsx)(f,{index:i}),Object(l.jsx)(x,{setIndex:a}),Object(l.jsx)(v,{})]})};c.a.render(Object(l.jsx)(q,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f6849113.chunk.js.map