<script>
  export let href;
</script>

<a {href}><slot /></a>

<style>
  a {
    position: relative;
    padding: 0.8rem 1rem;
    color: var(--dmt-cool-green);
    font-weight: 600;
    background-color: rgba(var(--dmt-cool-green-rgb), 0.15);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    background-color: rgba(var(--dmt-cool-green-rgb), 0.2);
  }

  a:hover {
    background-color: rgba(var(--dmt-cool-green-rgb), 0.25);
  }
</style>
