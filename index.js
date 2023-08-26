const express = require('express');
const app = express();
const port = 3000; // You can use any available port

// Hard-coded dog data
const dogs = [
  { breed: 'Labrador', image: 'https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' },
  { breed: 'Poodle', image: 'https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
  {breed: 'German Shepherd', image:'https://plus.unsplash.com/premium_photo-1661962850828-0ebd5c3be7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80'},
  {breed: 'Golden Retriever', image:'https://images.unsplash.com/photo-1612774412771-005ed8e861d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
  {breed: 'Bulldog', image:'https://images.unsplash.com/photo-1611611158876-41699b77a059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'},
  {breed: 'Beagle', image:'https://plus.unsplash.com/premium_photo-1664285640233-babe58af3c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'},
  {breed: 'Rottweiler', image:'https://images.unsplash.com/photo-1530614680703-896a77643596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'},
  {breed: 'Yorkshire Terrier', image:'https://images.unsplash.com/photo-1526440847959-4e38e7f00b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ya3NoaXJlJTIwdGVycmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'},
  {breed: 'Boxer', image:'https://plus.unsplash.com/premium_photo-1664303072846-5dfab1ba8304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
  {breed: 'Dachshund', image:'https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFjaHNodW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60'},
];

// Define a route to get dog data
app.get('/dogs', (req, res) => {
  res.json(dogs);
});

app.get('/', (req, res) => {
    res.json(dogs);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
