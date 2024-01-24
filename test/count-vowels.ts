export function countVowels(text: string): number {
    const vowels =['a', 'e','i','o','u'];
    let count = 0;
    text.split('').forEach((char) => {
        const isVowels = vowels.includes(char)
        if(isVowels) {
            count++;
        }
    });
    return count;
}