(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profile.605bd09e.jpg"},,function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},function(e,t,a){var n={"./TheDevBlog.png":21,"./ThoughtAPI.png":22,"./TurqMelon.png":23,"./WeatherDash.png":24,"./galler3.png":25,"./waviii.png":26};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=20},function(e,t,a){e.exports=a.p+"static/media/TheDevBlog.f5c5e510.png"},function(e,t,a){e.exports=a.p+"static/media/ThoughtAPI.f525659f.png"},function(e,t,a){e.exports=a.p+"static/media/TurqMelon.496571dc.png"},function(e,t,a){e.exports=a.p+"static/media/WeatherDash.c75e631c.png"},function(e,t,a){e.exports=a.p+"static/media/galler3.f0cd9f40.png"},function(e,t,a){e.exports=a.p+"static/media/waviii.dc1c7f84.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(7),r=a.n(n),l=a(1),i=a.n(l),c=a(4),o=a(12),s=a(3),m=a.n(s),u=(a(19),["Matt Brassey","Software Developer","matt@brassey.io"]);var p=function(e){return i.a.createElement(m.a,null,i.a.createElement("header",{className:"flex-row space-between px-1"},i.a.createElement("div",{className:"scramble"},i.a.createElement(o.a,{texts:u,letterSpeed:5,nextLetterSpeed:100,pauseTime:2200})),e.children))};var d=function(){return i.a.createElement("footer",{className:"footer"},[{name:"fab fa-github",link:"https://github.com/MBrassey"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/mbrassey/"},{name:"far fa-envelope",link:"mailto:matt@brassey.io"}].map((function(e){return i.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.name}))})))};function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}var f=a(10),h=function(e){return i.a.createElement("div",null,i.a.createElement(f.a,{type:"cobweb",bg:!0,color:"#2d93ca"}),e.children)},E=a(5);var b=function(e){var t=e.project,n=t.name,r=t.repo,l=t.link,c=t.description;return i.a.createElement("div",{className:"project",key:n},i.a.createElement(E.LazyLoadImage,{src:a(20)("./".concat(n,".png")),alt:n,className:"project-bg"}),i.a.createElement("div",{className:"project-text"},i.a.createElement("h3",null,i.a.createElement("a",{href:l},n),"\xa0","\xa0",i.a.createElement("a",{href:r},i.a.createElement("i",{className:"fab fa-github"}))),i.a.createElement("p",null,c)))};var v=function(){var e=Object(l.useState)([{name:"galler3",description:"Single-page photography portfolio application that uses React state, props, Hooks, and reusable UI components",link:"https://mbrassey.github.io/galler3",repo:"https://github.com/MBrassey/galler3"},{name:"waviii",description:"Web3 Ethereum Wallet & ERC-20 Token Swap React Components Inside Social Media Dapp Concept",link:"https://waviii.herokuapp.com/admin/Wallet",repo:"https://github.com/MBrassey/waviii.io"},{name:"TurqMelon",description:"Image ranking & tipping platform written in ReactJS, powered by Solidity Smart Contracts & IPFS",link:"https://github.com/MBrassey/TurquoiseMelon",repo:"https://github.com/MBrassey/TurquoiseMelon"},{name:"WeatherDash",description:"Weather dashboard concept using OpenWeather API, ipinfo.io API & jQuery/JS/HTML/CSS",link:"https://mbrassey.github.io/OpenWeather-Dashboard",repo:"https://github.com/MBrassey/OpenWeather-Dashboard"},{name:"ThoughtAPI",description:"API for a social network web application where users can share their thoughts, react to friends\u2019 thoughts, and create a friend list",link:"https://thoughtstreamapi-mbrassey.herokuapp.com/api/users",repo:"https://github.com/MBrassey/ThoughtStreamAPI"},{name:"TheDevBlog",description:"Full stack CMS type blog application utilizing ORM with Sequelize/MySQL and adhering to the Model-View-Controller paradigm",link:"https://thedevblog-mbrassey.herokuapp.com",repo:"https://github.com/MBrassey/TheDevBlog"}]),t=Object(c.a)(e,1)[0];return i.a.createElement("div",null,i.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return i.a.createElement(b,{project:e,key:"project"+t})}))))},y=a(6),w=a(8);var k=function(){var e=Object(l.useState)({name:"",email:"",message:""}),t=Object(c.a)(e,2),a=t[0],n=t[1],r=a.name,o=a.email,s=a.message,u=Object(l.useState)(""),p=Object(c.a)(u,2),d=p[0],g=p[1];function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?g(""):g("".concat(e.target.name," is required.")):g("Your email is invalid.")}d||n(Object(w.a)(Object(w.a)({},a),{},Object(y.a)({},e.target.name,e.target.value)))}return i.a.createElement(m.a,null,i.a.createElement("div",{className:"contact"},i.a.createElement("section",null,i.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"Name:"),i.a.createElement("input",{type:"text",name:"name",defaultValue:r,onBlur:f})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"email"},"Email address:"),i.a.createElement("input",{type:"email",name:"email",defaultValue:o,onBlur:f})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"message"},"Message:"),i.a.createElement("textarea",{name:"message",rows:"5",defaultValue:s,onBlur:f})),d&&i.a.createElement("div",null,i.a.createElement("p",{className:"error-text"},d)),i.a.createElement("button",{type:"submit"},"Submit")))))};var N=function(){return i.a.createElement(m.a,null,i.a.createElement("section",{className:"my-5"},i.a.createElement("div",{className:"my-2"},i.a.createElement("br",null),i.a.createElement("div",{className:"resume-text"}," ","My past six years of expreience in the areas of:"," ",i.a.createElement("strong",null,"Git"),",",i.a.createElement("strong",null," Bash"),",",i.a.createElement("strong",null," Markdown"),",",i.a.createElement("strong",null," HTML5"),",",i.a.createElement("strong",null," CSS3"),", ",i.a.createElement("strong",null," JS[ES6]"),",",i.a.createElement("strong",null," Node"),", ",i.a.createElement("strong",null," MySQL"),",",i.a.createElement("strong",null," MongoDB"),", ",i.a.createElement("strong",null," Express"),",",i.a.createElement("strong",null," React"),", ",i.a.createElement("strong",null,"JSX")," &",i.a.createElement("strong",null," Solidity")," are documented and can be reviewed on my"," ",i.a.createElement("a",{href:"https://github.com/MBrassey"},"github")," profile. I recently obtained the"," ",i.a.createElement("strong",null,i.a.createElement("a",{href:"https://www.credential.net/44a73119-b770-4a10-901c-7aa6508d5c65"},"Certified Blockchain Architect"))," ","credential from the"," ",i.a.createElement("strong",null,i.a.createElement("a",{href:"https://www.blockchain-council.org"},"Blockchain Council")),", as well as a"," ",i.a.createElement("strong",null,"Full Stack Development Certification "),"from the ",i.a.createElement("strong",null,"University of Arizona")," for completing a 24 Week Intensive Coding Bootcamp. I'm currently open to and actively seeking work in the areas of front/back end web & blockchain development. My resume is provided below, along with a chart depicting my past week's coding activity and badges representing my areas of proficiency."," "),i.a.createElement("form",{action:"https://brassey.io/resume.pdf",method:"get",target:"_blank"},i.a.createElement("button",{type:"submit"},"Download My Resume")),i.a.createElement("div",{className:"CAcontainer"},i.a.createElement("div",{className:"CodingActivity"})),i.a.createElement("ul",{className:"dev-icons"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-html5"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-css3-alt"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-bootstrap"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-markdown"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-ethereum"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-js-square"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-react"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-node-js"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-npm"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-git"}))))))},S=a(11),x=a.n(S);var M=function(){return i.a.createElement(m.a,null,i.a.createElement("section",{className:"my-5"},i.a.createElement("div",{className:"my-2"},i.a.createElement("div",{className:"my-5 profileImg"},i.a.createElement(E.LazyLoadImage,{src:x.a,alt:"Matt's Profile Picture",style:{borderRadius:"3%",overflow:"visible",boxShadow:"0 12px 24px 0 rgba(0, 0, 0, 0.7)",height:"100%",width:"100%",marginTop:"9px",border:"solid 3px black"}})),i.a.createElement("div",{className:"about-text"},"I'm ",i.a.createElement("strong",null,"Matt Brassey")," - Full stack blockchain developer with SysOps & DevOps background. Known among staff for strong wit and attention to detail no matter the complexity of the project or severity of it\u2019s operations. Proven experience applying continuous integration within small group and large, corporate team settings. Strong ability to modularize large, complex project objectives into concise and manageable parts. Recently completed a 24-week bootcamp earning a certificate in full stack development from the University of Arizona. Intense interest in distributed systems, decentralized finance and blockchain technology. Keen technologist with an insatiable desire to learn, build, improve and collaborate on world changing platforms and applications."))))};var j=function(e){var t=e.currentPage;return i.a.createElement("section",null,i.a.createElement("h2",null,g(t.name)),i.a.createElement(h,null,function(){switch(t.name){case"about me":return i.a.createElement(M,null);case"portfolio":return i.a.createElement(m.a,null,i.a.createElement(v,null));case"contact":return i.a.createElement(k,null);case"resume":return i.a.createElement(N,null);default:return i.a.createElement(M,null)}}()))};var B=function(e){var t=e.pages,a=void 0===t?[]:t,n=e.setCurrentPage,r=e.currentPage;return Object(l.useEffect)((function(){document.title=g(r.name)}),[r]),i.a.createElement("nav",null,i.a.createElement("ul",{className:"flex-row"},a.map((function(e){return i.a.createElement("li",{className:"mx-2 ".concat(r.name===e.name&&"navActive"),key:e.name},i.a.createElement("span",{onClick:function(){return n(e)}},g(e.name)))}))))};var O=function(){var e=Object(l.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(c.a)(e,1)[0],a=Object(l.useState)(t[0]),n=Object(c.a)(a,2),r=n[0],o=n[1];return i.a.createElement("div",null,i.a.createElement(p,null,i.a.createElement(B,{pages:t,setCurrentPage:o,currentPage:r})),i.a.createElement("main",null,i.a.createElement(j,{currentPage:r})),i.a.createElement(m.a,null,i.a.createElement(d,null)))};a(27);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.f88d1279.chunk.js.map