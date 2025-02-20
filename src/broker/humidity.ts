import { connectionBroker } from "../connections/mqtt";

const client = connectionBroker();
export function mqttHumidity() {
  client.subscribe("iot.humidity", { qos: 2 });

  client.removeAllListeners("message");

  client.on("message", (topic: string, message: string) => {
    console.log(message.toString());
    client.unsubscribe("iot.humidity");
    client.publish("iot.log", message, { qos: 2 });
  });
  return;
}
