window.onload = () => {
    const SECOND_HAND = document.querySelector("#second-hand")
    const MINUTE_HAND = document.querySelector("#minute-hand")
    const HOUR_HAND = document.querySelector("#hour-hand")

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
    }

    const CHANGE_CLOCK_FACE = document.getElementById("interface-subdiv-container");
    function toggleColorPanels(e) {
        console.log(e.target)
        if(e.target !== e.currentTarget && !e.target.classList.contains("color-button")){ //We want to target the buttons inside the #interface-subdiv-container div and not the div itself. We also want to make sure we're not targeting any of the color change buttons, otherwise all the other panels would expand every time a user changed a color
            let toggleButton = e.target;
            let clickedDataID = toggleButton.getAttribute("data-panel")
            let colorPanel = document.querySelector(`div[data-panel=${clickedDataID}]`)//Div containing all of the color buttons for users to click on
            let isVisible = document.querySelector(".visible")
            if(isVisible){
                document.querySelectorAll(".hide-button-toggle").forEach((item)=>item.className = "show-button-toggle" )//Grab all of the hidden buttons and apply the .show-button-toggle class CSS, which will display them as inline-block
                colorPanel.className="hidden"
            } else {
                document.querySelectorAll(".show-button-toggle").forEach((item) => item.className = "hide-button-toggle" )//Grab all of the visible buttons when a color panel is being displayed and hide them to reduce clutter.
                colorPanel.className="visible"
            }
            toggleButton.className = "show-button-toggle"//Button belonging to the currently expanded color panel should always be visible
        }
    }
    CHANGE_CLOCK_FACE.addEventListener("click", toggleColorPanels)
    setInterval(setTime, 1000)
}
