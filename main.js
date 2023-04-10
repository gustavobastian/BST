import { tree } from "./bst.js";

let data= [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let myBst=new tree(data);

console.log(myBst)

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

//prettyPrint(myBst.root)

myBst.insert(18);
//prettyPrint(myBst.root)

console.log(JSON.stringify(myBst.find(4)))

myBst.delete(18);
prettyPrint(myBst.root)
/*
console.log("******************************************** ")
console.log("level order ")
myBst.levelOrder(myBst.root,dd);*/

console.log("******************************************** ")
console.log("in order ")
myBst.inOrder(myBst.root,dd);
/*
console.log("******************************************** ")
console.log("pre Order ")
myBst.inOrder(myBst.root,dd);
*/
function dd(x){
    console.log(x);
}