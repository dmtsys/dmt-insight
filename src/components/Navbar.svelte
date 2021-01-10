<script>
  import Logo from './Logo.svelte';
  import NavLink from './NavLink.svelte';
  import DeviceInfo from './DeviceInfo.svelte';
</script>

<nav class="view-container">
  <Logo />
  <div>
    <NavLink href="#log">Device Log</NavLink>
    <NavLink href="#json">Raw JSON</NavLink>
    <DeviceInfo deviceData={{}} />
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
</style>
