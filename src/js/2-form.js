
const formData = {
  email: '',
  message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  saveToLocalStorage(); 
});

form.addEventListener('submit', event => {
  event.preventDefault(); 

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';
});