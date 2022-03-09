//instructor demo. Modify for our project


const expenseFormHandler = async (event) => {
    event.preventDefault();
  console.log('expense')
    
    const dollarAmount = document.querySelector('#expense-amount').value;

    if (dollarAmount) {
      const response = await fetch('/api/addexpense/:budgetid', {
        method: 'POST',
        body: JSON.stringify({ dollarAmount, budget_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/budget');
      } else {
        alert('Failed to create expenses');
      }
    }
  };

  const addexpensetobudget = async (event) => {
    event.preventDefault();
    console.log('expense')
    const budgetID = document.querySelector('.addexpense').value;
    
  
      document.location.replace('api/budget/' + budgetID);
  
  };
  
  // document
  //   .querySelector('.new-expense-form')
  //   .addEventListener('submit', expenseFormHandler);

  document
    .querySelector('.addexpense')
    .addEventListener('click', addexpensetobudget);

  