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
        <td>{row.connected ? 'ok' : '✖'}</td>
        <td><span>{row.versionCompareSymbol}</span> <span>{row.peerState.dmtVersion}</span></td>
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
</style>
