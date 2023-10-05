import { findMultiplesOfaNumber } from "./findMultiplesOfaNumber";

test("findMultiplesOfaNumber", () => {
    expect(findMultiplesOfaNumber(2, 6)).toEqual([2, 4, 6]);
    expect(findMultiplesOfaNumber(3, 10)).toEqual([3, 6, 9]);
    expect(findMultiplesOfaNumber(7, 17)).toEqual([7, 14]);
});