export function determineSign(num: number): string {
  if (num=== 0 ) {
    return 'zero'
  } else if (num < 0) {
    return 'negative'
  }
  return 'positive'
}
