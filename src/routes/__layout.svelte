<script lang=ts context=module>
   
</script>
<script lang=ts>
  import "./base.css"
</script>

<header>
  <div>
    <h1>svelte-code-input</h1>
  </div>
  <div id="external">
    <a href="https://npmjs.org">
      <img src="images/npm.png" alt="View on npm" aria-label="View on npm">
    </a>
    <a href="https://github.com/stordahl/svelte-code-input">
      <img src="images/github.png" alt="View on GitHub" aria-label="View on GitHub">
    </a>
  </div>
</header>
<main>
  <slot/>
</main>
<footer>
  <span>Made with ❤️ by <a href="https://stordahl.dev">Jacob Stordahl</a> | 2022</span>
</footer>

<style>
  header {
    background-color: var(--black);
    color: var(--white);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #external {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  header img {
    max-width: 30px;
  }
  main {
    margin: 0 2rem;
  }
  footer {
    padding: 2rem;
    text-align: center;
    font-size: 1.2rem;
  }
  footer a {
    color: white;
  }
</style>