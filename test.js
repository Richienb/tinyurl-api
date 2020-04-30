const test = require("ava")
const tinyurl = require(".")

test("main", async t => {
	t.is(await tinyurl("https://google.com"), "https://tinyurl.com/mbq3m")
})
