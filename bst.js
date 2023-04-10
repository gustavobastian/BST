
class node{
    constructor(dataP,leftP=null,rightP=null){
        this.data=dataP;
        this.left=leftP;
        this.right=rightP;
    }

}

export class tree{
    constructor(arrayP){
        console.log("data "+JSON.stringify(arrayP))
        this.array=[]
        arrayP.forEach(element => {            
            if(this.findValue(this.array,element)===false){                
                this.array.push(parseInt(element));
            }
        });
        this.root=null;
        this.array.sort((a,b)=>a-b);
        
        this.root=this.buildtree(this.array,0,this.array.length);
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
                console.log("found")
                standard=true;
            }
            index++;
        });
        return standard;
    }    
}


