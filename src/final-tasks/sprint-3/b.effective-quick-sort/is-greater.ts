/**
 * @param p1 {[string, number, number]}
 * @param p2 {[string, number, number]}
 */
export const isGreater = (p1, p2) => {
  if (p1[1] !== p2[1]) return p1[1] > p2[1];
  if (p1[2] !== p2[2]) return p1[2] < p2[2];

  return p1[0] < p2[0]
}