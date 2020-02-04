describe('getWordCount()', function() {
    it('should find four words', function() {
        expect(getWordCount('I have four words!').to.equal(4));
    });
    it('should find no words', function() {
        expect(getWordCount('      ').to.equal(0));
    });
});