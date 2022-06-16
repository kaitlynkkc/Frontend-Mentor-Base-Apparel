// const submit = document.getElementById("email");

// submit.addEventListener("click", function() {
//     this.style.background = "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))";
//   });
// const email = document.getElementById("email");

// document.getElementById("submit").addEventListener("click", () => {
//     email.style.borderColor = "hsl(0, 93%, 68%)";
//     invalid.visibility = "visible";
//     this.style.background = "linear-gradient(135deg, hsl(0, 80%, 95%), hsl(0, 80%, 86%))";
//   });

function validateForm() {
    let x = document.forms["emailForm"]["email"].value;
    if (x == "") {
        document.getElementById("email").style.borderColor = "hsl(0, 93%, 68%)";
        document.getElementById("invalid").hidden = false;
        document.getElementById("error").hidden = false;
        document.getElementById("submit").style.background = "linear-gradient(135deg, hsl(0, 80%, 95%), hsl(0, 80%, 86%))";
        return false;
    }
  }