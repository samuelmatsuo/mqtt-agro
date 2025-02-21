import { IPublishPacket } from "mqtt";
import { connectionBroker } from "./connections/mqtt";

const client = connectionBroker();

client.subscribe("#", { qos: 1 });
client.on(
  "message",
  (topic: string, payload: Buffer, packet: IPublishPacket) => {
    if (topic === "iot.rain") {
      console.log(payload.toString());
    }
    if (topic === "iot.temperature") {
      console.log(payload.toString());
    }
    if (topic === "iot.humidity") {
      console.log(payload.toString());
    }
    if (topic === "iot.gas") {
      console.log(payload.toString());
    }
    if (topic === "iot.error") {
      console.log(payload.toString());
    }
    if (topic === "iot.off") {
      console.log(payload.toString());
    }
  }
);
