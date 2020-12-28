import { readable } from 'svelte/store';

/**
 * A writable store of the URL hash
 * @returns {import('svelte/store').Writable<string>}
 */
function hashStore() {
  const hash = readable(window.location.hash, set => {
    const update = () => set(window.location.hash);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  });

  return {
    subscribe: hash.subscribe,
    set: v => (window.location.hash = v),
    update: fn => set(fn(window.location.hash))
  };
}

export const hash = hashStore();
