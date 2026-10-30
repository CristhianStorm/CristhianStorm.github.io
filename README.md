# CS // Software Lab · Portafolio

Portafolio de **Cristhian Storm**, Full Stack Developer y estudiante de Ingeniería Informática en Paraguay. Presenta proyectos públicos, evidencia técnica y exploraciones con una identidad inspirada en planos de ingeniería.

## Contenido

- Hero y monograma CS originales, con una representación conceptual de interfaz, servicios y datos.
- Tutorías online, API de productos y laboratorio Python con enlaces al código.
- Mapa de tecnologías respaldadas por los repositorios públicos.
- Presentación personal, resumen en inglés y acceso al perfil de GitHub.
- Diseño responsive, tema claro/oscuro, navegación por teclado y reducción de movimiento.

No se inventaron datos de contacto. El canal disponible es el perfil público de GitHub.

## Estructura

| Ruta | Contenido |
| --- | --- |
| index.html | Portafolio; HTML semántico sin framework. |
| lab.css | Identidad visual, temas y adaptaciones móviles. |
| lab.js | Selector de tema; guarda la preferencia si localStorage está disponible. |
| assets/lab | SVG originales, locales y sin dependencias externas. |
| [neo-jumper.html](./neo-jumper.html) | Portada anterior conservada íntegramente. |
| [Interfaz de acceso](./SIGN%20UP%20%26%20SIGN%20IN%20PAGE.html) | Práctica anterior conservada. |
| main.css / script.js / images | Recursos originales de Neo Jumper, preservados. |

## Vista local

Requiere un servidor estático; no requiere instalación de paquetes ni compilación. Por ejemplo, con Python 3, desde la raíz:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Abrí `http://127.0.0.1:8000/`. Alterná el tema desde la cabecera y probá Proyectos, Ingeniería y Sobre mí. Las interfaces originales están enlazadas en Otras exploraciones.

## GitHub Pages y revisión

La propuesta se entrega en una rama y PR. Para publicar tras revisarla, fusioná el PR y comprobá **Settings → Pages → Build and deployment**: usar el origen existente; si se publica desde una rama, debe servir `main` y `/(root)`. No se modificó esta configuración ni se agregó un workflow.

Dirección prevista: [cristhianstorm.github.io](https://cristhianstorm.github.io/). No implica que la propuesta esté publicada antes de fusionarse.

## Estado y mejoras futuras

Sitio estático, sin formularios ni backend. La portada anterior cambia de ruta a neo-jumper.html y mantiene su HTML y recursos. Las prácticas históricas conservan sus limitaciones y dependencias originales. La identidad del portafolio se construye con SVG, CSS y fuentes del sistema; no carga kits de iconos ni tipografías remotas.

Próximos pasos: incorporar capturas con datos ficticios y un contacto profesional cuando el autor confirme un canal público. Las verificaciones de esta propuesta se documentan en el PR.

[Perfil de Cristhian Storm](https://github.com/CristhianStorm)
