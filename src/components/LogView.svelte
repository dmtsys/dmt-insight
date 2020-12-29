<script>
  import AnsiUp from 'ansi_up';

  // This should be the raw data form the state
  export let data;
  export let search = '';
  export let lineWrap = false;

  const ansiUp = new AnsiUp();

  $: log = data.map(v => ansiUp.ansi_to_html(v.msg)) || [];
</script>

<div class="log-content" class:lineWrap>
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
    height: 80vh;
    white-space: nowrap;
  }

  .log-content.lineWrap {
    white-space: normal;
  }
</style>
