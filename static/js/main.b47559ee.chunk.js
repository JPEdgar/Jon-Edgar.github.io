(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{20:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(9),c=a.n(i),o=a(14),r=a(3),l=a(8),d=a(11),b=a(2),u=10,j=10,h=30,p=.75,m=1,O=2,y=3,f=3,g=a(0),x=Object(n.createContext)(),S={GRID_ROWS_SET:"grid-rows-set",GRID_COLS_SET:"grid-cols-set",CELL_SIZE:"cell-size",DRAW_WALL:"draw-wall",TOGGLE_START:"toggle-start",TOGGLE_END:"toggle-end",SET_START:"set-start",SET_END:"set-end",RESET:"reset",DISABLE_UI:"disable-ui",START_ANIM:"start-animation",SEARCHED_NODES:"searched-nodes",START_SEARCH_ANIMATIONS:"start-search-animation",LUCKY_NODE:"lucky-node",ANIMATION_DELAY:"animation-delay",NO_END:"no-end"},E={numRows:u,numCols:j,cellSize:h,stroke:p,startPos:[m,O],endPos:[y,f],setStart:!1,setEnd:!1,setDrawWall:!1,disableUI:!1,startAnim:!1,animationDelay:25,searchedNodes:[],startSearchedAnimation:!1,noEnd:!1,luckyNode:[]};function N(e,t){switch(t.type){case S.BUILD_GRID:return{};case S.GRID_ROWS_SET:return Object(b.a)(Object(b.a)({},e),{},{numRows:parseInt(t.payload)});case S.GRID_COLS_SET:return Object(b.a)(Object(b.a)({},e),{},{numCols:parseInt(t.payload)});case S.CELL_SIZE:return Object(b.a)(Object(b.a)({},e),{},{cellSize:parseInt(t.payload),stroke:.025*parseInt(t.payload)});case S.SET_START:return Object(b.a)(Object(b.a)({},e),{},{startPos:Object(d.a)(t.payload)});case S.TOGGLE_START:return Object(b.a)(Object(b.a)({},e),{},{setStart:t.payload});case S.SET_END:return Object(b.a)(Object(b.a)({},e),{},{endPos:Object(d.a)(t.payload)});case S.TOGGLE_END:return Object(b.a)(Object(b.a)({},e),{},{setEnd:t.payload});case S.DRAW_WALL:return Object(b.a)(Object(b.a)({},e),{},{setDrawWall:t.payload});case S.RESET:return Object(b.a)(Object(b.a)({},e),{},{numRows:u,numCols:j,cellSize:h,stroke:p,startPos:[m,O],endPos:[y,f],setStart:!1,setEnd:!1,setDrawWall:!1,disableUI:!1,startAnim:!1,animationDelay:25,searchedNodes:[],startSearchedAnimation:!1,noEnd:!1,luckyNode:[]});case S.DISABLE_UI:return Object(b.a)(Object(b.a)({},e),{},{disableUI:t.payload});case S.START_ANIM:return Object(b.a)(Object(b.a)({},e),{},{startAnim:t.payload});case S.SEARCHED_NODES:return Object(b.a)(Object(b.a)({},e),{},{searchedNodes:Object(d.a)(e.searchedNodes).concat(t.payload)});case S.START_SEARCH_ANIMATIONS:return Object(b.a)(Object(b.a)({},e),{},{startSearchedAnimation:t.payload});case S.LUCKY_NODE:return Object(b.a)(Object(b.a)({},e),{},{luckyNode:t.payload});case S.ANIMATION_DELAY:return Object(b.a)(Object(b.a)({},e),{},{animationDelay:25*t.payload});case S.NO_END:return Object(b.a)(Object(b.a)({},e),{},{noEnd:t.payload});default:return e}}function v(e){var t=Object(n.useReducer)(N,E),a=Object(l.a)(t,2),s=a[0],i=a[1];return Object(g.jsx)(x.Provider,{value:[s,i],children:e.children})}function A(e){var t,a=e.id,s=e.label,i=e.min,c=e.max,o=e.step,r=e.enable,d=Object(n.useContext)(x),b=Object(l.a)(d,2),u=b[0],j=b[1],h=!1,p="";return"Rows"===s?t=u.numRows:"Cols"===s?t=u.numCols:"Size"===s?t=u.cellSize:"Animation Speed"===s&&(h=!0,t=u.animationDelay/25,25===u.animationDelay?p="Fast animation":50===u.animationDelay?p="Medium animation":75===u.animationDelay&&(p="Slow animation")),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{className:"slider",disabled:r,hidden:r,id:"slider".concat(a),type:"range",min:i,max:c,value:t,step:o,onChange:function(e){"Rows"===s?j({type:S.GRID_ROWS_SET,payload:e.target.value}):"Cols"===s?j({type:S.GRID_COLS_SET,payload:e.target.value}):"Size"===s?j({type:S.CELL_SIZE,payload:e.target.value}):"Animation Speed"===s&&j({type:S.ANIMATION_DELAY,payload:e.target.value})}}),Object(g.jsx)("label",{htmlFor:"slider".concat(a),hidden:r,style:{fontSize:"1rem"},children:h?" ".concat(p):" ".concat(t," ").concat(s)})]})})}a(20);function w(e){for(var t=[],a=0;a<e.numRows;a++){t.push([]);for(var n=0;n<e.numCols;n++)t[a].push(s(a,n))}function s(t,a){var n,s="grid",i="";return e.startPos[1]===t&&e.startPos[0]===a?(i=s.concat(" startNode"),n=!0):e.endPos[1]===t&&e.endPos[0]===a?(i=s.concat(" endNode"),n=!0):(i=s.concat(" unvisitedNode"),n=!1),Object(g.jsx)("div",{id:"".concat(a,", ").concat(t),"x-loc":a,"y-loc":t,"was-visited":n.toString(),className:i,style:{height:e.cellSize,width:e.cellSize,border:"".concat(e.stroke,"px solid red")}},"".concat(a,", ").concat(t))}return t}function I(e,t){var a=[],n=!0,s=!1,i=[];return[[0,-1],[1,0],[0,1],[-1,0]].forEach((function(c){var o=c.map((function(t,a){return t+e[a]}));o[1]<0||o[0]>=t.numCols||o[1]>=t.numRows||o[0]<0||n&&function(t){var c=document.getElementById("".concat(t[0],", ").concat(t[1]));c.classList.contains("startNode")||(c.classList.contains("endNode")?(n=!1,s=!0,i=t,c.setAttribute("parent-node","".concat(e[0],", ").concat(e[1]))):"true"===c.getAttribute("was-visited")||c.classList.contains("wallNode")||(c.setAttribute("was-visited","true"),c.setAttribute("parent-node","".concat(e[0],", ").concat(e[1])),a.push(t)))}(o)})),[a,n,s,i]}function T(){var e=Object(n.useContext)(x),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(w(a)),o=Object(l.a)(i,2),r=o[0],b=o[1],u=[],j=!1,h=[];function p(){var e=!1;if(h.length<=0&&!j?(u=Object(d.a)(a.startPos),j=!0):h.length>0?u=h.shift():(s({type:S.NO_END,payload:!0}),j=!1),u.length>0){var t=I(u,a),n=Object(l.a)(t,4),i=n[0],c=n[1],o=n[2],r=n[3];o&&(e=o,s({type:S.LUCKY_NODE,payload:r}),j=!1),c?(h=h.concat(i),s({type:S.SEARCHED_NODES,payload:i})):(h=i,s({type:S.SEARCHED_NODES,payload:i}))}e&&s({type:S.START_SEARCH_ANIMATIONS,payload:!0})}Object(n.useEffect)((function(){b(w(a))}),[a.numRows,a.numCols,a.startPos,a.endPos,a.cellSize]),Object(n.useEffect)((function(){a.startSearchedAnimation&&function(){var e=Object(d.a)(a.searchedNodes),t=0,n=setInterval((function(){if(t<a.searchedNodes.length){var i=e.shift(),o=document.getElementById("".concat(i[0],", ").concat(i[1]));c.a.findDOMNode(o).classList.add("visitedNode")}else s({type:S.START_ANIM,payload:!0}),clearInterval(n);t++}),a.animationDelay)}()}),[a.startSearchedAnimation]),Object(n.useEffect)((function(){if(a.startAnim){var e=function(){var e=["".concat(a.luckyNode[0],", ").concat(a.luckyNode[1])],t=!0,n=a.startPos[0]+", "+a.startPos[1];for(;t;){var s=e.slice(-1);if(s[0]==n)t=!1;else{var i=document.getElementById(s);i&&e.push(i.getAttribute("parent-node"))}}return e}();setTimeout((function(){!function(e){var t=e.length,n=a.startPos[0]+", "+a.startPos[1],s=setInterval((function(){if(t>0){t--;var a=e.pop();if(a!=n){var s=document.getElementById(a),i=c.a.findDOMNode(s).classList;i.contains("endNode")||i.contains("startNode")||i.add("pathNode")}}}),a.animationDelay)}(e)}),a.animationDelay)}}),[a.startAnim]);var m=Object(n.useState)(!1),O=Object(l.a)(m,2),y=O[0],f=O[1];Object(n.useEffect)((function(){var e=function(e){2!==e.button&&setTimeout((function(){return f(!1)}),10)};return document.addEventListener("mouseup",e),function(){document.removeEventListener("mouseup",e)}}),[]);var E=function(e){if(!a.setStart&&!a.setEnd){var t=document.getElementById(e.target.id),n=c.a.findDOMNode(t).classList;2!==e.button&&f(!0);var i=!1;n.contains("wallNode")?s({type:S.DRAW_WALL,payload:!1}):(s({type:S.DRAW_WALL,payload:!0}),i=!0),T(n,i)}},N=function(e){if(!a.setStart&&!a.setEnd&&2!==e.button&&y){var t=document.getElementById(e.target.id);T(c.a.findDOMNode(t).classList)}},v=function(e){2!==e.button&&(f(!1),window.getSelection&&window.getSelection().removeAllRanges())};function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.contains("startNode")||e.contains("endNode")||(null!=t?t?e.add("wallNode"):e.remove("wallNode"):a.setDrawWall&&!e.contains("wallNode")?e.add("wallNode"):!a.setDrawWall&&e.contains("wallNode")&&e.remove("wallNode"))}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("section",{style:{display:"flex"},children:[Object(g.jsxs)("div",{style:{height:"80px",width:"275px"},children:[Object(g.jsx)("p",{disabled:!a.noEnd,hidden:!a.noEnd,style:{color:"red"},children:"No path found."}),Object(g.jsx)("p",{disabled:!a.noEnd,hidden:!a.noEnd,children:"Make sure there is a start and end node on the grid, and those nodes are not sealed off by walls."}),Object(g.jsx)(A,{enable:a.disableUI,id:1,label:"Rows",min:5,max:30,step:1,value:a.numRows,callback:a.numRows}),Object(g.jsx)(A,{enable:a.disableUI,id:2,label:"Cols",min:5,max:30,step:1,value:a.numCols,callback:a.numCols}),Object(g.jsx)(A,{enable:a.disableUI,id:3,label:"Size",min:20,max:40,step:1,value:a.cellSize,callback:a.cellSize}),Object(g.jsx)(A,{enable:a.disableUI,id:4,label:"Animation Speed",min:1,max:3,step:1,value:a.animationDelay,callback:a.animationDelay})]}),Object(g.jsx)("button",{disabled:a.disableUI,hidden:a.disableUI,style:{height:"40px",width:"100px",marginLeft:"10px",backgroundColor:a.setStart?"rgba(255, 0, 0, 0.50)":""},onClick:function(){return s({type:S.TOGGLE_START,payload:!a.setStart})},children:"Set Start"}),Object(g.jsx)("button",{disabled:a.disableUI,hidden:a.disableUI,style:{height:"40px",width:"100px",marginLeft:"10px",backgroundColor:a.setEnd?"rgba(0, 0, 255, 0.5)":""},onClick:function(){return s({type:S.TOGGLE_END,payload:!a.setEnd})},children:"Set End"}),Object(g.jsx)("button",{disabled:a.disableUI,hidden:a.disableUI,onClick:function(){return function(){s({type:S.DISABLE_UI,payload:!0});do{p()}while(j)}()},style:{height:"40px",width:"100px",marginLeft:"10px"},children:"Get Path"}),Object(g.jsx)("button",{disabled:!a.disableUI,hidden:!a.disableUI,onClick:function(){return console.log(a.locatedEnd),s({type:S.RESET}),b([]),u=[],j=!1,void(h=[])},style:{height:"40px",width:"100px",marginLeft:"10px"},children:"Reset"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{onClick:function(e){return function(e){var t=[parseInt(e.target.getAttribute("x-loc")),parseInt(e.target.getAttribute("y-loc"))];a.setStart?(s({type:S.SET_START,payload:t}),s({type:S.TOGGLE_START,payload:!1})):a.setEnd&&(s({type:S.SET_END,payload:t}),s({type:S.TOGGLE_END,payload:!1}))}(e)},style:{display:"flex",flexDirection:"column"},children:r.map((function(e){return Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:e.map((function(e){return Object(g.jsx)("div",{onMouseDown:E,onMouseEnter:N,onMouseUp:v,children:e})}))})}))})]})}function D(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"This project is my take on Dijkstra's algorithm. Beyond the general explanation of what it is, I did all of this by thinking about how to do it."}),Object(g.jsxs)("p",{children:["This project was inspired by"," ",Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://clementmihailescu.github.io/Pathfinding-Visualizer/",children:"Clement Mihailescu's"})," ","page."]}),Object(g.jsx)("p",{children:'To use: Left-click and drag to create/remove walls.  Use the sliders to adjust the height/width/scale of the grid, and click on the "Set Start" or "Set End" button then click on the grid to re-position the start/end node. Click "Get Path" to initiate the path finding algorithm.'}),Object(g.jsx)("hr",{style:{margin:"10px 0px"}}),Object(g.jsx)(v,{children:Object(g.jsx)(T,{})})]})}function _(){var e=Object(n.useState)("Pathing"),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{style:{width:"150px"},onClick:function(){s("Pathing")},children:"Pathing Algoritm"}),Object(g.jsx)("h3",{className:"subjectTitle",children:a}),function(){if("Pathing"===a)return Object(g.jsx)(D,{})}()]})}function R(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"subjectTitle",children:"Projects"}),Object(g.jsx)("p",{children:"JPEdgar.com (in progress)"}),Object(g.jsx)("p",{children:"This project is my author website and was designed initially with templates from webs.com, but I've been working on redesigning this project from scratch."}),Object(g.jsx)("p",{children:"This project utilizes front-end and back-end development with authentication for blog control."}),Object(g.jsx)("p",{children:"Technologies used: React written in Javascript, React Router, React Bootstrap, Bootstrap Social, JSON server, font-awesome, editor.js, and Firebase."}),Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/JPEdgar/JPEdgar.com.git",className:"fab fa-github",style:{fontSize:"1.2rem"},children:"GitHub"})]})}function L(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"subjectTitle",children:"About me"}),Object(g.jsx)("p",{children:"I'm a self-taught programmer with a bachelor's degree in entertainment and game design. When the economy receded in 2008, I started my own company focused on mobile game design and prototype development using Unity and JavaScript. Unfortunately, I wasn't able to secure any artists, and the company went out of business before releasing any titles."}),Object(g.jsx)("p",{children:"With the closure of my company, I went on a programming hiatus. I picked up programming once more in August 2020, relearning best practices and getting back into the mindset of a once-aspiring programmer/developer."}),Object(g.jsx)("p",{children:"My pastime includes (but not limited to) writing novels. I'm a published author of multiple books, and I'm building my website for professional use."}),Object(g.jsx)("p",{children:"Primary Language(s): JavaScript, HTML/CSS/SCSS"}),Object(g.jsx)("p",{children:"Technologies/Libraries: React, Unity"}),Object(g.jsx)("p",{children:"React Libraries: Router, Font-Awesome, Express, Axios"}),Object(g.jsx)("p",{children:"React Frameworks: Bootstrap, Bootstrap-Social, JSON Server"})]})}a(27),a(28);function C(){return Object(g.jsxs)("div",{className:"main",children:[Object(g.jsxs)("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100px"},children:[Object(g.jsx)("div",{className:"header myName",children:"Jonathon Edgar"}),Object(g.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/JPEdgar/",className:"fab fa-github header icon",children:[" ","GitHub"]})]}),Object(g.jsxs)(o.a,{children:[Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{className:"nav",to:"/",children:"Algorithms"})}),Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{className:"nav",to:"/projects",children:"Projects"})}),Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{className:"nav",to:"/about",children:"About"})})]})}),Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{exact:!0,path:"/",children:Object(g.jsx)(_,{})}),Object(g.jsx)(r.a,{path:"/projects",children:Object(g.jsx)(R,{})}),Object(g.jsx)(r.a,{path:"/about",children:Object(g.jsx)(L,{})})]})]})]})}c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b47559ee.chunk.js.map