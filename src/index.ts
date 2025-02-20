import { itsRaining, itsTemperature, itsHumidity } from "./asp64/sensors.js";
import { mqttRain } from "./broker/rain.js";
import { mqttTemperature } from "./broker/temperature.js";
import { mqttHumidity } from "./broker/humidity.js";
import { mqttLogs } from "./broker/logs.js";

setInterval(() => {
  itsRaining();
  mqttRain();

  itsTemperature();
  mqttTemperature();

  itsHumidity();
  mqttHumidity();

  mqttLogs();
}, 1 * 1000);
