# Mini Tactics Lab

Browser-playable private-shop auto battler prototype with original units, shared inventory, bench/board placement, merging, selling, timed prep, and best-of-three rounds.

## Play

Open `index.html` in a browser, or serve the folder locally:

```powershell
py -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/index.html`.

## Development

There is no build step. After JavaScript edits, run:

```powershell
node --check src/game.js
```
