// check if element is shown or hidden
function toggle (cls, fixed) {
    let x = document.getElementsByClassName(cls);
    for (i = x.length - 1; i >= 0; i--) {
        // if input class is hidden or 'fixed' param = show
        if ((x[i].className.includes(" hide") || fixed === "show") && fixed !== 'hide') {
            x[i].classList.remove('hide');
        } else { //else hide
            x[i].classList.add('hide');

        }
    }
}

console.log("ran hide-and-seek.js")

/* html syntax

<tag onclick="toggle('class name')"> </tag>
or
<tag onclick="toggle('class name', 'hide')"></tag>
<tag onclick="toggle('class name', 'show')"></tag>

funcs will find input class name and toggle their 'display' attribute
funcs with added show or hide param will only show or hide
*/