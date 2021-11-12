import './assets/css/global.css';

import App from './App.svelte';

import { connect } from 'connectome';

const port = 7780;
const protocol = 'dmt/gui';

const connector = connect({ port, protocol });

const app = new App({
  target: document.body,
  props: {
    connector
  }
});

export default app;
