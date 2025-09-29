
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const Item = require('./models/items.js');

const app = express();
connectDB(); //  Connect to MongoDB

const PORT = 5000;

//  Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is connected with MongoDB ");
});


//  Get all items (from MongoDB)
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find(); // fetch all items
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//  Add a new item (name, email)
app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Item(req.body); // create new document
    const savedItem = await newItem.save(); // save to MongoDB
    res.json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Update an item by ID

app.put("/api/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Delete an item by ID
app.delete("/api/items/:id", async (req, res) => {
  console.log(" Delete request received for ID:", req.params.id);
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//  Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
