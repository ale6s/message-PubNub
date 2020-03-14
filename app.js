const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
    publishKey: "pub-c-2e54b131-ba35-48e6-8d70-709d53dfbc7e",
    subscribeKey: "sub-c-99d96274-62df-11ea-9a99-f2f107c29c38",
    ssl: true,
    uuid: uuid
});

function sendmessage(txt) {
    pubnub.publish({
        channel: "map-AroundCabo",
        message: {
            text: txt
        }
    })
}
pubnub.addListener({
    message: function (m) {
        document.getElementById("newmsg").innerHTML += "<br>" + m.message.text+"<hr>";
    }
});
pubnub.subscribe({
    channels: ["map-AroundCabo"]
});

function sendinput() {
    sendmessage(document.getElementById("message").value);
    document.getElementById("message").value = "";
}
