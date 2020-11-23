function switchTo(id, cls, opt) {
    // reset active class on buttons
    let btns = document.getElementsByClassName(cls)
    for (i = btns.length - 1; i >= 0; i--) {
        btns[i].classList.remove('active')
    }
    // if opt = reset, show all elements
    if(opt === 'reset') {
        toggle(cls.replace(`-switch`,""), 'show')
        return
    }
    // set button class active
    let btn = document.querySelectorAll(`#${id}`)
    btn.forEach(elm => {
        elm.classList.add('active')
    })
    // switch elements
    toggle(cls.replace(`-switch`,""), 'hide')
    toggle(id, 'show')
}
console.log("ran switch.js")

/* html syntax

<element class="Class ID1"></element>
<element class="Class ID2 hide"></element>

<tag class="Class-Switch active" id="ID1" onclick="switchTo(`ID1`, `Class-switch`)"></tag>
<tag class="Class-Switch" id="ID2" onclick="switchTo(`ID2`, `Class-switch`)"></tag>

ID = name of button and corrisponding switched element
On the button this is an ID, On the switched element this is a class

Class = Name of switch
On buttons you need to add "-switch" to the end of the class name

This function will remove all active class's from "class-switch" elements
The function then adds "active" to the class list of all elements with a ID of the id input param 

The function then use's my hide-and-seek.js script to hide all elements with the swtich Name class (this is cls - "-switch")
The function then use's my hide-and-seek.js script to show all elements with a class matching the input id param

By adding 'reset' as a third param the func will show all elements and remove all active elements
*/