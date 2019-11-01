import test from "ava"
import removeIfPrefix from "."

test("main", (t) => {
    t.deepEqual(removeIfPrefix({
        a: {
            _a: "a",
            b: 1,
        },
        _b: ["b"],
    }, "_"), { a: { b: 1 } })
})
