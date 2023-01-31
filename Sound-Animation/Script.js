
for(let i=0; i<9; i++){
    let x = document.createElement("i");
    x.style.animationDelay =i/6  + "s";
    document.getElementById("sound").append(x);   
}