import './assets/css/global.css';

import App from './App.svelte';

import { makeConnectedStore } from 'connectome/stores';

const port = 7780;

const protocol = 'dmt';
const lane = 'gui';

const { connected, state } = new makeConnectedStore({ port, protocol, lane });

const app = new App({
  target: document.body,
  props: {
    connected,
    state
  }
});

export default app;
