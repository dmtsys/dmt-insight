<script>
  export let href;
</script>

<a {href}><slot /></a>

<style>
  a {
    position: relative;
    padding: 0.8rem 1rem;
    color: var(--dmt-cool-green);
    text-decoration: none;
  }

  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-color: var(--dmt-cool-green);
    opacity: 0.15;
    transition: opacity 0.2s;
  }

  a:hover::before {
    opacity: 0.2;
  }

  a:focus::before {
    opacity: 0.25;
  }
</style>
