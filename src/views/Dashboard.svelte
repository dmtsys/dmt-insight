<script>
  import Navbar from '../components/Navbar.svelte';

  import DeviceLogDialog from './DeviceLogDialog.svelte';
  import RawJsonDialog from './RawJSONDialog.svelte';

  import NearbyDevicesTable from '../tables/NearbyDevicesTable.svelte';
  import ConnectionsTable from '../tables/ConnectionsTable.svelte';
  import PeerlistTable from '../tables/PeerlistTable.svelte';

  import { hash } from '../stores/hash';

  export let state;
</script>

<Navbar />

<div class="view-container">
  <section>
    <h1>Nearby devices</h1>
    <NearbyDevicesTable data={state.nearbyDevices} />
  </section>

  <section>
    <h1>Peerlist</h1>
    <h2>[ permanent outgoing connections · using dmt/fiber protocol ]</h2>
    <PeerlistTable data={state.peerlist} />
  </section>

  <!-- <section>
    <h1>Outgoing Connections</h1>
    <div class="connections-grid">
      <div class="connections-grid__left">
        <ConnectionsTable data={state.connectionsOut} />
      </div>
    </div>
  </section> -->

  <section>
    <h1>Incoming Connections</h1>
    <div class="connections-grid">
      <div class="connections-grid__left">
        <!-- <div class="connections-grid__right"> -->
        <!-- <h2>Incoming</h2> -->
        <ConnectionsTable data={state.connectionsIn} />
      </div>
    </div>
  </section>
</div>

{#if $hash === '#log'}
  <DeviceLogDialog data={state.log || []} on:close={() => ($hash = '')} />
{:else if $hash === '#json'}
  <RawJsonDialog data={state} on:close={() => ($hash = '')} />
{/if}

<style>
  section {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }

  h2 {
    color: var(--dmt-silver);
    font-size: 0.8rem;
  }

  .view-container {
    padding-bottom: 10px; /* 💡 this behaves weirdly, value does not have the effect, always the same distance... we need something here otherwise the last table is touching the site bottom */
  }

  .connections-grid {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }

  .connections-grid__left {
    flex-grow: 1;
  }

  .connections-grid__right {
    flex-grow: 1;
    padding-top: 1rem;
  }

  @media (min-width: 1024px) {
    .connections-grid {
      flex-direction: row;
    }

    .connections-grid__left {
      padding-right: 0.75rem;
    }

    .connections-grid__right {
      padding-top: 0;
      padding-left: 0.75rem;
    }
  }
</style>
