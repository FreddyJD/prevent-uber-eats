const { mom, twilio_sid, twilio_token, from_number } = require('./private.json')
const client = require('twilio')(twilio_sid, twilio_token);
const GK = require('global-keypress');

// we start the keylogger for mac-os 10.5
const gk = new GK();
gk.start();

// the word we are looking for 
const word = 'uber'
let wordBuilder = ''

// lets find it.
gk.on('press', data => {

    if (word[wordBuilder.length] === data.data) {
        wordBuilder += data.data;
        if (word === wordBuilder) {
            client.messages
                .create({
                    body: 'I am about to spend 20$ in uber eats, why the fuck are you letting me do this - https://the-cray-bucket.s3.amazonaws.com/vid.mp4',
                    from: 'whatsapp:+' + from_number,
                    to: 'whatsapp:+' + mom,
                })
                .then(message => console.log(message.sid))
                .done();
        }uber
    } else {
        wordBuilder = ''
    }
});
