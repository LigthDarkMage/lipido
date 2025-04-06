const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

//Поиск элементов заполненной формы
const form = document.getElementById('form');
const isfemale = form.querySelector('[name="sex"]');
      bodyheight = form.querySelector('[name="body-height"]');
      bodyweight = form.querySelector('[name="body-weight"]');
      abdominalsize = form.querySelector('[name="abdominal-circumference"]');
      race = form.querySelector('[name="race"]')
      

    //Выполнение функции при нажатии кнопки
function retrieveFormValue (event) {
    event.preventDefault();

    var calcbmi = document.querySelector('[class="body-mass-index"]');
    var resultbmi = document.createElement('section');
    var realheight = bodyheight.value/100;
    var bmi;

    console.log(abdominalsize.value);
    bmi = bodyweight.value/Math.pow(realheight, 2);
    bmi = bmi.toFixed(2);

    if (abdominalsize.value == "") {
        if (race.checked == true && bmi >= 40 || race.checked == false && bmi >= 37.5) {
            console.log("1");
            calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
            resultbmi.classList.add('result');
            resultbmi.classList.add('extremal');
            resultbmi.innerHTML = "<h3>Чрезвычайно высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение III степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Учёт только по ИМТ, без учета диагностического критерия абдоминального ожирения.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
        } else if (race.checked == true && bmi >= 35 && bmi < 40 || race.checked == false && bmi >= 32.5 && bmi < 37.5) {
            console.log("2");
            calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
            resultbmi.classList.add('result');
            resultbmi.classList.add('very-high-risk');
            resultbmi.innerHTML = "<h3>Очень высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение II степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Учёт только по ИМТ, без учета диагностического критерия абдоминального ожирения.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
        } else if (race.checked == true && bmi >= 30 && bmi < 35 || race.checked == false && bmi >= 27.5 && bmi < 32.5) {
            console.log("3");
            calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
            resultbmi.classList.add('result');
            resultbmi.classList.add('high-risk');
            resultbmi.innerHTML = "<h3>Высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение I степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Учёт только по ИМТ, без учета диагностического критерия абдоминального ожирения.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
        } else if (race.checked == true && bmi >= 25 && bmi < 30 || race.checked == false && bmi >= 23 && bmi < 27.5) {
            console.log("4");
            calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
            resultbmi.classList.add('result');
            resultbmi.classList.add('high-risk');
            resultbmi.innerHTML = "<h3>Повышенный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента избыточная масса тела (предожирение).</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Учёт только по ИМТ, без учета диагностического критерия абдоминального ожирения.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
        } else if (race.checked == true && bmi >= 18.5 && bmi < 25 || race.checked == false && bmi >= 18.5 && bmi < 23) {
            console.log("5");
            calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
            resultbmi.classList.add('result');
            resultbmi.classList.add('medium-risk');
            resultbmi.innerHTML = "<h3>Умеренный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента нормальная масса тела.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Учёт только по ИМТ, без учета диагностического критерия абдоминального ожирения.</p><p>Рекомендуется дальше сохранять значение массы тела.</p></div>";
        }
    } else {
        if (isfemale.checked == true && abdominalsize.value >= 88 || isfemale.checked == false && abdominalsize.value >= 102) {
            if (race.checked == true && bmi >= 40 || race.checked == false && bmi >= 37.5) {
                console.log("1");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('extremal');
                resultbmi.innerHTML = "<h3>Чрезвычайно высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение III степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Выраженный диагностический критерий за абдоминальное ожирение с повышенным риском сопуствующих заболеваний.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 35 && bmi < 40 || race.checked == false && bmi >= 32.5 && bmi < 37.5) {
                console.log("2");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('very-high-risk');
                resultbmi.innerHTML = "<h3>Очень высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение II степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Выраженный диагностический критерий за абдоминальное ожирение с повышенным риском сопуствующих заболеваний.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 30 && bmi < 35 || race.checked == false && bmi >= 27.5 && bmi < 32.5) {
                console.log("3");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('high-risk');
                resultbmi.innerHTML = "<h3>Высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение I степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Выраженный диагностический критерий за абдоминальное ожирение с повышенным риском сопуствующих заболеваний.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 25 && bmi < 30 || race.checked == false && bmi >= 23 && bmi < 27.5) {
                console.log("4");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('high-risk');
                resultbmi.innerHTML = "<h3>Повышенный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента избыточная масса тела (предожирение).</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Выраженный диагностический критерий за абдоминальное ожирение с повышенным риском сопуствующих заболеваний.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 18.5 && bmi < 25 || race.checked == false && bmi >= 18.5 && bmi < 23) {
                console.log("5");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('medium-risk');
                resultbmi.innerHTML = "<h3>Умеренный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента нормальная масса тела.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Выраженный диагностический критерий за абдоминальное ожирение с повышенным риском сопуствующих заболеваний.</p><p>Рекомендуется следить за массой тела и снизить окружность талии с целью профилактики дальнейшего ожирения, снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            }
        } else if (isfemale.checked == true && abdominalsize.value >= 80 && abdominalsize.value < 88 || isfemale.checked == false && abdominalsize.value >= 94 && abdominalsize.value < 102) {
            if (race.checked == true && bmi >= 40 || race.checked == false && bmi >= 37.5) {
                console.log("1");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('extremal');
                resultbmi.innerHTML = "<h3>Чрезвычайно высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение III степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Имеется диагностический критерий за абдоминальное ожирение.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 35 && bmi < 40 || race.checked == false && bmi >= 32.5 && bmi < 37.5) {
                console.log("2");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('very-high-risk');
                resultbmi.innerHTML = "<h3>Очень высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение II степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Имеется диагностический критерий за абдоминальное ожирение.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 30 && bmi < 35 || race.checked == false && bmi >= 27.5 && bmi < 32.5) {
                console.log("3");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('high-risk');
                resultbmi.innerHTML = "<h3>Высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение I степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Имеется диагностический критерий за абдоминальное ожирение.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 25 && bmi < 30 || race.checked == false && bmi >= 23 && bmi < 27.5) {
                console.log("4");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('high-risk');
                resultbmi.innerHTML = "<h3>Повышенный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента избыточная масса тела (предожирение).</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Имеется диагностический критерий за абдоминальное ожирение.</p><p>Рекомендуется снизить массу тела и снизить окружность талии с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска.</p></div>";
            } else if (race.checked == true && bmi >= 18.5 && bmi < 25 || race.checked == false && bmi >= 18.5 && bmi < 23) {
                console.log("5");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('medium-risk');
                resultbmi.innerHTML = "<h3>Умеренный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента нормальная масса тела.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Имеется диагностический критерий за абдоминальное ожирение.</p><p>Рекомендуется следить за массой тела и снизить окружность талии с целью профилактики дальнейшего ожирения.</p></div>";
            }
        } else if (isfemale.checked == true && abdominalsize.value < 80 || isfemale.checked == false && abdominalsize.value < 94) {
            if (race.checked == true && bmi >= 40 || race.checked == false && bmi >= 37.5) {
                console.log("1");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('extremal');
                resultbmi.innerHTML = "<h3>Чрезвычайно высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение III степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Диагностического критерия за абдоминальное ожирение нет.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска. Также рекомендуется следить за окружностью талии.</p></div>";
            } else if (race.checked == true && bmi >= 35 && bmi < 40 || race.checked == false && bmi >= 32.5 && bmi < 37.5) {
                console.log("2");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('very-high-risk');
                resultbmi.innerHTML = "<h3>Очень высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение II степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Диагностического критерия за абдоминальное ожирение нет.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска. Также рекомендуется следить за окружностью талии.</p></div>";
            } else if (race.checked == true && bmi >= 30 && bmi < 35 || race.checked == false && bmi >= 27.5 && bmi < 32.5) {
                console.log("3");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('high-risk');
                resultbmi.innerHTML = "<h3>Высокий риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента ожирение I степени.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Диагностического критерия за абдоминальное ожирение нет.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска. Также рекомендуется следить за окружностью талии.</p></div>";
            } else if (race.checked == true && bmi >= 25 && bmi < 30 || race.checked == false && bmi >= 23 && bmi < 27.5) {
                console.log("4");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('high-risk');
                resultbmi.innerHTML = "<h3>Повышенный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента избыточная масса тела (предожирение).</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Диагностического критерия за абдоминальное ожирение нет.</p><p>Рекомендуется снизить массу тела с целью снижения уровня АД, дислипилемии, риска сахарного диабета II степени для улучшения профиля сердечно-сосудистого риска. Также рекомендуется следить за окружностью талии.</p></div>";
            } else if (race.checked == true && bmi >= 18.5 && bmi < 25 || race.checked == false && bmi >= 18.5 && bmi < 23) {
                console.log("5");
                calcbmi.replaceChild(resultbmi, calcbmi.children[1]);
                resultbmi.classList.add('result');
                resultbmi.classList.add('medium-risk');
                resultbmi.innerHTML = "<h3>Умеренный риск развития сопутствующих заболеваний</h3><div class='article-content'><p>У пациента нормальная масса тела.</p><p>ИМТ составило = "+ bmi +" кг/м².</p><p>Диагностического критерия за абдоминальное ожирение нет.</p><p>Рекомендуется дальше сохранять значение массы тела.</p></div>";
            }
        }
    }

    console.log(bmi);
}

form.addEventListener('submit', retrieveFormValue);