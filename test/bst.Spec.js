describe('An object instantiated with new Node(0)', function() {
    var node;

    beforeEach(function() {
        node = new Node(0);
    });

    // afterEach(function() {
    //     node = null;
    // });

    it('should have val = 0', function() {
        expect(node.val).toEqual(0);
    });

    it('should have left = null', function() {
        expect(node.left).toBeNull();
    });

    it('should have right = null', function() {
        expect(node.right).toBeNull();
    });
});

// describe('An object instantiated with new Node(0, 1, new Node(0, 1, 1))', function() {
//     var node;

//     beforeEach(function() {
//         node = new Node(0, 1, new Node(0, 1, 1));
//     });

//     afterEach(function() {
//         node = null;
//     });

//     it('should have val = 0', function() {
//         expect(node.val).toEqual(0);
//     });

//     it('should have left = 1', function() {
//         expect(node.left.val).toEqual(1);
//     });

//     it('should have left.left = null', function() {
//         expect(node.left.left).toBeNull();
//     });

//     it('should have left.right = null', function() {
//         expect(node.left.right).toBeNull();
//     });

//     it('should have left as a leaf', function() {
//         expect(typeof(node.left)).toEqual(typeof(Leaf));
//     });

//     it('should have right = 0', function() {
//         expect(node.right.val).toEqual(0);
//     });

//     it('should have right.left = 1', function() {
//         expect(node.right.left.val).toEqual(1);
//     });

//     it('should have right.right = 1', function() {
//         expect(node.right.right.val).toEqual(1);
//     });

//     it('should have right.left.left = null', function() {
//         expect(node.right.left.left).toBeNull();
//     });

//     it('should have right.left.right = null', function() {
//         expect(node.right.left.right).toBeNull();
//     });

//     it('should have right.left as a leaf', function() {
//         expect(typeof(node.right.left)).toEqual(typeof(Leaf));
//     });

//     it('should have right.right.left = null', function() {
//         expect(node.right.right.left).toBeNull();
//     });

//     it('should have right.right.right = null', function() {
//         expect(node.right.right.right).toBeNull();
//     });

//     it('should have right.right as a leaf', function() {
//         expect(typeof(node.right.right)).toEqual(typeof(Leaf));
//     });
// });