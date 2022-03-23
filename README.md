<img src="https://simplecodetips.com/wp-content/uploads/2017/01/Linux-Terminal-icon.png" alt="A Terminal Icon" width="150px" align="center"/>

# svelte-code-input

svelte-code-input is a simple text input that is meant to emulate a code editor in the browser.

## Installation

```shell
npm install svelte-code-input
```

## Usage

```svelte
<script>
  import CodeEditor from "svelte-code-input/CodeEditor.svelte"
  
  import { writable } from "svelte/store"
  
  const codeStore = writable("");
</script>

<label for="code">My Code Input</label>
<CodeEditor name="code" store={codeStore}/>
```

## Contributing

*Contributing docs in the works*
