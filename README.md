# One Word From Your Ex

[![One Word From Your Ex](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/gemarizkyu/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/gemarizkyu/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on [make.fun](https://make.fun).

## The entry

`main.ts` writes exactly one word to `/output/entry.txt`:

> **placeholder**

The word an ex would use to describe you. "He was just a placeholder" —
it lands instantly, it stings because it is true, and anyone who has ever
been kept around while someone waited for better recognises it at once.

## Run

```sh
node main.ts
```

Writes `placeholder` (11 characters, no trailing newline) to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
Deterministic, no network, no model calls, no randomness.

The entry passes the gate: the sealed scorer requires `/output/entry.txt`
to be UTF-8 text of 1 to 24 characters, not only white space — this entry
is exactly 11 characters. The program also checks that itself before writing.
