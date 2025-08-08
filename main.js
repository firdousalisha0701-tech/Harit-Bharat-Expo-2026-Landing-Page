// Main JavaScript file for Harit Bharat Expo 2026

document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM is fully loaded
    console.log('Harit Bharat Expo 2026 site is ready.');
});
// Countdown Timer Logic
const countdown = () => {
    const countDate = new Date('January 16, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the values
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Update the HTML
    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
    document.getElementById('seconds').innerText = textSecond;
};

setInterval(countdown, 1000);
// Form Submission
const form = document.getElementById('registration-form');

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.createElement('p');
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.parentNode.appendChild(status);
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
                form.parentNode.appendChild(status);
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        form.parentNode.appendChild(status);
    });
}
form.addEventListener("submit", handleSubmit)
    // Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});