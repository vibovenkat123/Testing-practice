function capitalizeFirst(string: String) {
  let firstChar: string = string.charAt(0).toUpperCase();
  let restOfString: string = string.slice(1);
  return firstChar + restOfString;
}
export default capitalizeFirst;
