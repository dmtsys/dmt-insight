<script>
  import { scale, fade } from 'svelte/transition';
  import { backOut, quadIn } from 'svelte/easing';
  import JSONTree from 'svelte-json-tree';
  import ButtonIcon from '../components/ButtonIcon.svelte';
  import { hash } from '../stores/hash';

  export let data = true;

  // Dialog only opens when `#json`
  function closeDialog() {
    $hash = '';
  }
</script>

<div class="dialog-backdrop" transition:fade={{ duration: 150 }} on:click|self={closeDialog}>
  <div in:scale={{ start: 0.9, easing: backOut, duration: 200 }} out:scale={{ start: 0.9, easing: quadIn, duration: 150 }}>
    <div class="dialog-container">
      <div class="view-container">
        <div class="dialog">
          <div class="dialog__header">
            <h1>Raw JSON</h1>
            <ButtonIcon on:click={closeDialog}>
              <!-- https://css.gg/close -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                />
              </svg>
            </ButtonIcon>
          </div>
          <div class="dialog__content">
            <JSONTree value={data} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div />

<style>
  .dialog-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialog-container {
    max-width: calc(920px + 3rem);
    height: 80vh;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    background-color: var(--dmt-magenta);
    border-radius: 0.5rem;
  }

  .view-container {
    height: 100%;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
  }

  .dialog__header {
    flex-shrink: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .dialog__content {
    flex-grow: 1;
    position: relative;
    background-color: black;
    padding: 1rem;
    overflow-y: auto;
    border-radius: 0.5rem;

    /* JSON tree styling (VSCode dark theme) */
    /* color */
    --json-tree-string-color: #ce9178;
    --json-tree-symbol-color: #ce9178;
    --json-tree-boolean-color: #569cd6;
    --json-tree-function-color: #569cd6;
    --json-tree-number-color: #d4d4d4;
    --json-tree-label-color: #9cdcfe;
    --json-tree-arrow-color: #727272;
    --json-tree-null-color: #569cd6;
    --json-tree-undefined-color: #569cd6;
    --json-tree-date-color: #569cd6;
    /* position */
    --json-tree-li-indentation: 1rem;
    --json-tree-li-line-height: 1.5;
    /* font */
    --json-tree-font-size: 13px;
    --json-tree-font-family: 'Courier New', Courier, monospace;
  }

  h1 {
    margin: 0;
  }
</style>
