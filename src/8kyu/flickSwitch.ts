export function flickSwitch(arr: string[]): boolean[] {
    const booleanArray: boolean[] = [];
    let booleanFlag = true;
    for (const element of arr) {
        if (element !== "flick") {
            booleanArray.push(booleanFlag);
        } else {
            if (booleanFlag === true) {
                booleanFlag = false;
                booleanArray.push(booleanFlag);
            } else {
                booleanFlag = true;
                booleanArray.push(booleanFlag);
            }
        }
    }

    return booleanArray;
}
