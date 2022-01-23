"use strict";

document.querySelector("#check-button").onclick = function () {
  sendEmail();
  //   let user = createUser(
  //     document.querySelector("#name").value,
  //     document.querySelector("#last").value,
  //     document.querySelector("#age").value,
  //     document.querySelector("#email").value,
  //     document.querySelector("#phone").value
  //   );
  //   console.log(user);
};
//FA5D853413BCC33C8FF88165DBC24F830E42
function sendEmail() {
  Email.send({
    SecureToken: "96f241c6-68ca-49ac-ad80-391c86729cf2",
    To: document.querySelector("#email").value,
    From: "Daniel Shliakhetko",
    Subject: "",
    Body: "What's up?",
  }).then((message) => alert("Mail sent successfully"));
}
function createUser(name, lastName, age, email, phone) {
  return {
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    phone: phone,
  };
}
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "99d54eb75ed8eb",
    pass: "5df7192050401e",
  },
});
