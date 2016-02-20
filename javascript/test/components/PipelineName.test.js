var PipelineName = require("../../src/components/PipelineName");

describe("PipelineName", function() {
    describe("#render", function() {
        var stage = new PipelineName().render("Dashy");

        it("creates a DOM representation", function() {
            expect(stage[0]).toEqual("div");
        });

        it("has CSS class", function() {
            expect(stage[1]).toEqual({
                "class": "pipeline-name"
            });
        });

        it("has contents based on its name", function() {
            expect(stage[2]).toEqual("Dashy");
        });
    });
});