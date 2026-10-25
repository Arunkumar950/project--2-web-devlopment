// --- 1. Form Validation ---
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        isValid = false;
    } else if (!emailInput.value.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Message Validation
    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').innerText = 'Message is required';
        isValid = false;
    } else {
        document.getElementById('messageError').innerText = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

// --- 2. Dynamic To-Do List ---
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create list item element
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    // Append to list
    taskList.appendChild(li);
    taskInput.value = '';
});