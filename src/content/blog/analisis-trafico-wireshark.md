---
title: 'Análisis de tráfico de red con Wireshark: lo esencial'
description: 'Cómo capturar, filtrar e interpretar tráfico de red para detectar comportamientos anómalos.'
pubDate: 2026-11-05
categoria: seguridad-en-redes
tags: [wireshark, tráfico, filtros]
---

Wireshark es el analizador de protocolos más usado del mundo. Te permite ver, paquete por paquete, lo que pasa en una red. Es imprescindible tanto para diagnosticar problemas como para investigar incidentes.

## Captura responsable

Captura solo en **redes propias o autorizadas**. Interceptar comunicaciones ajenas es delito (en Colombia, art. 269C de la Ley 1273 de 2009). Para practicar, usa tu laboratorio o archivos `.pcap` públicos de ejercicios.

## Filtros de captura vs. filtros de visualización

- **Filtros de captura** (sintaxis BPF) deciden qué se guarda: `host 10.0.0.5 and port 80`.
- **Filtros de visualización** deciden qué se muestra de lo ya capturado. Son los que más usarás.

## Filtros de visualización útiles

| Filtro | Para qué sirve |
|---|---|
| `ip.addr == 10.0.0.5` | Tráfico desde o hacia un equipo |
| `tcp.flags.syn == 1 && tcp.flags.ack == 0` | Intentos de conexión (útil para ver escaneos) |
| `dns` | Consultas DNS (dominios sospechosos, túneles) |
| `http.request` | Peticiones HTTP en claro |
| `tls.handshake.type == 1` | Inicio de sesiones TLS (campo SNI) |
| `tcp.analysis.flags` | Retransmisiones y problemas de TCP |

## Qué buscar al investigar

1. **Estadísticas → Conversaciones:** ¿qué equipos hablan más? ¿hay destinos inesperados?
2. **Estadísticas → Jerarquía de protocolos:** ¿aparecen protocolos que no deberían estar?
3. **Patrones de beaconing:** conexiones periódicas y regulares a un mismo destino pueden indicar comunicación con un servidor de comando y control.
4. **Seguir flujo TCP** (clic derecho → *Seguir → Flujo TCP*) para reconstruir una conversación completa.

En el laboratorio de reconocimiento con Nmap puedes capturar con Wireshark al mismo tiempo y observar cómo se ve un escaneo desde la red.
