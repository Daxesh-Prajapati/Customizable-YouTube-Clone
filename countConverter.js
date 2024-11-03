function countConverter(count) {
  if (count >= 1000000000) return Math.floor(count / 1000000000) + "B";
  else if (count >= 1000000) return Math.floor(count / 1000000) + "M";
  else if (count >= 1000) return Math.floor(count / 1000) + "K";
  else return count;
}
export default countConverter;
