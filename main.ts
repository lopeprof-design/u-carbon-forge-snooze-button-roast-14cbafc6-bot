// Snooze Button Roast — writes one roast of an alarm clock that rings
// at 6 AM on a Saturday to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My alarm clock rang at 6 AM on a Saturday like it had somewhere to be — it doesn't, it has a date with the bottom of a drawer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
