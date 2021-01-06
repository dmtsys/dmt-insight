<script>
  export let data = [];
</script>

<table>
  <thead>
    <tr>
      <th>Address</th>
      <!-- <th>Device tag</th> -->
      <th>Connected</th>
      <th>Protocol</th>
      <th>Lane</th>
      <th>Remote device key</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td>{row.address}</td>
        <!-- <td class="device_tag">{row.deviceTag}</td> -->
        <td class="connected" class:yes={row.ready}>{row.ready ? 'YES' : '✖'}</td>
        <td class="protocol">{row.protocol}</td>
        <td class="lane">{row.lane}</td>
        <td class="device_key" title={row.remotePubkeyHex}>{row.remotePubkeyHex.substring(0, 8)}...</td>
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
    max-width: 700px;
  }

  .connected {
    color: var(--warning);
    font-weight: bold;
  }

  .connected.yes {
    color: var(--dmt-cool-green);
  }

  .device_tag {
    color: var(--dmt-cool-cyan);
  }

  .device_key {
    color: var(--dmt-yellow);
  }

  .protocol, .lane {
    color: var(--dmt-bright-cyan);
  }
</style>
