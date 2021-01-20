<script>
  import { fly } from 'svelte/transition';
  import { Button } from 'dmt-frontend-components';
  import { clickOutside } from '../actions/click-outside';
  import DeviceTable from '../tables/DeviceTable.svelte';
  import DeviceIcon from './DeviceIcon.svelte';

  export let deviceData;
  export let showPopup = false;
</script>

<div use:clickOutside class="wrapper" on:clickoutside={() => (showPopup = false)}>
  <Button icon size="lg" type="primary" title="Device info" on:click={() => (showPopup = !showPopup)}>
    <DeviceIcon />
  </Button>
  {#if showPopup}
    <div transition:fly={{ duration: 200, y: 5 }} class="popup">
      <h1>Device info</h1>
      <DeviceTable data={deviceData} />
    </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .popup {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 260px;
    padding: 1rem;
    background-color: var(--dmt-magenta);
    border: 1px solid var(--dmt-navy);
    border-radius: 0.5rem;
  }
</style>
