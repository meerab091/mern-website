import React, { useState, useEffect } from "react";
import "./signup.css"; 

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      setUsers(prev =>
        prev.map(u => (u.id === editId ? { ...u, ...formData } : u))
      );
      setEditId(null);
    } else {
      setUsers(prev => [...prev, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", email: "", password: "" });
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, password: user.password });
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="container">
      <h2>{editId ? "Edit User" : "Create User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        /><br/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /><br/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        /><br/>

       <button type="submit">{editId ? "Update" : "Create"}</button>
{editId && <button type="button" className="cancel" onClick={() => { setEditId(null); setFormData({ name: "", email: "", password: "" }); }}>Cancel</button>}

      </form>

      <hr />
      <h3>Users List</h3>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
 <ul className="user-list">
  {users.map((user) => (
    <li key={user.id} className="user-card">
      <div className="user-info">
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </div>
      <div className="user-actions">
        <button onClick={() => handleEdit(user)}>Edit</button>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </div>
    </li>
  ))}
</ul>

      )}
    </div>
  );
}

export default App;
