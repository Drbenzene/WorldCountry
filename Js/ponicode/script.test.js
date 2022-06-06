const rewire = require("rewire")
const script = rewire("../script")
const ready = script.__get__("ready")
// @ponicode
describe("ready", () => {
    test("0", () => {
        document.body.insertAdjacentHTML("afterbegin", `<div id="wrapper0"><div>
        	<div class="btn"></div>
        	<div class=")"></div>
        </div>
        </div>`)
        let result = ready()
        expect(result).toMatchSnapshot()
        expect(document.getElementById("wrapper0")).to.matchSnapshot()
        document.body.removeChild(document.getElementById("wrapper0"))
    })
})
