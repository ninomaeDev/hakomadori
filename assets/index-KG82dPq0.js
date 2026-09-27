(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>e.subscription,t=t=>e(t)||t.lifetime,n=e=>!t(e),r=e=>t(e)?1/0:3,i=e=>!t(e),a=e=>t(e),o=(t,n,r=0,i=Date.now())=>!n.pro||e(t)||r>i,s=t=>e(t)?`pro`:t.lifetime?`standard`:`free`;function c(e){return{lifetime:e===`standard`,subscription:e===`pro`}}var l={free:`無料`,standard:`スタンダード（買い切り）`,pro:`Pro（サブスク）`},u={grid:910,wallD:120,wallH:2400,ceilingH:2400,stepPitch:800,jouFactor:1.62,jouRounding:`floor`,showDimensions:!0},d=[910,455,1e3,500],f=0;function p(e=``){return f=(f+1)%1e6,`${e}${Date.now().toString(36)}${f.toString(36)}${Math.random().toString(36).slice(2,6)}`}function m(e=`新しい間取り`,t={}){let n=new Date().toISOString();return{schema:1,id:p(`p`),name:e,createdAt:n,updatedAt:n,settings:{...u,...t},walls:[],openings:[],furniture:[],roomTags:[]}}var h=(e,t=0)=>{let n=Number(e);return Number.isFinite(n)?Math.round(n):t},g=e=>({...typeof e.name==`string`&&e.name.trim()?{name:e.name.trim().slice(0,40)}:{},...e.hidden===!0?{hidden:!0}:{},...e.locked===!0?{locked:!0}:{}}),_=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t};function v(e){let t=typeof e==`string`?JSON.parse(e):e;if(!t||typeof t!=`object`)throw Error(`プロジェクトの形式が正しくありません`);let n=h(t.schema,1);if(n>1)throw Error(`新しい形式（v${n}）のため読み込めません`);let r={...u,...t.settings??{}},i={grid:d.includes(h(r.grid))?h(r.grid):910,wallD:h(r.wallD,120),wallH:h(r.wallH,2400),ceilingH:h(r.ceilingH,2400),stepPitch:h(r.stepPitch,800)||800,jouFactor:_(r.jouFactor,1.62)||1.62,jouRounding:r.jouRounding===`round`?`round`:`floor`,showDimensions:r.showDimensions!==!1},a=(t.walls??[]).map(e=>({id:String(e.id??p(`w`)),x1:h(e.x1),y1:h(e.y1),x2:h(e.x2),y2:h(e.y2),d:h(e.d,i.wallD),z:h(e.z),h:h(e.h,i.wallH),...h(e.no)>0?{no:h(e.no)}:{},...g(e)})),o=new Set(a.map(e=>e.id)),s=(t.openings??[]).map(e=>({id:String(e.id??p(`o`)),kind:[`door`,`sliding`,`singleSliding`,`folding`,`window`].includes(e.kind)?e.kind:`door`,wallId:String(e.wallId),t:h(e.t),w:h(e.w,780),h:h(e.h,2e3),z:h(e.z),flipHinge:!!e.flipHinge,flipSide:!!e.flipSide,...e.kind===`folding`?{leaves:e.leaves===4?4:2}:{},...typeof e.open==`boolean`&&e.kind!==`window`?{open:e.open}:{},...g(e)})).filter(e=>o.has(e.wallId)),c=(t.furniture??[]).map(e=>({id:String(e.id??p(`f`)),catalogId:String(e.catalogId??`chest`),x:h(e.x),y:h(e.y),z:h(e.z),w:h(e.w,500),d:h(e.d,500),h:h(e.h,500),rot:_(e.rot,0),...g(e)})),l=(t.roomTags??[]).map(e=>({id:String(e.id??p(`r`)),x:h(e.x),y:h(e.y),name:String(e.name??``)})),f=new Date().toISOString();return{schema:1,id:String(t.id??p(`p`)),name:String(t.name??`読み込んだ間取り`),createdAt:String(t.createdAt??f),updatedAt:String(t.updatedAt??f),settings:i,walls:a,openings:s,furniture:c,roomTags:l}}var y=e=>JSON.stringify(e);function b(e,t=`${e.name} のコピー`){let n=v(JSON.parse(JSON.stringify(e))),r=new Date().toISOString();return{...n,id:p(`p`),name:t,createdAt:r,updatedAt:r}}function x(){let e=m(`サンプル：LDK＋洋室`),t=e.settings,n=(e,n,r,i,a,o={})=>({id:e,x1:n,y1:r,x2:i,y2:a,d:t.wallD,z:0,h:t.wallH,...o});e.walls=[n(`w_top`,0,0,7280,0),n(`w_right`,7280,0,7280,5460),n(`w_bottom`,7280,5460,0,5460),n(`w_left`,0,5460,0,0),n(`w_mid`,4550,0,4550,5460),n(`w_bed`,4550,3640,7280,3640)];let r=(e,t,n,r,i,a,o,s=!1,c=!1)=>({id:e,kind:t,wallId:n,t:r,w:i,h:a,z:o,flipHinge:s,flipSide:c});e.openings=[r(`o_win1`,`window`,`w_top`,2275,1690,800,800),r(`o_win2`,`window`,`w_top`,5915,1690,800,800),r(`o_haki`,`window`,`w_bottom`,5005,1690,2e3,0),r(`o_entry`,`door`,`w_left`,910,780,2e3,0,!1,!0),r(`o_door1`,`door`,`w_mid`,2275,780,2e3,0,!0,!1),r(`o_sl`,`sliding`,`w_mid`,4550,1690,2e3,0)];let i=(e,t,n,r,i,a,o,s=0)=>({id:e,catalogId:t,x:n,y:r,z:0,w:i,d:a,h:o,rot:s});return e.furniture=[i(`f_sofa`,`sofa3`,2100,4700,2100,900,800,180),i(`f_table`,`lowtable`,2100,3700,1e3,500,400),i(`f_tv`,`tvboard`,2100,2700,1500,400,450),i(`f_dining`,`dining4`,2700,1150,1350,800,720),i(`f_chair1`,`chair`,2400,520,450,500,800),i(`f_chair2`,`chair`,3e3,520,450,500,800),i(`f_chair3`,`chair`,2400,1780,450,500,800,180),i(`f_chair4`,`chair`,3e3,1780,450,500,800,180),i(`f_bed`,`bedS`,6600,1250,970,1950,850),i(`f_desk`,`desk`,5300,350,1200,600,720,180)],e.roomTags=[{id:`r_ldk`,x:2275,y:2730,name:`LDK`},{id:`r_bed`,x:5915,y:1820,name:`洋室`},{id:`r_wic`,x:5915,y:4550,name:`納戸`}],e}var S=.5,C=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y);function w(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i,o=a===0?0:((e.x-t.x)*r+(e.y-t.y)*i)/a;o=Math.max(0,Math.min(1,o));let s={x:t.x+r*o,y:t.y+i*o};return{t:o,pt:s,d:C(e,s)}}function T(e,t,n,r){let i={x:t.x-e.x,y:t.y-e.y},a={x:r.x-n.x,y:r.y-n.y},o=i.x*a.y-i.y*a.x;if(Math.abs(o)<1e-9)return null;let s={x:n.x-e.x,y:n.y-e.y},c=(s.x*a.y-s.y*a.x)/o,l=(s.x*i.y-s.y*i.x)/o;return c<-1e-9||c>1.000000001||l<-1e-9||l>1.000000001?null:{x:e.x+i.x*c,y:e.y+i.y*c}}function E(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return t/2}function D(e){let t=E(e);if(Math.abs(t)<1e-9){let t=e.length||1;return{x:e.reduce((e,t)=>e+t.x,0)/t,y:e.reduce((e,t)=>e+t.y,0)/t}}let n=0,r=0;for(let t=0;t<e.length;t++){let i=e[t],a=e[(t+1)%e.length],o=i.x*a.y-a.x*i.y;n+=(i.x+a.x)*o,r+=(i.y+a.y)*o}return{x:n/(6*t),y:r/(6*t)}}function O(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n}function k(e){let t=D(e);if(O(t,e))return t;let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length];i.y>t.y!=a.y>t.y&&n.push(i.x+(t.y-i.y)*(a.x-i.x)/(a.y-i.y))}n.sort((e,t)=>e-t);let r=t,i=-1;for(let e=0;e+1<n.length;e+=2){let a=n[e+1]-n[e];a>i&&(i=a,r={x:(n[e]+n[e+1])/2,y:t.y})}return r}function A(e,t){let n=t*Math.PI/180,r=Math.cos(n),i=Math.sin(n);return{x:e.x*r-e.y*i,y:e.x*i+e.y*r}}var j=1e4,M=e=>`${Math.round(e.x)},${Math.round(e.y)}`,N=e=>e.z<=0&&e.h>0;function ee(e,t=[]){let n=e.filter(N).map(e=>({a:{x:e.x1,y:e.y1},b:{x:e.x2,y:e.y2}})).filter(e=>Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)>S),r=new Map,i=new Map;for(let e=0;e<n.length;e++){let t=n[e],a=[0,1];for(let r=0;r<n.length;r++){if(e===r)continue;let i=n[r],o=T(t.a,t.b,i.a,i.b);o&&a.push(w(o,t.a,t.b).t);for(let e of[i.a,i.b]){let n=w(e,t.a,t.b);n.d<.5&&a.push(n.t)}}a.sort((e,t)=>e-t);let o=null;for(let e of a){let n={x:t.a.x+(t.b.x-t.a.x)*e,y:t.a.y+(t.b.y-t.a.y)*e},a=M(n);if(r.has(a)||r.set(a,{x:Math.round(n.x),y:Math.round(n.y)}),o!==null&&o!==a){let e=o<a?`${o}|${a}`:`${a}|${o}`;i.set(e,o<a?[o,a]:[a,o])}o=a}}let a=new Map;for(let[e,t]of i.values())a.has(e)||a.set(e,new Set),a.has(t)||a.set(t,new Set),a.get(e).add(t),a.get(t).add(e);let o=!0;for(;o;){o=!1;for(let[e,t]of a)if(t.size<=1){for(let n of t)a.get(n)?.delete(e);a.delete(e),o=!0}}let s=new Map;for(let[e,t]of a){let n=r.get(e);s.set(e,[...t].sort((e,t)=>{let i=r.get(e),a=r.get(t);return Math.atan2(i.y-n.y,i.x-n.x)-Math.atan2(a.y-n.y,a.x-n.x)}))}let c=new Set,l=[];for(let[e,t]of s)for(let n of t){if(c.has(`${e}>${n}`))continue;let t=[],i=e,a=n,o=0;for(;!c.has(`${i}>${a}`)&&o++<1e5;){c.add(`${i}>${a}`),t.push(i);let e=s.get(a),n=e[(e.indexOf(i)-1+e.length)%e.length];i=a,a=n}let u=te(t.map(e=>r.get(e)));if(u.length<3)continue;let d=E(u);if(d>j){let e=k(u);l.push({key:`${Math.round(e.x)},${Math.round(e.y)}:${Math.round(d)}`,polygon:u,areaMm2:d,centroid:e})}}l.sort((e,t)=>Math.round(e.centroid.y-t.centroid.y)||Math.round(e.centroid.x-t.centroid.x)||e.areaMm2-t.areaMm2);for(let e of t){let t;for(let n of l)O(e,n.polygon)&&(!t||n.areaMm2<t.areaMm2)&&(t=n);t&&!t.tag&&(t.tag=e)}return l}function te(e){let t=[];for(let n=0;n<e.length;n++){let r=e[(n-1+e.length)%e.length],i=e[n],a=e[(n+1)%e.length],o=(i.x-r.x)*(a.y-i.y)-(i.y-r.y)*(a.x-i.x);Math.abs(o)>1e-6&&t.push(i)}return t}var ne=e=>e/1e6;function re(e,t){let n=ne(e)/t.jouFactor*10;return(t.jouRounding===`round`?Math.round(n):Math.floor(n+1e-9))/10}var ie=e=>`${ne(e).toFixed(2)}㎡`,ae=(e,t)=>`${re(e,t).toFixed(1)}帖`;function oe(e,t){let n;for(let r of e)O(t,r.polygon)&&(!n||r.areaMm2<n.areaMm2)&&(n=r);return n}function P(e,t=null,...n){let r=document.createElement(e);if(t)for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2).toLowerCase(),n):e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e===`html`?r.innerHTML=String(n):e in r&&typeof n!=`string`?r[e]=n:r.setAttribute(e,n===!0?``:String(n)));return se(r,n),r}function se(e,t){for(let n of t.flat())n!=null&&n!==!1&&e.append(n instanceof Node?n:String(n))}var ce=(e,t=document)=>t.querySelector(e);function F(e,t=20){let n=document.createElement(`span`);return n.innerHTML=`<svg class="ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${le[e]}</svg>`,n.firstElementChild}var le={select:`<path d="M5 3l14 8-6 2-3 6z"/>`,wall:`<path d="M4 20V6h16"/><path d="M4 6h16v3H7v11H4z" fill="currentColor" stroke="none"/>`,door:`<path d="M4 20h4"/><path d="M4 20V8"/><path d="M4 8a12 12 0 0 1 12 12" stroke-dasharray="2 2"/><path d="M16 20h4"/>`,sofa:`<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M3 11h4v4h10v-4h4v6H3z"/><path d="M5 17v2M19 17v2"/>`,undo:`<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>`,keyboard:`<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>`,redo:`<path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>`,back:`<path d="M15 18l-6-6 6-6"/>`,gear:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`,share:`<path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>`,plus:`<path d="M12 5v14M5 12h14"/>`,minus:`<path d="M5 12h14"/>`,fit:`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`,trash:`<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>`,copy:`<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>`,rotate:`<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>`,flip:`<path d="M12 3v18"/><path d="M8 7L3 12l5 5z"/><path d="M16 7l5 5-5 5z"/>`,layers:`<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5" opacity=".5"/>`,eyeOff:`<path d="M3 3l18 18"/><path d="M10.6 5.1A10 10 0 0 1 12 5c6 0 10 7 10 7a18 18 0 0 1-3.2 4.1M6.6 6.6C3.8 8.5 2 12 2 12s4 7 10 7a9.7 9.7 0 0 0 4.1-.9"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>`,unlock:`<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>`,chevR:`<path d="M9 6l6 6-6 6"/>`,chevD:`<path d="M6 9l6 6 6-6"/>`,folder:`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`,room:`<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 12h7v8"/>`,window:`<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M12 5v14M4 12h16"/>`,pencil:`<path d="M4 20h4L20 8l-4-4L4 16z"/><path d="M14 6l4 4"/>`,target:`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>`,search:`<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>`,grip:`<path d="M5 8h14M5 12h14M5 16h14"/>`,sort:`<path d="M7 4v16M7 20l-3-3M7 20l3-3"/><path d="M17 20V4M17 4l-3 3M17 4l3 3"/>`,swapSide:`<path d="M3 12h18"/><path d="M8 3l4 4 4-4"/><path d="M8 21l4-4 4 4"/>`,lock:`<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,eye:`<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>`,cube:`<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M3 7l9 5 9-5"/>`,walk:`<circle cx="13" cy="4" r="2"/><path d="M9 21l2-6 3 3v3M7 12l3-4 4 1 2 4 3 1"/>`,ceiling:`<path d="M3 6h18"/><path d="M5 6v14M19 6v14"/><path d="M9 10h6" stroke-dasharray="2 2"/>`,up:`<path d="M12 19V5M5 12l7-7 7 7"/>`,down:`<path d="M12 5v14M5 12l7 7 7-7"/>`,left:`<path d="M19 12H5M12 5l-7 7 7 7"/>`,right:`<path d="M5 12h14M12 5l7 7-7 7"/>`,image:`<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>`,file:`<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>`,more:`<circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/>`,close:`<path d="M6 6l12 12M18 6L6 18"/>`,check:`<path d="M5 12l5 5 9-10"/>`,play:`<path d="M7 4l13 8-13 8z"/>`,ruler:`<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>`,split:`<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>`},ue=0;function I(e,t){if(typeof document>`u`)return;let n=document.getElementById(`toast`);n||(n=P(`div`,{id:`toast`,role:`status`}),document.body.append(n));let r=n,i=()=>r.classList.remove(`show`);r.replaceChildren(P(`span`,null,e)),r.classList.toggle(`has-action`,!!t),t&&r.append(P(`button`,{class:`toast-action`,onclick:()=>{i(),t.run()}},t.label)),r.classList.add(`show`),clearTimeout(ue),ue=window.setTimeout(i,t?5e3:2600)}var de=[`リビング`,`ダイニング`,`寝室`,`キッチン`,`水回り`,`収納`,`ワーク`],fe=[{id:`sofa2`,name:`ソファ 2人掛け`,category:`リビング`,shape:`sofa`,w:1600,d:850,h:800,color:`#8a9bb0`,pro:!1},{id:`sofa3`,name:`ソファ 3人掛け`,category:`リビング`,shape:`sofa`,w:2100,d:900,h:800,color:`#7d8c80`,pro:!1},{id:`lowtable`,name:`ローテーブル`,category:`リビング`,shape:`table`,w:1e3,d:500,h:400,color:`#b08a60`,pro:!1},{id:`tvboard`,name:`TVボード`,category:`リビング`,shape:`tv`,w:1500,d:400,h:450,color:`#6b5a48`,pro:!1},{id:`rug`,name:`ラグ`,category:`リビング`,shape:`rug`,w:2e3,d:1400,h:10,color:`#d8cbb5`,pro:!0},{id:`plant`,name:`観葉植物`,category:`リビング`,shape:`plant`,w:450,d:450,h:1200,color:`#5f8f58`,pro:!0},{id:`dining4`,name:`ダイニングテーブル 4人`,category:`ダイニング`,shape:`table`,w:1350,d:800,h:720,color:`#b08a60`,pro:!1},{id:`dining6`,name:`ダイニングテーブル 6人`,category:`ダイニング`,shape:`table`,w:1800,d:900,h:720,color:`#a07850`,pro:!0},{id:`chair`,name:`ダイニングチェア`,category:`ダイニング`,shape:`chair`,w:450,d:500,h:800,color:`#8b6a4a`,pro:!1},{id:`bedS`,name:`シングルベッド`,category:`寝室`,shape:`bed`,w:970,d:1950,h:850,color:`#e6e1d6`,pro:!1},{id:`bedSD`,name:`セミダブルベッド`,category:`寝室`,shape:`bed`,w:1200,d:1950,h:850,color:`#e6e1d6`,pro:!1},{id:`bedD`,name:`ダブルベッド`,category:`寝室`,shape:`bed`,w:1400,d:1950,h:850,color:`#e6e1d6`,pro:!0},{id:`wardrobe`,name:`ワードローブ`,category:`寝室`,shape:`box`,w:900,d:600,h:1800,color:`#c7b299`,pro:!1},{id:`fridge`,name:`冷蔵庫`,category:`キッチン`,shape:`fridge`,w:650,d:700,h:1800,color:`#e9ecef`,pro:!1},{id:`kitchenI`,name:`キッチン I型 2550`,category:`キッチン`,shape:`kitchen`,w:2550,d:650,h:850,color:`#f1f1ee`,pro:!1},{id:`cupboard`,name:`食器棚`,category:`キッチン`,shape:`shelf`,w:1200,d:450,h:1800,color:`#c7b299`,pro:!0},{id:`toilet`,name:`トイレ`,category:`水回り`,shape:`toilet`,w:400,d:700,h:750,color:`#fafafa`,pro:!1},{id:`bath1616`,name:`ユニットバス 1616`,category:`水回り`,shape:`bath`,w:1600,d:1600,h:2200,color:`#eef3f6`,pro:!0},{id:`washer`,name:`洗濯機`,category:`水回り`,shape:`box`,w:600,d:600,h:1e3,color:`#eceff1`,pro:!1},{id:`bookshelf`,name:`本棚`,category:`収納`,shape:`shelf`,w:800,d:300,h:1800,color:`#b99a74`,pro:!1},{id:`box`,name:`汎用ボックス`,category:`収納`,shape:`box`,w:1e3,d:600,h:700,color:`#b8ab98`,pro:!1},{id:`chest`,name:`チェスト`,category:`収納`,shape:`box`,w:800,d:450,h:900,color:`#b99a74`,pro:!1},{id:`desk`,name:`デスク`,category:`ワーク`,shape:`desk`,w:1200,d:600,h:720,color:`#c8a57a`,pro:!1},{id:`officechair`,name:`ワークチェア`,category:`ワーク`,shape:`chair`,w:600,d:600,h:1e3,color:`#454a52`,pro:!0}],pe=e=>fe.find(t=>t.id===e),L=e=>Math.hypot(e.x2-e.x1,e.y2-e.y1),me=e=>Math.atan2(e.y2-e.y1,e.x2-e.x1)*180/Math.PI,he=e=>{let t=L(e)||1;return{x:(e.x2-e.x1)/t,y:(e.y2-e.y1)/t}},ge=e=>{let t=he(e);return{x:-t.y,y:t.x}},_e=(e,t)=>{let n=he(e);return{x:e.x1+n.x*t,y:e.y1+n.y*t}};function ve(e,t){let n={x:e.x1,y:e.y1},r={x:e.x2,y:e.y2},i=0,a=0,o=he(e);for(let s of t){if(s.id===e.id)continue;let t={x:s.x1,y:s.y1},c={x:s.x2,y:s.y2},l=he(s);Math.abs(o.x*l.y-o.y*l.x)<1e-6||((C(n,t)<.5||C(n,c)<.5)&&(i=Math.max(i,s.d/2)),(C(r,t)<.5||C(r,c)<.5)&&(a=Math.max(a,s.d/2)))}return[i,a]}function ye(e,t,n=[0,0]){let r=L(e),i=-n[0],a=r+n[1],o=e.z,s=e.z+e.h,c=t.filter(t=>t.wallId===e.id).map(e=>({a:e.t-e.w/2,b:e.t+e.w/2,z0:e.z,z1:e.z+e.h})).filter(e=>e.b>e.a&&e.z1>o&&e.z0<s),l=new Set([i,a]);for(let e of c)e.a>i&&e.a<a&&l.add(e.a),e.b>i&&e.b<a&&l.add(e.b);let u=[...l].sort((e,t)=>e-t),d=[];for(let e=0;e+1<u.length;e++){let t=u[e],n=u[e+1];if(n-t<1e-6)continue;let r=(t+n)/2,i=c.filter(e=>e.a<=r&&e.b>=r).map(e=>[Math.max(e.z0,o),Math.min(e.z1,s)]).sort((e,t)=>e[0]-t[0]),a=o;for(let[e,r]of i)e>a&&d.push({s0:t,s1:n,z0:a,z1:e}),a=Math.max(a,r);a<s&&d.push({s0:t,s1:n,z0:a,z1:s})}let f=[];for(let e of d){let t=f.find(t=>Math.abs(t.s1-e.s0)<1e-6&&t.z0===e.z0&&t.z1===e.z1);t?t.s1=e.s1:f.push({...e})}return f}var R=e=>e>=910?e:e*2;function be(e,t,n=2){let r=R(t.grid);switch(e){case`door`:return{w:r-130,h:2e3,z:0};case`sliding`:return{w:r*2-130,h:2e3,z:0};case`singleSliding`:return{w:r-130,h:2e3,z:0};case`folding`:return{w:n===4?r*2-130:r-130,h:2e3,z:0};case`window`:return{w:r*2-130,h:t.stepPitch,z:t.stepPitch}}}var xe=e=>e.kind!==`window`,Se=e=>xe(e)&&(e.open??e.kind===`door`);function z(e){let t=e.x2-e.x1,n=e.y2-e.y1,r=Math.abs(t)>=Math.abs(n),i=r?t>0||t===0&&n>=0:n>0||n===0&&t>=0;return{horizontal:r,first:i?1:2,second:i?2:1,labels:r?[`左端`,`右端`]:[`上端`,`下端`]}}var Ce=(e,t,n)=>{let r=L(e);return n>=r?r/2:Math.min(r-n/2,Math.max(n/2,t))};function B(e,t,n,r,i){let a=L(e),o=w(t,{x:e.x1,y:e.y1},{x:e.x2,y:e.y2}).t*a;if(i){let e=R(r)/2;o=Math.round(o/e)*e}return Math.round(Ce(e,o,n))}function V(e,t,n){let r=null;for(let i of e){let e=w(t,{x:i.x1,y:i.y1},{x:i.x2,y:i.y2}),a=i.d/2+n;e.d<=a&&(!r||e.d<r.d)&&(r={wall:i,d:e.d})}return r}function we(e,t,n){let r=[];for(let i of e)i.id!==n&&(C(t,{x:i.x1,y:i.y1})<.5&&r.push({id:i.id,end:1}),C(t,{x:i.x2,y:i.y2})<.5&&r.push({id:i.id,end:2}));return r}function Te(e,t,n){let r=_e(e,t),i=ge(e),a=e.d/2+150;return{pos:oe(n,{x:r.x+i.x*a,y:r.y+i.y*a}),neg:oe(n,{x:r.x-i.x*a,y:r.y-i.y*a})}}function Ee(e,t,n,r,i=[]){let{pos:a,neg:o}=Te(e,t,r),s=1;a&&!o?s=1:o&&!a?s=-1:a&&o&&(s=a.areaMm2>=o.areaMm2?1:-1);let{lo:c,hi:l}=Oe(e,t,n,i),u=t-n/2-c,d=l-(t+n/2);return{flipSide:s===-1,flipHinge:d<u}}function De(e,t,n,r,i=[],a=[]){let{flipSide:o}=Ee(e,t,n,r,i),{lo:s,hi:c}=Oe(e,t,n,i);for(let e of a)e.t+e.w/2<=t-n/2?s=Math.max(s,e.t+e.w/2):e.t-e.w/2>=t+n/2&&(c=Math.min(c,e.t-e.w/2));return{flipSide:o,flipHinge:t-n/2-s>c-(t+n/2)}}function Oe(e,t,n,r){let i=L(e),a={x:e.x1,y:e.y1},o={x:e.x2,y:e.y2},s=[0,i];for(let t of r){if(t.id===e.id)continue;let n={x:t.x1,y:t.y1},r={x:t.x2,y:t.y2};for(let t of[n,r]){let n=w(t,a,o);n.d<=e.d/2+.5&&s.push(n.t*i)}let c=T(a,o,n,r);c&&s.push(w(c,a,o).t*i)}let c=t-n/2,l=t+n/2,u=0,d=i;for(let e of s)e<=c+1&&e>u&&(u=e),e>=l-1&&e<d&&(d=e);return{lo:u,hi:d}}function ke(e,t,n){let{pos:r,neg:i}=Te(t,e.t,n),a=e.flipSide?i:r,o=e.flipSide?r:i;return a&&o?`between`:a?`inward`:o?`outward`:`unknown`}function Ae(e){let t=[[!1,!1],[!1,!0],[!0,!0],[!0,!1]],[n,r]=t[(t.findIndex(([t,n])=>t===e.flipSide&&n===e.flipHinge)+1)%t.length];return{flipSide:n,flipHinge:r}}function je(e,t){let n=new Map;for(let r of t){let t=e.walls.find(e=>e.id===r);t&&!n.has(r)&&n.set(r,L(t))}return n}function Me(e,t){for(let[n,r]of t){let t=e.walls.find(e=>e.id===n);if(!t)continue;let i=L(t)-r;if(!(Math.abs(i)<1e-9))for(let t of e.openings)t.wallId===n&&(t.t=Math.round(t.t+i))}}function Ne(e,t,n,r,i=!0){let a=e.walls.find(e=>e.id===t);if(!a)return 0;let o=n===1?{x:a.x1,y:a.y1}:{x:a.x2,y:a.y2},s=i?we(e.walls,o,a.id):[],c=s.filter(t=>!e.walls.find(e=>e.id===t.id)?.locked),l=Math.round(r.x),u=Math.round(r.y),d=l!==o.x||u!==o.y,f=je(e,[...n===1?[a.id]:[],...c.filter(e=>e.end===1).map(e=>e.id)]);n===1?Object.assign(a,{x1:l,y1:u}):Object.assign(a,{x2:l,y2:u});for(let t of c){let n=e.walls.find(e=>e.id===t.id);t.end===1?Object.assign(n,{x1:l,y1:u}):Object.assign(n,{x2:l,y2:u})}return Me(e,f),Re(e),d?s.length-c.length:0}function Pe(e,t,n,r,i=!0){let a=e.walls.find(e=>e.id===t);if(!a)return 0;let o={x:a.x1,y:a.y1},s={x:a.x2,y:a.y2},c={x:Math.round(o.x+n),y:Math.round(o.y+r)},l={x:Math.round(s.x+n),y:Math.round(s.y+r)},u=i?[...we(e.walls,o,a.id).map(e=>({...e,from:o,to:c})),...we(e.walls,s,a.id).map(e=>({...e,from:s,to:l}))]:[],d=je(e,u.filter(t=>t.end===1&&!e.walls.find(e=>e.id===t.id)?.locked).map(e=>e.id));Object.assign(a,{x1:c.x,y1:c.y,x2:l.x,y2:l.y});let f=0;for(let t of u){let n=e.walls.find(e=>e.id===t.id);if(n.locked){C(c,t.from)>=.5&&C(l,t.from)>=.5&&f++;continue}t.end===1?Object.assign(n,{x1:t.to.x,y1:t.to.y}):Object.assign(n,{x2:t.to.x,y2:t.to.y})}return Me(e,d),Re(e),f}function Fe(e,t,n,r=1){let i=e.walls.find(e=>e.id===t);if(!i||!(n>0))return 0;let a=L(i)||1,o={x:(i.x2-i.x1)/a,y:(i.y2-i.y1)/a};return r===1?Ne(e,t,2,{x:i.x1+o.x*n,y:i.y1+o.y*n}):Ne(e,t,1,{x:i.x2-o.x*n,y:i.y2-o.y*n})}function Ie(e,t,n,r=1){let i=e.walls.find(e=>e.id===t);if(!i)return 0;let a=A({x:L(i),y:0},n);return r===1?Ne(e,t,2,{x:i.x1+a.x,y:i.y1+a.y}):Ne(e,t,1,{x:i.x2+a.x,y:i.y2+a.y})}function Le(e,t,n,r){n=Math.round(n),r=Math.round(r);let i={moved:0,locked:0,cut:0,stuck:0};if(!n&&!r)return i;let a=e=>new Set(t.filter(t=>t.type===e).map(e=>e.id)),o=a(`wall`),s=e.walls.filter(e=>o.has(e.id));i.locked+=s.filter(e=>e.locked).length;let c=s.filter(e=>!e.locked),l=new Set(c.map(e=>e.id)),u=[],d=new Map;for(let t of c)for(let n of[{x:t.x1,y:t.y1},{x:t.x2,y:t.y2}])for(let r of we(e.walls,n,t.id))l.has(r.id)||u.some(e=>e.id===r.id&&e.end===r.end)||(e.walls.find(e=>e.id===r.id)?.locked?d.set(`${r.id}:${r.end}`,n):u.push({...r,x:n.x,y:n.y}));let f=je(e,u.filter(e=>e.end===1).map(e=>e.id));for(let e of c)Object.assign(e,{x1:e.x1+n,y1:e.y1+r,x2:e.x2+n,y2:e.y2+r});for(let t of u){let i=e.walls.find(e=>e.id===t.id);t.end===1?Object.assign(i,{x1:t.x+n,y1:t.y+r}):Object.assign(i,{x2:t.x+n,y2:t.y+r})}Me(e,f),i.moved+=c.length,i.cut=[...d.values()].filter(e=>!c.some(t=>C({x:t.x1,y:t.y1},e)<.5||C({x:t.x2,y:t.y2},e)<.5)).length;let p=a(`opening`);for(let t of e.openings){if(!p.has(t.id))continue;if(l.has(t.wallId)){i.moved++;continue}let a=e.walls.find(e=>e.id===t.wallId);if(!a||t.locked||a.locked){i.locked++;continue}let o=L(a)||1,s=(n*(a.x2-a.x1)+r*(a.y2-a.y1))/o,c=Math.round(Ce(a,t.t+s,t.w));c===t.t?i.stuck++:(t.t=c,i.moved++)}let m=a(`furniture`);for(let t of e.furniture)if(m.has(t.id)){if(t.locked){i.locked++;continue}t.x+=n,t.y+=r,i.moved++}return Re(e),i}function Re(e){for(let t of e.openings){let n=e.walls.find(e=>e.id===t.wallId);if(!n)continue;let r=L(n);t.w>r&&(t.w=Math.max(1,Math.floor(r))),t.t=Math.round(Ce(n,t.t,t.w))}}var ze=(e,t)=>Math.round(e/t)*t;function Be(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push({x:r.x1,y:r.y1},{x:r.x2,y:r.y2});return n}function Ve(e,t){let n=null,r=t.thresholdMm;for(let i of Be(t.walls,t.excludeWallIds)){let t=C(e,i);t<=r&&(r=t,n=i)}if(n)return{pt:{...n},kind:`endpoint`};let i=t.grid;if(t.mode===`line`){for(let n of t.walls){if(t.excludeWallIds?.has(n.id))continue;let r=w(e,{x:n.x1,y:n.y1},{x:n.x2,y:n.y2});if(r.d<=t.thresholdMm)return{pt:{x:Math.round(r.pt.x),y:Math.round(r.pt.y)},kind:`wall`}}let n=ze(e.x,i),r=ze(e.y,i),a=Math.abs(e.x-n),o=Math.abs(e.y-r);return a<=t.thresholdMm&&o<=t.thresholdMm?{pt:{x:n,y:r},kind:`grid`}:a<=o?{pt:{x:n,y:Math.round(e.y)},kind:`gridline`}:{pt:{x:Math.round(e.x),y:r},kind:`gridline`}}return{pt:{x:ze(e.x,i),y:ze(e.y,i)},kind:`grid`}}function He(e,t){return Math.abs(t.x-e.x)>=Math.abs(t.y-e.y)?{x:t.x,y:e.y}:{x:e.x,y:t.y}}var H={bg:`#f6f5f1`,grid:`#e4e1da`,gridMajor:`#d2cec4`,axis:`#c3bdb0`,room:`#fbf8f1`,roomSel:`#e3f1ec`,wall:`#30343b`,wallPartial:`#8c939c`,wallHang:`#b9bec5`,opening:`#ffffff`,sym:`#30343b`,accent:`#2f7d6d`,accentSoft:`rgba(47,125,109,0.18)`,dim:`#6b6f76`,label:`#2a2d33`,furniture:`#ffffff`},Ue=(e,t)=>({x:e.ox+t.x*e.scale,y:e.oy+t.y*e.scale}),We=(e,t)=>({x:(t.x-e.ox)/e.scale,y:(t.y-e.oy)/e.scale});function Ge(e,t){let n=he(e),r=ge(e),i=e.d/2,a={x:e.x1-n.x*t[0],y:e.y1-n.y*t[0]},o={x:e.x2+n.x*t[1],y:e.y2+n.y*t[1]};return[{x:a.x+r.x*i,y:a.y+r.y*i},{x:o.x+r.x*i,y:o.y+r.y*i},{x:o.x-r.x*i,y:o.y-r.y*i},{x:a.x-r.x*i,y:a.y-r.y*i}]}function Ke(e){return[{x:-e.w/2,y:-e.d/2},{x:e.w/2,y:-e.d/2},{x:e.w/2,y:e.d/2},{x:-e.w/2,y:e.d/2}].map(t=>{let n=A(t,e.rot);return{x:n.x+e.x,y:n.y+e.y}})}function qe(e,t=!1){if(t){let t=qe({...e,walls:e.walls.filter(e=>!e.hidden),furniture:e.furniture.filter(e=>!e.hidden)});if(t)return t}let n=[],r=[];for(let t of e.walls)n.push(t.x1,t.x2),r.push(t.y1,t.y2);for(let t of e.furniture)for(let e of Ke(t))n.push(e.x),r.push(e.y);return n.length?{minX:Math.min(...n),minY:Math.min(...r),maxX:Math.max(...n),maxY:Math.max(...r)}:null}function Je(e,t,n,r=40,i=null){let a=qe(e,!0),o=(a&&i?{minX:Math.min(a.minX,i.minX),minY:Math.min(a.minY,i.minY),maxX:Math.max(a.maxX,i.maxX),maxY:Math.max(a.maxY,i.maxY)}:a??i)??{minX:-1820,minY:-1820,maxX:5460,maxY:3640},s=Math.max(o.maxX-o.minX,1e3),c=Math.max(o.maxY-o.minY,1e3),l=Math.min(r,t/4),u=Math.min(r,n/4),d=Math.max(.004,Math.min((t-l*2)/s,(n-u*2)/c)),f=(o.minX+o.maxX)/2,p=(o.minY+o.maxY)/2;return{scale:d,ox:t/2-f*d,oy:n/2-p*d}}function Ye(e,t,n){e.beginPath(),n.forEach((n,r)=>{let i=Ue(t,n);r===0?e.moveTo(i.x,i.y):e.lineTo(i.x,i.y)}),e.closePath()}function Xe(e,t,n,r){let i=Ue(t,n),a=Ue(t,r);e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(a.x,a.y),e.stroke()}function Ze(e,t,n,r,i){if(!(t.scale>0)||!Number.isFinite(t.scale))return;let a=i;for(;a*t.scale<9;)a*=2;let o=R(i)*2,s=We(t,{x:0,y:0}),c=We(t,{x:n,y:r}),l=Math.floor(s.x/a)*a,u=Math.floor(s.y/a)*a;e.lineWidth=1;for(let i=0;i<2;i++){e.strokeStyle=i===0?H.grid:H.gridMajor,e.beginPath();for(let n=l;n<=c.x;n+=a){let a=Math.abs(n%o)<1e-6&&o*t.scale>30;if(i===1!==a)continue;let s=Math.round(t.ox+n*t.scale)+.5;e.moveTo(s,0),e.lineTo(s,r)}for(let r=u;r<=c.y;r+=a){let a=Math.abs(r%o)<1e-6&&o*t.scale>30;if(i===1!==a)continue;let s=Math.round(t.oy+r*t.scale)+.5;e.moveTo(0,s),e.lineTo(n,s)}e.stroke()}e.strokeStyle=H.axis,e.beginPath(),e.moveTo(Math.round(t.ox)+.5,0),e.lineTo(Math.round(t.ox)+.5,r),e.moveTo(0,Math.round(t.oy)+.5),e.lineTo(n,Math.round(t.oy)+.5),e.stroke()}function Qe(e,t,n,r,i,a,o){let s=o.selectedIds??new Set;e.fillStyle=o.exportMode?`#ffffff`:H.bg,e.fillRect(0,0,t,n),o.showGrid&&Ze(e,a,t,n,r.settings.grid);for(let t of i)Ye(e,a,t.polygon),e.fillStyle=o.selectedRoom&&o.selectedRoom.key===t.key?H.roomSel:H.room,e.fill();o.underlay&&ct(e,a,o.underlay.img,o.underlay.u);for(let t of r.furniture)t.hidden||it(e,a,t,s.has(t.id),o.hoverId===t.id);let c=r.walls.filter(e=>!e.hidden),l=[...c].sort((e,t)=>tt(t,r)-tt(e,r));for(let t of l){Ye(e,a,Ge(t,ve(t,c)));let n=tt(t,r);e.fillStyle=n===0?H.wall:n===1?H.wallPartial:H.wallHang,e.fill(),n===2&&(e.save(),e.setLineDash([4,3]),e.strokeStyle=H.wall,e.lineWidth=1,e.stroke(),e.restore())}for(let t of r.openings){if(t.hidden)continue;let n=c.find(e=>e.id===t.wallId);n&&rt(e,a,n,t,s.has(t.id))}for(let t of c)if((s.has(t.id)||o.hoverId===t.id)&&(Ye(e,a,Ge(t,[0,0])),e.strokeStyle=H.accent,e.lineWidth=s.has(t.id)?2.5:1.5,e.stroke(),s.has(t.id)&&!t.locked&&o.handles!==!1)){for(let n of[{x:t.x1,y:t.y1},{x:t.x2,y:t.y2}]){let t=Ue(a,n);e.beginPath(),e.arc(t.x,t.y,7,0,Math.PI*2),e.fillStyle=`#fff`,e.fill(),e.strokeStyle=H.accent,e.lineWidth=2.5,e.stroke()}let n=z(t),r=he(t);e.font=`600 11px ${$e}`,e.textAlign=`center`,e.textBaseline=`middle`,n.labels.forEach((i,o)=>{let s=o===0?n.first:n.second,c=s===1?{x:t.x1,y:t.y1}:{x:t.x2,y:t.y2},l=s===1?-1:1,u=Ue(a,c);et(e,i,u.x+r.x*l*24,u.y+r.y*l*24+(n.horizontal?-14:0),H.accent)})}if(r.settings.showDimensions)for(let t of c)at(e,a,t);for(let t of i){let n=Ue(a,t.tag??t.centroid),i=t.tag?.name||`部屋`,o=`${ie(t.areaMm2)}／${ae(t.areaMm2,r.settings)}`,s=Math.max(10,Math.min(15,Math.sqrt(t.areaMm2)*a.scale*.09));e.textAlign=`center`,e.textBaseline=`middle`,e.font=`600 ${s+1}px ${$e}`,et(e,i,n.x,n.y-s*.7,H.label),e.font=`${s}px ${$e}`,et(e,o,n.x,n.y+s*.7,H.dim)}}var $e=`"Hiragino Sans","Noto Sans JP","Yu Gothic UI","Meiryo",system-ui,sans-serif`;function et(e,t,n,r,i){e.lineWidth=3.5,e.strokeStyle=`rgba(255,255,255,0.9)`,e.lineJoin=`round`,e.strokeText(t,n,r),e.fillStyle=i,e.fillText(t,n,r)}function tt(e,t){return e.z>0?2:e.h>=t.settings.ceilingH?0:1}function nt(e){let t=e.leaves===4?4:2,n=t===4?e.w/2:e.w,r=n/2,i=n*.6;return{leaves:t,span:i,rise:Math.sqrt(Math.max(0,r*r-(i/2)**2))}}function rt(e,t,n,r,i){let a=ge(n),o=r.t-r.w/2,s=r.t+r.w/2,c=n.d/2,l=(e,t)=>{let r=_e(n,e);return{x:r.x+a.x*t,y:r.y+a.y*t}};Ye(e,t,[l(o,c+1),l(s,c+1),l(s,-c-1),l(o,-c-1)]),e.fillStyle=H.opening,e.fill();let u=i?H.accent:H.sym;if(e.strokeStyle=u,e.lineWidth=i?2:1.2,Xe(e,t,l(o,c),l(o,-c)),Xe(e,t,l(s,c),l(s,-c)),r.kind===`door`){let n=r.flipSide?-1:1,u=r.flipHinge?s:o,d=r.flipHinge?o:s,f=l(u,n*c),p={x:a.x*n,y:a.y*n},m={x:f.x+p.x*r.w,y:f.y+p.y*r.w};e.lineWidth=i?2.5:1.8,Xe(e,t,f,m);let h=Ue(t,f),g=r.w*t.scale,_=Math.atan2(m.y-f.y,m.x-f.x),v=l(d,n*c),y=Math.atan2(v.y-f.y,v.x-f.x),b=y-_;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;e.lineWidth=1,e.save(),e.setLineDash([3,3]),e.beginPath(),e.arc(h.x,h.y,g,_,y,b<0),e.stroke(),e.restore()}else if(r.kind===`folding`){let n=r.flipSide?-1:1,a=nt(r);e.lineWidth=1,e.save(),e.setLineDash([3,3]),Xe(e,t,l(o,n*c),l(s,n*c)),e.restore(),e.lineWidth=i?2.5:1.8;let u=(r,i)=>{let o=l(r,n*c),s=l(r+i*a.span/2,n*(c+a.rise)),u=l(r+i*a.span,n*c);Xe(e,t,o,s),Xe(e,t,s,u)};a.leaves===4?(u(o,1),u(s,-1)):r.flipHinge?u(s,-1):u(o,1)}else if(r.kind===`singleSliding`){let n=r.flipSide?-1:1,a=r.flipHinge?-1:1,u=n*(c+25);e.lineWidth=i?3:2.2,Xe(e,t,l(o-30,u),l(s+30,u)),e.save(),e.lineWidth=1,e.setLineDash([3,3]);let d=a>0?s+30:o-30;Xe(e,t,l(d,u),l(d+a*r.w,u)),e.restore();let f=u+n*70,p=l(r.t+a*r.w*.2,f);e.lineWidth=1.2,Xe(e,t,l(r.t-a*r.w*.2,f),p),Xe(e,t,p,l(r.t+a*(r.w*.2-60),f+n*45)),Xe(e,t,p,l(r.t+a*(r.w*.2-60),f-n*45))}else if(r.kind===`sliding`){let n=Math.min(60,r.w*.05),a=c/3,u=r.flipSide?-1:1;e.lineWidth=i?3:2.2,Xe(e,t,l(o,a*u),l(r.t+n,a*u)),Xe(e,t,l(r.t-n,-a*u),l(s,-a*u))}else{let n=c/3,a=Math.min(60,r.w*.05);if(e.lineWidth=i?2:1.2,Xe(e,t,l(o,c),l(s,c)),Xe(e,t,l(o,-c),l(s,-c)),e.lineWidth=i?2.5:1.8,Xe(e,t,l(o,n),l(r.t+a,n)),Xe(e,t,l(r.t-a,-n),l(s,-n)),r.z<=0){let n=Ue(t,l(r.t,0));e.fillStyle=u,e.beginPath(),e.arc(n.x,n.y,2,0,Math.PI*2),e.fill()}}}function it(e,t,n,r,i){let a=pe(n.catalogId);Ye(e,t,Ke(n)),e.fillStyle=H.furniture,e.fill(),e.fillStyle=ot(a?.color??`#999`,.35),e.fill(),e.strokeStyle=r?H.accent:i?`#5d9c8e`:`#6d6a64`,e.lineWidth=r?2.5:1,e.stroke();let o=(r,i,a,o)=>{let s=A({x:r,y:i},n.rot),c=A({x:a,y:o},n.rot);Xe(e,t,{x:s.x+n.x,y:s.y+n.y},{x:c.x+n.x,y:c.y+n.y})},s=n.w/2,c=n.d/2;switch(e.lineWidth=1,e.strokeStyle=r?H.accent:`#8b877f`,a?.shape){case`bed`:o(-s,-c+80,s,-c+80),o(-s+80,-c+420,s-80,-c+420);break;case`sofa`:{let e=Math.min(220,n.d*.25),t=Math.min(160,n.w*.1);o(-s,-c+e,s,-c+e),o(-s+t,-c+e,-s+t,c),o(s-t,-c+e,s-t,c);break}case`chair`:o(-s,-c+80,s,-c+80);break;case`tv`:o(-s*.8,-c*.1,s*.8,-c*.1);break;case`kitchen`:o(-s*.1,-c*.6,s*.3,-c*.6),o(s*.3,-c*.6,s*.3,c*.5),o(s*.3,c*.5,-s*.1,c*.5),o(-s*.1,c*.5,-s*.1,-c*.6);break;case`plant`:{let r=Ue(t,n);e.beginPath(),e.arc(r.x,r.y,Math.min(n.w,n.d)*.35*t.scale,0,Math.PI*2),e.stroke();break}case`toilet`:o(-s,-c+n.d*.28,s,-c+n.d*.28);break;case`bath`:o(-s+80,-c+80,s-80,-c+80),o(-s+80,-c+80,-s+80,-c+n.d*.5),o(s-80,-c+80,s-80,-c+n.d*.5),o(-s+80,-c+n.d*.5,s-80,-c+n.d*.5);break;case`shelf`:o(-s,-c+30,s,-c+30)}let l=n.w*t.scale,u=n.d*t.scale;if(a&&Math.min(l,u)>34){let r=Ue(t,n);e.font=`${Math.min(12,Math.max(9,Math.min(l,u)/6))}px ${$e}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`#55524c`;let i=a.name.replace(/ .*$/,``);e.measureText(i).width<Math.max(l,u)*.9&&e.fillText(i,r.x,r.y)}}function at(e,t,n){let r=L(n);if(r*t.scale<44)return;let i=ge(n),a=n.d/2+14/t.scale,o=Ue(t,{x:(n.x1+n.x2)/2-i.x*a,y:(n.y1+n.y2)/2-i.y*a}),s=Math.atan2(n.y2-n.y1,n.x2-n.x1);s>Math.PI/2+1e-6&&(s-=Math.PI),s<-Math.PI/2+1e-6&&(s+=Math.PI),e.save(),e.translate(o.x,o.y),e.rotate(s),e.font=`11px ${$e}`,e.textAlign=`center`,e.textBaseline=`middle`,et(e,`${Math.round(r)}`,0,0,H.dim),e.restore()}function ot(e,t){let n=parseInt(e.slice(1),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${t})`}function st(e,t,n,r,i={}){let a=i.dpr??1,o=document.createElement(`canvas`);o.width=Math.round(n*a),o.height=Math.round(r*a);let s=o.getContext(`2d`);return s.scale(a,a),Qe(s,n,r,e,t,Je(e,n,r,i.margin??24),{showGrid:i.grid??!1,exportMode:!0}),o}function ct(e,t,n,r){e.save(),e.globalAlpha=r.opacity,e.translate(t.ox+r.tx*t.scale,t.oy+r.ty*t.scale),e.scale(r.mmPerPx*t.scale,r.mmPerPx*t.scale),e.rotate(r.rotDeg*Math.PI/180),e.drawImage(n,-r.cx,-r.cy),e.restore()}function lt(e){let t=e.rotDeg*Math.PI/180,n=[[0,0],[e.cx*2,0],[e.cx*2,e.cy*2],[0,e.cy*2]].map(([n,r])=>{let i=n-e.cx,a=r-e.cy;return{x:e.tx+e.mmPerPx*(i*Math.cos(t)-a*Math.sin(t)),y:e.ty+e.mmPerPx*(i*Math.sin(t)+a*Math.cos(t))}});return{minX:Math.min(...n.map(e=>e.x)),minY:Math.min(...n.map(e=>e.y)),maxX:Math.max(...n.map(e=>e.x)),maxY:Math.max(...n.map(e=>e.y))}}var ut=class{limit;same;past=[];future=[];revision=0;constructor(e=200,t=(e,t)=>e===t){this.limit=e,this.same=t}record(e){let t=this.past[this.past.length-1];t!==void 0&&this.same(t,e)||(this.past.push(e),this.past.length>this.limit&&this.past.shift(),this.future=[],this.revision++)}undo(e){let t=this.past.pop();return t===void 0?null:(this.future.push(e),this.revision++,t)}redo(e){let t=this.future.pop();return t===void 0?null:(this.past.push(e),this.revision++,t)}clear(){this.past=[],this.future=[],this.revision++}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}},dt={door:`ドア`,sliding:`引違い戸`,singleSliding:`片引き戸`,folding:`折れ戸`,window:`窓`};function ft(e,t,n){if(e.z>0)return`垂れ壁`;if(e.h<t.settings.ceilingH)return`腰壁`;let{pos:r,neg:i}=Te(e,L(e)/2,n);return r&&i?`間仕切り`:r||i?`外壁`:`壁`}var pt=e=>{let t=Math.abs(e.x2-e.x1);return Math.abs(e.y2-e.y1)<1?`横`:t<1?`縦`:`斜め`};function mt(e,t){return e.tag?.name||`部屋 ${t.indexOf(e)+1}`}function ht(e,t){let n=n=>oe(t,n)===e;if(e.tag&&n(e.tag))return{x:e.tag.x,y:e.tag.y};let r=k(e.polygon);if(n(r))return r;let i=e.polygon.map(e=>e.x),a=e.polygon.map(e=>e.y),[o,s,c,l]=[Math.min(...i),Math.max(...i),Math.min(...a),Math.max(...a)],u=[];for(let e=1;e<12;e++)for(let t=1;t<12;t++)u.push({x:o+(s-o)*e/12,y:c+(l-c)*t/12});return u.sort((e,t)=>Math.hypot(e.x-r.x,e.y-r.y)-Math.hypot(t.x-r.x,t.y-r.y)),u.find(n)??r}function gt(e,t){let n=oe(t,e);return n?mt(n,t):`部屋の外`}function _t(e,t,n){let r=t.map(n=>{let r=ht(n,t);return{key:`room:${n.key}`,ref:{type:`room`,key:n.key,x:Math.round(r.x),y:Math.round(r.y)},group:`rooms`,label:mt(n,t),sub:`${ie(n.areaMm2)}・${ae(n.areaMm2,e.settings)}`,icon:`room`,hidden:!1,locked:!1,renamable:!0,children:[]}}),i=xt(e,t),a=e.walls.map(n=>{let r=e.openings.filter(e=>e.wallId===n.id).map(e=>vt(e,n,t));return{key:`wall:${n.id}`,ref:{type:`wall`,id:n.id},group:`walls`,label:n.name||i.get(n.id),sub:`${Math.round(L(n))}mm・${pt(n)}${n.z>0||n.h!==e.settings.wallH?`・Z${n.z} H${n.h}`:``}`,icon:`wall`,hidden:!!n.hidden,locked:!!n.locked,renamable:!0,children:r}}),o=e.furniture.map(e=>({key:`furniture:${e.id}`,ref:{type:`furniture`,id:e.id},group:`furniture`,label:e.name||pe(e.catalogId)?.name||`家具`,sub:`${gt(e,t)}・${e.w}×${e.d}`,icon:`sofa`,hidden:!!e.hidden,locked:!!e.locked,renamable:!0,children:[]})),s=(e,t,n,r,i=`${r.length}`)=>({key:`g:${e}`,ref:null,group:e,label:t,sub:i,icon:n,hidden:r.length>0&&r.every(e=>e.hidden),locked:r.length>0&&r.every(e=>e.locked),renamable:!1,children:r}),c=[s(`rooms`,`部屋`,`folder`,r),s(`walls`,`壁`,`folder`,a),s(`furniture`,`家具`,`folder`,o)];return n&&c.push(s(`underlay`,`下絵`,`folder`,[{key:`underlay`,ref:{type:`underlay`},group:`underlay`,label:`写真の下絵`,sub:n.visible?`表示中`:`非表示`,icon:`image`,hidden:!n.visible,locked:!1,renamable:!1,children:[]}])),c}function vt(e,t,n){let r=`W${e.w}`;if(e.kind===`door`){let i=ke(e,t,n);r+=i===`inward`?`・内開き`:i===`outward`?`・外開き`:``}return e.kind===`folding`&&(r+=`・${e.leaves===4?4:2}枚折れ`),e.kind===`window`&&(r+=`・Z${e.z} H${e.h}`),{key:`opening:${e.id}`,ref:{type:`opening`,id:e.id},group:`walls`,label:e.name||dt[e.kind],sub:r,icon:e.kind===`window`?`window`:`door`,hidden:!!e.hidden||!!t.hidden,locked:!!e.locked,renamable:!0,children:[]}}function yt(e,t){let n=t.trim().toLowerCase();if(!n)return e;let r=e=>e.label.toLowerCase().includes(n)||e.sub.toLowerCase().includes(n),i=e=>{let t=e.children.map(i).filter(e=>!!e);return e.ref&&r(e)?{...e,children:e.children}:t.length?{...e,children:t,hidden:t.every(e=>e.hidden),locked:t.every(e=>e.locked)}:null};return e.map(i).filter(e=>!!e)}function bt(e,t,n){let r=(e,t=0)=>({minX:Math.min(...e.map(e=>e.x))-t,minY:Math.min(...e.map(e=>e.y))-t,maxX:Math.max(...e.map(e=>e.x))+t,maxY:Math.max(...e.map(e=>e.y))+t});if(n.type===`wall`){let t=e.walls.find(e=>e.id===n.id);return t?r([{x:t.x1,y:t.y1},{x:t.x2,y:t.y2}],t.d):null}if(n.type===`opening`){let t=e.openings.find(e=>e.id===n.id),i=t&&e.walls.find(e=>e.id===t.wallId);if(!t||!i)return null;let a=L(i)||1;return r([{x:i.x1+(i.x2-i.x1)/a*t.t,y:i.y1+(i.y2-i.y1)/a*t.t}],t.w)}if(n.type===`furniture`){let t=e.furniture.find(e=>e.id===n.id);return t?r([{x:-t.w/2,y:-t.d/2},{x:t.w/2,y:-t.d/2},{x:t.w/2,y:t.d/2},{x:-t.w/2,y:t.d/2}].map(e=>{let n=A(e,t.rot);return{x:n.x+t.x,y:n.y+t.y}}),200):null}if(n.type===`room`){let e=t.find(e=>e.key===n.key)??oe(t,n);return e?r(e.polygon,300):null}return null}function xt(e,t){let n=St(e,t),r=new Map;for(let[e,{kind:t,n:i}]of n)r.set(e,`${t} ${i}`);return r}function St(e,t){let n=new Map(e.walls.map(n=>[n.id,ft(n,e,t)])),r=new Map,i=new Map,a=(e,t)=>{r.has(e)||r.set(e,new Set),r.get(e).add(t)};for(let t of e.walls){let e=n.get(t.id);t.no&&!r.get(e)?.has(t.no)&&(a(e,t.no),i.set(t.id,{kind:e,n:t.no}))}for(let t of e.walls){if(i.has(t.id))continue;let e=n.get(t.id),o=1;for(;r.get(e)?.has(o);)o++;a(e,o),i.set(t.id,{kind:e,n:o})}return i}function Ct(e,t,n,r){let i=e.indexOf(t);if(i<0)return!1;let a=e.filter(e=>e!==t&&r(e)),o=Math.max(0,Math.min(a.length,Math.round(n)));if(e.filter(e=>r(e)).indexOf(t)===o)return!1;if(e.splice(i,1),o<a.length)e.splice(e.indexOf(a[o]),0,t);else{let n=a[a.length-1];e.splice(n===void 0?e.length:e.indexOf(n)+1,0,t)}return!0}var wt=`hakomadori:index`,Tt=e=>`hakomadori:p:${e}`,Et=`hakomadori:prefs`,Dt=e=>`hakomadori:u:${e}`,Ot={purchases:{lifetime:!1,subscription:!1},furnitureTrialUntil:0,freeExportTokens:0,attAsked:!1,attAllowed:!1,seenIntro:!1};function kt(e,t){try{let n=jt(e);return n?JSON.parse(n):t}catch{return t}}var At=new Map;function jt(e){if(At.has(e))return At.get(e);try{return localStorage.getItem(e)}catch{return null}}function Mt(e,t){let n=typeof t==`string`?t:JSON.stringify(t);try{return localStorage.setItem(e,n),At.delete(e),!0}catch{return At.set(e,n),!1}}var Nt=()=>kt(wt,[]).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt));function Pt(e){try{let t=jt(Tt(e));return t?v(t):null}catch{return null}}function Ft(e,t={}){let n=Mt(Tt(e.id),y(e)),r=kt(wt,[]),i=r.findIndex(t=>t.id===e.id),a={...i>=0?r[i]:void 0,...t,id:e.id,name:e.name,updatedAt:e.updatedAt};return i>=0?r[i]=a:r.push(a),Mt(wt,r)&&n}function It(e){At.delete(Tt(e)),Vt(e);try{localStorage.removeItem(Tt(e))}catch{}Mt(wt,kt(wt,[]).filter(t=>t.id!==e))}var Lt=()=>({...Ot,...kt(Et,{})}),Rt=e=>Mt(Et,e),zt=e=>kt(Dt(e),null);function Bt(e,t){let n=Mt(Dt(e),t);if(!n)try{localStorage.removeItem(Dt(e))}catch{}return n}function Vt(e){At.delete(Dt(e));try{localStorage.removeItem(Dt(e))}catch{}}var Ht=class{project=null;rooms=[];selection=null;selected=new Set;multiMode=!1;tool=`select`;snapMode=`intersection`;openingKind=`door`;foldingLeaves=2;wallSteps=[0,2];windowSteps=[1,1];pendingFurniture=null;showCeiling=!0;hierarchyOpen=!1;dragging=!1;underlay=null;underlayImg=null;prefs=Lt();history=new ut(200,(e,t)=>e.s===t.s&&e.u===t.u);listeners=new Set;saveTimer=0;thumbTimer=0;warnedUnsaved=!1;thumbnailer=null;on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e){for(let t of this.listeners)t(e)}open(e){this.project=e,this.selection=null,this.selected=new Set,this.multiMode=!1,this.tool=`select`,this.pendingFurniture=null,this.history.clear(),this.setUnderlay(zt(e.id),!1),this.recompute(),this.emit(`project`),this.emit(`selection`),this.emit(`tool`)}close(){this.flushSave(),this.setUnderlay(null,!1),this.project=null,this.rooms=[],this.selection=null,this.selected=new Set,this.multiMode=!1}get p(){if(!this.project)throw Error(`プロジェクトが開かれていません`);return this.project}checkpoint(){this.project&&this.history.record(this.snapshot())}changed(){this.project&&(this.project.updatedAt=new Date().toISOString(),this.recompute(),this.validateSelection(),this.emit(`project`),this.scheduleSave())}edit(e){this.checkpoint(),e(this.p),this.changed()}undo(){if(!this.project)return;let e=this.history.undo(this.snapshot());e&&this.restore(e)}redo(){if(!this.project)return;let e=this.history.redo(this.snapshot());e&&this.restore(e)}snapshot(){return{s:y(this.project),u:this.underlay}}restore(e){let t=new Map((this.project?.openings??[]).map(e=>[e.id,e.open]));this.project=v(e.s);for(let e of this.project.openings){if(!t.has(e.id))continue;let n=t.get(e.id);n===void 0?delete e.open:e.open=n}e.u!==this.underlay&&this.setUnderlay(e.u),this.changed()}select(e){this.selection=e,this.selected=new Set(e&&e.type!==`room`?[`${e.type}:${e.id}`]:[]),this.emit(`selection`)}setSelection(e,t=e[e.length-1]??null){this.selected=new Set(e.map(Ut)),this.selection=t?{type:t.type,id:t.id}:null,this.emit(`selection`)}toggleSelected(e){let t=Ut(e);this.selection?.type===`room`&&this.selected.clear();let n=new Set(this.selected);if(n.has(t)){n.delete(t);let e=[...n],r=e.length?Wt(e[e.length-1]):null;this.selected=n,this.selection=this.selection&&this.selection.type!==`room`&&Ut(this.selection)!==t?this.selection:r}else n.add(t),this.selected=n,this.selection={type:e.type,id:e.id};this.emit(`selection`)}isSelected(e){return this.selected.has(Ut(e))}selectedRefs(){return[...this.selected].map(Wt)}get multi(){return this.selected.size>1}setTool(e){this.tool=e,e!==`furniture`&&(this.pendingFurniture=null),this.emit(`tool`)}recompute(){this.rooms=this.project?ee(this.project.walls,this.project.roomTags):[]}validateSelection(){let e=this.selection,t=this.project;if(!t)return;let n=[...this.selected].filter(e=>!!Gt(t,Wt(e))),r=n.length!==this.selected.size;r&&(this.selected=new Set(n));let i=!!e&&e.type!==`room`&&!Gt(t,e);i&&(this.selection=n.length?Wt(n[n.length-1]):null),(r||i)&&this.emit(`selection`)}setUnderlay(e,t=!0){if(this.underlay=e,this.underlayImg=null,t&&this.project&&(e?Bt(this.project.id,e)||I(`写真の下絵は端末に保存できませんでした。ページを閉じると下絵は消えます`):Vt(this.project.id)),e){let t=new Image;t.onload=()=>{this.underlay?.src===e.src&&(this.underlayImg=t,this.emit(`underlay`))},t.src=e.src}this.emit(`underlay`)}toggleUnderlay(){this.underlay&&this.project&&(this.underlay={...this.underlay,visible:!this.underlay.visible},Bt(this.project.id,this.underlay),this.emit(`underlay`))}setFlags(e,t){this.project&&e.length&&this.edit(n=>{for(let r of e){let e=Gt(n,r);if(e)for(let n of[`hidden`,`locked`])t[n]!==void 0&&(t[n]?e[n]=!0:delete e[n])}})}rename(e,t){if(!this.project)return;let n=t.trim().slice(0,40);this.edit(t=>{if(e.type===`room`){let r=oe(this.rooms,e);if(!r)return;if(r.tag){if(n){let e=t.roomTags.find(e=>e.id===r.tag.id);e&&(e.name=n)}else t.roomTags=t.roomTags.filter(e=>e.id!==r.tag.id)}else if(n){let i=oe(this.rooms,e)===r?e:k(r.polygon);t.roomTags.push({id:p(`r`),x:Math.round(i.x),y:Math.round(i.y),name:n})}return}let r=Gt(t,e);r&&(n?r.name=n:delete r.name)})}reorder(e,t){let n=this.project;if(!n)return;let r=Gt(n,e);if(!r)return;let i=e.type===`wall`?n.walls:e.type===`furniture`?n.furniture:n.openings,a=t=>e.type!==`opening`||t.wallId===r.wallId;i.filter(a).indexOf(r)!==Math.max(0,Math.min(i.filter(a).length-1,t))&&this.edit(n=>{let r=Gt(n,e);if(r){if(e.type===`wall`){let e=St(n,this.rooms);for(let t of n.walls)t.no||=e.get(t.id)?.n;Ct(n.walls,r,t,()=>!0)}else e.type===`furniture`?Ct(n.furniture,r,t,()=>!0):Ct(n.openings,r,t,e=>e.wallId===r.wallId)}})}duplicateFurniture(e){this.duplicateFurnitureMany([e])}deleteSelection(){this.multi?this.deleteObjects(this.selectedRefs()):this.deleteObject(this.selection),this.select(null)}toggleOpen(e){let t=this.project?.openings.find(t=>t.id===e);t&&xe(t)&&(t.open=!Se(t),this.scheduleSave(),this.emit(`open`))}undoToast(e){let t=this.history.revision;I(e,{label:`元に戻す`,run:()=>{this.history.revision===t?this.undo():I(`このあとに別の操作をしたため、ここからは戻せません。元に戻すボタンを使ってください`)}})}deleteObjects(e){if(!this.project||!e.length)return;let t=t=>new Set(e.filter(e=>e.type===t).map(e=>e.id)),n=t(`wall`),r=t(`opening`),i=t(`furniture`);this.edit(e=>{e.walls=e.walls.filter(e=>!n.has(e.id)),e.openings=e.openings.filter(e=>!r.has(e.id)&&!n.has(e.wallId)),e.furniture=e.furniture.filter(e=>!i.has(e.id))}),this.undoToast(`${e.length}件を削除しました`)}duplicateFurnitureMany(e){let t=this.project;if(!t)return;let n=e.map(e=>t.furniture.find(t=>t.id===e)).filter(e=>!!e).map(e=>{let t={...e,id:p(`f`),x:e.x+200,y:e.y+200};return delete t.locked,t});n.length&&(this.edit(e=>e.furniture.push(...n)),this.setSelection(n.map(e=>({type:`furniture`,id:e.id}))))}rotateFurnitureMany(e,t=90){let n=new Set(e);this.project&&this.project.furniture.some(e=>n.has(e.id)&&!e.locked)&&this.edit(e=>{for(let r of e.furniture)n.has(r.id)&&!r.locked&&(r.rot=((r.rot+t)%360+360)%360)})}deleteObject(e){if(!e||!this.project||e.type===`room`&&!oe(this.rooms,e)?.tag)return;let t=this.history.revision;this.edit(t=>{if(e.type===`wall`)t.walls=t.walls.filter(t=>t.id!==e.id),t.openings=t.openings.filter(t=>t.wallId!==e.id);else if(e.type===`opening`)t.openings=t.openings.filter(t=>t.id!==e.id);else if(e.type===`furniture`)t.furniture=t.furniture.filter(t=>t.id!==e.id);else if(e.type===`room`){let n=oe(this.rooms,e);n?.tag&&(t.roomTags=t.roomTags.filter(e=>e.id!==n.tag.id))}}),this.history.revision!==t&&this.undoToast(e.type===`room`?`部屋名を消しました`:`削除しました`)}setPrefs(e){this.prefs={...this.prefs,...e},Rt(this.prefs),this.emit(`prefs`)}totalArea(){return this.rooms.reduce((e,t)=>e+ne(t.areaMm2),0)}scheduleSave(){clearTimeout(this.saveTimer),this.saveTimer=window.setTimeout(()=>this.flushSave(!1),400),clearTimeout(this.thumbTimer),this.thumbTimer=window.setTimeout(()=>this.flushSave(!0),2500)}flushSave(e=!0){if(!this.project)return;clearTimeout(this.saveTimer),e&&clearTimeout(this.thumbTimer);let t={rooms:this.rooms.length,areaM2:this.totalArea()};if(e&&this.thumbnailer)try{t.thumb=this.thumbnailer(this.project,this.rooms)}catch{}!Ft(this.project,t)&&!this.warnedUnsaved&&(this.warnedUnsaved=!0,I(`この画面では端末に保存できません。ページを閉じると図面は消えます`))}},Ut=e=>`${e.type}:${e.id}`;function Wt(e){let t=e.indexOf(`:`);return{type:e.slice(0,t),id:e.slice(t+1)}}function Gt(e,t){return t.type===`wall`?e.walls.find(e=>e.id===t.id):t.type===`opening`?e.openings.find(e=>e.id===t.id):e.furniture.find(e=>e.id===t.id)}var U=new Ht;function Kt(e,t){let n=U.p.openings.find(t=>t.id===e);if(!n||n.kind===`window`)return;let r=n.kind===`folding`&&n.leaves===4;r&&t===`hinge`||U.edit(n=>{let i=n.openings.find(t=>t.id===e);i&&(i.kind===`sliding`||t===`side`||r?i.flipSide=!i.flipSide:t===`hinge`?i.flipHinge=!i.flipHinge:Object.assign(i,Ae(i)))})}var qt={inward:{now:`内開き`,flip:`外開きにする`},outward:{now:`外開き`,flip:`内開きにする`},between:{now:`部屋の間`,flip:`反対側に開く`},unknown:{now:``,flip:`開く側を反転`}},Jt={inward:{now:`内側に折れる`,flip:`外側に折れるようにする`},outward:{now:`外側に折れる`,flip:`内側に折れるようにする`},between:{now:`部屋の間`,flip:`反対側に折れる`},unknown:{now:``,flip:`折れる側を反転`}};function Yt(e,t){let n=ke(e,t,U.rooms),r=e.kind===`folding`?`折れる`:`開く`;if(n===`between`){let{pos:n,neg:i}=Te(t,e.t,U.rooms),a=(e.flipSide?i:n)?.tag?.name,o=(e.flipSide?n:i)?.tag?.name;if(a&&o&&a!==o)return{now:`${a}側に${r}`,flip:`${o}側に${r}`}}return(e.kind===`folding`?Jt:qt)[n]}var Xt=class{bottomInset;el;key=``;constructor(e,t){this.bottomInset=t,this.el=P(`div`,{class:`opening-bar`,role:`toolbar`,"aria-label":`ドアの向き`,hidden:!0}),this.el.addEventListener(`pointerdown`,e=>e.stopPropagation()),e.appendChild(this.el)}update(e,t,n,r){let i=U.selection,a=U.project,o=i?.type===`opening`&&a?a.openings.find(e=>e.id===i.id):void 0,s=o&&a?a.walls.find(e=>e.id===o.wallId):void 0;if(!o||!s||o.kind===`window`||o.hidden||s.hidden||t||U.tool!==`select`||U.multi){this.el.hidden=!0,this.key=``;return}let c=Yt(o,s),l=`${o.id}|${o.kind}|${o.leaves}|${o.flipSide}|${o.flipHinge}|${c.now}|${c.flip}`;l!==this.key&&(this.key=l,this.render(o,c)),this.el.hidden=!1;let u=this.place(o,s,e,n,r);this.el.style.left=`${u.x}px`,this.el.style.top=`${u.y}px`}place(e,t,n,r,i){let a=this.el.offsetWidth||240,o=this.el.offsetHeight||48,s=i-this.bottomInset(),c=n.scale,l=Ue(n,_e(t,e.t)),u=Math.hypot(t.x2-t.x1,t.y2-t.y1)||1,d={x:(t.x2-t.x1)/u,y:(t.y2-t.y1)/u},f=ge(t),p=e.flipSide?-1:1,m={x:f.x*p,y:f.y*p},h=e.w/2*c,g=t.d/2*c,_=e.kind===`singleSliding`?(30+e.w)*c:0,v=e.kind===`door`?e.w*c:e.kind===`folding`?g+nt(e).rise*c:e.kind===`singleSliding`?(t.d/2+140)*c:g,y=h+_,b=[-1,1].flatMap(e=>[{x:l.x+d.x*y*e-m.x*g,y:l.y+d.y*y*e-m.y*g},{x:l.x+d.x*y*e+m.x*v,y:l.y+d.y*y*e+m.y*v}]),x=[{l:Math.min(...b.map(e=>e.x))-6,t:Math.min(...b.map(e=>e.y))-6,r:Math.max(...b.map(e=>e.x))+6,b:Math.max(...b.map(e=>e.y))+6},...this.controlRects()],S=y+Math.abs(d.x)*(a/2)+Math.abs(d.y)*(o/2)+12,C=g+Math.abs(m.x)*(a/2)+Math.abs(m.y)*(o/2)+14,w=v+Math.abs(m.x)*(a/2)+Math.abs(m.y)*(o/2)+14,T=[{x:l.x+d.x*S,y:l.y+d.y*S},{x:l.x-d.x*S,y:l.y-d.y*S},{x:l.x-m.x*C,y:l.y-m.y*C},{x:l.x+m.x*w,y:l.y+m.y*w}],E=e=>({x:a>r-16?r/2:Math.min(r-a/2-8,Math.max(a/2+8,e.x)),y:o>s-16?s/2:Math.min(s-o/2-8,Math.max(o/2+8,e.y))}),D=e=>{let t={l:e.x-a/2,t:e.y-o/2,r:e.x+a/2,b:e.y+o/2};return x.some(e=>t.l<e.r&&t.r>e.l&&t.t<e.b&&t.b>e.t)};for(let e of T){let t=E(e);if(!D(t))return t}return E(T[2])}controlRects(){let e=this.el.parentElement?.parentElement,t=this.el.parentElement?.getBoundingClientRect();return!e||!t?[]:[...e.querySelectorAll(`.float-ctl, .numeric-panel`)].filter(e=>!e.hidden&&e.offsetParent!==null).map(e=>{let n=e.getBoundingClientRect();return{l:n.left-t.left-6,t:n.top-t.top-6,r:n.right-t.left+6,b:n.bottom-t.top+6}})}render(e,t){let n=(t,n,r,i)=>P(`button`,{class:`ob-btn`,title:r,onclick:()=>Kt(e.id,i)},F(n,18),P(`span`,null,t));e.kind===`sliding`?this.el.replaceChildren(P(`span`,{class:`ob-now`},`引違い`),n(`戸の前後を入れ替え`,`swapSide`,`戸の前後を入れ替え（X）`,`side`)):e.kind===`singleSliding`?this.el.replaceChildren(P(`span`,{class:`ob-now`},`片引き`),n(`戸を付ける面`,`swapSide`,`戸を付ける面を入れ替え（X）`,`side`),n(`引く向き`,`flip`,`引く向きを入れ替え（H）`,`hinge`)):e.kind===`folding`?this.el.replaceChildren(t.now?P(`span`,{class:`ob-now`},t.now):``,n(t.flip,`swapSide`,`${t.flip}（X）`,`side`),e.leaves===4?``:n(`吊元を入れ替え`,`flip`,`吊元（たたむ側）を入れ替え（H）`,`hinge`)):this.el.replaceChildren(t.now?P(`span`,{class:`ob-now`},t.now):``,n(t.flip,`swapSide`,`${t.flip}（X）`,`side`),n(`吊元を入れ替え`,`flip`,`吊元（蝶番の側）を入れ替え（H）。R で4通りを順に切り替え`,`hinge`))}},Zt=12,Qt=6,$t=`ロックした壁は動かさず、つながりを切って動かします`,en=e=>e.kind===`endpoint`||e.kind===`wall`?{type:`wall`,id:e.id}:e.kind===`group`?{type:`furniture`,id:e.id}:{type:e.kind,id:e.id},tn=class{host;canvas;ctx;view={scale:.08,ox:60,oy:60};cssW=0;cssH=0;dpr=1;raf=0;hoverWorld=null;hoverSnap=null;hoverId=null;chain=null;numericStart=null;numeric={len:3640,angle:0,d:120,h:2400,z:0};pointers=new Map;gesture=`none`;modifierPress=!1;shiftEndpoint=!1;cutShown=!1;marquee=null;downScreen=null;downWorld=null;panStart=null;pinch=null;dragTarget=null;dragRecorded=!1;dragPre=null;dragL0=null;dragT0=new Map;chainWalls=[];numericHist=[];hostTop=0;hostBottom=0;slop=4;spaceDown=!1;shiftDown=!1;onHint=()=>{};bottomInset=()=>0;openingBar;onNumericChange=()=>{};constructor(e){this.host=e,this.canvas=document.createElement(`canvas`),this.canvas.className=`plan-canvas`,e.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`),this.openingBar=new Xt(e,()=>this.bottomInset()),new ResizeObserver(()=>this.resize()).observe(e),this.bind(),U.on(e=>{e===`tool`&&(this.chain=null,this.chainWalls=[],this.numericStart=null,this.numericHist=[],this.updateHint()),e===`project`&&U.project&&this.rollbackChain(),e===`selection`&&U.tool===`select`&&this.gesture===`none`&&this.updateHint(),this.requestRender()})}resize(){let e=this.host.getBoundingClientRect();if(e.width===0||e.height===0)return;let t=this.cssW===0,n=!t&&e.width===this.cssW&&Math.abs(e.bottom-this.hostBottom)<.5&&e.top!==this.hostTop,r=e.top-this.hostTop;this.hostTop=e.top,this.hostBottom=e.bottom,this.cssW=e.width,this.cssH=e.height,this.dpr=window.devicePixelRatio||1,this.canvas.width=Math.round(e.width*this.dpr),this.canvas.height=Math.round(e.height*this.dpr),this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,n&&!this.pendingFit?this.view={...this.view,oy:this.view.oy-r}:(t||this.pendingFit||this.autoFit)&&this.fit(),this.render()}rollbackChain(){let e=new Set(U.p.walls.map(e=>e.id)),t=!1;for(;this.chain&&this.chainWalls.length&&!e.has(this.chainWalls[this.chainWalls.length-1]);)this.chainWalls.pop(),this.chain.pop(),t=!0;for(;this.numericHist.length&&!e.has(this.numericHist[this.numericHist.length-1].wallId);)this.numericStart=this.numericHist.pop().start,t=!0;t&&(this.onNumericChange(),this.updateHint())}pendingFit=!1;autoFit=!0;fit(){if(!U.project)return;if(!this.cssW||!this.host.clientWidth){this.pendingFit=!0;return}this.pendingFit=!1;let e=U.underlay;this.view=Je(U.project,this.cssW,this.cssH,50,e?.visible?lt(e):null),this.requestRender()}zoomBy(e,t){this.autoFit=!1;let n=t??{x:this.cssW/2,y:this.cssH/2},r=We(this.view,n),i=Math.min(2,Math.max(.004,this.view.scale*e));this.view={scale:i,ox:n.x-r.x*i,oy:n.y-r.y*i},this.requestRender()}requestRender(){this.raf||=requestAnimationFrame(()=>{this.raf=0,this.render()})}get tolMm(){return Qt/this.view.scale}get snapMm(){return Zt/this.view.scale}bind(){let e=this.canvas;e.addEventListener(`pointerdown`,e=>this.onDown(e)),e.addEventListener(`pointermove`,e=>this.onMove(e)),e.addEventListener(`pointerup`,e=>this.onUp(e)),e.addEventListener(`pointercancel`,e=>this.onUp(e,!0)),e.addEventListener(`pointerleave`,()=>{this.gesture===`none`&&(this.hoverWorld=null,this.hoverSnap=null,this.hoverId=null,this.requestRender())}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`dblclick`,()=>{U.tool===`wall`&&this.chain&&this.endChain()}),e.addEventListener(`wheel`,t=>{t.preventDefault();let n=e.getBoundingClientRect();this.zoomBy(Math.exp(-t.deltaY*(t.ctrlKey?.01:.0015)),{x:t.clientX-n.left,y:t.clientY-n.top})},{passive:!1}),window.addEventListener(`keydown`,e=>{e.code===`Space`&&!on(e)&&(this.spaceDown=!0,this.canvas.style.cursor=`grab`),e.key===`Shift`&&(this.shiftDown=!0)}),window.addEventListener(`keyup`,e=>{e.code===`Space`&&(this.spaceDown=!1,this.canvas.style.cursor=``),e.key===`Shift`&&(this.shiftDown=!1)})}local(e){let t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}onDown(e){if(!U.project)return;this.canvas.setPointerCapture(e.pointerId);let t=this.local(e);if(this.pointers.set(e.pointerId,t),this.shiftDown=e.shiftKey,this.pointers.size===2){this.gesture===`drag`&&(U.dragging=!1,this.dragRecorded&&U.changed(),this.endDragFeedback());let[e,t]=[...this.pointers.values()];this.pinch={d0:C(e,t),m0:nn(e,t),view:{...this.view}},this.autoFit=!1,this.gesture=`pinch`,this.dragTarget=null;return}if(!(this.pointers.size>2)){if(e.button===1||this.spaceDown){this.startPan(t);return}if(e.button===2){U.tool===`wall`&&this.chain?this.endChain():this.startPan(t);return}if(this.gesture=`press`,this.cutShown=!1,this.slop=e.pointerType===`touch`?10:4,this.downScreen=t,this.downWorld=We(this.view,t),this.dragRecorded=!1,this.dragPre=null,this.dragL0=null,this.dragT0.clear(),this.dragTarget=null,this.updateHover(t),this.modifierPress=e.shiftKey||e.ctrlKey||e.metaKey,this.shiftEndpoint=!1,U.tool===`select`){let n=this.hitTest(this.downWorld,!(e.ctrlKey||e.metaKey||U.multiMode));if(n?.kind===`endpoint`&&e.shiftKey&&(this.modifierPress=!1,this.shiftEndpoint=!0),n){this.dragTarget=n;let t=U.multi&&U.isSelected(en(n));e.pointerType!==`touch`&&!this.modifierPress&&!U.multiMode&&!t&&this.selectHit(n)}else e.shiftKey&&e.pointerType===`mouse`&&(this.gesture=`marquee`,this.marquee={a:t,b:t})}}}buildGroupDrag(e){let t=U.p,n=U.selectedRefs(),r=n.filter(e=>e.type===`furniture`).map(e=>t.furniture.find(t=>t.id===e.id)).filter(e=>!!e&&!e.locked&&!e.hidden).map(e=>({id:e.id,x:e.x,y:e.y})),i=n.filter(e=>e.type===`wall`).map(e=>t.walls.find(t=>t.id===e.id)).filter(e=>!!e&&!e.locked&&!e.hidden).map(e=>({...e}));if(!r.length&&!i.length)return{blocked:`empty`};let a=new Set(i.map(e=>e.id)),o=[],s=[];for(let e of i)for(let n of[{x:e.x1,y:e.y1},{x:e.x2,y:e.y2}])for(let r of we(t.walls,n,e.id)){if(a.has(r.id)||o.some(e=>e.id===r.id&&e.end===r.end))continue;let i=t.walls.find(e=>e.id===r.id);if(i.locked){s.some(t=>t.id===e.id&&C(t.pt,n)<.5)||s.push({id:e.id,pt:n});continue}o.push({...r,x:r.end===1?i.x1:i.x2,y:r.end===1?i.y1:i.y2})}return{kind:`group`,id:e,furniture:r,walls:i,ends:o,cut:s}}finishMarquee(){let e=this.marquee;if(this.marquee=null,this.requestRender(),!e||Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)<4)return;let t=We(this.view,e.a),n=We(this.view,e.b),[r,i,a,o]=[Math.min(t.x,n.x),Math.max(t.x,n.x),Math.min(t.y,n.y),Math.max(t.y,n.y)],s=e=>e.x>=r&&e.x<=i&&e.y>=a&&e.y<=o,c=U.p,l=[];for(let e of c.walls)!e.hidden&&!e.locked&&s({x:(e.x1+e.x2)/2,y:(e.y1+e.y2)/2})&&l.push({type:`wall`,id:e.id});for(let e of c.openings){let t=c.walls.find(t=>t.id===e.wallId);t&&!t.hidden&&!t.locked&&!e.hidden&&!e.locked&&s(_e(t,e.t))&&l.push({type:`opening`,id:e.id})}for(let e of c.furniture)!e.hidden&&!e.locked&&s(e)&&l.push({type:`furniture`,id:e.id});if(!l.length)return;let u=U.selection?.type===`room`?[]:U.selectedRefs(),d=new Set(u.map(e=>`${e.type}:${e.id}`));U.setSelection([...u,...l.filter(e=>!d.has(`${e.type}:${e.id}`))]),this.updateHint()}selectHit(e){let t=en(e);U.select({type:t.type,id:t.id})}startPan(e){this.autoFit=!1,this.gesture=`pan`,this.panStart={view:{...this.view},pt:e},this.canvas.style.cursor=`grabbing`}onMove(e){let t=this.local(e);if(this.shiftDown=e.shiftKey,this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.gesture===`pinch`&&this.pinch&&this.pointers.size>=2){let[e,t]=[...this.pointers.values()],n=nn(e,t),r=C(e,t)/Math.max(1,this.pinch.d0),i=this.pinch.view,a=We(i,this.pinch.m0),o=Math.min(2,Math.max(.004,i.scale*r));this.view={scale:o,ox:n.x-a.x*o,oy:n.y-a.y*o},this.requestRender();return}if(this.gesture===`marquee`&&this.marquee){this.marquee.b=t,this.requestRender();return}if(this.gesture===`pan`&&this.panStart){let e=this.panStart.view;this.view={...e,ox:e.ox+t.x-this.panStart.pt.x,oy:e.oy+t.y-this.panStart.pt.y},this.requestRender();return}if(this.gesture===`press`&&this.downScreen&&C(t,this.downScreen)>this.slop&&U.tool===`select`){if(this.dragTarget&&this.modifierPress){this.dragTarget=null,e.shiftKey&&e.pointerType===`mouse`?(this.gesture=`marquee`,this.marquee={a:this.downScreen,b:t},this.requestRender()):(this.startPan(this.downScreen),this.onMove(e));return}if(this.dragTarget&&U.multiMode&&!U.isSelected(en(this.dragTarget))){this.dragTarget=null,this.startPan(this.downScreen),this.onMove(e);return}if(this.dragTarget&&this.dragTarget.kind!==`endpoint`&&U.multi&&U.isSelected(en(this.dragTarget))){let e=en(this.dragTarget),n=this.buildGroupDrag(e.id),r=e.type===`opening`?U.p.openings.find(t=>t.id===e.id):void 0;if(r&&!(n&&`walls`in n&&n.walls.some(e=>e.id===r.wallId))){this.gesture=`drag`,U.setSelection(U.selectedRefs(),e),this.applyDrag(We(this.view,t));return}if(`blocked`in n){this.onHint(`選んだ中に、まとめて動かせる壁・家具がありません`),this.dragTarget=null,this.gesture=`none`;return}this.dragTarget=n,this.gesture=`drag`,U.setSelection(U.selectedRefs(),e),this.applyDrag(We(this.view,t));return}if(this.dragTarget)this.gesture=`drag`,this.selectHit(this.dragTarget);else{this.startPan(this.downScreen),this.onMove(e);return}}if(this.gesture===`drag`&&this.dragTarget){this.applyDrag(We(this.view,t));return}this.updateHover(t)}onUp(e,t=!1){let n=this.local(e);this.pointers.delete(e.pointerId);let r=this.gesture;if(r===`pinch`){if(this.pointers.size>=2){let[e,t]=[...this.pointers.values()];this.pinch={d0:C(e,t),m0:nn(e,t),view:{...this.view}}}else this.pointers.size===0&&(this.gesture=`none`);U.dragging=!1;return}if(this.gesture=`none`,this.canvas.style.cursor=``,U.dragging=!1,this.pendingReveal){let e=this.pendingReveal;this.pendingReveal=null,requestAnimationFrame(()=>this.revealSoon(e))}r===`drag`&&this.dragRecorded&&U.changed(),r===`drag`&&this.endDragFeedback(),!t&&(r===`press`&&this.tap(n),r===`marquee`&&this.finishMarquee(),this.dragTarget=null,this.updateHover(n))}keepFromEnd2(e){if(this.dragL0)for(let[t,n]of this.dragL0){let r=e.walls.find(e=>e.id===t);if(!r)continue;let i=L(r)-n;for(let n of e.openings)n.wallId===t&&(n.t=Math.round((this.dragT0.get(n.id)??n.t)+i))}}cutCount(e){if(!e||!(`cut`in e))return 0;let t=U.p;return e.cut.filter(e=>{let n=t.walls.find(t=>t.id===e.id);return!!n&&C({x:n.x1,y:n.y1},e.pt)>=.5&&C({x:n.x2,y:n.y2},e.pt)>=.5}).length}endDragFeedback(){this.cutCount(this.dragTarget)&&I(`ロックした壁は動かさず、つながりを切りました`),this.cutShown&&(this.cutShown=!1,this.updateHint())}snapped(e,t){let n=U.p;return Ve(e,{mode:U.snapMode,grid:n.settings.grid,thresholdMm:this.snapMm,walls:n.walls,excludeWallIds:t})}updateHover(e){if(!U.project)return;let t=We(this.view,e);this.hoverWorld=t;let n=U.tool;if(n===`wall`){let e=this.snapped(t),n=this.chain?.[this.chain.length-1];n&&this.shiftDown&&(e={pt:He(n,e.pt),kind:e.kind}),this.hoverSnap=e,this.hoverId=null}else if(n===`select`){let e=this.hitTest(t);this.hoverId=e?.id??null,this.hoverSnap=null,this.canvas.style.cursor=e?e.kind===`endpoint`?`crosshair`:`move`:``}else n===`opening`?(this.hoverId=V(rn(U.p.walls),t,this.snapMm)?.wall.id??null,this.hoverSnap=null):(this.hoverSnap=null,this.hoverId=null);this.requestRender()}tap(e){let t=We(this.view,e),n=U.p;switch(U.tool){case`select`:if(this.dragTarget){if(this.shiftEndpoint){let e=this.hitTest(t,!1);e&&U.toggleSelected(en(e))}else this.modifierPress||U.multiMode?U.toggleSelected(en(this.dragTarget)):this.selectHit(this.dragTarget)}else if(!this.modifierPress&&!U.multiMode){let e=oe(U.rooms,t);U.select(e?{type:`room`,x:Math.round(t.x),y:Math.round(t.y)}:null)}break;case`wall`:{let e=this.snapped(t).pt;if(U.snapMode===`numeric`){this.numericStart=e,this.numericHist=[],this.onNumericChange(),this.updateHint();break}let n=this.chain?.[this.chain.length-1];if(n&&this.shiftDown&&(e=He(n,e)),!this.chain)this.chain=[e],this.chainWalls=[];else if(n&&C(n,e)>.5){let t=this.addWall(n,e,this.stepZH(U.wallSteps));C(this.chain[0],e)<.5?(this.chain=null,this.chainWalls=[]):(this.chain.push(e),this.chainWalls.push(t.id))}else n&&(this.chain=null,this.chainWalls=[]);this.updateHint();break}case`opening`:{let e=V(rn(n.walls),t,this.snapMm);if(!e){this.onHint(`壁の上をタップして建具を置きます`);break}let r=this.newOpening(e.wall,t);U.edit(e=>e.openings.push(r)),U.select({type:`opening`,id:r.id});break}case`furniture`:{let e=U.pendingFurniture,n=e?pe(e):void 0;if(!n)break;let r={id:p(`f`),catalogId:n.id,x:Math.round(t.x/10)*10,y:Math.round(t.y/10)*10,z:0,w:n.w,d:n.d,h:n.h,rot:0};U.edit(e=>e.furniture.push(r)),U.setTool(`select`),U.select({type:`furniture`,id:r.id});break}}}stepZH(e){let t=U.p.settings.stepPitch;return{z:e[0]*t,h:(e[1]-e[0]+1)*t}}newOpening(e,t){let n=U.p.settings,r=U.openingKind,i=U.foldingLeaves,a=be(r,n,i),o=r===`window`?this.stepZH(U.windowSteps):{z:a.z,h:a.h},s=Math.min(a.w,Math.floor(L(e))),c=B(e,t,s,n.grid,U.snapMode!==`numeric`),l=r===`door`||r===`folding`?Ee(e,c,s,U.rooms,U.p.walls):r===`singleSliding`?De(e,c,s,U.rooms,U.p.walls,U.p.openings.filter(t=>t.wallId===e.id)):{flipSide:!1,flipHinge:!1};return r===`folding`&&i===4&&(l.flipHinge=!1),{id:p(`o`),kind:r,wallId:e.id,t:c,w:s,h:o.h,z:o.z,...l,...r===`folding`?{leaves:i}:{}}}addWall(e,t,n,r=U.p.settings.wallD){let i={id:p(`w`),x1:Math.round(e.x),y1:Math.round(e.y),x2:Math.round(t.x),y2:Math.round(t.y),d:r,z:n.z,h:n.h};return U.edit(e=>e.walls.push(i)),i}addNumericWall(){let e=this.numericStart;if(!e||!U.project)return!1;let t=this.numeric;if(!(t.len>0))return!1;let n=t.angle*Math.PI/180,r={x:Math.round(e.x+Math.cos(n)*t.len),y:Math.round(e.y+Math.sin(n)*t.len)},i=this.addWall(e,r,{z:t.z,h:t.h},t.d);return this.numericHist.push({start:e,wallId:i.id}),this.numericStart=r,this.onNumericChange(),this.requestRender(),!0}endChain(){this.chain=null,this.chainWalls=[],this.updateHint(),this.requestRender()}cancel(){return this.chain||this.numericStart?(this.chain=null,this.chainWalls=[],this.numericStart=null,this.numericHist=[],this.onNumericChange(),this.updateHint(),this.requestRender(),!0):!1}updateHint(){let e=U.tool;e===`wall`?U.snapMode===`numeric`?this.onHint(this.numericStart?`長さ・向きを入れて「追加」（Enter）。続けて次の壁を追加できます`:`タップで始点を置きます`):this.chain?this.onHint(`次の点をタップ／始点に戻ると閉じて終了・ダブルタップかEscで終了・Shiftで水平垂直`):this.onHint(`タップで壁の始点を置きます`):e===`opening`?this.onHint(`壁の上をタップして建具を置きます`):e===`furniture`?this.onHint(`置きたい場所をタップします`):U.multiMode?this.onHint(`選択モード（${U.selected.size}件）：タップで足す・外す／選んだ物のドラッグでまとめて移動／「完了」で終わる`):U.multi?this.onHint(`${U.selected.size}件を選択中。ドラッグでまとめて移動・Shift/Ctrl+クリックで足す・外す`):this.onHint(`タップで選択・ドラッグで移動・空いた所のドラッグで画面移動`)}hitTest(e,t=!0){let n=U.p,r=this.tolMm,i=U.selection,a=e=>!e.hidden&&!e.locked,o=e=>!n.walls.find(t=>t.id===e)?.hidden;if(t&&i?.type===`wall`&&!U.multi){let t=n.walls.find(e=>e.id===i.id);if(t&&a(t))for(let r of[1,2]){let i=r===1?{x:t.x1,y:t.y1}:{x:t.x2,y:t.y2};if(C(i,e)<=11/this.view.scale){let e=we(n.walls,i,t.id),a=e.filter(e=>!n.walls.find(t=>t.id===e.id)?.locked);return{kind:`endpoint`,id:t.id,end:r,ends:a,cut:a.length<e.length?[{id:t.id,pt:i}]:[]}}}}for(let t of n.openings){let i=n.walls.find(e=>e.id===t.wallId);if(!i||!a(t)||!o(i.id)||i.locked)continue;let s=w(e,{x:i.x1,y:i.y1},{x:i.x2,y:i.y2}),c=s.t*L(i);if(Math.abs(c-t.t)<=t.w/2&&s.d<=i.d/2+r)return{kind:`opening`,id:t.id}}let s=null,c=1/0;for(let t of n.walls){if(!a(t))continue;let n=w(e,{x:t.x1,y:t.y1},{x:t.x2,y:t.y2});n.d<=t.d/2+r&&n.d<c&&(c=n.d,s=t)}if(s){let e=s,t=[...we(n.walls,{x:e.x1,y:e.y1},e.id).map(e=>({...e,which:1})),...we(n.walls,{x:e.x2,y:e.y2},e.id).map(e=>({...e,which:2}))],r=e=>!!n.walls.find(t=>t.id===e.id)?.locked,i=t.filter(e=>!r(e)).map(e=>{let t=n.walls.find(t=>t.id===e.id);return{...e,x:e.end===1?t.x1:t.x2,y:e.end===1?t.y1:t.y2}}),a=[1,2].filter(e=>t.some(t=>t.which===e&&r(t))).map(t=>({id:e.id,pt:t===1?{x:e.x1,y:e.y1}:{x:e.x2,y:e.y2}}));return{kind:`wall`,id:e.id,orig:{...e},ends:i,cut:a}}for(let t=n.furniture.length-1;t>=0;t--){let i=n.furniture[t];if(!a(i))continue;let o=A({x:e.x-i.x,y:e.y-i.y},-i.rot);if(Math.abs(o.x)<=i.w/2+r&&Math.abs(o.y)<=i.d/2+r)return{kind:`furniture`,id:i.id,orig:{x:i.x,y:i.y}}}return null}applyDrag(e){let t=this.dragTarget,n=U.p;if(!t||!this.downWorld)return;if(!this.dragRecorded&&!this.dragPre){this.dragPre=U.snapshot(),U.dragging=!0;let e=t.kind===`endpoint`?[...t.end===1?[t.id]:[],...t.ends.filter(e=>e.end===1).map(e=>e.id)]:t.kind===`wall`||t.kind===`group`?t.ends.filter(e=>e.end===1).map(e=>e.id):[];this.dragL0=je(n,e),this.dragT0=new Map(n.openings.filter(e=>this.dragL0.has(e.wallId)).map(e=>[e.id,e.t]))}let r=n.settings.grid,i=U.snapMode!==`numeric`;if(t.kind===`wall`){let i=t.orig,a={x:i.x1+e.x-this.downWorld.x,y:i.y1+e.y-this.downWorld.y},o=U.snapMode===`intersection`?{x:ze(a.x,r),y:ze(a.y,r)}:U.snapMode===`line`?this.snapped(a,new Set([i.id,...t.ends.map(e=>e.id)])).pt:{x:Math.round(a.x),y:Math.round(a.y)},s=o.x-i.x1,c=o.y-i.y1,l=n.walls.find(e=>e.id===t.id);if(!l)return;Object.assign(l,{x1:i.x1+s,y1:i.y1+c,x2:i.x2+s,y2:i.y2+c});for(let e of t.ends){let t=n.walls.find(t=>t.id===e.id);t&&(e.end===1?Object.assign(t,{x1:e.x+s,y1:e.y+c}):Object.assign(t,{x2:e.x+s,y2:e.y+c}))}this.keepFromEnd2(n),Re(n)}else if(t.kind===`endpoint`){let r=n.walls.find(e=>e.id===t.id);if(!r)return;let a=new Set([r.id,...t.ends.map(e=>e.id)]),o=i?this.snapped(e,a).pt:{x:Math.round(e.x),y:Math.round(e.y)},s=t.end===1?{x:r.x2,y:r.y2}:{x:r.x1,y:r.y1};if(this.shiftDown&&(o=He(s,o)),C(o,s)<1)return;t.end===1?Object.assign(r,{x1:o.x,y1:o.y}):Object.assign(r,{x2:o.x,y2:o.y});for(let e of t.ends){let t=n.walls.find(t=>t.id===e.id);t&&(e.end===1?Object.assign(t,{x1:o.x,y1:o.y}):Object.assign(t,{x2:o.x,y2:o.y}))}this.keepFromEnd2(n),Re(n)}else if(t.kind===`opening`){let a=n.openings.find(e=>e.id===t.id);if(!a)return;let o=n.walls.find(e=>e.id===a.wallId),s=V(rn(n.walls),e,this.snapMm*2),c=s&&(!o||s.wall.id!==o.id)&&L(s.wall)>=a.w?s.wall:o;if(!c)return;a.wallId=c.id,a.t=B(c,e,a.w,r,i)}else if(t.kind===`furniture`){let r=n.furniture.find(e=>e.id===t.id);if(!r)return;r.x=Math.round((t.orig.x+e.x-this.downWorld.x)/10)*10,r.y=Math.round((t.orig.y+e.y-this.downWorld.y)/10)*10}else if(t.kind===`group`){let i=e.x-this.downWorld.x,a=e.y-this.downWorld.y,o=t.walls[0];o&&U.snapMode===`intersection`?(i=ze(o.x1+i,r)-o.x1,a=ze(o.y1+a,r)-o.y1):o?(i=Math.round(i),a=Math.round(a)):(i=Math.round(i/10)*10,a=Math.round(a/10)*10);for(let e of t.walls){let t=n.walls.find(t=>t.id===e.id);t&&Object.assign(t,{x1:e.x1+i,y1:e.y1+a,x2:e.x2+i,y2:e.y2+a})}for(let e of t.ends){let t=n.walls.find(t=>t.id===e.id);t&&(e.end===1?Object.assign(t,{x1:e.x+i,y1:e.y+a}):Object.assign(t,{x2:e.x+i,y2:e.y+a}))}for(let e of t.furniture){let t=n.furniture.find(t=>t.id===e.id);t&&Object.assign(t,{x:e.x+i,y:e.y+a})}this.keepFromEnd2(n),t.walls.length&&Re(n)}!this.dragRecorded&&this.dragPre&&y(n)!==this.dragPre.s&&(U.history.record(this.dragPre),this.dragRecorded=!0);let a=this.cutCount(t)>0;a!==this.cutShown&&(this.cutShown=a,a?this.onHint($t):this.updateHint()),U.recompute(),U.emit(`project`)}render(){let e=this.ctx;if(!U.project||!this.cssW)return;let t=U.project;e.setTransform(this.dpr,0,0,this.dpr,0,0);let n=U.selection,r=new Set(U.selectedRefs().map(e=>e.id)),i=n?.type===`room`?oe(U.rooms,n)??null:null;Qe(e,this.cssW,this.cssH,t,U.rooms,this.view,{showGrid:!0,selectedIds:r,selectedRoom:i,handles:!U.multi,hoverId:this.hoverId,underlay:U.underlay?.visible&&U.underlayImg?{img:U.underlayImg,u:U.underlay}:null}),this.drawToolOverlay(),this.drawScale(),this.openingBar.update(this.view,this.gesture===`drag`||this.gesture===`pan`||this.gesture===`pinch`,this.cssW,this.cssH)}pendingReveal=null;revealSoon(e){if(this.gesture!==`none`){this.pendingReveal=e;return}let t=e();t&&this.reveal(t)}frameBounds(e){let t=this.host.getBoundingClientRect();if(t.width&&t.height&&(t.width!==this.cssW||t.height!==this.cssH)&&this.resize(),!this.cssW)return;let n=this.cssH-this.bottomInset(),r=Math.max(200,e.maxX-e.minX),i=Math.max(200,e.maxY-e.minY),a=Math.max(.004,Math.min(.3,(this.cssW-120)/r,(n-120)/i)),o=(e.minX+e.maxX)/2,s=(e.minY+e.maxY)/2;this.autoFit=!1,this.view={scale:a,ox:this.cssW/2-o*a,oy:n/2-s*a},this.requestRender()}visibleCenter(){return We(this.view,{x:this.cssW/2,y:(this.cssH-this.bottomInset())/2})}reveal(e){if(!this.cssW)return;let t=Ue(this.view,e),n=this.cssH-this.bottomInset(),r=0,i=0;(t.y>n-70||t.y<50)&&(i=n*.45-t.y),(t.x>this.cssW-50||t.x<50)&&(r=this.cssW/2-t.x),(r||i)&&(this.autoFit=!1,this.view={...this.view,ox:this.view.ox+r,oy:this.view.oy+i},this.requestRender())}drawToolOverlay(){let e=U.p;if(this.marquee){let{a:e,b:t}=this.marquee,n=this.ctx;n.save(),n.fillStyle=`rgba(47,125,109,0.10)`,n.strokeStyle=H.accent,n.setLineDash([5,4]),n.lineWidth=1.5,n.fillRect(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.abs(t.x-e.x),Math.abs(t.y-e.y)),n.strokeRect(Math.min(e.x,t.x)+.5,Math.min(e.y,t.y)+.5,Math.abs(t.x-e.x),Math.abs(t.y-e.y)),n.restore()}let t=U.tool;if(t===`wall`){let t=this.stepZH(U.wallSteps);if(U.snapMode===`numeric`){if(this.numericStart){let e=this.numeric,t=e.angle*Math.PI/180,n={x:this.numericStart.x+Math.cos(t)*e.len,y:this.numericStart.y+Math.sin(t)*e.len};e.len>0&&this.ghostWall(this.numericStart,n,e.d),this.marker(this.numericStart,`start`)}}else if(this.chain&&this.hoverSnap){let n=this.chain[this.chain.length-1];this.ghostWall(n,this.hoverSnap.pt,e.settings.wallD),this.marker(this.chain[0],`start`);let r=C(n,this.hoverSnap.pt);r>0&&this.tooltip(this.hoverSnap.pt,`${Math.round(r)} mm${t.z>0||t.h!==e.settings.wallH?`  Z${t.z} H${t.h}`:``}`)}this.hoverSnap&&U.snapMode!==`numeric`?this.marker(this.hoverSnap.pt,this.hoverSnap.kind):this.hoverWorld&&U.snapMode===`numeric`&&!this.numericStart&&this.marker(this.snapped(this.hoverWorld).pt,`grid`)}if(t===`opening`&&this.hoverWorld){let t=V(rn(e.walls),this.hoverWorld,this.snapMm);if(t){let e=this.newOpening(t.wall,this.hoverWorld),n=t.wall,r=ge(n),i=_e(n,e.t-e.w/2),a=_e(n,e.t+e.w/2),o=n.d/2+30,s=[{x:i.x+r.x*o,y:i.y+r.y*o},{x:a.x+r.x*o,y:a.y+r.y*o},{x:a.x-r.x*o,y:a.y-r.y*o},{x:i.x-r.x*o,y:i.y-r.y*o}];this.fillPoly(s,H.accentSoft,H.accent);let c=e.kind===`door`?{inward:`・内開き`,outward:`・外開き`,between:``,unknown:``}[ke(e,n,U.rooms)]:e.kind===`folding`?{inward:`・内側に折れる`,outward:`・外側に折れる`,between:``,unknown:``}[ke(e,n,U.rooms)]:``;this.tooltip(_e(n,e.t),`W${e.w}  Z${e.z}  H${e.h}${c}`)}}if(t===`furniture`&&this.hoverWorld&&U.pendingFurniture){let e=pe(U.pendingFurniture);if(e){let t=Ke({x:this.hoverWorld.x,y:this.hoverWorld.y,w:e.w,d:e.d,rot:0});this.fillPoly(t,H.accentSoft,H.accent),this.tooltip(this.hoverWorld,e.name)}}}ghostWall(e,t,n){if(C(e,t)<1)return;let r={id:`_`,x1:e.x,y1:e.y,x2:t.x,y2:t.y,d:n,z:0,h:0};this.fillPoly(Ge(r,[0,0]),`rgba(47,125,109,0.45)`,H.accent)}fillPoly(e,t,n){let r=this.ctx;r.beginPath(),e.forEach((e,t)=>{let n=Ue(this.view,e);t===0?r.moveTo(n.x,n.y):r.lineTo(n.x,n.y)}),r.closePath(),r.fillStyle=t,r.fill(),r.strokeStyle=n,r.lineWidth=1.5,r.stroke()}marker(e,t){let n=this.ctx,r=Ue(this.view,e);n.save(),n.lineWidth=2,t===`endpoint`?(n.strokeStyle=`#d9822b`,n.strokeRect(r.x-6,r.y-6,12,12)):t===`start`?(n.strokeStyle=H.accent,n.beginPath(),n.arc(r.x,r.y,8,0,Math.PI*2),n.stroke()):t===`gridline`||t===`wall`?(n.strokeStyle=`#3b7dd8`,n.beginPath(),n.moveTo(r.x-6,r.y),n.lineTo(r.x+6,r.y),n.moveTo(r.x,r.y-6),n.lineTo(r.x,r.y+6),n.stroke()):(n.strokeStyle=H.accent,n.beginPath(),n.moveTo(r.x-5,r.y-5),n.lineTo(r.x+5,r.y+5),n.moveTo(r.x+5,r.y-5),n.lineTo(r.x-5,r.y+5),n.stroke()),n.restore()}tooltip(e,t){let n=this.ctx,r=Ue(this.view,e);n.font=`12px ${$e}`;let i=n.measureText(t).width+12,a=Math.min(this.cssW-i-4,r.x+14),o=Math.max(4,r.y-30);n.fillStyle=`rgba(30,34,40,0.85)`,an(n,a,o,i,20,5),n.fill(),n.fillStyle=`#fff`,n.textAlign=`left`,n.textBaseline=`middle`,n.fillText(t,a+6,o+10)}drawScale(){let e=this.ctx;if(!(this.view.scale>0)||!Number.isFinite(this.view.scale))return;let t=U.p.settings.grid;for(;t*this.view.scale<40;)t*=2;for(;t*this.view.scale>160&&t%2==0;)t/=2;let n=t*this.view.scale,r=this.cssH-(window.innerWidth<1e3?42:16);e.strokeStyle=`#555`,e.lineWidth=1.5,e.beginPath(),e.moveTo(14,r-4),e.lineTo(14,r),e.lineTo(14+n,r),e.lineTo(14+n,r-4),e.stroke(),e.font=`11px ${$e}`,e.fillStyle=`#555`,e.textAlign=`left`,e.textBaseline=`bottom`,e.fillText(`${t} mm`,14+n+6,r+2)}},nn=(e,t)=>({x:(e.x+t.x)/2,y:(e.y+t.y)/2}),rn=e=>e.filter(e=>!e.hidden&&!e.locked);function an(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function on(e){let t=e.target;return!!t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.tagName===`SELECT`||t.isContentEditable)}var sn=window.claude,cn=typeof sn?.use==`function`,ln=(()=>{try{return window.self!==window.top}catch{return!0}})(),un=null;function dn(){return cn?(un??=sn.use(`downloads`).then(e=>e??null,()=>null),un):Promise.resolve(null)}async function fn(e,t){if(!cn){let n=URL.createObjectURL(t),r=document.createElement(`a`);return r.href=n,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3),`saved`}let n=await dn();if(!n)return`unavailable`;try{return await n.save({filename:e,data:t}),`saved`}catch(e){let t=e?.code;return t===`declined`?`declined`:t===`rate_limited`?`busy`:`unavailable`}}var pn=!cn&&typeof navigator.share==`function`;function mn(e){if(!(cn||ln))try{location.hash!==e&&history.pushState(null,``,e||location.pathname+location.search)}catch{}}function hn(e){return e.replace(/[０-９．（）＋＊／]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[－−ー―‐–—]/g,`-`).replace(/[×xXｘＸ✕]/g,`*`).replace(/[÷]/g,`/`).replace(/[,，、\s]/g,``)}function gn(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(`+-*/()`.includes(r)){t.push({t:`op`,v:r}),n++;continue}let i=/^(\d+\.?\d*|\.\d+)/.exec(e.slice(n));if(!i)return null;t.push({t:`num`,v:Number(i[1])}),n+=i[1].length}return t}function _n(e){let t=hn(e);if(!t)return null;let n=gn(t);if(!n||!n.length)return null;let r=0,i=()=>n[r],a=e=>i()?.t===`op`&&i().v===e,o=()=>{let e=s();for(;e!==null&&(a(`+`)||a(`-`));){let t=n[r++].v,i=s();if(i===null)return null;e=t===`+`?e+i:e-i}return e},s=()=>{let e=c();for(;e!==null&&(a(`*`)||a(`/`));){let t=n[r++].v,i=c();if(i===null||t===`/`&&i===0)return null;e=t===`*`?e*i:e/i}return e},c=()=>{if(a(`-`)){r++;let e=c();return e===null?null:-e}return a(`+`)?(r++,c()):l()},l=()=>{let e=i();if(!e)return null;if(e.t===`num`)return r++,e.v;if(e.v===`(`){r++;let e=o();return e===null||!a(`)`)?null:(r++,e)}return null},u=o();return u===null||r!==n.length||!Number.isFinite(u)?null:u}function vn(e,t=0){let n=10**t,r=Math.round(e*n)/n;return Object.is(r,-0)?0:r}var yn=e=>/^-?(\d+\.?\d*|\.\d+)$/.test(hn(e)),bn=(e,t)=>e===null?``:String(vn(e,t));function xn(e){let t=e.decimals??0,n=bn(e.value,t),r=!1,i=P(`input`,{class:`input num calc ${e.className??``}`,type:`text`,inputmode:`text`,autocomplete:`off`,autocorrect:`off`,autocapitalize:`off`,spellcheck:`false`,enterkeyhint:`done`,value:n,placeholder:e.placeholder??``,...e.key?{"data-key":e.key}:{},...e.id?{id:e.id}:{}}),a=()=>{let e=_n(i.value);return e===null?null:vn(e,t)},o=()=>{let t=a();return t===null||e.min!==void 0&&t<e.min?null:t},s=e=>{i.classList.toggle(`invalid`,e),i.setAttribute(`aria-invalid`,String(e))},c=()=>{if(i.value=n,s(!1),i.removeAttribute(`data-dirty`),n!==``){let t=_n(n);t!==null&&e.live?.(t)}},l=()=>{let t=i.value.trim();i.toggleAttribute(`data-dirty`,t!==n);let r=a(),c=o();s(!!t&&c===null),c!==null&&e.live?.(c);let l={kind:`none`};t&&r!==null&&c===null?l={kind:`low`,v:r,min:e.min??0}:t&&!yn(t)&&(l=r===null?{kind:`bad`}:{kind:`value`,v:r}),wn.update(i,l)},u=()=>{let r=i.value.trim();if(r===n||!r&&n===``)return s(!1);let l=o();if(l===null){r&&I(a()===null?`「${r}」を計算できませんでした。元の値に戻しました`:`${e.min}以上の値を入れてください。元の値に戻しました`),c();return}s(!1);let u=bn(l,t);i.value=u,u!==n&&(n=u,e.commit(l))},d=()=>i.value.trim()&&o()===null?(s(!0),!0):!1;return i.addEventListener(`input`,l),i.addEventListener(`keydown`,t=>{if(wn.onKey(i,t),!(t.isComposing||t.keyCode===229)){if(t.key===`Enter`){if(t.preventDefault(),d())return;i.blur(),e.onEnter?.()}else t.key===`Escape`&&(t.preventDefault(),t.stopPropagation(),r=!0,c(),i.blur())}}),i.addEventListener(`pointerdown`,e=>wn.onPointerDown(i,e)),i.addEventListener(`focus`,()=>{r=!1,wn.onFocus(i,e.label??``),l()}),i.addEventListener(`blur`,()=>{if(i.removeAttribute(`data-dirty`),wn.onBlur(i),r){r=!1;return}wn.switching(i)||u()}),i.calc={commit:()=>{d()||i.blur()},cancel:()=>{r=!0,c(),i.blur()},changed:l},i}function Sn(e){wn.prepare(e),e.focus(),e.select()}var Cn=[[[`C`,`clear`],[`(`,`(`],[`)`,`)`],[`⌫`,`back`]],[[`7`,`7`],[`8`,`8`],[`9`,`9`],[`÷`,`/`]],[[`4`,`4`],[`5`,`5`],[`6`,`6`],[`×`,`*`]],[[`1`,`1`],[`2`,`2`],[`3`,`3`],[`−`,`-`]],[[`0`,`0`],[`.`,`.`],[`+`,`+`],[`確定`,`ok`]]],wn=new class{el=null;title;result;target=null;bubble=null;hardware=!1;switchingTo=null;placeRaf=0;lastPointer=``;watch=null;constructor(){if(typeof document<`u`){try{this.hardware=sessionStorage.getItem(`hako.hwKeyboard`)===`1`}catch{}document.addEventListener(`pointerdown`,e=>{this.lastPointer=e.pointerType;let t=e.target;if(!t||t.closest(`input.calc`))return;let n=t.closest(`label`)?.control;n instanceof HTMLInputElement&&n.classList.contains(`calc`)&&this.onPointerDown(n,e)},!0)}}onPointerDown(e,t){document.activeElement!==e&&(e.inputMode=t.pointerType===`touch`&&!this.hardware?`none`:`text`)}prepare(e){document.activeElement!==e&&(e.inputMode=this.lastPointer===`touch`&&!this.hardware?`none`:`text`)}onFocus(e,t){e.inputMode===`none`&&this.open(e,t)}onBlur(e){this.target===e&&this.close(),this.hideBubble()}switching(e){return this.switchingTo===e&&(this.switchingTo=null,!0)}onKey(e,t){if(!(this.target!==e||t.metaKey||t.ctrlKey)&&(t.key.length===1||t.key===`Backspace`)){this.hardware=!0;try{sessionStorage.setItem(`hako.hwKeyboard`,`1`)}catch{}e.inputMode=`text`,this.close()}}update(e,t){let n=t.kind===`none`?``:t.kind===`bad`?`式を確認してください`:t.kind===`low`?`= ${t.v}（${t.min}以上にしてください）`:`= ${t.v}`,r=t.kind===`bad`||t.kind===`low`;if(this.target===e){this.result.textContent=n,this.result.classList.toggle(`bad`,r);return}if(document.activeElement!==e||t.kind===`none`)return this.hideBubble();this.bubble||(this.bubble=P(`div`,{class:`calc-bubble`,role:`status`,"aria-live":`polite`}),document.body.append(this.bubble)),this.bubble.textContent=n,this.bubble.classList.toggle(`bad`,r),this.bubble.hidden=!1;let i=e.getBoundingClientRect();this.bubble.style.left=`${Math.max(8,Math.min(window.innerWidth-this.bubble.offsetWidth-8,i.right-this.bubble.offsetWidth))}px`,this.bubble.style.top=`${i.bottom+4+this.bubble.offsetHeight>window.innerHeight?i.top-this.bubble.offsetHeight-4:i.bottom+4}px`}hideBubble(){this.bubble&&(this.bubble.hidden=!0)}build(){this.title=P(`span`,{class:`calc-title`}),this.result=P(`span`,{class:`calc-result`,"aria-live":`polite`});let e=e=>t=>{t.preventDefault(),e()},t=P(`div`,{class:`calc-keys`});for(let n of Cn)for(let[r,i]of n){let n=P(`button`,{class:`calc-key ${i===`ok`?`ok`:/[-+*/()]/.test(i)?`op`:i===`clear`||i===`back`?`fn`:``}`,type:`button`,"aria-label":r===`⌫`?`1文字消す`:r===`C`?`すべて消す`:r},r);n.addEventListener(`pointerdown`,e(()=>this.press(i))),n.addEventListener(`touchstart`,e=>e.preventDefault(),{passive:!1}),t.append(n)}let n=P(`button`,{class:`calc-icon`,type:`button`,title:`キーボードで入力`,"aria-label":`キーボードで入力`},F(`keyboard`,18));n.addEventListener(`pointerdown`,e=>e.preventDefault()),n.addEventListener(`click`,()=>{let e=this.target;if(!e||!e.isConnected)return this.close();this.close(),e.inputMode=`text`,this.switchingTo=e,e.blur(),e.focus()});let r=P(`button`,{class:`calc-icon`,type:`button`,title:`取り消す`,"aria-label":`入力を取り消す`},F(`close`,18));r.addEventListener(`pointerdown`,e(()=>this.target?.calc?.cancel())),r.addEventListener(`touchstart`,e=>e.preventDefault(),{passive:!1}),this.el=P(`div`,{class:`calc-pad`,hidden:!0,role:`dialog`,"aria-label":`計算入力`},P(`div`,{class:`calc-head`},this.title,this.result,P(`span`,{class:`spacer`}),n,r),t),this.el.addEventListener(`pointerdown`,e=>e.preventDefault()),document.body.append(this.el);let i=()=>this.target&&this.schedulePlace();window.addEventListener(`resize`,i),document.addEventListener(`scroll`,i,!0),this.watch=new MutationObserver(()=>{this.target&&!this.target.isConnected&&(this.close(),this.hideBubble())})}open(e,t){this.el||this.build(),this.target=e,this.title.textContent=t,this.result.textContent=``,this.el.hidden=!1,this.watch?.observe(document.body,{childList:!0,subtree:!0}),this.place(),e.select()}close(){this.target=null,this.watch?.disconnect(),this.el&&(this.el.hidden=!0)}schedulePlace(){cancelAnimationFrame(this.placeRaf),this.placeRaf=requestAnimationFrame(()=>this.place())}place(){let e=this.target,t=this.el;if(!e||!t)return;if(!e.isConnected)return this.close();let n=e.getBoundingClientRect(),r=t.offsetWidth,i=t.offsetHeight,a=window.innerWidth,o=window.visualViewport?.height??window.innerHeight,s=Math.max(8,Math.min(a-r-8,n.left+n.width/2-r/2)),c=n.top-i-8;c<8&&(c=n.bottom+8+i<=o-8?n.bottom+8:Math.max(8,o-i-8)),t.style.left=`${s}px`,t.style.top=`${c}px`}press(e){let t=this.target;if(!t)return;if(!t.isConnected)return this.close();if(e===`ok`)return t.calc?.commit();let n=t.selectionStart??t.value.length,r=t.selectionEnd??t.value.length;e===`clear`?t.value=``:e===`back`?n===r?n>0&&t.setRangeText(``,n-1,n,`end`):t.setRangeText(``,n,r,`end`):t.setRangeText(e,n,r,`end`),t.calc?.changed()}},Tn={910:`910mm（尺モジュール）`,455:`455mm（尺・半間）`,1e3:`1000mm（メーターモジュール）`,500:`500mm（メーター・半）`},En=[];function Dn(e,t,n={}){let r=n.dismissable!==!1,i=r?P(`button`,{class:`icon-btn`,"aria-label":`閉じる`,onclick:()=>s.close()},F(`close`)):null,a=P(`div`,{class:`modal ${n.wide?`wide`:``} ${n.className??``}`,role:`dialog`,"aria-modal":`true`,"aria-label":e},P(`header`,{class:`modal-head`},P(`h2`,null,e),i),P(`div`,{class:`modal-body`},t)),o=P(`div`,{class:`backdrop`},a);r&&o.addEventListener(`pointerdown`,e=>e.target===o&&s.close()),document.body.append(o),requestAnimationFrame(()=>o.classList.add(`open`));let s={el:a,close:()=>{let e=En.indexOf(s);if(e<0)return;En.splice(e,1);let t=document.activeElement;t&&o.contains(t)&&t.blur(),o.remove(),n.onClose?.()}};return En.push(s),s}function On(){let e=En[En.length-1];return e?(e.close(),!0):!1}var kn=()=>En.length>0;function An(){for(;On(););}function jn(e,t,n=`OK`,r=!1){return new Promise(i=>{let a=!1,o=e=>{a||(a=!0,s.close(),i(e))},s=Dn(e,[P(`p`,{class:`muted`},t),P(`div`,{class:`actions`},P(`button`,{class:`btn`,onclick:()=>o(!1)},`キャンセル`),P(`button`,{class:`btn ${r?`danger`:`primary`}`,onclick:()=>o(!0)},n))],{onClose:()=>o(!1)})})}function Mn(e,t,n=``){return new Promise(r=>{let i=!1,a=P(`input`,{class:`input`,value:t,placeholder:n,maxlength:40}),o=e=>{i||(i=!0,s.close(),r(e))};a.addEventListener(`keydown`,e=>e.key===`Enter`&&o(a.value.trim()));let s=Dn(e,[a,P(`div`,{class:`actions`},P(`button`,{class:`btn`,onclick:()=>o(null)},`キャンセル`),P(`button`,{class:`btn primary`,onclick:()=>o(a.value.trim())},`OK`))],{onClose:()=>o(null)});setTimeout(()=>a.select(),30)})}function Nn(n=``){let r=s(U.prefs.purchases),i=(e,t)=>{let n=U.prefs.purchases;U.setPrefs({purchases:{lifetime:n.lifetime||e===`standard`,subscription:n.subscription||e===`pro`}}),I(`${t}を購入しました（デモ）`),o.close()},a=(e,t,n,r,i,a=!1)=>P(`div`,{class:`plan-col ${a?`hl`:``}`},P(`div`,{class:`plan-name`},e),P(`div`,{class:`plan-price`},t),P(`div`,{class:`plan-sub`},n),P(`ul`,null,r.map(e=>P(`li`,null,F(`check`,14),e))),i),o=Dn(`ハコマドリをもっと便利に`,[n?P(`p`,{class:`paywall-reason`},n):null,P(`div`,{class:`plan-grid`},a(`無料`,`0円`,``,[`全作図機能・面積・帖数`,`3D表示・天井`,`プロジェクト3件まで`,`基本家具のみ`,`書き出しは透かし入り・広告あり`],r===`free`?P(`div`,{class:`plan-current`},`利用中`):null),a(`スタンダード`,`1,800円`,`買い切り（仮価格）`,[`広告なし`,`プロジェクト無制限`,`透かしなし書き出し`,`JSONバックアップ`],t(U.prefs.purchases)?P(`div`,{class:`plan-current`},e(U.prefs.purchases)?`Proに含まれます`:`購入済み`):P(`button`,{class:`btn primary block`,onclick:()=>i(`standard`,`スタンダード`)},`1,800円で購入`)),a(`Pro`,`月額480円`,`年額3,800円（仮価格）`,[`スタンダードの全内容`,`家具カタログ全開放（随時追加）`,`iCloud同期・共有リンク（予定）`,`寸法入りPDF図面（予定）`,`今後の新機能`],e(U.prefs.purchases)?P(`div`,{class:`plan-current`},`利用中`):P(`div`,{class:`stack`},P(`button`,{class:`btn primary block`,onclick:()=>i(`pro`,`Pro（月額）`)},`月額480円で始める`),P(`button`,{class:`btn block`,onclick:()=>i(`pro`,`Pro（年額）`)},`年額3,800円（34%お得）`)),!0)),P(`p`,{class:`fine`},`サブスクリプションは期間終了の24時間前までに解約しない限り自動更新されます。解約は「設定」アプリ＞Apple ID＞サブスクリプションから行えます。お支払いはApple IDに請求されます。Proを解約しても、買い切りの権利は残ります。`),P(`div`,{class:`paywall-links`},P(`button`,{class:`link`,onclick:()=>Pn()},`購入を復元`),P(`a`,{href:`#terms`,class:`link`,onclick:e=>(e.preventDefault(),I(`利用規約（準備中）`))},`利用規約`),P(`a`,{href:`#privacy`,class:`link`,onclick:e=>(e.preventDefault(),I(`プライバシーポリシー（準備中）`))},`プライバシーポリシー`)),P(`p`,{class:`fine center`},`※ プロトタイプのため、実際の課金は発生しません`)],{wide:!0,className:`paywall`})}function Pn(){let e=U.prefs.purchases;I(e.lifetime||e.subscription?`購入を復元しました：${l[s(e)]}`:`復元できる購入はありませんでした`)}var Fn=null;function In(){return U.prefs.attAsked?Promise.resolve():(Fn??=Ln().finally(()=>Fn=null),Fn)}function Ln(){return new Promise(e=>{let t=!1,n=Dn(`広告の表示について`,[P(`p`,null,`ハコマドリの無料版は、プロジェクト一覧の下に広告を表示して運営しています。作図中の画面には広告を出しません。`),P(`p`,{class:`muted`},`次の画面で許可すると、あなたの興味に合った広告が表示されます。許可しなくても、すべての機能を使えます（その場合は一般的な広告になります）。`),P(`div`,{class:`actions`},P(`button`,{class:`btn primary`,onclick:()=>{t=!0,n.close(),Rn().then(e)}},`続ける`))],{dismissable:cn||ln,onClose:()=>{t||(U.setPrefs({attAsked:!0,attAllowed:!1}),e())}})})}function Rn(){return new Promise(e=>{let t=t=>{U.setPrefs({attAsked:!0,attAllowed:t}),n.close(),e()},n=Dn(``,[P(`p`,{class:`att-title`},`“ハコマドリ”がほかの会社のAppやWebサイトを横断してあなたのアクティビティの追跡を許可しますか？`),P(`p`,{class:`muted center small`},`あなたに合った広告を表示するために使用されます。`),P(`div`,{class:`att-actions`},P(`button`,{onclick:()=>t(!1)},`Appにトラッキングしないように要求`),P(`button`,{onclick:()=>t(!0)},`許可`)),P(`p`,{class:`fine center`},`（iOSのシステムダイアログの再現）`)],{dismissable:!1,className:`att`})})}function zn(e,t){let n=5,r=P(`span`,{class:`ad-count`},`${n}`),i=P(`button`,{class:`btn`,disabled:!0,onclick:()=>a.close()},`閉じる`),a=Dn(`広告`,[P(`div`,{class:`reward-ad`},P(`div`,{class:`reward-ad-inner`},F(`play`,36),P(`div`,null,`サンプル広告（デモ）`),P(`div`,{class:`small muted`},`あと `,r,` 秒`))),P(`p`,{class:`muted center`},`視聴後に「${e}」が使えます`),P(`div`,{class:`actions`},i)],{dismissable:!1}),o=window.setInterval(()=>{n--,r.textContent=String(n),n<=0&&(clearInterval(o),t(),I(`${e}が使えるようになりました`),i.disabled=!1,i.textContent=`閉じる`,i.className=`btn primary`)},1e3)}function Bn(){let t=de[0],n=P(`div`,{class:`catalog-grid`}),r=P(`div`,{class:`seg catalog-tabs`}),i=P(`div`,{class:`catalog-trial`}),a=()=>{r.replaceChildren(...de.map(e=>P(`button`,{class:e===t?`on`:``,onclick:()=>{t=e,a()}},e))),n.replaceChildren(...fe.filter(e=>e.category===t).map(s));let o=U.prefs.furnitureTrialUntil>Date.now();i.replaceChildren(),e(U.prefs.purchases)||i.append(o?P(`span`,{class:`small`},`Pro家具を試用中（${new Date(U.prefs.furnitureTrialUntil).toLocaleString(`ja-JP`,{month:`numeric`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}まで）`):P(`button`,{class:`btn small`,onclick:()=>zn(`Pro家具の24時間試用`,()=>{U.setPrefs({furnitureTrialUntil:Date.now()+864e5}),a()})},F(`play`,14),`広告を見てPro家具を24時間試用`))},s=e=>{let t=o(U.prefs.purchases,e,U.prefs.furnitureTrialUntil);return P(`button`,{class:`catalog-card ${t?``:`locked`}`,onclick:()=>{if(!t){Nn(`この家具はProで使えます。`);return}U.pendingFurniture=e.id,U.setTool(`furniture`),c.close()}},Vn(e),P(`div`,{class:`catalog-name`},e.name,t?null:F(`lock`,14),e.pro&&t?P(`span`,{class:`badge`},`Pro`):null),P(`div`,{class:`catalog-size`},`W${e.w} D${e.d} H${e.h}`))},c=Dn(`家具を置く`,[r,i,n],{wide:!0});a()}function Vn(e){let t=P(`canvas`,{class:`catalog-thumb`,width:160,height:100}),n=t.getContext(`2d`),r=Math.min(130/e.w,80/e.d),i=e.w*r,a=e.d*r;return n.fillStyle=`#f6f5f1`,n.fillRect(0,0,160,100),n.fillStyle=e.color,n.globalAlpha=.55,n.fillRect(80-i/2,50-a/2,i,a),n.globalAlpha=1,n.strokeStyle=`#6d6a64`,n.lineWidth=1.5,n.strokeRect(80-i/2,50-a/2,i,a),[`bed`,`sofa`,`chair`].includes(e.shape)&&(n.beginPath(),n.moveTo(80-i/2,50-a/2+Math.max(4,a*.18)),n.lineTo(80+i/2,50-a/2+Math.max(4,a*.18)),n.stroke()),t}function Hn(e){let t=U.p,n=`2d`,r=!1,a=P(`div`,{class:`export-preview`}),o=P(`div`,{class:`export-info`}),s=null,c=()=>{let l=n===`2d`?st(t,U.rooms,800,560,{dpr:2,grid:!1,margin:56}):e(),u=document.createElement(`canvas`);u.width=l.width,u.height=l.height;let d=u.getContext(`2d`);d.drawImage(l,0,0);let f=u.width/1600;d.font=`600 ${Math.round(28*f)}px ${$e}`,d.fillStyle=`rgba(40,44,50,0.9)`,d.textAlign=`left`,d.textBaseline=`top`,d.fillText(t.name,28*f,22*f),d.font=`${Math.round(18*f)}px ${$e}`,d.fillStyle=`rgba(80,84,90,0.9)`,d.fillText(`合計 ${U.totalArea().toFixed(2)}㎡ ／ グリッド ${t.settings.grid}mm`,28*f,58*f);let p=i(U.prefs.purchases)&&!r;p&&(d.save(),d.translate(u.width/2,u.height/2),d.rotate(-.35),d.font=`700 ${Math.round(u.width/12)}px ${$e}`,d.fillStyle=`rgba(47,125,109,0.14)`,d.textAlign=`center`,d.textBaseline=`middle`,d.fillText(`ハコマドリ 無料版`,0,0),d.restore(),d.font=`${Math.round(16*f)}px ${$e}`,d.fillStyle=`rgba(47,125,109,0.8)`,d.textAlign=`right`,d.textBaseline=`bottom`,d.fillText(`Made with ハコマドリ`,u.width-20*f,u.height-16*f)),s=u;let m=P(`img`,{src:u.toDataURL(`image/png`),alt:`書き出しプレビュー`});a.replaceChildren(m),o.replaceChildren(p?P(`div`,{class:`wm-note`},P(`span`,null,`無料版は透かしが入ります。`),P(`button`,{class:`link`,onclick:()=>Nn(`透かしなしで書き出すには、スタンダード以上が必要です。`)},`プランを見る`),P(`button`,{class:`btn small`,onclick:()=>zn(`透かしなしで1回書き出し`,()=>{r=!0,c()})},F(`play`,14),`広告を見て透かしなしで1回書き出し`)):P(`div`,{class:`small muted`},r?`今回は透かしなしで書き出せます`:`透かしなしで書き出します`))},l=()=>`${t.name.replace(/[\\/:*?"<>|]/g,`_`)}_${n}.png`,u=()=>{r&&(r=!1,setTimeout(c,50))},d=()=>new Promise(e=>s?s.toBlob(e,`image/png`):e(null)),f=async()=>{let e=await d();if(!e)return;let t=await fn(l(),e);t===`saved`?(u(),I(`画像を保存しました`)):t===`busy`?I(`保存の確認が開いています。先にそちらを閉じてください`):t===`unavailable`&&g()},p=async()=>{let e=await d();if(!e)return;let n=new File([e],l(),{type:`image/png`}),r=navigator;if(r.canShare?.({files:[n]}))try{await r.share({files:[n],title:t.name}),u()}catch{}else f()},m=P(`p`,{class:`small muted`,hidden:!0},`この画面では保存ボタンが使えません。プレビュー画像を長押し（パソコンは右クリック）して保存してください。`),h=P(`button`,{class:`btn primary`,onclick:f},`画像を保存`),g=()=>{m.hidden=!1,h.hidden=!0};cn&&dn().then(e=>!e&&g());let _=P(`div`,{class:`seg`},P(`button`,{class:`on`,"data-k":`2d`},F(`image`,16),`2D図面`),P(`button`,{"data-k":`3d`},F(`cube`,16),`3D画面`));_.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(n=t.dataset.k,_.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e===t)),c())});let v=U.on(e=>e===`prefs`&&c());Dn(`画像の書き出し`,[_,P(`p`,{class:`small muted`},`3D画面は、いま3Dビューに映っている視点で書き出します。`),a,o,m,P(`div`,{class:`actions`},pn?P(`button`,{class:`btn`,onclick:p},F(`share`,16),`共有`):null,h)],{wide:!0,onClose:()=>v()}),c()}function Un(e){let t=!!U.project,r=[];if(t){let t=U.p.settings,n=t=>{U.edit(e=>Object.assign(e.settings,t)),e?.()},i=(e,r,i,a=1,o=1)=>P(`label`,{class:`row`},P(`span`,null,e),P(`span`,{class:`with-unit`},xn({value:Number(t[r]),label:e,min:o,decimals:a<1?2:0,commit:e=>n({[r]:e})}),i));r.push(P(`h3`,null,`このプロジェクト`),P(`label`,{class:`row`},P(`span`,null,`グリッド`),P(`select`,{class:`input`,onchange:e=>n({grid:Number(e.target.value)})},d.map(e=>P(`option`,{value:String(e),selected:e===t.grid},Tn[e])))),i(`既定の壁厚 D`,`wallD`,`mm`),i(`既定の壁高 H`,`wallH`,`mm`),i(`天井高`,`ceilingH`,`mm`),i(`段ピッチ`,`stepPitch`,`mm`),i(`帖の換算係数`,`jouFactor`,`㎡／帖`,.01,.1),P(`label`,{class:`row`},P(`span`,null,`帖の端数処理`),P(`select`,{class:`input`,onchange:e=>n({jouRounding:e.target.value})},P(`option`,{value:`floor`,selected:t.jouRounding===`floor`},`切り捨て`),P(`option`,{value:`round`,selected:t.jouRounding===`round`},`四捨五入`))),P(`label`,{class:`row`},P(`span`,null,`寸法を表示`),P(`input`,{type:`checkbox`,checked:t.showDimensions,onchange:e=>n({showDimensions:e.target.checked})})),P(`p`,{class:`fine`},`面積は壁芯で計算し、帖＝㎡÷換算係数（不動産表示規約の1.62㎡／帖）で表示します。`))}let i=P(`div`,{class:`seg`}),a=()=>{let e=s(U.prefs.purchases);i.replaceChildren(...[`free`,`standard`,`pro`].map(t=>P(`button`,{class:t===e?`on`:``,onclick:()=>{U.setPrefs({purchases:c(t)}),a()}},l[t].replace(/（.*）/,``))))};a(),r.push(P(`h3`,null,`プラン`),P(`p`,{class:`small muted`},`プロトタイプ用：無料・買い切り・Proの見え方を切り替えます。`),i,P(`div`,{class:`row-actions`},P(`button`,{class:`btn`,onclick:()=>Nn()},`プランを比較`),P(`button`,{class:`btn`,onclick:()=>Pn()},`購入を復元`)),P(`h3`,null,`データ`),P(`div`,{class:`row-actions`},t?P(`button`,{class:`btn`,onclick:()=>Wn()},F(`file`,16),`JSONに書き出す`):null,P(`button`,{class:`btn`,onclick:()=>qn()},`JSONを読み込む`)),P(`p`,{class:`fine`},`図面は端末内だけに保存され、外部に送信されません。JSONバックアップはスタンダード以上で使えます。`),P(`h3`,null,`広告`),P(`p`,{class:`small muted`},n(U.prefs.purchases)?`トラッキング：${U.prefs.attAsked?U.prefs.attAllowed?`許可（パーソナライズ広告）`:`許可しない（非パーソナライズ広告）`:`未確認`}`:`広告は表示されません`),P(`div`,{class:`row-actions`},P(`button`,{class:`btn small`,onclick:()=>{U.setPrefs({attAsked:!1,attAllowed:!1,furnitureTrialUntil:0}),I(`広告とトラッキングの確認をリセットしました`)}},`確認をリセット（デモ）`)),P(`p`,{class:`fine center`},`ハコマドリ プロトタイプ v0.1`)),Dn(`設定`,r)}function Wn(){if(!U.project)return;if(!a(U.prefs.purchases)){Nn(`JSONバックアップはスタンダード以上で使えます。`);return}let e=new Blob([JSON.stringify(JSON.parse(y(U.p)),null,2)],{type:`application/json`});fn(`${U.p.name.replace(/[\\/:*?"<>|]/g,`_`)}.hakomadori.json`,e).then(e=>{e===`saved`?I(`JSONを書き出しました`):e===`busy`?I(`保存の確認が開いています。先にそちらを閉じてください`):e===`unavailable`&&I(`この画面ではファイルを保存できません`)})}var Gn=()=>{},Kn=e=>Gn=e;function qn(){if(!a(U.prefs.purchases)){Nn(`JSONバックアップの読み込みはスタンダード以上で使えます。`);return}let e=P(`input`,{type:`file`,accept:`.json,application/json`});e.addEventListener(`change`,async()=>{let t=e.files?.[0];if(t)try{let e=v(await t.text());Gn(e)}catch(e){I(`読み込めませんでした：${e.message}`)}}),e.click()}function Jn(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Yn(e,t,n){let r=new Float64Array((t+1)*(n+1));for(let i=0;i<n;i++){let n=0;for(let a=0;a<t;a++)n+=e[i*t+a],r[(i+1)*(t+1)+a+1]=r[i*(t+1)+a+1]+n}return r}function Xn(e,t,n,r,i,a){let o=Math.max(0,r-a),s=Math.max(0,i-a),c=Math.min(t,r+a+1),l=Math.min(n,i+a+1);return(e[l*(t+1)+c]-e[s*(t+1)+c]-e[l*(t+1)+o]+e[s*(t+1)+o])/((c-o)*(l-s))}function Zn(e){let t=new Float64Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;let n=e.length,r=0;for(let e=0;e<256;e++)r+=e*t[e];let i=0,a=0,o=0,s=127;for(let e=0;e<256;e++){if(a+=t[e],!a)continue;let c=n-a;if(!c)break;i+=e*t[e];let l=i/a,u=(r-i)/c,d=a*c*(l-u)*(l-u);d>o&&(o=d,s=e)}return s}function Qn(e,t,n){let r=new Int32Array(t*n),i=[0],a=new Int32Array(t*n),o=0;for(let s=0;s<t*n;s++){if(!e[s]||r[s])continue;o++;let c=0;a[c++]=s,r[s]=o;let l=0;for(;c;){let i=a[--c];l++;let s=i%t,u=(i-s)/t;s>0&&e[i-1]&&!r[i-1]&&(r[i-1]=o,a[c++]=i-1),s<t-1&&e[i+1]&&!r[i+1]&&(r[i+1]=o,a[c++]=i+1),u>0&&e[i-t]&&!r[i-t]&&(r[i-t]=o,a[c++]=i-t),u<n-1&&e[i+t]&&!r[i+t]&&(r[i+t]=o,a[c++]=i+t)}i.push(l)}return{labels:r,sizes:i}}function $n(e){let{width:t,height:n,data:r}=e,i=Zn(r),a=0,o=0;for(let e=0;e<r.length;e++)r[e]<=i&&(a+=r[e],o++);let s=o?(a/o+i)/2:i,c=new Uint8Array(t*n);for(let e=0;e<t*n;e++)c[e]=r[e]>s?0:1;let l=Qn(c,t,n),u=new Set;for(let e=0;e<t;e++)u.add(l.labels[e]).add(l.labels[(n-1)*t+e]);for(let e=0;e<n;e++)u.add(l.labels[e*t]).add(l.labels[e*t+t-1]);u.delete(0);let d=new Uint8Array(t*n);for(let e=0;e<t*n;e++)d[e]=c[e]&&u.has(l.labels[e])?0:1;let{labels:f,sizes:p}=Qn(d,t,n),m=0;for(let e=1;e<p.length;e++)(m===0||p[e]>p[m])&&(m=e);if(!m||p[m]<t*n*.15||p[m]>t*n*.97)return null;let h=new Uint8Array(t*n);for(let e=0;e<t*n;e++)h[e]=+(f[e]===m);return h}function er(e,t={}){let{width:n,height:r,data:i}=e,a=Math.min(1,Math.max(0,t.sensitivity??.5)),o=Jn(t.seed??12345),s=Math.hypot(n,r),c={x:n/2,y:r/2},l=$n(e),u;if(l){let e=Yn(l,n,r),t=Math.max(2,Math.round(Math.min(n,r)*.015));u=new Uint8Array(n*r);for(let i=0;i<r;i++)for(let a=0;a<n;a++)u[i*n+a]=+(Xn(e,n,r,a,i,t)>.999)}else u=new Uint8Array(n*r).fill(1);let d=Yn(i,n,r),f=Math.max(4,Math.round(Math.min(n,r)/70)),p=38-22*a,m=.72+.12*a,h=new Uint8Array(n*r);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let a=e*n+t;if(!u[a])continue;let o=Xn(d,n,r,t,e,f);o-i[a]>p&&i[a]<o*m&&(h[a]=1)}let{labels:g,sizes:_}=Qn(h,n,r),v=Math.max(12,Math.round(s*.02)),y=[],b=[],x=new Map;for(let e=0;e<n*r;e++){let t=g[e];if(!t||_[t]<v)continue;let r=e%n,i=(e-r)/n,a=x.get(t);a?(r<a[0]&&(a[0]=r),i<a[1]&&(a[1]=i),r>a[2]&&(a[2]=r),i>a[3]&&(a[3]=i)):x.set(t,[r,i,r,i])}let S=new Set;for(let[e,t]of x)Math.hypot(t[2]-t[0],t[3]-t[1])>=s*.025&&S.add(e);for(let e=0;e<n*r;e++)if(S.has(g[e])){let t=e%n;y.push(t),b.push((e-t)/n)}let C=y.length>n*r*.08,w=C?[]:nr(y,b,s,o),T=0,E=0;for(let e of w){let t=Math.hypot(e.x2-e.x1,e.y2-e.y1),n=Math.atan2(e.y2-e.y1,e.x2-e.x1);T+=t*Math.cos(4*n),E+=t*Math.sin(4*n)}let D=w.length?Math.atan2(E,T)/4:0,O=D*180/Math.PI,k=e=>tr(e,c,-D),A=0,j=[];for(let e of w){let t=k({x:e.x1,y:e.y1}),n=k({x:e.x2,y:e.y2}),r=Math.atan2(n.y-t.y,n.x-t.x)*180/Math.PI;r=(r%180+180)%180,r<22||r>158?j.push({o:`h`,pos:(t.y+n.y)/2,a:Math.min(t.x,n.x),b:Math.max(t.x,n.x)}):Math.abs(r-90)<22?j.push({o:`v`,pos:(t.x+n.x)/2,a:Math.min(t.y,n.y),b:Math.max(t.y,n.y)}):A++}let M=rr(j)||s*.5;return j=or(j,M*.03,M*.06),j=j.filter(e=>e.b-e.a>=M*.04),j=ar(j,M*.045),sr(j,M*.08,M*.13),j=or(j,M*.02,0),sr(j,M*.08,M*.13),{width:n,height:r,angle:O,center:c,segments:w,lines:j,dropped:A,paperFound:!!l,tooMuchInk:C}}function tr(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=e.x-t.x,o=e.y-t.y;return{x:t.x+a*r-o*i,y:t.y+a*i+o*r}}function nr(e,t,n,r){let i=e.length,a=[];if(i<20)return a;let o=Math.max(2,n*.006),s=n*.03,c=n*.035,l=n*.06,u=new Uint8Array(i).fill(1),d=i,f=3e3,p=Date.now(),m=(e,t)=>e*100003+t;for(let h=0;h<80&&d>Math.max(30,i*.02)&&!(Date.now()-p>2e3);h++){let p=[],h=new Map;for(let n=0;n<i;n++){if(!u[n])continue;p.push(n);let r=m(Math.floor(e[n]/l),Math.floor(t[n]/l)),i=h.get(r);i||h.set(r,i=[]),i.push(n)}let g=p;if(p.length>f){g=p.slice();for(let e=0;e<f;e++){let t=e+Math.floor(r()*(g.length-e));[g[e],g[t]]=[g[t],g[e]]}g.length=f}let _=p.length/g.length,v=0,y=null;for(let i=0;i<250;i++){let i=p[Math.floor(r()*p.length)],a=Math.floor(e[i]/l)+Math.floor(r()*5)-2,s=Math.floor(t[i]/l)+Math.floor(r()*5)-2,c=h.get(m(a,s));if(!c||!c.length)continue;let u=c[Math.floor(r()*c.length)],d=e[u]-e[i],f=t[u]-t[i],_=Math.hypot(d,f);if(_<n*.02)continue;let b=-f/_,x=d/_,S=-(b*e[i]+x*t[i]),C=0;for(let n of g)Math.abs(b*e[n]+x*t[n]+S)<=o&&C++;C>v&&(v=C,y={nx:b,ny:x,c:S})}if(!y||v*_<c*.6)break;let b=p.filter(n=>Math.abs(y.nx*e[n]+y.ny*t[n]+y.c)<=o),x=0,S=0;for(let n of b)x+=e[n],S+=t[n];x/=b.length,S/=b.length;let C=0,w=0,T=0;for(let n of b){let r=e[n]-x,i=t[n]-S;C+=r*r,w+=r*i,T+=i*i}let E=.5*Math.atan2(2*w,C-T),D=Math.cos(E),O=Math.sin(E);b=p.filter(n=>Math.abs(-O*(e[n]-x)+D*(t[n]-S))<=o*1.2);let k=b.map(n=>({i:n,t:D*(e[n]-x)+O*(t[n]-S)})).sort((e,t)=>e.t-t.t),A=0;for(let e=1;e<=k.length;e++)if(e===k.length||k[e].t-k[e-1].t>s){let t=k[A].t,n=k[e-1].t,r=e-A;n-t>=c&&r>=(n-t)*.5&&a.push({x1:x+D*t,y1:S+O*t,x2:x+D*n,y2:S+O*n}),A=e}for(let{i:e}of k)u[e]=0,d--}return a}function rr(e){if(!e.length)return 0;let t=ir(e);return Math.max(t.maxX-t.minX,t.maxY-t.minY)}function ir(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)a.o===`h`?(t=Math.min(t,a.a),r=Math.max(r,a.b),n=Math.min(n,a.pos),i=Math.max(i,a.pos)):(n=Math.min(n,a.a),i=Math.max(i,a.b),t=Math.min(t,a.pos),r=Math.max(r,a.pos));return{minX:t,minY:n,maxX:r,maxY:i}}function ar(e,t){let n=e.map(e=>({...e})),r=!0;for(;r;){r=!1;outer:for(let e=0;e<n.length;e++)for(let i=e+1;i<n.length;i++){let a=n[e],o=n[i];if(!(a.o!==o.o||Math.abs(a.pos-o.pos)>t)&&!(Math.min(a.b,o.b)-Math.max(a.a,o.a)<.75*Math.max(a.b-a.a,o.b-o.a))){n[e]={o:a.o,pos:(a.pos+o.pos)/2,a:Math.min(a.a,o.a),b:Math.max(a.b,o.b)},n.splice(i,1),r=!0;break outer}}}return n}function or(e,t,n){let r=e.map(e=>({...e})),i=!0;for(;i;){i=!1;outer:for(let e=0;e<r.length;e++)for(let a=e+1;a<r.length;a++){let o=r[e],s=r[a];if(o.o!==s.o||Math.abs(o.pos-s.pos)>t||Math.max(o.a,s.a)-Math.min(o.b,s.b)>n)continue;let c=Math.max(1,o.b-o.a),l=Math.max(1,s.b-s.a);r[e]={o:o.o,pos:(o.pos*c+s.pos*l)/(c+l),a:Math.min(o.a,s.a),b:Math.max(o.b,s.b)},r.splice(a,1),i=!0;break outer}}return r}function sr(e,t,n){for(let r=0;r<2;r++)for(let r of e){for(let i of[`a`,`b`]){let a=r[i],o=null,s=1/0;for(let i of e){if(i===r||i.o===r.o)continue;let e=Math.abs(i.pos-a);if(e>t)continue;let c=r.pos<i.a?i.a-r.pos:r.pos>i.b?r.pos-i.b:0;if(c>n)continue;let l=e+c*.5;l<s&&(s=l,o=i)}o&&(r[i]=o.pos,o.a=Math.min(o.a,r.pos),o.b=Math.max(o.b,r.pos))}r.a>r.b&&([r.a,r.b]=[r.b,r.a])}}function cr(e,t){let n=e.lines,r={walls:[],boxes:[],sizeMm:{w:0,h:0},transform:{tx:0,ty:0,rotDeg:-e.angle,mmPerPx:1,cx:e.center.x,cy:e.center.y},boxLines:[],openings:[]};if(!n.length)return r;let i=ir(n),a=Math.max(i.maxX-i.minX,i.maxY-i.minY,1),o=t.longSideMm/a,s=e=>t.snapMm>0?Math.round(e/t.snapMm)*t.snapMm:Math.round(e),c=t.boxesAsFurniture?ur(n):[],l=new Set(c.flat()),u=c.map(e=>{let t=ir(e),n=(t.maxX-t.minX)*o,r=(t.maxY-t.minY)*o;return{x:Math.round(((t.minX+t.maxX)/2-i.minX)*o/10)*10,y:Math.round(((t.minY+t.maxY)/2-i.minY)*o/10)*10,w:Math.max(100,Math.round(n/10)*10),d:Math.max(100,Math.round(r/10)*10)}}),d=[];for(let e of n){if(l.has(e))continue;let t=e.o===`h`?i.minX:i.minY,n=e.o===`h`?i.minY:i.minX,r=s((e.a-t)*o),a=s((e.b-t)*o);a-r<1||d.push({o:e.o,pos:s((e.pos-n)*o),a:r,b:a})}d=or(d,.5,0);let f=lr(d);return d=f.lines,{walls:d.map(e=>e.o===`h`?{x1:e.a,y1:e.pos,x2:e.b,y2:e.pos}:{x1:e.pos,y1:e.a,x2:e.pos,y2:e.b}),boxes:u,sizeMm:{w:Math.round((i.maxX-i.minX)*o),h:Math.round((i.maxY-i.minY)*o)},transform:{tx:o*(e.center.x-i.minX),ty:o*(e.center.y-i.minY),rotDeg:-e.angle,mmPerPx:o,cx:e.center.x,cy:e.center.y},boxLines:c.flat(),openings:f.openings}}function lr(e){let t=e.map(e=>({...e})),n=(e,n)=>!t.some(t=>t.o!==e.o&&Math.abs(t.pos-n)<1&&e.pos>=t.a-1&&e.pos<=t.b+1),r=[],i=!0;for(;i;){i=!1;outer:for(let e=0;e<t.length;e++)for(let a=0;a<t.length;a++){let o=t[e],s=t[a];if(e===a||o.o!==s.o||Math.abs(o.pos-s.pos)>.5||s.a<o.b)continue;let c=s.a-o.b;if(c<600||c>2e3||!n(o,o.b)||!n(s,s.a)||t.some(e=>e.o!==o.o&&e.pos>o.b&&e.pos<s.a&&o.pos>=e.a-1&&o.pos<=e.b+1))continue;let l={o:o.o,pos:o.pos,a:o.a,b:s.b};for(let e of r)(e.line===o||e.line===s)&&(e.line=l);r.push({line:l,center:(o.b+s.a)/2,gap:c}),t.splice(Math.max(e,a),1),t.splice(Math.min(e,a),1,l),i=!0;break outer}}return{lines:t,openings:r.map(e=>({wall:t.indexOf(e.line),t:e.center-e.line.a,w:e.gap>1e3?e.gap-60:Math.max(600,e.gap-60),kind:e.gap>1e3?`sliding`:`door`})).filter(e=>e.wall>=0)}}function ur(e){let t=1.5,n=e.length,r=e.map((e,t)=>t),i=e=>r[e]===e?e:r[e]=i(r[e]),a=(e,n)=>n.pos>=e.a-t&&n.pos<=e.b+t&&e.pos>=n.a-t&&e.pos<=n.b+t;for(let o=0;o<n;o++)for(let s=o+1;s<n;s++){let n=e[o],c=e[s];(n.o===c.o?Math.abs(n.pos-c.pos)<t&&Math.max(n.a,c.a)<=Math.min(n.b,c.b)+t:n.o===`h`?a(n,c):a(c,n))&&(r[i(o)]=i(s))}let o=new Map;e.forEach((e,t)=>{let n=i(t);o.has(n)||o.set(n,[]),o.get(n).push(e)});let s=[...o.values()],c=[];for(let e of s){let t=e.filter(e=>e.o===`h`).sort((e,t)=>e.pos-t.pos),n=e.filter(e=>e.o===`v`).sort((e,t)=>e.pos-t.pos);if(t.length<2||n.length<2)continue;let r=ir(e),i=r.maxX-r.minX,a=r.maxY-r.minY,o=e=>e.b-e.a;o(t[0])<i*.85||o(t[t.length-1])<i*.85||o(n[0])<a*.85||o(n[n.length-1])<a*.85||s.some(t=>{if(t===e)return!1;let n=ir(t);return n.minX<r.minX&&n.maxX>r.maxX&&n.minY<r.minY&&n.maxY>r.maxY})&&c.push(e)}return c}function dr(e,t,n){let r=new Uint8Array(t*n);for(let t=0,n=0;t<r.length;t++,n+=4)r[t]=Math.max(e[n],e[n+1],e[n+2]);return{width:t,height:n,data:r}}var fr=1e3,pr=[2730,3640,4550,5460,7280,9100],mr=[{v:.2,label:`控えめ`},{v:.5,label:`標準`},{v:.8,label:`強め`}];async function hr(e){let t=URL.createObjectURL(e);try{let e=new Image;await new Promise((n,r)=>{e.onload=()=>n(),e.onerror=()=>r(Error(`画像を読み込めません`)),e.src=t});let n=Math.min(1,fr/Math.max(e.naturalWidth,e.naturalHeight)),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(e.naturalWidth*n)),r.height=Math.max(1,Math.round(e.naturalHeight*n));let i=r.getContext(`2d`,{willReadFrequently:!0});return i.drawImage(e,0,0,r.width,r.height),{canvas:r,gray:dr(i.getImageData(0,0,r.width,r.height).data,r.width,r.height)}}finally{URL.revokeObjectURL(t)}}function gr(e={}){if(!U.project)return;let t=U.project,n=!1,r=0,i=U.p.settings,a=R(i.grid),o=U.p.walls.length>0||U.p.furniture.length>0,s={longSideMm:5460,snapMm:a/2,sensitivity:.5,boxesAsFurniture:!0,keepUnderlay:!0,mode:o?`add`:`replace`},c=null,l=null,u=null,d=P(`input`,{type:`file`,accept:`image/*`,class:`visually-hidden`,id:`sketch-file`}),f=P(`label`,{class:`sketch-pick`,for:`sketch-file`},F(`image`,28),P(`strong`,null,`写真を選ぶ`),P(`span`,{class:`small muted`},`カメラで撮る・ライブラリから選ぶ・ここにドロップ`)),h=P(`canvas`,{class:`sketch-photo`,"aria-label":`読み取った線を重ねた写真`}),g=P(`img`,{class:`sketch-plan`,alt:`取り込み後の図面のプレビュー`}),_=P(`div`,{class:`sketch-summary`,role:`status`}),v=P(`div`,{class:`sketch-controls`}),y=P(`button`,{class:`btn primary`,disabled:!0,onclick:()=>M()},`図面に取り込む`),b=P(`div`,{class:`sketch-body`,hidden:!0},P(`div`,{class:`sketch-previews`},P(`figure`,null,h,P(`figcaption`,null,`写真と読み取った線（赤＝壁、青＝家具）`)),P(`figure`,null,g,P(`figcaption`,null,`取り込み後の図面`))),_,v),x=Dn(`写真から読み取る（試験版）`,[P(`p`,{class:`small muted`},`手描きの間取りを撮った写真から壁を読み取ります。写真は端末の中だけで処理し、外部には送りません。紙全体が写るように、真上から明るい場所で撮るとよく読めます。`),d,f,b,U.underlay?P(`button`,{class:`link`,onclick:()=>{U.checkpoint(),U.setUnderlay(null),U.undoToast(`下絵を消しました`),x.close()}},`今の下絵を消す`):null,P(`div`,{class:`actions`},P(`button`,{class:`btn`,onclick:()=>x.close()},`キャンセル`),y)],{wide:!0,className:`sketch-modal`,onClose:()=>!n&&e.onCancel?.()}),S=async e=>{if(e){if(!e.type.startsWith(`image/`)&&!/\.(jpe?g|png|webp|gif|heic|heif)$/i.test(e.name)){I(`画像ファイルを選んでください`);return}f.classList.add(`busy`),f.querySelector(`strong`).textContent=`読み取り中…`;try{c=await hr(e),b.hidden=!1,f.classList.add(`compact`),C()}catch{I(`この画像は読み込めませんでした。JPEGかPNGの写真で試してください`)}finally{f.classList.remove(`busy`),f.querySelector(`strong`).textContent=c?`別の写真を選ぶ`:`写真を選ぶ`}}};d.addEventListener(`change`,()=>void S(d.files?.[0])),f.addEventListener(`dragover`,e=>{e.preventDefault(),f.classList.add(`over`)}),f.addEventListener(`dragleave`,()=>f.classList.remove(`over`)),f.addEventListener(`drop`,e=>{e.preventDefault(),f.classList.remove(`over`),S(e.dataTransfer?.files?.[0])});let C=()=>{c&&(l=er(c.gray,{sensitivity:s.sensitivity}),w())},w=()=>{if(!c||!l)return;u=cr(l,s),T();let e=E(),t=ee(e.walls,[]),n=t.reduce((e,t)=>e+ne(t.areaMm2),0);g.src=st(e,t,480,360,{dpr:2,margin:20,grid:!0}).toDataURL(`image/png`);let r=!u.walls.length&&!u.boxes.length;_.replaceChildren(r?P(`span`,{class:`warn`},l.tooMuchInk?`模様や影が多く、線を見分けられませんでした。白い紙に描いた図面を、紙だけが写るように撮り直してください。下絵として置いて、上からなぞることもできます。`:`線を読み取れませんでした。明るい場所で紙全体が写るように撮り直すか、感度を「強め」にしてください。下絵として置いて、上からなぞることもできます。`):P(`span`,null,P(`strong`,null,`壁 ${u.walls.length}本・部屋 ${t.length}`),t.length?`（合計 ${n.toFixed(2)}㎡・${re(n*1e6,i).toFixed(1)}帖）`:``,u.boxes.length?`・家具 ${u.boxes.length}`:``,u.openings.length?`・ドア ${u.openings.length}`:``,`・全体 ${u.sizeMm.w}×${u.sizeMm.h}mm`,l.dropped?`・斜めの線 ${l.dropped}本は省きました`:``)),!t.length&&!r&&_.append(P(`div`,{class:`small muted`},`閉じた部屋になっていません。取り込んだあと、下絵を見ながら壁をつなげてください。`)),y.disabled=r&&!s.keepUnderlay,y.textContent=r?`下絵だけ置く`:`図面に取り込む`,j()},T=()=>{if(!c||!l||!u)return;let e=h;e.width=c.canvas.width,e.height=c.canvas.height;let t=e.getContext(`2d`);t.drawImage(c.canvas,0,0);let n=l.angle*Math.PI/180,r=(e,t)=>{let r=e-l.center.x,i=t-l.center.y;return[l.center.x+r*Math.cos(n)-i*Math.sin(n),l.center.y+r*Math.sin(n)+i*Math.cos(n)]},i=new Set(u.boxLines);t.lineWidth=Math.max(3,e.width/160),t.lineCap=`round`;for(let e of l.lines){let[n,a]=e.o===`h`?r(e.a,e.pos):r(e.pos,e.a),[o,s]=e.o===`h`?r(e.b,e.pos):r(e.pos,e.b);t.strokeStyle=i.has(e)?`rgba(40,110,220,0.85)`:`rgba(214,64,52,0.85)`,t.beginPath(),t.moveTo(n,a),t.lineTo(o,s),t.stroke()}},E=()=>{let e=m(`preview`,i);return e.walls=D(u,0,0),e.openings=O(u,e.walls),e.furniture=k(u,0,0),e},D=(e,t,n)=>e.walls.map(e=>({id:p(`w`),x1:e.x1+t,y1:e.y1+n,x2:e.x2+t,y2:e.y2+n,d:i.wallD,z:0,h:i.wallH})),O=(e,t)=>{let n=ee(t,[]);return e.openings.filter(e=>t[e.wall]).map(e=>{let r=t[e.wall],i=Math.round(e.t),a=Math.round(e.w),o=e.kind===`door`?Ee(r,i,a,n,t):{flipSide:!1,flipHinge:!1};return{id:p(`o`),kind:e.kind,wallId:r.id,t:i,w:a,h:2e3,z:0,...o}})},k=(e,t,n)=>e.boxes.map(e=>({id:p(`f`),catalogId:`box`,x:e.x+t,y:e.y+n,z:0,w:e.w,d:e.d,h:700,rot:0})),A=(e,t,n,r=``)=>P(`div`,{class:`seg ${r}`},e.map(e=>P(`button`,{class:e.v===t?`on`:``,onclick:()=>n(e.v)},e.label))),j=()=>{let e=xn({value:s.longSideMm,id:`sketch-long`,label:`長い辺の長さ`,min:500,commit:e=>{s.longSideMm=e,w()}}),t=[P(`div`,{class:`sketch-row`},P(`label`,{class:`prop-label`,for:`sketch-long`},`図面全体の長い辺の実際の長さ（縮尺）`),P(`span`,{class:`with-unit sketch-long`},e,P(`small`,null,`mm`)),P(`div`,{class:`chips`},pr.map(e=>P(`button`,{class:`chip ${s.longSideMm===e?`on`:``}`,onclick:()=>{s.longSideMm=e,w()}},`${e}`)))),P(`div`,{class:`sketch-row two`},P(`div`,null,P(`div`,{class:`prop-label`},`吸着`),A([{v:a/2,label:`${a/2}`},{v:a,label:`${a}`},{v:0,label:`なし`}],s.snapMm,e=>(s.snapMm=e,w()))),P(`div`,null,P(`div`,{class:`prop-label`},`読み取りの感度`),A(mr,s.sensitivity,e=>{s.sensitivity=e,v.querySelectorAll(`.sens button`).forEach((t,n)=>t.classList.toggle(`on`,mr[n].v===e)),_.replaceChildren(P(`span`,null,`読み取り中…`));let t=++r;setTimeout(()=>t===r&&C(),30)},`sens`))),P(`label`,{class:`check`},P(`input`,{type:`checkbox`,checked:s.boxesAsFurniture,onchange:e=>(s.boxesAsFurniture=e.target.checked,w())}),`壁に接していない四角は家具にする`),P(`label`,{class:`check`},P(`input`,{type:`checkbox`,checked:s.keepUnderlay,onchange:e=>(s.keepUnderlay=e.target.checked,w())}),`写真を下絵として図面の下に敷く（拡大・縮小ボタンの列にある目のボタンで表示を切り替えられます）`),U.underlay&&s.keepUnderlay?P(`p`,{class:`fine`},`今の下絵は新しい写真に置き換わります（元に戻すで戻せます）。`):null,o?P(`div`,{class:`sketch-row`},P(`div`,{class:`prop-label`},`今の図面との関係`),A([{v:`add`,label:`横に追加する`},{v:`replace`,label:`置き換える`}],s.mode,e=>(s.mode=e,j()))):null];v.replaceChildren(...t.filter(e=>e!==null))},M=()=>{if(!c||!u)return;if(U.project!==t){I(`プロジェクトが切り替わったため、取り込めませんでした`),x.close();return}let e=u,r=0,i=0;if(s.mode===`add`&&o){let e=qe(U.p);e&&(r=Math.ceil((e.maxX+a*2)/a)*a,i=Math.round(e.minY/a)*a)}if(U.edit(t=>{s.mode===`replace`&&(t.walls=[],t.openings=[],t.furniture=[],t.roomTags=[]);let n=D(e,r,i);t.walls.push(...n),t.openings.push(...O(e,n)),t.furniture.push(...k(e,r,i))}),s.keepUnderlay){let t=!e.walls.length&&!e.boxes.length,n=c.canvas.width,a=c.canvas.height,o=s.longSideMm/Math.max(n,a),l=t?{tx:n/2*o,ty:a/2*o,rotDeg:0,mmPerPx:o,cx:n/2,cy:a/2}:e.transform,u={src:c.canvas.toDataURL(`image/jpeg`,.72),...l,tx:l.tx+r,ty:l.ty+i,opacity:.45,visible:!0};U.setUnderlay(u)}else s.mode===`replace`&&U.setUnderlay(null);U.select(null),U.setTool(`select`),U.emit(`refit`),U.undoToast(e.walls.length?`壁${e.walls.length}本を取り込みました。違うところは下絵を見ながら直してください`:`下絵を置きました。上から壁ツールでなぞってください`),n=!0,x.close()}}var _r=[{id:`select`,label:`選択`,icon:`select`,key:`V`},{id:`wall`,label:`壁`,icon:`wall`,key:`W`},{id:`opening`,label:`建具`,icon:`door`,key:`O`},{id:`furniture`,label:`家具`,icon:`sofa`,key:`F`}],vr=[{id:`intersection`,label:`交点`,title:`グリッドの交点に吸着（既定）`},{id:`line`,label:`線`,title:`グリッド線・壁の線に吸着。線に沿った方向は自由`},{id:`numeric`,label:`数値`,title:`長さ・向き・厚さ・高さを数値で指定`}],yr=[{id:`door`,label:`ドア`,title:`開き戸`},{id:`sliding`,label:`引違い`,title:`引違い戸（2枚の戸を左右に引く）`},{id:`singleSliding`,label:`片引き`,title:`片引き戸（1枚の戸を壁に沿って片側へ引く）`},{id:`folding`,label:`折れ戸`,title:`折れ戸（2枚折れ・4枚折れ）`},{id:`window`,label:`窓`,title:`窓（引違い）`}],br=[{v:2,label:`2枚`,title:`2枚折れ（半間の収納・浴室・トイレ）`},{v:4,label:`4枚`,title:`4枚折れ（1間の収納。左右に2枚ずつ）`}],xr=[`LDK`,`リビング`,`ダイニング`,`キッチン`,`洋室`,`和室`,`寝室`,`子ども部屋`,`書斎`,`納戸`,`WIC`,`玄関`,`廊下`,`ホール`,`トイレ`,`洗面所`,`浴室`,`パントリー`];function Sr(e,t,n,r){let i=P(`div`,{class:`steps`,role:`group`,"aria-label":`段`});for(let a=r-1;a>=0;a--){let r=!!e&&a>=e[0]&&a<=e[1];i.append(P(`button`,{class:`step ${r?`on`:``}`,title:`${a+1}段目（${a*n}〜${(a+1)*n}）`,onclick:()=>{if(!e)return t([a,a]);let[n,r]=e;a===r+1?t([n,a]):a===n-1?t([a,r]):t(a===r&&r>n?[n,r-1]:a===n&&r>n?[n+1,r]:[a,a])}},`${a+1}`))}return i}var Cr=(e,t,n)=>e%n||t%n||t<=0?null:[e/n,e/n+t/n-1],wr=()=>Math.max(3,Math.ceil(U.p.settings.ceilingH/U.p.settings.stepPitch));function Tr(e,t,n){if(!U.project)return;let r=U.p.settings,i=r.stepPitch,a=(...e)=>P(`div`,{class:`tb-group`},e),o=a(..._r.map(e=>P(`button`,{class:`tool ${U.tool===e.id?`on`:``}`,title:`${e.label}（${e.key}）`,"aria-pressed":String(U.tool===e.id),onclick:()=>{e.id===`furniture`?Bn():U.setTool(e.id)}},F(e.icon),P(`span`,null,e.label))));o.prepend(P(`button`,{class:`tool ${U.hierarchyOpen?`on`:``}`,title:`ヒエラルキー（図面の中の物の一覧）`,"aria-pressed":String(U.hierarchyOpen),onclick:()=>U.emit(`hierarchy`)},F(`layers`),P(`span`,null,`階層`))),o.append(P(`button`,{class:`tool`,title:`手描きの写真から読み取る（試験版）`,onclick:()=>gr()},F(`image`),P(`span`,null,`写真`)));let s=P(`div`,{class:`seg`,title:`入力方式`},vr.map(e=>P(`button`,{class:U.snapMode===e.id?`on`:``,title:e.title,onclick:()=>{U.snapMode=e.id,t.cancel(),U.emit(`tool`)}},e.label))),c=P(`select`,{class:`input compact`,title:`グリッド`,onchange:e=>U.edit(t=>t.settings.grid=Number(e.target.value))},d.map(e=>P(`option`,{value:String(e),selected:e===r.grid},`${e}`))),l=[];if(U.tool===`wall`){let e=t.stepZH(U.wallSteps);l.push(P(`span`,{class:`tb-label`},`段`),Sr(U.wallSteps,e=>(U.wallSteps=e,U.emit(`tool`)),i,wr()),P(`span`,{class:`tb-note`},`Z${e.z} H${e.h}`),P(`div`,{class:`chips`},Er(`全高`,()=>Dr([0,wr()-1])),Er(`腰壁`,()=>Dr([0,0])),Er(`垂れ壁`,()=>Dr([wr()-1,wr()-1]))))}else if(U.tool===`opening`){if(l.push(P(`div`,{class:`seg`},yr.map(e=>P(`button`,{class:U.openingKind===e.id?`on`:``,title:e.title,onclick:()=>{U.openingKind=e.id,U.emit(`tool`)}},e.label)))),U.openingKind===`window`)l.push(P(`span`,{class:`tb-label`},`段`),Sr(U.windowSteps,e=>(U.windowSteps=e,U.emit(`tool`)),i,wr()),P(`div`,{class:`chips`},Er(`腰窓`,()=>Or([1,1])),Er(`掃き出し`,()=>Or([0,1])),Er(`高窓`,()=>Or([2,2]))));else{U.openingKind===`folding`&&l.push(P(`div`,{class:`seg`},br.map(e=>P(`button`,{class:U.foldingLeaves===e.v?`on`:``,title:e.title,onclick:()=>{U.foldingLeaves=e.v,U.emit(`tool`)}},e.label))));let e=be(U.openingKind,r,U.foldingLeaves);l.push(P(`span`,{class:`tb-note`},`W${e.w} H${e.h}（下端0）`))}}e.replaceChildren(o,P(`div`,{class:`tb-sep`}),a(P(`span`,{class:`tb-label`},`吸着`),s),a(P(`span`,{class:`tb-label`},`グリッド`),c)),n?(n.hidden=!l.length,n.replaceChildren(...l.length?[a(...l)]:[])):l.length&&e.append(P(`div`,{class:`tb-sep`}),a(...l))}function Er(e,t){return P(`button`,{class:`chip`,onclick:t},e)}function Dr(e){U.wallSteps=e,U.emit(`tool`)}function Or(e){U.windowSteps=e,U.emit(`tool`)}function kr(e,t){let n=!!U.project&&U.tool===`wall`&&U.snapMode===`numeric`;if(e.hidden=!n,!n)return;let r=t.numeric,i=t.numericStart,a=(e,n,i=`mm`,a)=>{let s=n=>{r[e]=n,t.requestRender()};return P(`label`,{class:`nf`},P(`span`,null,n),xn({value:r[e],key:`num-${e}`,label:n,min:a,decimals:+(i===`°`),live:s,commit:s,onEnter:()=>o()}),P(`small`,null,i))},o=()=>{if(!t.numericStart)return;t.addNumericWall(),kr(e,t);let n=e.querySelector(`[data-key="num-len"]`);n&&Sn(n)},s=(n,i)=>P(`button`,{class:`icon-btn ${r.angle===n?`on`:``}`,title:`${n}°`,onclick:()=>{r.angle=n,kr(e,t),t.requestRender()}},F(i,16)),c=n=>P(`label`,{class:`nf`},P(`span`,null,n.toUpperCase()),xn({value:i?i[n]:null,placeholder:`—`,label:`始点 ${n.toUpperCase()}`,commit:r=>{t.numericStart={...t.numericStart??{x:0,y:0},[n]:r},kr(e,t),t.requestRender()}}));e.replaceChildren(P(`div`,{class:`np-title`},`数値で壁を追加`,P(`span`,{class:`small muted`},i?``:`（まず始点をタップ）`)),P(`div`,{class:`np-row`},P(`span`,{class:`np-label`},`始点`),c(`x`),c(`y`)),P(`div`,{class:`np-row`},a(`len`,`長さW`,`mm`,1),a(`angle`,`向き`,`°`)),P(`div`,{class:`np-row dirs`},s(0,`right`),s(90,`down`),s(180,`left`),s(270,`up`)),P(`div`,{class:`np-row`},a(`d`,`厚さD`,`mm`,1),a(`h`,`高さH`,`mm`,1),a(`z`,`下端Z`,`mm`,0)),P(`div`,{class:`np-row`},P(`button`,{class:`btn primary`,disabled:!i,onclick:o},`追加（Enter）`),P(`button`,{class:`btn`,onclick:()=>t.cancel()},`終了`)))}function Ar(e,t){if(!U.project)return;let n=document.activeElement,r=n&&e.contains(n)?n.dataset.key:void 0,i=U.selection,a=U.p,o=a.settings.stepPitch,s=[];if(i?.type===`wall`){let n=a.walls.find(e=>e.id===i.id);if(n){let r=Math.round(L(n)),i=z(n),c=e=>e===1?{x:n.x1,y:n.y1}:{x:n.x2,y:n.y2},l=c(i.first),u=c(i.second),[d,f]=i.labels,p=i.horizontal?`x`:`y`,m=i.horizontal?`y`:`x`,h=p.toUpperCase(),g=m.toUpperCase(),_=Math.round((Math.atan2(u.y-l.y,u.x-l.x)*180/Math.PI%360+360)%360*10)/10,v=e=>U.edit(()=>e()),y=(r,i,o)=>{let s={...c(r),[i]:o},l=c(r===1?2:1);if(Math.hypot(s.x-l.x,s.y-l.y)<1)return I(`両端が同じ位置になるため、動かせません`),Ar(e,t);x(()=>Ne(a,n.id,r,s))},b=e=>{let t=e-l[m];t&&x(()=>Pe(a,n.id,m===`x`?t:0,m===`y`?t:0))},x=r=>{if(n.locked){I(`この壁はロックされています（ヒエラルキーで外せます）`),Ar(e,t);return}let i=0;v(()=>i=r()),i&&I(`ロックした壁は動かさず、つながりを切りました`)};s=[Ir(`壁`,n.locked?`${r}mm・ロック中`:`${r}mm`),Lr(Rr(`${d} ${h}`,l[p],e=>y(i.first,p,e),`wa${p}`),Rr(`${f} ${h}`,u[p],e=>y(i.second,p,e),`wb${p}`),Rr(l[m]===u[m]?`${g}（壁の位置）`:`${g}（${d}。壁ごと動く）`,l[m],b,`wpos`),Rr(`長さ W（${d}を固定）`,r,e=>x(()=>Fe(a,n.id,e,i.first)),`ww`,`mm`,1),Rr(`向き（${d}から）`,_,e=>x(()=>Ie(a,n.id,e,i.first)),`wa`,`°`),Rr(`厚さ D`,n.d,e=>v(()=>n.d=e),`wd`,`mm`,1),Rr(`下端 Z`,n.z,e=>v(()=>n.z=e),`wz`,`mm`,0),Rr(`高さ H`,n.h,e=>v(()=>n.h=e),`wh`,`mm`,1)),P(`div`,{class:`prop-row`},P(`span`,{class:`prop-label`},`段（${o}ピッチ）`),Sr(Cr(n.z,n.h,o),e=>v(()=>(n.z=e[0]*o,n.h=(e[1]-e[0]+1)*o)),o,wr()),P(`div`,{class:`stack`},zr(`下端`,()=>v(()=>n.z=Math.max(0,n.z-o)),()=>v(()=>n.z+=o)),zr(`高さ`,()=>n.h>o&&v(()=>n.h-=o),()=>v(()=>n.h+=o)))),...n.locked?[]:[Fr([{type:`wall`,id:n.id}])],P(`p`,{class:`fine`},n.locked?`ロック中は図面で選んだり動かしたりできません。ヒエラルキーの鍵で外せます。`:`${d}・${f}の${h}を変えると、その端だけが動きます（端点の丸のドラッグと同じ）。${g}（壁の位置）を変えるか「移動」に動かす量を入れると、壁ごと動きます。つながった壁も一緒に動きます（ロックした壁は動かず、つながりが切れます）。`),P(`div`,{class:`prop-actions`},P(`button`,{class:`btn`,title:`この壁の表と裏を入れ替えます。ドアの開く側・吊元、引き戸の向き、長さの数字の位置が反対になります（座標や長さは変わりません）`,onclick:()=>{let e=a.openings.filter(e=>e.wallId===n.id).length;v(()=>{let e=L(n);Object.assign(n,{x1:n.x2,y1:n.y2,x2:n.x1,y2:n.y1});for(let t of a.openings)t.wallId===n.id&&(t.t=Math.round(e-t.t))}),I(e?`この壁の建具${e}か所の向きと、長さの数字の位置を反対にしました`:`長さの数字の位置を反対にしました`)}},F(`flip`,16),`表裏を反転`),Br())]}}else if(i?.type===`opening`){let e=a.openings.find(e=>e.id===i.id),t=e&&a.walls.find(t=>t.id===e.wallId);if(e&&t){let n=e=>U.edit(()=>{e(),Re(a)});s=[Ir(e.kind===`folding`?`折れ戸（${e.leaves===4?4:2}枚）`:yr.find(t=>t.id===e.kind).label,(e.kind===`door`||e.kind===`folding`)&&Yt(e,t).now?`W${e.w}・${Yt(e,t).now}`:`W${e.w}`),P(`div`,{class:`seg`},yr.map(r=>P(`button`,{class:e.kind===r.id?`on`:``,onclick:()=>e.kind!==r.id&&n(()=>{let n=e.kind,i=e.leaves??U.foldingLeaves,o=be(r.id,a.settings,i);Object.assign(e,{kind:r.id,w:Math.min(o.w,Math.floor(L(t))),h:o.h,z:o.z}),r.id===`folding`?e.leaves=i:delete e.leaves;let s=e=>e===`door`||e===`folding`;s(r.id)&&!s(n)&&(Re(a),Object.assign(e,Ee(t,e.t,e.w,U.rooms,a.walls))),r.id===`singleSliding`&&(Re(a),Object.assign(e,De(t,e.t,e.w,U.rooms,a.walls,a.openings.filter(n=>n.wallId===t.id&&n.id!==e.id)))),e.kind===`folding`&&e.leaves===4&&(e.flipHinge=!1)})},r.label))),...e.kind===`folding`?[P(`div`,{class:`seg`},br.map(r=>P(`button`,{class:(e.leaves??2)===r.v?`on`:``,title:r.title,onclick:()=>(e.leaves??2)!==r.v&&n(()=>{e.leaves=r.v,U.foldingLeaves=r.v,e.w=Math.min(be(`folding`,a.settings,r.v).w,Math.floor(L(t))),r.v===4&&(e.flipHinge=!1)})},`${r.label}折れ`)))]:[],Lr(Rr(`位置（${z(t).labels[0]}から中心）`,z(t).first===1?e.t:L(t)-e.t,r=>n(()=>e.t=Math.round(Ce(t,z(t).first===1?r:L(t)-r,e.w))),`ot`),Rr(`幅 W`,e.w,t=>n(()=>e.w=t),`ow`,`mm`,1),Rr(`下端 Z`,e.z,t=>n(()=>e.z=t),`oz`,`mm`,0),Rr(`高さ H`,e.h,t=>n(()=>e.h=t),`oh`,`mm`,1)),e.kind===`window`?P(`div`,{class:`prop-row`},P(`span`,{class:`prop-label`},`段（${o}ピッチ）`),Sr(Cr(e.z,e.h,o),t=>n(()=>(e.z=t[0]*o,e.h=(t[1]-t[0]+1)*o)),o,wr())):P(`p`,{class:`fine`},`高さ2000は800刻みに乗らないため、数値で扱います（要件の未決事項）。`),P(`div`,{class:`prop-actions`},e.kind===`door`||e.kind===`folding`?P(`button`,{class:`btn`,title:`X`,onclick:()=>Kt(e.id,`side`)},F(`swapSide`,16),Yt(e,t).flip):null,e.kind===`door`||e.kind===`folding`&&e.leaves!==4?P(`button`,{class:`btn`,title:`H`,onclick:()=>Kt(e.id,`hinge`)},F(`flip`,16),`吊元を入れ替え`):null,e.kind===`sliding`?P(`button`,{class:`btn`,title:`X`,onclick:()=>Kt(e.id,`side`)},F(`swapSide`,16),`戸の前後を入れ替え`):null,e.kind===`singleSliding`?P(`button`,{class:`btn`,title:`X`,onclick:()=>Kt(e.id,`side`)},F(`swapSide`,16),`戸を付ける面を入れ替え`):null,e.kind===`singleSliding`?P(`button`,{class:`btn`,title:`H`,onclick:()=>Kt(e.id,`hinge`)},F(`flip`,16),`引く向きを入れ替え`):null,xe(e)?P(`button`,{class:`btn`,title:`3Dで見たときの開け閉め（3Dで建具をもう一度タップしても切り替わります）`,onclick:()=>U.toggleOpen(e.id)},F(`cube`,16),Se(e)?`3Dで閉める`:`3Dで開ける`):null,Br())]}}else if(i?.type===`furniture`){let e=a.furniture.find(e=>e.id===i.id);if(e){let t=pe(e.catalogId),n=e=>U.edit(()=>e());s=[Ir(t?.name??`家具`,t?.category??``),Lr(Rr(`X（中心）`,e.x,t=>n(()=>e.x=t),`fx`),Rr(`Y（中心）`,e.y,t=>n(()=>e.y=t),`fy`),Rr(`下端 Z`,e.z,t=>n(()=>e.z=t),`fz`,`mm`,0),Rr(`回転`,e.rot,t=>n(()=>e.rot=(t%360+360)%360),`fr`,`°`),Rr(`幅 W`,e.w,t=>n(()=>e.w=t),`fw`,`mm`,1),Rr(`奥行 D`,e.d,t=>n(()=>e.d=t),`fd`,`mm`,1),Rr(`高さ H`,e.h,t=>n(()=>e.h=t),`fh`,`mm`,1)),...e.locked?[]:[Fr([{type:`furniture`,id:e.id}])],P(`div`,{class:`prop-actions`},P(`button`,{class:`btn`,title:`R`,onclick:()=>n(()=>e.rot=(e.rot+90)%360)},F(`rotate`,16),`90°回転`),P(`button`,{class:`btn`,onclick:()=>U.duplicateFurniture(e.id)},F(`copy`,16),`複製`),t?P(`button`,{class:`btn`,onclick:()=>n(()=>Object.assign(e,{w:t.w,d:t.d,h:t.h}))},`寸法を戻す`):null,Br())]}}else if(i?.type===`room`){let e=oe(U.rooms,i);if(e){let t=P(`input`,{class:`input`,value:e.tag?.name??``,placeholder:`部屋名（例：LDK）`,list:`room-names`,"data-key":`rname`,maxlength:20,onchange:e=>U.rename({type:`room`,x:i.x,y:i.y},e.target.value)});s=[Ir(`部屋`,e.tag?.name||`名前なし`),P(`label`,{class:`prop-field wide`},P(`span`,null,`部屋名`),t),P(`datalist`,{id:`room-names`},xr.map(e=>P(`option`,{value:e}))),P(`div`,{class:`area-card`},P(`div`,null,P(`div`,{class:`area-big`},ae(e.areaMm2,a.settings)),P(`div`,{class:`small muted`},`帖`)),P(`div`,null,P(`div`,{class:`area-big`},ie(e.areaMm2)),P(`div`,{class:`small muted`},`壁芯面積`))),P(`p`,{class:`fine`},`帖＝㎡÷${a.settings.jouFactor}（${a.settings.jouRounding===`floor`?`切り捨て`:`四捨五入`}）。天井高 ${a.settings.ceilingH}mm。名前は部屋の中の点に紐付くので、壁を動かしても残ります。`)]}}if(U.multi&&(s=Mr()),s.length||(s=jr(t)),e.replaceChildren(...s),r){let t=e.querySelector(`[data-key="${r}"]`);t&&n instanceof HTMLInputElement&&(t.inputMode=n.inputMode),t?.focus(),t?.select?.()}}function jr(e){let t=U.p,n=[...U.rooms].sort((e,t)=>t.areaMm2-e.areaMm2),r=U.totalArea();return[Ir(`間取りの概要`,``),P(`div`,{class:`area-card`},P(`div`,null,P(`div`,{class:`area-big`},`${r.toFixed(2)}㎡`),P(`div`,{class:`small muted`},`合計（壁芯）`)),P(`div`,null,P(`div`,{class:`area-big`},`${re(r*1e6,t.settings).toFixed(1)}帖`),P(`div`,{class:`small muted`},`${n.length}部屋`))),n.length?P(`ul`,{class:`room-list`},n.map(e=>P(`li`,null,P(`button`,{onclick:()=>U.select({type:`room`,x:Math.round(e.centroid.x),y:Math.round(e.centroid.y)})},P(`span`,null,e.tag?.name||`名前なし`),P(`span`,{class:`muted`},`${ne(e.areaMm2).toFixed(2)}㎡・${ae(e.areaMm2,t.settings)}`))))):P(`p`,{class:`muted small`},`壁で囲むと部屋として認識され、面積と帖数が表示されます。`),P(`div`,{class:`small muted`},`壁 ${t.walls.length}・建具 ${t.openings.length}・家具 ${t.furniture.length}`),P(`div`,{class:`howto`},P(`div`,{class:`howto-title`},`使い方`),P(`ol`,null,P(`li`,null,`「壁」でグリッドをタップして壁を描く。始点に戻ると部屋が閉じます`),P(`li`,null,`「建具」で壁をタップしてドア・引戸・折れ戸・窓を付ける`),P(`li`,null,`「家具」でカタログから選んで置く`),P(`li`,null,`選んだものは、ここで数値（X・Y・Z、W・D・H）を直せます`)),P(`button`,{class:`btn small`,onclick:()=>e.fit()},F(`fit`,14),`全体を表示`))]}function Mr(){let e=U.p,t=U.selectedRefs(),n=e=>t.filter(t=>t.type===e).length,r=[[`壁`,n(`wall`)],[`建具`,n(`opening`)],[`家具`,n(`furniture`)]].filter(([,e])=>e).map(([e,t])=>`${e} ${t}`).join(`・`),i=t.map(t=>Gt(e,t)).filter(e=>!!e),a=i.every(e=>e.hidden),o=i.every(e=>e.locked),s=t.filter(e=>e.type===`furniture`).map(e=>e.id),c=(e,t,n,r=`btn`)=>P(`button`,{class:r,onclick:n},F(t,16),e);return[Ir(`${t.length}件を選択中`,r),P(`p`,{class:`fine`},U.multiMode?`選択モード中は、図面をタップすると選択に足す・外すことができます。選んだ物をドラッグすると、まとめて動かせます（空いた所のドラッグは画面の移動）。`:`図面で選んだ物をドラッグすると、まとめて動かせます。PC は Shift/Ctrl+クリックで足す・外す、Shift+ドラッグで範囲選択。iPhone はヒエラルキーの「選択」から。`),Fr(t),P(`div`,{class:`prop-actions`},c(a?`表示する`:`隠す`,a?`eye`:`eyeOff`,()=>U.setFlags(t,{hidden:!a})),c(o?`ロックを外す`:`ロックする`,o?`unlock`:`lock`,()=>U.setFlags(t,{locked:!o})),s.length?c(`家具を90°回転`,`rotate`,()=>U.rotateFurnitureMany(s)):null,s.length?c(`家具を複製`,`copy`,()=>U.duplicateFurnitureMany(s)):null,c(`選択を解除`,`close`,()=>U.select(null)),c(`まとめて削除`,`trash`,()=>U.deleteSelection(),`btn danger`))]}var Nr={dx:0,dy:0};function Pr(e){let t=U.p;if(e.type===`wall`)return!!t.walls.find(t=>t.id===e.id&&!t.locked);if(e.type===`furniture`)return!!t.furniture.find(t=>t.id===e.id&&!t.locked);let n=t.openings.find(t=>t.id===e.id);return!!n&&!n.locked&&!t.walls.find(e=>e.id===n.wallId)?.locked}function Fr(e){let t=()=>{let{dx:t,dy:n}=Nr;if(!t&&!n)return I(`動かす量（ΔX・ΔY）を入れてください`);if(!e.some(Pr))return I(`ロックされているため動かせません`);let r=U.snapshot(),i=Le(U.p,e,t,n);if(U.snapshot().s===r.s)return I(`動かせる物がありません（建具は壁に沿う向きにだけ動きます）`);U.history.record(r),U.changed();let a=[t?`X ${t>0?`+`:``}${t}`:``,n?`Y ${n>0?`+`:``}${n}`:``].filter(Boolean).join(`・`),o=[i.locked?`ロックした${i.locked}件は動かしていません`:``,i.stuck?`建具${i.stuck}件は壁に沿う向きにしか動かないため、そのままです`:``,i.cut?`ロックした壁とのつながりを切りました`:``].filter(Boolean).join(`。`);I(`${e.length>1?`${i.moved}件を`:``}${a}mm 動かしました${o?`。${o}`:``}`)},n=(e,n)=>{let r=e=>Nr[n]=e;return P(`label`,{class:`prop-field`},P(`span`,null,e),P(`span`,{class:`with-unit`},xn({value:Nr[n],key:`move-${n}`,label:e,live:r,commit:r,onEnter:t}),P(`small`,null,`mm`)))};return P(`div`,{class:`move-box`},P(`div`,{class:`move-title`},P(`span`,{class:`prop-label`},e.length>1?`まとめて移動`:`移動`),P(`span`,{class:`muted small`},`右・下が＋`)),P(`div`,{class:`move-row`},n(`ΔX`,`dx`),n(`ΔY`,`dy`),P(`button`,{class:`btn primary`,onclick:t},`動かす`)))}function Ir(e,t){return P(`div`,{class:`prop-head`},P(`h3`,null,e),t?P(`span`,{class:`muted small`},t):null)}function Lr(...e){return P(`div`,{class:`prop-grid`},e)}function Rr(e,t,n,r,i=`mm`,a){return P(`label`,{class:`prop-field`},P(`span`,null,e),P(`span`,{class:`with-unit`},xn({value:t,commit:n,key:r,label:e,min:a,decimals:+(i===`°`)}),P(`small`,null,i)))}function zr(e,t,n){return P(`div`,{class:`step-btns`},P(`span`,null,e),P(`button`,{class:`icon-btn`,title:`${e}を1段下げる`,onclick:t},F(`minus`,14)),P(`button`,{class:`icon-btn`,title:`${e}を1段上げる`,onclick:n},F(`plus`,14)))}function Br(){return P(`button`,{class:`btn danger`,onclick:()=>U.deleteSelection()},F(`trash`,16),`削除`)}function Vr(e,t){let i=Nt(),o=r(U.prefs.purchases),s=i.length<o,c=e=>{if(!s){Nn(`無料版で作れるプロジェクトは${o}件までです。`);return}let n=e();n&&(Ft(n),t(n))},l=()=>{if(!s){Nn(`無料版で作れるプロジェクトは${o}件までです。`);return}let e=910,t=P(`input`,{class:`input`,value:`新しい間取り`,maxlength:40}),n=P(`div`,{class:`grid-choice`},d.map(t=>P(`button`,{class:`grid-opt ${t===e?`on`:``}`,onclick:r=>{e=t,n.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e===r.currentTarget))}},P(`strong`,null,`${t}`),P(`span`,null,Tn[t].replace(/^\d+mm/,``))))),r=Dn(`新しいプロジェクト`,[P(`label`,{class:`prop-field wide`},P(`span`,null,`名前`),t),P(`div`,{class:`prop-label`},`グリッド（あとから変更できます）`),n,P(`button`,{class:`btn block`,onclick:()=>{r.close();let n=t.value.trim();if(c(()=>m(n&&n!==`新しい間取り`?n:`写真から読み取り`,{grid:e})),!U.project)return;let i=U.project.id;gr({onCancel:()=>{let e=U.project;!e||e.id!==i||e.walls.length||e.furniture.length||U.underlay||(U.close(),It(i),U.emit(`home`))}})}},F(`image`,16),`手描きの写真から作る（試験版）`),P(`div`,{class:`actions`},P(`button`,{class:`btn`,onclick:()=>{r.close(),c(()=>x())}},`サンプルから始める`),P(`button`,{class:`btn primary`,onclick:()=>{r.close(),c(()=>m(t.value.trim()||`新しい間取り`,{grid:e}))}},`作成`))]);setTimeout(()=>t.select(),30)},u=e=>P(`div`,{class:`project-card`,role:`button`,tabindex:0,onclick:()=>{let n=Pt(e.id);n?t(n):I(`読み込めませんでした`)},onkeydown:e=>e.key===`Enter`&&e.currentTarget.click()},P(`div`,{class:`thumb`},P(`img`,{src:e.thumb??Hr(e),alt:``})),P(`div`,{class:`card-meta`},P(`div`,{class:`card-name`},e.name),P(`div`,{class:`card-sub`},`${new Date(e.updatedAt).toLocaleDateString(`ja-JP`)}${e.rooms?`・${e.rooms}部屋・${(e.areaM2??0).toFixed(1)}㎡`:``}`)),P(`button`,{class:`icon-btn card-menu`,"aria-label":`メニュー`,onclick:async t=>{t.stopPropagation();let n=P(`div`,{class:`menu-list`}),r=Dn(e.name,n),i=(e,t,i,a=``)=>n.append(P(`button`,{class:`menu-item ${a}`,onclick:async()=>{r.close(),await i()}},F(t,18),e));i(`名前を変更`,`file`,async()=>{let t=await Mn(`名前を変更`,e.name);if(!t)return;let n=Pt(e.id);n&&(n.name=t,Ft(n),f())}),i(`複製`,`copy`,()=>{if(Nt().length>=o)return Nn(`無料版で作れるプロジェクトは${o}件までです。`);let t=Pt(e.id);if(!t)return;let n=b(t);Ft(n,{thumb:e.thumb,rooms:e.rooms,areaM2:e.areaM2});let r=zt(e.id);r&&!Bt(n.id,r)&&I(`下絵の写真は容量が足りずコピーできませんでした`),I(`複製しました`),f()}),i(`削除`,`trash`,async()=>{await jn(`削除しますか？`,`「${e.name}」を削除します。元に戻せません。`,`削除`,!0)&&(It(e.id),f())},`danger`)}},F(`more`))),f=()=>Vr(e,t),p=n(U.prefs.purchases);e.replaceChildren(P(`header`,{class:`app-header`},P(`div`,{class:`brand`},Wr(),P(`span`,null,`ハコマドリ`),P(`small`,null,`3D間取り`)),P(`div`,{class:`spacer`}),P(`button`,{class:`btn ghost`,title:`JSONを読み込む`,onclick:()=>qn()},F(`file`,18),P(`span`,{class:`hide-sm`},`読み込み`),a(U.prefs.purchases)?null:F(`lock`,14)),P(`button`,{class:`icon-btn`,title:`設定`,onclick:()=>Un()},F(`gear`))),P(`main`,{class:`projects-main`},P(`div`,{class:`projects-title`},P(`h1`,null,`プロジェクト`),P(`span`,{class:`muted small`},Number.isFinite(o)?`${i.length}／${o}件（無料版）`:`${i.length}件`)),P(`div`,{class:`project-grid`},P(`button`,{class:`project-card new ${s?``:`locked`}`,onclick:l},P(`div`,{class:`new-inner`},F(s?`plus`:`lock`,30),P(`span`,null,`新規作成`))),i.map(u)))),p&&e.append(Ur()),p&&In().then(()=>e.querySelector(`.ad-banner`)&&e.querySelector(`.ad-banner`).replaceWith(Ur()))}function Hr(e){let t=Pt(e.id);if(!t)return``;let n=ee(t.walls,t.roomTags),r=st(t,n,320,200,{margin:14}).toDataURL(`image/jpeg`,.82);return Ft(t,{thumb:r,rooms:n.length,areaM2:n.reduce((e,t)=>e+ne(t.areaMm2),0)}),r}function Ur(){let e=U.prefs.attAsked;return P(`div`,{class:`ad-banner`},P(`span`,{class:`ad-tag`},`広告`),P(`span`,null,e?U.prefs.attAllowed?`パーソナライズ広告（デモ）`:`非パーソナライズ広告（デモ）`:`—`),P(`button`,{class:`link`,onclick:()=>Nn(`広告を消すには、スタンダード以上にしてください。`)},`広告を消す`))}function Wr(e=26){let t=document.createElement(`span`);return t.className=`logo`,t.innerHTML=`<svg width="${e}" height="${e}" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill="#2f7d6d"/><path d="M7 25V11l9-5 9 5v14z" fill="none" stroke="white" stroke-width="2.4" stroke-linejoin="round"/><path d="M16 12v13M7 18h9" stroke="white" stroke-width="2"/></svg>`,t}var Gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qr=1e3,Jr=1001,Yr=1002,Xr=1003,Zr=1004,Qr=1005,$r=1006,ei=1007,ti=1008,ni=1009,ri=1010,ii=1011,ai=1012,oi=1013,si=1014,ci=1015,li=1016,ui=1017,di=1018,fi=1020,pi=35902,mi=35899,hi=1021,gi=1022,_i=1023,vi=1026,yi=1027,bi=1028,xi=1029,Si=1030,Ci=1031,wi=1033,Ti=33776,Ei=33777,Di=33778,Oi=33779,ki=35840,Ai=35841,ji=35842,Mi=35843,Ni=36196,Pi=37492,Fi=37496,Ii=37488,Li=37489,Ri=37490,zi=37491,Bi=37808,Vi=37809,Hi=37810,Ui=37811,Wi=37812,Gi=37813,Ki=37814,qi=37815,Ji=37816,Yi=37817,Xi=37818,Zi=37819,Qi=37820,$i=37821,ea=36492,ta=36494,na=36495,ra=36283,ia=36284,aa=36285,oa=36286,sa=2300,ca=2301,la=2302,ua=2303,da=2400,fa=2401,pa=2402,ma=3200,ha=`srgb`,ga=`srgb-linear`,_a=`linear`,va=`srgb`,ya=7680,ba=35044,xa=2e3;function Sa(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ca(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function wa(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ta(){let e=wa(`canvas`);return e.style.display=`block`,e}var Ea={};function Da(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Oa(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=Oa(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=Oa(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ka(...e){let t=e.join(` `);t in Ea||(Ea[t]=!0,W(...e))}function Aa(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ja={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ma=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Na=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Pa=1234567,Fa=Math.PI/180,Ia=180/Math.PI;function La(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Na[e&255]+Na[e>>8&255]+Na[e>>16&255]+Na[e>>24&255]+`-`+Na[t&255]+Na[t>>8&255]+`-`+Na[t>>16&15|64]+Na[t>>24&255]+`-`+Na[n&63|128]+Na[n>>8&255]+`-`+Na[n>>16&255]+Na[n>>24&255]+Na[r&255]+Na[r>>8&255]+Na[r>>16&255]+Na[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function Ra(e,t){return(e%t+t)%t}function za(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ba(e,t,n){return e===t?0:(n-e)/(t-e)}function Va(e,t,n){return(1-n)*e+n*t}function Ha(e,t,n,r){return Va(e,t,1-Math.exp(-n*r))}function Ua(e,t=1){return t-Math.abs(Ra(e,t*2)-t)}function Wa(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ga(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ka(e,t){return e+Math.floor(Math.random()*(t-e+1))}function qa(e,t){return e+Math.random()*(t-e)}function Ja(e){return e*(.5-Math.random())}function Ya(e){e!==void 0&&(Pa=e);let t=Pa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xa(e){return e*Fa}function Za(e){return e*Ia}function Qa(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function $a(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function eo(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function to(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:W(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function no(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ro(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var io={DEG2RAD:Fa,RAD2DEG:Ia,generateUUID:La,clamp:K,euclideanModulo:Ra,mapLinear:za,inverseLerp:Ba,lerp:Va,damp:Ha,pingpong:Ua,smoothstep:Wa,smootherstep:Ga,randInt:Ka,randFloat:qa,randFloatSpread:Ja,seededRandom:Ya,degToRad:Xa,radToDeg:Za,isPowerOfTwo:Qa,ceilPowerOfTwo:$a,floorPowerOfTwo:eo,setQuaternionFromProperEuler:to,normalize:ro,denormalize:no},q=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ao=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oo=new J,so=new ao,Y=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ka(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(co.makeScale(e,t)),this}rotate(e){return ka(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(co.makeRotation(-e)),this}translate(e,t){return ka(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},co=new Y,lo=new Y().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new Y().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fo(){let e={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=po(e.r),e.g=po(e.g),e.b=po(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=mo(e.r),e.g=mo(e.g),e.b=mo(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?_a:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ka(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ka(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ga]:{primaries:t,whitePoint:r,transfer:_a,toXYZ:lo,fromXYZ:uo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ha},outputColorSpaceConfig:{drawingBufferColorSpace:ha}},[ha]:{primaries:t,whitePoint:r,transfer:va,toXYZ:lo,fromXYZ:uo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ha}}}),e}var X=fo();function po(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function mo(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ho,go=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=wa(`canvas`)),ho.width=e.width,ho.height=e.height;let t=ho.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ho}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=wa(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=po(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(po(t[e]/255)*255):t[e]=po(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},_o=0,vo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_o++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(yo(r[t].image)):e.push(yo(r[t]))}else e=yo(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function yo(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?go.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var bo=0,xo=new J,So=class e extends Ma{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Jr,i=Jr,a=$r,o=ti,s=_i,c=ni,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bo++}),this.uuid=La(),this.name=``,this.source=new vo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Y,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x-=Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y-=Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};So.DEFAULT_IMAGE=null,So.DEFAULT_MAPPING=300,So.DEFAULT_ANISOTROPY=1;var Co=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends Ma{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$r,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Co(0,0,e,t),this.scissorTest=!1,this.viewport=new Co(0,0,e,t),this.textures=[];let r=new So({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$r,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},To=class extends wo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Eo=class extends So{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xr,this.minFilter=Xr,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Do=class extends So{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xr,this.minFilter=Xr,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Oo=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ko.setFromMatrixColumn(e,0).length(),i=1/ko.setFromMatrixColumn(e,1).length(),a=1/ko.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jo,e,Mo)}lookAt(e,t,n){let r=this.elements;return Fo.subVectors(e,t),Fo.lengthSq()===0&&(Fo.z=1),Fo.normalize(),No.crossVectors(n,Fo),No.lengthSq()===0&&(Math.abs(n.z)===1?Fo.x+=1e-4:Fo.z+=1e-4,Fo.normalize(),No.crossVectors(n,Fo)),No.normalize(),Po.crossVectors(Fo,No),r[0]=No.x,r[4]=Po.x,r[8]=Fo.x,r[1]=No.y,r[5]=Po.y,r[9]=Fo.y,r[2]=No.z,r[6]=Po.z,r[10]=Fo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ko.set(r[0],r[1],r[2]).length(),o=ko.set(r[4],r[5],r[6]).length(),s=ko.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ao.copy(this);let c=1/a,l=1/o,u=1/s;return Ao.elements[0]*=c,Ao.elements[1]*=c,Ao.elements[2]*=c,Ao.elements[4]*=l,Ao.elements[5]*=l,Ao.elements[6]*=l,Ao.elements[8]*=u,Ao.elements[9]*=u,Ao.elements[10]*=u,t.setFromRotationMatrix(Ao),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=xa,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=xa,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ko=new J,Ao=new Oo,jo=new J(0,0,0),Mo=new J(1,1,1),No=new J,Po=new J,Fo=new J,Io=new Oo,Lo=new ao,Ro=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ro.DEFAULT_ORDER=`XYZ`;var zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Bo=0,Vo=new J,Ho=new ao,Uo=new Oo,Wo=new J,Go=new J,Ko=new J,qo=new ao,Jo=new J(1,0,0),Yo=new J(0,1,0),Xo=new J(0,0,1),Zo={type:`added`},Qo={type:`removed`},$o={type:`childadded`,child:null},es={type:`childremoved`,child:null},ts=class e extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bo++}),this.uuid=La(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Ro,r=new ao,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oo},normalMatrix:{value:new Y}}),this.matrix=new Oo,this.matrixWorld=new Oo,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.premultiply(Ho),this}rotateX(e){return this.rotateOnAxis(Jo,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis(Xo,e)}translateOnAxis(e,t){return Vo.copy(e).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jo,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis(Xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Uo.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Uo.lookAt(Go,Wo,this.up):Uo.lookAt(Wo,Go,this.up),this.quaternion.setFromRotationMatrix(Uo),r&&(Uo.extractRotation(r.matrixWorld),Ho.setFromRotationMatrix(Uo),this.quaternion.premultiply(Ho.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zo),$o.child=e,this.dispatchEvent($o),$o.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qo),es.child=e,this.dispatchEvent(es),es.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Uo.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Uo.multiply(e.parent.matrixWorld)),e.applyMatrix4(Uo),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zo),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Ko),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,qo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ts.DEFAULT_UP=new J(0,1,0),ts.DEFAULT_MATRIX_AUTO_UPDATE=!0,ts.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ns=class extends ts{constructor(){super(),this.isGroup=!0,this.type=`Group`}},rs={type:`move`},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},as={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},ss={h:0,s:0,l:0};function cs(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ha){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=X.workingColorSpace){return this.r=e,this.g=t,this.b=n,X.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=X.workingColorSpace){if(e=Ra(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=cs(i,r,e+1/3),this.g=cs(i,r,e),this.b=cs(i,r,e-1/3)}return X.colorSpaceToWorking(this,r),this}setStyle(e,t=ha){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ha){let n=as[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ha){return X.workingToColorSpace(ls.copy(this),e),Math.round(K(ls.r*255,0,255))*65536+Math.round(K(ls.g*255,0,255))*256+Math.round(K(ls.b*255,0,255))}getHexString(e=ha){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X.workingColorSpace){X.workingToColorSpace(ls.copy(this),t);let n=ls.r,r=ls.g,i=ls.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=X.workingColorSpace){return X.workingToColorSpace(ls.copy(this),t),e.r=ls.r,e.g=ls.g,e.b=ls.b,e}getStyle(e=ha){X.workingToColorSpace(ls.copy(this),e);let t=ls.r,n=ls.g,r=ls.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(ss);let n=Va(os.h,ss.h,t),r=Va(os.s,ss.s,t),i=Va(os.l,ss.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ls=new Z;Z.NAMES=as;var us=class extends ts{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ro,this.environmentIntensity=1,this.environmentRotation=new Ro,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ds=new J,fs=new J,ps=new J,ms=new J,hs=new J,gs=new J,_s=new J,vs=new J,ys=new J,bs=new J,xs=new Co,Ss=new Co,Cs=new Co,ws=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ds.subVectors(e,t),r.cross(ds);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ds.subVectors(r,t),fs.subVectors(n,t),ps.subVectors(e,t);let a=ds.dot(ds),o=ds.dot(fs),s=ds.dot(ps),c=fs.dot(fs),l=fs.dot(ps),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ms)!==null&&ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ms)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ms.x),s.addScaledVector(a,ms.y),s.addScaledVector(o,ms.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return xs.setScalar(0),Ss.setScalar(0),Cs.setScalar(0),xs.fromBufferAttribute(e,t),Ss.fromBufferAttribute(e,n),Cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xs,i.x),a.addScaledVector(Ss,i.y),a.addScaledVector(Cs,i.z),a}static isFrontFacing(e,t,n,r){return ds.subVectors(n,t),fs.subVectors(e,t),ds.cross(fs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ds.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),ds.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;hs.subVectors(r,n),gs.subVectors(i,n),vs.subVectors(e,n);let s=hs.dot(vs),c=gs.dot(vs);if(s<=0&&c<=0)return t.copy(n);ys.subVectors(e,r);let l=hs.dot(ys),u=gs.dot(ys);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(hs,a);bs.subVectors(e,i);let f=hs.dot(bs),p=gs.dot(bs);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(gs,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return _s.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(_s,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(hs,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ts=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ds.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ds.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ds.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ds):Ds.fromBufferAttribute(r,t),Ds.applyMatrix4(e.matrixWorld),this.expandByPoint(Ds);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ds),Ds.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Is.subVectors(this.max,Fs),ks.subVectors(e.a,Fs),As.subVectors(e.b,Fs),js.subVectors(e.c,Fs),Ms.subVectors(As,ks),Ns.subVectors(js,As),Ps.subVectors(ks,js);let t=[0,-Ms.z,Ms.y,0,-Ns.z,Ns.y,0,-Ps.z,Ps.y,Ms.z,0,-Ms.x,Ns.z,0,-Ns.x,Ps.z,0,-Ps.x,-Ms.y,Ms.x,0,-Ns.y,Ns.x,0,-Ps.y,Ps.x,0];return!zs(t,ks,As,js,Is)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,ks,As,js,Is))?!1:(Ls.crossVectors(Ms,Ns),t=[Ls.x,Ls.y,Ls.z],zs(t,ks,As,js,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ds).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ds).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Es=[new J,new J,new J,new J,new J,new J,new J,new J],Ds=new J,Os=new Ts,ks=new J,As=new J,js=new J,Ms=new J,Ns=new J,Ps=new J,Fs=new J,Is=new J,Ls=new J,Rs=new J;function zs(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Rs.fromArray(e,a);let o=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),s=t.dot(Rs),c=n.dot(Rs),l=r.dot(Rs);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Bs=new J,Vs=new q,Hs=0,Us=class extends Ma{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hs++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXYZ(t,Bs.x,Bs.y,Bs.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix4(e),this.setXYZ(t,Bs.x,Bs.y,Bs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyNormalMatrix(e),this.setXYZ(t,Bs.x,Bs.y,Bs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.transformDirection(e),this.setXYZ(t,Bs.x,Bs.y,Bs.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=no(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ro(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=ro(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=ro(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ro(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=ro(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ro(t,this.array),n=ro(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ro(t,this.array),n=ro(n,this.array),r=ro(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ro(t,this.array),n=ro(n,this.array),r=ro(r,this.array),i=ro(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Ws=class extends Us{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Gs=class extends Us{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ks=class extends Us{constructor(e,t,n){super(new Float32Array(e),t,n)}},qs=new Ts,Js=new J,Ys=new J,Xs=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qs.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Js,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ys)),this.expandByPoint(Js.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zs=0,Qs=new Oo,$s=new ts,ec=new J,tc=new Ts,nc=new Ts,rc=new J,ic=class e extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zs++}),this.uuid=La(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Sa(e)?Gs:Ws)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Y().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qs.makeRotationFromQuaternion(e),this.applyMatrix4(Qs),this}rotateX(e){return Qs.makeRotationX(e),this.applyMatrix4(Qs),this}rotateY(e){return Qs.makeRotationY(e),this.applyMatrix4(Qs),this}rotateZ(e){return Qs.makeRotationZ(e),this.applyMatrix4(Qs),this}translate(e,t,n){return Qs.makeTranslation(e,t,n),this.applyMatrix4(Qs),this}scale(e,t,n){return Qs.makeScale(e,t,n),this.applyMatrix4(Qs),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ec).negate(),this.translate(ec.x,ec.y,ec.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ks(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];tc.setFromBufferAttribute(n),this.morphTargetsRelative?(rc.addVectors(this.boundingBox.min,tc.min),this.boundingBox.expandByPoint(rc),rc.addVectors(this.boundingBox.max,tc.max),this.boundingBox.expandByPoint(rc)):(this.boundingBox.expandByPoint(tc.min),this.boundingBox.expandByPoint(tc.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(tc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];nc.setFromBufferAttribute(n),this.morphTargetsRelative?(rc.addVectors(tc.min,nc.min),tc.expandByPoint(rc),rc.addVectors(tc.max,nc.max),tc.expandByPoint(rc)):(tc.expandByPoint(nc.min),tc.expandByPoint(nc.max))}tc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)rc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(rc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)rc.fromBufferAttribute(a,t),o&&(ec.fromBufferAttribute(e,t),rc.add(ec)),r=Math.max(r,n.distanceToSquared(rc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Us(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new q,f=new q,p=new q,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Us(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rc.fromBufferAttribute(e,t),rc.normalize(),e.setXYZ(t,rc.x,rc.y,rc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Us(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ac=new J,oc=new J,sc=new Y,cc=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ac.subVectors(n,t).cross(oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ac),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sc.getNormalMatrix(e),r=this.coplanarPoint(ac).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},lc=0,uc=class extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=La(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new cc().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},dc=new J,fc=new J,pc=new J,mc=new J,hc=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dc)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dc.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dc.copy(this.origin).addScaledVector(this.direction,t),dc.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fc.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),mc.copy(this.origin).sub(fc);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pc),o=mc.dot(this.direction),s=-mc.dot(pc),c=mc.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fc).addScaledVector(pc,d),f}intersectSphere(e,t){if(e.radius<0)return null;dc.subVectors(e.center,this.origin);let n=dc.dot(this.direction),r=dc.dot(dc)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dc)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,ne=1/w,re=T-ee*D,ie=E-te*D,ae=O-ee*A,oe=k-te*A,P=j-ee*N,se=M-te*N,ce=P*oe-se*ae,F=re*se-ie*P,le=ae*ie-oe*re;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let I=ne*(ce*D+F*A+le*N);return(ue>0?I<0:I>0)?null:this.at(I/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gc=class extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ro,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_c=new Oo,vc=new hc,yc=new Xs,bc=new J,xc=new J,Sc=new J,Cc=new J,wc=new J,Tc=new J,Ec=new J,Dc=new J,Oc=class extends ts{constructor(e=new ic,t=new gc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Tc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wc.fromBufferAttribute(s,e),a?Tc.addScaledVector(wc,r):Tc.addScaledVector(wc.sub(t),r))}t.add(Tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(i),vc.copy(e.ray).recast(e.near),!(yc.containsPoint(vc.origin)===!1&&(vc.intersectSphere(yc,bc)===null||vc.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(_c.copy(i).invert(),vc.copy(e.ray).applyMatrix4(_c),(n.boundingBox===null||vc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ac(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ac(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ac(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ac(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function kc(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Dc.copy(s),Dc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Dc);return l<n.near||l>n.far?null:{distance:l,point:Dc.clone(),object:e}}function Ac(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xc),e.getVertexPosition(c,Sc),e.getVertexPosition(l,Cc);let u=kc(e,t,n,r,xc,Sc,Cc,Ec);if(u){let e=new J;ws.getBarycoord(Ec,xc,Sc,Cc,e),i&&(u.uv=ws.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=ws.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=ws.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};ws.getNormal(xc,Sc,Cc,t.normal),u.face=t,u.barycoord=e}return u}var jc=class extends So{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Xr,l=Xr,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mc=new Xs,Nc=new q(.5,.5),Pc=new J,Fc=class{constructor(e=new cc,t=new cc,n=new cc,r=new cc,i=new cc,a=new cc){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xa,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mc)}intersectsSprite(e){return Mc.center.set(0,0,0),Mc.radius=.7071067811865476+Nc.distanceTo(e.center),Mc.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mc)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Pc.x=r.normal.x>0?e.max.x:e.min.x,Pc.y=r.normal.y>0?e.max.y:e.min.y,Pc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ic=class extends So{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lc=class extends So{constructor(e,t,n=si,r,i,a,o=Xr,s=Xr,c,l=vi,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Rc=class extends Lc{constructor(e,t=si,n=301,r,i,a=Xr,o=Xr,s,c=vi){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zc=class extends So{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bc=class e extends ic{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ks(c,3)),this.setAttribute(`normal`,new Ks(l,3)),this.setAttribute(`uv`,new Ks(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vc=class e extends ic{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ks(u,3)),this.setAttribute(`normal`,new Ks(d,3)),this.setAttribute(`uv`,new Ks(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new q,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hc=class e extends ic{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ks(i,3)),this.setAttribute(`normal`,new Ks(i.slice(),3)),this.setAttribute(`uv`,new Ks(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new J,r=new J,i=new J;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new J;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new J;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new J,t=new J,n=new J,r=new J,o=new q,s=new q,c=new q;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Uc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){W(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new q:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new J,r=[],i=[],a=[],o=new J,s=new Oo;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(K(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(K(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wc=class extends Uc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new q){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gc=class extends Wc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Kc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var qc=new J,Jc=new J,Yc=new Kc,Xc=new Kc,Zc=new Kc,Qc=class extends Uc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Jc.subVectors(r[0],r[1]).add(r[0]),c=Jc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(qc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=qc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Yc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Xc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Zc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Yc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Xc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Zc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Yc.calc(s),Xc.calc(s),Zc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $c(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function el(e,t){let n=1-e;return n*n*t}function tl(e,t){return 2*(1-e)*e*t}function nl(e,t){return e*e*t}function rl(e,t,n,r){return el(e,t)+tl(e,n)+nl(e,r)}function il(e,t){let n=1-e;return n*n*n*t}function al(e,t){let n=1-e;return 3*n*n*e*t}function ol(e,t){return 3*(1-e)*e*e*t}function sl(e,t){return e*e*e*t}function cl(e,t,n,r,i){return il(e,t)+al(e,n)+ol(e,r)+sl(e,i)}var ll=class extends Uc{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(cl(e,r.x,i.x,a.x,o.x),cl(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ul=class extends Uc{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(cl(e,r.x,i.x,a.x,o.x),cl(e,r.y,i.y,a.y,o.y),cl(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dl=class extends Uc{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Uc{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends Uc{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(rl(e,r.x,i.x,a.x),rl(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Uc{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(rl(e,r.x,i.x,a.x),rl(e,r.y,i.y,a.y),rl(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Uc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new q){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set($c(o,s.x,c.x,l.x,u.x),$c(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this}},gl=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Qc,CubicBezierCurve:ll,CubicBezierCurve3:ul,EllipseCurve:Wc,LineCurve:dl,LineCurve3:fl,QuadraticBezierCurve:pl,QuadraticBezierCurve3:ml,SplineCurve:hl}),_l=class extends Uc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new gl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new gl[n.type]().fromJSON(n))}return this}},vl=class extends _l{constructor(e){super(),this.type=`Path`,this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new dl(this.currentPoint.clone(),new q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new pl(this.currentPoint.clone(),new q(e,t),new q(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ll(this.currentPoint.clone(),new q(e,t),new q(n,r),new q(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new hl([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Wc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yl=class extends vl{constructor(e){super(e),this.uuid=La(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new vl().fromJSON(n))}return this}};function bl(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=xl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ol(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Cl(a,o,n,s,c,l,0),o}function xl(e,t,n,r,i){let a;if(i===Ql(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Yl(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Yl(i/r|0,e[i],e[i+1],a);return a&&Vl(a,a.next)&&(Xl(a),a=a.next),a}function Sl(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Vl(n,n.next)||Bl(n.prev,n,n.next)===0)){if(Xl(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Cl(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Nl(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Tl(e,r,i,a):wl(e)){t.push(c.i,e.i,l.i),Xl(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=El(Sl(e),t),Cl(e,t,n,r,i,a,2)):o===2&&Dl(e,t,n,r,i,a):Cl(Sl(e),t,n,r,i,a,1);break}}}function wl(e){let t=e.prev,n=e,r=e.next;if(Bl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Rl(i,s,a,c,o,l,m.x,m.y)&&Bl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Bl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Fl(p,m,t,n,r),v=Fl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Rl(s,u,c,d,l,f,y.x,y.y)&&Bl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Rl(s,u,c,d,l,f,b.x,b.y)&&Bl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Rl(s,u,c,d,l,f,y.x,y.y)&&Bl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Rl(s,u,c,d,l,f,b.x,b.y)&&Bl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function El(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Vl(r,i)&&Hl(r,n,n.next,i)&&Kl(r,i)&&Kl(i,r)&&(t.push(r.i,n.i,i.i),Xl(n),Xl(n.next),n=e=i),n=n.next}while(n!==e);return Sl(n)}function Dl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&zl(o,e)){let s=Jl(o,e);o=Sl(o,o.next),s=Sl(s,s.next),Cl(o,t,n,r,i,a,0),Cl(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ol(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=xl(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Il(o))}i.sort(kl);for(let e=0;e<i.length;e++)n=Al(i[e],n);return n}function kl(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Al(e,t){let n=jl(e,t);if(!n)return t;let r=Jl(n,e);return Sl(r,r.next),Sl(n,n.next)}function jl(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Vl(e,n))return n;do{if(Vl(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ll(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Kl(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ml(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ml(e,t){return Bl(e.prev,e,t.prev)<0&&Bl(t.next,e,e.next)<0}function Nl(e,t,n,r){let i=e;do i.z===0&&(i.z=Fl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Pl(i)}function Pl(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Fl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Il(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ll(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Rl(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ll(e,t,n,r,i,a,o,s)}function zl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Gl(e,t)&&(Kl(e,t)&&Kl(t,e)&&ql(e,t)&&(Bl(e.prev,e,t.prev)||Bl(e,t.prev,t))||Vl(e,t)&&Bl(e.prev,e,e.next)>0&&Bl(t.prev,t,t.next)>0)}function Bl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Vl(e,t){return e.x===t.x&&e.y===t.y}function Hl(e,t,n,r){let i=Wl(Bl(e,t,n)),a=Wl(Bl(e,t,r)),o=Wl(Bl(n,r,e)),s=Wl(Bl(n,r,t));return!!(i!==a&&o!==s||i===0&&Ul(e,n,t)||a===0&&Ul(e,r,t)||o===0&&Ul(n,e,r)||s===0&&Ul(n,t,r))}function Ul(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Wl(e){return e>0?1:e<0?-1:0}function Gl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Hl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Kl(e,t){return Bl(e.prev,e,e.next)<0?Bl(e,t,e.next)>=0&&Bl(e,e.prev,t)>=0:Bl(e,t,e.prev)<0||Bl(e,e.next,t)<0}function ql(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Jl(e,t){let n=Zl(e.i,e.x,e.y),r=Zl(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Yl(e,t,n,r){let i=Zl(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Xl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Zl(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ql(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var $l=class{static triangulate(e,t,n=2){return bl(e,t,n)}},eu=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];tu(e),nu(n,e);let a=e.length;t.forEach(tu);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,nu(n,t[e]);let o=$l.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function tu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function nu(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ru=class e extends Hc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},iu=class e extends ic{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ks(p,3)),this.setAttribute(`normal`,new Ks(m,3)),this.setAttribute(`uv`,new Ks(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},au=class e extends ic{constructor(e=new yl([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Ks(r,3)),this.setAttribute(`normal`,new Ks(i,3)),this.setAttribute(`uv`,new Ks(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;eu.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];eu.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=eu.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ou(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function ou(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function su(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(lu(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(lu(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function cu(e){let t={};for(let n=0;n<e.length;n++){let r=su(e[n]);for(let e in r)t[e]=r[e]}return t}function lu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function uu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function du(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:X.workingColorSpace}var fu={clone:su,merge:cu},pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hu=class extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=su(e.uniforms),this.uniformsGroups=uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Co().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Oo().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gu=class extends hu{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},_u=class extends uc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ro,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vu=class extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ma,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yu=class extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Su=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Cu=class extends Su{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:da,endingEnd:da}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case fa:i=e,o=2*t-n;break;case pa:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case fa:a=e,s=2*n-t;break;case pa:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},wu=class extends Su{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Tu=class extends Su{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Eu=class extends Su{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ku(n,t,g,y,r);i[p]=Du(x,o,_,b,m)}return i}};function Du(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ou(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ku(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Du(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ou(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Au=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=bu(t,this.TimeBufferType),this.values=bu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bu(e.times,Array),values:bu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),xu(e.settings)&&(n.settings={inTangents:bu(e.settings.inTangents,Array),outTangents:bu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Eu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case ua:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xu(this.settings)&&(ju(this.settings.inTangents,e),ju(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ca(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===la,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ju(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Au.prototype.ValueTypeName=``,Au.prototype.TimeBufferType=Float32Array,Au.prototype.ValueBufferType=Float32Array,Au.prototype.DefaultInterpolation=ca;var Mu=class extends Au{constructor(e,t,n){super(e,t,n)}};Mu.prototype.ValueTypeName=`bool`,Mu.prototype.ValueBufferType=Array,Mu.prototype.DefaultInterpolation=sa,Mu.prototype.InterpolantFactoryMethodLinear=void 0,Mu.prototype.InterpolantFactoryMethodSmooth=void 0;var Nu=class extends Au{constructor(e,t,n,r){super(e,t,n,r)}};Nu.prototype.ValueTypeName=`color`;var Pu=class extends Au{constructor(e,t,n,r){super(e,t,n,r)}};Pu.prototype.ValueTypeName=`number`;var Fu=class extends Su{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ao.slerpFlat(i,0,a,c-o,a,c,s);return i}},Iu=class extends Au{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}};Iu.prototype.ValueTypeName=`quaternion`,Iu.prototype.InterpolantFactoryMethodSmooth=void 0;var Lu=class extends Au{constructor(e,t,n){super(e,t,n)}};Lu.prototype.ValueTypeName=`string`,Lu.prototype.ValueBufferType=Array,Lu.prototype.DefaultInterpolation=sa,Lu.prototype.InterpolantFactoryMethodLinear=void 0,Lu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ru=class extends Au{constructor(e,t,n,r){super(e,t,n,r)}};Ru.prototype.ValueTypeName=`vector`;var zu=class extends ts{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Z(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bu=class extends zu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ts.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vu=new Oo,Hu=new J,Uu=new J,Wu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Oo,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new Co(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gu=new J,Ku=new ao,qu=new J,Ju=class extends ts{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Oo,this.projectionMatrix=new Oo,this.projectionMatrixInverse=new Oo,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gu,Ku,qu),qu.x===1&&qu.y===1&&qu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gu,Ku,qu.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gu,Ku,qu),qu.x===1&&qu.y===1&&qu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gu,Ku,qu.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yu=new J,Xu=new q,Zu=new q,Qu=class extends Ju{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yu.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yu.x,Yu.y).multiplyScalar(-e/Yu.z),Yu.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yu.x,Yu.y).multiplyScalar(-e/Yu.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,Zu),t.subVectors(Zu,Xu)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$u=class extends Ju{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ed=class extends Wu{constructor(){super(new $u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},td=class extends zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ts.DEFAULT_UP),this.updateMatrix(),this.target=new ts,this.shadow=new ed}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},nd=-90,rd=1,id=class extends ts{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qu(nd,rd,e,t);r.layers=this.layers,this.add(r);let i=new Qu(nd,rd,e,t);i.layers=this.layers,this.add(i);let a=new Qu(nd,rd,e,t);a.layers=this.layers,this.add(a);let o=new Qu(nd,rd,e,t);o.layers=this.layers,this.add(o);let s=new Qu(nd,rd,e,t);s.layers=this.layers,this.add(s);let c=new Qu(nd,rd,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ad=class extends Qu{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},od=`\\[\\]\\.:\\/`,sd=RegExp(`[\\[\\]\\.:\\/]`,`g`),cd=`[^\\[\\]\\.:\\/]`,ld=`[^`+od.replace(`\\.`,``)+`]`,ud=`((?:WC+[\\/:])*)`.replace(`WC`,cd),dd=`(WCOD+)?`.replace(`WCOD`,ld),fd=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,cd),pd=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,cd),md=RegExp(`^`+ud+dd+fd+pd+`$`),hd=[`material`,`materials`,`bones`,`map`],gd=class{constructor(e,t,n){let r=n||_d.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_d=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(sd,``)}static parseTrackName(e){let t=md.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_d.Composite=gd,_d.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_d.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_d.prototype.GetterByBindingType=[_d.prototype._getValue_direct,_d.prototype._getValue_array,_d.prototype._getValue_arrayElement,_d.prototype._getValue_toArray],_d.prototype.SetterByBindingTypeAndVersioning=[[_d.prototype._setValue_direct,_d.prototype._setValue_direct_setNeedsUpdate,_d.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_d.prototype._setValue_array,_d.prototype._setValue_array_setNeedsUpdate,_d.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_d.prototype._setValue_arrayElement,_d.prototype._setValue_arrayElement_setNeedsUpdate,_d.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_d.prototype._setValue_fromArray,_d.prototype._setValue_fromArray_setNeedsUpdate,_d.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vd=new Oo,yd=class{constructor(e,t,n=0,r=1/0){this.ray=new hc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):G(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return vd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(e,t=!0,n=[]){return xd(e,this,n,t),n.sort(bd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)xd(e[r],this,n,t);return n.sort(bd),n}};function bd(e,t){return e.distance-t.distance}function xd(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)xd(r[e],t,n,!0)}}var Sd=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=K(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(K(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Cd=class extends Ma{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function wd(e,t,n,r){let i=Td(r);switch(n){case hi:return e*t;case bi:return e*t/i.components*i.byteLength;case xi:return e*t/i.components*i.byteLength;case Si:return e*t*2/i.components*i.byteLength;case Ci:return e*t*2/i.components*i.byteLength;case gi:return e*t*3/i.components*i.byteLength;case _i:return e*t*4/i.components*i.byteLength;case wi:return e*t*4/i.components*i.byteLength;case Ti:case Ei:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Di:case Oi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ai:case Mi:return Math.max(e,16)*Math.max(t,8)/4;case ki:case ji:return Math.max(e,8)*Math.max(t,8)/2;case Ni:case Pi:case Ii:case Li:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fi:case Ri:case zi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vi:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Hi:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ui:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Wi:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Gi:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ki:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case qi:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ji:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Yi:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Xi:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Zi:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Qi:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case $i:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ea:case ta:case na:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ra:case ia:return Math.ceil(e/4)*Math.ceil(t/4)*8;case aa:case oa:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Td(e){switch(e){case ni:case ri:return{byteLength:1,components:1};case ai:case ii:case li:return{byteLength:2,components:1};case ui:case di:return{byteLength:2,components:4};case si:case oi:case ci:return{byteLength:4,components:1};case pi:case mi:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ed(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Dd(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},Od={basic:{uniforms:cu([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:cu([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:cu([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:cu([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:cu([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Z(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:cu([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:cu([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:cu([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:cu([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:cu([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:cu([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:cu([$.common,$.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:cu([$.lights,$.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};Od.physical={uniforms:cu([Od.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var kd={r:0,b:0,g:0},Ad=new Oo,jd=new Y;jd.set(-1,0,0,0,1,0,0,0,1);function Md(e,t,n,r,i,a){let o=new Z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Oc(new Bc(1,1,1),new hu({name:`BackgroundCubeMaterial`,uniforms:su(Od.backgroundCube.uniforms),vertexShader:Od.backgroundCube.vertexShader,fragmentShader:Od.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jd),l.material.toneMapped=X.getTransfer(i.colorSpace)!==va,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Oc(new iu(2,2),new hu({name:`BackgroundMaterial`,uniforms:su(Od.background.uniforms),vertexShader:Od.background.vertexShader,fragmentShader:Od.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=X.getTransfer(i.colorSpace)!==va,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(kd,du(e)),n.buffers.color.setClear(kd.r,kd.g,kd.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Nd(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Pd(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Fd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Id(e){let t=this,n=null,r=0,i=!1,a=!1,o=new cc,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ld=4,Rd=6,zd=20,Bd=256,Vd=new $u,Hd=new Z,Ud=null,Wd=0,Gd=0,Kd=!1,qd=new J,Jd=new J,Yd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=qd}=i;Ud=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ud,Wd,Gd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,Qd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ud=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$r,minFilter:$r,generateMipmaps:!1,type:li,format:_i,colorSpace:ga,depthBuffer:!1},r=Zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xd(r)),this._blurMaterial=ef(r,e,t),this._ggxMaterial=$d(r,e,t)}return r}_compileMaterial(e){let t=new Oc(new ic,e);this._renderer.compile(t,Vd)}_sceneToCubeUV(e,t,n,r,i){let a=new Qu(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Hd),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oc(new Bc,new gc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Hd),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Qd(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Qd(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Vd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ld?n-d+Ld:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Qd(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Vd),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Qd(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Vd)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Qd(t,3*l*(r>this._lodMax-Ld?r-this._lodMax+Ld:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Vd)}};function Xd(e){let t=[],n=[],r=e,i=e-Ld+1+Rd;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Jd.set(1,r,n):e===1?Jd.set(-n,1,-r):e===2?Jd.set(-n,r,1):e===3?Jd.set(-1,r,-n):e===4?Jd.set(-n,-1,r):Jd.set(n,r,-1),Jd.toArray(l,(e*6+t)*3)}}let u=new ic;u.setAttribute(`position`,new Us(c,3)),u.setAttribute(`outputDirection`,new Us(l,3)),n.push(new Oc(u,null)),r>Ld&&r--}return{lodMeshes:n,sizeLods:t}}function Zd(e,t,n){let r=new To(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Qd(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function $d(e,t,n){return new hu({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Bd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ef(e,t,n){return new hu({name:`SphericalGaussianBlur`,defines:{SAMPLES:zd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tf(){return new hu({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nf(){return new hu({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var af=class extends To{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ic(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bc(5,5,5),i=new hu({name:`CubemapFromEquirect`,uniforms:su(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Oc(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=$r),new id(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function of(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new af(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Yd(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Yd(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function sf(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ka(`WebGLRenderer: `+e+` extension not supported.`),t}}}function cf(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Gs:Ws)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function lf(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function uf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function df(e,t,n){let r=new WeakMap,i=new Co;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Eo(h,p,m,u);g.type=ci,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ff(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var pf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function mf(e,t,n,r,i,a){let o=new To(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ic;l.setAttribute(`position`,new Ks([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ks([0,2,0,0,2,0],2));let u=new gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Oc(l,u),f=new $u(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new To(t,n,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new To(t,n,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},X.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=pf[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var hf=new So,gf=new Lc(1,1),_f=new Eo,vf=new Do,yf=new Ic,bf=[],xf=[],Sf=new Float32Array(16),Cf=new Float32Array(9),wf=new Float32Array(4);function Tf(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=bf[i];if(a===void 0&&(a=new Float32Array(i),bf[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ef(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Df(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Of(e,t){let n=xf[t];n===void 0&&(n=new Int32Array(t),xf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function kf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Af(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ef(n,t))return;e.uniform2fv(this.addr,t),Df(n,t)}}function jf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ef(n,t))return;e.uniform3fv(this.addr,t),Df(n,t)}}function Mf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ef(n,t))return;e.uniform4fv(this.addr,t),Df(n,t)}}function Nf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ef(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Df(n,t)}else{if(Ef(n,r))return;wf.set(r),e.uniformMatrix2fv(this.addr,!1,wf),Df(n,r)}}function Pf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ef(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Df(n,t)}else{if(Ef(n,r))return;Cf.set(r),e.uniformMatrix3fv(this.addr,!1,Cf),Df(n,r)}}function Ff(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ef(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Df(n,t)}else{if(Ef(n,r))return;Sf.set(r),e.uniformMatrix4fv(this.addr,!1,Sf),Df(n,r)}}function If(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Lf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ef(n,t))return;e.uniform2iv(this.addr,t),Df(n,t)}}function Rf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ef(n,t))return;e.uniform3iv(this.addr,t),Df(n,t)}}function zf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ef(n,t))return;e.uniform4iv(this.addr,t),Df(n,t)}}function Bf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ef(n,t))return;e.uniform2uiv(this.addr,t),Df(n,t)}}function Hf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ef(n,t))return;e.uniform3uiv(this.addr,t),Df(n,t)}}function Uf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ef(n,t))return;e.uniform4uiv(this.addr,t),Df(n,t)}}function Wf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(gf.compareFunction=n.isReversedDepthBuffer()?518:515,a=gf):a=hf,n.setTexture2D(t||a,i)}function Gf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||vf,i)}function Kf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||yf,i)}function qf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||_f,i)}function Jf(e){switch(e){case 5126:return kf;case 35664:return Af;case 35665:return jf;case 35666:return Mf;case 35674:return Nf;case 35675:return Pf;case 35676:return Ff;case 5124:case 35670:return If;case 35667:case 35671:return Lf;case 35668:case 35672:return Rf;case 35669:case 35673:return zf;case 5125:return Bf;case 36294:return Vf;case 36295:return Hf;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return qf}}function Yf(e,t){e.uniform1fv(this.addr,t)}function Xf(e,t){let n=Tf(t,this.size,2);e.uniform2fv(this.addr,n)}function Zf(e,t){let n=Tf(t,this.size,3);e.uniform3fv(this.addr,n)}function Qf(e,t){let n=Tf(t,this.size,4);e.uniform4fv(this.addr,n)}function $f(e,t){let n=Tf(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ep(e,t){let n=Tf(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tp(e,t){let n=Tf(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function np(e,t){e.uniform1iv(this.addr,t)}function rp(e,t){e.uniform2iv(this.addr,t)}function ip(e,t){e.uniform3iv(this.addr,t)}function ap(e,t){e.uniform4iv(this.addr,t)}function op(e,t){e.uniform1uiv(this.addr,t)}function sp(e,t){e.uniform2uiv(this.addr,t)}function cp(e,t){e.uniform3uiv(this.addr,t)}function lp(e,t){e.uniform4uiv(this.addr,t)}function up(e,t,n){let r=this.cache,i=t.length,a=Of(n,i);Ef(r,a)||(e.uniform1iv(this.addr,a),Df(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gf:hf;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function dp(e,t,n){let r=this.cache,i=t.length,a=Of(n,i);Ef(r,a)||(e.uniform1iv(this.addr,a),Df(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||vf,a[e])}function fp(e,t,n){let r=this.cache,i=t.length,a=Of(n,i);Ef(r,a)||(e.uniform1iv(this.addr,a),Df(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||yf,a[e])}function pp(e,t,n){let r=this.cache,i=t.length,a=Of(n,i);Ef(r,a)||(e.uniform1iv(this.addr,a),Df(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||_f,a[e])}function mp(e){switch(e){case 5126:return Yf;case 35664:return Xf;case 35665:return Zf;case 35666:return Qf;case 35674:return $f;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return rp;case 35668:case 35672:return ip;case 35669:case 35673:return ap;case 5125:return op;case 36294:return sp;case 36295:return cp;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}var hp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jf(t.type)}},gp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mp(t.type)}},_p=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},vp=/(\w+)(\])?(\[|\.)?/g;function yp(e,t){e.seq.push(t),e.map[t.id]=t}function bp(e,t,n){let r=e.name,i=r.length;for(vp.lastIndex=0;;){let a=vp.exec(r),o=vp.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){yp(n,l===void 0?new hp(s,e,t):new gp(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new _p(s),yp(n,e)),n=e}}}var xp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);bp(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Sp(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Cp=37297,wp=0;function Tp(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ep=new Y;function Dp(e){X._getMatrix(Ep,X.workingColorSpace,e);let t=`mat3( ${Ep.elements.map(e=>e.toFixed(4))} )`;switch(X.getTransfer(e)){case _a:return[t,`LinearTransferOETF`];case va:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Op(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Tp(e.getShaderSource(t),r)}return i}function kp(e,t){let n=Dp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ap={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function jp(e,t){let n=Ap[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Mp=new J;function Np(){return X.getLuminanceCoefficients(Mp),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Mp.x.toFixed(4)}, ${Mp.y.toFixed(4)}, ${Mp.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Pp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Lp).join(`
`)}function Fp(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ip(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Lp(e){return e!==``}function Rp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vp(e){return e.replace(Bp,Up)}var Hp=new Map;function Up(e,t){let n=Q[t];if(n===void 0){let e=Hp.get(t);if(e!==void 0)n=Q[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Vp(n)}var Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(e){return e.replace(Wp,Kp)}function Kp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function qp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Jp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yp(e){return Jp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xp={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Zp(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Xp[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Qp={302:`ENVMAP_MODE_REFRACTION`};function $p(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Qp[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var em={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function tm(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:em[e.combine]||`ENVMAP_BLENDING_NONE`}function nm(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function rm(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Yp(n),l=Zp(n),u=$p(n),d=tm(n),f=nm(n),p=Pp(n),m=Fp(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Lp).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Lp).join(`
`),_.length>0&&(_+=`
`)):(g=[qp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Lp).join(`
`),_=[qp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:jp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,kp(`linearToOutputTexel`,n.outputColorSpace),Np(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Lp).join(`
`)),o=Vp(o),o=Rp(o,n),o=zp(o,n),s=Vp(s),s=Rp(s,n),s=zp(s,n),o=Gp(o),s=Gp(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Sp(i,i.VERTEX_SHADER,y),S=Sp(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Op(i,x,`vertex`),n=Op(i,S,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new xp(i,h),T=Ip(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Cp)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var im=0,am=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new om(e),t.set(e,n)),n}},om=class{constructor(e){this.id=im++,this.code=e,this.usedTimes=0}};function sm(e){return e===1030||e===37490||e===36285}function cm(e,t,n,r,i,a){let o=new zo,s=new am,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Od[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,P=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,I=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,L=i.sheen>0,me=i.transmission>0,he=ue&&!!i.anisotropyMap,ge=I&&!!i.clearcoatMap,_e=I&&!!i.clearcoatNormalMap,ve=I&&!!i.clearcoatRoughnessMap,ye=pe&&!!i.iridescenceMap,R=pe&&!!i.iridescenceThicknessMap,be=L&&!!i.sheenColorMap,xe=L&&!!i.sheenRoughnessMap,Se=!!i.specularMap,z=!!i.specularColorMap,Ce=!!i.specularIntensityMap,B=me&&!!i.transmissionMap,V=me&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:X.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:P,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:P&&i.normalMapType===1,normalMapTangentSpace:P&&i.normalMapType===0,packedNormalMap:P&&i.normalMapType===0&&sm(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:he,clearcoat:I,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:ye,iridescenceThicknessMap:R,sheen:L,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:z,specularIntensityMap:Ce,transmission:me,transmissionMap:B,thicknessMap:V,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:P&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:z&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:B&&m(i.transmissionMap.channel),thicknessMapUv:V&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(P||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&P===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&X.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&X.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Od[t];n=fu.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new rm(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function lm(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function um(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function dm(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||um),r.length>1&&r.sort(t||dm),i.length>1&&i.sort(t||dm)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function pm(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new fm,e.set(t,[i])):n>=r.length?(i=new fm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function mm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new Z};break;case`SpotLight`:n={position:new J,direction:new J,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new Z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new Z,groundColor:new Z};break;case`RectAreaLight`:n={color:new Z,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function hm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var gm=0;function _m(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function vm(e){let t=new mm,n=hm(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Oo,o=new Oo;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(_m);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=gm++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ym(e){let t=new vm(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function bm(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ym(e),t.set(n,[a])):r>=i.length?(a=new ym(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cm=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],wm=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Tm=new Oo,Em=new J,Dm=new J;function Om(e,t,n){let r=new Fc,i=new q,a=new q,o=new Co,s=new vu,c=new yu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new hu({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:xm,fragmentShader:Sm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ic;m.setAttribute(`position`,new Us(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Oc(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){W(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new To(i.x,i.y,{format:Si,type:li,minFilter:$r,magFilter:$r,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Lc(i.x,i.y,ci),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=vi,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Xr,d.map.depthTexture.magFilter=Xr}else l.isPointLight?(d.map=new af(i.x),d.map.depthTexture=new Rc(i.x,si)):(d.map=new To(i.x,i.y),d.map.depthTexture=new Lc(i.x,i.y,si)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=vi,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=$r,d.map.depthTexture.magFilter=$r):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Xr,d.map.depthTexture.magFilter=Xr);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Em.setFromMatrixPosition(l.matrixWorld),e.position.copy(Em),Dm.copy(e.position),Dm.add(Cm[t]),e.up.copy(wm[t]),e.lookAt(Dm),e.updateMatrixWorld(),n.makeTranslation(-Em.x,-Em.y,-Em.z),Tm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Tm,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new To(i.x,i.y,{format:Si,type:li}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function km(e,t){function n(){let t=!1,n=new Co,r=null,i=new Co(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ja[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Co().fromArray(ie),P=new Co().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),F(e.CULL_FACE),L(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function I(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function L(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(le(e.BLEND),g=!1);return}if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?L(0):L(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function ye(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function be(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function xe(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function B(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Me(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:I,useProgram:de,setBlending:L,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:R,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:z,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:Ce,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:we,scissor:je,viewport:Me,reset:Fe}}function Am(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):wa(`canvas`)}function g(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?_a:X.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{le(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){le(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){le(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[qr]:e.REPEAT,[Jr]:e.CLAMP_TO_EDGE,[Yr]:e.MIRRORED_REPEAT},ae={[Xr]:e.NEAREST,[Zr]:e.NEAREST_MIPMAP_NEAREST,[Qr]:e.NEAREST_MIPMAP_LINEAR,[$r]:e.LINEAR,[ei]:e.LINEAR_MIPMAP_NEAREST,[ti]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function P(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function F(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ce(n.start,r.width,4),c=ce(t.start,r.width,4);n.start<=i+1&&a===c&&ce(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function le(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=X.getPrimaries(X.workingColorSpace),r=o.colorSpace===``?null:X.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=xe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);P(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===yi,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&F(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=wd(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=wd(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Se(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,o,s){if(o.image.length!==6)return;let c=se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=X.getPrimaries(X.workingColorSpace),r=o.colorSpace===``?null:X.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=xe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);P(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function I(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ye(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function fe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),P(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=ye(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function pe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)fe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?fe(i.__webglFramebuffer[0],t,0):fe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),de(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),de(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(t,n,i){let a=r.get(t);n!==void 0&&I(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&pe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),de(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),P(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)I(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else I(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),P(c,a),I(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),P(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)I(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else I(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&pe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ge.push(l),_e.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function be(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(X.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=L,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=I,this.useMultisampledRTT=R,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jm(e,t){function n(n,r=``){let i,a=X.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hu({vertexShader:Mm,fragmentShader:Nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oc(new iu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fm=class extends Ma{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Pm,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new q,C=null,w=null,T=new Qu;T.viewport=new Co;let E=new Qu;E.viewport=new Co;let D=[T,E],O=new ad,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new is,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new is,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new is,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?yi:vi,a=_.stencil?fi:si);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new To(d.textureWidth,d.textureHeight,{format:_i,type:ni,depthTexture:new Lc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new To(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new J,te=new J;function ne(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;re(O,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,O,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ia*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Qu,o.layers.enable(n),o.viewport=new Co,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new zc,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new Ed;P.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Im=new Oo,Lm=new Y;Lm.set(-1,0,0,0,1,0,0,0,1);function Rm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,du(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Lm),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zm(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Bm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vm=null;function Hm(){return Vm===null&&(Vm=new jc(Bm,16,16,Si,li),Vm.name=`DFG_LUT`,Vm.minFilter=$r,Vm.magFilter=$r,Vm.wrapS=Jr,Vm.wrapT=Jr,Vm.generateMipmaps=!1,Vm.needsUpdate=!0),Vm}var Um=class{constructor(e={}){let{canvas:t=Ta(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ni}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([wi,Ci,xi]),g=new Set([ni,si,ai,fi,ui,di]),_=new Uint32Array(4),v=new Int32Array(4),y=new J,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ha;let j=0,M=0,N=null,ee=-1,te=null,ne=new Co,re=new Co,ie=null,ae=new Z(0),oe=0,P=t.width,se=t.height,ce=1,F=null,le=null,ue=new Co(0,0,P,se),I=new Co(0,0,P,se),de=!1,fe=new Fc,pe=!1,L=!1,me=new Oo,he=new J,ge=new Co,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return N===null?ce:1}let R=n;function be(e,n){return t.getContext(e,n)}let xe,Se,z,Ce,B,V,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,H,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),R===null){let t=`webgl2`;if(R=be(t,e),R===null)throw be(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ve()}catch(e){throw t.removeEventListener(`webglcontextlost`,H,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),G(`WebGLRenderer: `+e.message),e}function Ve(){xe=new sf(R),xe.init(),Re=new jm(R,xe),Se=new Fd(R,xe,e,Re),z=new km(R,xe),Se.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),Ce=new uf(R),B=new lm,V=new Am(R,xe,z,B,Se,Re,Ce),we=new of(T),Te=new Dd(R),ze=new Nd(R,Te),Ee=new cf(R,Te,Ce,ze),De=new ff(R,Ee,Te,ze,Ce),Fe=new df(R,Se,V),Me=new Id(B),Oe=new cm(T,we,xe,Se,ze,Me),ke=new Rm(T,B),Ae=new pm,je=new bm(xe),Pe=new Md(T,we,z,De,p,s),Ne=new Om(T,De,Se),Be=new zm(R,Ce,Se,z),Ie=new Pd(R,xe,Ce),Le=new lf(R,xe,Ce),Ce.programs=Oe.programs,T.capabilities=Se,T.extensions=xe,T.properties=B,T.renderLists=Ae,T.shadowMap=Ne,T.state=z,T.info=Ce}m!==1009&&(w=new mf(m,t.width,t.height,o,r,i));let He=new Fm(T,R);this.xr=He,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(P,se,!1))},this.getSize=function(e){return e.set(P,se)},this.setSize=function(e,n,r=!0){if(He.isPresenting){W(`WebGLRenderer: Can't change size while VR device is presenting.`);return}P=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(P*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){P=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(ue)},this.setViewport=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),z.viewport(ne.copy(ue).multiplyScalar(ce).round())},this.getScissor=function(e){return e.copy(I)},this.setScissor=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),z.scissor(re.copy(I).multiplyScalar(ce).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(e){z.setScissorTest(de=e)},this.setOpaqueSort=function(e){F=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,H,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Pe.dispose(),Ae.dispose(),je.dispose(),B.dispose(),we.dispose(),De.dispose(),ze.dispose(),Be.dispose(),Oe.dispose(),He.dispose(),He.removeEventListener(`sessionstart`,Ze),He.removeEventListener(`sessionend`,Qe),$e.stop()};function H(e){e.preventDefault(),Da(`WebGLRenderer: Context Lost.`),E=!0}function Ue(){Da(`WebGLRenderer: Context Restored.`),E=!1;let e=Ce.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;Ve(),Ce.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function We(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),B.remove(e)}function qe(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Te.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*ye()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Je(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),pe===!0&&Me.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),L=this.localClippingEnabled,pe=Me.init(this.clippingPlanes,L),pe===!0&&Me.setGlobalState(this.clippingPlanes,t),D!==null&&Ne.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Je(o,n,t,e),r.add(o)}else Je(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ye=null;function Xe(e){Ye&&Ye(e)}function Ze(){$e.stop()}function Qe(){$e.start()}let $e=new Ed;$e.setAnimationLoop(Xe),typeof self<`u`&&$e.setContext(self),this.setAnimationLoop=function(e){Ye=e,He.setAnimationLoop(e),e===null?$e.stop():$e.start()},He.addEventListener(`sessionstart`,Ze),He.addEventListener(`sessionend`,Qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=He.enabled===!0&&He.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(t),t=He.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=je.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),fe.setFromProjectionMatrix(me,xa,t.reversedDepth),L=this.localClippingEnabled,pe=Me.init(this.clippingPlanes,L),b=Ae.get(e,S.length),b.init(),S.push(b),He.enabled===!0&&He.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&et(e,t,-1/0,T.sortObjects)}et(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(F,le),ve=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ve&&Pe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Me.beginShadows();let i=x.state.shadowsArray;if(Ne.render(i,e,t),pe===!0&&Me.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];nt(n,r,e,a)}ve&&Pe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];tt(b,e,n,n.viewport)}}else r.length>0&&nt(n,r,e,t),ve&&Pe.render(e),tt(b,e,t)}N!==null&&M===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),ze.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),pe===!0&&Me.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function et(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(fe)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let i=De.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ge.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(fe))){let i=De.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ge.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ge.z,s,t)}}else a.visible&&b.push(e,i,a,n,ge.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)et(i[e],t,n,r)}function tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),pe===!0&&Me.setGlobalState(T.clippingPlanes,n),r&&z.viewport(ne.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new To(1,1,{generateMipmaps:!0,type:e?li:ni,minFilter:ti,samples:Math.max(4,Se.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:X.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),ve&&Pe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),pe===!0&&Me.setGlobalState(T.clippingPlanes,r),rt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e,t,n){t.isScene!==!0&&(t=_e);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=we.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=Oe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Oe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Me.uniform),st(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=xp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function lt(e,t,n,r,i){t.isScene!==!0&&(t=_e),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:X.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=we.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=x.state.lights;if(pe===!0&&(L===!0||e!==te)){let t=e===te&&r.id===ee;Me.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Me.numPlanes||v.numIntersection!==Me.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(R,`projectionMatrix`,e.projectionMatrix),O.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(R,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&O.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&O.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&O.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&O.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){O.setOptional(R,i,`bindMatrix`),O.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(O.setOptional(R,i,`batchingTexture`),O.setValue(R,`batchingTexture`,i._matricesTexture,V),O.setOptional(R,i,`batchingIdTexture`),O.setValue(R,`batchingIdTexture`,i._indirectTexture,V),O.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Fe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Hm()),w){if(O.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(k,E),a&&r.fog===!0&&ke.refreshFogUniforms(k,a),ke.refreshMaterialUniforms(k,r,ce,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}xp.upload(R,ot(v),k,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(xp.upload(R,ot(v),k,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(R,`center`,i.center),O.setValue(R,`modelViewMatrix`,i.modelViewMatrix),O.setValue(R,`normalMatrix`,i.normalMatrix),O.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,S),Be.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,z.viewport(ne),z.scissor(re),z.setScissorTest(ie),ee=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(ue).multiplyScalar(ce).floor(),re.copy(I).multiplyScalar(ce).floor(),ie=de;if(n!==0&&(r=O),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(ne),z.scissor(re),z.setScissorTest(ie),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function ft(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Se.textureFormatReadable(e.format),t.__typeReadable=Se.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),a)}finally{let e=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Re.convert(l),Re.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Aa(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Re.convert(t.format),_=Re.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,k),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,z.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X._getDrawingBufferColorSpace(e),t.unpackColorSpace=X._getUnpackColorSpace()}},Wm={type:`change`},Gm={type:`start`},Km={type:`end`},qm=new hc,Jm=new cc,Ym=Math.cos(70*io.DEG2RAD),Xm=new J,Zm=2*Math.PI,Qm={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$m=1e-6,eh=class extends Cd{constructor(e,t=null){super(e,t),this.state=Qm.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ao,this._lastTargetPosition=new J,this._quat=new ao().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sd,this._sphericalDelta=new Sd,this._scale=1,this._panOffset=new J,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new J,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nh.bind(this),this._onPointerDown=th.bind(this),this._onPointerUp=rh.bind(this),this._onContextMenu=uh.bind(this),this._onMouseWheel=oh.bind(this),this._onKeyDown=sh.bind(this),this._onTouchStart=ch.bind(this),this._onTouchMove=lh.bind(this),this._onMouseDown=ih.bind(this),this._onMouseMove=ah.bind(this),this._interceptControlDown=dh.bind(this),this._interceptControlUp=fh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Qm.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wm),this.update(),this.state=Qm.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Xm.copy(t).sub(this.target),Xm.applyQuaternion(this._quat),this._spherical.setFromVector3(Xm),this.autoRotate&&this.state===Qm.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Zm:n>Math.PI&&(n-=Zm),r<-Math.PI?r+=Zm:r>Math.PI&&(r-=Zm),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Xm.setFromSpherical(this._spherical),Xm.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xm),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Xm.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new J(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new J(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Xm.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(qm.origin.copy(this.object.position),qm.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qm.direction))<Ym?this.object.lookAt(this.target):(Jm.setFromNormalAndCoplanarPoint(this.object.up,this.target),qm.intersectPlane(Jm,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>$m||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$m||this._lastTargetPosition.distanceToSquared(this.target)>$m?(this.dispatchEvent(Wm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Zm/60/60*this.autoRotateSpeed:Zm/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xm.setFromMatrixColumn(t,0),Xm.multiplyScalar(-e),this._panOffset.add(Xm)}_panUp(e,t){this.screenSpacePanning===!0?Xm.setFromMatrixColumn(t,1):(Xm.setFromMatrixColumn(t,0),Xm.crossVectors(this.object.up,Xm)),Xm.multiplyScalar(e),this._panOffset.add(Xm)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Xm.copy(r).sub(this.target);let i=Xm.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zm*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zm*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zm*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zm*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zm*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function th(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function nh(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function rh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Km),this.state=Qm.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function ih(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Qm.DOLLY;break;case Gr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qm.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qm.ROTATE}break;case Gr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Qm.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Qm.PAN}break;default:this.state=Qm.NONE}this.state!==Qm.NONE&&this.dispatchEvent(Gm)}function ah(e){switch(this.state){case Qm.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Qm.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Qm.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function oh(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Qm.NONE&&(e.preventDefault(),this.dispatchEvent(Gm),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Km))}function sh(e){this.enabled!==!1&&this._handleKeyDown(e)}function ch(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Qm.TOUCH_ROTATE;break;case Kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Qm.TOUCH_PAN;break;default:this.state=Qm.NONE}break;case 2:switch(this.touches.TWO){case Kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Qm.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Qm.TOUCH_DOLLY_ROTATE;break;default:this.state=Qm.NONE}break;default:this.state=Qm.NONE}this.state!==Qm.NONE&&this.dispatchEvent(Gm)}function lh(e){switch(this._trackPointer(e),this.state){case Qm.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Qm.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Qm.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Qm.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Qm.NONE}}function uh(e){this.enabled!==!1&&e.preventDefault()}function dh(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function fh(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var ph=1500,mh=class{host;renderer;scene=new us;camera;controls;root=new ns;mats=new Map;dirty=!0;needsRebuild=!0;mode=`orbit`;walk={x:0,z:0,yaw:0,pitch:-.05};move={fwd:0,turn:0};lastT=0;down=null;userMoved=!1;onModeChange=()=>{};constructor(e){this.host=e,this.renderer=new Um({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=ha,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.className=`view3d-canvas`,e.appendChild(this.renderer.domElement),this.scene.background=new Z(`#e9edf1`),this.camera=new Qu(50,1,.05,500),this.camera.position.set(8,10,12);let t=new Bu(`#ffffff`,`#b9a98f`,1.6);this.scene.add(t);let n=new td(`#fff6e8`,1.6);n.position.set(6,12,4),this.scene.add(n);let r=new td(`#dfe8ff`,.5);r.position.set(-8,6,-6),this.scene.add(r);let i=new Oc(new iu(400,400),new _u({color:`#dcdfe2`,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=-.002,this.scene.add(i),this.root.scale.setScalar(.001),this.scene.add(this.root),this.controls=new eh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.maxPolarAngle=Math.PI*.495,this.controls.minDistance=1,this.controls.maxDistance=120,this.controls.addEventListener(`change`,()=>this.dirty=!0),this.controls.addEventListener(`start`,()=>this.userMoved=!0),new ResizeObserver(()=>this.resize()).observe(e),this.bindInput(),U.on(e=>{(e===`project`||e===`selection`||e===`view`)&&(this.needsRebuild=!0),e===`open`&&(this.animating=!0)}),requestAnimationFrame(e=>this.loop(e))}resize(){let e=this.host.getBoundingClientRect();e.width&&e.height&&(this.renderer.setSize(e.width,e.height,!1),this.renderer.domElement.style.width=`${e.width}px`,this.renderer.domElement.style.height=`${e.height}px`,this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix(),this.pendingFrame&&this.frame(),this.dirty=!0)}get visible(){return this.host.offsetParent!==null&&this.host.clientWidth>0}loop(e){requestAnimationFrame(e=>this.loop(e));let t=Math.min(.1,(e-this.lastT)/1e3);if(this.lastT=e,!this.visible||!U.project){this.animating&&U.project&&this.settleOpen();return}if(this.needsRebuild&&(this.rebuild(),this.needsRebuild=!1,this.dirty=!0),this.animating&&this.stepOpen(t),this.mode===`orbit`)this.controls.update()&&(this.dirty=!0);else if(this.move.fwd||this.move.turn){this.walk.yaw+=this.move.turn*t*1.6;let e=1400*t*this.move.fwd;this.walk.x+=Math.sin(this.walk.yaw)*e*-1,this.walk.z+=Math.cos(this.walk.yaw)*e*-1,this.applyWalk()}this.dirty&&=(this.renderer.render(this.scene,this.camera),!1)}requestRender(){this.dirty=!0}pendingFrame=!1;frame(e){let t=U.project;if(!t)return;if(e===void 0&&!this.visible){this.pendingFrame=!0;return}this.pendingFrame=!1;let n=qe(t,!0)??{minX:0,minY:0,maxX:5460,maxY:3640},r=(n.minX+n.maxX)/2e3,i=(n.minY+n.maxY)/2e3,a=(n.maxX-n.minX)/1e3,o=(n.maxY-n.minY)/1e3,s=Math.max(2.5,Math.hypot(a,o,2.4)/2);this.camera.aspect=e??this.host.clientWidth/Math.max(1,this.host.clientHeight),this.camera.updateProjectionMatrix();let c=this.camera.fov*Math.PI/180,l=2*Math.atan(Math.tan(c/2)*this.camera.aspect),u=s/Math.sin(Math.min(c,l)/2)*1.02,d=new J(.28,.85,.75).normalize();this.controls.target.set(r,.8,i),this.camera.position.set(r+d.x*u,.8+d.y*u,i+d.z*u),this.controls.update(),this.dirty=!0}setMode(e){if(this.mode!==e){if(this.mode=e,e===`walk`){this.controls.enabled=!1;let e=U.selection,t=e?.type===`room`?oe(U.rooms,e):void 0;t||=[...U.rooms].sort((e,t)=>t.areaMm2-e.areaMm2)[0];let n=t?.centroid??{x:this.controls.target.x*1e3,y:this.controls.target.z*1e3};this.walk={x:n.x,z:n.y,yaw:this.walk.yaw,pitch:-.05},this.camera.fov=70,this.applyWalk()}else this.controls.enabled=!0,this.camera.fov=50,this.camera.updateProjectionMatrix(),this.frame();this.needsRebuild=!0,this.onModeChange()}}applyWalk(){let e=new J(this.walk.x/1e3,ph/1e3,this.walk.z/1e3);this.camera.position.copy(e);let t=new J(-Math.sin(this.walk.yaw)*Math.cos(this.walk.pitch),Math.sin(this.walk.pitch),-Math.cos(this.walk.yaw)*Math.cos(this.walk.pitch));this.camera.lookAt(e.clone().add(t)),this.camera.updateProjectionMatrix(),this.dirty=!0}setMove(e,t=0){this.move={fwd:e,turn:t}}bindInput(){let e=this.renderer.domElement,t=null,n=null,r=!1;e.addEventListener(`pointerdown`,i=>{if(t!==null){r=!0;return}t=i.pointerId,r=!1,n={x:i.clientX,y:i.clientY},this.mode===`walk`&&(e.setPointerCapture(i.pointerId),this.down={x:i.clientX,y:i.clientY,yaw:this.walk.yaw,pitch:this.walk.pitch})}),e.addEventListener(`pointermove`,e=>{e.pointerId===t&&this.mode===`walk`&&this.down&&(this.walk.yaw=this.down.yaw+(e.clientX-this.down.x)*.005,this.walk.pitch=Math.max(-1.2,Math.min(1.2,this.down.pitch+(e.clientY-this.down.y)*.004)),this.applyWalk())});let i=(e,i)=>{e.pointerId===t&&(!i&&!r&&n&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<5&&this.pick(e),t=null,n=null,this.down=null)};e.addEventListener(`pointerup`,e=>i(e,!1)),e.addEventListener(`pointercancel`,e=>i(e,!0)),e.addEventListener(`wheel`,e=>{if(this.mode!==`walk`)return;e.preventDefault();let t=-e.deltaY*2;this.walk.x+=-Math.sin(this.walk.yaw)*t,this.walk.z+=-Math.cos(this.walk.yaw)*t,this.applyWalk()},{passive:!1}),window.addEventListener(`keydown`,e=>{if(this.mode!==`walk`||!this.visible)return;let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`SELECT`&&t.tagName!==`TEXTAREA`)&&((e.key===`ArrowUp`||e.key===`w`)&&(this.move.fwd=1),(e.key===`ArrowDown`||e.key===`s`)&&(this.move.fwd=-1),(e.key===`ArrowLeft`||e.key===`a`)&&(this.move.turn=1),(e.key===`ArrowRight`||e.key===`d`)&&(this.move.turn=-1))}),window.addEventListener(`keyup`,e=>{[`ArrowUp`,`ArrowDown`,`w`,`s`].includes(e.key)&&(this.move.fwd=0),[`ArrowLeft`,`ArrowRight`,`a`,`d`].includes(e.key)&&(this.move.turn=0)})}pick(e){let t=this.renderer.domElement.getBoundingClientRect(),n=new q((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new yd;r.setFromCamera(n,this.camera);let i=r.intersectObjects(this.root.children,!0),a=U.multiMode||e.ctrlKey||e.metaKey||e.shiftKey;for(let e of i){let t=e.object;for(;t&&!t.userData.sel;)t=t.parent;if(t?.userData.sel){let e=t.userData.sel,n=U.project,r=e&&e.type!==`room`&&n?[...n.walls,...n.openings,...n.furniture].find(t=>t.id===e.id):void 0;if(r?.locked||r&&`wallId`in r&&n?.walls.find(e=>e.id===r.wallId)?.locked)continue;if(a){e&&e.type!==`room`&&U.toggleSelected({type:e.type,id:e.id});return}let i=!!r&&`wallId`in r&&xe(r);if(i&&e?.type===`opening`&&!U.multi&&U.selection?.type===`opening`&&U.selection.id===e.id){U.toggleOpen(e.id);return}U.select(e),i&&!this.openHintShown&&(this.openHintShown=!0,I(`もう一度タップすると、開け閉めできます`));return}}a||U.select(null)}mat(e,t={},n=``){let r=e+n,i=this.mats.get(r);return i||(i=new _u({color:e,roughness:.85,metalness:0,...t}),this.mats.set(r,i)),i}selMat(e){let t=`sel:${e.uuid}`,n=this.mats.get(t);return n||(n=e.clone(),n.emissive=new Z(`#2f7d6d`),n.emissiveIntensity=.45,this.mats.set(t,n)),n}clear(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.root.clear(),this.movers.clear()}movers=new Map;openFrac=new Map;animating=!1;openHintShown=!1;settleOpen(){let e=U.project;if(e){for(let[t,n]of this.movers){let r=e.openings.find(e=>e.id===t);if(!r)continue;let i=+!!Se(r);this.openFrac.set(t,i),n(i)}this.animating=!1}}stepOpen(e){let t=U.project;if(!t)return;let n=!1;for(let[r,i]of this.movers){let a=t.openings.find(e=>e.id===r);if(!a)continue;let o=+!!Se(a),s=this.openFrac.get(r)??o;s!==o&&(s=o>s?Math.min(o,s+e*3):Math.max(o,s-e*3),this.openFrac.set(r,s),i(s),n=!0)}this.dirty=!0,n||(this.animating=!1)}builtFor=null;rebuild(){let e=U.project;if(!e)return;e.id!==this.builtFor&&(this.openFrac.clear(),this.animating=!1,this.builtFor=e.id),this.clear(),!this.userMoved&&this.mode===`orbit`&&this.frame();let t=new Set(U.selectedRefs().map(e=>e.id)),n=U.showCeiling;for(let t of U.rooms)this.addRoom(t,e,n);for(let n of e.walls)n.hidden||this.addWall(n,e,t.has(n.id));for(let n of e.openings){let r=e.walls.find(e=>e.id===n.wallId);r&&!r.hidden&&!n.hidden&&this.addOpening(n,r,t.has(n.id))}for(let n of e.furniture)n.hidden||this.addFurniture(n,t.has(n.id))}forceRebuild(){this.needsRebuild=!0}addRoom(e,t,n){let r=U.selection?.type===`room`&&O(U.selection,e.polygon),i=new au(new yl(e.polygon.map(e=>new q(e.x,-e.y))));i.rotateX(-Math.PI/2);let a=this.mat(`#cdb08a`,{roughness:.7}),o=new Oc(i,r?this.selMat(a):a);if(o.position.y=1,o.userData.sel={type:`room`,x:Math.round(e.centroid.x),y:Math.round(e.centroid.y)},this.root.add(o),n){let n=new au(new yl(e.polygon.map(e=>new q(e.x,e.y))));n.rotateX(Math.PI/2);let r=new Oc(n,this.mat(`#f7f5f0`,{roughness:.95}));r.position.y=t.settings.ceilingH,this.root.add(r)}}addWall(e,t,n){let r=ve(e,t.walls.filter(e=>!e.hidden)),i=ye(e,t.openings.filter(e=>!e.hidden),r),a=he(e),o=-me(e)*Math.PI/180,s=this.mat(`#f3f0ea`),c=[s,s,this.mat(`#4a4f57`),s,s,s].map(e=>n?this.selMat(e):e);for(let t of i){let n=t.s1-t.s0,r=t.z1-t.z0;if(n<=0||r<=0)continue;let i=new Oc(new Bc(n,r,e.d),c),s=(t.s0+t.s1)/2;i.position.set(e.x1+a.x*s,(t.z0+t.z1)/2,e.y1+a.y*s),i.rotation.y=o,i.userData.sel={type:`wall`,id:e.id},this.root.add(i)}}addOpening(e,t,n){let r=new ns;r.userData.sel={type:`opening`,id:e.id};let i=he(t),a=ge(t),o=-me(t)*Math.PI/180,s=_e(t,e.t),c=e=>n?this.selMat(e):e,l=(e,t,n,i,a,s,l,u=o)=>{let d=new Oc(new Bc(e,t,n),c(i));return d.position.set(a,s,l),d.rotation.y=u,r.add(d),d},u=(e,t,n,r,i,a,o,s)=>{let l=new Oc(new Bc(t,n,r),c(i));return l.position.set(a,o,s),e.add(l),l},d=(t,n,i)=>{let o=new ns;return o.position.set(t.x,e.z,t.y),o.rotation.y=-Math.atan2(n.y,n.x),r.add(o),{pivot:o,zSign:Math.sign(-n.y*a.x*i+n.x*a.y*i)||1}},f=this.mat(`#8a7a66`),p=this.mat(`#c49a6c`,{roughness:.6}),m=null;if(e.kind===`door`){let n=e.flipSide?-1:1,r=e.flipHinge?e.t+e.w/2:e.t-e.w/2,o=e.flipHinge?-1:1,s=_e(t,r),{pivot:c,zSign:l}=d({x:s.x+a.x*n*(t.d/2),y:s.y+a.y*n*(t.d/2)},{x:i.x*o,y:i.y*o},n),f=new ns;c.add(f);let h=e.w-20,g=e.h-10;u(f,h,g,36,p,h/2+10,g/2,-l*18),u(f,120,20,70,this.mat(`#3d3d3d`,{metalness:.6,roughness:.3}),h-60,950,-l*18),m=e=>f.rotation.y=-l*e*(80*Math.PI/180)}else if(e.kind===`folding`){let n=e.leaves===4?4:2,r=e.flipSide?-1:1,o=(n===4?e.w/2:e.w)/2,s=e.h-10,c=Math.max(0,t.d/2-25),l=[],f=(e,n)=>{let f=_e(t,e),m={x:f.x+a.x*r*c,y:f.y+a.y*r*c},{pivot:h,zSign:g}=d(m,{x:i.x*n,y:i.y*n},r),_=new ns;h.add(_),u(_,Math.max(10,o-6),s,30,p,o/2,s/2,0);let v=new ns;v.position.set(o,0,0),_.add(v),u(v,Math.max(10,o-6),s,30,p,o/2,s/2,0),l.push(e=>{let t=80*Math.PI/180*e;_.rotation.y=-g*t,v.rotation.y=g*2*t})};n===4?(f(e.t-e.w/2,1),f(e.t+e.w/2,-1)):e.flipHinge?f(e.t+e.w/2,-1):f(e.t-e.w/2,1),m=e=>l.forEach(t=>t(e))}else if(e.kind===`sliding`){let n=Math.min(60,e.w*.05),r=e.w/2+n,i=t.d/6,o=e.flipSide?-1:1,s=this.mat(`#efe9dc`,{roughness:.7,transparent:!0,opacity:.92},`sl`),c=e.t-e.w/2+r/2,u=e.t+e.w/2-r/2,d=_e(t,c);l(r,e.h-10,30,s,d.x+a.x*i*o,e.z+e.h/2,d.y+a.y*i*o);let f=l(r,e.h-10,30,s,0,e.z+e.h/2,0);m=n=>{let r=_e(t,u-(u-c)*n);f.position.set(r.x-a.x*i*o,e.z+e.h/2,r.y-a.y*i*o)}}else if(e.kind===`singleSliding`){let n=e.flipSide?-1:1,r=e.flipHinge?-1:1,i=n*(t.d/2+20),o=l(e.w+60,e.h-10,30,p,0,e.z+(e.h-10)/2,0);m=n=>{let s=_e(t,e.t+r*e.w*n);o.position.set(s.x+a.x*i,e.z+(e.h-10)/2,s.y+a.y*i)}}else{let n=this.mat(`#a8d4f0`,{transparent:!0,opacity:.28,roughness:.05,metalness:.1,depthWrite:!1},`glass`);l(e.w,e.h,8,n,s.x,e.z+e.h/2,s.y),l(e.w,40,t.d*.6,f,s.x,e.z+20,s.y),l(e.w,40,t.d*.6,f,s.x,e.z+e.h-20,s.y);let r=_e(t,e.t-e.w/2+20),i=_e(t,e.t+e.w/2-20);l(40,e.h,t.d*.6,f,r.x,e.z+e.h/2,r.y),l(40,e.h,t.d*.6,f,i.x,e.z+e.h/2,i.y),l(28,e.h,t.d*.3,f,s.x,e.z+e.h/2,s.y)}if(m&&n&&!U.multi){let n=new Oc(new Bc(e.w,e.h,t.d),f);n.visible=!1,n.position.set(s.x,e.z+e.h/2,s.y),n.rotation.y=o,r.add(n)}if(m){let t=+!!Se(e),n=this.openFrac.get(e.id)??t;this.openFrac.set(e.id,n);let r=m,i=e=>r(e*e*(3-2*e));i(n),this.movers.set(e.id,i),n!==t&&(this.animating=!0)}this.root.add(r)}addFurniture(e,t){let n=pe(e.catalogId),r=hh(n?.shape??`box`,e.w,e.d,e.h,n?.color??`#b0a898`,(e,n)=>{let r=this.mat(e,n);return t?this.selMat(r):r});r.position.set(e.x,e.z,e.y),r.rotation.y=-e.rot*Math.PI/180,r.userData.sel={type:`furniture`,id:e.id},this.root.add(r)}capture(e=1600,t=1e3){this.needsRebuild&&=(this.rebuild(),!1),this.settleOpen();let n=this.renderer.getSize(new q),r=this.renderer.getPixelRatio(),i=this.camera.aspect;this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let a=!this.userMoved&&this.mode===`orbit`;a&&this.frame(e/t),this.renderer.render(this.scene,this.camera);let o=document.createElement(`canvas`);return o.width=e,o.height=t,o.getContext(`2d`).drawImage(this.renderer.domElement,0,0),this.renderer.setPixelRatio(r),this.renderer.setSize(n.x,n.y,!1),this.camera.aspect=i,this.camera.updateProjectionMatrix(),a&&this.frame(),this.dirty=!0,o}};function hh(e,t,n,r,i,a){let o=new ns,s=(e,t,n,r,s,c,l=i,u)=>{if(e<=0||t<=0||n<=0)return;let d=new Oc(new Bc(e,t,n),a(l,u));d.position.set(r,s+t/2,c),o.add(d)},c=(e,t,n,r,i,s,c=e)=>{let l=new Oc(new Vc(c,e,t,20),a(s));l.position.set(n,r+t/2,i),o.add(l)},l=(e,r,i,a)=>{for(let o of[-1,1])for(let c of[-1,1])s(i,e,i,o*(t/2-r-i/2),0,c*(n/2-r-i/2),a)},u=gh(i,-.25);switch(e){case`bed`:{let e=r*.3;s(t,e,n,0,0,0,`#8d7155`),s(t-30,r*.22,n-80,0,e,40,i),s(t,r,60,0,0,-n/2+30,`#8d7155`),s(t*.7,110,380,0,e+r*.22,-n/2+280,`#ffffff`),s(t-20,40,n*.55,0,e+r*.22,n*.18,gh(i,-.1));break}case`sofa`:{let e=r*.5,a=Math.min(220,n*.25),o=Math.min(160,t*.1);s(t,e*.55,n,0,0,0,u),s(t-o*2,e*.45,n-a,0,e*.55,a/2,i),s(t,r,a,0,0,-n/2+a/2,i),s(o,r*.72,n,-t/2+o/2,0,0,i),s(o,r*.72,n,t/2-o/2,0,0,i);break}case`table`:case`desk`:s(t,30,n,0,r-30,0,i),l(r-30,30,45,u),e===`desk`&&s(t-120,150,30,0,r-30-150,-n/2+60,u);break;case`chair`:{let e=Math.min(450,r*.55);s(t,40,n,0,e-40,0,i),l(e-40,20,35,u),s(t,r-e,35,0,e,-n/2+18,i);break}case`shelf`:{s(20,r,n,-t/2+10,0,0,i),s(20,r,n,t/2-10,0,0,i),s(t,r,10,0,0,-n/2+5,u);let e=Math.max(2,Math.round(r/380));for(let a=0;a<=e;a++)s(t-40,20,n,0,Math.min(r-20,r/e*a),0,i);break}case`tv`:{s(t,r,n,0,0,0,i);let e=Math.min(t*.85,1450);s(e*.25,30,200,0,r,-n/2+150,`#222`),s(e,e*.57,40,0,r+30,-n/2+150,`#1b1d20`,{roughness:.3});break}case`fridge`:s(t,r,n,0,0,0,i,{roughness:.4}),s(t*.98,6,4,0,r*.62,n/2+2,`#b8bec4`),s(30,300,30,t/2-60,r*.7,n/2+15,`#9aa1a8`);break;case`kitchen`:s(t,r-30,n-40,0,0,20,`#d9d4c8`),s(t,30,n,0,r-30,0,i,{roughness:.35}),s(t*.22,10,n*.55,-t*.05,r-5,0,`#9aa1a8`,{metalness:.5,roughness:.3}),s(t*.2,6,n*.6,t*.3,r,0,`#222`);break;case`plant`:{c(t*.28,r*.3,0,0,0,`#8b6f55`,t*.33);let e=new Oc(new ru(t*.5,1),a(i,{flatShading:!0}));e.position.set(0,r*.3+r*.7/2,0),e.scale.set(1,r*.7/t,1),o.add(e);break}case`toilet`:s(t*.9,r*.55,n*.25,0,r*.45,-n/2+n*.125,i),c(t*.45,r*.52,0,0,n*.12,i,t*.5);break;case`bath`:{let e=n*.5;s(t,40,n,0,0,0,`#dfe6ea`),s(t,550,60,0,0,-n/2+30,i),s(t,550,60,0,0,-n/2+e-30,i),s(60,550,e,-t/2+30,0,-n/2+e/2,i),s(60,550,e,t/2-30,0,-n/2+e/2,i),s(t-120,20,e-120,0,330,-n/2+e/2,`#9fd0ea`,{transparent:!0,opacity:.6});break}case`rug`:s(t,Math.max(r,8),n,0,0,0,i);break;default:s(t,r,n,0,0,0,i),s(t*.96,4,4,0,r*.5,n/2,u)}return o}function gh(e,t){let n=new Z(e),r={h:0,s:0,l:0};return n.getHSL(r),n.setHSL(r.h,r.s,Math.max(0,Math.min(1,r.l+t))),`#${n.getHexString()}`}function _h(e){try{return Object.assign(new mh(e),{available:!0})}catch{let t=document.createElement(`div`);return t.className=`view3d-unavailable`,t.textContent=`この端末・ブラウザでは3D表示（WebGL）を使えません。2Dの作図と面積の確認はそのまま使えます。`,e.appendChild(t),{available:!1,mode:`orbit`,userMoved:!1,onModeChange:()=>{},setMode:()=>{},frame:()=>{},requestRender:()=>{},setMove:()=>{},capture:(e=1600,t=1e3)=>{let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);return r.fillStyle=`#e9edf1`,r.fillRect(0,0,e,t),r.fillStyle=`#555b63`,r.font=`32px sans-serif`,r.textAlign=`center`,r.fillText(`この端末では3D表示を使えません`,e/2,t/2),n}}}}var vh=new Set([`g:rooms`,`g:walls`,`g:furniture`,`g:underlay`]),yh=class{el;list;search;closed=new Set;opened=new Set;query=``;renaming=null;raf=0;sig=``;rows=[];lastSelKey=void 0;sortMode=!1;sortBtn;note;press=null;drag=null;indicator;scrollRaf=0;suppressClick=!1;selectBtn;bar;anchorKey=null;fromList=!1;listPicked=!1;revealKey=null;onPicked=()=>{};onFrame=()=>{};onClose=()=>{};constructor(){this.search=P(`input`,{class:`input h-search`,type:`search`,placeholder:`名前で探す`,"aria-label":`ヒエラルキーを名前で探す`,oninput:()=>{this.query=this.search.value,this.schedule()}}),this.list=P(`div`,{class:`h-list`,role:`tree`,tabindex:0,"aria-label":`図面の中の物`}),this.indicator=P(`div`,{class:`h-drop`,hidden:!0}),this.sortBtn=P(`button`,{class:`btn small h-sort`,title:`並び替え（≡ をドラッグ）`,onclick:()=>this.setSortMode(!this.sortMode)},F(`sort`,15),`並び替え`),this.note=P(`p`,{class:`h-note`,hidden:!0}),this.selectBtn=P(`button`,{class:`btn small h-sort h-select`,title:`複数選択（タップで足す・外す）`,onclick:()=>this.setSelectMode(!U.multiMode)},F(`check`,15),`選択`),this.bar=P(`div`,{class:`h-bar`,hidden:!0,role:`toolbar`,"aria-label":`選んだ物をまとめて操作`}),this.el=P(`aside`,{class:`hierarchy`,"aria-label":`ヒエラルキー`,hidden:!0},P(`div`,{class:`h-head`},F(`layers`,18),P(`strong`,null,`ヒエラルキー`),P(`span`,{class:`spacer`}),this.selectBtn,this.sortBtn,P(`button`,{class:`icon-btn h-close`,title:`閉じる`,"aria-label":`ヒエラルキーを閉じる`,onclick:()=>this.onClose()},F(`close`,18))),P(`div`,{class:`h-search-wrap`},F(`search`,16),this.search),this.note,this.list,this.bar),this.bindKeys(),this.bindDrag(),U.on(e=>{e===`project`&&this.drag&&(this.press=null,this.endDrag(!1)),e===`selection`&&(this.revealSelection(),this.fromList||(this.anchorKey=this.multiKey(this.selectedKey()))),(e===`project`||e===`selection`||e===`underlay`)&&this.schedule()})}reveal(){this.lastSelKey=void 0,this.sig=``,this.schedule()}get visible(){return!this.el.hidden&&this.el.offsetParent!==null}schedule(){this.raf||=requestAnimationFrame(()=>{this.raf=0,this.render()})}revealSelection(){let e=U.selection,t=U.project;if(e&&t){if(e.type===`room`)this.closed.delete(`g:rooms`);else if(e.type===`furniture`)this.closed.delete(`g:furniture`);else if(this.closed.delete(`g:walls`),e.type===`opening`){let n=t.openings.find(t=>t.id===e.id);n&&(this.opened.add(`wall:${n.wallId}`),this.closed.delete(`wall:${n.wallId}`))}}}viaList(e){this.fromList=!0,this.listPicked=!0;try{e()}finally{this.fromList=!1}}multiKey(e){return e&&/^(wall|opening|furniture):/.test(e)?e:null}resetForProject(){this.anchorKey=null,this.renaming=null,this.setSelectMode(!1)}selectedKey(){let e=U.selection;if(!e)return null;if(e.type===`room`){let t=oe(U.rooms,e);return t?`room:${t.key}`:null}return`${e.type}:${e.id}`}isOpen(e){return this.query.trim()?!0:e.ref===null?!this.closed.has(e.key)&&vh.has(e.key):this.opened.has(e.key)&&!this.closed.has(e.key)}render(){let e=U.project;if(!e||this.el.hidden||U.dragging||this.drag)return;let t=yt(_t(e,U.rooms,U.underlay?{visible:U.underlay.visible}:null),this.query),n=[],r=(e,t,i)=>{for(let a of e){let e=a.children.length>0||a.ref===null&&!this.query.trim(),o=e&&this.isOpen(a);n.push({node:a,parentKey:i,level:t,expandable:e,expanded:o}),o&&r(a.children,t+1,a.key)}};r(t,0,null);let i=this.selectedKey(),a=JSON.stringify([n.map(e=>[e.node.key,e.node.label,e.node.sub,e.node.hidden,e.node.locked,e.level,e.expanded,e.node.children.length]),i,[...U.selected],this.renaming,this.sortMode,U.multiMode]);if(a===this.sig)return;this.sig=a,this.rows=n;let o=this.list.contains(document.activeElement)||document.activeElement===this.list;this.list.replaceChildren(...n.map(e=>this.renderRow(e,i)),this.indicator),this.renderBar(),n.some(e=>e.node.ref)||this.list.append(P(`p`,{class:`h-empty`},this.query.trim()?`見つかりません`:`まだ何もありません。壁を描くとここに並びます`)),i!==this.lastSelKey&&(this.lastSelKey=i,i&&this.list.querySelector(`.h-row[data-key="${CSS.escape(i)}"]`)?.scrollIntoView({block:this.listPicked||U.multi?`nearest`:`center`})),this.listPicked=!1,this.revealKey&&=(this.list.querySelector(`.h-row[data-key="${CSS.escape(this.revealKey)}"]`)?.scrollIntoView({block:`nearest`}),null);let s=this.list.querySelector(`.h-rename`);s?(s.focus(),s.select()):o&&this.list.focus({preventScroll:!0})}renderRow(e,t){let n=e.node,r=n.ref===null,i=n.ref?.type===`wall`||n.ref?.type===`opening`||n.ref?.type===`furniture`,a=!r&&n.key===t,o=a||i&&U.selected.has(n.key),s=e=>t=>{t.stopPropagation(),e()},c=e.expandable?P(`button`,{class:`h-twisty`,"aria-label":e.expanded?`閉じる`:`開く`,tabindex:-1,onclick:s(()=>this.toggle(n,!e.expanded))},F(e.expanded?`chevD`:`chevR`,14)):P(`span`,{class:`h-twisty`}),l=this.renaming===n.key?P(`input`,{class:`input h-rename`,value:n.label,maxlength:40,"aria-label":`新しい名前`,onclick:e=>e.stopPropagation(),onkeydown:e=>{e.stopPropagation(),!(e.isComposing||e.keyCode===229)&&(e.key===`Enter`&&this.commitRename(n,e.target.value),e.key===`Escape`&&this.cancelRename())},onblur:e=>this.renaming===n.key&&this.commitRename(n,e.target.value)}):P(`span`,{class:`h-text`},P(`span`,{class:`h-label`},n.label),r?null:P(`span`,{class:`h-sub`},n.sub)),u=n.group!==`rooms`,d=n.group===`walls`||n.group===`furniture`,f=u?P(`button`,{class:`h-icon h-eye ${n.hidden?`off`:``}`,tabindex:-1,title:n.hidden?`表示する`:`隠す`,"aria-label":n.hidden?`表示する`:`隠す`,onclick:s(()=>this.toggleHidden(n))},F(n.hidden?`eyeOff`:`eye`,16)):null,p=d?P(`button`,{class:`h-icon h-lock ${n.locked?`on`:`off`}`,tabindex:-1,title:n.locked?`ロックを外す`:`ロックする（図面で選べなくする）`,"aria-label":n.locked?`ロックを外す`:`ロックする`,onclick:s(()=>this.toggleLocked(n))},F(n.locked?`lock`:`unlock`,15)):null,m=this.sortMode&&this.canDrag(e)?P(`span`,{class:`h-icon h-grip`,role:`button`,"aria-label":`${n.label}を並べ替える`,title:`ドラッグして並べ替え`},F(`grip`,18)):null,h=r?null:P(`button`,{class:`h-icon h-more`,tabindex:-1,title:`そのほかの操作`,"aria-label":`${n.label}の操作`,onclick:s(()=>this.openMenu(n))},F(`more`,16));return P(`div`,{class:`h-row ${r?`group`:``} ${o?`selected`:``} ${a&&U.multi?`active`:``} ${n.hidden?`is-hidden`:``} ${this.canDrag(e)?`draggable`:``} ${U.multiMode&&!r&&!i?`unpickable`:``}`,role:`treeitem`,"aria-level":e.level+1,"aria-selected":String(o),"aria-expanded":e.expandable?String(e.expanded):void 0,"data-key":n.key,title:r?void 0:`${n.label}　${n.sub}`,style:`padding-left:${4+e.level*14}px`,onclick:t=>{if(this.suppressClick)return void(this.suppressClick=!1);if(r)return this.toggle(n,!e.expanded);let a=n.ref,o=t.ctrlKey||t.metaKey;if(i&&a&&a.type!==`room`&&a.type!==`underlay`){if(t.shiftKey)return this.viaList(()=>this.rangeSelect(n.key,o));if(o||U.multiMode){this.viaList(()=>U.toggleSelected(a)),this.anchorKey=n.key;return}}else if(U.multiMode){I(`選択モードでは部屋・下絵は選べません（「完了」で終わります）`);return}this.anchorKey=i?n.key:null,this.viaList(()=>this.sortMode?this.pick(n,!1):this.pick(n))},ondblclick:()=>n.ref&&this.onFrame(n.ref)},c,U.multiMode&&i?P(`span`,{class:`h-check ${o?`on`:``}`,"aria-hidden":`true`},o?F(`check`,14):null):null,F(n.icon,16),l,r?P(`span`,{class:`h-count`},n.sub):null,m?null:p,m?null:f,m,h)}toggle(e,t){t?(this.closed.delete(e.key),this.opened.add(e.key)):(this.closed.add(e.key),this.opened.delete(e.key)),this.render()}pick(e,t=!0){let n=e.ref;if(!n||n.type===`underlay`)return;let r=n.type===`room`?{type:`room`,x:n.x,y:n.y}:{type:n.type,id:n.id};U.select(r),t&&!U.multiMode&&this.onPicked()}refsOf(e){let t=e=>e.ref&&(e.ref.type===`wall`||e.ref.type===`opening`||e.ref.type===`furniture`)?[e.ref]:[];return e.ref?t(e):e.children.flatMap(t)}toggleHidden(e){if(e.group===`underlay`)return U.toggleUnderlay();let t=e.ref;if(t?.type===`opening`){let e=U.p,n=e.openings.find(e=>e.id===t.id);if(!n)return;if(e.walls.find(e=>e.id===n.wallId)?.hidden){n.hidden&&U.setFlags([t],{hidden:!1}),I(`取り付けてある壁が隠れているため表示されません。先に壁を表示してください`);return}return U.setFlags([t],{hidden:!n.hidden})}U.setFlags(this.refsOf(e),{hidden:!e.hidden})}toggleLocked(e){U.setFlags(this.refsOf(e),{locked:!e.locked}),e.locked||I(e.ref?`「${e.label}」をロックしました。図面では選べません`:this.query.trim()?`見つかった${e.children.length}件をロックしました`:`${e.label}をすべてロックしました`)}startRename(e){e.renamable&&(this.renaming=e.key,this.sig=``,this.render())}commitRename(e,t){this.renaming=null,this.sig=``;let n=e.ref;n&&n.type!==`underlay`&&t.trim()!==e.label?n.type===`room`?U.rename({type:`room`,x:n.x,y:n.y},t):U.rename(n,t):this.schedule(),this.list.focus({preventScroll:!0})}cancelRename(){this.renaming=null,this.sig=``,this.schedule(),this.list.focus({preventScroll:!0})}async remove(e){let t=e.ref;if(!t||t.type===`underlay`)return;if(t.type===`wall`){let n=U.p.openings.filter(e=>e.wallId===t.id).length;if(n&&!await jn(`壁を削除`,`「${e.label}」と、付いている建具${n}つを削除します。元に戻すで戻せます。`,`削除`,!0))return}let n=t.type===`room`?{type:`room`,x:t.x,y:t.y}:{type:t.type,id:t.id};U.deleteObject(n)}openMenu(e){let t=e.ref;if(!t)return;let n=[];if(t.type!==`underlay`&&n.push([`図面で見る`,`target`,()=>(U.multiMode||this.viaList(()=>this.pick(e)),this.onFrame(t))]),e.renamable&&n.push([t.type===`room`?`部屋名を変える`:`名前を変える`,`pencil`,()=>this.startRename(e)]),t.type===`underlay`)n.push([e.hidden?`表示する`:`隠す`,e.hidden?`eye`:`eyeOff`,()=>U.toggleUnderlay()]),n.push([`下絵を消す`,`trash`,async()=>{await jn(`下絵を消す`,`写真の下絵を消します。元に戻すで戻せます。`,`消す`,!0)&&(U.checkpoint(),U.setUnderlay(null),U.undoToast(`下絵を消しました`))},`danger`]);else if(t.type!==`room`){n.push([e.hidden?`表示する`:`隠す`,e.hidden?`eye`:`eyeOff`,()=>this.toggleHidden(e)]),n.push([e.locked?`ロックを外す`:`ロックする`,e.locked?`unlock`:`lock`,()=>this.toggleLocked(e)]),t.type===`furniture`&&n.push([`複製`,`copy`,()=>U.duplicateFurniture(t.id)]);let r=this.rows.find(t=>t.node.key===e.key);r&&this.canDrag(r)&&(n.push([`上へ移動`,`up`,()=>this.moveRef(t,-1)]),n.push([`下へ移動`,`down`,()=>this.moveRef(t,1)]),n.push([`いちばん上へ`,`up`,()=>this.moveRef(t,`top`)]),n.push([`いちばん下へ`,`down`,()=>this.moveRef(t,`bottom`)])),n.push([`削除`,`trash`,()=>this.remove(e),`danger`])}else U.rooms.find(e=>e.key===t.key)?.tag&&n.push([`部屋名を消す`,`trash`,()=>U.rename({type:`room`,x:t.x,y:t.y},``),`danger`]);let r=P(`div`,{class:`menu-list`}),i=Dn(e.label,r);for(let[e,t,a,o]of n)r.append(P(`button`,{class:`menu-item ${o??``}`,onclick:()=>{i.close(),a()}},F(t,18),e))}setSelectMode(e){U.multiMode=e,e&&this.sortMode&&this.setSortMode(!1),this.el.classList.toggle(`selecting`,e),this.selectBtn.classList.toggle(`on`,e),this.selectBtn.replaceChildren(F(`check`,15),e?`完了`:`選択`),this.note.hidden=!e,e&&(this.note.textContent=`タップで選択に足す・外す。下のボタンでまとめて操作できます。`),this.sig=``,U.emit(`selection`)}rangeSelect(e,t){let n=this.rows.filter(e=>e.node.ref&&[`wall`,`opening`,`furniture`].includes(e.node.ref.type)).map(e=>e.node.key),r=n.indexOf(e);if(r<0)return;let i=n.indexOf(this.anchorKey??``);if(i<0&&(i=n.indexOf(this.selectedKey()??``)),i<0){this.anchorKey=e,t?U.toggleSelected(Wt(e)):U.select(Wt(e));return}this.anchorKey=n[i];let a=n.slice(Math.min(i,r),Math.max(i,r)+1).map(Wt),o=t?U.selectedRefs().filter(e=>!a.some(t=>t.type===e.type&&t.id===e.id)):[];U.setSelection([...o,...a],Wt(e))}renderBar(){let e=U.selectedRefs(),t=e.length>=2||U.multiMode&&e.length>=1;if(this.bar.hidden=!t,!t)return;let n=U.p,r=e.map(e=>Gt(n,e)).filter(e=>!!e),i=r.every(e=>e.hidden),a=r.every(e=>e.locked),o=e.filter(e=>e.type===`furniture`).map(e=>e.id),s=(e,t,n,r=``)=>P(`button`,{class:`h-bar-btn ${r}`,title:e,"aria-label":e,onclick:n},F(t,17),P(`span`,null,e));this.bar.replaceChildren(P(`span`,{class:`h-bar-count`},`${e.length}件`),s(i?`表示`:`隠す`,i?`eye`:`eyeOff`,()=>U.setFlags(e,{hidden:!i})),s(a?`ロック解除`:`ロック`,a?`unlock`:`lock`,()=>U.setFlags(e,{locked:!a})),o.length?s(`複製`,`copy`,()=>U.duplicateFurnitureMany(o)):``,s(`削除`,`trash`,()=>void this.removeSelected(),`danger`),s(`選択解除`,`close`,()=>U.select(null)))}async removeSelected(){let e=U.selectedRefs(),t=new Set(e.filter(e=>e.type===`wall`).map(e=>e.id)),n=U.p.openings.filter(n=>t.has(n.wallId)&&!e.some(e=>e.type===`opening`&&e.id===n.id)).length;await jn(`まとめて削除`,`${e.length}件${n?`と、壁に付いた建具${n}つ`:``}を削除します。元に戻すで戻せます。`,`削除`,!0)&&U.deleteSelection()}setSortMode(e){e&&U.multiMode&&this.setSelectMode(!1),this.sortMode=e,this.sortBtn.classList.toggle(`on`,e),this.sortBtn.replaceChildren(F(e?`check`:`sort`,15),e?`完了`:`並び替え`),this.note.hidden=!e,e&&(this.note.textContent=`右の ≡ をドラッグして並べ替えます。家具は、下の行ほど図面で手前に描かれます。`),e&&this.query.trim()&&I(`検索中は並び替えできません。検索を消すと並べ替えられます`),this.sig=``,this.render()}canDrag(e){let t=e.node.ref?.type;return this.query.trim()||t!==`wall`&&t!==`furniture`&&t!==`opening`?!1:this.rows.some(n=>n!==e&&n.parentKey===e.parentKey&&n.node.ref?.type===t)}rowEl(e){return this.list.querySelector(`.h-row[data-key="${CSS.escape(e.node.key)}"]`)}bindDrag(){let e=this.list;e.addEventListener(`pointerdown`,t=>{if(this.drag)return;this.press=null,this.suppressClick=!1;let n=t.target,r=n.closest(`.h-row`);if(!r||t.button!==0||this.renaming)return;let i=!!n.closest(`.h-grip`);if(!i&&(n.closest(`button, input`)||t.pointerType!==`mouse`))return;let a=this.rows.find(e=>e.node.key===r.dataset.key);a&&this.canDrag(a)&&(this.press={row:a,y:t.clientY,id:t.pointerId},i&&(t.preventDefault(),e.setPointerCapture(t.pointerId),this.startDrag(t.clientY)))}),e.addEventListener(`pointermove`,t=>{if(this.press&&t.pointerId===this.press.id){if(t.pointerType===`mouse`&&!(t.buttons&1)){this.press=null,this.drag&&this.endDrag(!1);return}if(!this.drag){if(Math.abs(t.clientY-this.press.y)<5||t.pointerType===`mouse`&&!(t.buttons&1))return;e.setPointerCapture(t.pointerId),this.startDrag(t.clientY)}t.preventDefault(),this.moveDrag(t.clientY)}});let t=(e,t)=>{this.press&&e.pointerId===this.press.id&&(this.press=null,this.drag&&(this.suppressClick=!0,this.endDrag(t)))};e.addEventListener(`pointerup`,e=>t(e,!0)),e.addEventListener(`pointercancel`,e=>t(e,!1)),e.addEventListener(`lostpointercapture`,e=>this.drag&&t(e,!1)),window.addEventListener(`pointerup`,e=>{this.press&&!this.drag&&e.pointerId===this.press.id&&(this.press=null)},!0)}startDrag(e){let t=this.press.row,n=this.rows.filter(e=>e.parentKey===t.parentKey&&e.node.ref?.type===t.node.ref?.type),r=n.filter(e=>e!==t);if(!r.length){this.press=null;return}this.drag={row:t,others:r,index:n.indexOf(t),y:e},this.list.classList.add(`dragging`),this.rowEl(t)?.classList.add(`drag-src`),this.moveDrag(e);let i=()=>{if(!this.drag)return;let e=this.list.getBoundingClientRect(),t=this.drag.y<e.top+36?-Math.ceil((e.top+36-this.drag.y)/3):this.drag.y>e.bottom-36?Math.ceil((this.drag.y-(e.bottom-36))/3):0;t&&(this.list.scrollTop+=t,this.moveDrag(this.drag.y)),this.scrollRaf=requestAnimationFrame(i)};this.scrollRaf=requestAnimationFrame(i)}moveDrag(e){let t=this.drag;if(!t)return;t.y=e;let n=t.others.length;for(let r=0;r<t.others.length;r++){let i=this.rowEl(t.others[r])?.getBoundingClientRect();if(i&&e<i.top+i.height/2){n=r;break}}t.index=n;let r;if(n<t.others.length)r=this.rowEl(t.others[n]).getBoundingClientRect().top;else{let e=t.others[t.others.length-1],n=this.rows.indexOf(e);for(;n+1<this.rows.length&&this.rows[n+1].level>e.level;)n++;r=this.rowEl(this.rows[n]).getBoundingClientRect().bottom}let i=this.list.getBoundingClientRect();this.indicator.hidden=!1,this.indicator.style.top=`${r-i.top+this.list.scrollTop-1}px`,this.indicator.style.left=`${4+t.row.level*14+18}px`}endDrag(e){let t=this.drag;cancelAnimationFrame(this.scrollRaf),this.drag=null,this.list.classList.remove(`dragging`),this.indicator.hidden=!0,this.sig=``;let n=t?.row.node.ref;e&&t&&n&&(n.type===`wall`||n.type===`furniture`||n.type===`opening`)&&(this.revealKey=t.row.node.key,U.reorder(n,t.index)),this.schedule()}moveRef(e,t){let n=U.p,r=e.type===`wall`?n.walls:e.type===`furniture`?n.furniture:n.openings,i=r.find(t=>t.id===e.id);if(!i)return;let a=e.type===`opening`?i.wallId:void 0,o=r.filter(e=>a===void 0||e.wallId===a),s=o.indexOf(i),c=t===`top`?0:t===`bottom`?o.length-1:Math.max(0,Math.min(o.length-1,s+t));if(c===s)return I(o.length<2?`並べ替える相手がありません`:t===`top`||typeof t==`number`&&t<0?`いちばん上です`:`いちばん下です`);this.revealKey=`${e.type}:${e.id}`,U.reorder(e,c)}bindKeys(){this.list.addEventListener(`keydown`,e=>{if(this.renaming||this.drag)return;let t=this.rows.filter(e=>e.node.ref&&e.node.ref.type!==`underlay`),n=this.selectedKey(),r=t.findIndex(e=>e.node.key===n),i=r>=0?t[r]:null,a=()=>{e.preventDefault(),e.stopPropagation()};if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&e.altKey){a();let t=i?.node.ref;if(t&&(t.type===`wall`||t.type===`furniture`||t.type===`opening`)){if(this.query.trim())return void I(`検索中は並び替えできません`);if(U.multi)return void I(`複数選択中は並び替えできません。1つだけ選んでください`);this.moveRef(t,e.key===`ArrowUp`?-1:1)}}else if(e.key===`ArrowDown`||e.key===`ArrowUp`){a();let n=t[Math.max(0,Math.min(t.length-1,r<0?0:r+(e.key===`ArrowDown`?1:-1)))],o=e=>!!e?.node.ref&&[`wall`,`opening`,`furniture`].includes(e.node.ref.type);n&&e.shiftKey&&o(n)&&o(i??void 0)?(this.viaList(()=>this.rangeSelect(n.node.key,!1)),this.list.focus({preventScroll:!0})):n&&(this.anchorKey=o(n)?n.node.key:null,this.viaList(()=>this.pickKeepFocus(n.node)))}else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`){a();let e=this.rows.filter(e=>e.node.ref&&[`wall`,`opening`,`furniture`].includes(e.node.ref.type)).map(e=>Wt(e.node.key));e.length&&this.viaList(()=>U.setSelection(e))}else if((e.key===`ArrowRight`||e.key===`ArrowLeft`)&&i){a();let t=e.key===`ArrowRight`;if(i.expandable&&i.expanded!==t)this.toggle(i.node,t);else if(!t&&i.level>1){let e=this.rows.indexOf(i);for(let t=e-1;t>=0;t--)if(this.rows[t].level<i.level&&this.rows[t].node.ref)return this.viaList(()=>this.pickKeepFocus(this.rows[t].node))}}else(e.key===`F2`||e.key===`Enter`)&&i?(a(),this.startRename(i.node)):(e.key===`Delete`||e.key===`Backspace`)&&(i||U.multi)?(a(),U.multi?this.removeSelected():this.remove(i.node)):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`d`&&U.selectedRefs().some(e=>e.type===`furniture`)?(a(),U.duplicateFurnitureMany(U.selectedRefs().filter(e=>e.type===`furniture`).map(e=>e.id))):e.key.toLowerCase()===`f`&&!e.ctrlKey&&!e.metaKey&&i?.node.ref&&(a(),this.onFrame(i.node.ref))})}pickKeepFocus(e){let t=e.ref;t&&t.type!==`underlay`&&(U.select(t.type===`room`?{type:`room`,x:t.x,y:t.y}:{type:t.type,id:t.id}),this.list.focus({preventScroll:!0}))}},bh=100,xh=300,Sh=10;function Ch(e,t){let n=new Map,r=0,i=0,a=!1;e.addEventListener(`pointerdown`,e=>{if(e.pointerType!==`touch`)return;let t=performance.now();n.size===0?(r=t,i=0,a=!0):t-r>bh&&(a=!1),n.set(e.pointerId,{x:e.clientX,y:e.clientY}),i=Math.max(i,n.size)},!0),e.addEventListener(`pointermove`,e=>{let t=n.get(e.pointerId);t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>Sh&&(a=!1)},!0);let o=(e,o)=>{n.has(e.pointerId)&&(n.delete(e.pointerId),o&&(a=!1),!n.size&&a&&i>=2&&performance.now()-r<=xh&&t(i))};e.addEventListener(`pointerup`,e=>o(e,!1),!0),e.addEventListener(`pointercancel`,e=>o(e,!0),!0)}var wh=ce(`#app`),Th=P(`div`,{class:`screen projects-screen`}),Eh=P(`input`,{class:`project-name`,"aria-label":`プロジェクト名`,maxlength:40,onchange:()=>{let e=Eh.value.trim();e&&U.project&&U.edit(t=>t.name=e)},onkeydown:e=>e.key===`Enter`&&Eh.blur()}),Dh=`元に戻す（Ctrl+Z／⌘Z・2本指タップ）`,Oh=`やり直す（Ctrl+Shift+Z／⇧⌘Z・3本指タップ）`,kh=[],Ah=[],jh=(e=20)=>{let t=P(`button`,{class:`icon-btn`,title:Dh,"aria-label":`元に戻す`,onclick:()=>U.undo()},F(`undo`,e)),n=P(`button`,{class:`icon-btn`,title:Oh,"aria-label":`やり直す`,onclick:()=>U.redo()},F(`redo`,e));return kh.push(t),Ah.push(n),[t,n]},[Mh,Nh]=jh(),Ph=P(`div`,{class:`seg view-seg`}),Fh=P(`div`,{class:`toolbar`,role:`toolbar`}),Ih=P(`div`,{class:`tool-opts`,role:`toolbar`,"aria-label":`ツールの設定`,hidden:!0}),Lh=P(`div`,{class:`pane pane2d`}),Rh=P(`div`,{class:`canvas-host`}),zh=P(`div`,{class:`numeric-panel`,hidden:!0}),Bh=P(`div`,{class:`pane pane3d`}),Vh=P(`div`,{class:`canvas-host`}),Hh=P(`aside`,{class:`props`,"aria-label":`プロパティ`}),Uh=P(`div`,{class:`props-body`}),Wh=P(`span`,{class:`hint`}),Gh=P(`span`,{class:`summary`}),Kh=P(`div`,{class:`workspace`}),qh=P(`button`,{class:`icon-btn underlay-btn`,title:`写真の下絵を表示／非表示`,"aria-label":`写真の下絵を表示／非表示`,hidden:!0,onclick:()=>U.toggleUnderlay()},F(`eye`,18)),Jh=P(`div`,{class:`seg`}),Yh=P(`div`,{class:`walk-pad`,hidden:!0}),Xh=P(`button`,{class:`btn small`}),Zh=P(`div`,{class:`screen editor-screen`,hidden:!0},P(`header`,{class:`topbar`},P(`button`,{class:`btn ghost back`,onclick:()=>xg()},F(`back`),P(`span`,{class:`hide-sm`},`一覧`)),Wr(22),Eh,P(`div`,{class:`spacer`}),Mh,Nh,Ph,P(`button`,{class:`btn ghost`,title:`画像の書き出し`,onclick:()=>Hn(()=>rg.capture())},F(`share`,18),P(`span`,{class:`hide-sm`},`書き出し`)),P(`button`,{class:`icon-btn`,title:`設定`,onclick:()=>Un(()=>ng.requestRender())},F(`gear`))),Fh,Ih,Kh,P(`footer`,{class:`statusbar`},Wh,Gh));Lh.append(Rh,zh,ag()),Bh.append(Vh,og()),Hh.append(P(`button`,{class:`props-handle`,"aria-label":`パネルを開閉`,onclick:()=>{let e=!Hh.classList.toggle(`collapsed`);ng.requestRender(),e&&requestAnimationFrame(()=>ng.revealSoon(hg))}}),Uh);var Qh=new yh,$h=P(`div`,{class:`h-backdrop`,hidden:!0,onclick:()=>fg(!1)}),eg=P(`span`,null),tg=P(`div`,{class:`multi-chip`,hidden:!0,role:`status`},F(`check`,15),eg,P(`button`,{class:`btn small primary`,onclick:()=>Qh.setSelectMode(!1)},`完了`));Kh.append(Qh.el,$h,P(`div`,{class:`panes`},Lh,Bh,tg),Hh),wh.append(Th,Zh);var ng=new tn(Rh),rg=_h(Vh),ig=e=>{if(U.project){if(e===2){if(!U.history.canUndo)return I(`元に戻せる操作はありません`);U.undo(),I(`元に戻しました（2本指タップ）`)}else if(e===3){if(!U.history.canRedo)return I(`やり直せる操作はありません`);U.redo(),I(`やり直しました（3本指タップ）`)}}};Ch(Rh,ig),Ch(Vh,ig),ng.onHint=e=>Wh.textContent=e,ng.bottomInset=()=>lg()?Hh.classList.contains(`collapsed`)?26:Hh.offsetHeight:0,ng.onNumericChange=()=>kr(zh,ng),U.thumbnailer=(e,t)=>st(e,t,320,200,{margin:14}).toDataURL(`image/jpeg`,.82);function ag(){return P(`div`,{class:`float-ctl zoom-ctl`},...jh(18),P(`span`,{class:`ctl-sep`,"aria-hidden":`true`}),P(`button`,{class:`icon-btn`,title:`拡大`,onclick:()=>ng.zoomBy(1.4)},F(`plus`,18)),P(`button`,{class:`icon-btn`,title:`縮小`,onclick:()=>ng.zoomBy(1/1.4)},F(`minus`,18)),P(`button`,{class:`icon-btn`,title:`全体を表示`,onclick:()=>ng.fit()},F(`fit`,18)),qh,P(`button`,{class:`icon-btn dims-btn`,title:`寸法表示の切替`,onclick:()=>U.edit(e=>e.settings.showDimensions=!e.settings.showDimensions)},F(`ruler`,18)))}function og(){let e=(e,t,n,r)=>{let i=P(`button`,{class:`icon-btn`,title:e,"aria-label":e},F(t,18)),a=()=>rg.setMove(0,0);return i.addEventListener(`pointerdown`,e=>{e.preventDefault(),rg.setMove(n,r)}),i.addEventListener(`pointerup`,a),i.addEventListener(`pointerleave`,a),i.addEventListener(`pointercancel`,a),i};return Yh.append(P(`div`,null,e(`前進`,`up`,1,0)),P(`div`,null,e(`左を向く`,`left`,0,1),e(`後退`,`down`,-1,0),e(`右を向く`,`right`,0,-1))),Xh.addEventListener(`click`,()=>{U.showCeiling=!U.showCeiling,U.emit(`view`),sg()}),P(`div`,{class:`float-ctl view3d-ctl`},Jh,Xh,P(`button`,{class:`icon-btn`,title:`全体を表示`,onclick:()=>rg.mode===`walk`?rg.setMode(`orbit`):rg.frame()},F(`fit`,18)),P(`span`,{class:`undo-3d`},...jh(18)))}function sg(){Jh.replaceChildren(P(`button`,{class:rg.mode===`orbit`?`on`:``,onclick:()=>rg.setMode(`orbit`)},F(`cube`,16),`俯瞰`),P(`button`,{class:rg.mode===`walk`?`on`:``,onclick:()=>rg.setMode(`walk`)},F(`walk`,16),`室内`)),Xh.replaceChildren(F(`ceiling`,16),U.showCeiling?`天井あり`:`天井なし`),Xh.classList.toggle(`on`,U.showCeiling),Yh.hidden=rg.mode!==`walk`}rg.onModeChange=sg,Bh.append(Yh);var cg=window.innerWidth>=1e3?`split`:`2d`,lg=()=>window.innerWidth<1e3;function ug(){let e=lg()&&cg===`split`?`2d`:cg;Kh.dataset.view=e;let t=lg()?[[`2d`,`2D`],[`3d`,`3D`]]:[[`2d`,`2D`],[`split`,`2D＋3D`],[`3d`,`3D`]];Ph.replaceChildren(...t.map(([t,n])=>P(`button`,{class:e===t?`on`:``,onclick:()=>{cg=t,ug()}},n))),rg.requestRender(),ng.autoFit&&requestAnimationFrame(()=>ng.fit())}window.addEventListener(`resize`,ug);var dg=()=>window.innerWidth<1160;function fg(e){U.hierarchyOpen=e,dg()||U.setPrefs({hierarchyOpen:e}),pg(),Tr(Fh,ng,Ih),_g()}function pg(){let e=U.hierarchyOpen,t=Qh.el.hidden;Qh.el.hidden=!e,Qh.el.classList.toggle(`drawer`,dg()),$h.hidden=!(e&&dg()),e&&t&&Qh.reveal()}window.addEventListener(`resize`,pg),Qh.onClose=()=>fg(!1),Qh.onPicked=()=>dg()&&fg(!1),Qh.onFrame=e=>{let t=U.project?bt(U.project,U.rooms,e):null;t&&(mg()&&(cg=lg()?`2d`:`split`,ug()),requestAnimationFrame(()=>ng.frameBounds(t)))};var mg=()=>Kh.dataset.view===`3d`;function hg(){let e=U.selection,t=U.project;if(!e||!t)return null;if(e.type===`room`)return{x:e.x,y:e.y};if(e.type===`furniture`)return t.furniture.find(t=>t.id===e.id)??null;if(e.type===`wall`){let n=t.walls.find(t=>t.id===e.id);return n?w(ng.visibleCenter(),{x:n.x1,y:n.y1},{x:n.x2,y:n.y2}).pt:null}let n=t.openings.find(t=>t.id===e.id),r=n&&t.walls.find(e=>e.id===n.wallId);return n&&r?_e(r,n.t):null}function gg(e){e.classList.toggle(`more-right`,!e.hidden&&e.scrollLeft+e.clientWidth<e.scrollWidth-4)}function _g(){gg(Fh),gg(Ih)}Fh.addEventListener(`scroll`,()=>gg(Fh),{passive:!0}),Ih.addEventListener(`scroll`,()=>gg(Ih),{passive:!0}),window.addEventListener(`resize`,_g);function vg(e){if(U.project){if((e===`project`||e===`tool`||e===`prefs`)&&(Tr(Fh,ng,Ih),_g()),(e===`project`||e===`selection`||e===`open`)&&Ar(Uh,ng),e===`selection`&&lg()&&(Hh.classList.toggle(`collapsed`,!U.selection),requestAnimationFrame(()=>ng.revealSoon(hg))),e===`tool`&&(kr(zh,ng),ng.updateHint()),e===`project`){document.activeElement!==Eh&&(Eh.value=U.p.name);let e=U.totalArea();Gh.textContent=`${U.rooms.length}部屋・合計 ${e.toFixed(2)}㎡（${re(e*1e6,U.p.settings).toFixed(1)}帖）`,Zh.classList.toggle(`no-dims`,!U.p.settings.showDimensions)}for(let e of kh)e.disabled=!U.history.canUndo;for(let e of Ah)e.disabled=!U.history.canRedo}}U.on(e=>{(e===`selection`||e===`project`)&&(tg.hidden=!U.multiMode,eg.textContent=`選択モード・${U.selected.size}件`),e===`underlay`&&(qh.hidden=!U.underlay,qh.classList.toggle(`on`,!!U.underlay?.visible)),e===`refit`&&(ng.autoFit=!0,ng.fit(),rg.userMoved=!1,rg.mode===`walk`?rg.setMode(`orbit`):rg.frame()),e===`home`&&xg(),e===`hierarchy`&&fg(!U.hierarchyOpen),vg(e),e===`prefs`&&!U.project&&bg()});function yg(e){U.open(e),Qh.resetForProject(),rg.userMoved=!1,ng.autoFit=!0,Th.hidden=!0,Zh.hidden=!1,mn(`#/p/${e.id}`),ug(),U.hierarchyOpen=!dg()&&(U.prefs.hierarchyOpen??window.innerWidth>=1280),pg(),sg(),requestAnimationFrame(()=>{ng.fit(),rg.frame()}),vg(`project`),vg(`tool`),vg(`selection`)}function bg(){Zh.hidden=!0,Th.hidden=!1,Vr(Th,yg)}function xg(){U.close(),mn(``),bg()}function Sg(){An();let e=location.hash.match(/^#\/p\/(.+)$/);if(e){let t=Pt(decodeURIComponent(e[1]));if(t)return yg(t)}U.project&&U.close(),bg()}if(window.addEventListener(`popstate`,Sg),Kn(e=>{if(Nt().length>=r(U.prefs.purchases)){Nn(`プロジェクトの上限に達しています。`);return}let t=Nt().some(t=>t.id===e.id)?b(e,e.name):e;Ft(t),I(`「${t.name}」を読み込みました`),yg(t)}),window.addEventListener(`keydown`,e=>{if(e.key===`Escape`)return On()?void 0:on(e)?e.target.blur():U.multiMode?Qh.setSelectMode(!1):U.hierarchyOpen&&dg()?fg(!1):ng.cancel()?void 0:U.tool===`select`?U.select(null):U.setTool(`select`);if(!U.project||Zh.hidden||kn())return;let t=e.ctrlKey||e.metaKey,n=e.key.toLowerCase(),r=e.target,i=!!r&&r.classList.contains(`calc`)&&!r.hasAttribute(`data-dirty`);if(!on(e)||i&&t&&(n===`z`||n===`y`)){if(t&&n===`z`)return e.preventDefault(),e.shiftKey?U.redo():U.undo();if(t&&n===`y`)return e.preventDefault(),U.redo();if(t&&n===`a`){e.preventDefault();let t=U.p,n=e=>{let n=t.walls.find(t=>t.id===e);return!!n&&!n.hidden&&!n.locked};return U.setSelection([...t.walls.filter(e=>!e.hidden&&!e.locked).map(e=>({type:`wall`,id:e.id})),...t.openings.filter(e=>!e.hidden&&!e.locked&&n(e.wallId)).map(e=>({type:`opening`,id:e.id})),...t.furniture.filter(e=>!e.hidden&&!e.locked).map(e=>({type:`furniture`,id:e.id}))])}if(t&&n===`d`){e.preventDefault();let t=U.selectedRefs().filter(e=>e.type===`furniture`).map(e=>e.id);return t.length&&U.duplicateFurnitureMany(t)}if(!t){if(e.key===`Delete`||e.key===`Backspace`)return e.preventDefault(),U.deleteSelection();if(!(rg.mode===`walk`&&Kh.dataset.view===`3d`&&[`w`,`a`,`s`,`d`].includes(n))){if(n===`v`)U.setTool(`select`);else if(n===`w`)U.setTool(`wall`);else if(n===`o`)U.setTool(`opening`);else if(n===`f`)Bn();else if(U.selection?.type===`opening`&&!U.multi&&(n===`x`||n===`h`||n===`r`))Kt(U.selection.id,n===`x`?`side`:n===`h`?`hinge`:`cycle`);else if(n===`r`&&U.multi)U.rotateFurnitureMany(U.selectedRefs().filter(e=>e.type===`furniture`).map(e=>e.id));else if(n===`r`&&U.selection?.type===`furniture`){let e=U.selection.id;U.edit(t=>{let n=t.furniture.find(t=>t.id===e);n&&(n.rot=(n.rot+90)%360)})}}}}}),window.addEventListener(`beforeunload`,()=>U.flushSave()),document.addEventListener(`visibilitychange`,()=>document.hidden&&U.flushSave()),!U.prefs.seenIntro&&Nt().length===0){let e=x();Ft(e),yg(e),U.setPrefs({seenIntro:!0})}else{let e=(cn||ln)&&!location.hash.startsWith(`#/p/`)?Nt()[0]:void 0,t=e?Pt(e.id):null;t?yg(t):Sg(),U.prefs.seenIntro||U.setPrefs({seenIntro:!0})}dn();