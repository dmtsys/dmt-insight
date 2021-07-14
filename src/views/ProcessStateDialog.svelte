<script>
  import { Dialog } from 'dmt-frontend-components';
  import JSONTree from 'svelte-json-tree';

  export let show;
  // This should be the raw data from the state
  export let data;

  let wrapper;

  $: if (show && wrapper) {
    // Open one-level of the JSON tree component
    wrapper.querySelector('.container').click();
  }
</script>

<Dialog bind:show title="State" large on:close>
  <div bind:this={wrapper} class="json-tree-wrapper">
    <JSONTree value={data} />
  </div>
</Dialog>

<style>
  .json-tree-wrapper {
    height: 100%;
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
</style>
