---
date: "2025-11-30"
title: "Building an AI-Powered MTG Deck Analyzer with GitHub Copilot Chat"
subtitle: "Using VS Code + TypeScript to analyze and optimize Magic: The Gathering decks"
keywords: ["mtg", "typescript", "github copilot", "vs code", "scryfall", "moxfield"]
---

Over the past few months I’ve been experimenting with a very specific idea:  
**What if I could analyze Magic: The Gathering decks *inside* VS Code, then ask GitHub Copilot to give me actual strategic advice, cuts, upgrades, and price optimizations based on that analysis?**

The result is a project I shipped this month:  
**[mtg-deck-analyzer](https://github.com/alxhghs/mtg-deck-analyzer)** — a TypeScript Node.js tool designed for **GitHub Copilot Chat**.

It fetches card data from Scryfall, imports decks from Moxfield, builds detailed statistics, and produces small deck-specific JSON caches that Copilot can easily read and reason about. Once the deck is analyzed, you can literally ask VS Code things like:

> *“What are this deck’s weaknesses?”*  
> *“Suggest 10 cuts to get to 100 cards”*  
> *“How can I speed this up to a Bracket 4 power level?”*

Copilot responds using the exact data your analyzer generates.

---

## Why I Built This

I wanted a smooth loop:

1. **Edit decklist**  
2. **Analyze with a simple CLI**  
3. **Open Copilot Chat**  
4. **Ask real deckbuilding questions**

There are great deck tools on the web, but none integrate directly into your editor or cooperate with Copilot.  
This one does—because it structures the analysis in a way large models can easily digest.

The tool is written in TypeScript, uses Scryfall’s free API, supports Moxfield imports, and provides a full suite of utilities: color validation, bracket analysis, hypergeometric probability, budget filtering, and automated AI deck optimization.

---

## GitHub Copilot: The Real Power Multiplier

The project was built **for** Copilot, not just “compatible” with it.

Once you run:

```bash
npm run dev decks/commander/your-deck/moxfield.mtg
```
You can immediately ask Copilot:
* “Help me cut 18 cards.”
* “What holes does this deck have?”
* “Find budget alternatives under $5.”
* “What bracket is this?”

Copilot reads directly from the per-deck cache file (usually only ~30–60KB), which keeps responses fast, grounded, and accurate.

⸻

A Quick Overview of What It Does

The analyzer includes:
* Decklist parser for common formats (.mtg, .txt, Moxfield exports)
* Scryfall data fetcher with a unified cache system
*	Moxfield importer (npm run import <url>)
*	Deck analysis
*	Color distribution
*	Type breakdown
*	Mana curve
*	Average CMC
*	Commander bracket analyzer (Brackets 1–5)
*	Color identity validator
*	Hypergeometric probability calculator
*	AI deck optimizer
*	Card categorizer used by the bracket system

Everything lives in a clean /src structure, with cache files and deck organization kept in predictable directories.

⸻

Perfect Pairing: mtg-code for VS Code

If you’re editing .mtg files, install the VS Code extension:

mtg-code by Johannes Radmer
It adds syntax highlighting, card previews, and IntelliSense for MTG card names.

This makes Copilot Chat even more useful because:
*	card names autocomplete
*	you can hover for oracle text
*	your decklists are much cleaner to maintain

Massive thanks to Johannes Radmer for maintaining this extension.

⸻

Practical Example of the Workflow

Let’s say you have a Moxfield deck:
```
npm run import https://www.moxfield.com/decks/abc123
npm run dev decks/commander/your-deck/moxfield.mtg
```
Once analyzed, open Copilot Chat:

“My deck has 118 cards—what should I cut to reach 100?”

The analyzer produces:
*	a categorized card breakdown
*	curve distribution
*	redundancy detection
*	power-level bracket data
*	cached oracle text
*	mana base recommendations

Copilot uses all of this to give shockingly good suggestions:
“Cut these four high-CMC cards, remove duplicate effects, replace X with Y, and here’s your updated curve and average CMC.”

It’s the closest thing to having a deckbuilding assistant inside your IDE.

⸻

A Tool for Beginners and Power Users

Whether you’re brand new to Magic or building cEDH brews, the tool works for both groups.

Beginners

Follow the GETTING_STARTED.md￼ guide.
It walks through:
*	creating a GitHub account
*	installing VS Code
*	enabling Copilot
*	building your first deck with AI help

Experienced developers

Jump straight to:
```
npm run import
npm run dev
npm run bracket
npm run fetch
```

⸻

Final Thoughts

This is one of the most fun and weirdly practical side projects I’ve built in years.
It sits at the intersection of:
*	Magic: The Gathering
* TypeScript tooling
*	GitHub Copilot intelligence
*	Pure nerd joy

If you want to try it, contribute, or use it as a base for your own MTG tools, the repo is here:

👉 https://github.com/alxhghs/mtg-deck-analyzer

If you have ideas for improvements—let me know!

---