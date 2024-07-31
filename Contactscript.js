function validateForm(){
   


    // clear the previous error names,then we have to target the id and put input as null
    document.getElementById("errorname").innerText="";
    document.getElementById("erroremail").innerText="";
    document.getElementById("errorsubject").innerText="";
    document.getElementById("errormsg").innerText="";

    // document.getElementById("name").innerText="";
    // document.getElementById("email").innerText="";
    // document.getElementById("sub").innerText="";
    // document.getElementById("msg").innerText="";


    
    

    // get the values from the user input
    // trim method is used to remove the spaces of start and end text
    let name= document.getElementById("name").value.trim();
   let email= document.getElementById("email").value.trim();
   let sub= document.getElementById("sub").value.trim();
   let msg= document.getElementById("msg").value.trim();


//    write the consditions
if(name===""){
    document.getElementById("errorname").innerText="Name is required";
    
   

}

// validate the email
let emailpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
 if(email===""){
    document.getElementById("erroremail").innerText="invalid email id";
   

 }
 else if(!emailpattern.test(email)){
    document.getElementById("erroremail").innerText="invalid email pattern";
   

 }

//  validate the subject
if(sub===""){
    document.getElementById("errorsubject").innerText="please enter a valid subject";
    
}

if(msg===""){
    document.getElementById("errormsg").innerText="enter valid message";
    
}



}