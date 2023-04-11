import { tree } from "./bst.js";

let data= [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let myBst=new tree(data);



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



myBst.insert(18);

console.log("******************************************** ")
console.log("printing the node where is found 4 and subnodes:")
console.log(JSON.stringify(myBst.find(4)))

myBst.delete(18);
prettyPrint(myBst.root)

console.log("******************************************** ")
console.log("level order ")
myBst.levelOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("in order ")
myBst.inOrder(myBst.root,dd);

console.log("******************************************** ")
console.log("pre Order ")
myBst.inOrder(myBst.root,dd);

function dd(x){
    console.log(x);
}

console.log("height:"+myBst.height(myBst.root))



console.log("isBalanced:"+myBst.isBalanced(myBst.root))

myBst.insert(245)
myBst.insert(378)
myBst.insert(988)
console.log("depth:"+ myBst.depth(7))

console.log("isBalanced:"+myBst.isBalanced(myBst.root))
prettyPrint(myBst.root)
myBst.rebalance(myBst);
console.log("isBalanced:"+myBst.isBalanced(myBst.root))
prettyPrint(myBst.root)

