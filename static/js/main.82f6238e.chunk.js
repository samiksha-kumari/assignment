(window.webpackJsonptable=window.webpackJsonptable||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(19),l=n.n(r),o=n(5),c=n(6),i=n(9),u=n(10),m=n(12),p=n(11),d=n(13),h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={users:[],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new XMLHttpRequest;e.open("GET","https://cors-anywhere.herokuapp.com/https://totalcloud-static.s3.amazonaws.com/intern.json"),e.onload=function(){var t=JSON.parse(e.responseText);this.setState({users:t}),console.log(t)}.bind(this),e.send()}},{key:"render",value:function(){var e=this;return console.log("render"),s.a.createElement("div",{class:"container"},s.a.createElement("h2",null,"Listed Users - ",this.state.users.length," "),s.a.createElement("table",{className:"table table-striped"},s.a.createElement("tr",null,s.a.createElement("th",null,"intern - assignment"),s.a.createElement("th",null),s.a.createElement("th",null),s.a.createElement("th",null,"Start Date"),s.a.createElement("th",null,"Due Date")),this.state.users.map((function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null,e.state.users.indexOf(t)),s.a.createElement("td",{width:"4%"},'put type="checkbox" name="name" />'),s.a.createElement("td",{width:"66%"},t.name),s.a.createElement("td",null,"".concat(t.start.split("/")[0],"/").concat(e.state.months[Number(t.start.split("/")[1])-1])),s.a.createElement("td",null,"".concat(t.end.split("/")[0],"/ ").concat(e.state.months[Number(t.end.split("/")[1])-1])))}))),s.a.createElement(o.b,{to:"/users"}))}}]),t}(s.a.Component),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={users:[]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new XMLHttpRequest;e.open("GET","https://cors-anywhere.herokuapp.com/https://totalcloud-static.s3.amazonaws.com/intern.json"),e.onload=function(){var t=JSON.parse(e.responseText);this.setState({users:t}),console.log(t)}.bind(this),e.send()}},{key:"render",value:function(){return console.log("render"),s.a.createElement("div",null,s.a.createElement("h2",null,"Listed Users- ",this.state.users.length),s.a.createElement("ol",null,this.state.users.map((function(e){return s.a.createElement("li",{key:e.id},e.name," --",e.start," --",e.end)}))),s.a.createElement(o.b,{to:"/list"}))}}]),t}(s.a.Component),b=n(22),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={users:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new XMLHttpRequest,t=this,n=["01","02","03","04","05","06","07","08","09"];e.open("GET","https://cors-anywhere.herokuapp.com/https://totalcloud-static.s3.amazonaws.com/intern.json"),e.send();var a=[];e.onload=function(){var s=JSON.parse(e.responseText),r=[[{type:"string",id:"id"},{type:"string",id:"name"},{type:"date",id:"Start"},{type:"date",id:"End"}]];s.map((function(e){var t,s;s=n.includes(e.end.split("/")[0])?e.end.split("/")[0][1]:e.end.split("/")[0],t=n.includes(e.start.split("/")[0])?e.start.split("/")[0][1]:e.start.split("/")[0],a.push(t,s),r.push(["".concat(e.id),e.name,new Date(2019,8,Number(t)),new Date(2019,8,Number(s))])})),console.log(a),t.setState({users:r})}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b.a,{width:"100vh",height:"100vh",chartType:"Timeline",loader:s.a.createElement("div",null,"load"),data:this.state.users,options:{timeline:{singleColor:"#E34625"},hAxis:{minValue:new Date(2019,7,31),maxValue:new Date(2019,9,1),format:"d"}},rootProps:{"data-testid":"6"}}))}}]),t}(s.a.Component);var f=function(){return s.a.createElement(o.a,null,s.a.createElement("div",null,s.a.createElement("h2",null,"Table"),s.a.createElement(o.b,{to:"/list"}," Userlist "),s.a.createElement(o.b,{to:"/users"}," Users "),s.a.createElement(o.b,{to:"/chart"}," Chart "),s.a.createElement(c.a,{path:"/users",component:h,exact:!0}),s.a.createElement(c.a,{path:"/list",component:E}),s.a.createElement(c.a,{path:"/chart",component:v})))};n(34);l.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.82f6238e.chunk.js.map