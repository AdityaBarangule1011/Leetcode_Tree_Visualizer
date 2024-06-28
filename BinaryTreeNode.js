export class BinaryTreeNode {
    value = null;
    left = null;
    right = null;

    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    setLeft(node){
        this.left = node;
    }

    setRight(node){
        this.right = node;
    }
    
    getHeight(){
        //TO DO < WE have to implement 
        const leftheight = this.left?.getHeight() || 0;
        const rightheight = this.right?.getHeight() || 0;
        return Math.max(leftheight, rightheight) + 1;
    }

    
}