<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Example Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 720px;
      margin: 60px auto;
      padding: 0 20px;
      background: #f5f7fb;
      color: #1f2937;
    }

    .card {
      background: white;
      padding: 32px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    button {
      background: #2563eb;
      color: white;
      border: 0;
      border-radius: 6px;
      padding: 10px 16px;
      cursor: pointer;
    }

    button:hover {
      background: #1d4ed8;
    }
  </style>
</head>
<body>
  <main class="card">
    <h1>Hello, world!</h1>
    <p>This is a simple HTML page with a little CSS and JavaScript.</p>
    <button onclick="showMessage()">Click me</button>
    <p id="message"></p>
  </main>

  <script>
    function showMessage() {
      document.getElementById("message").textContent =
        "Thanks for clicking the button!";
    }
  </script>
</body>
</html>
