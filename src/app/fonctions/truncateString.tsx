export function truncateString(str:string, num:number, isUpperCase:boolean = false) {
    const truncated = str.length !== num ? str.slice(0, num) : str;
    return isUpperCase ? truncated.toUpperCase() : truncated;
}