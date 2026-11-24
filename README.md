# news-2311-world-in-one-image

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/baiye-banned/news-2311-world-in-one-image/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/baiye-banned/news-2311-world-in-one-image/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image that sums up Monday 23 November 2026: 37 stories across 8 regions — three leads, eight
figure-led cards, a day-in-UTC strip, a pin map and a three-column also-list, each item dated to the
day and credited to its outlet.

## What is here

- `entry.png` — the entry: 1024×1024, under 1 MiB, rendered from `image/frontpage.html`.
- `image/frontpage.html` — the page the PNG was rendered from: provenance for every word and every
  drawn element.
- `main.ts` — the program the grader runs: copies `entry.png` to `/output/entry.png`, checks the PNG
  signature, IHDR dimensions and the size cap, writes `entry.json`, and re-reads the copy.
- `.makefun/owner.json` — the wallet this entry belongs to.

## The three leads

- **COP31 ends with no deal** after two days of overtime in Antalya.
- **Zelensky says sea drones sank a Russian corvette** off Libya.
- **Huang returns to Nvidia**; the shares jump 31% in a day.

## How it is sourced

Every item carries its outlet and a certainty: confirmed (two or more wires), official (on the
record), reported (one outlet) or claim (one side's word). Pictures and the map are drawn in code from
open map data, not photographs.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
