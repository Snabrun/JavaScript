function API() {
{
  fetch("https://api.genderize.io?name=luc")
  .then(response => response.json())
  .then(data => {
    var nimeni = get.name[0];
    getElementById('nimi').innerHTML = name;







    console.log(data.results[0]);
  } );

}
}

/*    let plus = 3; // Сколько времени прибавляем (+3 это время по Москве)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', false); // Делаем запрос по Лондону
    xhr.send(); // отправляем
    if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText ); // Если статус не равен 200, то выводим ошибку.
    } else {
        let time = xhr.responseText; // получаем текст ответа
        let z = JSON.parse(time).utc_datetime; // Получаем время utc
        let time1 = new Date(z).getTime(); // Переводим в timestamp
        let timestampPlus = time1 + (plus * 60 * 60 * 1000); // Воемя +3 часа. Если надо получить время UTC, то убираем просто параметр plus
        let timePlus = new Date(timestampPlus); // Переводим во время (Тут надо понимать, что система сама переведёт его в текущую временную зону
        let result = timePlus.toUTCString();  // Переводим в строку UTC;
        console.log(result); // Выводим дату.
    }
    */
