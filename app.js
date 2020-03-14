//generates a user in this case am not using it
const uuid = PubNub.generateUUID();
//config to connect to yuor pubnub account
const pubnub = new PubNub({
    publishKey: "pub-c-key goes here",
    subscribeKey: "sub-c-key goes here",
    ssl: true,
    uuid: uuid
});
//send the text to the pubnub
function sendmessage(txt) {
    pubnub.publish({
        //your channel goes here
        channel: "map-AroundCabo",
        message: {
            text: txt
        }
    })
}
//displaying the text here
pubnub.addListener({
    message: function (m) {
        document.getElementById("newmsg").innerHTML += "<br>" + m.message.text+"<hr>";
    }
});
//channnels goes here
pubnub.subscribe({
    channels: ["map-AroundCabo"]
});
//sending the input
function sendinput() {
    sendmessage(document.getElementById("message").value);
    document.getElementById("message").value = "";
}
