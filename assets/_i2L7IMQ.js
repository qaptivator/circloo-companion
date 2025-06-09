import{d as se,_ as Fe,r as de}from"./P2J3hguX.js";import{m as ge,r as _,n as be,aq as Ue,c as h,_ as Me,o as v,a as s,E as B,s as Ee,v as x,B as he,a7 as ze,aa as Ve,t as g,q as C,ae as G,C as Ae,G as Ge,H as Ne,b as i,w as u,ak as ve,ab as He,N as ye,ah as Ke,ar as qe,ai as A,u as r,d as f,F as Xe,p as We,D as M,as as Ze}from"./Bx6XLEmL.js";import{a as Qe,d as Je,e as ce,M as Ye,f as ue,s as et,h as tt,i as nt}from"./5WgFyQEi.js";import{U as fe,b as ot,c as lt,s as at,d as rt}from"./COkH8IGE.js";import{a as it}from"./RbyWueH0.js";const st=Symbol.for("nuxt:client-only"),dt=ge({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:n,attrs:t}){const c=_(!1);return be(()=>{c.value=!0}),Ue(st,!0),d=>{var R;if(c.value)return(R=n.default)==null?void 0:R.call(n);const p=n.fallback||n.placeholder;if(p)return p();const a=d.fallback||d.placeholder||"",P=d.fallbackTag||d.placeholderTag||"span";return h(P,t,a)}}}),ct={},ut={class:"flex font-bold items-center text-xs md:text-base text-nowrap"},ft={class:"text-xl md:text-3xl text-nowrap"};function pt(e,n){return v(),h("section",null,[s("span",ut,[B(e.$slots,"title")]),s("div",ft,[B(e.$slots,"value")])])}const mt=Me(ct,[["render",pt]]);var we={name:"PlusIcon",extends:Ee};function gt(e,n,t,c,d,p){return v(),h("svg",x({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[s("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}we.render=gt;var bt=function(n){var t=n.dt;return`
.p-fieldset {
    background: `.concat(t("fieldset.background"),`;
    border: 1px solid `).concat(t("fieldset.border.color"),`;
    border-radius: `).concat(t("fieldset.border.radius"),`;
    color: `).concat(t("fieldset.color"),`;
    padding: `).concat(t("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(t("fieldset.legend.background"),`;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    border-width: `).concat(t("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("fieldset.legend.border.color"),`;
    padding: `).concat(t("fieldset.legend.padding"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: `).concat(t("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(t("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(t("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(t("fieldset.legend.focus.ring.width")," ").concat(t("fieldset.legend.focus.ring.style")," ").concat(t("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(t("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(t("fieldset.legend.hover.color"),`;
    background: `).concat(t("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.color"),`;
    transition: color `).concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(t("fieldset.content.padding"),`;
}
`)},ht={root:function(n){var t=n.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},vt=he.extend({name:"fieldset",theme:bt,classes:ht}),yt={name:"BaseFieldset",extends:ye,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:vt,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},ke={name:"Fieldset",extends:yt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||fe()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||fe()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:ze},components:{PlusIcon:we,MinusIcon:ot}};function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(e)}function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,c)}return t}function me(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?pe(Object(t),!0).forEach(function(c){wt(e,c,t[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))})}return e}function wt(e,n,t){return(n=kt(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kt(e){var n=xt(e,"string");return D(n)=="symbol"?n:n+""}function xt(e,n){if(D(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var c=t.call(e,n||"default");if(D(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var St=["id"],_t=["id","aria-controls","aria-expanded","aria-label"],Ct=["id","aria-labelledby"];function $t(e,n,t,c,d,p){var a=Ve("ripple");return v(),h("fieldset",x({class:e.cx("root")},e.ptmi("root")),[s("legend",x({class:e.cx("legend")},e.ptm("legend")),[B(e.$slots,"legend",{toggleCallback:p.toggle},function(){return[e.toggleable?C("",!0):(v(),h("span",x({key:0,id:d.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),g(e.legend),17,St)),e.toggleable?G((v(),h("button",x({key:1,id:d.id+"_header",type:"button","aria-controls":d.id+"_content","aria-expanded":!d.d_collapsed,"aria-label":p.buttonAriaLabel,class:e.cx("toggleButton"),onClick:n[0]||(n[0]=function(){return p.toggle&&p.toggle.apply(p,arguments)}),onKeydown:n[1]||(n[1]=function(){return p.onKeyDown&&p.onKeyDown.apply(p,arguments)})},me(me({},e.toggleButtonProps),e.ptm("toggleButton"))),[B(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:d.d_collapsed,class:Ae(e.cx("toggleIcon"))},function(){return[(v(),Ge(Ne(d.d_collapsed?"PlusIcon":"MinusIcon"),x({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),s("span",x({class:e.cx("legendLabel")},e.ptm("legendLabel")),g(e.legend),17)],16,_t)),[[a]]):C("",!0)]})],16),i(He,x({name:"p-toggleable-content"},e.ptm("transition")),{default:u(function(){return[G(s("div",x({id:d.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":d.id+"_header"},e.ptm("contentContainer")),[s("div",x({class:e.cx("content")},e.ptm("content")),[B(e.$slots,"default")],16)],16,Ct),[[ve,!d.d_collapsed]])]}),_:3},16)],16)}ke.render=$t;var Lt=function(n){var t=n.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(t("skeleton.background"),`;
    border-radius: `).concat(t("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(t("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},Pt={root:{position:"relative"}},It={root:function(n){var t=n.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},Tt=he.extend({name:"skeleton",theme:Lt,classes:It,inlineStyles:Pt}),Bt={name:"BaseSkeleton",extends:ye,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Tt,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},xe={name:"Skeleton",extends:Bt,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function Dt(e,n,t,c,d,p){return v(),h("div",x({class:e.cx("root"),style:[e.sx("root"),p.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}xe.render=Dt;const Rt=async e=>new Promise((n,t)=>{const c=new Image;let d;if(typeof e=="string")d=e;else if(e instanceof ArrayBuffer)d=URL.createObjectURL(new Blob([new Uint8Array(e)]));else if(e instanceof Blob)d=URL.createObjectURL(e);else throw new Error("Invalid argument provided");c.onload=()=>{const{height:p,width:a}=c;e instanceof Blob&&URL.revokeObjectURL(d),n({height:p,width:a})},c.onerror=p=>t(p),c.src=d}),Ot={class:"w-full h-full"},jt={key:0,class:"flex flex-col xl:flex-row gap-8 w-full h-full"},Ft={key:1,class:"flex flex-col items-center justify-center h-full"},Ut={class:"flex flex-col xl:flex-row gap-8 w-full h-full"},Mt={class:"flex flex-col rounded-xl dark:bg-surface-900 bg-gray-100 w-full h-full p-4 md:p-8 text-sm lg:text-xl"},Et={class:"font-bold text-3xl"},zt={class:"opacity-50"},Vt={key:0,class:"mt-8"},At={key:1,class:"mt-8 text-md"},Gt=["href"],Nt={class:"flex flex-col xl:flex-row xl:justify-between"},Ht={class:"mt-8 grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 w-fit"},Kt={class:"rounded-lg dark:bg-black bg-white flex flex-col w-fit mt-4 xl:mt-0"},qt={key:0,class:"flex p-2"},Xt={class:"font-semibold mr-10"},Wt={class:"mt-8 flex flex-col"},Zt={class:"mt-8 flex flex-wrap gap-4"},Qt={class:"mt-8 flex items-center"},Jt={class:"mt-4 flex items-center opacity-50"},ln=ge({__name:"[id]",setup(e){const n=Ke(),t=qe(),c=_(!0),d=_(!1),p=_(!1),a=_(),P=_();be(async()=>{let o=n.params.id;Array.isArray(o)&&(o=o[0]);const l=await Qe([o]),k=await Je(o);l.length>0?(a.value=l[0],F.value=ce(a.value)):d.value=!0,k?P.value=k:p.value=!0,c.value=!1});function R(){var o,l;(o=a.value)!=null&&o.content?(j((l=a.value)==null?void 0:l.content),t.add({severity:"success",summary:"Successfully copied level content",life:3e3})):t.add({severity:"error",summary:"This level is not downloadable!",life:3e3})}async function Se(o,l){return new Promise((k,b)=>{const I=new Image;I.onload=async function(){const V=await l.arrayBuffer(),y=await Rt(V);if(y.width!==y.height){t.add({severity:"error",summary:"Failed to download thumbnail",detail:"Contact the developer so that they will fix the issue. Error: thumbnail blob is not a square (width != height)",life:3e3}),b("thumbnail blob is not a square (width != height)");return}const S=document.createElement("canvas");S.width=y.width,S.height=y.height;const w=S.getContext("2d");if(!w){t.add({severity:"error",summary:"Failed to download thumbnail",detail:"Contact the developer so that they will fix the issue. Error: canvas ctx is not CanvasRenderingContext2D, it is null",life:3e3}),b("canvas ctx is not CanvasRenderingContext2D, it is null");return}w.fillStyle=$e(o),w.beginPath(),w.arc(y.width/2,y.width/2,y.width/2,0,Math.PI*2),w.fill(),w.drawImage(I,0,0);const L=S.toDataURL("image/png");S.remove(),k(L)},I.src=URL.createObjectURL(l)})}async function _e(){if(a.value){const o=await Se(ue(a.value).background,a.value.imageURI);se(o,`${a.value.name}-thumbnail.png`),t.add({severity:"success",summary:"Successfully downloaded thumbnail",life:3e3})}else t.add({severity:"error",summary:"Failed to download thumbnail",detail:"Contact the developer so that they will fix the issue. Error: level.value is undefined",life:3e3})}function Ce(){a.value?(se(a.value.imageURI,`${a.value.name}-thumbnail-borders.png`),t.add({severity:"success",summary:"Successfully downloaded thumbnail",life:3e3})):t.add({severity:"error",summary:"Failed to download thumbnail only with borders",detail:"Contact the developer so that they will fix the issue. Error: level.value is undefined",life:3e3})}function O(o){o.target.select()}function $e(o){const l=o.x.toString(16).padStart(2,"0"),k=o.y.toString(16).padStart(2,"0"),b=o.z.toString(16).padStart(2,"0");return`#${l}${k}${b}`}function E(o){return`${o.x}, ${o.y}, ${o.z}`}function z(o){return`rgb(${o.x},${o.y},${o.z})`}const $=A(()=>{const o={x:0,y:0,z:0};return a.value?ue(a.value):{background:o,main:o,player:o}});function Le(o){const l=Math.floor(o/60),k=Math.floor(o%60),b=Math.floor(o%1*100);return`${l}:${k.toString().padStart(2,"0")}.${b.toString().padStart(2,"0")}`}const Pe=A(()=>{const o=de((a.value?nt(a.value):-1)/60,2);return Le(o)}),Ie=A(()=>a.value?de(a.value.plays/a.value.starts*100):-1);function Te(o){const l=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}).format(o),k=new Intl.DateTimeFormat("en-US",{month:"numeric",day:"numeric",year:"numeric"}).format(o);return`${l} (${k})`}function j(o){navigator.clipboard.writeText(o)}function Be(){var o,l;(o=a.value)!=null&&o.creationTime&&(j((l=a.value)==null?void 0:l.creationTime.getTime().toString()),t.add({severity:"success",summary:"Successfully copied the creation time (in unix time)",life:3e3}))}function De(){var o,l;(o=a.value)!=null&&o.id&&(j((l=a.value)==null?void 0:l.id),t.add({severity:"success",summary:"Successfully copied the level ID",life:3e3}))}function Re(){j(window.location.origin+"/circloo-companion"+n.fullPath),t.add({severity:"success",summary:"Successfully copied the URL to this level",life:3e3})}function Oe(){var o;Ze(`/browse?searchMode=creator&searchQuery=${(o=a.value)==null?void 0:o.creator}&sortMode=newest&filterMode=featured&duration=none&page=1&itemsPerPage=10`)}const F=_();function je(){if(!a.value)return;const o=ce(a.value);o.bookmarked=!o.bookmarked,F.value=o,et(a.value,o),t.add({severity:"success",summary:o.bookmarked?"Successfully bookmarked level":"Successfully unbookmarked level",life:3e3})}return(o,l)=>{var N,H,K,q,X,W,Z,Q,J,Y,ee,te,ne,oe,le,ae,re,ie;const k=xe,b=it,I=Fe,V=dt,y=mt,S=ke,w=lt,L=at,U=rt;return v(),h("div",Ot,[r(c)&&!r(d)?(v(),h("div",jt,[i(k,{shape:"circle",size:"24rem"}),i(k,{width:"70rem",height:"55rem",borderRadius:"16px"})])):C("",!0),!r(c)&&r(d)?(v(),h("div",Ft,[l[2]||(l[2]=s("h1",{class:"text-4xl mb-4"},"Level not found",-1)),i(b,{onClick:l[0]||(l[0]=m=>o.$router.back()),as:"router-link",label:"Go back"})])):C("",!0),G(s("div",Ut,[i(V,null,{default:u(()=>[i(I,{ref:"thumbnailRef",level:r(a),class:"!w-96 !h-96"},null,8,["level"])]),_:1}),s("div",Mt,[s("h1",Et,g((N=r(a))==null?void 0:N.name),1),s("h2",zt,"by "+g((H=r(a))==null?void 0:H.creator),1),(K=r(a))!=null&&K.description?(v(),h("p",Vt,g((q=r(a))==null?void 0:q.description),1)):C("",!0),(X=r(a))!=null&&X.walkthroughLink?(v(),h("p",At,[l[3]||(l[3]=f(" Walkthrough link: ")),s("a",{href:(W=r(a))==null?void 0:W.walkthroughLink,target:"_blank",title:"Walkthrough link",rel:"noopener noreferrer"},g((Z=r(a))==null?void 0:Z.walkthroughLink),9,Gt)])):C("",!0),s("div",Nt,[s("div",Ht,[i(y,null,{title:u(()=>l[4]||(l[4]=[s("i",{class:"pi pi-play"},null,-1),f(" Finishers ")])),value:u(()=>{var m;return[f(g((m=r(a))==null?void 0:m.plays),1)]}),_:1}),i(y,null,{title:u(()=>l[5]||(l[5]=[s("i",{class:"pi pi-circle mr-1"},null,-1),f(" Completions ")])),value:u(()=>{var m;return[f(g((m=r(a))==null?void 0:m.totalCompletions),1)]}),_:1}),i(y,null,{title:u(()=>l[6]||(l[6]=[s("i",{class:"pi pi-clock mr-1"},null,-1),f(" Average Time ")])),value:u(()=>[f(g(r(Pe)),1)]),_:1}),i(y,null,{title:u(()=>l[7]||(l[7]=[s("i",{class:"pi pi-user mr-1"},null,-1),f(" Players ")])),value:u(()=>{var m;return[f(g((m=r(a))==null?void 0:m.starts),1)]}),_:1}),i(y,null,{title:u(()=>l[8]||(l[8]=[s("i",{class:"pi pi-star mr-1"},null,-1),f(" Stars ")])),value:u(()=>{var m;return[f(g((m=r(a))==null?void 0:m.stars),1)]}),_:1}),i(y,null,{title:u(()=>l[9]||(l[9]=[s("i",{class:"pi pi-percentage mr-1"},null,-1),f(" Clear Rate (CR) ")])),value:u(()=>[f(g(r(Ie))+"% ",1)]),_:1})]),s("div",Kt,[l[10]||(l[10]=s("span",{class:"p-2 text-xl font-bold"}," Leaderboard ",-1)),(Q=r(P))!=null&&Q.leaderboard?C("",!0):(v(),h("div",qt," No Leaderboard Entries ")),(v(!0),h(Xe,null,We((J=r(P))==null?void 0:J.leaderboard,(m,T)=>(v(),h("div",{class:"flex justify-between p-2",key:T,style:M({color:T===0?"#fcb103":T===1?"#b3b3b3":T===2?"#cd7f32":"inherit"})},[s("span",Xt,g(T+1)+": "+g(m.name),1),s("span",null,g(("formatScore"in o?o.formatScore:r(tt))(m.score)),1)],4))),128))])]),i(S,{legend:"Explanation",toggleable:!0,collapsed:!0,class:"!mt-4 !text-sm !opacity-50 !w-min !text-nowrap"},{default:u(()=>l[11]||(l[11]=[s("footer",{class:"m-0"},[f(" Completions is the amount of times your level was completed (also counts completions by the same person)."),s("br"),f(" Finishers is amount of people who completed the level."),s("br"),f(" Players is amount of people who started the level, but not necessarily completed it."),s("br"),f(" Clear rate is finishers divided by players, shown as a percentage. This shows the approximate difficulty of a level."),s("br"),f("The lower the clear rate, the harder the level. ")],-1)])),_:1}),s("div",Wt,[i(U,{class:"!w-80"},{default:u(()=>[i(w,{class:"!rounded-b-none !w-36"},{default:u(()=>l[12]||(l[12]=[f("Background")])),_:1}),i(L,{tabindex:"0",onFocus:O,modelValue:E(r($).background),placeholder:"RGB Color",readonly:""},null,8,["modelValue"]),i(w,{class:"!w-10 !rounded-b-none",style:M({"background-color":z(r($).background)})},null,8,["style"])]),_:1}),i(U,{class:"!w-80"},{default:u(()=>[i(w,{class:"!rounded-none !w-36"},{default:u(()=>l[13]||(l[13]=[f("Objects")])),_:1}),i(L,{tabindex:"0",onFocus:O,modelValue:E(r($).main),placeholder:"RGB Color",readonly:""},null,8,["modelValue"]),i(w,{class:"!w-10 !rounded-none",style:M({"background-color":z(r($).main)})},null,8,["style"])]),_:1}),i(U,{class:"!w-80"},{default:u(()=>[i(w,{class:"!rounded-none !w-36"},{default:u(()=>l[14]||(l[14]=[f("Player")])),_:1}),i(L,{tabindex:"0",onFocus:O,modelValue:E(r($).player),placeholder:"RGB Color",readonly:""},null,8,["modelValue"]),i(w,{class:"!w-10 !rounded-none",style:M({"background-color":z(r($).player)})},null,8,["style"])]),_:1}),i(U,{class:"!w-80"},{default:u(()=>{var m;return[i(w,{class:"!rounded-t-none !w-36"},{default:u(()=>l[15]||(l[15]=[f("Editor hue")])),_:1}),i(L,{class:"!rounded-t-none",tabindex:"0",onFocus:O,modelValue:(((m=r(a))==null?void 0:m.color)||0).toString(),placeholder:"Hue Number",readonly:""},null,8,["modelValue"])]}),_:1})]),s("div",Zt,[i(b,{onClick:je,label:(Y=r(F))!=null&&Y.bookmarked?"Unbookmark level":"Bookmark level",variant:(ee=r(F))!=null&&ee.bookmarked?void 0:"outlined"},null,8,["label","variant"]),i(b,{onClick:Oe,label:`More levels by ${(te=r(a))==null?void 0:te.creator}`},null,8,["label"]),i(b,{onClick:Re,label:"Share level"}),i(b,{onClick:l[1]||(l[1]=m=>o.$router.back()),label:"Go back"}),i(b,{onClick:_e,label:"Download thumbnail as PNG",severity:"secondary"}),i(b,{onClick:Ce,label:"Download thumbnail only with borders",severity:"secondary"}),i(b,{onClick:R,disabled:!((ne=r(a))!=null&&ne.content),label:"Download level content",severity:"secondary"},null,8,["disabled"])]),s("div",Qt,[s("span",null,"Uploaded on "+g((oe=r(a))!=null&&oe.creationTime?Te((le=r(a))==null?void 0:le.creationTime):"unknown"),1),i(b,{onClick:Be,class:"!ml-4",icon:"pi pi-copy",size:"small",variant:"outlined",severity:"contrast"})]),s("span",null,"Moderation status: "+g(((ae=r(a))==null?void 0:ae.moderationStatus)??("ModerationStatus"in o?o.ModerationStatus:r(Ye)).Unknown),1),s("div",Jt,[s("span",null,"Level ID: "+g((re=r(a))!=null&&re.id?(ie=r(a))==null?void 0:ie.id:"unknown"),1),i(b,{onClick:De,class:"!ml-4",icon:"pi pi-copy",size:"small",variant:"outlined",severity:"contrast"})])])],512),[[ve,!r(c)&&!r(d)]])])}}});export{ln as default};
