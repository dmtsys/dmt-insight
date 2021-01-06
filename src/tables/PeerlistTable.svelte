<script>
  export let data = [];
</script>

<table>
  <thead>
    <tr>
      <th>Address</th>
      <th>Device tag</th>
      <th>Connected</th>
      <th>DMT version</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td>{row.address}</td>
        <td>{row.deviceTag}</td>
        <td class="connected" class:ok={row.connected}>{row.connected ? 'YES' : '✖'}</td>
        <td><span class="version-compare-symbol">{row.versionCompareSymbol}</span> <span>{row.peerState.dmtVersion}</span></td>
      </tr>
    {:else}
      <tr>
        <td class="table-empty-text" colspan="100">No peers connected</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    max-width: 550px;
  }

  .connected {
    color: var(--warning);
    font-weight: bold;
  }

  .connected.ok {
    color: var(--dmt-cool-green);
  }

  .version-compare-symbol {
    font-weight: bold;
  }
</style>
