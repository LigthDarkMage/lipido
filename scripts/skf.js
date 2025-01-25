const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

//Табличные значения оценки риск прогрессирования ХБП

var chkd = [
    [0, 1, 2],
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 3],
    [3, 3, 3],
    [3, 3, 3]
]

//Переменные поиска табличных результатов
var skfrisk;
var albarisk;
let classskf;
let classalba;
let alba;
const skfForm = document.querySelector('[id="skf-form"]');

//Поиск элементов заполненной формы
const form = document.getElementById('form');
const isfemale = form.querySelector('[name="sex"]');
      isold = form.querySelector('[name="age"]');
      race = form.querySelector('[name="race"]');
      kreatinin = form.querySelector('[name="kreatinin"]');
      trans = form.querySelector('[id="kreat-select"]');
      albumins = form.querySelector('[name="alburia"]');
      albselect = form.querySelector('[id="alburia-select"]');

    //Выполнение функции при нажатии кнопки
function retrieveFormValue (event) {
    event.preventDefault();

    //Манипуляция DOM-деревом
    const calcSKF = document.querySelector('[id="calc-SKF"]');
          resultskf = document.createElement('section');

    //Объявление пустых переменных для дальнейшей работы с ними

    var b;
    var j;
    var k;
    var a;
    var skf;
    var SCr = kreatinin.value;

    //В случае, если креатинин указан в ммоль/л для перевода в мг/дл

    if (trans.value == 2) {
        SCr = (kreatinin.value / 88.4).toFixed(1); 
    }

    //Объявление переменных, зависящих от половой пренадлежности пациента

    if (isfemale.checked == true) {
        b = 1.018;
        k = 0.7;
        a = -0.329;
    } else if (isfemale.checked == false) {
        b = 1;
        k = 0.9;
        a = -0.411;
    }

    //Объявление переменной, зависящая от расовой пренадлежности пациента

    if (race.checked == true) {
        j = 1.159;
    } else if (race.checked == false) {
        j = 1;
    }

    //Поиск максимума и минимума в отношении креатинина на индекс k

    var minSCr = Math.min(SCr/k, 1);
    var maxSCr = Math.max(SCr/k, 1);

    //Основная формула СКФ по SKD-EPI

    skf = 141 * b * j * Math.pow(minSCr, a) * Math.pow(maxSCr, -1.209) * Math.pow(0.993, isold.value);
    skf = skf.toFixed(2);

    //Проверка в консоли
    console.log(albumins.value)
    console.log(SCr);
    console.log(skf);

    //Интерпретация результатов
    if (albumins.value < 30 && albselect.value == 1 || albumins.value < 3 && albselect.value == 2) {
        albarisk = 0;
    } else if (albumins.value >= 30 && albumins.value <= 300 && albselect.value == 1 || albumins.value >= 3 && albumins.value <= 30 && albselect.value == 2) {
        albarisk = 1;
    } else if (albumins.value > 300 && albselect.value == 1 || albumins.value > 30 && albselect.value == 2) {
        albarisk = 2;
    }
    console.log(albarisk);

    if (skf >= 90) {
        skfrisk = 0;
    } else if (skf >= 60 && skf < 90) {
        skfrisk = 1;
    } else if (skf >= 45 && skf < 60) {
        skfrisk = 2;
    } else if (skf >= 30 && skf < 45) {
        skfrisk = 3;
    } else if (skf >= 15 && skf < 30) {
        skfrisk = 4;
    } else if (skf < 15) {
        skfrisk = 5;
    }
    console.log(skfrisk);

    if (skfrisk == 0) {
        classskf = "C1 - Высокая или оптимальная";
    } else if (skfrisk == 1) {
        classskf = "C2 - Незначительно снижена";
    } else if (skfrisk == 2) {
        classskf = "C3a - Умеренно снижена";
    } else if (skfrisk == 3) {
        classskf = "C3b - Существенно снижена";
    } else if (skfrisk == 4) {
        classskf = "C4 - Резко снижена";
    } else if (skfrisk == 5) {
        classskf = "C5 - Почечная недостаточность";
    }
    console.log(classskf);

    if (albarisk == 0) {
        classalba = "A1 - Норма или незначительно повышена";
    } else if (albarisk == 1) {
        classalba = "A2 - Умеренно повышена";
    } else if (albarisk == 2) {
        classalba = "A3 - Значительно повышена";
    }
    console.log(classalba);

    switch (albselect.value) {
        case '1':
        alba = "мг/л";
        break;
        case '2':
        alba = "мг/ммоль";
        break;
    } 
    console.log(alba);

    var chkdresult = chkd[skfrisk][albarisk];
    console.log(chkdresult);

    //Вывод результатов
    if (albumins.value == "") {
        if (skfrisk == 0) {
            calcSKF.replaceChild(resultskf, calcSKF.children[1]);
            resultskf.id = 'result-skf';
            resultskf.classList.add('low-risk');
            resultskf.innerHTML = "<h3>Низкий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Результат без учета наличия альбумина в моче</p></div>";
        } else if (skfrisk == 1) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('low-risk');
                resultskf.innerHTML = "<h3>Низкий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Результат без учета наличия альбумина в моче</p></div>";
        } else if (skfrisk == 2) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('medium-risk');
                resultskf.innerHTML = "<h3>Умеренный риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Результат без учета наличия альбумина в моче</p></div>";
        } else if (skfrisk == 3) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('high-risk');
                resultskf.innerHTML = "<h3>Высокий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Результат без учета наличия альбумина в моче</p></div>";
        } else if (skfrisk == 4) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('very-high-risk');
                resultskf.innerHTML = "<h3>Очень высокий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Результат без учета наличия альбумина в моче</p></div>";
        } else if (skfrisk == 5) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('very-high-risk');
                resultskf.innerHTML = "<h3>Очень высокий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Результат без учета наличия альбумина в моче</p></div>";
        }

    } else if (albumins.value >= 0) {
        if (chkdresult == 0) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('low-risk');
                resultskf.innerHTML = "<h3>Низкий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Альбуминурия составляет <b>"+ albumins.value +" "+ alba +"</b>, соответственно категория альбуминурии <b>"+ classalba +"</b></p></div>";
        } else if (chkdresult == 1) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('medium-risk');
                resultskf.innerHTML = "<h3>Умеренный риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Альбуминурия составляет <b>"+ albumins.value +" "+ alba +"</b>, соответственно категория альбуминурии <b>"+ classalba +"</b></p></div>";
        } else if (chkdresult == 2) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('high-risk');
                resultskf.innerHTML = "<h3>Высокий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Альбуминурия составляет <b>"+ albumins.value +" "+ alba +"</b>, соответственно категория альбуминурии <b>"+ classalba +"</b></p></div>";
        } else if (chkdresult == 3) {
                calcSKF.replaceChild(resultskf, calcSKF.children[1]);
                resultskf.id = 'result-skf';
                resultskf.classList.add('very-high-risk');
                resultskf.innerHTML = "<h3>Очень высокий риск прогрессирования хронической болезни почек</h3><div class='content'><p>СКФ по SKD-EPI равен <b>"+ skf +" мл/мин/1,73м³</b></p><p>Категория СКФ: <b>"+ classskf +"</b></p><p>Альбуминурия составляет <b>"+ albumins.value +" "+ alba +"</b>, соответственно категория альбуминурии <b>"+ classalba +"</b></p></div>";
        }
    }
}

form.addEventListener('submit', retrieveFormValue);