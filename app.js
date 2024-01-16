function openNav() {
    document.getElementById("myNav").style.width= '70%'
}
function closeNav() {
    document.getElementById('myNav').style.width= '0%'
}
function myFunc(evt, menu) {
    let daniel = document.querySelectorAll('.daniel')
    let i;
    for(i = 0; i < daniel.length; i++) {
        daniel[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = ' flex';
    evt.currentTarget.className += ' active';
}
function myFunction(evt, menu) {
    let daniel = document.querySelectorAll('.daniel')
    let i;
    for(i = 0; i < daniel.length; i++) {
        daniel[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = ' block';
    evt.currentTarget.className += ' active';
}
function myFunct(evt, menu) {
    let daniel = document.querySelectorAll('.daniel')
    let i;
    for(i = 0; i < daniel.length; i++) {
        daniel[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = ' flex';
    evt.currentTarget.className += ' active';
}