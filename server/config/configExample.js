const config = {};

config.twilio = {};
config.gmail = {};
config.slack = {};
config.letsEncrypt = {};

config.port = process.env.PORT || 3030;
config.url = process.env.url || 'example.com';
// used to split the results (dont remove)
config.boundary = process.env.boundary || '#!!!!#';

// Set to false by default (would recommend reverse proxy instead)
config.letsEncrypt.TLS = false;
config.letsEncrypt.publicKey = process.env.publicKey || `/etc/letsencrypt/live/${config.url}/fullchain.pem`;
config.letsEncrypt.privateKey = process.env.privateKey || `/etc/letsencrypt/live/${config.url}/privkey.pem`;
config.letsEncrypt.ca = process.env.ca || `/etc/letsencrypt/live/${config.url}/chain.pem`;

// Remove if you dont' want Twilio
config.twilio.accountSid = process.env.accountSid || '';
config.twilio.authToken = process.env.authToken || '';
config.twilio.to = process.env.twilioTo || ['']; // add additonal numbers with comma seperation e.g '+447000000', ''
config.twilio.from = process.env.twilioFrom || '';

// Remove if you dont want Slack
config.slack.token = process.env.token || '';
config.slack.channel = process.env.slackChannel || 'general';

// Remove if you dont want Gmail
config.gmail.user = process.env.gmailUser || 'example@gmail.com';
config.gmail.pass = process.env.gmailPass || '';
config.gmail.to = process.env.gmailTo || ['youremail@domain.com']; // add additonal emails with comma seperation '', ''
config.gmail.from = process.env.gmailFrom || 'example@gmail.com';


module.exports = config;
