(this["webpackJsonpmusic-hh"]=this["webpackJsonpmusic-hh"]||[]).push([[0],{33:function(n,e,t){},41:function(n,e,t){},42:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var r,c,o,a,i,d,l,s,u,b,p,j,x,f,h=t(0),O=t.n(h),m=t(24),g=t.n(m),y=(t(33),t(9)),v=t(2),P=t(4),C=t(5),w=t(16),k=t(22),A=t(17),z=t(1),E=O.a.createContext(),N=function(n,e){switch(e.type){case"ADD_PLAYER":return[].concat(Object(A.a)(n),[{name:""}]);case"CHOP_PLAYER":return n.slice(0,-1);case"UPDATE_PLAYER_NAME":return[].concat(Object(A.a)(n.slice(0,e.payload.index)),[Object(k.a)(Object(k.a)({},n[e.payload.index]),{},{name:e.payload.name})],Object(A.a)(n.slice(e.payload.index+1)));default:return n}},L=function(n){var e=n.children,t=Object(h.useReducer)(N,[{name:""},{name:""}]),r=Object(w.a)(t,2),c=r[0],o=r[1],a=function(){c.length<12&&o({type:"ADD_PLAYER"})};return Object(z.jsx)(E.Provider,{value:{players:c,addPlayer:a,updatePlayerName:function(n,e){return o({type:"UPDATE_PLAYER_NAME",payload:{name:n,index:e}})},changeNumberOfPlayers:function(n){n.target.value>c.length?a():n.target.value<c.length&&o({type:"CHOP_PLAYER"})}},children:e})},_=C.a.h1(r||(r=Object(P.a)(["\n  color: white;\n  font-size: 44px;\n"]))),D=C.a.h2(c||(c=Object(P.a)(["\n  color: #edf6ff;\n  font-size: 24px;\n"]))),R=C.a.input(o||(o=Object(P.a)(["\n  padding: 5px 10px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 3px solid #edf6ff;\n  outline: none;\n"]))),F=C.a.button(a||(a=Object(P.a)(["\n  background-color: #e26933;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 10px 20px;\n  font-size: 24px;\n  outline: none;\n  &:hover {\n    background-color: #9a4722;\n  }\n"]))),Y=function(){var n=Object(h.useContext)(E),e=n.changeNumberOfPlayers,t=n.players;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(_,{children:"Welcome to ClearPoint Music!"}),Object(z.jsx)(D,{children:"Select number of players:"}),Object(z.jsx)(R,{type:"number",value:t.length,min:2,max:12,onChange:e}),Object(z.jsx)(y.b,{to:"/players",children:Object(z.jsx)(F,{children:"Next"})})]})},S=C.a.input(i||(i=Object(P.a)(["\n  margin: 8px 0;\n  padding: 5px 10px;\n  width: 300px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 3px solid #edf6ff;\n  outline: none;\n"]))),M=C.a.button(d||(d=Object(P.a)(["\n  border: 3px solid #edf6ff;\n  color: #edf6ff;\n  border-radius: 50%;\n  background-color: transparent;\n  font-size: 24px;\n  outline: none;\n  cursor: pointer;\n  &:hover {\n    color: #ccd6e0;\n    border: 3px solid #ccd6e0;\n  }\n"]))),T=C.a.button(l||(l=Object(P.a)(["\n  background-color: #e26933;\n  margin: 10px;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 10px 20px;\n  font-size: 24px;\n  outline: none;\n  &:hover {\n    background-color: #9a4722;\n  }\n"]))),B=function(){var n=Object(h.useContext)(E),e=n.players,t=n.updatePlayerName,r=n.addPlayer,c=e.length<12,o=e.every((function(n){return n.name}));return Object(z.jsxs)(z.Fragment,{children:[o?Object(z.jsx)(y.b,{to:"/scoreboard",children:Object(z.jsx)(T,{children:"Start!"})}):Object(z.jsx)("h2",{style:{color:"white"},children:"Give each player a name:"}),e.map((function(n,e){return Object(z.jsx)(S,{placeholder:"Name of Player ".concat(e+1),value:n.name,onChange:function(n){return t(n.target.value,e)}},e)})),c&&Object(z.jsx)(M,{onClick:r,numPlayers:e.length,children:"+"})]})},H=C.a.div(s||(s=Object(P.a)(["\n  color: white;\n  cursor: pointer;\n  user-select: none;\n"]))),I=C.a.div(u||(u=Object(P.a)(["\n  font-size: 96px;\n  font-weight: 400;\n"]))),J=C.a.div(b||(b=Object(P.a)(["\n  font-size: 36px;\n  margin-bottom: 10px;\n"]))),U=C.a.div(p||(p=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n\n  & > button {\n    margin: 0 5px;\n  }\n"]))),G=C.a.button(j||(j=Object(P.a)(["\n  border: 3px solid #edf6ff;\n  color: #edf6ff;\n  border-radius: 50%;\n  background-color: transparent;\n  font-size: 36px;\n  padding: 0 8px 5px 8px;\n  outline: none;\n  cursor: pointer;\n  &:hover {\n    color: #ccd6e0;\n    border: 3px solid #ccd6e0;\n  }\n  line-height: 24px;\n"]))),W=C.a.button(x||(x=Object(P.a)(["\n  border: 3px solid #edf6ff;\n  color: #edf6ff;\n  border-radius: 50%;\n  background-color: transparent;\n  font-size: 24px;\n  outline: none;\n  cursor: pointer;\n  &:hover {\n    color: #ccd6e0;\n    border: 3px solid #ccd6e0;\n  }\n"]))),q=function(n){var e=n.name,t=Object(h.useState)(0),r=Object(w.a)(t,2),c=r[0],o=r[1];return Object(z.jsxs)(H,{children:[Object(z.jsx)(I,{onClick:function(){return o(c+1)},children:c}),Object(z.jsx)(J,{onClick:function(){return o(c+1)},children:e}),Object(z.jsxs)(U,{children:[Object(z.jsx)(W,{onClick:function(){return o(c+1)},children:"+"}),Object(z.jsxs)(G,{onClick:function(){c>0&&o(c-1)},children:[" ","-"," "]})]})]})},K=C.a.div(f||(f=Object(P.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: space-around;\n  width: 100vw;\n\n  & > div {\n    width: ",";\n    margin: 20px 0;\n  }\n"])),(function(n){return n.numPlayers<5?"50%":n.numPlayers<10?"33%":"25%"})),Q=function(){var n=Object(h.useContext)(E).players;return Object(z.jsx)(K,{numPlayers:n.length,children:n.map((function(n){return Object(z.jsx)(q,{name:n.name})}))})},V=(t(41),t(42),function(){return Object(z.jsx)("div",{className:"App",children:Object(z.jsx)(L,{children:Object(z.jsx)(y.a,{children:Object(z.jsxs)(v.c,{children:[Object(z.jsx)(v.a,{path:"/",exact:!0,children:Object(z.jsx)(Y,{})}),Object(z.jsx)(v.a,{path:"/players",children:Object(z.jsx)(B,{})}),Object(z.jsx)(v.a,{path:"/scoreboard",children:Object(z.jsx)(Q,{})})]})})})})}),X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))};g.a.render(Object(z.jsx)(O.a.StrictMode,{children:Object(z.jsx)(V,{})}),document.getElementById("root")),X()}},[[43,1,2]]]);
//# sourceMappingURL=main.60c0a24f.chunk.js.map