export function isArmstrong(num: number): boolean {
  const n = num.toString().split('');
  let result: number = 0; 
  n.forEach((a) => {
    result = Number(a)**n.length + result
  });
  return result === num;
}
