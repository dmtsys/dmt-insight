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
    {/each}
  </tbody>
</table>
