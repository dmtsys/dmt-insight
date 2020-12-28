<script>
  import Loading from './views/Loading.svelte';
  import Dashboard from './views/Dashboard.svelte';

  export let connected;
  export let state;

  $: $state, console.log('change');
</script>

<main>
  {#if !$connected}
    <Loading />
  {:else}
    <Dashboard {state} />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
