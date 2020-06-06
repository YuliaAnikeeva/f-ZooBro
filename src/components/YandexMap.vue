<template>
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>
    <body>

    <h1> Зона покрытия доставки </h1>
    <div id="map"></div>

    <div id="mapStatic">

        <div style="position:relative;overflow:hidden;"><a
                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a
                href="https://yandex.ru/maps/213/moscow/?ll=37.604136%2C55.760765&mode=usermaps&source=constructorLink&um=constructor%3A6909fae852e9144b06470b26df6895bb7a9ef26ccbd40dfa7a516aec82082422&utm_medium=mapframe&utm_source=maps&z=10"
                style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест
            и адресов, городской транспорт</a>
            <iframe src="https://yandex.ru/map-widget/v1/-/CSAn4XnI" width="100%" height="300"
                    frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </div>

    </div>

    <div id="header">
      <p>Введи адрес</p>
        <form @submit.prevent class="form-box">
            <input type="text" id="suggest" class="input" placeholder="Адрес доставки">
            <button type="submit" id="button">Проверить адрес</button>
        </form>


        <div id="footer">
            <p id="notice">Адрес не найден</p>
            <div id="messageHeader"></div>
            <div id="message"></div>

            <div v-show="false" ref="address" id="address"></div>

            <div class="btn-adr">
                <button id="btn-adr" class="bnone" @click="()=>adr()">
                    Доставить сюда
                </button>
            </div>
        </div>

    </div>

    </body>
    </html>

</template>

