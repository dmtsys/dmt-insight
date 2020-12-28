<script>
  import Logo from './Logo.svelte';
  import NavLink from './NavLink.svelte';
</script>

<nav>
  <Logo />
  <NavLink href="#json">Raw JSON</NavLink>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
