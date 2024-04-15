export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
}
