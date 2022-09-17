class analyze {
  average: number;
  constructor(array: number[]) {
    this.average = this.averageNumber(array);
  }
  averageNumber(array: number[], length: number = array.length - 1) {
    if (length == 0) {
      return array[length];
    }
    return array[length] + this.averageNumber(array, length - 1);
  }
}
export default analyze;
