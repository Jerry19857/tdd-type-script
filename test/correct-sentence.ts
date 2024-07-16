export function correctSentence(text: string): string {
    let corrected = text.charAt(0).toUpperCase() + text.slice(1);
    if (corrected.charAt(corrected.length - 1) !== '.') {
        corrected += '.';
    }
    return corrected;
};