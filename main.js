var dateTime;
var formattedDate;
var formattedTime;
const LaunchTime = document.getElementById("endDate");
window.onload = function() {
    var userInput = prompt("Please enter a date and time (format: YYYY-MM-DD HH:MM):");
    dateTime = new Date(userInput);
    if (!isNaN(dateTime.getTime())) {
         formattedDate = dateTime.toISOString().substring(0, 10);
         formattedTime = dateTime.toTimeString().substring(0, 5);

         
        LaunchTime.innerText = ("Launch on: " + formattedDate + " " + formattedTime);

        alert("Date and Time: " + formattedDate + " " + formattedTime);
    } else {
        alert("Invalid Date/Time. Please enter in the format YYYY-MM-DD HH:MM.");
    }
};




const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(dateTime);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff <= 0) {
        LaunchTime.innerText = "We have Launched";
        return
    } ;
    inputs[0].value =  Math.floor(diff/60/60/24);
    inputs[1].value = (Math.floor(diff/3600)%24);
    inputs[2].value = (Math.floor(diff/60)%60);
    inputs[3].value =  Math.floor(diff % 60)
    
   
} 
clock();

let timer = setInterval(
                    () => {
                        clock()
                    },1000
                )


               
