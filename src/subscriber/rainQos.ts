import { IPubcompPacket, IPublishPacket, IPubrelPacket } from "mqtt";
import { connectionBroker } from "../connections/mqtt";

const client = connectionBroker();

client.subscribe("#", { qos: 2 }, (error: Error) => {
  if (error) {
    console.error("Erro ao se inscrever nos tópicos:", error);
  } else {
    console.log("Inscrito com QoS 2 em todos os tópicos");
  }
});

client.on(
  "message",
  (topic: string, payload: Buffer, packet: IPublishPacket) => {
    console.log(`Mensagem recebida [${topic}]: ${payload.toString()}`);

    if (packet.qos === 2) {
      console.log("QoS 2 detectado, enviando PUBREC...");
      client.publish(packet.messageId, { cmd: "pubrec" });
    }
  }
);

client.on("packetsend", (packet: IPubrelPacket) => {
  if (packet.cmd === "pubrel") {
    console.log("PUBREL enviado ao broker");
  }
});

client.on("packetreceive", (packet: IPubcompPacket) => {
  if (packet.cmd === "pubcomp") {
    console.log("PUBCOMP recebido, QoS 2 completo!");
  }
});
