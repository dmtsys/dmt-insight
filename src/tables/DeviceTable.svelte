<script>
  export let data;
</script>

<table class="vertical">
  <tbody>
    <tr>
      <th>Name</th>
      <td class="device_name">{data.deviceName}</td>
    </tr>
    <tr>
      <th>DMT version</th>
      <td class="version">{data.dmtVersion}</td>
    </tr>
    <tr>
      <th>MPV version</th>
      <td class="version">{data.mpvVersion}</td>
    </tr>
    <tr>
      <th>Local IP</th>
      <td class="device_ip">{data.ip}</td>
    </tr>
    <tr>
      <th>Platform</th>
      <td class="platform">{data.platform}</td>
    </tr>
    <tr>
      <th>AP Mode</th>
      <td class="ap_mode" class:yes={data.apMode}>{data.apMode}</td>
    </tr>
    <tr>
      <th>Device key</th>
      <td class="device_key" title={data.deviceKey}>
        {#if data.deviceKey}{data.deviceKey.substring(0, 8)}...{/if}
      </td>
    </tr>
  </tbody>
</table>

<style>
  table {
    max-width: 300px;
    white-space: nowrap;
  }

  .device_name {
    color: var(--dmt-cool-cyan);
    font-weight: bold;
  }

  .version {
    color: var(--dmt-silver);
    font-size: 0.7rem;
  }

  .device_ip {
    color: var(--dmt-cool-green);
  }

  .platform {
    color: var(--dmt-silver);
  }

  .ap_mode {
    color: var(--warning);
    font-weight: bold;
  }

  .ap_mode.yes {
    color: var(--dmt-cool-green);
  }

  .device_key {
    color: var(--dmt-yellow);
  }
</style>
