function init()
{
    var start = document.getElementById("start");
    var reset = document.getElementById("reset");
    var pause = document.getElementById("pause");
    var timer = document.getElementById("timer");
    var seconds = 0;
    var intervalId;

    console.log(start);
    console.log(reset);
    console.log(pause);
    console.log(timer);

    start.addEventListener("click",startButton);
    reset.addEventListener("click",resetButton);
    pause.addEventListener("click",pauseButton);

    function startButton()
    {
    	intervalId = window.setInterval(runTimer,1000);
    	console.log(intervalId);
    	start.removeEventListener("click",startButton);

    }
    function resetButton()
    {
    	window.clearInterval(intervalId);
    	timer.innerText = "Stop Watch";	
    	seconds = 0;
    	start.addEventListener("click",startButton);
    	
    }
    function pauseButton()
    {
    	window.clearInterval(intervalId);
    	start.addEventListener("click",startButton);
    }

    function runTimer()
    {
    	seconds++
    	timer.innerText = "Time elapsed: "+seconds;
    }

}

window.addEventListener("load",init,false);