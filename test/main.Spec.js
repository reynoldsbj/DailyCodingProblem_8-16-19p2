describe('SolveProblem(new Node(0, 1, new Node(0, new Node(1, 1, 1), 0)))', function() {
    it('should return 5', function() {
        expect(SolveProblem(new BSTNode(0, 1, new BSTNode(0, new BSTNode(1, 1, 1), 0)))).toEqual(5);
    });
});
