class analyze {
  average: number;
  min: number;
  max: number;
  constructor(array: number[]) {
    this.average = this.averageNumber(array);
    this.min = Math.min(...array);
    this.max = Math.max(...array);
  }
  sum(array: number[], length: number = array.length - 1) {
    if (length == 0) {
      return array[length];
    }
    return array[length] + this.sum(array, length - 1);
  }
  averageNumber(array: number[]) {
    let sum: number = this.sum(array);
    return sum / array.length;
  }
}
export default analyze;
