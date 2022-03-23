<script lang=ts>
  export let name
  export let store
  export let blurCallback = undefined

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

<div>
  <div id="editorBase">
    <textarea 
      bind:value={lineCounterValue} 
      name="lineCounter" 
      id="lineCounter" 
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
    color: var(--white);
  }

  #lineCounter:focus-visible,
  #codeEditor:focus-visible {   
    outline:none;
  }

  #lineCounter {
    grid-area: lineCounter;
    background-color: rgb(52, 57, 77);
    max-width: 40px;
  }

  #codeEditor {
    grid-area: codeEditor;
    max-width: 100%;
    background-color: rgb(37, 37, 61);
  }

  button {
    background-color: var(--red);
    color: var(--white);
    border: 0;
    padding: 10px 15px;
    margin: .5rem 0;
  }

  button:hover {
    cursor: pointer;
  }
</style>