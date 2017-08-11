require('mocha');
var expect = require('chai').expect;
var check = require('../index');

describe('Validate that image is loaded correctly.', function() {
    it('Image loads correctly', function() {
        var result = check.image.isLoaded("https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg")
        expect(result).to.equal(true);
    });

    it('Image is not loaded.', function() {
        var result = check.image.isLoaded("https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.png")
        expect(result).to.equal(false);
    });
});