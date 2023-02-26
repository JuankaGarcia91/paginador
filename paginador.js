$(function () {
    let container = $('#pagination');
    container.pagination({
        dataSource: [
{number: '<a class="lb1-tt1" href="https://librerianacional.com/producto/el-padrino-366846">El Padrino "Mario Puzo"</a>'},
{number: '<a class="lb1-tt2" href="https://www.buscalibre.com.co/libro-maria/9789587231939/p/52764875?bmkt_source=google&bmkt_campaign=878570393&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA4MhWcYoxzpZhAntZYOe58SDdbHroLWKI7ldeg7U-vwWBAYlM2CC_AaAlYHEALw_wcB">La Maria "Miguel de Cervantes"</a>'},
{number: '<a class="lb1-tt3" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Odisea.pdf">La Odisea "Homero"</a>'},
{number: '<a class="lb1-tt4" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ocw.uca.es/pluginfile.php/1491/mod_resource/content/1/El_principe_Maquiavelo.pdf">El principie "Nicolas Maquiavelo"</a>'},
{number: '<a class="lb1-tt5" href="https://www.elejandria.com/libro/el-arte-de-la-guerra/sun-tzu/847">El Arte de la Guerra "Sun Tzu"</a>'},
{number: '<a class="lb1-tt6" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://biblioteca.org.ar/libros/130864.pdf">La Isla del Tesoro "Robert Louis Stevenson"</a>'},
{number: '<a class="lb1-tt7" href="https://www.casadellibro.com.co/libro-la-teoria-del-todo/9788483468913/1232767">La Teoria del Todo "Stephen Hawking"</a>'},
{number: '<a class="lb1-tt8" href="https://www.buscalibre.com.co/libro-mi-viaje-sin-ti-lo-que-queriamos-ser-y-no-fuimos/9789585680807/p/50850742">Mi Viaje sin Ti "Alejandro Sequera"</a>'},
{number: '<a class="lb1-tt9" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://web.seducoahuila.gob.mx/biblioweb/upload/Julio%20Verne%20-%20Viaje%20al%20Centro%20de%20la%20Tierra.pdf">El Viaje al Centro de la Tierra "Julio Verne"</a>'},
{number: '<a class="lb1-tt10" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://0201.nccdn.net/1_2/000/000/17f/d54/Las-mil-y-una-noches.pdf">Las Mil y Una Noche "Mario Vargas Llosa"</a>'},
{number: '<a class="lb1-tt11" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.secst.cl/upfiles/documentos/19072016_1207am_578dc39115fe9.pdf">Cien Años de Soledad "Gabriel Garcia Marquez"</a>'},
{number: '<a class="lb1-tt12" href="https://www.elejandria.com/libro/la-divina-comedia/dante-alighieri/884">La Divina Comedia "Dante Alighieri"</a>'},
        ],
        pageSize: 4,
        callback: function (data, pagination) {
            var dataHtml = '<ul id="tabla">';

            $.each(data, function (index, item) {
                dataHtml += '<li id="caja">' + item.number + '</li>';
            });

            dataHtml += '</ul>';

            $("#container").html(dataHtml);
        }
    })
})