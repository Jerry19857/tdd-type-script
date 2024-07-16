export class AcceptablePassword {
  validatePassword(password: string): boolean {
    let num = ['0','1','2','3','4','5','6','7','8','9'];
      if (password.length > 6 && password.split('').some((char) => num.includes(char))){
        return true;
      }
    return false;
  }
}
