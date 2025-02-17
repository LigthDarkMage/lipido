const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

//Поиск элементов заполненной формы
const form = document.getElementById('form');
const isfemale = form.querySelector('[name="sex"]');
      isold = form.querySelector('[name="age"]');
      kinheart = form.querySelector('[name="kin-heart"]');
      kinlipids = form.querySelector('[name="kin-lipids"]');
      kinkidlipids = form.querySelector('[name="kin-kid-lipids"]');
      kinxantomas = form.querySelector('[name="kin-xantomas"]');
      indiheart = form.querySelector('[name="indi-heart"]');
      indivasc = form.querySelector('[name="indi-vasc"]');
      eyelipids = form.querySelector('[name="eye-lip"]');
      xantomas = form.querySelector('[name="xantomas"]');
      hdll = form.querySelector('[name="hdll"]');
      mutation = form.querySelector('[name="mutate"]');
      

    //Выполнение функции при нажатии кнопки
function retrieveFormValue (event) {
    event.preventDefault();

    var dlcnScore = 0;

    var calcdlcn = document.querySelector('[class="dutch-lipid-clinic-network"]');
    var resultdlcn = document.createElement('section');

    if (kinheart.checked == true || kinlipids.checked == true) {
        dlcnScore = dlcnScore + 1;
    }

    if (kinxantomas.checked == true || kinkidlipids.checked == true) {
        dlcnScore = dlcnScore + 2;
    }

    if (indiheart.checked == true) {
        dlcnScore = dlcnScore + 2;
    }

    if (indivasc.checked == true) {
        dlcnScore = dlcnScore + 1;
    }

    if (xantomas.checked == true) {
        dlcnScore = dlcnScore + 6;
    }

    if (eyelipids.checked == true) {
        dlcnScore = dlcnScore + 4;
    }

    if (hdll.value >= 4 && hdll.value < 5) {
        dlcnScore = dlcnScore + 1;
    } else if (hdll.value >= 5 && hdll.value < 6.5) {
        dlcnScore = dlcnScore + 3;
    } else if (hdll.value >= 6.5 && hdll.value < 8.5) {
        dlcnScore = dlcnScore + 5;
    } else if (hdll.value >= 8.5) {
        dlcnScore = dlcnScore + 8;
    }

    if (mutation.checked == true) {
        dlcnScore = dlcnScore + 8;
    }

    if (dlcnScore > 8) {
        calcdlcn.replaceChild(resultdlcn, calcdlcn.children[1]);
        resultdlcn.classList.add('result');
        resultdlcn.classList.add('high-risk');
        resultdlcn.innerHTML = "<h3>Определенный диагноз семейной гиперхолестеринемии</h3><div class='article-content'><p>По Голландским критериям семейной гиперхолестеринемии набрано <b>"+ dlcnScore +"</b> баллов</p></div>";
    } else if (dlcnScore >= 6 && dlcnScore <= 8) {
        calcdlcn.replaceChild(resultdlcn, calcdlcn.children[1]);
        resultdlcn.classList.add('result');
        resultdlcn.classList.add('medium-risk');
        resultdlcn.innerHTML = "<h3>Вероятный диагноз семейной гиперхолестеринемии</h3><div class='article-content'><p>По Голландским критериям семейной гиперхолестеринемии набрано <b>"+ dlcnScore +"</b> баллов</p></div>";
    } else if (dlcnScore >= 0 && dlcnScore < 6) {
        calcdlcn.replaceChild(resultdlcn, calcdlcn.children[1]);
        resultdlcn.classList.add('result');
        resultdlcn.classList.add('low-risk');
        resultdlcn.innerHTML = "<h3>Возможный диагноз семейной гиперхолестеринемии</h3><div class='article-content'><p>По Голландским критериям семейной гиперхолестеринемии набрано <b>"+ dlcnScore +"</b> баллов</p></div>";
    }


    console.log(dlcnScore);
}

form.addEventListener('submit', retrieveFormValue);
