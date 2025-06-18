function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "client.html";
    })
    .catch((error) => {
      document.getElementById("error").innerText = "خطأ: " + error.message;
    });
}
