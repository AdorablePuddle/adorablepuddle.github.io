

function validation(id){
    let a = document.getElementById("passcode").value;
    if (a.toLowerCase() === "ribbon"){
        alert("You found her.")
        open("https://docs.google.com/document/d/1rDYz8kdn3ajeU3WpqHYIMUwrum_gYx_Yu1BOqThzJwE/edit?usp=sharing")
        return;
    }
    if (a.toLowerCase() === "tattered ribbon") {
        alert("In a different world, she lied to them all.")
        alert("She kept the last seed, leaving her weak and frail.")
        alert("That seed empowers the people she loved.")
        alert("And in return, she will suffer in their place.")
        open("https://docs.google.com/document/d/1N1Jc9ahisq7pOaOVCPrM-DzRoD7GTHutYBGx-4kdYs8/edit?usp=sharing")
        return;
    }
    if (a.toLowerCase() === "hope") {
        alert("Scattered throughout the past, present and future are 4 memories.")
        alert("Your journey begins where you have least possibilities.")
        alert("At no point should you ever stray off the forest of trees.")
        return;
    }
    if (a.toLowerCase() === "pointers") {
        open("https://en.wikipedia.org/wiki/ASCII")
        return;
    }
    if (a.toLowerCase() === "f104dd78950e4df55393fd7d6a30f41e88f06d3b9253fa10") {
        open("./f104dd78950e4df55393fd7d6a30f41e88f06d3b9253fa10.html")
        return;
    }
    alert("Incorrect Solution.")
}