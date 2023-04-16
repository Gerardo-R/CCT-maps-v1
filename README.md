# CCT-maps-v1

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Gerardo-R/CCT-maps-v1">
    <img src="/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CCT-maps-v1 README</h3>

  <p align="center">
    README de proyecto CCT Maps (v1) para la materia de Tecnologías Emergentes.
    <br />
    <a href="https://github.com/Gerardo-R/CCT-maps-v1"><strong>Explorar los documentos »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Gerardo-R/CCT-maps-v1/issues">Reportar Error</a>
    ·
    <a href="https://github.com/Gerardo-R/CCT-maps-v1/issues">Solicitar cambio</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#construído-con">Construído con</a></li>
      </ul>
    </li>
    <li>
      <a href="#primeros-pasos">Primeros pasos</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#créditos">Créditos</a></li>
    <li><a href="#importante">Importante</a></li>
    <li><a href="#próximamente">Próximamente</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Acerca del proyecto

Proyecto para la materia Tecnologías Emergentes donde se mapea el CCT (Catálogo de Centros de Trabajo) de México.
Se usó OpenStreetMap y Leaflet para mostrar el mapa.
<br>
<br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-1.png">
<img src="/readme/screenshot-1.png" alt="screenshot1" >
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Construído con

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
*   ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)
*   ![css](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
*   ![html5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
*   <img src="https://leafletjs.com/docs/images/logo.png" alt="Leaflet" width="100">
*   <img src="https://www.openstreetmap.org/assets/osm_logo-4afddaae0230a5a46687fdc751ed256dfdccde144118cb02a7d7960f207a4b92.svg" alt="OpenStreetMap" height="50">
*   ![Papa Parse](https://www.vectorlogo.zone/logos/papaparse/papaparse-ar21.svg)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Primeros pasos

### Prerrequisitos

1. Tener instalado Visual Studio Code o cualquier otro software que permita abrir el proyecto y editar el código.
2. Tener instalado XAMPP o algún software similar que funcione como servidor local (localhost) para poder ejecutar el proyecto.
3. Entrar a [Font Awesome](https://fontawesome.com/start), ingresar nuestro email para registrarse en el sitio y recibir un código de kit de iconos gratuito.


### Instalación

A continuación se describen los pasos para la correcta instalación del proyecto.

1. Clonar o [descargar](https://github.com/Gerardo-R/CCT-maps-v1/archive/refs/heads/main.zip) el repositorio.

```sh
  git clone Gerardo-R/GReyAlOs
```

2. En el archivo "index.html":
   - Reemplazar el código de kit obtenido de Font Awesome:  
   ```html
      <script src="https://kit.fontawesome.com/codigo.js" crossorigin="anonymous"></script>
   ```  
  
3. Descargar las librerías faltantes: [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster/archive/v1.4.1.zip) y [Papa Parse](https://github.com/mholt/PapaParse/archive/5.0.2.zip) y colocar sus carpetas descomprimidas dentro de la carpeta "lib" del proyecto.

4. Descargar el [archivo CSV del CCT con transformación de datos](https://drive.google.com/file/d/1j1PDdbdFT9cfinIJrmiv-w6eAVhIMkpA/view?usp=sharing) y colocarlo en la carpeta "datos" del proyecto.
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

A continuación se presenta la manera en que funciona el proyecto.
<br>
Para ver una pequeña demostración del proyecto ver el siguiente [video](https://youtu.be/v1PyDFM-inQ)
<br><br>

Primero se enciende nuestro servidor local XAMPP (o cualquier otro) y se accede a la dirección en donde se tenga el proyecto.
<br>
Se observa que el mapa carga pero no muestra marcadores, esto es porque primero se tienen que aplicar los filtros para mostrarlos.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-1.png">
<img src="/readme/screenshot-1.png" alt="screenshot1" >
</a>
<br><br>

Se tienen filtros de "Entidad", "Nivel", "Ámbito", "Sostenimiento" y "Turno" para los marcadores a mostrar y un botón para "Mapear".
<br>
Este botón lo que hace es agregar al mapa los marcadores que cumplen las condiciones dadas por los filtros.
<br><br>
Aquí se seleccionaron los siguientes filtros:
* Entidad: DURANGO
* Nivel: SECUNDARIA
* Ámbito: URBANO
* Sostenimiento: PUBLICO
* Turno: VESPERTINO

<br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-2.png">
<img src="/readme/screenshot-2.png" alt="screenshot2">
</a>
<br><br>

Se puede notar también que debajo del botón Mapear hay un texto que indica la cantidad de marcadores mapeados. Por defecto el valor mostrado es 0, esto hasta que se mapean los marcadores.
<br><br>
Lo siguiente es dar clic en el botón Mapear para que los marcadores se carguen y se agreguen al mapa.
<br>
Durante la carga de los marcadores en la pantalla se muestra un gif que indica que se está cargando el nuevo contenido del mapa, este gif se muestra durante la carga de los marcadores y desaparece una vez que estos se han terminado de cargar.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-3.png">
<img src="/readme/screenshot-3.png" alt="screenshot3">
</a>
<br><br>

Una vez terminada la carga de los marcadores estos son mostrados en el mapa. Aparecen agrupados indicando la cantidad de marcadores y se van mostrando el resto de marcadores conforme se hace zoom en el mapa.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-4.png">
<img src="/readme/screenshot-4.png" alt="screenshot4">
</a>
<br><br>

Aqui se indica que hay 18 marcadores (18 centros de trabajo que cumplen con los filtros aplicados).
<br>
Se hace zoom para ir mostrando los marcadores.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-5.png">
<img src="/readme/screenshot-5.png" alt="screenshot5">
</a>
<br><br>

Se continúa haciendo zoom hasta poder marcadores individuales como en la siguiente imagen.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-6.png">
<img src="/readme/screenshot-6.png" alt="screenshot6">
</a>
<br><br>

Se da clic en cualquier marcador para mostrar una pequeño pop-up con su información.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-7.png">
<img src="/readme/screenshot-7.png" alt="screenshot7">
</a>
<br><br>

Debajo de la información hay un hipervínculo que dirige a [Google Maps](https://www.google.com/maps/) donde se visualiza ese mismo marcador.
<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-8.png">
<img src="/readme/screenshot-8.png" alt="screenshot8">
</a>
<br><br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## Licencia

Distribuido bajo la licencia MIT. Consultar `LICENSE` para más información.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contacto

Gerardo Reyna - gerardoreyna968@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gerardo-reyna-199964193/)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=flat-square&logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UC4uYKo9XeQSIg8iU2KhtQFQ)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=flat-square&logo=Instagram&logoColor=white)](https://www.instagram.com/zillamxxn/)

Link del proyecto: [https://github.com/Gerardo-R/CCT-maps-v1](https://github.com/Gerardo-R/CCT-maps-v1)
<br>
Perfil de GitHub: [Gerardo-R](https://github.com/Gerardo-R/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Créditos

Recursos utilizados.

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [OpenStreetMap](https://www.openstreetmap.org/)
* [Leaflet](https://leafletjs.com/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
* [Leaflet-ajax](https://github.com/calvinmetcalf/leaflet-ajax)
* [Gif de cargando](https://tenor.com/es-419/search/loading-gif-transparent-background-gifs)
* [Papa Parse](https://www.papaparse.com/)
* [CCT 2022](https://datos.gob.mx/busca/dataset/catalogo-de-centros-de-trabajo-2022)
* [Flaticon](https://www.flaticon.es/resultados?word=mapa)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- IMPORTANT -->
## Importante

IMPORTANTE:
* Dependiendo de la cantidad de marcadores que se vayan a agregar el tiempo de carga puede ser más largo (aunque no mucho).
* En algunos casos, habrá marcadores cuya ubicación no tenga coherencia con el resto de datos de los CCT, debido a que algunas coordenadas no son correctas.
* Los datos obtenidos de los [CCT 2022](https://datos.gob.mx/busca/dataset/catalogo-de-centros-de-trabajo-2022) son oficiales, sin embargo, eso no significa que estén exentos de errores como se indicó en el punto anterior.
* El [archivo CSV del CCT con transformación de datos](https://drive.google.com/file/d/1j1PDdbdFT9cfinIJrmiv-w6eAVhIMkpA/view?usp=sharing) es una modificación del catálogo [CCT 2022](https://datos.gob.mx/busca/dataset/catalogo-de-centros-de-trabajo-2022), se modificó el nombre de las columnas, el orden de las filas y se eliminaron algunas columnas no utilizadas para propósitos de este proyecto, sin embargo, el contenido de los registros del archivo original no se modificó (como el valor de las coordenadas para latitud y longitud, nombre del CCT, etc.); salvo por el reemplazo de letras con tilde por letras sin tilde, además de reemplazar la letra "Ñ" por "N", debido a que de lo contrario estos caracteres no se mostraban correctamente.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SOON -->
## Próximamente

PRÓXIMAMENTE:
<br>
Versión usando la [API de Google Maps](https://developers.google.com/maps/documentation/javascript?hl=es-419) (en cuanto pueda tener una tarjeta con la cual activar la facturación, ya que de lo contrario la API no puede usarse).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Gerardo-R/CCT-maps-v1.svg?style=for-the-badge
[contributors-url]: https://github.com/Gerardo-R/CCT-maps-v1/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Gerardo-R/CCT-maps-v1.svg?style=for-the-badge
[forks-url]: https://github.com/Gerardo-R/CCT-maps-v1/network/members
[stars-shield]: https://img.shields.io/github/stars/Gerardo-R/CCT-maps-v1.svg?style=for-the-badge
[stars-url]: https://github.com/Gerardo-R/CCT-maps-v1/stargazers
[issues-shield]: https://img.shields.io/github/issues/Gerardo-R/CCT-maps-v1.svg?style=for-the-badge
[issues-url]: https://github.com/Gerardo-R/CCT-maps-v1/issues
[license-shield]: https://img.shields.io/github/license/Gerardo-R/CCT-maps-v1.svg?style=for-the-badge
[license-url]: https://github.com/Gerardo-R/CCT-maps-v1/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gerardo-reyna-199964193/
[product-screenshot]: images/screenshot.png

