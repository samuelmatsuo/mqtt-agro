import { IPubcompPacket, IPublishPacket } from "mqtt";
import { connectionBroker } from "./connections/mqtt";

const client = connectionBroker();
client.subscribe("#", { qos: 2 });

client.on(
  "message",
  (topic: string, payload: Buffer, packet: IPublishPacket) => {
    switch (topic) {
      case "iot.rain":
        console.log(
          `Mensagem recebida: Tópico -> ${topic} | QoS -> ${
            packet.qos
          } | Payload -> ${payload.toString()}`
        );
        break;
      case "iot.temperature":
        console.log(
          `B Mensagem recebida: Tópico -> ${topic} | QoS -> ${
            packet.qos
          } | Payload -> ${payload.toString()}`
        );
        break;
      case "iot.humidity":
        console.log(
          `Mensagem recebida: Tópico -> ${topic} | QoS -> ${
            packet.qos
          } | Payload -> ${payload.toString()}`
        );
        break;
      case "iot.gas":
        console.log(
          `Mensagem recebida: Tópico -> ${topic} | QoS -> ${
            packet.qos
          } | Payload -> ${payload.toString()}`
        );
        break;
      case "iot.error":
        console.log(
          `Mensagem recebida: Tópico -> ${topic} | QoS -> ${
            packet.qos
          } | Payload -> ${payload.toString()}`
        );
        break;
      case "iot.off":
        break;
    }
  }
);
