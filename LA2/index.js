document.querySelector(".Button").addEventListener("click",myClick);

function myClick(event)
{
    var name=document.querySelector(".name").value;
    var email=document.querySelector(".email").value;
    var state = true;
    
    if(name=="")
    state=false;

    if(email=="")
    state=false;

    if(state)
    alert("form submitted !");
    else
    alert("Enter valid data");
}

