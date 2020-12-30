<script>
  export let data = [];
</script>

<table>
  <thead>
    <tr>
      <th>Address</th>
      <th>Protocol</th>
      <th>Lane</th>
      <th>Remote device key</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td>{row.address}</td>
        <td>{row.protocol}</td>
        <td>{row.lane}</td>
        <td title={row.deviceKey}>{row.deviceKey.substring(0, 8)}...</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    max-width: 550px;
  }
</style>
