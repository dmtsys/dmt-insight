<script>
  export let href;
</script>

<a {href}><slot /></a>

<style>
  a {
    display: inline-block;
    position: relative;
    padding: 0.8rem 1rem;
    margin-right: 0.5rem;
    color: var(--dmt-cool-green);
    color: var(--dmt-cool-cyan);
    font-weight: 600;
    background-color: rgba(var(--dmt-cool-cyan-rgb), 0.15);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    background-color: rgba(var(--dmt-cool-cyan-rgb), 0.2);
  }

  a:hover {
    background-color: rgba(var(--dmt-cool-cyan-rgb), 0.25);
  }
</style>
