<script>
  import Navbar from '../components/Navbar.svelte';
  import NearbyDevicesTable from '../components/NearbyDevicesTable.svelte';
  import ConnectionsTable from '../components/ConnectionsTable.svelte';
  import PeerlistTable from '../components/PeerlistTable.svelte';
  import RawJsonDialog from './RawJSONDialog.svelte';
  import { hash } from '../stores/hash';

  export let state;
</script>

<Navbar />

<div class="view-container wrapper">
  <section>
    <h1>Nearby devices</h1>
    <NearbyDevicesTable data={$state.nearbyDevices} />
  </section>

  <section>
    <h1>Connections</h1>
    <div class="connections-grid">
      <div class="connections-grid__left">
        <h2>Outgoing</h2>
        <ConnectionsTable data={[]} />
      </div>
      <div class="connections-grid__right">
        <h2>Incoming</h2>
        <ConnectionsTable data={[]} />
      </div>
    </div>
  </section>

  <section>
    <h1>Peerlist</h1>
    <PeerlistTable data={$state.peerlist} />
  </section>
</div>

{#if $hash === '#json'}
  <RawJsonDialog data={$state} />
{/if}

<style>
  section {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }

  .connections-grid {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }

  .connections-grid__left,
  .connections-grid__right {
    flex-grow: 1;
  }

  @media (min-width: 1024px) {
    .connections-grid {
      flex-direction: row;
    }

    .connections-grid__left {
      padding-right: 0.75rem;
    }

    .connections-grid__right {
      padding-left: 0.75rem;
    }
  }
</style>
