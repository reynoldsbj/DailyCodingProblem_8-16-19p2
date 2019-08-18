/*jshint esversion: 6 */
class BSTNode {
    //new Node(0, 1, new Node(0, new Node(1, 1, 1), 0))
    constructor(val, left, right) {
        var me = this;
        
        me.val = val;

        //nullify
        if (left === undefined)
            left = null;

        //process
        if (left === null || left instanceof BSTNode)
            me.left = left;
        else
            me.left = new BSTNode(left);
        
        //nullify
        if (right === undefined)
            right = null;

        //process
        if(right === null || right instanceof BSTNode)
            me.right = right;
        else
            me.right = new BSTNode(right);
    }
}