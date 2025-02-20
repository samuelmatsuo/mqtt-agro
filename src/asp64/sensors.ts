import { connectionBroker } from "../connections/mqtt";
import dotenv from "dotenv";
dotenv.config();

const client = connectionBroker();

export function itsRaining() {
  let mm = Math.floor(Math.random() * 500);
  let random_boolean = Math.random() < 0.5;
  console.log(Math.random());

  if (random_boolean) {
    client.publish(
      "iot.rain",
      `CHUVA - Chovendo, ${mm}mm [${new Date().toLocaleTimeString()}] `
    );
  }
}

export function itsTemperature() {
  let graus = Math.floor(Math.random() * 41);
  client.publish(
    "iot.temperature",
    `TEMPERATURA - está ${graus}°C [${new Date().toLocaleTimeString()}] `,
    { qos: 1 }
  );
}

export function itsHumidity() {
  let umidade = Math.floor(Math.random() * 100);
  if (umidade > 60) {
    client.publish(
      "iot.humidity",
      `UMIDADE - umidade do solo está alta: ${umidade}% [${new Date().toLocaleTimeString()}] `,
      {
        qos: 2,
      }
    );
  } else if (umidade < 20) {
    client.publish(
      "iot.humidity",
      `UMIDADE - umidade do solo está baixa: ${umidade}% [${new Date().toLocaleTimeString()}] `,
      {
        qos: 2,
      }
    );
  } else
    client.publish(
      "iot.humidity",
      `UMIDADE - umidade do solo: ${umidade}% [${new Date().toLocaleTimeString()}] `,
      { qos: 2 }
    );
}
