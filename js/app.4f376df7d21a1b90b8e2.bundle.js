(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,l)=>{const a=l(89),s=l(650),{lightningChart:i,PalettedFill:o,ColorRGBA:n,AxisTickStrategies:r,LUT:u,emptyFill:c,Themes:h}=a,v=i().Chart3D({}).setBoundingBox({x:.7,y:.5,z:1}).setTitle("Real-Time Airplane Temperature");v.getDefaultAxes().forEach((e=>e.setTickStrategy(r.Numeric,(e=>e.setMajorTickStyle((e=>e.setLabelFillStyle(c))).setMinorTickStyle((e=>e.setLabelFillStyle(c))))))),fetch(document.head.baseURI+"examples/assets/1502/air.obj").then((e=>e.text())).then((e=>{const t=new s.Mesh(e),l=v.addMeshModel().setScale(.0025).setModelGeometry({vertices:t.vertices,indices:t.indices,normals:t.vertexNormals}).setHighlightOnHover(!1).setName("Airplane"),a=new o({lookUpProperty:"value",lut:new u({units:"°C",interpolate:!0,steps:[{value:0,color:n(0,150,255)},{value:20,color:n(0,255,0)},{value:40,color:n(200,255,0)},{value:50,color:n(255,255,0)},{value:60,color:n(255,200,0)},{value:100,color:n(255,130,0)},{value:120,color:n(255,0,0)}]})});l.setFillStyle(a);const i=[{initValue:90,value:100,x:-.252,y:-.175,z:-.25},{initValue:90,value:100,x:.252,y:-.175,z:-.25},{initValue:110,value:100,x:-.52,y:-.145,z:-.07},{initValue:110,value:100,x:.52,y:-.145,z:-.07},{initValue:20,value:20,x:0,y:-.1,z:-1},{initValue:50,value:50,x:0,y:-.04,z:.97},{initValue:20,value:20,x:0,y:-.1,z:-.5},{initValue:20,value:20,x:0,y:-.1,z:0},{initValue:0,value:0,x:0,y:-.1,z:.5}];requestAnimationFrame((()=>{const e=[];l.setVertexValues((t=>{const l=[];for(let a=0;a<t.length;a+=1){const s=v.translateCoordinate(t[a],v.coordsWorld,v.coordsAxis),o=new Array(i.length).fill(0);let n=0;i.forEach(((e,t)=>{const l=e.x-s.x,a=e.y-s.y,i=e.z-s.z,r=Math.sqrt(l**2+a**2+i**2),u=0!==r?1/r**3:1;o[t]=u,n+=u})),e.push({sumOfWeights:n,sensorWeights:o});const r=i.reduce(((e,t,l)=>e+t.value*o[l]),0)/n||20;l.push(r)}return l}));const t=()=>{i.forEach(((e,t)=>{e.value=e.initValue+10*Math.sin(window.performance.now()/500)}));const a=[];l.setVertexValues((t=>{for(let l=0;l<t.length;l+=1){const{sumOfWeights:t,sensorWeights:s}=e[l],o=i.reduce(((e,t,l)=>e+t.value*s[l]),0)/t||20;a.push(o)}return a})),requestAnimationFrame(t)};t()})),v.addLegendBox().add(v)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);