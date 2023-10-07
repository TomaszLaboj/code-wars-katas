import { flickSwitch } from "./flickSwitch";

test("to return true for every item in the list but to return opposite for flick", () => {
    expect(flickSwitch(["codewars", "flick", "code", "wars"])).toStrictEqual([
        true,
        false,
        false,
        false,
    ]);
    expect(
        flickSwitch(["flick", "chocolate", "adventure", "sunshine"])
    ).toStrictEqual([false, false, false, false]);
    expect(
        flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"])
    ).toStrictEqual([true, true, false, false, true]);
    expect(flickSwitch(["john", "flick"])).toStrictEqual([true, false]);
    expect(
        flickSwitch(["flick", "flick", "flick", "flick", "flick"])
    ).toStrictEqual([false, true, false, true, false]);
    expect(flickSwitch(["flick"])).toStrictEqual([false]);
    expect(flickSwitch(["bicycle"])).toStrictEqual([true]);
    expect(flickSwitch([])).toStrictEqual([]);
});
