import App from './App.svelte';

import { makeConnectedStore } from 'connectome/stores';

const address = window.location.hostname;
const port = 7780;

const protocol = 'dmt';
const lane = 'gui';

const { connected, state } = new makeConnectedStore({ address, port, protocol, lane });

const app = new App({
  target: document.body,
  props: {
    connected,
    state
  }
});

export default app;
