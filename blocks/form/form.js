// blocks/form/form.js
// Basic form behaviors and accessibility helpers

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.block-form');
  forms.forEach(form => {
    // Example: prevent double submit
    form.addEventListener('submit', (e) => {
      const submit = form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;
    });

    // Example: enable client-side validation class
    form.addEventListener('input', (e) => {
      if (form.checkValidity()) {
        form.classList.remove('invalid');
      } else {
        form.classList.add('invalid');
      }
    });
  });
});
