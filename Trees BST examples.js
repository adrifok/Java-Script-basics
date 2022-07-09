                        //TREES
/* Trees are a data structure that link nodes in a parent/child relantionship in the sense that there are nodes
that depends on or come off other nodes.
Trees are formed by a root node and all of the nodes that come off that root are called children (this is the 
only valid connection.).
The nodes at the bottom of the tree, wich have no descendant, are called leaf nodes.
Unlike linked lists, trees are non linear. Trees must have only one root.
Some examples of tree usages in programming are:
-DOM
-situation analysis in artificial intelligence
-file folders in operating systems
One key situation in which binary search trees are really useful is in searching. And for searching, a certain type of binary
tree is used, called BSTs (binary search trees). In BTS values are ordered so that each node that descends to the left side of its
parent must have a value less than its parent, and each node that descends to the right of its parent must have a value
bigger than its parent.

Binary trees:
Binary trees are a type of tree which each node has a maximum of 2 children.
When inserting or deleting values, the algorithm will follow the following steps:
-check if there is a root node.
-if there is, check if the value to add or delete is greater or smaller than the node:
-if it is smaller,check if there is a node to the left and repeat the previous operation. If there is not,
add/remove the node in that position.
-if it is greater, check if there is a node to the right and repeat the previous operation. If there is not,
 add/remove the node in that position.
 We check the nodes for equality with the value we are looking for. */

 //We create a class for each node within the tree
 class Node{
    //each node has 3 properties:
    constructor(value){
    this.value = value
    this.left = null
    this.right = null
    }
}
//We create a class for the BST
class BinarySearchTree{
    //the tree has only 1 property which is the root node
    constructor(){
        this.root = null
    }
//the insert method takes a value as parameter and inserts the value in its corresponding place within the tree
    insert(value){
        const nodo1 = new Node(value)
        if(this.root === null){
            this.root = nodo1
            return this;
        }
        let current = this.root 
        while (true) {
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = nodo1
                    return this;
                }
            current = current.left;
    }else{
        if(current.right === null){
            current.right = nodo1
            return this;
        }    
        current = current.right;
            }
        }
    }
/*the find method takes a value as parameter and iterates through the tree looking for that value. If the value is found, it
returns the corresponding node and if it's not , it returns undefined.*/
find(value){
if(this.root === null) return false;
let current = this.root, found = false;
while(current && !found){
    if(value < current.value){
        current = current.left
    }else if (value > current.value){
        current = current.right
    }else{
        found = true;
    }
}
        if(!found)return undefined;
            return current;
    }
//the contains method takes a value as parameter and returns true if the value is found within the tree
contains (value){
    if(this.root === null) return false
    let current = this.root, found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left
        }else if (value > current.value){
            current = current.right
        }else{
            return true
        }
    }
    return false;
        }
    }

let arbolDePrueba = new BinarySearchTree;
arbolDePrueba.insert('valueRoot');
arbolDePrueba.insert('adri2');
arbolDePrueba.insert('valor3');
console.log(arbolDePrueba);//BinarySearchTree { root: Node { value: 'valueRoot',left: Node { value: 'adri2',left: null,right: Node { value: 'valor3', left: null, right: null } },

arbolDePrueba.find('adri4');
arbolDePrueba.find('adri2');//BinarySearchTree {root: Node {value: 'valueRoot',left: Node { value: 'adri2', left: null, right: [Node] },right: null}

arbolDePrueba.contains('adri2');
console.log(arbolDePrueba.length) //undefined
console.log(arbolDePrueba.size) //undefined

//font: freecodecamp.org/news/data-structures-in-javascript-with-examples#stacks
//by German Cocca






