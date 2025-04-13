

function validation(id){
    let a = document.getElementById("passcode").value;
    if (a.length != 6){
        alert("Solution must be 6 letters long.");
    }else{
        if (a === "ribbon"){
            alert("You found her.")
            open("https://docs.google.com/document/d/1rDYz8kdn3ajeU3WpqHYIMUwrum_gYx_Yu1BOqThzJwE/edit?usp=sharing")
        }else{
            alert("Incorrect Solution.")
        }
    }
}