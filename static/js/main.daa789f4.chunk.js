(this["webpackJsonpmy-blog1"]=this["webpackJsonpmy-blog1"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),c=a.n(s),r=(a(92),a(161)),l=a(20),o=(a(93),a(19)),u=a(13),d=a(156),m=a(157),j=a(159),b=a(174),p=a(55),h=a(155),x=a(158),g=a(110),O=a(148),v=a(2),f=function(){var e=Object(o.b)().loginWithRedirect;return Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{onClick:function(){return e()},children:"Login"})})},y=function(){var e=Object(o.b)().logout;return Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{onClick:function(){return e()},children:"Log out"})})},C=a(30),N=a(172),w=a(151),A=a(153),F=a(152),S=a(154),k=a(77),q=a.n(k),L=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],i=t[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N.a,{anchor:"left",onClose:function(){return i(!1)},open:a,children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(F.a,{children:Object(v.jsx)(A.a,{children:Object(v.jsx)(S.a,{children:Object(v.jsx)(l.b,{to:"/",children:"Home"})})})}),Object(v.jsx)(F.a,{divider:!0,button:!0,children:Object(v.jsx)(A.a,{children:Object(v.jsx)(S.a,{children:Object(v.jsx)(l.b,{to:"./Articles",children:"Article"})})})})]})}),Object(v.jsx)(h.a,{onClick:function(){return i(!a)},color:"default",children:Object(v.jsx)(q.a,{})})]})},B=function(){var e=Object(o.b)(),t=e.user;return e.isAuthenticated&&Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{alt:t.name,src:t.picture})})},M=Object(g.a)((function(e){return{title:{flexGrow:1,textAlign:"center",fontFamily:"-apple-system"},link:{textDecoration:"none",padding:"10px",color:"#696969"},nav1:{background:"#FFE4E1"}}}));function T(){var e=M(),t=Object(u.a)(),a=Object(d.a)(t.breakpoints.down("768"));return Object(o.b)().isLoading?Object(v.jsx)(m.a,{}):Object(v.jsx)(i.a.Fragment,{children:Object(v.jsx)(x.a,{className:e.nav1,children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(l.c,{exact:!0,to:"/my-blog1",children:Object(v.jsx)(b.a,{alt:"ReySharp",src:"https://image.pngaaa.com/930/2507930-middle.png"})}),a?Object(v.jsx)(L,{}):Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(p.a,{variant:"h6",className:e.title,children:[Object(v.jsx)(l.c,{exact:!0,activeStyle:{fontWeight:"bold",color:"#61dafb"},className:"linkMenu",to:"/my-blog1",children:"Home"}),Object(v.jsx)(l.c,{exact:!0,activeStyle:{fontWeight:"bold",color:"#61dafb"},className:"linkMenu",to:"./Articles",children:"Article"})]})}),Object(v.jsxs)("div",{className:a&&"float-left",children:[Object(v.jsx)(h.a,{children:Object(v.jsx)(l.c,{exact:!0,activeStyle:{fontWeight:"bold",color:"#61dafb"},to:"./Profile",children:Object(v.jsx)(B,{})})}),Object(v.jsx)(h.a,{children:function(){var e=Object(o.b)().isAuthenticated;return Object(v.jsx)(v.Fragment,{children:e?Object(v.jsx)(y,{}):Object(v.jsx)(f,{})})}()})]})]})})})}var P=a(11),D=a(160),E=a(162),W=a(163),I=a(164),J=a(43),z=Object(D.a)((function(){return{root:{maxWidth:"auto"},media:{height:580},title:{fontFamily:"-apple-system",marginTop:"20px"},line:{color:"#FFE4E1",fontFamily:"-apple-system"}}})),Q=function(e){var t=parseInt(e.match.params.id,10),a=z();return Object(v.jsx)(r.a,{className:"wow fadeIn",children:J.map((function(e,n){if(e.id===t)return Object(v.jsx)("div",{className:a.root,children:Object(v.jsxs)(E.a,{children:[Object(v.jsxs)(W.a,{children:[Object(v.jsx)(p.a,{className:a.title,gutterBottom:!0,variant:"h2",component:"h2",children:e.title}),Object(v.jsx)(p.a,{className:a.line,variant:"body2",component:"p",children:e.date})]}),Object(v.jsx)(I.a,{className:a.media,image:e.image,title:e.imageTitle}),Object(v.jsx)(p.a,{variant:"h3",component:"p",children:e.description})]})})}))})},R=a(166),G=a(168),H=a(170),U=a(165),Y=a(173),V=Object(D.a)({card:{display:"flex",background:"#424242"},cardDetails:{flex:1},cardMedia:{width:160},root:{maxWidth:345}}),_=function(e){var t=e.post;e.props;var a,n=V(),s=t.id,c=t.title;return Object(v.jsx)(i.a.Fragment,{children:Object(v.jsx)(E.a,{children:Object(v.jsxs)(U.a,{className:n.card,children:[Object(v.jsx)("div",{className:n.cardDetails,children:Object(v.jsx)(W.a,{children:Object(v.jsxs)(l.b,{exact:!0,to:"/my-blog1/Articles-detail/"+s+"/"+(a=c,(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a.toLowerCase()).replace(/(\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5)/g,"a")).replace(/(\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5)/g,"e")).replace(/(\xec|\xed|\u1ecb|\u1ec9|\u0129)/g,"i")).replace(/(\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1)/g,"o")).replace(/(\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef)/g,"u")).replace(/(\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9)/g,"y")).replace(/(\u0111)/g,"d")).replace(/([^0-9a-z-\s])/g,"")).replace(/(\s+)/g,"-")).replace(/^-+/g,"")).replace(/-+$/g,""))+".html"),style:{fontSize:"20px",textDecoration:"none",color:"white"},children:[Object(v.jsx)(p.a,{variant:"h5",children:t.title}),Object(v.jsx)(p.a,{variant:"subtitle1",children:t.date}),Object(v.jsx)(p.a,{variant:"subtitle1",children:t.description}),Object(v.jsx)(p.a,{variant:"subtitle1",style:{color:"skyblue"},children:"Continue reading..."}),Object(v.jsx)(I.a,{className:n.Ca,image:"https://anhdephd.com/wp-content/uploads/2017/07/hinh-nen-thien-nhien-sapa.jpg",title:"Contemplative Reptile"})]})})}),Object(v.jsx)(Y.a,{xsDown:!0,children:Object(v.jsx)(I.a,{className:n.cardMedia,image:t.image,title:t.imageTitle})})]})})})},X=a(167),Z=a(81),K=Object(D.a)((function(e){return{sidebarSection:{marginTop:e.spacing(3)},sidebarAboutBox:{padding:e.spacing(2)}}})),$=function(e){var t=K(),a=e.title,n=e.description,i=e.social;return Object(v.jsxs)(R.a,{children:[Object(v.jsxs)(Z.a,{elevation:0,className:t.sidebarAboutBox,children:[Object(v.jsx)(p.a,{children:a}),Object(v.jsx)(p.a,{children:n})]}),Object(v.jsx)(p.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection,children:"Social"}),i.map((function(e){return Object(v.jsx)(X.a,{display:"block",variant:"body1",href:"#",children:Object(v.jsxs)(R.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(v.jsx)(R.a,{item:!0,children:Object(v.jsx)(e.icon,{})}),Object(v.jsx)(R.a,{item:!0,children:e.name})]})},e.name)}))]})},ee=a(61),te=a.n(ee),ae=a(44),ne=a.n(ae),ie=a(45),se=a.n(ie),ce=a(62),re=a.n(ce),le={title:"About",description:"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",archives:[{title:"March 2020",url:"#"},{title:"February 2020",url:"#"},{title:"January 2020",url:"#"},{title:"November 1999",url:"#"},{title:"October 1999",url:"#"},{title:"September 1999",url:"#"},{title:"August 1999",url:"#"},{title:"July 1999",url:"#"},{title:"June 1999",url:"#"},{title:"May 1999",url:"#"},{title:"April 1999",url:"#"}],social:[{name:"GitHub",icon:ne.a},{name:"Twitter",icon:re.a},{name:"Facebook",icon:se.a}]},oe=Object(D.a)((function(){return{title:{fontFamily:"-apple-system",marginTop:"100px",marginBottom:"50px"},line:{background:"white",marginBottom:"50px"},product:{padding:"10px"}}})),ue=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],i=t[1],s=oe(),c=Object(n.useState)(J.slice(0,50)),l=Object(C.a)(c,1)[0],o=Object(n.useState)(0),u=Object(C.a)(o,2),d=u[0],m=u[1],j=4*d,b=l.filter((function(e){return""==a||e.title.toLowerCase().includes(a.toLowerCase())?e:void 0})).slice(j,j+4).map((function(e){return Object(v.jsx)(R.a,{className:s.product,children:Object(v.jsx)(_,{post:e},e.title)})})),h=Math.ceil(l.length/4);return Object(v.jsxs)(r.a,{className:"wow fadeIn",children:[Object(v.jsx)(p.a,{className:s.title,font:!0,variant:"h3",children:"Articles"}),Object(v.jsxs)(R.a,{container:!0,spacing:5,children:[Object(v.jsxs)(R.a,{item:!0,xs:12,md:8,children:[Object(v.jsx)(G.a,{style:{background:"white"}}),b]}),Object(v.jsxs)(R.a,{item:!0,xs:12,md:4,children:[Object(v.jsx)(F.a,{children:Object(v.jsx)(H.a,{onChange:function(e){i(e.target.value)},className:"inputSearch",id:"",label:"Search Article",size:"small",variant:"filled",fullWidth:!0})}),Object(v.jsx)(F.a,{children:Object(v.jsx)($,{title:le.title,description:le.description,archives:le.archives,social:le.social})})]})]}),Object(v.jsx)("br",{}),Object(v.jsx)(te.a,{previousLabel:"<",nextLabel:">",pageCount:h,onPageChange:function(e){var t=e.selected;m(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})},de=a(78),me=[{body:"# Sample blog post\n\n#### April 1, 2020 by [Olivier](/)\n\nThis blog post shows a few different types of content that are supported and styled with\nMaterial styles. Basic typography, images, and code are all supported.\nYou can extend these by modifying Markdown.js.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\nNullam id dolor id nibh ultricies vehicula ut id elit.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\n## Heading\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\n### Sub-heading\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n### Sub-heading\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\nsit amet risus.\n\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n- Donec id elit non mi porta gravida at eget metus.\n- Nulla vitae elit libero, a pharetra augue.\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n1.  Vestibulum id ligula porta felis euismod semper.\n2.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n3.  Maecenas sed diam eget risus varius blandit sit amet non magna.\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis."},{body:"# Another blog post\n\n#### March 23, 2020 by [Matt](/)\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\nNullam id dolor id nibh ultricies vehicula ut id elit.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros."},{body:"# New feature\n\n#### March 14, 2020 by [Tom](/)\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\nut fermentum massa justo sit amet risus.\n\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n- Donec id elit non mi porta gravida at eget metus.\n- Nulla vitae elit libero, a pharetra augue.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed conssectetur.\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."}],je=(ne.a,re.a,se.a,function(e){var t=e.title;return Object(v.jsxs)(R.a,{children:[Object(v.jsx)(p.a,{children:t}),Object(v.jsx)(G.a,{style:{background:"white"}}),me.map((function(e){return Object(v.jsx)(de.a,{style:{textAlign:"left"},children:e.body},e.body)}))]})}),be=a(169),pe=Object(D.a)({cover:{backgroundImage:"url(https://anhdephd.com/wp-content/uploads/2017/07/hinh-nen-thien-nhien-sapa.jpg)",textAlign:"left",backgroundPosition:"center",padding:"45px 25px"},title:{fontSize:40,fontFamily:"Montserrat"},textContainer:{color:"white"}});var he=function(){var e=pe();return Object(v.jsx)("div",{children:Object(v.jsxs)(U.a,{className:e.cover,children:[Object(v.jsxs)(W.a,{className:e.textContainer,children:[Object(v.jsx)(p.a,{className:e.title,children:"Title of a longer featured blog post"}),Object(v.jsx)(p.a,{variant:"h5",component:"h2",children:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."})]}),Object(v.jsx)(be.a,{children:Object(v.jsx)(O.a,{variant:"text",style:{color:"#90caf9",fontWeight:700},children:"Read More"})})]})})},xe=Object(D.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),ge=function(e){var t=xe(),a=Object(n.useState)(J.slice(0,50)),i=Object(C.a)(a,1)[0],s=Object(n.useState)(0),c=Object(C.a)(s,2),l=c[0],o=c[1],u=2*l,d=i.slice(u,u+2).map((function(e){return Object(v.jsx)(R.a,{item:!0,md:6,children:Object(v.jsx)(_,{pid:e.id,post:e},e.title)})})),m=Math.ceil(i.length/2);return Object(v.jsxs)(r.a,{className:"wow fadeIn",children:[Object(v.jsx)(he,{}),Object(v.jsx)("br",{}),Object(v.jsx)(R.a,{container:!0,spacing:4,children:d}),Object(v.jsx)(te.a,{previousLabel:"<",nextLabel:">",pageCount:m,onPageChange:function(e){var t=e.selected;o(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"}),Object(v.jsxs)(R.a,{container:!0,spacing:5,className:t.mainGrid,children:[Object(v.jsx)(R.a,{item:!0,xs:12,md:8,children:Object(v.jsx)(je,{title:"From the firehose"})}),Object(v.jsx)(R.a,{item:!0,xs:12,md:4,children:Object(v.jsx)($,{title:le.title,description:le.description,archives:le.archives,social:le.social})})]})]})},Oe=a(79),ve=a.n(Oe),fe=Object(D.a)({root:{maxWidth:445,margin:"auto"},pictureCard:{margin:"auto",borderRadius:"50%",maxWidth:405,height:305,textAlign:"center"},social:{margin:"auto"}});function ye(){var e=fe(),t=Object(o.b)(),a=t.user;return t.isAuthenticated&&Object(v.jsxs)(U.a,{className:e.root,children:[Object(v.jsxs)(E.a,{children:[Object(v.jsx)(I.a,{className:e.pictureCard,component:"img",alt:"Contemplative Reptile",height:"140",image:a.picture,title:"Contemplative Reptile"}),Object(v.jsxs)(W.a,{children:[Object(v.jsxs)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Name: ",a.nickname]}),Object(v.jsxs)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Email: ",a.name]}),Object(v.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(v.jsxs)(be.a,{className:e.social,children:[Object(v.jsx)(O.a,{size:"small",color:"primary",children:Object(v.jsx)(se.a,{children:" "})}),Object(v.jsx)(O.a,{size:"small",color:"primary",children:Object(v.jsx)(ve.a,{})}),Object(v.jsx)(O.a,{size:"small",color:"primary",children:Object(v.jsx)(ne.a,{})})]})]})}var Ce=function(){return Object(v.jsx)("div",{style:{marginTop:"67px"},children:Object(v.jsxs)(P.c,{children:[Object(v.jsx)(P.a,{exact:!0,path:"/my-blog1",component:ge}),Object(v.jsx)(P.a,{path:"/Articles",component:ue}),Object(v.jsx)(P.a,{path:"/Articles-detail/:id/:slug.html",component:Q}),Object(v.jsx)(P.a,{path:"/Profile",component:ye}),Object(v.jsx)(P.a,{path:"",component:ge})]})})};var Ne=function(){return Object(v.jsx)(l.a,{children:Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(r.a,{children:[Object(v.jsx)(T,{}),Object(v.jsx)(Ce,{})]})})})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))},Ae=function(e){var t=e.children;return Object(v.jsx)(o.a,{domain:"cristran.us.auth0.com",clientId:"DNCZXOj3UaVx7SoJ6Rz8PZFZis6YmYUB",redirectUri:window.location.origin,children:t})};c.a.render(Object(v.jsx)(Ae,{children:Object(v.jsx)(Ne,{})}),document.getElementById("root")),we()},43:function(e){e.exports=JSON.parse('[{"id":1,"title":"Featured post","date":"2021-07-16","description":"This is a wider card with supporting text below as a natural lead-in to additional content.","image":"https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-thi%C3%AAn-nhi%C3%AAn-bu%E1%BB%93n.jpg"},{"id":2,"title":"Post title","date":"2021-12-16","description":"This is a wider card with supporting text below as a natural lead-in to additional content.","image":"https://vcdn1-vnexpress.vnecdn.net/2018/12/30/1-1546168454.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=FNn8Y0cX4X-wYhgsfdhnrQ"},{"id":3,"title":"Post title","date":"2021-01-16","description":"This is a wider card with supporting text below as a natural lead-in to additional content.","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCX9F5romJHPkZ1PjQ_3i1Llb7ULQmLvjl7A&usqp=CAU"},{"id":4,"title":"Articles","date":"2021-03-16","description":"This is a wider card with supporting text below as a natural lead-in to additional content.","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKqn9LbAC5OWyWY0J_Ipb8nhn_CVH00QuyQ&usqp=CAU"},{"id":5,"title":"Full","date":"2021-03-16","description":"This is a wider card with supporting text below as a natural lead-in to additional content.","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKqn9LbAC5OWyWY0J_Ipb8nhn_CVH00QuyQ&usqp=CAU"}]')},92:function(e,t,a){},93:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.daa789f4.chunk.js.map