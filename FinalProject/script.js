/*
    Final Project

    Sassy Stickers
    Author: Tyler Veillette
    Date: 10/30/22

    Filename: script.js
*/
'use strict';

let theme = localStorage.getItem('data-theme'); //declare theme and retrieve setting from localStorage
const button = document.getElementById("button"); //declare button and link it to the button on site
const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}

// Defualt on pageload is light theme. This will automatically switch to dark if it is set to dark in localStorage
if(theme === 'dark'){
    changeThemeToDark()
}

//Monitors the button and switches theme when clicked. It will also update the button text to reflect the opposite theme text
button.addEventListener('click', () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark'){
        changeThemeToLight()
        document.getElementById("button").textContent = "Dark" //switch button text
    }else{
        changeThemeToDark()
        document.getElementById("button").textContent = "Light" //switch button text
    }
});

