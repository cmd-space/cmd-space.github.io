window.onload = () => {
    let selected = localStorage.getItem('selected');
    document.getElementById(selected).classList.add('selected')
}

document.addEventListener('click', event => {
    console.log(event);
    if (event.target.tagName == 'DIV' && event.target.parentNode.className == 'main') {
        document.querySelectorAll('div').forEach(div => div.classList.remove('selected'));
        event.target.classList.add('selected');
        localStorage.setItem('selected', event.target.id)
    }
});