import{u as z}from"./vue.f36acd1f.a53cd424.js";import{f as m,_ as u,o as l,A as B,w as y,b as t,d as p,c as d,F as x,B as g,a as e,C as v,D as w}from"./entry.a87d17a0.js";import{_ as E}from"./NuxtImg.vue.4690f53e.js";const q=o=>Object.fromEntries(Object.entries(o).filter(([,a])=>a!==void 0)),b=(o,a)=>(s,i)=>(z(()=>o({...q(s),...i.attrs},i)),()=>{var n,c;return a?(c=(n=i.slots).default)==null?void 0:c.call(n):null}),S={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},D=m({name:"Link",inheritAttrs:!1,props:{...S,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:b(o=>({link:[o]}))}),L=m({name:"Base",inheritAttrs:!1,props:{...S,href:String,target:String},setup:b(o=>({base:o}))}),N=m({name:"Title",inheritAttrs:!1,setup:b((o,{slots:a})=>{var s,i,n;return{title:((n=(i=(s=a.default)==null?void 0:s.call(a))==null?void 0:i[0])==null?void 0:n.children)||null}})}),C=m({name:"Meta",inheritAttrs:!1,props:{...S,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:b(o=>{const a={...o};return a.httpEquiv&&(a["http-equiv"]=a.httpEquiv,delete a.httpEquiv),{meta:[a]}})}),H=m({name:"Head",inheritAttrs:!1,setup:(o,a)=>()=>{var s,i;return(i=(s=a.slots).default)==null?void 0:i.call(s)}}),P={};function G(o,a){const s=L,i=N,n=C,c=D,_=H;return l(),B(_,null,{default:y(()=>[t(s,{href:"/"}),t(i,null,{default:y(()=>[p("gulybyte.")]),_:1}),t(n,{content:"gulybyte",property:"og:title"}),t(n,{property:"og:type",content:"profile"}),t(c,{rel:"canonical",href:"https://gulybyte.github.io/"}),t(n,{property:"og:url",content:"https://gulybyte.github.io/"}),t(n,{name:"description",content:"Guilherme Luis. Desenvolvedor Web. Apenas um grande amante de tecnologia."}),t(n,{name:"excerpt",content:"Guilherme Luis. Desenvolvedor Web. Apenas um grande amante de tecnologia."}),t(n,{property:"og:description",content:"Guilherme Luis. Desenvolvedor Web. Apenas um grande amante de tecnologia."}),t(n,{name:"keywords",content:"Guilherme Luis,gulybyte,Programador,Programação,Developer,Java,Spring,AWS,JavaScript,Desenvolvimento"}),t(n,{name:"application-name",content:"Guilherme Luis (gulybyte)."}),t(n,{property:"og:site_name",content:"Guilherme Luis (gulybyte)."}),t(n,{property:"og:image",content:"https://gulybyte.github.io/static/images/guilherme-luis-franca-azul.webp"}),t(n,{property:"og:image:width",content:"572"}),t(n,{property:"og:image:height",content:"559"}),t(n,{property:"og:image:type",content:"image/webp"})]),_:1})}const F=u(P,[["render",G]]);const M={},V=g('<aside class="nav-menu"><a href="https://github.com/gulybyte" aria-label="GitHub" target="_blank" rel="noreferrer"><i class="pi pi-github"></i></a><a href="mailto:gulybyte@gmail.com" aria-label="E-Mail" target="_blank" rel="noreferrer"><i class="pi pi-envelope"></i></a><a href="https://www.linkedin.com/in/gulybyte/" aria-label="E-Mail" target="_blank" rel="noreferrer"><i class="pi pi-linkedin"></i></a></aside>',1),T=e("aside",{orientation:"left",class:"nav","data-aos":"fade-right","data-aos-duration":"2500"},[e("ul",null,[e("li",null,[e("a",{href:"https://github.com/gulybyte","aria-label":"GitHub",target:"_blank",rel:"noreferrer"},[e("i",{class:"pi pi-github"})])]),e("li",null,[e("a",{href:"mailto:gulybyte@gmail.com","aria-label":"E-Mail",target:"_blank",rel:"noreferrer"},[e("i",{class:"pi pi-envelope"})])]),e("li",null,[e("a",{href:"https://www.linkedin.com/in/gulybyte/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer"},[e("i",{class:"pi pi-linkedin"})])])])],-1);function j(o,a){return l(),d(x,null,[V,T],64)}const O=u(M,[["render",j]]),R=""+globalThis.__publicAssetsURL("static/images/icon.png");const I={data(){return{navVisible:!1}},methods:{showToggleNav(){this.navVisible=!this.navVisible}}},W={class:"header"},U=e("figure",{class:"pl-8","data-aos":"zoom-in-right","data-aos-duration":"1000"},[e("a",{href:"/"},[e("img",{width:"50",alt:"Logo",src:R})])],-1),J={class:"header-contents","data-aos":"zoom-in-left","data-aos-duration":"2000"},K=e("a",{href:"#about",class:"nav-link"},[e("span",{class:"nav-link-number"},"01. "),p("Sobre ")],-1),Q=e("a",{href:"#articles",class:"nav-link"},[e("span",{class:"nav-link-number"},"02. "),p("Anotações ")],-1),X={target:"_blank",href:"/static/PDF/Resume.pdf",rel:"noopener"},Y={class:"hamburger-menu"},Z=e("input",{type:"checkbox",id:"nav-toggle",hidden:""},null,-1),ee=e("span",null,null,-1),te=[ee],ae={key:0,class:"navbar"},ne=e("li",null,[e("a",{href:"#about",class:"nav-link"},[e("span",{class:"nav-link-number"},"01. "),p("Sobre ")])],-1),oe=e("li",null,[e("a",{href:"#articles",class:"nav-link"},[e("span",{class:"nav-link-number"},"02. "),p("Anotações ")])],-1),se={href:"static/PDF/Resume.pdf"},ie=e("div",{class:"clear-both"},null,-1);function re(o,a,s,i,n,c){const _=v("Button"),h=O;return l(),d(x,null,[e("header",W,[U,e("nav",J,[K,Q,e("a",X,[t(_,{label:"Resume",class:"p-button-outlined p-button-success",style:{padding:"8px 15px"}})])]),e("figure",Y,[Z,e("label",{class:"nav-toggle-label",for:"nav-toggle",onClick:a[0]||(a[0]=(...f)=>c.showToggleNav&&c.showToggleNav(...f))},te)])]),e("nav",null,[n.navVisible?(l(),d("ul",ae,[ne,oe,e("li",null,[e("a",se,[t(_,{type:"button",label:"Resume",class:"p-button-outlined"})])]),e("li",null,[t(h)])])):w("",!0)]),ie,t(h)],64)}const le=u(I,[["render",re]]);const ce={},de={orientation:"right",class:"email","data-aos":"fade-left","data-aos-duration":"2500"},ue=e("address",null,[e("a",{href:"mailto:gulybyte@gmail.com",rel:"noopener noreferrer"},"gulybyte@gmail.com")],-1),_e=[ue];function pe(o,a){return l(),d("aside",de,_e)}const me=u(ce,[["render",pe]]);const ge={},he={class:"infoinit","data-aos":"zoom-in-right","data-aos-duration":"3000"},be=g('<h1 class="hi">Olá, meu nome é</h1><h2 class="name">Guilherme Luis.</h2><h3 class="developer-web">Desenvolvedor Web <small>(programador)</small>.</h3><p class="info"> Apenas um grande amante de tecnologia. Meu foco é desenvolvimento web, onde crio experiências únicas. Informações técnicas, visite meu <a href="https://github.com/gulybyte" target="_blank"><i class="pi pi-github"></i> GitHub</a>. </p>',4),fe={target:"_blank",href:"https://github.com/gulybyte/gulybyte.github.io"};function ye(o,a){const s=v("Button");return l(),d("section",he,[be,e("a",fe,[t(s,{class:"thiscode p-button-outlined p-button-success"},{default:y(()=>[p("Check code this website!")]),_:1})])])}const ve=u(ge,[["render",ye]]);const Se={},xe={class:"about",id:"about"},ke=g('<article class="about-me"><h2 class="title-about" data-aos="zoom-out" data-aos-duration="500"><span class="text-teal-400 mr-4" data-aos="zoom-out-down" data-aos-duration="1000">01.</span>Sobre mim</h2><p data-aos="zoom-in" data-aos-duration="1000" style="text-align:justify;"> Desde cedo, aos meus 14 anos, meu fascínio pela lógica, expressada na matemática e <b>programação</b>, conduziu-me a criar meus próprios sistemas. O que começou como um intrigante hobby, estudando com afinco e pragmatismo, naturalmente evoluiu para minha profissão. Hoje, ainda em minha juventude, embora já tenha alcançado o patamar profissional, <abbr title="Pv 22.29">busco capacitar-me sempre que póssivel </abbr><abbr title="Pv 15.33">com humildade, pois ela antecede a honra.</abbr> Uma frase?:</p><blockquote data-aos="fade-up" data-aos-duration="1000"><i data-aos="zoom-in-up" data-aos-delay="800"> Não se apegar ao código, codificando o <b><abbr title="Estou falando de overengineering">essencial</abbr></b>, com qualidade. <br> Demonstra a prudência de um bom programador. </i></blockquote></article>',1),$e={class:"about-image"},Ae={class:"img-guilherme","data-aos":"zoom-in","data-aos-duration":"1000"},ze=e("div",{class:"clear-both"},null,-1);function Be(o,a){const s=E;return l(),d("section",xe,[ke,e("aside",$e,[e("figure",Ae,[t(s,{class:"eu-azul",src:"/static/images/guilherme-luis-franca-azul.png",alt:"gulybyte efeito azul"}),t(s,{class:"eu",src:"/static/images/guilherme-luis-franca.png",alt:"gulybyte"})])]),ze])}const we=u(Se,[["render",Be]]);const Ee={},qe={class:"articles-page",id:"articles"},De=g('<section><h2 class="title-about" data-aos="zoom-out" data-aos-duration="500"><span class="text-teal-400 mr-4" data-aos="zoom-out-down" data-aos-duration="1000">02.</span>Anotações</h2><p data-aos="zoom-in-right" data-aos-duration="1000">   Inspirado no <a target="blank" href="https://rodrigoknol.com.br/#blog"> site do rodrigoknol</a>, para o nome &quot;Anotações&quot;. Essas anotações são minha bússola, minha fonte de consulta particular na programação, e compartilho publicamente na esperança de que possam ser úteis para alguém, ideia essa influenciada <a href="https://youtu.be/ii5Q2fCl8C0" target="blank">por este vídeo do Akitando</a>.</p><p style="padding-top:2em;" data-aos="zoom-in-left" data-aos-duration="1000">   Dê um pulo aqui e explore minhas anotações sobre programação, abrangendo desde estruturas de dados, banco de dados até tópicos em alta como cloud computing e escalabilidade.</p><p data-aos="flip-up" data-aos-delay="2000" data-aos-duration="1000"><small style="padding-top:2em;"> (as anotações sobre DB, cloud computing e escalabilidade. Ainda estão em andamento...).</small></p></section>',1),Le={"data-aos":"fade-down","data-aos-anchor-placement":"bottom-bottom","data-aos-duration":"1500"},Ne={href:"/articles"};function Ce(o,a){const s=v("Button");return l(),d("section",qe,[e("article",null,[De,e("section",null,[e("aside",Le,[e("a",Ne,[t(s,{"aria-label":"Ir para as Anotações",size:"large",icon:"pi pi-reply",severity:"info",label:"Ir para as anotações",outlined:""})])])])])])}const He=u(Ee,[["render",Ce]]);let r=`
`;console.log("             ))))"+r+"            (((("+r+"             ))))"+r+"          _ .---."+r+"         ( |`---'|"+r+"          \\|     |"+r+"          : .___, :"+r+"           `-----'"+r+"           K E E P"+r+"           C A L M"+r+"             and"+r+"          D R I N K"+r+"         C O F F E E");const Pe={},Ge={class:"home-page"},Fe={class:"container"},Me=g('<div class="clear-both"></div><div class="clear-both"></div><footer class="soon-more" style="padding:80px;text-align:center;font-size:25px;font-family:&#39;Calibre-semibold&#39;;"><i class="pi pi-exclamation-triangle" style="color:yellow;font-size:25px;"></i> Ainda em construção! <i style="font-size:25px;" class="pi pi-spin pi-spinner"></i> Em breve mais conteudo <i style="font-size:25px;" class="pi pi-calendar-plus"></i></footer>',3);function Ve(o,a,s,i,n,c){const _=F,h=le,f=me,k=ve,$=we,A=He;return l(),d("section",Ge,[t(_),t(h),t(f),e("section",Fe,[e("main",null,[t(k),t($),t(A)]),Me])])}const Re=u(Pe,[["render",Ve]]);export{Re as default};
