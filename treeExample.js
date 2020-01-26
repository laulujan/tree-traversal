// function TreeNode(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }

// var root = new TreeNode("A");

// root.right = new TreeNode("C");

// root.left = new TreeNode("B");

// root.left.left = new TreeNode("D");

// root.left.right = new TreeNode("E");

function BinaryTree(){
    this.root= null;
    this.preOrder = preOrder;
}
BinaryTree.prototype.insert = function(value){
    var node = {
        value : value,
        left: null,
        right: null
    };

    var currentNode;

    if(this.root === null){
        this.root=node;
    } else {
        currentNode = this.root;
    }
    while (currentNode){
        if(value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = node;
                break;
            } else {  
                currentNode = currentNode.left;
            }
        } 
        if (value > currentNode.value) {
            if(currentNode.right === null){
                currentNode.right = node;
                break;
            } else {
                currentNode = currentNode.right;
            }

        }
    }
}

var lauraTree = new BinaryTree;
lauraTree.insert(6);
lauraTree.insert(5);
lauraTree.insert(9);
lauraTree.insert(10);
lauraTree.insert(3);
lauraTree.insert(12);

console.log(lauraTree);

BinaryTree.prototype.search = function(value){
    var temp = this.root;
    while(temp !== null && temp.value != value){
        if(value < temp.value){
            temp = temp.left;
        }
        else{
            temp = temp.right;
        }
    }
    console.log(temp); 
}
lauraTree.search(9);

function preOrder(node){
    if (node != null) { 
        console.log(node.value); 
        preOrder(node.left); 
        preOrder(node.right); 
    } 
}
preOrder(lauraTree.root);

function inOrder(node){
    if(node != null){
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}
inOrder(lauraTree.root);

function postOrder(node){
    if(node != null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);

    }
}
postOrder(lauraTree.root);
