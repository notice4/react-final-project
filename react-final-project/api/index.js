const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'super-secret-key';

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data.json');
let productsData = [];

try {
  const fileContent = fs.readFileSync(dataPath, 'utf8');
  productsData = JSON.parse(fileContent);
} catch (error) {
  console.error('Error reading data.json:', error);
}

app.get('/api/products', (req, res) => {
  res.json(productsData);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username && password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log(`New contact message from ${name} (${email}): ${message}`);

  res.status(200).json({ 
    success: true, 
    message: 'Your message has been sent successfully!' 
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
module.exports = app;
