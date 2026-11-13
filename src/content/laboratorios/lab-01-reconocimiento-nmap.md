---
title: 'Reconocimiento de red con Nmap'
description: 'Descubre equipos, puertos y servicios en tu laboratorio aislado e interpreta los resultados como lo haría un auditor.'
numero: 1
nivel: Básico
duracion: 60 min
categoria: hacking-etico
pubDate: 2026-11-12
requisitos:
  - Laboratorio aislado con Kali Linux y Metasploitable 2 en la misma red interna
  - Conocimientos básicos de redes TCP/IP
  - Instantánea "limpia" de ambas máquinas
---

## Objetivos

- Identificar equipos activos en un segmento de red.
- Enumerar puertos abiertos y versiones de servicios.
- Relacionar los servicios encontrados con posibles riesgos.
- Documentar los hallazgos en formato de informe.

## 1. Identifica tu red

Desde Kali, averigua tu IP y el rango de la red del laboratorio:

```bash
ip -4 a
```

Supongamos que tu IP es `192.168.56.10/24`. El rango a analizar será `192.168.56.0/24`.

## 2. Descubrimiento de equipos

```bash
sudo nmap -sn 192.168.56.0/24 -oN 01-descubrimiento.txt
```

`-sn` hace solo descubrimiento (sin escanear puertos). Anota la IP de Metasploitable.

## 3. Escaneo de puertos

```bash
sudo nmap -sS -p- --min-rate 1000 <IP-victima> -oN 02-puertos.txt
```

- `-sS`: escaneo SYN (semiabierto).
- `-p-`: los 65 535 puertos TCP.

## 4. Detección de servicios y versiones

```bash
sudo nmap -sV -sC -p <puertos-encontrados> <IP-victima> -oA 03-servicios
```

`-sV` detecta versiones y `-sC` ejecuta los scripts por defecto de NSE.

## 5. Observa el escaneo desde la red (opcional)

Abre Wireshark en Kali, captura en la interfaz del laboratorio y repite el paso 3. Aplica el filtro `tcp.flags.syn == 1 && tcp.flags.ack == 0` y observa la ráfaga de paquetes SYN.

## 6. Entregable

Completa una tabla como esta para cada servicio:

| Puerto | Servicio | Versión | Riesgo potencial | Recomendación |
|---|---|---|---|---|
| 21/tcp | ftp | vsftpd 2.3.4 | Versión con puerta trasera conocida | Actualizar o deshabilitar el servicio |
| … | … | … | … | … |

## Preguntas de reflexión

1. ¿Qué diferencia hay entre un escaneo `-sS` y uno `-sT`? ¿Cuál es más fácil de detectar?
2. ¿Por qué un auditor debe tener autorización escrita antes de ejecutar estos comandos en una red real?
3. ¿Qué tres servicios priorizarías corregir y por qué?

Al terminar, restaura las instantáneas para dejar el laboratorio limpio.
