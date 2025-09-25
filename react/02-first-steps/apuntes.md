# Estructura de directorios - Raíz

- La mayor parte de los archivos que se encuentran en la raiz son archivos de configuración y normalmente no es necesario de manipular o si se manipulan es muy poco.

- La mayor parte del tiempo estaremos trabajando en src

- *vite.config.ts* - Este archivo de configuración le dice a Vite que estamos trabajando con react. En caso de que haya que manipularlo, existirán instrucciones que nos indicarán qué es lo que tenemos que hacer.
  - react-swc - Speedy Web Compilement. Esto ayuda a compilar código mucho más rápido

- *tsconfig.* - Son archivos que le dicen a TS cómo de estricto se va a comportar.
  - *tsconfig.json* - Es donde están las referencias de app y node
  - *tsconfig.app.json* - Descripción de cómo queremos que TS aplique el código en nuestra aplicación.
  - *tsconfig.node.json* - Esto es como queremos que se ejecute en la parte de Node. Es lo que permite que el servidor local funcione como lo hace. Proporcionado por Vite y ejecutado por Node.

- *readme.md* Para dar instrucciones sobre como levantar la app y tal

- *package.json* - Tiene toda la información de nuestro proyecto de Node.
  - *Scripts* - Indica cómo queremos que funcione nuestra aplicación
  - *dependencies* - Dependencias de producción
  - *devDependencies* - Dependencias de desarrollo que no llegarán a PRO

- *package-lock.json* - Le indica a Node como fue construido nuestro proyecto. Esto se genera automáticamente.

- *index.html* - El inicio de nuestro proyecto

- *eslint.config.ts* - Entidad que nos va a joder la existencia indicándonos errores e historias en el IDE

- *.gitignore* - Para evitar subir a git cosas que no queremos


# Estructura de directorios - Carpetas

- *node_modules* - Aquí están todos los modulos de la aplicación y residen las dependencias y las dependencias de las dependencias. Es normal que existan muchos módulos. Aquí no se toca nada manualmente *NORMALMENTE*. En caso de borrarlo por accidente volver a ejecutar *npm i*

- *public* - Se utilizará para subir recursos estáticos: fuentes, imágenes...

- *src* - Es donde trabajaremos. Aquí estaremos creando las cosas como queramos.
  - *app.css* - Archivo de estilos
  - *app.tsx* - Punto de entrada de la aplicación
  - *index.css* - Estilos globales
  - *main.tsx* - Punto de entrada de nuestra aplicación
  - *vite-env.d.ts* - Archivo de variables de Vite. Variables de entorno, etc.
