import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I watered my plant for a month before realizing it was plastic, which explains why it's the only thing in my life thriving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
