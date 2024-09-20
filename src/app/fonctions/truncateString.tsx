export function truncateString(str, num, isUpperCase = false) {
    const truncated = str.length !== num ? str.slice(0, num) : str;
    return isUpperCase ? truncated.toUpperCase() : truncated;
}