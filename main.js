document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader after a short delay
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
            document.body.classList.add('show-hero');
        }, 500);
    }, 2000); // Adjust the delay as needed
});
