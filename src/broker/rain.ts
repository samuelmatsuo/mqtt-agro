import { connectionBroker } from "../connections/mqtt";

const client = connectionBroker();
export function mqttRain() {
  client.subscribe("iot.rain");

  client.removeAllListeners("message");

  client.on("message", (topic: string, message: string) => {
    console.log(message.toString());
    client.unsubscribe("iot.rain");
    client.publish("iot.log", message, { qos: 2 });
  });
  return;
}
