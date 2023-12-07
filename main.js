
const endDate = "2023-12-09T10:50:00"; 
const LaunchTime = document.getElementById("endDate");
LaunchTime.innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff < 0) {
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


               
