// Serwer MQTT (WebSocket)
const mqttServer = "wss://5be1c7927e2b41159c0a489a411bd419.s1.eu.hivemq.cloud:8884/mqtt";


// Urządzenia MQTT (ostatni wpis bez przecinka na końcu!)
window.devices = [

    {
    name: "AO Szczecin TRANE 1",
    topicPublish: "ao_szczecin_trane/1/command",
    topicSubscribe: "ao_szczecin_trane/1/status",
    buttonName1: "HOME",
    buttonCmd1: "\u001b",
    buttonName2: "BACK",
    buttonCmd2: "M",
    buttonName3: "LIST",
    buttonCmd3: "L",
    buttonName4: "PREV",
    buttonCmd4: "P",
    buttonName5: "NEXT",
    buttonCmd5: "N",
    buttonName6: "CLR",
    buttonCmd6: "C",
    buttonName7: "STAT",
    buttonCmd7: "\u001b3SM6S",
    buttonName8: "SEL1",
    buttonCmd8: "1S",
    buttonName9: "SEL2",
    buttonCmd9: "2S",
    buttonName10: "SEL3",
    buttonCmd10: "3S",
    buttonName11: "SEL4",
    buttonCmd11: "4S",
    buttonName12: "SEL5",
    buttonCmd12: "5S",
    buttonName13: "SEL6",
    buttonCmd13: "6S",
    buttonName14: "SEL7",
    buttonCmd14: "7S",
    buttonName15: "SEL8",
    buttonCmd15: "8S",
    buttonName16: "SEL9",
    buttonCmd16: "9S"
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

