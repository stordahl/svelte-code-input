function h(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(L)}function I(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ot(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function J(t){return Object.keys(t).length===0}function lt(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,s){if(c){const u=O(n,e,i,s);t.p(u,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let k=!1;function K(){k=!0}function Q(){k=!1}function R(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:R(1,c,g=>n[e[g]].claim_order,l))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<u.length;r++){for(;l<s.length&&u[r].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(u[r],a)}}function U(t,n){if(k){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){k&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function ht(){return A(" ")}function mt(){return A("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,c=!1){Z(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function tt(t,n,e,i){return P(t,c=>c.nodeName===n,c=>{const s=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>c.removeAttribute(u))},()=>i(n))}function bt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function gt(t){return nt(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n){t.value=n==null?"":n}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let y;function p(t){y=t}function C(){if(!y)throw new Error("Function called outside component initialization");return y}function Et(t){C().$$.on_mount.push(t)}function kt(t){C().$$.after_update.push(t)}function jt(t,n){C().$$.context.set(t,n)}const m=[],z=[],w=[],B=[],T=Promise.resolve();let N=!1;function D(){N||(N=!0,T.then(F))}function Nt(){return D(),T}function S(t){w.push(t)}const j=new Set;let $=0;function F(){const t=y;do{for(;$<m.length;){const n=m[$];$++,p(n),et(n.$$)}for(p(null),m.length=0,$=0;z.length;)z.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];j.has(e)||(j.add(e),e())}w.length=0}while(m.length);for(;B.length;)B.pop()();N=!1,j.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const E=new Set;let _;function St(){_={r:0,c:[],p:_}}function At(){_.r||b(_.c),_=_.p}function it(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function qt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function vt(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||S(()=>{const r=s.map(L).filter(I);u?u.push(...r):b(r),t.$$.on_mount=[]}),o.forEach(S)}function ct(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(m.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,c,s,u,o=[-1]){const r=y;p(t);const l=t.$$={fragment:null,ctx:null,props:s,update:h,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...q)=>{const v=q.length?q[0]:g;return l.ctx&&c(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),a&&ut(t,f)),g}):[],l.update(),a=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){K();const f=Y(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),Q(),F()}p(r)}class Lt{$destroy(){ct(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Ot(t,n=h){let e;const i=new Set;function c(o){if(G(t,o)&&(t=o,e)){const r=!d.length;for(const l of i)l[1](),d.push(l,t);if(r){for(let l=0;l<d.length;l+=2)d[l][0](d[l+1]);d.length=0}}}function s(o){c(o(t))}function u(o,r=h){const l=[o,r];return i.add(l),i.size===1&&(e=n(c)||h),o(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:u}}export{vt as A,ct as B,H as C,Ot as D,Nt as E,st as F,ot as G,U as H,at as I,_t as J,ft as K,h as L,$t as M,pt as N,I as O,b as P,lt as Q,z as R,Lt as S,Y as a,yt as b,bt as c,V as d,X as e,wt as f,dt as g,nt as h,Bt as i,xt as j,ht as k,mt as l,gt as m,St as n,Ct as o,At as p,it as q,jt as r,G as s,A as t,kt as u,Et as v,Mt as w,zt as x,rt as y,qt as z};