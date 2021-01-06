<script>
  import AnsiUp from 'ansi_up';
  import Mark from 'mark.js';

  // This should be the raw data form the state
  export let data;
  export let search = '';
  export let lineWrap = false;

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

<div class="log-content" class:lineWrap bind:this={logContent}>
  {#each log as msg}
    <div>
      {@html msg}
    </div>
  {/each}
</div>

<style>
  .log-content {
    padding: 1rem;
    background-color: black;
    overflow: auto;
    height: 70vh;
    white-space: nowrap;
    border-radius: 0.5rem;
  }

  .log-content.lineWrap {
    white-space: normal;
  }
</style>
