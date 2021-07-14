<script>
  export let data = [];
</script>

<table>
  <thead>
    <tr>
      <th>Device</th>
      <th>DMT version</th>
      <th>Local IP</th>
      <th>Platform</th>
      <th>Node.js</th>
      <th>Uptime</th>
      <th>User</th>
      <th>AP SSID</th>
      <th>Device key</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr class:stale={row.stale}>
        <td class="device_name">
          {#if row.thisDevice}
            <span>this</span>
          {/if}
          {row.deviceName}
        </td>
        <td class="dmt_version"><span>{row.versionCompareSymbol ? row.versionCompareSymbol : ''}</span> {row.dmtVersion}</td>
        <td class="device_ip">{row.ip}</td>
        <td class="platform">{row.platform}</td>
        <td class="nodejs_version">{row.nodejsVersion}</td>
        <td class="uptime">{row.uptime}</td>
        <td class="user">{row.username}</td>
        <td class="apssid">{row.apssid ? row.apssid : '/'}</td>
        <td class="device_key" title={row.deviceKey}>{row.deviceKey.substring(0, 8)}...</td>
      </tr>
    {:else}
      <tr>
        <td class="table-empty-text" colspan="100">No nearby devices found</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table tr.stale td {
    color: #777;
  }

  .device_name {
    color: var(--dmt-cool-cyan);
    font-weight: bold;
  }

  .device_name span {
    font-weight: normal;
    /*background-color: var(--dmt-silver);*/
    background-color: var(--dmt-cool-cyan);
    font-size: 0.7rem;
    color: #222;
    border-radius: 2px;
    padding: 0 2px;
  }

  .dmt_version, .nodejs_version {
    color: var(--dmt-silver);
    font-size: 0.7rem;
  }

  .dmt_version span {
    color: var(--dmt-cool-cyan);
    display: inline-block;
    width: 10px;
  }

  .device_ip, .user {
    color: var(--dmt-cool-green);
  }

  .platform, .apssid {
    color: var(--dmt-silver);
  }

  .device_key {
    color: var(--dmt-yellow);
  }
</style>
