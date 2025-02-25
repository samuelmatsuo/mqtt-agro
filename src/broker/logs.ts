import { connectionBroker } from "../connections/mqtt";
import * as fs from "fs";
import * as path from "path";

const client = connectionBroker();
const LOG_TIME_LIMIT = 60000;
let currentLogFile: string | null = null;
let logStartTime = Date.now();

const logsDir = path.join(__dirname, "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

export function mqttLogs(topic: string, message: string) {
  const currentTime = Date.now();

  if (currentTime - logStartTime > LOG_TIME_LIMIT || !currentLogFile) {
    currentLogFile = createNewLogFile(topic);
    logStartTime = currentTime;
  }

  fs.appendFile(currentLogFile, message + "\n", (err) => {
    if (err) {
      console.error("Erro ao escrever no arquivo de log:", err);
    }
  });
}

function createNewLogFile(topic: string) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `${topic}-${timestamp}.log`;
  const logFilePath = path.join(logsDir, filename);

  console.log(`Criando novo arquivo de log: ${logFilePath}`);

  return logFilePath;
}
