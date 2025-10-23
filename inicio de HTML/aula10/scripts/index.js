function menu() {

    const menuClickMobile = document.getElementById('menuClickMobile');

    const currentDisplay = window.getComputedStyle(menuClickMobile).display;

    if ( currentDisplay === 'flex' ) {
        menuClickMobile.style.display = 'none';
    } else {
        menuClickMobile.style.display = 'flex';
    }
}