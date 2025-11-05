// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

  // Select the form
  const form = document.querySelector('.contact-form');

  // Listen for form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simple phone validation (digits only)
    const phonePattern = /^[0-9+]{7,15}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    // If all validation passes
    alert(`Thank you, ${name}! Your message has been sent. We will contact you soon.`);

    // Reset the form
    form.reset();
  });

});
