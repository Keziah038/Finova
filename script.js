let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("formTitle").innerText = isLogin ? "Login" : "Register";
  document.getElementById("authBtn").innerText = isLogin ? "Login" : "Register";
  document.querySelector(".toggle").innerText = isLogin
    ? "Don't have an account? Register"
    : "Already have an account? Login";
  document.getElementById("message").innerText = "";
  document.getElementById("registerFields").style.display = isLogin ? "none" : "block";
  document.getElementById("confirmPassword").style.display = isLogin ? "none" : "block";
}

function handleAuth() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!email || !password || (!isLogin && !confirmPassword)) {
    message.innerText = "Please fill in all required fields.";
    return;
  }

  if (isLogin) {
    if (!users[email]) {
      message.innerText = "User not found. Please register.";
    } else if (users[email].password !== password) {
      message.innerText = "Incorrect password.";
    } else {
      localStorage.setItem("loggedInUser", email);
      message.style.color = "green";
      message.innerText = "Login successful! Redirecting...";
      setTimeout(() => window.location.href = "dashboard.html", 1000);
    }
  } else {
    if (users[email]) {
      message.innerText = "Email already registered. Please login.";
      return;
    }
    if (password !== confirmPassword) {
      message.innerText = "Passwords do not match.";
      return;
    }

    // Save user with extra details
    const user = {
      fullName: document.getElementById("fullName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      country: document.getElementById("country").value.trim(),
      address: document.getElementById("address").value.trim(),
      gender: document.getElementById("gender").value,
      dob: document.getElementById("dob").value,
      password: password
    };

    const profilePic = document.getElementById("profilePic").files[0];
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function(e) {
        user.profilePic = e.target.result;
        users[email] = user;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", email);
        message.style.color = "green";
        message.innerText = "Registered successfully! Redirecting...";
        setTimeout(() => window.location.href = "dashboard.html", 1000);
      };
      reader.readAsDataURL(profilePic);
    } else {
      users[email] = user;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", email);
      message.style.color = "green";
      message.innerText = "Registered successfully! Redirecting...";
      setTimeout(() => window.location.href = "dashboard.html", 1000);
    }
  }
}
