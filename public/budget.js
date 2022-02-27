//make the budget magic happen
// const session = require("express-session");

const budgetFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#budget-name').value;
    const amount = document.querySelector('#budget-amount').value;
    

    if (name && amount) {
        const response = await fetch('/api/budget/addbudget', {
            method: 'POST',
            body: JSON.stringify({ name, amount}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/budget');
        } else {
            alert('Failed to add budget');
        }
    }
};

document
    .querySelector('.new-budget-form')
    .addEventListener('submit', budgetFormHandler);