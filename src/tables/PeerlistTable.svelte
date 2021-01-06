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
        <td class="device_tag">{row.deviceTag}</td>
        <td class="connected" class:yes={row.ready}>{row.ready ? 'YES' : '✖'}</td>
        {#if row.peerState}
          <td class="dmt_version"><span>{row.versionCompareSymbol ? row.versionCompareSymbol : ''}</span> {row.peerState.dmtVersion}</td>
        {/if}
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

  .connected.yes {
    color: var(--dmt-cool-green);
  }

  .device_tag {
    color: var(--dmt-cool-cyan);
  }

  .dmt_version {
    color: var(--dmt-silver);
    font-size: 0.7rem;
  }

  .dmt_version span {
    /*font-weight: bold;*/
    color: var(--dmt-cool-cyan);
    display: inline-block;
    width: 10px;
  }
</style>
