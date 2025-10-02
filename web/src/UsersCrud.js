import { useEffect, useState } from "react";
import { UsersAPI } from "./api.js";
import "./usercrud.css";

export default function UsersCrud() {
  const [users, setUsers] = useState([]); // list of users
  const [form, setForm] = useState({ name: "", email: "" }); // form inputs
  const [editingId, setEditingId] = useState(null); // track user being edited

  // Load all users
async function loadUsers() {
  try {
    const { data } = await UsersAPI.list();
    console.log(" Loaded users:", data); 
    setUsers(data);
  } catch (err) {
    console.error("Error loading users:", err);
  }
}


  useEffect(() => {
    loadUsers();
  }, []);

  // Add or Update user
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editingId) {
        await UsersAPI.update(editingId, form);
      } else {
        await UsersAPI.create(form);
      }

      // Reset form
      setForm({ name: "", email: "" });
      setEditingId(null);
      loadUsers();
    } catch (err) {
      console.error("Error submitting:", err);
    }
  }

  // Delete user
  async function handleDelete(id) {
  console.log(" Deleting user with ID:", id);
  try {
    await UsersAPI.remove(id);
    console.log(" Delete request sent");
    loadUsers();
  } catch (err) {
    console.error(" Error deleting:", err);
  }
}


  // Start editing
  function handleEdit(user) {
    setEditingId(user._id);
    setForm({ name: user.name, email: user.email });
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        color: "black",
      }}
    >
      <h2>Users</h2>

      {/* form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: "", email: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* user list */}
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} — {u.email}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
