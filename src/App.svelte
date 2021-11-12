<script>
  import { Colors } from 'dmt-frontend-components';

  import { Loading } from 'dmt-frontend-components';
  import Dashboard from './views/Dashboard.svelte';

  export let connector;
  // export let connected;
  // export let state;

  const { connected, state } = connector;

  $: device = $state.device;

  state.subscribe(({ device }) => {
    if(device && device.deviceName) {
      document.title = `${device.deviceName} — DMT Insight`;
    }
  });
</script>

<main>
  {#if !$connected}
    <Loading dmtApp="Insight" />
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
