const mailgun = require("mailgun-js");

const apiKey = process.env.MAILGUN_API_KEY
const domain = 'sandboxd83fe00179b44e728fd1cf8c893b2fb4.mailgun.org';

const mg = mailgun({apiKey, domain});

const sendWelcomeEmail = (email, name) => {
	const data = {
		from: 'Excited User <me@samples.mailgun.org>',
		to: email,
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	}
	
	mg.messages().send(data, function (error, body) {
		// console.log(body);
	})
}

const sendCancelEmail = (email, name) => {
	const data = {
		from: 'Excited User <me@samples.mailgun.org>',
		to: email,
		subject: 'Account closed',
		text: `Sorry to see you go, ${name}`
	}
	
	mg.messages().send(data, function (error, body) {
		// console.log(body);
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail
}