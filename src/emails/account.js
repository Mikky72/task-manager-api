const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mahmoudothman.dev@gmail.com",
    subject: "Welcome to the app",
    text: `Hi, ${name}, Thanks for join in`,
  });
};

const sendByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mahmoudothman.dev@gmail.com",
    subject: "We will miss you",
    text: `Hi, ${name}, sorry for hearing that you are leaving `,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail,
};
