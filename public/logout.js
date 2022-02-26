//instructor demo. Modify for our project

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      body: {},
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  