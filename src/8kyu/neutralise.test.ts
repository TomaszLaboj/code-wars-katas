import { neutralise } from "./neutralise";

test("should return all zeros", () => {
    expect(neutralise("+++", "---")).toEqual("000");
});
