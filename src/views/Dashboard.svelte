<script>
  import Navbar from '../components/Navbar.svelte';

  import LogView from './LogView.svelte';
  import RawJsonDialog from './RawJSONDialog.svelte';

  import NearbyDevicesTable from '../tables/NearbyDevicesTable.svelte';
  import ConnectionsTable from '../tables/ConnectionsTable.svelte';
  import PeerlistTable from '../tables/PeerlistTable.svelte';

  import { hash } from '../stores/hash';

  export let state;

  let logLineWrap = false;
  let logSearchText = '';
</script>

<Navbar />

<div class="view-container">
  <section>
    <h1>Nearby devices</h1>
    <NearbyDevicesTable data={state.nearbyDevices} />
  </section>

  <section>
    <h1>Peerlist</h1>
    <h2>Nodes this device is following</h2>
    <PeerlistTable data={state.peerlist} />
  </section>

  <section>
    <h1>Outgoing Connections</h1>
    <div class="connections-grid">
      <div class="connections-grid__left">
        <!-- <h2>Outgoing</h2> -->
        <ConnectionsTable data={state.connectionsOut} />
      </div>
    </div>
  </section>

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

  <!-- <section>
    <div class="log__header">
      <h1>Log</h1>
      <div class="log__header__inputs">
        <label> <input type="checkbox" bind:checked={logLineWrap} /> <span>Wrap lines</span> </label>
        <div class="search-wrapper"><input type="search" bind:value={logSearchText} placeholder="Search log..." /></div>
      </div>
    </div>
    <LogView data={state.log || []} lineWrap={logLineWrap} search={logSearchText} />
  </section> -->
</div>

{#if $hash === '#json'}
  <RawJsonDialog data={state} />
{/if}

<style>
  section {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }

  h2 {
    color: var(--dmt-silver);
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

  .log__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .log__header h1 {
    margin: 0;
  }

  .log__header__inputs {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .search-wrapper {
    margin-left: 1.5rem;
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
