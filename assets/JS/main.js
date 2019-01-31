window.onload = () => {
    const SECOND_HAND = document.querySelector("#second-hand")
    const MINUTE_HAND = document.querySelector("#minute-hand")
    const HOUR_HAND = document.querySelector("#hour-hand")
    console.log(HOUR_HAND)
    
    function setTime(){
        const TODAY = new Date()
        
        // Seconds Variables
        const CURRENT_SECONDS = TODAY.getSeconds()
        var secondsDegrees = (( CURRENT_SECONDS / 60 ) * 360) + 90

        //Minutes Variables
        const CURRENT_MINUTES = TODAY.getMinutes()
        var minutesDegrees = (( CURRENT_MINUTES / 60 ) * 360) + 90

        //Hours Variables
        const CURRENT_HOURS = TODAY.getHours()
        var hoursDegrees = (( CURRENT_HOURS / 12 ) * 360) + 90


        SECOND_HAND.style.transform = `rotate(${secondsDegrees}deg)`
        MINUTE_HAND.style.transform = `rotate(${minutesDegrees}deg)`
        HOUR_HAND.style.transform = `rotate(${hoursDegrees}deg)`
        console.log(minutesDegrees);
    }
    
    setInterval(setTime, 1000)
}
