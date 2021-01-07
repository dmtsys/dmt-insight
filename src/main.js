import App from './App.svelte';

import { writable } from 'svelte/store';

import { makeConnectedStore } from 'connectome/stores';

const address = window.location.hostname;
const port = 7780;

const protocol = 'dmt';
const lane = 'gui';

const errorStore = new writable({ errors: [] });

const { connected, state } = new makeConnectedStore({ address, port, protocol, lane });

window.onerror = (msg, file, line, col, error) => {
  errorStore.set({ errors: [msg] });
  return true;
};

const app = new App({
  target: document.body,
  props: {
    connected,
    state,
    errorStore
  }
});

export default app;
