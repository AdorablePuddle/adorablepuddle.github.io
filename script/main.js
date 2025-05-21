

function validation(id){
    let a = document.getElementById("passcode").value;
    if (a.toLowerCase() === "torned ribbon") {
        alert("In a different world, she lied to them all.")
        alert("She kept a seed to herself, leaving her weak and frail.")
        alert("That seed of hope empowers the people she loved.")
        alert("And in return")
        alert("it made her a monster.")
        open("https://docs.google.com/document/d/1N1Jc9ahisq7pOaOVCPrM-DzRoD7GTHutYBGx-4kdYs8/edit?usp=sharing")
        return;
    }
    if (a.length != 6){
        alert("Solution must be 6 letters long.");
    }else{
        if (a.toLowerCase() === "ribbon"){
            alert("You found her.")
            open("https://docs.google.com/document/d/1rDYz8kdn3ajeU3WpqHYIMUwrum_gYx_Yu1BOqThzJwE/edit?usp=sharing")
        } else {
            alert("Incorrect Solution.")
        }
    }
}