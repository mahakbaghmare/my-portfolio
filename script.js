
// Form validation and message submit simulation

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

    let valid = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Name validation
    if (name.length < 3) {
      showError('name', 'Name must be at least 3 characters');
      valid = false;
    }

    // Email validation simple regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      showError('email', 'Enter a valid email');
      valid = false;
    }

    // Message validation
    if (message.length < 10) {
      showError('message', 'Message must be at least 10 characters');
      valid = false;
    }

    if (!valid) return;

    // Simulate sending message (here you can add real API call)
    formMsg.textContent = "Sending message...";
    setTimeout(() => {
      formMsg.textContent = "Message sent successfully! Thank you.";
      form.reset();
    }, 1500);
  });

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = input.nextElementSibling;
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
});
// Form validation and message submit simulation

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

    let valid = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Name validation
    if (name.length < 3) {
      showError('name', 'Name must be at least 3 characters');
      valid = false;
    }

    // Email validation simple regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      showError('email', 'Enter a valid email');
      valid = false;
    }

    // Message validation
    if (message.length < 10) {
      showError('message', 'Message must be at least 10 characters');
      valid = false;
    }

    if (!valid) return;

    // Simulate sending message (here you can add real API call)
    formMsg.textContent = "Sending message...";
    setTimeout(() => {
      formMsg.textContent = "Message sent successfully! Thank you.";
      form.reset();
    }, 1500);
  });

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = input.nextElementSibling;
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
});
