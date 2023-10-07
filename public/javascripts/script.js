function toggleContactInfo() {
    var contactInfoSection = document.querySelector('.contact-info-section');
    var contactButton = document.querySelector('.contact-button');

    if (contactInfoSection.style.display === 'none' || contactInfoSection.style.display === '') {
        contactInfoSection.style.display = 'block';
        contactButton.textContent = 'Hide Jessica\'s Contact Info';
    } else {
        contactInfoSection.style.display = 'none';
        contactButton.textContent = 'Show Jessica\'s Contact Info';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Add code here to process the form data, send it to the server, or save it to a database

        // After processing, redirect to the homepage
        window.location.href = "/";
    });
});