import { c as create_ssr_component } from "../../chunks/index-9411c5a5.js";
var base = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-t9d7st.svelte-t9d7st{background-color:var(--black);color:var(--white);padding:1rem;display:flex;align-items:center;justify-content:space-between}#external.svelte-t9d7st.svelte-t9d7st{display:flex;align-items:center;gap:10px}header.svelte-t9d7st img.svelte-t9d7st{max-width:30px}main.svelte-t9d7st.svelte-t9d7st{margin:0 2rem}footer.svelte-t9d7st.svelte-t9d7st{padding:2rem;text-align:center;font-size:1.2rem}footer.svelte-t9d7st a.svelte-t9d7st{color:white}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-t9d7st"}"><div><h1>svelte-code-input</h1></div>
  <div id="${"external"}" class="${"svelte-t9d7st"}"><a href="${"https://npmjs.org"}"><img src="${"images/npm.png"}" alt="${"View on npm"}" aria-label="${"View on npm"}" class="${"svelte-t9d7st"}"></a>
    <a href="${"https://github.com/stordahl/svelte-code-input"}"><img src="${"images/github.png"}" alt="${"View on GitHub"}" aria-label="${"View on GitHub"}" class="${"svelte-t9d7st"}"></a></div></header>
<main class="${"svelte-t9d7st"}">${slots.default ? slots.default({}) : ``}</main>
<footer class="${"svelte-t9d7st"}"><span>Made with \u2764\uFE0F by <a href="${"https://stordahl.dev"}" class="${"svelte-t9d7st"}">Jacob Stordahl</a> | 2022</span>
</footer>`;
});
export { _layout as default };
