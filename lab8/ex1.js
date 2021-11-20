function Validate()
{
    var original = document.getElementById("pass");
    var copy = document.getElementById("confirm");
    if(original.length < 8 || copy.length < 8)
    {
        alert("Your password is too short.");
    }
    else if(original != copy)
    {
        alert("Your passwords do not match.");
    }
    else
        alert("Success!");
}