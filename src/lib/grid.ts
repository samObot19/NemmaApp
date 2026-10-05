/**
 * Column count for a ruled grid of `count` items: the widest option up to
 * `max` that leaves the fewest empty slots in the last row.
 */
export function gridColumns(count: number, max: 3): 2 | 3;
export function gridColumns(count: number, max: 4): 2 | 3 | 4;
export function gridColumns(count: number, max: 3 | 4): 2 | 3 | 4 {
  let best: 2 | 3 | 4 = 2;
  let fewestEmpty = Infinity;
  for (const columns of [4, 3, 2] as const) {
    if (columns > max) continue;
    const empty = (columns - (count % columns)) % columns;
    if (empty < fewestEmpty) {
      best = columns;
      fewestEmpty = empty;
    }
  }
  return best;
}
