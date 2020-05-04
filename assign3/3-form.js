// Enter your code here

function formCheck()
{
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let msg= document.getElementById("comments").value;
    let newsletter= document.getElementById("signup").checked;

    console.log("name: "+ name);
    console.log("email: " + email);
    console.log("comments: "+ msg);
    if(newsletter== true)
    {
        console.log("newsletter: on");
    }
    else
    {
        console.log("newsletter: off");
    }
}
