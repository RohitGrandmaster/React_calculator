import React from 'react'

let temp=0;
let last_time_data=0;
let counter=0;

function Calculation(data) {

    

    if(data=='+'){
        counter=counter+1;
        
        
    }
//    else if(data=='*'){
//         temp=temp*data;
//     }
//     else if(data=='/'){
//         temp=temp/data;
//     }
//     else if(data=='-'){
//         temp=temp-data;
//     }
    
//     else if(data=='='){
//         return temp;
        
//     }
    else{
        console.log(data)
        temp=data;
        if(counter==1)
        {
            temp=temp+data;
            console.log("sss",temp);
            counter=0;
        }

    }
    



   

   
}

export default Calculation



