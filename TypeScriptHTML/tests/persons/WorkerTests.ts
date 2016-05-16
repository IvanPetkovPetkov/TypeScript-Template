/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../Scripts/typings/assert/assert.d.ts" />

//var assertRequire = require('assert');

describe("Test Suite 1", () => {
    it("Test A", () => {
        var resultBool: boolean = true;
        it('should add two numbers together', () => {
            var result: number = 2 + 3;
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
        assert.equal(true, this.resultBool, 'Not true');
    });
});


