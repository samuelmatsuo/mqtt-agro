O que acontece no QoS 2 no HiveMQ?
O publisher envia a mensagem com QoS 2 para o broker.
O broker confirma o recebimento enviando PUBREC para o publisher.
O publisher responde com PUBREL.
O broker confirma a entrega ao subscriber enviando PUBCOMP.
O subscriber recebe a mensagem.