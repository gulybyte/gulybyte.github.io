import{f as C,y as g,bp as v,bS as D,g as w,n as o}from"./entry.a87d17a0.js";import{u as d}from"./head.e2abf83d.js";import S from"./ContentRenderer.c2a72ef7.js";import b from"./ContentQuery.d921b363.js";import"./vue.f36acd1f.a53cd424.js";import"./ContentRendererMarkdown.vue.290afd54.js";import"./asyncData.1cc5d727.js";const q=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,e=v(),{tag:m,excerpt:i,path:l,query:r,head:u}=f,a=u===void 0?c:u,s={...r||{},path:l||(r==null?void 0:r.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(b,s,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return a&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:i,...this.$attrs})}:({data:t})=>(a&&d(t),o(S,{value:t,excerpt:i,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),N=q;export{N as default};