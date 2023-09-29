$(document).ready(function(){
    function showTime(){
        //  To get current time/date
        var date = new Date();

        // Make varaiables to get hours minute and second

        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        // AM, PM setting

        var session = "AM"

        // conditions for time

        if(hours == 0){
            hours = 12;
        }

        if(hours > 12){
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#period").text(session);

        // To change time in every second

        setTimeout(showTime,1000)
    }
    showTime();
});