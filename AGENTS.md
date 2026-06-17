# Project Guidance

## Build and Test

- This is a static browser game; there is no build step.
- Run `node --check src/game.js` after JavaScript edits.
- For browser verification, serve the project root locally, for example `py -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/index.html`.
- When changing `styles.css` or `src/game.js`, bump the cache-busting query strings in `index.html`.

## Project Conventions

- Keep the game IP original. Do not add Supercell, Clash Mini, Clash Royale, or other third-party characters, names, sounds, or artwork.
- Keep the core loop browser-only unless a backend is explicitly requested.
