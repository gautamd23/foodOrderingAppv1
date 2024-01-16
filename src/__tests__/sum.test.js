import sum from "../components/sum"
test("sum of two numbers", function() {
    const result = sum(2,3);

    expect(result).toBe(5);
})