document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(event) {
      
      event.preventDefault();

      let errors = [];

      
      if (firstName.value.trim() === '') {
          errors.push('First name is required.');
      }

      
      if (lastName.value.trim() === '') {
          errors.push('Last name is required.');
      }

      
      if (!validateEmail(email.value)) {
          errors.push('Please enter a valid email address.');
      }

      
      if (message.value.trim() === '') {
          errors.push('Message cannot be empty.');
      }

      if (errors.length > 0) {
          alert(errors.join('\n'));
      } else {
          alert('Form submitted successfully!');
          form.submit(); 
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});
