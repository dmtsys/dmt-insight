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
        <td class="device_key" title={row.deviceKey}>{row.deviceKey.substring(0, 8)}...</td>
      </tr>
    {:else}
      <tr>
        <td class="table-empty-text" colspan="100">No connections found</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    max-width: 550px;
  }

  .device_key {
    color: var(--dmt-yellow);
  }
</style>
