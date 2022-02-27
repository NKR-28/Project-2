//instructor demo. Modify for our project

const session = require("express-session");

const expenseFormHandler = async (event) => {
    event.preventDefault();
  
    const category_id = document.querySelector('#category-expense').value;
    const dollarAmount = document.querySelector('#dollarAmount-expense').value;
    const user_id = session.user_id;

    if (category_id && dollarAmount) {
      const response = await fetch('/api/addexpense', {
        method: 'POST',
        body: JSON.stringify({ category_id, dollarAmount, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/expense');
      } else {
        alert('Failed to fetch expenses');
      }
    }
  };
  
  document
    .querySelector('.new-expense-form')
    .addEventListener('submit', expenseFormHandler);