console.log("Script started");

function changeStyle(){
    console.log("click");

    // Get the p element and store it in a variable
let p = document.getElementById("text");
// Set some new text
p.innerText = "The text has been changed";

p.style.property = "new value";
p.style.color = "red";
p.style.fontSize = "100px";
p.style.border = "2px solid green";

}

   function resetStyle(){
    console.log("click");
    
   let p = document.getElementById("text") 
   p.innerText = "This is some sample text";

p.style.property = "";
p.style.color = "";
p.style.fontSize = "";
p.style.border = "";

}    

     function changStyle2(){
    console.log("click");
    
   let p = document.getElementById("text") 
   p.innerText = "This is the second text";

   p.style.property = "new value";
   p.style.color = "pink";
   p.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
   p.style.fontSize = "50px";     


}



