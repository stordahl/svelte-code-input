import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, d as add_styles, f as add_attribute, v as validate_component } from "../../chunks/index-9411c5a5.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const CodeEditorStore = writable("");
var CodeEditor_svelte_svelte_type_style_lang = "";
const css = {
  code: `#editorBase.svelte-k31he6{display:grid;grid-template-columns:40px 8fr;grid-template-rows:auto;grid-template-areas:"lineCounter codeEditor";min-height:600px}textarea.svelte-k31he6{padding:.5rem;border:0;resize:none;font-family:'ui-monospace', 'Menlo', 'Monaco', monospace;font-size:14px}#lineCounter.svelte-k31he6:focus-visible,#codeEditor.svelte-k31he6:focus-visible{outline:none}#lineCounter.svelte-k31he6{grid-area:lineCounter;max-width:40px}#lineCounter.svelte-k31he6:hover{cursor:default}#codeEditor.svelte-k31he6{grid-area:codeEditor;max-width:100%}`,
  map: null
};
const CodeEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lineCount;
  let outarr;
  let lineCounterValue;
  let $store, $$unsubscribe_store;
  let { name } = $$props;
  let { store = CodeEditorStore } = $$props;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let { blurCallback = void 0 } = $$props;
  let { innerPadding = "0" } = $$props;
  let { lineCountBg = "gray" } = $$props;
  let { lineCountColor = "black" } = $$props;
  let { editorBg = "lightgray" } = $$props;
  let { editorColor = "black" } = $$props;
  let codeEditor;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  if ($$props.blurCallback === void 0 && $$bindings.blurCallback && blurCallback !== void 0)
    $$bindings.blurCallback(blurCallback);
  if ($$props.innerPadding === void 0 && $$bindings.innerPadding && innerPadding !== void 0)
    $$bindings.innerPadding(innerPadding);
  if ($$props.lineCountBg === void 0 && $$bindings.lineCountBg && lineCountBg !== void 0)
    $$bindings.lineCountBg(lineCountBg);
  if ($$props.lineCountColor === void 0 && $$bindings.lineCountColor && lineCountColor !== void 0)
    $$bindings.lineCountColor(lineCountColor);
  if ($$props.editorBg === void 0 && $$bindings.editorBg && editorBg !== void 0)
    $$bindings.editorBg(editorBg);
  if ($$props.editorColor === void 0 && $$bindings.editorColor && editorColor !== void 0)
    $$bindings.editorColor(editorColor);
  $$result.css.add(css);
  lineCount = $store.split("\n").length;
  outarr = Array.from(Array(lineCount).keys());
  lineCounterValue = outarr.join("\n");
  $$unsubscribe_store();
  return `<div${add_styles({ "padding": innerPadding })}><div id="${"editorBase"}" class="${"svelte-k31he6"}"><textarea name="${"lineCounter"}" id="${"lineCounter"}" cols="${"2"}" readonly tabindex="${"-1"}" class="${"svelte-k31he6"}"${add_styles({
    "background-color": lineCountBg,
    "color": lineCountColor
  })}>${lineCounterValue || ""}</textarea>
    <textarea${add_attribute("name", name, 0)} id="${"codeEditor"}" spellcheck="${"false"}" class="${"svelte-k31he6"}"${add_styles({
    "background-color": editorBg,
    "color": editorColor
  })}${add_attribute("this", codeEditor, 0)}>${$store || ""}</textarea></div>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CodeEditor, "CodeEditor").$$render($$result, {
    name: "A Code Input",
    innerPadding: "2rem",
    lineCountBg: "#02111B",
    lineCountColor: "#fcfcfc",
    editorBg: "#fcfcfc",
    editorColor: "#2b2930"
  }, {}, {})}`;
});
export { Routes as default };
