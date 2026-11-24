// Weirdest Job Title: Blind Judge Showdown
// Entry: a single job title, 60 characters at most, written to /output/entry.txt.
// No dependencies, no network, no randomness: the same title every run.

import { mkdirSync, writeFileSync } from "node:fs";

// A real job with one gloriously specific twist: professional mourners exist,
// but being hired to grieve at the funerals of people you never met is the
// joke. Short, vivid, and instantly pictureable — exactly what the blind
// judge's brief rewards: a real-sounding job, stranger than ordinary work,
// with a twist that lands on the first read.
const ENTRY = "Professional Mourner for Funerals of Complete Strangers";

// Second pass: guard the judge's 1–60 character gate so a future edit can
// never silently ship an over-long title.
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`entry must be 1–60 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
