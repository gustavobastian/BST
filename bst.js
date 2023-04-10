
class node{
    constructor(dataP,leftP=null,rightP=null){
        this.data=dataP;
        this.left=leftP;
        this.right=rightP;
    }

}

export class tree{
    constructor(arrayP){        
        this.array=[]
        arrayP.forEach(element => {            
            if(this.findValue(this.array,element)===false){                
                this.array.push(parseInt(element));
            }
        });
        this.root=null;
        this.array.sort((a,b)=>a-b);
        
        this.root=this.buildtree(this.array,0,this.array.length-1);
    }

    buildtree(arr, start, end){        
        
        if (start > end)
        {
            return null;
        }
        
        let mid = parseInt((start + end) / 2);
        let nodelocal = new node(arr[mid]);
        
        nodelocal.left = this.buildtree(arr, start, mid - 1);
        
        nodelocal.right = this.buildtree(arr, mid + 1, end);
        return nodelocal;
    }

    findValue(array, value){
        let index=0;
        let standard=false;
        if(array.length==0){return false;}
        array.forEach(element => {

            if(parseInt(element)===parseInt(value))
            {                
                standard=true;
            }
            index++;
        });
        return standard;
    }    

    insert(key){        
        this.root=this.insertRec(this.root,key);
    }

    insertRec(root,key){        
        if(root==null){
            root=new node(key);
            return root;
        }        
        if(key<root.data){
            root.left = this.insertRec(root.left,key);
        }
        else if (key>root.data){
            root.right = this.insertRec(root.right,key);
        }
        return root;
    }

    minValue(root){
        let minv = root.data;
            while (root.left != null)
            {
                minv = root.left.data;
                root = root.left;
            }
            return minv;
    }
    
    delete(key)
    {        
        this.root = this.deleteRec(this.root, key);
    }

     deleteRec(root,key)
    {
        
            if (root == null)
                return root;
            if (key < root.data)
                root.left = this.deleteRec(root.left, key);
            else if (key > root.data)
                root.right = this.deleteRec(root.right, key);
            else {
                
                if (root.left == null)
                    return root.right;
                else if (root.right == null)
                    return root.left;
    
            
                root.data = this.minValue(root.right);
    
                root.right = this.deleteRec(root.right, root.data);
            }
    
            return root;
    }
 
    find(key){
        let output = this.findRec(this.root, key);    
        return output;       
    }
    
    findRec(root,key){

        /**tree empty */
        if(root.data==key){                      
            return new node(root.data,root.left,root.right);            
        }

        /**down the tree */
        if(key<root.data){            
            return this.findRec(root.left,key);
        }
        else if (key>root.data){
            return  this.findRec(root.right,key);
        }

        

    }

    levelOrder(root,f){
        
        if(root==null){
            return;
        }
        let queue=[]
        queue.push(root)
        
        while((queue.length!=0))
        {
            let current=queue.shift();
         
                f(current.data)                
                if(current.left!=null){ queue.push(current.left)}
                if(current.right!=null){ queue.push(current.right)}            
         
        }
    }

    inOrder(root,f){
        
        if(root==null){
            return;
        }
        if(root.left!=null){ this.inOrder(root.left,f)}
        f(root.data)                
        if(root.right!=null){ this.inOrder(root.right,f)}            
    }

    preOrder(root,f){
        
        if(root==null){
            return;
        }
       
        f(root.data)                
        if(root.left!=null){ this.preOrder(root.left,f)}
        if(root.right!=null){ this.preOrder(root.right,f)}                    
    }

    postOrder(root,f){
        
        if(root==null){
            return;
        }
       
        if(root.left!=null){ this.postOrder(root.left,f)}
        if(root.right!=null){ this.postOrder(root.right,f)}            
        f(root.data)                        
    }

    height(root){
        if(root==null){
            return 0;            
        }
        else{
            let lheight= this.height(root.left)
            let rheight= this.height(root.right)

            if(lheight>rheight){
                return lheight+1;
            }
            else{
                return rheight+1;
            }
        }
    }


    /* TODO */
    depth(root){
        return;
    }

    isBalanced(root){
        if(root==null){
            return true;
        }
        let leftH=this.height(root.left)
        let rightH=this.height(root.right)

        return !!((Math.abs(leftH-rightH)<=1) && (this.isBalanced(root.left)) && (this.isBalanced(root.right)));
    }

}


