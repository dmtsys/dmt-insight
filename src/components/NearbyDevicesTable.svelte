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
      <th>Uptime</th>
      <th>User</th>
      <th>AP SSID</th>
      <th>Device key</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td>{row.deviceName}</td>
        <td>{row.dmtVersion}</td>
        <td>{row.ip}</td>
        <td>{row.platform}</td>
        <td>{row.uptime}</td>
        <td>{row.username}</td>
        <td>{row.apssid}</td>
        <td title={row.deviceKey}>{row.deviceKey.substring(0, 8)}...</td>
      </tr>
    {/each}
  </tbody>
</table>
