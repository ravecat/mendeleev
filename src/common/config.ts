export const RESPONSIVE = process.env.RESPONSIVE
  ? process.env.RESPONSIVE.split(",").map(Number)
  : [];
