# Recomendaciones del autor

- Trabajar con *StrictMode*. Es lo profesional

- El nombre de los componentes empieza con mayúsculas CamelCase todo

- El objetivo de los *componentes* es que sean especializados en lo que tienen que hacer. Es decir se van a encargar de pequeñas partes de la aplicación

- Tener las variables o constantes, o cosas que no van a cambiar fuera de las funciones o componentes hará que mejore el rendimiento. Los componentes se ejecutan constantemente, si las constantes están fuera de la función únicamente se generarán 1 vez, sacándolas del ciclo de ejecución de los componentes

- Los componentes exigen tener un key único. No se recomienda utilizar como key el index. Está considerado una mala práctica. Las *keys* ayudan con temas de renderizado de react, ajustes, etc. por lo que mejora el rendimiento.

- Orden de las importaciones:
  - Importaciones de react
  - Importaciones de terceros
  - Nuestras importaciones
  - Importaciones CSS