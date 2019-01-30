

function rollnow() {
    var randomnum = Math.round(Math.random()*5);
    var random=Math.round(Math.random()*5);
    document.getElementsByName('dice')[0].src="Images/dice"+randomnum+".png";
    document.getElementsByName('dice')[1].src="Images/dice"+random+".png";

    if (randomnum > random){
         alert(randomnum+" wins");
     }
     else if (randomnum < random){
         alert(random+" wins");
     } else{
         alert("tie");
     }
}