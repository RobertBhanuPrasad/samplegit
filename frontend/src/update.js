import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [mail, setmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.post("http://localhost:8000/update/"+mail+"/"+newPassword);
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <div>

      <input
        type="text"
        placeholder="mail"
        value={mail}
        onChange={(e) => setmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleUpdatePassword}>Update Password</button>
      <p>{message}</p>
    </div>
  );
}

export default Update;
