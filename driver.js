import { tree } from "./bst.js";

//function for printing the tree in console
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
     return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}



//function for generating random array
let randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

//generating random array    

console.log("******************************************** ")
console.log("Generating random array(20 elements, max number 1000):")
let data= randomArray(20,1000)
console.log("Array:"+data)
//populating the tree
console.log("Populating the tree")
let myBst=new tree(data);

//check if it is balanced
console.log("Tree is Balanced?:"+myBst.isBalanced(myBst.root))

//printing elements
console.log("******************************************** ")
console.log("Printing elements:")

console.log("Elements in level order ")
myBst.levelOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("Elements in post order ")
myBst.postOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("Elements in pre Order ")
myBst.inOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("Elements in order ")
myBst.inOrder(myBst.root,dd);
//function for printing elements
function dd(x){
    console.log(x);
}

//inserting elements to make the tree unbalanced
console.log("******************************************** ")
console.log("Inserting new elements ")
myBst.insert(245)
myBst.insert(378)
myBst.insert(988)

//unbalanced confirmation
console.log("isBalanced:"+myBst.isBalanced(myBst.root))
//prettyPrint(myBst.root)//better print

//rebalance the tree
console.log("Rebalancing the tree")
myBst.rebalance(myBst);
//check if it is balanced again
console.log("Tree is Balanced?:"+myBst.isBalanced(myBst.root))
//prettyPrint(myBst.root)//better print

console.log("******************************************** ")
console.log("Printing elements:")


console.log("Elements in level order ")
myBst.levelOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("Elements in post order ")
myBst.postOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("Elements in pre Order ")
myBst.inOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("Elements in order ")
myBst.inOrder(myBst.root,dd);




console.log("******************************************** ")
console.log("Other tasks")


//prettyPrint(myBst.root)//better print
console.log("depth (7):"+ myBst.depth(7))
console.log("height:"+myBst.height(myBst.root))
myBst.insert(18);

console.log("******************************************** ")
console.log("printing the node where is found 4 :")
console.log(JSON.stringify(myBst.find(18).data))

console.log("printing the node where is found 99 :")
console.log(JSON.stringify(myBst.find(99).data))

console.log("printing the node where is found 550 :")
console.log(JSON.stringify(myBst.find(550).data))

myBst.delete(18);
//prettyPrint(myBst.root)//better print

console.log("******************************************** ")