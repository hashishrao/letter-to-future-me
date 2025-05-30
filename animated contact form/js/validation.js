document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formSuccess").textContent = "";
  
    let valid = true;
  
    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validate Name
    if (name === "") {
      document.getElementById("nameError").textContent = "Please enter your name.";
      valid = false;
    }
  
    // Validate Email with simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Please enter your email.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      valid = false;
    }
  
    // Validate Message
    if (message === "") {
      document.getElementById("messageError").textContent = "Please enter a message.";
      valid = false;
    }
  
    // If valid, show success message and reset form
    if (valid) {
      document.getElementById("formSuccess").textContent = "🌱 Your letter to the future has been sent!";
      this.reset();
    }
  });