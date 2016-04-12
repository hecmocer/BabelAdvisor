# BabelAdvisor
Proyecto BABEL fullstack con tecnologias frontend (html5, javascript, css, angular) y backend (node, express, mongo, mongoose). Web sobre turismo y recomendaciones colaborativas


# Sistema de ficheros:
En la carpeta principal están instaladas todas las dependencias
Node: express, mongo, mongodb
Bower: >vacío<

En la carpeta Server:
Estan instaladas las dependencias y express

En la carpeta Client:
>vacía<


# Ejecución del proyecto:
Ejecutar sobre la carpeta Server: 'npm start' o mejor 'nodemon'
    Entonces al abrir un navegador y acceder a la url localhost:3000 tendremos la api disponible

Ejecutar sobre la carpeta Server: mongod_BabelAdvisor
    Entonces se iniciará una base de datos mongo en la ruta: C:\Program Files\MongoDB\Server\3.2\data\BabelAdvisorDB

Ejecutar sobre la carpeta raiz: 'python -m SimpleHTTPServer'
    Entonces al abrir un navegador y acceder a la url localhost:8000
    tendremos la aplicación disponible

# Para desarrollo:
Ejecutar en la carpeta raiz: 'grunt'
    Esto compilará los archivos .js y .less para crear el código final

# Para reinstalar la base de datos:
Ejecutar sobre la carpeta Server: node install_db.js
    Entonces se borrará la base de datos y se cargarán los usuarios y destinos especificados de la carpeta data


# Notas adicionales
Se puede iniciar robomongo conectandola a localhost:27017 para ver la base de datos completa