const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

if (!form) {
  console.warn('Feedback form not found on this page');
} else {
  restoreForm();

  form.addEventListener('input', handleInput);
  form.addEventListener('submit', handleSubmit);
}

function handleInput(event) {
  const { name, value } = event.target;

  if (!(name in formData)) {
    return;
  }

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';
}

function restoreForm() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);

    if (typeof parsed.email === 'string') {
      form.elements.email.value = parsed.email;
      formData.email = parsed.email;
    }

    if (typeof parsed.message === 'string') {
      form.elements.message.value = parsed.message;
      formData.message = parsed.message;
    }
  } catch (error) {
    console.warn('Cannot parse saved form data:', error);
  }
}
