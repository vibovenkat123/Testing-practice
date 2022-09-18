class analyze {
  average: number;
  min: number;
  max: number;
  length: number;
  constructor(array: number[]) {
    this.average = this.averageNumber(array);
    this.min = Math.min(...array);
    this.max = Math.max(...array);
    this.length = array.length;
  }
  sum(array: number[], length: number = array.length - 1): number {
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
