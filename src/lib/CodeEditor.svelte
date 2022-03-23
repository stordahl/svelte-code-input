<script lang=ts>
  import {CodeEditorStore} from '$lib/CodeEditorStore'

  export let name:string
  export let store = CodeEditorStore
  export let blurCallback = undefined
  
  // style props 
  export let innerPadding:string = '0'
  export let lineCountBg:string = 'gray'
  export let lineCountColor:string = 'black'
  export let editorBg:string = 'lightgray'
  export let editorColor:string = 'black'

  let codeEditor

  $: lineCount = $store.split('\n').length
  $: outarr = Array.from(Array(lineCount).keys())
  $: lineCounterValue = outarr.join('\n');

  const tabbing = (e) => {
    if (e.key == 'Tab') {
      e.preventDefault();
      let start = codeEditor.selectionStart,
          end = codeEditor.selectionEnd;
      codeEditor.value = `${codeEditor.value.substring(0, start)}  ${codeEditor.value.substring(end)}`;
      codeEditor.selectionStart =
        codeEditor.selectionEnd = start + 1;
    }
  }
</script>

<div
  style:padding={innerPadding}
>
  <div id="editorBase">
    <textarea 
      bind:value={lineCounterValue} 
      name="lineCounter" 
      id="lineCounter"
      style:background-color={lineCountBg}
      style:color={lineCountColor}
      cols="2"  
      readonly 
      tabindex="-1"></textarea>
    <textarea 
      bind:value={$store} 
      bind:this={codeEditor} 
      on:blur={blurCallback}
      on:keydown={(e) => tabbing(e)}
      name={name} 
      id="codeEditor" 
      style:background-color={editorBg}
      style:color={editorColor}
      spellcheck="false" 
    />
  </div>
</div>

<style>
  #editorBase {
    display: grid;
    grid-template-columns: 40px 8fr;
    grid-template-rows: auto;
    grid-template-areas: "lineCounter codeEditor";
    min-height: 600px;
  }

  textarea {
    padding: .5rem;
    border: 0;
    resize: none;
    font-family: 'ui-monospace', 'Menlo', 'Monaco', monospace;
    font-size: 14px;
  }

  #lineCounter:focus-visible,
  #codeEditor:focus-visible {   
    outline:none;
  }

  #lineCounter {
    grid-area: lineCounter;
    max-width: 40px;
  }
  #lineCounter:hover {
    cursor: default;
  }

  #codeEditor {
    grid-area: codeEditor;
    max-width: 100%;
  }
</style>