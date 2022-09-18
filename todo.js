let input=prompt("what would you like to do");
const arr=['grocerry','cat walk'];
while (input!=="quit") {
    if (input==="list"){
        for(i=0;i<arr.length;i++)
        console.log(`${i} : ${arr[i]}`);
    }
    else if(input==="add"){
        const newtod=prompt("ok what would you like to add?");
        arr.push(newtod);
    }

    else if(input==="delete")
    {
        
         const deletedindex=parseInt(prompt("Enter an index to delete?"));
            if(!Number.isNaN(deletedindex)){
            const deleted=arr.splice(deletedindex,1);
            console.log(`${deleted} has been deleted`)
        }

        else{
            console.log("invalid index")
        }
        
    }
    input=prompt("what would you like to do");
}

console.log("ok you quit");
