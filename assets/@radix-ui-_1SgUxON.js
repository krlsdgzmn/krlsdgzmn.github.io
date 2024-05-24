import{r,$ as de}from"./react-BoP3Okkf.js";import{_ as b}from"./@babel-CCbyfPlC.js";import{r as te,$ as fe}from"./react-dom-gTddLR46.js";import{R as $e}from"./react-remove-scroll-C21pHJl2.js";import{h as pe}from"./aria-hidden-DQ5UC2Eg.js";function ve(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ne(...e){return t=>e.forEach(n=>ve(n,t))}function R(...e){return r.useCallback(ne(...e),e)}const V=r.forwardRef((e,t)=>{const{children:n,...o}=e,c=r.Children.toArray(n),s=c.find(me);if(s){const i=s.props.children,a=c.map(u=>u===s?r.Children.count(i)>1?r.Children.only(null):r.isValidElement(i)?i.props.children:null:u);return r.createElement(K,b({},o,{ref:t}),r.isValidElement(i)?r.cloneElement(i,void 0,a):null)}return r.createElement(K,b({},o,{ref:t}),n)});V.displayName="Slot";const K=r.forwardRef((e,t)=>{const{children:n,...o}=e;return r.isValidElement(n)?r.cloneElement(n,{...Ee(o,n.props),ref:t?ne(t,n.ref):n.ref}):r.Children.count(n)>1?r.Children.only(null):null});K.displayName="SlotClone";const be=({children:e})=>r.createElement(r.Fragment,null,e);function me(e){return r.isValidElement(e)&&e.type===be}function Ee(e,t){const n={...t};for(const o in t){const c=e[o],s=t[o];/^on[A-Z]/.test(o)?c&&s?n[o]=(...a)=>{s(...a),c(...a)}:c&&(n[o]=c):o==="style"?n[o]={...c,...s}:o==="className"&&(n[o]=[c,s].filter(Boolean).join(" "))}return{...e,...n}}function ge(e,t){if(e==null)return{};var n={},o=Object.keys(e),c,s;for(s=0;s<o.length;s++)c=o[s],!(t.indexOf(c)>=0)&&(n[c]=e[c]);return n}var he=["color"],$t=r.forwardRef(function(e,t){var n=e.color,o=n===void 0?"currentColor":n,c=ge(e,he);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:t}),r.createElement("path",{d:"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))});function x(e,t,{checkForDefaultPrevented:n=!0}={}){return function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)}}function ye(e,t=[]){let n=[];function o(s,i){const a=r.createContext(i),u=n.length;n=[...n,i];function l(d){const{scope:m,children:$,...y}=d,p=(m==null?void 0:m[e][u])||a,C=r.useMemo(()=>y,Object.values(y));return r.createElement(p.Provider,{value:C},$)}function f(d,m){const $=(m==null?void 0:m[e][u])||a,y=r.useContext($);if(y)return y;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${s}\``)}return l.displayName=s+"Provider",[l,f]}const c=()=>{const s=n.map(i=>r.createContext(i));return function(a){const u=(a==null?void 0:a[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...a,[e]:u}}),[a,u])}};return c.scopeName=e,[o,Ce(c,...t)]}function Ce(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(s){const i=o.reduce((a,{useScope:u,scopeName:l})=>{const d=u(s)[`__scope${l}`];return{...a,...d}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}const B=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},Oe=de.useId||(()=>{});let Pe=0;function L(e){const[t,n]=r.useState(Oe());return B(()=>{e||n(o=>o??String(Pe++))},[e]),e||(t?`radix-${t}`:"")}function _(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function De({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,c]=xe({defaultProp:t,onChange:n}),s=e!==void 0,i=s?e:o,a=_(n),u=r.useCallback(l=>{if(s){const d=typeof l=="function"?l(e):l;d!==e&&a(d)}else c(l)},[s,e,c,a]);return[i,u]}function xe({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,c=r.useRef(o),s=_(t);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}const _e=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],T=_e.reduce((e,t)=>{const n=r.forwardRef((o,c)=>{const{asChild:s,...i}=o,a=s?V:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(a,b({},i,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Te(e,t){e&&te.flushSync(()=>e.dispatchEvent(t))}function Re(e,t=globalThis==null?void 0:globalThis.document){const n=_(e);r.useEffect(()=>{const o=c=>{c.key==="Escape"&&n(c)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const W="dismissableLayer.update",Ne="dismissableLayer.pointerDownOutside",Ae="dismissableLayer.focusOutside";let Z;const we=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Se=r.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:a,onDismiss:u,...l}=e,f=r.useContext(we),[d,m]=r.useState(null),$=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,y]=r.useState({}),p=R(t,v=>m(v)),C=Array.from(f.layers),[E]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),D=C.indexOf(E),g=d?C.indexOf(d):-1,h=f.layersWithOutsidePointerEventsDisabled.size>0,N=g>=D,le=Fe(v=>{const w=v.target,z=[...f.branches].some(I=>I.contains(w));!N||z||(s==null||s(v),a==null||a(v),v.defaultPrevented||u==null||u())},$),H=Ie(v=>{const w=v.target;[...f.branches].some(I=>I.contains(w))||(i==null||i(v),a==null||a(v),v.defaultPrevented||u==null||u())},$);return Re(v=>{g===f.layers.size-1&&(c==null||c(v),!v.defaultPrevented&&u&&(v.preventDefault(),u()))},$),r.useEffect(()=>{if(d)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Z=$.body.style.pointerEvents,$.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),q(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&($.body.style.pointerEvents=Z)}},[d,$,o,f]),r.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),q())},[d,f]),r.useEffect(()=>{const v=()=>y({});return document.addEventListener(W,v),()=>document.removeEventListener(W,v)},[]),r.createElement(T.div,b({},l,{ref:p,style:{pointerEvents:h?N?"auto":"none":void 0,...e.style},onFocusCapture:x(e.onFocusCapture,H.onFocusCapture),onBlurCapture:x(e.onBlurCapture,H.onBlurCapture),onPointerDownCapture:x(e.onPointerDownCapture,le.onPointerDownCapture)}))});function Fe(e,t=globalThis==null?void 0:globalThis.document){const n=_(e),o=r.useRef(!1),c=r.useRef(()=>{});return r.useEffect(()=>{const s=a=>{if(a.target&&!o.current){let l=function(){oe(Ne,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",c.current),c.current=l,t.addEventListener("click",c.current,{once:!0})):l()}else t.removeEventListener("click",c.current);o.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",c.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Ie(e,t=globalThis==null?void 0:globalThis.document){const n=_(e),o=r.useRef(!1);return r.useEffect(()=>{const c=s=>{s.target&&!o.current&&oe(Ae,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",c),()=>t.removeEventListener("focusin",c)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function q(){const e=new CustomEvent(W);document.dispatchEvent(e)}function oe(e,t,n,{discrete:o}){const c=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&c.addEventListener(e,t,{once:!0}),o?Te(c,s):c.dispatchEvent(s)}const M="focusScope.autoFocusOnMount",k="focusScope.autoFocusOnUnmount",X={bubbles:!1,cancelable:!0},Le=r.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:c,onUnmountAutoFocus:s,...i}=e,[a,u]=r.useState(null),l=_(c),f=_(s),d=r.useRef(null),m=R(t,p=>u(p)),$=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let p=function(g){if($.paused||!a)return;const h=g.target;a.contains(h)?d.current=h:P(d.current,{select:!0})},C=function(g){if($.paused||!a)return;const h=g.relatedTarget;h!==null&&(a.contains(h)||P(d.current,{select:!0}))},E=function(g){if(document.activeElement===document.body)for(const N of g)N.removedNodes.length>0&&P(a)};document.addEventListener("focusin",p),document.addEventListener("focusout",C);const D=new MutationObserver(E);return a&&D.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",C),D.disconnect()}}},[o,a,$.paused]),r.useEffect(()=>{if(a){J.add($);const p=document.activeElement;if(!a.contains(p)){const E=new CustomEvent(M,X);a.addEventListener(M,l),a.dispatchEvent(E),E.defaultPrevented||(Me(We(re(a)),{select:!0}),document.activeElement===p&&P(a))}return()=>{a.removeEventListener(M,l),setTimeout(()=>{const E=new CustomEvent(k,X);a.addEventListener(k,f),a.dispatchEvent(E),E.defaultPrevented||P(p??document.body,{select:!0}),a.removeEventListener(k,f),J.remove($)},0)}}},[a,l,f,$]);const y=r.useCallback(p=>{if(!n&&!o||$.paused)return;const C=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,E=document.activeElement;if(C&&E){const D=p.currentTarget,[g,h]=ke(D);g&&h?!p.shiftKey&&E===h?(p.preventDefault(),n&&P(g,{select:!0})):p.shiftKey&&E===g&&(p.preventDefault(),n&&P(h,{select:!0})):E===D&&p.preventDefault()}},[n,o,$.paused]);return r.createElement(T.div,b({tabIndex:-1},i,{ref:m,onKeyDown:y}))});function Me(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(P(o,{select:t}),document.activeElement!==n)return}function ke(e){const t=re(e),n=Y(t,e),o=Y(t.reverse(),e);return[n,o]}function re(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Y(e,t){for(const n of e)if(!Ue(n,{upTo:t}))return n}function Ue(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ke(e){return e instanceof HTMLInputElement&&"select"in e}function P(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ke(e)&&t&&e.select()}}const J=Be();function Be(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Q(e,t),e.unshift(t)},remove(t){var n;e=Q(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Q(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function We(e){return e.filter(t=>t.tagName!=="A")}const je=r.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...c}=e;return o?fe.createPortal(r.createElement(T.div,b({},c,{ref:t})),o):null});function Ve(e,t){return r.useReducer((n,o)=>{const c=t[n][o];return c??n},e)}const F=e=>{const{present:t,children:n}=e,o=Ge(t),c=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),s=R(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null};F.displayName="Presence";function Ge(e){const[t,n]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),i=e?"mounted":"unmounted",[a,u]=Ve(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const l=S(o.current);s.current=a==="mounted"?l:"none"},[a]),B(()=>{const l=o.current,f=c.current;if(f!==e){const m=s.current,$=S(l);e?u("MOUNT"):$==="none"||(l==null?void 0:l.display)==="none"?u("UNMOUNT"):u(f&&m!==$?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,u]),B(()=>{if(t){const l=d=>{const $=S(o.current).includes(d.animationName);d.target===t&&$&&te.flushSync(()=>u("ANIMATION_END"))},f=d=>{d.target===t&&(s.current=S(o.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",l),t.addEventListener("animationend",l),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",l),t.removeEventListener("animationend",l)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:r.useCallback(l=>{l&&(o.current=getComputedStyle(l)),n(l)},[])}}function S(e){return(e==null?void 0:e.animationName)||"none"}let U=0;function He(){r.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:ee()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:ee()),U++,()=>{U===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),U--}},[])}function ee(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const ce="Dialog",[se,pt]=ye(ce),[ze,O]=se(ce),Ze=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:c,onOpenChange:s,modal:i=!0}=e,a=r.useRef(null),u=r.useRef(null),[l=!1,f]=De({prop:o,defaultProp:c,onChange:s});return r.createElement(ze,{scope:t,triggerRef:a,contentRef:u,contentId:L(),titleId:L(),descriptionId:L(),open:l,onOpenChange:f,onOpenToggle:r.useCallback(()=>f(d=>!d),[f]),modal:i},n)},qe="DialogTrigger",Xe=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,c=O(qe,n),s=R(t,c.triggerRef);return r.createElement(T.button,b({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":G(c.open)},o,{ref:s,onClick:x(e.onClick,c.onOpenToggle)}))}),ae="DialogPortal",[Ye,ie]=se(ae,{forceMount:void 0}),Je=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:c}=e,s=O(ae,t);return r.createElement(Ye,{scope:t,forceMount:n},r.Children.map(o,i=>r.createElement(F,{present:n||s.open},r.createElement(je,{asChild:!0,container:c},i))))},j="DialogOverlay",Qe=r.forwardRef((e,t)=>{const n=ie(j,e.__scopeDialog),{forceMount:o=n.forceMount,...c}=e,s=O(j,e.__scopeDialog);return s.modal?r.createElement(F,{present:o||s.open},r.createElement(et,b({},c,{ref:t}))):null}),et=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,c=O(j,n);return r.createElement($e,{as:V,allowPinchZoom:!0,shards:[c.contentRef]},r.createElement(T.div,b({"data-state":G(c.open)},o,{ref:t,style:{pointerEvents:"auto",...o.style}})))}),A="DialogContent",tt=r.forwardRef((e,t)=>{const n=ie(A,e.__scopeDialog),{forceMount:o=n.forceMount,...c}=e,s=O(A,e.__scopeDialog);return r.createElement(F,{present:o||s.open},s.modal?r.createElement(nt,b({},c,{ref:t})):r.createElement(ot,b({},c,{ref:t})))}),nt=r.forwardRef((e,t)=>{const n=O(A,e.__scopeDialog),o=r.useRef(null),c=R(t,n.contentRef,o);return r.useEffect(()=>{const s=o.current;if(s)return pe(s)},[]),r.createElement(ue,b({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,s=>{var i;s.preventDefault(),(i=n.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,s=>{const i=s.detail.originalEvent,a=i.button===0&&i.ctrlKey===!0;(i.button===2||a)&&s.preventDefault()}),onFocusOutside:x(e.onFocusOutside,s=>s.preventDefault())}))}),ot=r.forwardRef((e,t)=>{const n=O(A,e.__scopeDialog),o=r.useRef(!1),c=r.useRef(!1);return r.createElement(ue,b({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,s),!s.defaultPrevented){var a;o.current||(a=n.triggerRef.current)===null||a===void 0||a.focus(),s.preventDefault()}o.current=!1,c.current=!1},onInteractOutside:s=>{var i,a;(i=e.onInteractOutside)===null||i===void 0||i.call(e,s),s.defaultPrevented||(o.current=!0,s.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const u=s.target;((a=n.triggerRef.current)===null||a===void 0?void 0:a.contains(u))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&c.current&&s.preventDefault()}}))}),ue=r.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:c,onCloseAutoFocus:s,...i}=e,a=O(A,n),u=r.useRef(null),l=R(t,u);return He(),r.createElement(r.Fragment,null,r.createElement(Le,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:c,onUnmountAutoFocus:s},r.createElement(Se,b({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":G(a.open)},i,{ref:l,onDismiss:()=>a.onOpenChange(!1)}))),!1)}),rt="DialogTitle",ct=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,c=O(rt,n);return r.createElement(T.h2,b({id:c.titleId},o,{ref:t}))}),st="DialogDescription",at=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,c=O(st,n);return r.createElement(T.p,b({id:c.descriptionId},o,{ref:t}))});function G(e){return e?"open":"closed"}const vt=Ze,bt=Xe,mt=Je,Et=Qe,gt=tt,ht=ct,yt=at;export{V as $,$t as A,Et as a,gt as b,ht as c,yt as d,mt as e,vt as f,bt as g};
