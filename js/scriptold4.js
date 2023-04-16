var map;
var markers;
var geojson;
var conteo;


function mapa() {
  $('#loading-gif').hide();
  // Creamos el mapa y definimos las coordenadas del centro
  map = L.map('map').setView([17.078016987466253, -96.74435334720452], 5);

  // Agregamos la capa de OpenStreetMap al mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  console.log("mapa cargado");
}

function mapear() {
  $('#loading-gif').show();
  conteo = 0;
  // Eliminamos los marcadores previos del mapa
  if (markers) {
    markers.clearLayers();
  }
  // Cargamos los datos del archivo CSV con Leaflet.ajax y agregamos los marcadores al mapa
  $.ajax({
    //url: "datos/prueba.csv",
    url: "datos/CCT.csv",
    dataType: "text",
    success: function (data) {
      markers = L.markerClusterGroup();

      // Convertimos los datos CSV en objetos GeoJSON
      geojson = Papa.parse(data, {
        header: true,
        dynamicTyping: true,
        delimiter: ',',
        newline: '',
        skipEmptyLines: true
      }).data.map(function (d) {

        // Creamos variables para guardar el valor de la latitud y longitud para después validarlas
        var lat = parseFloat(d.LATITUD);
        var lng = parseFloat(d.LONGITUD);

        // Creamos variables para guardar el valor de cada filtro
        var entidadValue = document.getElementById('entidad').value;
        var nivelValue = document.getElementById('nivel').value;
        var ambitoValue = document.getElementById('ambito').value;
        var sostenimientoValue = document.getElementById('sostenimiento').value;
        var turnoValue = document.getElementById('turno').value;

        if (d.ENTIDAD !== entidadValue) {
          return null;
        }

        else if (d.NIVEL !== nivelValue) {
          return null;
        }

        else if (d.AMBITO !== ambitoValue) {
          return null;
        }

        else if (d.SOSTENIMIENTO !== sostenimientoValue) {
          return null;
        }

        else if (d.TURNO !== turnoValue) {
          return null;
        }

        // Validamos las coordenadas de LATITUD y LONGITUD antes de agregar el marcador
        else if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
          return null; // Si las coordenadas no son válidas, regresa null para descartar el marcador
        }

        return {
          type: 'Feature',
          properties: d,
          geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          }
        }
      }).filter(function (d) { return d != null; }); // Filtramos los objetos null para descartar los marcadores no válidos

      // Agregamos los marcadores al conjunto de marcadores
      L.geoJSON(geojson, {
        pointToLayer: function (feature, latlng) {
          var marker = L.marker(latlng);

          // Agregamos un hipervínculo que abre Google Maps con las coordenadas del marcador
          var link = "https://www.google.com/maps?q=" + latlng.lat + "," + latlng.lng;
          //Se crea la cadena del domicilio
          var domicilio = feature.properties.CALLE + "";
          //Como algunos números exteriores son 0 se cambia a "S/N" en el domicilio
          if (feature.properties.NUMERO_EXT === "0") {
            domicilio = domicilio + " S/N, ";
          }
          else {
            domicilio = domicilio + " " + feature.properties.NUMERO_EXT + ", ";
          }
          domicilio = domicilio + "" + feature.properties.LOCALIDAD + ", " + feature.properties.MUNICIPIO + ", " + feature.properties.ENTIDAD;
          //Algunos códigos postales tienen valor "00000", por lo que se omitirán en el domicilio
          if (feature.properties.CODIGO_POSTAL !== "00000") {
            domicilio = domicilio + ", " + feature.properties.CODIGO_POSTAL;
          }

          marker.bindPopup("<b>" + feature.properties.NOMBRE + "</b><br>" +
            "<b>Clave: </b>" + feature.properties.CLAVE + "<br>" +
            "<b>Entidad: </b>" + feature.properties.ENTIDAD + "<br>" +
            "<b>Nivel: </b>" + feature.properties.NIVEL + "<br>" +
            "<b>Ámbito: </b>" + feature.properties.AMBITO + "<br>" +
            "<b>Sostenimiento: </b>" + feature.properties.SOSTENIMIENTO + "<br>" +
            "<b>Turno: </b>" + feature.properties.TURNO + "<br>" +
            "<b>Domicilio: </b>" + domicilio + "<br>" + "<br><a href='" +
            link + "' target='_blank'>Ver en Google Maps</a>");
          markers.addLayer(marker);
          conteo++;
          return marker;
        }
      });

      // Agregamos el conjunto de marcadores al mapa
      map.addLayer(markers);

      console.log("Carga de datos completa");
      console.log("Elementos mapeados: " + conteo);
      actualizarConteoValor(conteo);
      $('#loading-gif').hide();
    }
  });
}

function llenarFiltros() {
  // Leer el archivo CSV con Papa.parse
  Papa.parse('datos/filtros.csv', {
    header: true,
    download: true,
    complete: function (results) {
      // Obtener los valores únicos de cada columna
      var entidades = new Set(results.data.map(function (d) { return d.ENTIDAD; }).filter(function (d) { return d != ""; }));
      var niveles = new Set(results.data.map(function (d) { return d.NIVEL; }).filter(function (d) { return d != ""; }));
      var ambitos = new Set(results.data.map(function (d) { return d.AMBITO; }).filter(function (d) { return d != ""; }));
      var sostenimientos = new Set(results.data.map(function (d) { return d.SOSTENIMIENTO; }).filter(function (d) { return d != ""; }));
      var turnos = new Set(results.data.map(function (d) { return d.TURNO; }).filter(function (d) { return d != ""; }));

      // Agregar las opciones a los elementos select correspondientes
      var entidadesSelect = document.getElementById('entidad');
      var nivelesSelect = document.getElementById('nivel');
      var ambitosSelect = document.getElementById('ambito');
      var sostenimientosSelect = document.getElementById('sostenimiento');
      var turnosSelect = document.getElementById('turno');

      entidades.forEach(function (d) {
        if (d && d.trim() !== '') {
          var option = document.createElement('option');
          option.text = d;
          entidadesSelect.add(option);
        }
      });

      niveles.forEach(function (d) {
        if (d && d.trim() !== '') {
          var option = document.createElement('option');
          option.text = d;
          nivelesSelect.add(option);
        }
      });

      ambitos.forEach(function (d) {
        if (d && d.trim() !== '') {
          var option = document.createElement('option');
          option.text = d;
          ambitosSelect.add(option);
        }
      });

      sostenimientos.forEach(function (d) {
        if (d && d.trim() !== '') {
          var option = document.createElement('option');
          option.text = d;
          sostenimientosSelect.add(option);
        }
      });

      turnos.forEach(function (d) {
        if (d && d.trim() !== '') {
          var option = document.createElement('option');
          option.text = d;
          turnosSelect.add(option);
        }
      });
    }
  });
}

window.addEventListener('load', () => {
  const btnMapear = document.getElementById('map-btn');

  btnMapear.addEventListener("click", () => {
    mapear();
  });
});

function actualizarConteoValor(valor) {
  $('#conteoValor').text(valor);
}
