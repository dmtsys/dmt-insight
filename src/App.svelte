<script>
  import Navbar from './components/Navbar.svelte';

  export let connected;
  export let state;

  $: $state, console.log('change');
</script>

<main>
  <Navbar />
  <span class="status" class:ready={$connected}>Connected {$connected ? '✓' : '✖'}</span>

  <pre class="state">
	 {JSON.stringify($state, null, 2)}
  </pre>
</main>

<style>
  main {
    /* text-align: center; */
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .state {
    margin-top: 10px;
    color: white;
  }

  .status {
    font-size: 1em;
    color: var(--dmt-violet);
  }

  .status.ready {
    color: var(--dmt-green);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
