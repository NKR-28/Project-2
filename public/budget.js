//make the budget magic happen
const session = require("express-session");

const budgetFormHandler = async (event) => {
    event.preventDefault();

    const budget_name = document.querySelector('#budget_name').value;
    const budget_amount = document.querySelector('#budget_amount').value;
    const user_id = session.user_id;

    if (budget_name && budget_amount) {
        const response = await fetch('/api/addbudget', {
            method: 'POST',
            body: JSON.stringify({ budget_name, budget_amount, user_id }),
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
    .querySelector('.budget-form')
    .addEventListener('submit', budgetFormHandler);