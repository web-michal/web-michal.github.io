// Serwer MQTT (WebSocket)
const mqttServer = "wss://5be1c7927e2b41159c0a489a411bd419.s1.eu.hivemq.cloud:8884/mqtt";


// Urządzenia MQTT (ostatni wpis bez przecinka na końcu!)
window.devices = [

    {
    name: "TRANE 1 Szczecin",
    topicPublish: "trane1_szczecin/command",
    topicSubscribe: "trane1_szczecin/status",
    lineEnding: "\r\n",
    buttonName1: "MENU",
    buttonCmd1: "M",
    buttonName2: "LIST",
    buttonCmd2: "L",
    buttonName3: "SEL1",
    buttonCmd3: "1S",
    buttonName4: "SEL2",
    buttonCmd4: "2S",
    buttonName5: "SEL3",
    buttonCmd5: "3S",
    buttonName6: "SEL4",
    buttonCmd6: "4S",
    buttonName7: "SEL5",
    buttonCmd7: "5S",
    buttonName8: "SEL6",
    buttonCmd8: "6S",
    buttonName9: "SEL7",
    buttonCmd9: "7S",
    buttonName10: "SEL8",
    buttonCmd10: "8S"
    },

    {
    name: "TRANE 2 Szczecin",
    topicPublish: "trane2_szczecin/command",
    topicSubscribe: "trane2_szczecin/status",
    lineEnding: "\r\n",
    buttonName1: "MENU",
    buttonCmd1: "M",
    buttonName2: "LIST",
    buttonCmd2: "L",
    buttonName3: "SEL1",
    buttonCmd3: "1S",
    buttonName4: "SEL2",
    buttonCmd4: "2S",
    buttonName5: "SEL3",
    buttonCmd5: "3S",
    buttonName6: "SEL4",
    buttonCmd6: "4S",
    buttonName7: "SEL5",
    buttonCmd7: "5S",
    buttonName8: "SEL6",
    buttonCmd8: "6S",
    buttonName9: "SEL7",
    buttonCmd9: "7S",
    buttonName10: "SEL8",
    buttonCmd10: "8S"
    }

];
