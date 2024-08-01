import React, { useEffect } from 'react';

function LogoutButton() {
  function handleLogout() {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the login page
    window.location.replace('/login');
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
