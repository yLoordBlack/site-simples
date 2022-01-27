'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme')

    var calssName = document.body.className; 
    if(calssName == "light-theme") {
        this.textContent = "Dark";
    }
    else  {   
        this.textContent = "Light";
    }

    console.log('current class name: ' + calssName);
});
 