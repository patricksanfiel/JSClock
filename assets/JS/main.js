window.onload = () => {
    const SECOND_HAND = document.querySelector("#second-hand")
    const MINUTE_HAND = document.querySelector("#minute-hand")
    const HOUR_HAND = document.querySelector("#hour-hand")

    function setTime(){
        // console.log(CLOCK_HANDS)
        const TODAY = new Date()
        
        // Seconds Variables
        const CURRENT_SECONDS = TODAY.getSeconds()
        var secondsDegrees = (( CURRENT_SECONDS / 60 ) * 360) + 90

        //Minutes Variables
        const CURRENT_MINUTES = TODAY.getMinutes()
        var minutesDegrees = (( CURRENT_MINUTES / 60 ) * 360) + 90

        //Hours Variables
        var currentHours = TODAY.getHours()
        currentHours>12 ? currentHours-=12 : currentHours //Converts the current hour from a 24 hour format to 12 hour format.  
        var hoursDegrees = (( currentHours / 12 ) * 360) + 90


        SECOND_HAND.style.transform = `rotate(${secondsDegrees}deg)`
        MINUTE_HAND.style.transform = `rotate(${minutesDegrees}deg)`
        HOUR_HAND.style.transform = `rotate(${hoursDegrees}deg)`
    }

    const CHANGE_CLOCK_COLORS = document.getElementById("interface-subdiv-container");
    function toggleColorPanels(e) {
        if(e.target !== e.currentTarget && !e.target.classList.contains("color-button") && e.target.classList.contains("show-button-toggle")){ //We want to target the buttons inside the #interface-subdiv-container div and not the div itself. We also want to make sure we're not targeting any of the color change buttons, otherwise all the other panels would expand every time a user changed a color. Finally, we want to make sure that only visible buttons are clickable, which we do by ensuring that our clicked element has the show-button-toggle class. All of the interface panel toggle buttons start out with this class, and when one is clicked, it is removed from all of the others. When that same toggle button is clicked again to collapse its panel, the show-button-toggle class is reapplied to all of the toggle buttons once again.
            let toggleButton = e.target;
            let clickedDataID = toggleButton.getAttribute("data-panel")
            let colorPanel = document.querySelector(`div[data-panel=${clickedDataID}]`)//Div containing all of the color buttons for users to click on
            let isVisible = document.querySelector(".visible")
            if(isVisible){
                document.querySelectorAll(".hide-button-toggle").forEach((item)=>{
                    item.className = "show-button-toggle";
                })//Grab all of the hidden buttons and apply the .show-button-toggle class CSS, which will display them as inline-block
                colorPanel.className="hidden"
            } else {
                document.querySelectorAll(".show-button-toggle").forEach((item) => {
                    item.className = "hide-button-toggle"
                })//Grab all of the visible buttons when a color panel is being displayed and hide them to reduce clutter.
                colorPanel.className="visible"
            }
            toggleButton.className = "show-button-toggle"//Button belonging to the currently expanded color panel should always be visible
        }
    }
    
    
    const COLOR_BUTTONS = document.getElementsByClassName("color-button")
    
    // Looping through the COLOR_BUTTONS NodeList to add a click listener to each.
    Array.prototype.forEach.call(
        COLOR_BUTTONS, (button)=> {
            button.addEventListener("click", (event)=>{
                var clickedButton = event.target
                var clickedColor = clickedButton.getAttribute("data-color")
                var clickedGrandparent = clickedButton.parentElement.parentElement
                var elementToChange = clickedGrandparent.getAttribute("data-panel")
                var toggleButtons = document.querySelectorAll("button[data-panel]")//Buttons which, when click expand and collapse their respective color panels
                if(document.getElementById(elementToChange)){
                    document.getElementById(elementToChange).style.backgroundColor = clickedColor;//Changes the color of the element that corresponds to the currently expanded panel based on the color button clicked by the user inside that panel.
                } else {
                    const ALL_HANDS = document.getElementsByClassName(elementToChange)
                    Array.prototype.forEach.call(ALL_HANDS, hand => {
                            hand.style.backgroundColor = clickedColor;
                        }
                    )
                }
                if(elementToChange == "interface"){
                    Array.prototype.forEach.call(toggleButtons, (button)=> button.style.color = clickedColor)
                    Array.prototype.forEach.call(COLOR_BUTTONS, button => button.style.color = clickedColor)
                }
                var interface = document.getElementById("interface");
                var interfaceColor = interface.style.backgroundColor
                // console.log(interface)
                interface.style.backgroundColor = interfaceColor;
                // Array.prototype.forEach.call(COLOR_BUTTONS, button => button.style.color = interfaceColor)    
            });
        }
    )
    // COLOR_BUTTONS.forEach(console.log(this))
    CHANGE_CLOCK_COLORS.addEventListener("click", toggleColorPanels)
    setInterval(setTime, 1000)
    // Array.prototype.forEach.call(COLOR_BUTTONS, button => button.style.color = interfaceColor)
}
