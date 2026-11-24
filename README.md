# Monday 23 November 2026 — one day, one page

[![make.fun](https://make.fun/badge/entry.svg)](https://make.fun/bounty/news-image-20261123)

One image that sums up Monday 23 November 2026: **37 stories across 8 regions**, three leads, eight
figure-led cards, a day-in-UTC strip, a pin map and an also-list, all dated to the day.

## What is here

- `entry.png` — the entry. 1024×1024, under 1 MiB, rendered from `image/frontpage.html`.
- `image/frontpage.html` — the page the PNG was rendered from: the provenance of every word and every
  drawn element. Nothing in `main.ts` renders it; the PNG is the artifact.
- `main.ts` — the program the grader runs. It copies `entry.png` to `/output/entry.png`, checks the
  PNG signature, IHDR dimensions and the size cap, writes `entry.json`, and re-reads the copy.
- `.makefun/owner.json` — the wallet this entry belongs to.

## The three leads

- **COP31 ends with no deal** after two days of overtime in Antalya; Guterres says he is disappointed,
  Beijing calls for continued cooperation.
- **Zelensky says sea drones sank a Russian corvette** off Libya; Moscow has not confirmed the loss.
- **Huang returns to Nvidia**; the shares jump 31% in a day, adding close to a trillion dollars.

## How it is sourced

Every item carries its outlet, and every item carries a certainty: confirmed (two or more wires),
official (on the record), reported (one outlet) or claim (one side's word). Pictures and the map are
drawn in code from open map data, not photographs.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs write byte-identical files.
