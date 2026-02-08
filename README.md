Simple Blog Application (Express + EJS)

This is a simple blog application built using Node.js, Express, and EJS. It allows users to create, view, edit, and delete blog posts. The project is intentionally built without a database to understand core backend and frontend concepts such as routing, state management, and AJAX communication.

Features
➕ Add new blog posts
👀 View all posts
✏️ Edit posts using AJAX (no page reload)
❌ Delete posts using AJAX
🎨 Simple UI with HTML & CSS
🔁 Dynamic rendering using EJS

Tech Stack
Node.js
Express.js
EJS (Embedded JavaScript Templates)
HTML / CSS
JavaScript (Fetch API)

How It Works
Blog posts are stored in memory using a JavaScript array.
Each post is assigned a unique id generated on the server.
Edit and Delete operations are handled using AJAX (fetch).
After each operation, the server re-renders the updated HTML and sends it back to the client.
Since no database is used, all data is lost when the server restarts.

Project Structure / Usage
npm install
node app.js
http://localhost:3000
