# Help-Desk
**Mesa de ayuda integrada con Teams y Telegram**

La motivación detrás de este proyecto es *medir* nuestra capacidad de innovación dentro de la compañía creando una módulo a medida que tenga componentes de inteligencia artificial.

Cuando hablamos de componentes, en estas primeras etapas no nos referimos a aplicar inteligencia artificial sobre el producto resultante de este proyecto, pero sí es comenzar a incorporar que la evolución de este Help Desk debe soportar hacer minería de datos. Sin ser extensiva la lista, estos son algunos de los beneficios a mediano y largo plazo que se quuieren poder hacer al realizar este proyecto:
1. Ingesta de datos 
2. Robotización de procesos
3. Análisis prescriptivos
4. Aplicación de algoritmos de machine learning.

Otra de las motivaciones es dar de baja la ticketera que existe en PGP (esto ya es un objetivo de corto plazo). Para esto, se deberían considerar los siguientes aspectos:

**Experiencia para usuarios finales*
- Fácil de consultar y de hacer seguimiento
- Fácil de usar
- Integrado a los servicios (o medios) con los que contemos

**Experiencia para agentes**
- Fácil de gestionar
- Que tengan visibilidad de los trabajos asignados derivados
- Dashboard de productividad

**Experiencia de stakeholders**
- Consultas de desempeño
- Tiempos
- Conformidad del servicio

**Generales**
- Privacidad adecuada
- Minería de datos: los datos generados deben ser potables para hacer minería y análisis de ellos, para mejorar los procesos, reducir costes, aumentar la confianza en el equipo.
- Concepto/marco RPA ¿qué pasos podemos automatizar? ¿cómo alivianamos el trabajo de los agentes? ¿qué tareas repetitivas podemos automatizar?


---
# Características del proyecto

Son tres los usuarios principales y las plataformas que usarán para tener acceso a Help Desk:
1. Solicitante: en casos de técnicos su solicitud de ayuda se hará a través de Telegram y en caso de staff a través de Teams
2. Agentes: quienes resuelven los tickets deberán tener un panel en donde gestionen los tickets que el bot no resolvió
3. Stakeholders: un dashboard donde vea información relevante y de interés de ticketes de varios usuarios. Esto está atado a condiciones de privacidad y gestión de datos.

**Como mantra: "No haremos otro PGP"**

---
# Agentes presentes en PGP
1. Infraestructura
2. Patrimonio
3. Calidad
4. Maestranza

Una primera etapa de este proyecto alcanza a los tickets de Infraestructura pero debería soportar en un futuro nuevos agentes (no usuarios agente sino áreas distintas).

---

# Docker

Guía para poder correr y utilizar la aplicación en contenedores.

**Descargar docker desktop**

https://www.docker.com/products/docker-desktop

**Clonar el proyecto**
```
git clone https://github.com/icsred/Help-Desk.git
```
**Cambiar la url de conexión a MongoDB**

- Abrir fichero [database.py](/backend-helpdesk/database.py)

- Cambiar ```'mongodb://localhost:27017'``` por ```'mongodb://mongodb:27017'```

**Crear composición de contenedores**

Ejecutar comando en la raíz del proyecto (Este comando creará una composición de tres contenedores): 
```
docker compose up -d 
```
**Añadir tickets**

- Abrir URL de FastAPI: http://localhost:8000/docs
- Seleccionar método post
- Hacer click en 'Try it out'
- Modificar el JSON del ticket para cambiar sus atributos
- Hacer click en 'Execute' para añadir un ticket a la base de datos

**Visualizar el frontend**

Para visualizar el frontend sólo tienes que abrir la siguente URL en tu navegador: http://localhost:3000/
