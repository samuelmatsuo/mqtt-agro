# MQTT-SUBSCRIBER

## Descrição

Este projeto é uma aplicação Node.js que utiliza o protocolo MQTT para se conectar a um broker, assinar tópicos e processar mensagens recebidas. A aplicação também registra logs das mensagens recebidas em arquivos.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- MQTT
- dotenv
- fs (File System)
- path

## Estrutura do Projeto

```
MQTT-SUBSCRIBER/
│── dist/
│── node_modules/
│── src/
│   ├── broker/
│   │   ├── logs.ts
│   ├── connections/
│   │   ├── mqtt.ts
│   ├── index.ts
│── .env
│── .gitignore
│── .hintrc
│── package-lock.json
│── package.json
│── README.md
│── tsconfig.json
```

### Descrição dos Arquivos Principais

- `src/index.ts`: Ponto de entrada da aplicação, que inicia a conexão com o broker MQTT e processa mensagens dos tópicos assinados.
- `src/connections/mqtt.ts`: Configura a conexão com o broker MQTT utilizando as credenciais definidas no `.env`.
- `src/broker/logs.ts`: Responsável por armazenar logs das mensagens recebidas em arquivos.

## Instalação e Configuração

### Requisitos

- Node.js instalado
- Um broker MQTT acessível

### Passos

1. Clone o repositório:
   ```sh
   git clone https://github.com/samuelmatsuo/mqtt-subscriber.git
   cd MQTT-SUBSCRIBER
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo `.env` e configure suas credenciais MQTT:

   ```ini
   MQTT_BROKER_URL=<URL_DO_BROKER>
   MQTT_USERNAME=<USUARIO>
   MQTT_PASSWORD=<SENHA>
   ```

   No arquivo `src/connections/mqtt.ts`, substitua o parâmetro `options` do `mqtt.connect` por:

   ```typescript
   mqtt.connect("mqtt://broker.hivemq.com");
   ```

   Ou crie uma conta gratuita no [HiveMQ Cloud](https://console.hivemq.cloud/) e utilize as credenciais fornecidas.

4. Compile o TypeScript:
   ```sh
   npm run build
   ```
5. Inicie a aplicação:
   ```sh
   npm start
   ```

## Uso

A aplicação assina todos os tópicos (`#`) com QoS 2 e processa mensagens dos seguintes tópicos:

- `iot.rain`
- `iot.temperature`
- `iot.humidity`
- `iot.gas`
- `iot.error`
- `iot.off`

Cada mensagem recebida é exibida no console e cada mensagem de erro é armazenada em arquivos de log.

## Scripts Disponíveis

- `npm start`: Inicia a aplicação.
- `npm run build`: Compila os arquivos TypeScript.
- `npm run start:tsc`: Compila e inicia a aplicação.

## Dependências

- `mqtt`
- `dotenv`
- `@types/node`
- `typescript`
