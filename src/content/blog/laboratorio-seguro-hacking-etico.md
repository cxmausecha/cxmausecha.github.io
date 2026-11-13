---
title: 'Cómo montar un laboratorio seguro para hacking ético'
description: 'Guía para crear un entorno virtual aislado donde practicar pruebas de penetración y análisis sin poner en riesgo tu red ni la de otros.'
pubDate: 2026-11-12
categoria: hacking-etico
tags: [laboratorio, virtualización, kali]
---

Antes de lanzar tu primer escaneo necesitas un lugar donde equivocarte sin consecuencias. Un laboratorio bien montado te protege a ti, a tu red y a terceros.

## Principios del laboratorio

- **Aislamiento:** las máquinas de práctica no deben tener salida a Internet ni ver tu red doméstica o institucional.
- **Reversibilidad:** todo debe poder volver a un estado limpio en segundos (instantáneas o *snapshots*).
- **Autorización:** solo atacas máquinas que son tuyas o que fueron diseñadas para practicar.

## Componentes recomendados

| Componente | Función | Opciones |
|---|---|---|
| Hipervisor | Ejecutar las máquinas virtuales | VirtualBox, VMware Workstation, Proxmox |
| Máquina atacante | Herramientas de auditoría | Kali Linux, Parrot OS |
| Máquinas víctima | Sistemas vulnerables a propósito | Metasploitable 2, DVWA, máquinas de VulnHub |
| Red | Comunicar solo a las VM entre sí | Red interna o *host-only* |

## Paso a paso

1. **Instala el hipervisor** y verifica que la virtualización esté activa en la BIOS/UEFI (VT-x o AMD-V).
2. **Crea una red aislada.** En VirtualBox: *Archivo → Herramientas → Administrador de red* y crea una red *host-only*, o usa el modo *Red interna* con un nombre como `labnet`.
3. **Importa la máquina atacante** (Kali ofrece imágenes listas para VirtualBox y VMware) y conéctala solo a `labnet`.
4. **Importa las máquinas víctima** y conéctalas también solo a `labnet`.
5. **Toma una instantánea** de cada máquina recién instalada y nómbrala `limpia`.
6. **Comprueba el aislamiento** desde Kali:

```bash
ip a                 # identifica tu interfaz y tu IP en labnet
ping -c 2 8.8.8.8    # debe FALLAR: no hay salida a Internet
ping -c 2 <IP-víctima>   # debe responder
```

## Buenas prácticas

- Desactiva carpetas compartidas, portapapeles compartido y arrastrar/soltar entre anfitrión y VM cuando trabajes con malware.
- Si necesitas Internet para actualizar Kali, hazlo con un adaptador NAT **temporal** y retíralo antes de practicar.
- Documenta todo: comandos, hallazgos y capturas. Es la base de cualquier informe profesional.

Con este entorno listo ya puedes seguir el [Laboratorio 01](/laboratorios/lab-01-reconocimiento-nmap/).
