function buttonMobile() {
    const button = document.getElementById('navDMobile')
    const displayNavDMobile = window.getComputedStyle(button).display;

    if (displayNavDMobile === 'flex'){
        button.style.display = 'none';
    } else {
        button.style.display = 'flex';
    }
}