(this["webpackJsonpiot-client"]=this["webpackJsonpiot-client"]||[]).push([[0],{67:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(8),o=a.n(n),c=a(108),i=a(113),u=a(114),d=a(115),s=a(112),m=a(44),b=a(126),f=a(127),y=a(110),g=a(55),S=a.n(g),A=a(25),L=Object(c.a)((function(e){return{mainMenu:{marginTop:"3.25rem"},menuIcon:{marginRight:"2rem"},link:{textDecoration:"none",color:"black",margin:"0.25rem"}}}));function v(){var e=L(),t=r.a.useState(null),a=Object(m.a)(t,2),l=a[0],n=a[1],o=function(e){n(null)},c=function(){};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){n(e.currentTarget)}},r.a.createElement(S.a,{className:e.menuIcon})),r.a.createElement(b.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:o,className:e.mainMenu},r.a.createElement(f.a,{onClick:c},r.a.createElement(A.b,{className:e.link,to:"/",onClick:o},"Home")),r.a.createElement(f.a,{onClick:c},r.a.createElement(A.b,{className:e.link,to:"/about",onClick:o},"About")),r.a.createElement(f.a,{onClick:c},r.a.createElement("a",{onClick:o,className:e.link,target:"_blank",href:"https://github.com/wnortier",rel:"noopener noreferrer"},"Github"))))}var p=a(56);function h(){var e=Object(p.a)(["\n  a: hover {\n    color: #bdc0c3;\n  }\n"]);return h=function(){return e},e}var E=a(57).a.div(h()),k=Object(c.a)((function(e){return{github:{color:"#f3f3f3"}}}));var H=function(){var e=k();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement(y.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:e.github,href:"https://github.com/wnortier"},r.a.createElement("i",{className:"fab fa-github"})))))},D=Object(c.a)((function(e){return{title:{flexGrow:1},link:{color:"#f3f3f3",textDecoration:"none"}}}));function q(){var e=D(),t=function(e){var t=e.children,a=Object(s.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:a?4:0})};return r.a.createElement(t,null,r.a.createElement(i.a,{color:"primary"},r.a.createElement(u.a,null,r.a.createElement(v,null),r.a.createElement(d.a,{variant:"h5",className:e.title},r.a.createElement(A.b,{className:e.link,to:"/"},r.a.createElement("i",{className:"far fa-eye eyecolor"})," Slot Availability Checker")),r.a.createElement(H,null))))}var x={colors:{},LayoutStyles:{settingsBtn:{marginTop:"1rem"},flexboxSettings:{display:"flex",alignItems:"center",justifyContent:"center"},noOverflow:{overflow:"none"},gridItem:{margin:"1rem"},slider:{width:"33%",margin:"1rem",marginTop:"5rem"},wowzer:{backgroundColor:"green",color:"green"},tableHeader:{backgroundColor:"#2F4858",color:"#f3f3f3"},appHeight:{height:"100vh"},appBar:{marginTop:"10rem"},blank:{backgroundColor:"#f3f3f3"},table:{display:"flex",flexDirection:"row",alignItems:"center"},flexbox:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",marginTop:"10rem"},times:{marginTop:"3rem"},timeText:{margin:"0.2rem"},hidden:{display:"none"}}},C=a(125),T=a(61),F={common:{},primary:{main:"".concat("#2F4858")},secondary:{main:"".concat("#1C6E7D")},typography:{fontFamily:"Sans Serif"}},M=Object(T.a)({palette:F,themeName:"San Marino Razzmatazz Sugar Gliders"}),U=a(116),B=a(10),O=a(117),N=a(118),w=a(82),j=a(119),I=a(120),R=a(121),V=a(122),z=a(123),G=a(128),Y=Object(c.a)({table:{minWidth:650,width:"100%",height:"78vh"},red:{backgroundColor:"#cb4335"},flexbox:{display:"flex",flexDirection:"column",alignItems:"center"},cell:{textAlign:"center"}}),J=[{Date:"-",HoursAvailable:[]},{Date:"2016-05-18",HoursAvailable:["09:00 - 10:00",9,9,9,9,"FULL","FULL"]},{Date:"2016-05-19",HoursAvailable:["10:00 - 11:00",10,10,10,10,"FULL","FULL"]},{Date:"2016-05-20",HoursAvailable:["11:00 - 12:00",11,11,"FULL",11,"FULL",11]},{Date:"2016-05-21",HoursAvailable:["12:00 - 13:00",12,12,"FULL",12,"FULL",12]},{Date:"2016-05-23",HoursAvailable:["13:00 - 14:00",13,13,"FULL",13,13,"FULL"]},{Date:"2016-05-24",HoursAvailable:["14:00 - 15:00",14,14,14,"FULL",14,"FULL"]},{Date:"",HoursAvailable:["15:00 - 16:00","FULL",15,15,"FULL",15,15]},{Date:"",HoursAvailable:["16:00 - 17:00","FULL",16,16,"FULL",16,16]},{Date:"",HoursAvailable:["17:00 - 18:00",17,17,17,"FULL","FULL",17]}],W={availabilty:[9,10,14,15,16,17],availabilityData:[{Date:"-",HoursAvailable:[],Time:"09:00 - 10:00"},{Date:"2016-05-18",HoursAvailable:["09:00 - 10:00",9,9,9,9,"FULL","FULL"],Slots:[9,10,11,12,13,14,"x","x",17]},{Date:"2016-05-19",HoursAvailable:["10:00 - 11:00",10,10,10,10,"FULL","FULL"],Slots:[9,10,11,12,13,14,15,16,17]},{Date:"2016-05-20",HoursAvailable:["11:00 - 12:00",11,11,"FULL",11,"FULL",11],Slots:[9,10,"x","x","x",14,15,16,17]},{Date:"2016-05-21",HoursAvailable:["12:00 - 13:00",12,12,"FULL",12,"FULL",12],Slots:[9,10,11,12,13,"x","x","x","x"]},{Date:"2016-05-23",HoursAvailable:["13:00 - 14:00",13,13,"FULL",13,13,"FULL"],Slots:["x","x","x","x",13,14,15,16,"x"]},{Date:"2016-05-24",HoursAvailable:["14:00 - 15:00",14,14,14,"FULL",14,"FULL"],Slots:["x","x",11,12,"x","x",15,16,17]},{Date:"",HoursAvailable:["15:00 - 16:00","FULL",15,15,"FULL",15,15]},{Date:"",HoursAvailable:["16:00 - 17:00","FULL",16,16,"FULL",16,16]},{Date:"",HoursAvailable:["17:00 - 18:00",17,17,17,"FULL","FULL",17]}],jobLength:0,travelBuffer:0,timeSlotLength:0,timeRequired:0,sameDateBuffer:0,dates:[{date:"2016-05-17"},{date:"2016-05-18"},{date:"2016-05-19"},{date:"2016-05-20"},{date:"2016-05-21"},{date:"2016-05-23"},{date:"2016-05-24"}],dateSlots:[],currentDate:"2016-05-19T11:27:00",calcTimeRequired:function(e){return W.jobLength=e,W.timeRequired=W.travelBuffer+W.sameDateBuffer+ +W.jobLength,W.timeRequired},calcTimeslotLength:function(e,t,a,l){var r;return 1==a&&(r=W.availabilityData[1].Slots.filter((function(e){return"number"===typeof e}))),2==a&&(r=W.availabilityData[2].Slots.filter((function(e){return"number"===typeof e}))),3==a&&(r=W.availabilityData[3].Slots.filter((function(e){return"number"===typeof e}))),4==a&&(r=W.availabilityData[4].Slots.filter((function(e){return"number"===typeof e}))),5==a&&(r=W.availabilityData[5].Slots.filter((function(e){return"number"===typeof e}))),6==a&&(r=W.availabilityData[6].Slots.filter((function(e){return"number"===typeof e}))),7==a&&(r=W.availabilityData[7].Slots.filter((function(e){return"number"===typeof e}))),r.indexOf(e)==r.length-1?(13==e&&(W.timeSlotLength=5),14==e&&(W.timeSlotLength=4),15==e&&(W.timeSlotLength=3),16==e&&(W.timeSlotLength=2),17==e&&(W.timeSlotLength=1)):W.timeSlotLength=r[r.indexOf(e)+1]-r[r.indexOf(e)],W.timeSlotLength},formatDate:function(e){var t,a,l=new Date(e),r=l.getUTCFullYear();return t=1===String(l.getMonth()).length?"0".concat(l.getMonth()+1):l.getMonth(),a=1===String(l.getDate()).length?"0".concat(l.getDate()):l.getDate(),"".concat(r,"-").concat(t,"-").concat(a)}},_=W.dates.map((function(e){return e.date}));W.dateSlots=_;var P=function(e,t,a,l,r,n){if(0!=r)return 0!==r?(function(e,t,a,l){if(W.formatDate(a)==W.formatDate(W.currentDate))return W.sameDateBuffer=2,W.sameDateBuffer;W.sameDateBuffer=0}(0,0,a),function(e,t,a,l,r){+e==W.availabilityData[+r].Slots[0]||+e==W.availabilityData[+r].Slots[W.availabilityData[+r].Slots.length-1]?(W.travelBuffer=0,W.travelBuffer):W.indexOfSlot&&(W.travelBuffer=2,W.travelBuffer)}(e,0,0,0,r),function(e,t,a,l){var r=W.formatDate(a),n=l.map((function(e){return e.Date}));void 0==n||0==n.includes(r)||n.includes(r)}(0,0,a,l),function(e,t,a,l){var r=W.formatDate(a);void 0==l.find((function(e){return e.Date==r}))||0==l.includes(+e)||l.includes(+e)}(e,0,a,l),W.calcTimeslotLength(e,l,r,n),W.calcTimeRequired(t),W.timeSlotLength<W.timeRequired?"UNAVAILABLE":"AVAILABLE"):void 0};function K(){var e=Y();Object(l.useEffect)((function(){document.querySelectorAll("#cell")[0].innerHTML="Times";for(var e=1;e<10;e++){var t=document.querySelectorAll("#data".concat(e));t[0].style.backgroundColor="#2F4858",t[0].style.color="#f3f3f3",t[0].setAttribute("disabled","true"),t.forEach((function(e){"FULL"==e.innerHTML?(e.style.backgroundColor="#cb4335",e.setAttribute("disabled","true")):e.innerHTML.length<3&&(e.innerHTML="Available")}))}}),[]);var t=function(e){if(!e.target.innerHTML.includes("0")){var t=e.target.innerHTML,a=e.target.getAttribute("data-slot"),l=e.target.cellIndex,r=(e.target.id,W.dates[l].date),n=document.querySelector("#slider").innerText,o=[],c=W.availabilityData[l].Slots.indexOf(+a+1),i=W.availabilityData[l].Slots.indexOf(W.availabilityData[l].Slots[c]),u=W.availabilityData[l].Slots.filter((function(e){return"number"===typeof e})),d=u.indexOf(+a);"Selected"!=t&&"FULL"!=t&&(e.target.style.backgroundColor="lightgrey",e.target.innerHTML="Unavailable"),"UNAVAILABLE"==P(+a,n,r,o,l,t)&&0!=l&&(e.target.style.backgroundColor="lightgrey",e.target.innerHTML="Unavailable"),14==a&&2==n&&(document.querySelectorAll("#data".concat(+l+5))[1].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+5))[1].disabled="true",document.querySelectorAll("#data".concat(l+5))[1].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+d+1))[1].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d+1))[1].disabled="true",document.querySelectorAll("#data".concat(l+d+1))[1].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+d+2))[1].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d+2))[1].disabled="true",document.querySelectorAll("#data".concat(l+d+2))[1].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+d+3))[1].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d+3))[1].disabled="true",document.querySelectorAll("#data".concat(l+d+3))[1].innerHTML="Selected"),10==a&&2==n&&(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected",document.querySelectorAll("#data".concat(+l-2))[3].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l-2))[3].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l-2))[3].innerHTML="Selected",document.querySelectorAll("#data".concat(+l))[3].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l))[3].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l))[3].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+1))[3].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+1))[3].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+1))[3].innerHTML="Selected"),"13"==a&&"2"==n&&(document.querySelectorAll("#data".concat(+l+d-1))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d-1))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+d-1))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+2))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+2))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+2))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+4))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+4))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+4))[4].innerHTML="Selected"),"13"==a&&"3"==n&&(document.querySelectorAll("#data".concat(+l+d-1))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d-1))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+d-1))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+2))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+2))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+2))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+4))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+4))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+4))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+3))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+3))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+3))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+5))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+5))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+5))[4].innerHTML="Selected"),W.travelBuffer=2,"1"==n&&"1"==l?(J[1].HoursAvailable.unshift(),o.push(W.availabilityData[1].HoursAvailable),c=(u=W.availabilityData[1].Slots.filter((function(e){return"number"===typeof e}))).indexOf(+a)+1,i=u.indexOf(u[c])):"1"==n&&"2"==l?(W.travelBuffer=2,W.sameDateBuffer=2,J[1].HoursAvailable.unshift(),o.push(W.availabilityData[1].HoursAvailable),c=(u=W.availabilityData[2].Slots.filter((function(e){return"number"===typeof e}))).indexOf(+a)+1,i=u.indexOf(u[c])):"1"==n&&"3"==l?(W.travelBuffer=2,W.sameDateBuffer=2,J[3].HoursAvailable.unshift(),o.push(W.availabilityData[3].HoursAvailable),c=(u=W.availabilityData[2].Slots.filter((function(e){return"number"===typeof e}))).indexOf(+a)+1,i=u.indexOf(u[c])):"1"==n&&"4"==l?(W.travelBuffer=2,J[4].HoursAvailable.unshift(),o.push(W.availabilityData[4].HoursAvailable),(u=W.availabilityData[4].Slots.filter((function(e){return"number"===typeof e}))).push(1),c=u.indexOf(+a)+1,i=u.indexOf(u[c])):"1"==n&&"5"==l?(W.travelBuffer=0==d||-1==i?0:2,J[5].HoursAvailable.unshift(),o.push(W.availabilityData[5].HoursAvailable),c=(u=W.availabilityData[5].Slots.filter((function(e){return"number"===typeof e}))).indexOf(+a)+1,i=u.indexOf(u[c])):"1"==n&&"6"==l&&(W.travelBuffer=0==d||-1==i?0:2,J[6].HoursAvailable.unshift(),o.push(W.availabilityData[6].HoursAvailable),c=(u=W.availabilityData[6].Slots.filter((function(e){return"number"===typeof e}))).indexOf(+a)+1,i=u.indexOf(u[c])),"AVAILABLE"==P(+a,n,r,o,l,t)&&0!=l&&2!=W.sameDateBuffer&&"Available"==t&&"FULL"!=t&&"Selected"!=t&&(2!=W.sameDateBuffer&&0==d&&"Available"==t&&0!=l||2!=W.sameDateBuffer&&-1==i&&"Available"==t&&0!=l?(W.travelBuffer=0,e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected"):-1!=i&&0!=d&&"1"==W.jobLength&&"1"==l?(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected",document.querySelectorAll("#data".concat(+l+d+2))[1].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d+2))[1].disabled="true",document.querySelectorAll("#data".concat(l+d+2))[1].innerHTML="Selected",document.querySelectorAll("#data".concat(+l+d+1))[1].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d+1))[1].disabled="true",document.querySelectorAll("#data".concat(l+d+1))[1].innerHTML="Selected"):-1!=i&&0!=d&&"1"==W.jobLength&&"3"==l?(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected",document.querySelectorAll("#data".concat(+l-2))[3].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l-2))[3].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l-2))[3].innerHTML="Selected",document.querySelectorAll("#data".concat(+l))[3].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l))[3].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l))[3].innerHTML="Selected"):-1!=i&&0!=d&&"1"==W.jobLength&&"4"==l?(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected",document.querySelectorAll("#data".concat(+l+2))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+2))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+2))[4].innerHTML="Selected",document.querySelectorAll("#data".concat(+l))[4].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l))[4].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l))[4].innerHTML="Selected"):-1!=i&&0!=d&&"1"==W.jobLength&&"5"==l?(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected",document.querySelectorAll("#data".concat(+l+1))[5].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+1))[5].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+1))[5].innerHTML="Selected"):"1"==W.jobLength&&"5"==l?(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected"):"1"==W.jobLength&&"6"==l&&(e.target.style.backgroundColor="#229954",e.target.disabled="true",e.target.innerHTML="Selected",document.querySelectorAll("#data".concat(+l+d-2))[6].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l+d-2))[6].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l+d-2))[6].innerHTML="Selected",document.querySelectorAll("#data".concat(+l-3))[6].style.backgroundColor="#229954",document.querySelectorAll("#data".concat(l-3))[6].setAttribute("disabled","true"),document.querySelectorAll("#data".concat(l-3))[6].innerHTML="Selected"))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{"col-12":!0,style:x.LayoutStyles.flexboxSettings}),r.a.createElement(U.a,{item:!0,lg:4,style:x.LayoutStyles.slider},r.a.createElement(d.a,{id:"discrete-slider",gutterBottom:!0},"Job Length"),r.a.createElement(G.a,{defaultValue:1,getAriaValueText:function(e){return"".concat(e,"\xb0C")},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:5,id:"slider",onChange:function(e){}})),r.a.createElement(U.a,{item:!0,lg:4,style:x.LayoutStyles.slider},r.a.createElement(O.a,{style:x.LayoutStyles.settingsBtn,onClick:function(){return window.location.reload(!1)},variant:"contained",color:"primary"},"Reset Selections"))),r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{item:!0,lg:12},r.a.createElement(N.a,{component:w.a},r.a.createElement(j.a,{className:e.table,id:"slot-checker-table","aria-label":"simple table"},r.a.createElement(I.a,null,r.a.createElement(R.a,null,W.dates.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,style:x.LayoutStyles.tableHeader,align:"center",key:a,id:"cell"},String(new Date(t.date)).slice(0,10))})))),r.a.createElement(z.a,null,r.a.createElement(R.a,{onClick:function(e){t(e)}},J[1].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{component:"th",scope:"row",className:e.cell,"data-slot":t,key:a,id:"data1"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[2].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{component:"th",scope:"row",className:e.cell,"data-slot":t,key:a,id:"data2"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[3].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data3"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[4].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data4"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[5].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data5"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[6].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data6"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[7].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data7"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[8].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data8"},t)}))),r.a.createElement(R.a,{onClick:function(e){t(e)}},J[9].HoursAvailable.map((function(t,a){return r.a.createElement(V.a,{className:e.cell,component:"th",scope:"row","data-slot":t,key:a,id:"data9"},t)})))))))))}var Q=a(124),X=Object(c.a)((function(e){return{root:{flexGrow:1,marginTop:"5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},aboutPaper:{color:"#000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#2F4858",opacity:.9,border:"1px solid black",padding:"1rem",width:"45%",fontWeight:"lighter"},avail:{color:"#229954"},unavail:{color:"#cb4335"}}})),Z=function(){Object(l.useEffect)((function(){o({loading:!0}),setTimeout((function(){o({loading:!1})}),2e3)}),[]);var e=X(),t=Object(l.useState)({loading:!1}),a=Object(m.a)(t,2),n=a[0],o=a[1];return r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{className:e.root,lg:12,item:!0},n.loading?r.a.createElement(Q.a,null):r.a.createElement(w.a,{className:e.aboutPaper},r.a.createElement("h1",null,"Slot Availability Checker ",r.a.createElement("i",{className:"far fa-eye eyecolor"})),r.a.createElement("h3",null,"Write a JavaScript function that takes: ",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"a time slot (int)"),r.a.createElement("li",null,"a length of job (int)"),r.a.createElement("li",null,"a date ('YYYY-MM-DD') &"),r.a.createElement("li",null,"an array of availability e.g. [9, 10, 11, 12, 13, 14, 17]")),"The function should return whether a slot is"," ",r.a.createElement("span",{className:e.avail},"AVAILABLE"),",",r.a.createElement("span",{className:e.unavail}," UNAVAILABLE")," or FULL."))))},$=function(){var e=Object(c.a)((function(e){return{root:{backgroundColor:"rgb(47,72,88)",background:"linear-gradient(0deg, rgba(47,72,88,1) 0%, rgba(214,214,214,1) 100%)"}}}))();return r.a.createElement(C.a,{theme:M},r.a.createElement(A.a,null,r.a.createElement(U.a,{container:!0,style:x.LayoutStyles.appHeight,className:e.root},r.a.createElement(q,null),r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/",component:K}),r.a.createElement(B.a,{exact:!0,path:"/about",component:Z}),r.a.createElement(B.a,{exact:!0,path:"/about",component:Z}),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/wnortier",target:"_blank"},"Github")))))};o.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.380d4555.chunk.js.map