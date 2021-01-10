<script>
  export let data = [];
</script>

<table>
  <thead>
    <tr>
      <th>Peer</th>
      <th>Address</th>
      <th>Operational</th>
      <th>DMT version</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td class="device_tag">{row.deviceTag}</td>
        <td>{row.address}</td>
        <td class="operational" class:yes={row.operational}>{row.operational ? 'YES' : '✖'}</td>

        <td class="dmt_version">
          {#if row.peerState}
            <span>{row.versionCompareSymbol ? row.versionCompareSymbol : ''}</span> {row.peerState.dmtVersion}
          {:else}
            <span></span> unknown
          {/if}
        </td>
      </tr>
    {:else}
      <tr>
        <td class="table-empty-text" colspan="100">No peers</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    max-width: 600px;
  }

  .operational {
    color: var(--warning);
    font-weight: bold;
  }

  .operational.yes {
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
