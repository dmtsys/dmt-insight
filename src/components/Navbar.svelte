<script>
  import Logo from './Logo.svelte';
  import NavLink from './NavLink.svelte';
</script>

<nav class="container">
  <Logo />
  <NavLink href="#json">Raw JSON</NavLink>
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
