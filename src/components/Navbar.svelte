<script>
  import { Button } from 'dmt-frontend-components';
  import Logo from './Logo.svelte';
  import DeviceInfo from './DeviceInfo.svelte';

  export let deviceData = {};
</script>

<nav class="view-container">
  <Logo />
  <div class="links">
    <div>
      <Button href="#log" size="lg">Device Log</Button>
    </div>
    <div>
      <Button href="#json" size="lg">Raw JSON</Button>
    </div>
    <div>
      <DeviceInfo {deviceData} />
    </div>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .links > div {
    display: inline-block;
    margin-left: 0.5rem;
  }
</style>
