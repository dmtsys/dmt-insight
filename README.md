## Get started

Install the dependencies...

```bash
cd dmt-insight
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running.

## dmt-proc

You have to have [dmt-proc](https://github.com/uniqpath/dmt) running on localhost as well.

This frontend will connect to it and display process information.

Note: `dmt-insight` stable version is already bundled with DMT ENGINE `(~/.dmt/apps/insight)`.

**This repository is only for developers, not users.**

## Technical

`App.svelte` simply gets two Svelte stores:

```html

<script>
  export let connected;
  export let state;
</script>
```

`$connected` readable store (true/false) tells if the gui is currently connected to backend.

`$state` is the entire state of `dmt-proc` also obtainable through command line with `dmt state`

