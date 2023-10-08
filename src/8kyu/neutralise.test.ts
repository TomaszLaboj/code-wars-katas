import { neutralise } from "./neutralise";

test("should return all zeros", () => {
    expect(neutralise("+++", "---")).toEqual("000");
});
test("should return -0-", () => {
    expect(neutralise("-+-", "---")).toEqual("-0-");
});
