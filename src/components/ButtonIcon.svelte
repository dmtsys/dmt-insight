<button on:click><slot /></button>

<style>
  button {
    position: relative;
    display: block;
    padding: 0.5rem;
    margin: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
  }

  button:hover,
  button:focus {
    color: var(--dmt-cool-green);
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: var(--dmt-cool-green);
    opacity: 0;
    transition: opacity 0.2s;
  }

  button:hover::before {
    opacity: 0.2;
  }

  button:focus::before {
    opacity: 0.25;
  }
</style>
