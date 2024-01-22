export function acceptablePasswordIII(password: string): boolean {
    const digits = '0123456789';
    let isValid = false;
    password.split('').forEach((char) => {
        if (digits.includes(char) && password.length >= 6 && isNaN(+password)) {
            isValid = true;
        }
    });
    return isValid;
}