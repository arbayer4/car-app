const compareKey = (key) => (a, b) => {
  // a[key] < b[key] == b[key] ? (a[key] < b[key] ? -1 : 1) : 0;
};

export const AZ = (arr) => arr.sort(compareKey("make"));
export const ZA = (arr) => arr.sort(compareKey("make")).reverse();
export const lowestFirst = (arr) =>
  arr.sort((a, b) => parseInt(a.price) - parseInt(b.price));
export const highestFirst = (arr) =>
  arr.sort((a, b) => parseInt(b.price) - parseInt(a.price));
