import { smallestPositiveNotOnList } from "./smallestPositiveNotOnList";

test("to find smallest positive which is not on list", () => {
    expect(smallestPositiveNotOnList([1, 2, 3, 4, 5])).toStrictEqual(6);
    expect(smallestPositiveNotOnList([-1, -3])).toStrictEqual(1);
    expect(smallestPositiveNotOnList([-1, 3])).toStrictEqual(1);
    expect(smallestPositiveNotOnList([0, 1, 3, 4])).toStrictEqual(2);
});
