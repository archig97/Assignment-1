function validate()
{
    
    var username=document.getElementById("fullname");
    var password1=document.getElementById("password");
    var passwordCheck=document.getElementById("confirmpw");
    if(username.value.trim()=='')
    {
        alert("No blank values allowed");
        username.style.border="solid 3px red";
        return false;
    }
    if(password1.value.trim()=='')
    {
        alert("No blank values allowed!");
        password1.style.border="solid 3px red";
        return false;
    }
    else if(password1.value.length<8)
    {
        alert("Password must have more than 8 characters!");
        password1.style.border="solid 3px red";
        return false;
    }
    else if(password1.value!=passwordCheck.value)
    {
        alert("Enter same password again");
        passwordCheck.style.border="solid 3px red";
        return false;
    }
    
    else{
alert("Successfully logged in");
return true;
    }
    


}