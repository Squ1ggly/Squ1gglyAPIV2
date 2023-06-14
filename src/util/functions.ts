export function isNumberBetween1And100(number: number): boolean {
  return number <= 100 && number > 0;
}

export function whatIsThis(input: unknown) {
  return typeof input;
}