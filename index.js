let day = new Date().getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let today = "Today is " + daylist[day]
document.getElementById("day").innerHTML = today;


setInterval(myTimer, 1000);
        function myTimer(){
            const time = "And the Time is " + new Date().toLocaleTimeString();
            document.getElementById("time").innerHTML = time;
        }