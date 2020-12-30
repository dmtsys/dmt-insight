<script>
  import Loading from './views/Loading.svelte';
  import Dashboard from './views/Dashboard.svelte';

  export let connected;
  export let state;
</script>

<main>
  {#if !$connected}
    <Loading />
  {:else}
    <Dashboard state={$state} />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
