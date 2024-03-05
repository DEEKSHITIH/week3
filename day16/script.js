let array=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

 for(i=0;i<array.length;i++){
if(array[i]=="monday"){
    console.log(`${array[i]}:start the javascript course`);
}

   if(array[i]=="tuesday"||array[i]=="thursday"||array[i]=="saturday"){
    console.log(`${array[i]}:javascript course`);
   }
   else{
    console.log(array[i]+":revise the last week concepts");
   }
 }
 