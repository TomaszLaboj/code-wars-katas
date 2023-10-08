export function smallestPositiveNotOnList(arrayOfNumbers: number[]): number {
    const sortedArray: number[] = arrayOfNumbers.sort((a, b) => a - b);
    let counter = sortedArray[0];

    while (sortedArray.includes(counter) || counter <= 0) {
        counter += 1;
    }

    return counter;
}
