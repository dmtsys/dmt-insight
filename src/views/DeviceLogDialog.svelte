<script>
  import { Dialog } from 'dmt-frontend-components';
  import AnsiUp from 'ansi_up';
  import Mark from 'mark.js';

  export let show;
  // Device log data
  export let data;

  let lineWrap = false;
  let search = '';

  const ansiUp = new AnsiUp();

  $: log = data.map(v => ansiUp.ansi_to_html(v.msg)) || [];

  let logContent;

  $: marker = logContent != null ? new Mark(logContent) : undefined;

  $: log, highlightSearchText(search);

  function highlightSearchText(value) {
    // Always unmark before highlight
    marker?.unmark();

    // Mark value if truthy
    if (value) {
      marker?.mark(value);
    }
  }
</script>

<Dialog bind:show title="Device Log" on:close>
  <div class="log">
    <div class="log__header">
      <label> <input type="checkbox" bind:checked={lineWrap} /> <span>Wrap lines</span> </label>
      <div class="search-wrapper"><input type="search" bind:value={search} placeholder="Search log..." /></div>
    </div>
    <div class="log-content" class:lineWrap bind:this={logContent}>
      {#each log as msg}
        <div>
          {@html msg}
        </div>
      {/each}
    </div>
  </div>
</Dialog>

<style>
  .log {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .log__header {
    flex-shrink: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .search-wrapper {
    margin-left: 1.5rem;
  }

  .log-content {
    flex-grow: 1;
    height: 100%;
    padding: 1rem;
    background-color: black;
    white-space: nowrap;
    border-radius: 0.5rem;
    overflow: auto;
  }

  .log-content.lineWrap {
    white-space: normal;
  }
</style>
