import { connectionBroker } from "../connections/mqtt";

const client = connectionBroker();
export function mqttTemperature() {
  client.subscribe("iot.temperature", { qos: 1 });

  client.removeAllListeners("message");

  client.on("message", (topic: string, message: string) => {
    console.log(message.toString());
    client.unsubscribe("iot.temperature");
    client.publish("iot.log", message, { qos: 2 });
  });
  return;
}
