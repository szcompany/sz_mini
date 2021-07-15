const toggleButton = document.getElementById('toggleButton')
const navMenu = document.getElementById('nav-menu')
const closeIcon = document.querySelector('.close-icon')
const toggleIcon = document.querySelector('.toggle-btn')

toggleButton.addEventListener('click', () => {
    closeIcon.classList.toggle('hide')
    toggleIcon.classList.toggle('hide')
    navMenu.classList.toggle('show-links')
})