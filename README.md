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
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="img/greyalos-low-resolution-logo-white-on-transparent-background.png" alt="Logo" width="80" height="80">
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

<br><br>
<a href="https://github.com/Gerardo-R/CCT-maps-v1/blob/main/readme/screenshot-2.png">
<img src="/readme/screenshot2.png" alt="screenshot2">
</a>
<br><br>

Se muestran las opciones de la página a la que se quiere ir.
<br>
Como el formulario está en la página de Contacto se da clic en Contacto.
<br><br>
<a href="https://github.com/Gerardo-R/GReyAlOs/blob/main/readme/greyalos-web_pagina-principal_cursor-encima-de-contacto.png">
<img src="/readme/greyalos-web_pagina-principal_cursor-encima-de-contacto.png" alt="screenshot3">
</a>
<br><br>

Esto dirige a la página de Contacto.
<br><br>
<a href="https://github.com/Gerardo-R/GReyAlOs/blob/main/readme/greyalos-web_pagina-contacto.png">
<img src="/readme/greyalos-web_pagina-contacto.png" alt="screenshot4">
</a>
<br><br>

Se rellenan los campos del formulario. Para este ejemplo se rellenó con los siguientes datos:
<br>
 - Nombre: Gerardo.
 - Correo: gerardoreyna968@gmail.com.
 - Mensaje: Prueba de envío de formulario.
<br>
<a href="https://github.com/Gerardo-R/GReyAlOs/blob/main/readme/greyalos-web_pagina-contacto_formulario-rellenado.png">
<img src="/readme/greyalos-web_pagina-contacto_formulario-rellenado.png" alt="screenshot5">
</a>
<br><br>

Se da clic en el botón Enviar, lo cual dirige a la siguiente página que confirma que el formulario fue enviado.
<br><br>
<a href="https://github.com/Gerardo-R/GReyAlOs/blob/main/readme/greyalos-web_pagina-contacto_formulario-enviado.png">
<img src="/readme/greyalos-web_pagina-contacto_formulario-enviado.png" alt="screenshot6">
</a>
<br><br>

Se da clic en el texto que dice "Regresar al sitio original" para regresar a la página de Contacto.
<br><br>
Eso es todo lo que hay que hacer para enviar un formulario.
<br><br>
Ahora para ver el formulario enviado se accede al cliente del correo utilizado para Formspree. Dentro se consulta la bandeja de entrada y se abre el correo del formulario recibido.
<br><br>
<a href="https://github.com/Gerardo-R/GReyAlOs/blob/main/readme/greyalos-web_correo-formulario-enviado.png">
<img src="/readme/greyalos-web_correo-formulario-enviado.png" alt="screenshot7">
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

