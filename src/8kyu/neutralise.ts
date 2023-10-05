export function neutralise(s1: string, s2: string): string {
    const string1: string[] = s1.split("");
    const string2: string[] = s2.split("");
    const outputString: string[] = [];
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2[i]) {
            outputString.push(string1[i]);
        } else {
            outputString.push("0");
        }
    }
    return outputString.join("");
}
