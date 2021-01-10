<script>
  import { fly } from 'svelte/transition';
  import { clickOutside } from '../actions/click-outside';
  import DeviceTable from '../tables/DeviceTable.svelte';

  export let deviceData;
  export let showPopup = false;
</script>

<div use:clickOutside class="wrapper" on:clickoutside={() => (showPopup = false)}>
  <button class:active={showPopup} title="Device info" on:click={() => (showPopup = !showPopup)}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 16H11V18H13V16Z" fill="currentColor" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"
        fill="currentColor"
      />
    </svg>
  </button>
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
    margin-left: 0.5rem;
    vertical-align: middle;
  }

  button {
    outline: none;
    border: none;
    padding: 0.6rem;
    font-weight: 600;
    border-radius: 50%;
    color: var(--dmt-cool-cyan);
    background-color: rgba(var(--dmt-cool-cyan-rgb), 0.15);
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: rgba(var(--dmt-cool-cyan-rgb), 0.2);
  }

  button.active,
  button:focus {
    background-color: rgba(var(--dmt-cool-cyan-rgb), 0.25);
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
