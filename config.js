// Serwer MQTT (WebSocket)
const mqttServer = "wss://5be1c7927e2b41159c0a489a411bd419.s1.eu.hivemq.cloud:8884/mqtt";


// Urządzenia MQTT (ostatni wpis bez przecinka na końcu!)
window.devices = [

    {
    name: "AO Szczecin TRANE 1",
    topicPublish: "ao_szczecin_trane/1/command",
    topicSubscribe: "ao_szczecin_trane/1/status",
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
    buttonName10: "STAT",
    buttonCmd10: "9M3SM6S"
    },

    {
    name: "AO Szczecin TRANE 2",
    topicPublish: "ao_szczecin_trane/2/command",
    topicSubscribe: "ao_szczecin_trane/2/status",
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

