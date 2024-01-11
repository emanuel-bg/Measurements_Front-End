
export default function tester(tests, method) {
    tests.map(function singleItem(item) {
        const actual = method(item.input);
        const expected = item.output;

        test(item.name, () => {
            expect(actual).toBe(expected);
        });
    });
}
