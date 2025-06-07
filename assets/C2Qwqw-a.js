import{d as ue,_ as Ee,r as fe}from"./CZir_Utj.js";import{m as ve,r as C,n as ye,aq as ze,c as g,s as Ae,o as b,a,q as k,B as we,a7 as Ve,aa as Ne,D as z,t as f,I as _,ae as V,A as Ge,E as Ke,G as He,b as i,w,ak as ke,ab as qe,N as xe,ah as Xe,ar as We,ai as A,u as s,d as m,F as Ze,p as Qe,C as F,as as Je}from"./-1Vb8plG.js";import{a as Ye,d as et,e as pe,M as tt,f as me,s as nt,h as ot,i as lt}from"./DkpSrzCq.js";import{U as ge,b as at,c as rt,s as st,d as it}from"./B8myIB0y.js";import{a as dt}from"./DengOqUk.js";const ct=Symbol.for("nuxt:client-only"),ut=ve({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:n,attrs:t}){const c=C(!1);return ye(()=>{c.value=!0}),ze(ct,!0),d=>{var R;if(c.value)return(R=n.default)==null?void 0:R.call(n);const u=n.fallback||n.placeholder;if(u)return u();const r=d.fallback||d.placeholder||"",P=d.fallbackTag||d.placeholderTag||"span";return g(P,t,r)}}});var Se={name:"PlusIcon",extends:Ae};function ft(e,n,t,c,d,u){return b(),g("svg",k({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[a("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Se.render=ft;var pt=function(n){var t=n.dt;return`
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
`)},mt={root:function(n){var t=n.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},gt=we.extend({name:"fieldset",theme:pt,classes:mt}),bt={name:"BaseFieldset",extends:xe,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:gt,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},Ce={name:"Fieldset",extends:bt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||ge()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||ge()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:Ve},components:{PlusIcon:Se,MinusIcon:at}};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},B(e)}function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,c)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?be(Object(t),!0).forEach(function(c){ht(e,c,t[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))})}return e}function ht(e,n,t){return(n=vt(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function vt(e){var n=yt(e,"string");return B(n)=="symbol"?n:n+""}function yt(e,n){if(B(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var c=t.call(e,n||"default");if(B(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var wt=["id"],kt=["id","aria-controls","aria-expanded","aria-label"],xt=["id","aria-labelledby"];function St(e,n,t,c,d,u){var r=Ne("ripple");return b(),g("fieldset",k({class:e.cx("root")},e.ptmi("root")),[a("legend",k({class:e.cx("legend")},e.ptm("legend")),[z(e.$slots,"legend",{toggleCallback:u.toggle},function(){return[e.toggleable?_("",!0):(b(),g("span",k({key:0,id:d.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,wt)),e.toggleable?V((b(),g("button",k({key:1,id:d.id+"_header",type:"button","aria-controls":d.id+"_content","aria-expanded":!d.d_collapsed,"aria-label":u.buttonAriaLabel,class:e.cx("toggleButton"),onClick:n[0]||(n[0]=function(){return u.toggle&&u.toggle.apply(u,arguments)}),onKeydown:n[1]||(n[1]=function(){return u.onKeyDown&&u.onKeyDown.apply(u,arguments)})},he(he({},e.toggleButtonProps),e.ptm("toggleButton"))),[z(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:d.d_collapsed,class:Ge(e.cx("toggleIcon"))},function(){return[(b(),Ke(He(d.d_collapsed?"PlusIcon":"MinusIcon"),k({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",k({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,kt)),[[r]]):_("",!0)]})],16),i(qe,k({name:"p-toggleable-content"},e.ptm("transition")),{default:w(function(){return[V(a("div",k({id:d.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":d.id+"_header"},e.ptm("contentContainer")),[a("div",k({class:e.cx("content")},e.ptm("content")),[z(e.$slots,"default")],16)],16,xt),[[ke,!d.d_collapsed]])]}),_:3},16)],16)}Ce.render=St;var Ct=function(n){var t=n.dt;return`
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
`)},_t={root:{position:"relative"}},$t={root:function(n){var t=n.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},Lt=we.extend({name:"skeleton",theme:Ct,classes:$t,inlineStyles:_t}),Pt={name:"BaseSkeleton",extends:xe,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Lt,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},_e={name:"Skeleton",extends:Pt,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function It(e,n,t,c,d,u){return b(),g("div",k({class:e.cx("root"),style:[e.sx("root"),u.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}_e.render=It;const Tt=async e=>new Promise((n,t)=>{const c=new Image;let d;if(typeof e=="string")d=e;else if(e instanceof ArrayBuffer)d=URL.createObjectURL(new Blob([new Uint8Array(e)]));else if(e instanceof Blob)d=URL.createObjectURL(e);else throw new Error("Invalid argument provided");c.onload=()=>{const{height:u,width:r}=c;e instanceof Blob&&URL.revokeObjectURL(d),n({height:u,width:r})},c.onerror=u=>t(u),c.src=d}),Bt={class:"w-full h-full"},Rt={key:0,class:"flex flex-col lg:flex-row space-x-8 w-full h-full"},Dt={key:1,class:"flex flex-col items-center justify-center h-full"},Ot={class:"flex flex-col lg:flex-row gap-8 w-full h-full"},jt={class:"flex flex-col rounded-xl dark:bg-surface-900 bg-gray-100 w-full h-full p-8 text-sm lg:text-xl"},Ft={class:"font-bold text-3xl"},Ut={class:"opacity-50"},Mt={key:0,class:"mt-8"},Et={key:1,class:"mt-8 text-md"},zt=["href"],At={class:"flex flex-col md:flex-row md:justify-between"},Vt={class:"mt-8 grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 w-fit"},Nt={class:"text-3xl"},Gt={class:"text-3xl"},Kt={class:"text-3xl"},Ht={class:"text-3xl"},qt={class:"text-3xl"},Xt={class:"text-3xl"},Wt={class:"rounded-lg dark:bg-black bg-white flex flex-col w-fit"},Zt={key:0,class:"flex p-2"},Qt={class:"font-semibold mr-10"},Jt={class:"mt-8 flex flex-col"},Yt={class:"mt-8 flex flex-wrap gap-4"},en={class:"mt-8 flex items-center"},tn={class:"mt-4 flex items-center opacity-50"},sn=ve({__name:"[id]",setup(e){const n=Xe(),t=We(),c=C(!0),d=C(!1),u=C(!1),r=C(),P=C();ye(async()=>{let o=n.params.id;Array.isArray(o)&&(o=o[0]);const l=await Ye([o]),h=await et(o);l.length>0?(r.value=l[0],j.value=pe(r.value)):d.value=!0,h?P.value=h:u.value=!0,c.value=!1});function R(){var o,l;(o=r.value)!=null&&o.content?(O((l=r.value)==null?void 0:l.content),t.add({severity:"success",summary:"Successfully copied level content",life:3e3})):t.add({severity:"error",summary:"This level is not downloadable!",life:3e3})}async function $e(o,l){return new Promise((h,p)=>{const I=new Image;I.onload=async function(){const E=await l.arrayBuffer(),x=await Tt(E);if(x.width!==x.height){t.add({severity:"error",summary:"Failed to download thumbnail",detail:"Contact the developer so that they will fix the issue. Error: thumbnail blob is not a square (width != height)",life:3e3}),p("thumbnail blob is not a square (width != height)");return}const v=document.createElement("canvas");v.width=x.width,v.height=x.height;const y=v.getContext("2d");if(!y){t.add({severity:"error",summary:"Failed to download thumbnail",detail:"Contact the developer so that they will fix the issue. Error: canvas ctx is not CanvasRenderingContext2D, it is null",life:3e3}),p("canvas ctx is not CanvasRenderingContext2D, it is null");return}y.fillStyle=Ie(o),y.beginPath(),y.arc(x.width/2,x.width/2,x.width/2,0,Math.PI*2),y.fill(),y.drawImage(I,0,0);const L=v.toDataURL("image/png");v.remove(),h(L)},I.src=URL.createObjectURL(l)})}async function Le(){if(r.value){const o=await $e(me(r.value).background,r.value.imageURI);ue(o,`${r.value.name}-thumbnail.png`),t.add({severity:"success",summary:"Successfully downloaded thumbnail",life:3e3})}else t.add({severity:"error",summary:"Failed to download thumbnail",detail:"Contact the developer so that they will fix the issue. Error: level.value is undefined",life:3e3})}function Pe(){r.value?(ue(r.value.imageURI,`${r.value.name}-thumbnail-borders.png`),t.add({severity:"success",summary:"Successfully downloaded thumbnail",life:3e3})):t.add({severity:"error",summary:"Failed to download thumbnail only with borders",detail:"Contact the developer so that they will fix the issue. Error: level.value is undefined",life:3e3})}function D(o){o.target.select()}function Ie(o){const l=o.x.toString(16).padStart(2,"0"),h=o.y.toString(16).padStart(2,"0"),p=o.z.toString(16).padStart(2,"0");return`#${l}${h}${p}`}function U(o){return`${o.x}, ${o.y}, ${o.z}`}function M(o){return`rgb(${o.x},${o.y},${o.z})`}const $=A(()=>{const o={x:0,y:0,z:0};return r.value?me(r.value):{background:o,main:o,player:o}});function Te(o){const l=Math.floor(o/60),h=Math.floor(o%60),p=Math.floor(o%1*100);return`${l}:${h.toString().padStart(2,"0")}.${p.toString().padStart(2,"0")}`}const Be=A(()=>{const o=fe((r.value?lt(r.value):-1)/60,2);return Te(o)}),Re=A(()=>r.value?fe(r.value.plays/r.value.starts*100):-1);function De(o){const l=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}).format(o),h=new Intl.DateTimeFormat("en-US",{month:"numeric",day:"numeric",year:"numeric"}).format(o);return`${l} (${h})`}function O(o){navigator.clipboard.writeText(o)}function Oe(){var o,l;(o=r.value)!=null&&o.creationTime&&(O((l=r.value)==null?void 0:l.creationTime.getTime().toString()),t.add({severity:"success",summary:"Successfully copied creation time",life:3e3}))}function je(){var o,l;(o=r.value)!=null&&o.id&&(O((l=r.value)==null?void 0:l.id),t.add({severity:"success",summary:"Successfully copied level ID",life:3e3}))}function Fe(){O(window.location.origin+"/circloo-companion"+n.fullPath),t.add({severity:"success",summary:"Successfully copied URL to this level",life:3e3})}function Ue(){var o;Je(`/browse?searchMode=creator&searchQuery=${(o=r.value)==null?void 0:o.creator}&sortMode=newest&filterMode=featured&duration=none&page=1&itemsPerPage=10`)}const j=C();function Me(){if(!r.value)return;const o=pe(r.value);o.bookmarked=!o.bookmarked,j.value=o,nt(r.value,o),t.add({severity:"success",summary:o.bookmarked?"Successfully bookmarked level":"Successfully unbookmarked level",life:3e3})}return(o,l)=>{var N,G,K,H,q,X,W,Z,Q,J,Y,ee,te,ne,oe,le,ae,re,se,ie,de,ce;const h=_e,p=dt,I=Ee,E=ut,x=Ce,v=rt,y=st,L=it;return b(),g("div",Bt,[s(c)&&!s(d)?(b(),g("div",Rt,[i(h,{shape:"circle",size:"24rem"}),i(h,{width:"70rem",height:"55rem",borderRadius:"16px"})])):_("",!0),!s(c)&&s(d)?(b(),g("div",Dt,[l[2]||(l[2]=a("h1",{class:"text-4xl mb-4"},"Level not found",-1)),i(p,{onClick:l[0]||(l[0]=S=>o.$router.back()),as:"router-link",label:"Go back"})])):_("",!0),V(a("div",Ot,[i(E,null,{default:w(()=>[i(I,{ref:"thumbnailRef",level:s(r),class:"!w-96 !h-96"},null,8,["level"])]),_:1}),a("div",jt,[a("h1",Ft,f((N=s(r))==null?void 0:N.name),1),a("h2",Ut,"by "+f((G=s(r))==null?void 0:G.creator),1),(K=s(r))!=null&&K.description?(b(),g("p",Mt,f((H=s(r))==null?void 0:H.description),1)):_("",!0),(q=s(r))!=null&&q.walkthroughLink?(b(),g("p",Et,[l[3]||(l[3]=m(" Walkthrough link: ")),a("a",{href:(X=s(r))==null?void 0:X.walkthroughLink,target:"_blank",title:"Walkthrough link",rel:"noopener noreferrer"},f((W=s(r))==null?void 0:W.walkthroughLink),9,zt)])):_("",!0),a("div",At,[a("div",Vt,[a("section",null,[l[4]||(l[4]=a("span",{class:"flex font-bold items-center"},[a("i",{class:"pi pi-play"}),m(" Finishers ")],-1)),a("div",Nt,f((Z=s(r))==null?void 0:Z.plays),1)]),a("section",null,[l[5]||(l[5]=a("span",{class:"flex font-bold items-center"},[a("i",{class:"pi pi-circle mr-1"}),m(" Completions ")],-1)),a("div",Gt,f((Q=s(r))==null?void 0:Q.totalCompletions),1)]),a("section",null,[l[6]||(l[6]=a("span",{class:"flex font-bold items-center"},[a("i",{class:"pi pi-clock mr-1"}),m(" Average Time ")],-1)),a("div",Kt,f(s(Be)),1)]),a("section",null,[l[7]||(l[7]=a("span",{class:"flex font-bold items-center"},[a("i",{class:"pi pi-user mr-1"}),m(" Players ")],-1)),a("div",Ht,f((J=s(r))==null?void 0:J.starts),1)]),a("section",null,[l[8]||(l[8]=a("span",{class:"flex font-bold items-center"},[a("i",{class:"pi pi-star mr-1"}),m(" Stars ")],-1)),a("div",qt,f((Y=s(r))==null?void 0:Y.stars),1)]),a("section",null,[l[9]||(l[9]=a("span",{class:"flex font-bold items-center"},[a("i",{class:"pi pi-percentage mr-1"}),m(" Clear Rate (CR) ")],-1)),a("div",Xt,f(s(Re))+"%",1)])]),a("div",Wt,[l[10]||(l[10]=a("span",{class:"p-2 text-xl font-bold"}," Leaderboard ",-1)),(ee=s(P))!=null&&ee.leaderboard?_("",!0):(b(),g("div",Zt," No Leaderboard Entries ")),(b(!0),g(Ze,null,Qe((te=s(P))==null?void 0:te.leaderboard,(S,T)=>(b(),g("div",{class:"flex justify-between p-2",key:T,style:F({color:T===0?"#fcb103":T===1?"#b3b3b3":T===2?"#cd7f32":"inherit"})},[a("span",Qt,f(T+1)+": "+f(S.name),1),a("span",null,f(("formatScore"in o?o.formatScore:s(ot))(S.score)),1)],4))),128))])]),i(x,{legend:"Explanation",toggleable:!0,collapsed:!0,class:"!mt-4 !text-sm !opacity-50 !w-min !text-nowrap"},{default:w(()=>l[11]||(l[11]=[a("footer",{class:"m-0"},[m(" Completions is amount of times your level was completed (also counts completions by the same person)."),a("br"),m(" Finishers is amount of people completed the level."),a("br"),m(" Players is amount of people who started the level, but not necessarily completed the level."),a("br"),m(" Clear rate is finishers divided by players. This show the approximate difficulty of the level."),a("br"),m("The lower the clear rate, the harder the level. ")],-1)])),_:1}),a("div",Jt,[i(L,{class:"!w-80"},{default:w(()=>[i(v,{class:"!rounded-b-none !w-36"},{default:w(()=>l[12]||(l[12]=[m("Background")])),_:1}),i(y,{tabindex:"0",onFocus:D,modelValue:U(s($).background),placeholder:"RGB Color",readonly:""},null,8,["modelValue"]),i(v,{class:"!w-10 !rounded-b-none",style:F({"background-color":M(s($).background)})},null,8,["style"])]),_:1}),i(L,{class:"!w-80"},{default:w(()=>[i(v,{class:"!rounded-none !w-36"},{default:w(()=>l[13]||(l[13]=[m("Objects")])),_:1}),i(y,{tabindex:"0",onFocus:D,modelValue:U(s($).main),placeholder:"RGB Color",readonly:""},null,8,["modelValue"]),i(v,{class:"!w-10 !rounded-none",style:F({"background-color":M(s($).main)})},null,8,["style"])]),_:1}),i(L,{class:"!w-80"},{default:w(()=>[i(v,{class:"!rounded-none !w-36"},{default:w(()=>l[14]||(l[14]=[m("Player")])),_:1}),i(y,{tabindex:"0",onFocus:D,modelValue:U(s($).player),placeholder:"RGB Color",readonly:""},null,8,["modelValue"]),i(v,{class:"!w-10 !rounded-none",style:F({"background-color":M(s($).player)})},null,8,["style"])]),_:1}),i(L,{class:"!w-80"},{default:w(()=>{var S;return[i(v,{class:"!rounded-t-none !w-36"},{default:w(()=>l[15]||(l[15]=[m("Editor hue")])),_:1}),i(y,{class:"!rounded-t-none",tabindex:"0",onFocus:D,modelValue:(((S=s(r))==null?void 0:S.color)||0).toString(),placeholder:"Hue Number",readonly:""},null,8,["modelValue"])]}),_:1})]),a("div",Yt,[i(p,{onClick:Me,label:(ne=s(j))!=null&&ne.bookmarked?"Unbookmark level":"Bookmark level",variant:(oe=s(j))!=null&&oe.bookmarked?void 0:"outlined"},null,8,["label","variant"]),i(p,{onClick:Ue,label:`More levels by ${(le=s(r))==null?void 0:le.creator}`},null,8,["label"]),i(p,{onClick:Fe,label:"Share level"}),i(p,{onClick:l[1]||(l[1]=S=>o.$router.back()),label:"Go back"}),i(p,{onClick:Le,label:"Download thumbnail as PNG",severity:"secondary"}),i(p,{onClick:Pe,label:"Download thumbnail only with borders",severity:"secondary"}),i(p,{onClick:R,disabled:!((ae=s(r))!=null&&ae.content),label:"Download level content",severity:"secondary"},null,8,["disabled"])]),a("div",en,[a("span",null,"Uploaded on "+f((re=s(r))!=null&&re.creationTime?De((se=s(r))==null?void 0:se.creationTime):"unknown"),1),i(p,{onClick:Oe,class:"!ml-4",icon:"pi pi-copy",size:"small",variant:"outlined",severity:"contrast"})]),a("span",null,"Moderation status: "+f(((ie=s(r))==null?void 0:ie.moderationStatus)??("ModerationStatus"in o?o.ModerationStatus:s(tt)).Unknown),1),a("div",tn,[a("span",null,"Level ID: "+f((de=s(r))!=null&&de.id?(ce=s(r))==null?void 0:ce.id:"unknown"),1),i(p,{onClick:je,class:"!ml-4",icon:"pi pi-copy",size:"small",variant:"outlined",severity:"contrast"})])])],512),[[ke,!s(c)&&!s(d)]])])}}});export{sn as default};