<script>
  export default {
    name: 'YandexMap',
    props: ['updateAddress'],
    methods: {
      adr () {
        console.log('adr')
        const adr = this.$refs.address.textContent
        console.log(adr)
        this.updateAddress(adr)
      },
    },
    mounted () {
      ymaps.ready(init)
      function init () {
        // Подключаем поисковые подсказки к полю ввода.
        var suggestView = new ymaps.SuggestView('suggest'),
          map,
          placemark
        // При клике по кнопке запускаем верификацию введёных данных.
        $('#button').bind('click', function (e) {
          geocode()
        })
        function geocode () {
          // Забираем запрос из поля ввода.
          var request = $('#suggest').val()
          // Геокодируем введённые данные.
          ymaps.geocode(request).then(function (res) {
            var obj = res.geoObjects.get(0),
              error, hint
            if (obj) {
              switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
                case 'exact':
                  break
                case 'number':
                case 'near':
                case 'range':
                  error = 'Неточный адрес, требуется уточнение'
                  hint = 'Уточните номер дома'
                  break
                case 'street':
                  error = 'Неполный адрес, требуется уточнение'
                  hint = 'Уточните номер дома'
                  break
                case 'other':
                default:
                  error = 'Неточный адрес, требуется уточнение'
                  hint = 'Уточните адрес'
              }
            } else {
              error = 'Адрес не найден'
              hint = 'Уточните адрес'
            }
            if (obj.properties.get('metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.AdministrativeAreaName') !== 'Москва') {
              error = 'За пределами зоны доставки'
              hint = 'доставка только по Москве'
            }
            // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
            if (error) {
              showError(error)
              showMessage(hint)
              showAddress(null)
            } else {
              showResult(obj)
            }
          }, function (e) {
            console.log(e)
          })
        }
        function showResult (obj) {
          console.log('все хорошо', obj)
          // Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
          $('#suggest').removeClass('input_error')
          $('#notice').css('display', 'none')
          var mapContainer = $('#map'),
            bounds = obj.properties.get('boundedBy'),
            // Рассчитываем видимую область для текущего положения пользователя.
            mapState = ymaps.util.bounds.getCenterAndZoom(
              bounds,
              [mapContainer.width(), mapContainer.height()]
            ),
            // Сохраняем полный адрес для сообщения под картой.
            //address = [obj.getCountry(), obj.getAddressLine()].join(', '),
            address = [obj.getAddressLine()].join(', '),
            // Сохраняем укороченный адрес для подписи метки.
            shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ')
          // Убираем контролы с карты.
          mapState.controls = []
          // Создаём карту.
          createMap(mapState, shortAddress)
          // Выводим сообщение под картой.
          showMessage('')
          showAddress(address)
          console.log('address', address)
          const cont = document.querySelector('#map')
          cont.classList.add('dblock')
          cont.classList.remove('dnone')
          const btn = document.querySelector('#btn-adr')
          btn.classList.add('bblock')
          btn.classList.remove('bnone')
        }
        function showError (message) {
          $('#notice').text(message)
          $('#suggest').addClass('input_error')
          $('#notice').css('display', 'block')
          // Удаляем карту.
          if (map) {
            map.destroy()
            map = null
            const cont = document.querySelector('#map')
            cont.classList.add('dnone')
            cont.classList.remove('dblock')
            const btn = document.querySelector('#btn-adr')
            btn.classList.add('bnone')
            btn.classList.remove('bblock')
          }
        }
        function createMap (state, caption) {
          // Если карта еще не была создана, то создадим ее и добавим метку с адресом.
          if (!map) {
            map = new ymaps.Map('map', state)
            placemark = new ymaps.Placemark(
              map.getCenter(), {
                iconCaption: caption,
                balloonContent: caption
              }, {
                preset: 'islands#redDotIconWithCaption'
              })
            map.geoObjects.add(placemark)
            // Если карта есть, то выставляем новый центр карты и меняем данные и позицию метки в соответствии с найденным адресом.
          } else {
            map.setCenter(state.center, state.zoom)
            placemark.geometry.setCoordinates(state.center)
            placemark.properties.set({
              iconCaption: caption,
              balloonContent: caption
            })
          }
        }
        function showMessage (message) {
          $('#message').text(message)
        }
        function showAddress (address = null) {
          if (address === null) {
            $('#address').text('')
          } else {
            const adr = document.querySelector('#address')
            adr.innerHTML = address
          }
        }
      }
    },
  }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');
    html, body {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-size: 13px;
        font-family: sans-serif;
        overflow: hidden;
    }

    h1 {
      text-align: center;
      margin-bottom: 50px;
    }

    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.001em;
      color: #464451;
    }

    #footer {
        margin-top: 14px;
        //padding: 12px;
    }
    #map {
        height: 300px;
        margin: 55px 12px 18px 12px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
    #mapStatic {
        height: 300px;
        margin: 55px 12px 18px 12px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 50;
    }
    #header {
        margin: 350px 10px 12px 12px;
    }
    .input123 {
        height: 18px;
        margin-right: 10px;
        flex: 1;
        padding: 4px;
        border: 1px solid #999;
        border-radius: 3px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0);
        transition: .17s linear;
    }
    .input:focus {
        outline: none;
        border: 1px solid #fdd734;
        box-shadow: 0 0 1px 1px #fdd734;
    }
    .input_error, .input_error:focus {
        outline: none;
        border: 1px solid #f33;
        box-shadow: 0 0 1px 1px #f33;
    }
    #notice {
        //position: absolute;
        left: 22px;
        margin: 0px;
        top: 44px;
        color: #f33;
        display: none;
    }
    .dnone {
        height: 0 !important;
    }
    .dblock {
        height: 300px !important;
    }
    .bnone {
        opacity: 0;
    }
    #btn-adr{
        margin-top: 15px;
        padding: 15px 50px;
        background-color: rgba(77, 153, 186, 0.5);
        border-radius: 10px;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 27px;
        color: #F2F2F2;
        border: none;
    }
    .btn-adr{
        text-align: center;
    }
    .bblock {
        opacity: 1;
    }
    .form-box {
        display: flex;
        justify-content: space-between;
        max-width: 700px;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }
    .form-box input {
        line-height: 60px;
        height: 60px;
        padding: 0 20px;
        box-sizing: border-box;
        flex: 1;
        background: #FAFAFA;
        border-radius: 10px 0px 0px 10px;
        border: 1px solid rgba(0, 0, 0, 0.15);
    }
    .form-box button {
        line-height: 60px;
        height: 60px;
        padding: 0 20px;
        box-sizing: border-box;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        border: none;
        color: #fff;
        background: rgba(34, 137, 181, 0.5);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        border-radius: 0px 10px 10px 0px;
    }
    .form-box button:hover {
        background: #2289B5;
    }
    .form-box button:focus {
        outline-color: transparent;
    }
</style>
