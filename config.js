// Serwer MQTT (WebSocket)
var mqttServer = "wss://5be1c7927e2b41159c0a489a411bd419.s1.eu.hivemq.cloud:8884/mqtt";


// Urządzenia MQTT (ostatni wpis bez przecinka na końcu!)
window.devices = [

    {
    name: "AO Szczecin TRANE 1",
    topicPublish: "ao_szczecin_trane/1/command",
    topicSubscribe: "ao_szczecin_trane/1/status",
    buttonName1: "MAIN",
    buttonCmd1: "\u001b",
    buttonName2: "BACK",
    buttonCmd2: "M",
    buttonName3: "LIST",
    buttonCmd3: "L",
    buttonName4: "PREV",
    buttonCmd4: "P",
    buttonName5: "NEXT",
    buttonCmd5: "N",
    buttonName6: "INFO",
    buttonCmd6: "\u001b3SM6S",
    buttonName7: "SEL1",
    buttonCmd7: "1S",
    buttonName8: "SEL2",
    buttonCmd8: "2S",
    buttonName9: "SEL3",
    buttonCmd9: "3S",
    buttonName10: "SEL4",
    buttonCmd10: "4S",
    buttonName11: "SEL5",
    buttonCmd11: "5S",
    buttonName12: "SEL6",
    buttonCmd12: "6S",
    buttonName13: "SEL7",
    buttonCmd13: "7S",
    buttonName14: "SEL8",
    buttonCmd14: "8S",
    buttonName15: "SEL9",
    buttonCmd15: "9S"
    },

    {
    name: "AO Szczecin TRANE 2",
    topicPublish: "ao_szczecin_trane/2/command",
    topicSubscribe: "ao_szczecin_trane/2/status",
    buttonName1: "MAIN",
    buttonCmd1: "\u001b",
    buttonName2: "BACK",
    buttonCmd2: "M",
    buttonName3: "LIST",
    buttonCmd3: "L",
    buttonName4: "PREV",
    buttonCmd4: "P",
    buttonName5: "NEXT",
    buttonCmd5: "N",
    buttonName6: "INFO",
    buttonCmd6: "\u001b3SM6S",
    buttonName7: "SEL1",
    buttonCmd7: "1S",
    buttonName8: "SEL2",
    buttonCmd8: "2S",
    buttonName9: "SEL3",
    buttonCmd9: "3S",
    buttonName10: "SEL4",
    buttonCmd10: "4S",
    buttonName11: "SEL5",
    buttonCmd11: "5S",
    buttonName12: "SEL6",
    buttonCmd12: "6S",
    buttonName13: "SEL7",
    buttonCmd13: "7S",
    buttonName14: "SEL8",
    buttonCmd14: "8S",
    buttonName15: "SEL9",
    buttonCmd15: "9S"
    }

];

