//Табличные значения SCORE-2OP для старшего населения
var score2op = [
    //sex - пол пациента
    //smoke - Курение пациента
    //age - Возраст пациента
    //sap - systolic arterial pressure - Систолическое артериальное давление
    [
        //Женщина sex=0
        [
            //Не курит smoke=0
            [
            //85-89 age=0
                //160-179 sap=0
                [62, 63, 64, 65],
                //140-159 sap=1
                [60, 61, 62, 63],
                //120-139 sap=2
                [58, 59, 60, 61],
                //100-119 sap=3
                [56, 57, 58, 60]
            ],
            [
            //80-84 age=1
                //160-179 sap=0
                [53, 54, 55, 57],
                //140-159 sap=1
                [50, 51, 52, 54],
                //120-139 sap=2
                [47, 48, 49, 51],
                //100-119 sap=3
                [44, 45, 47, 48]
            ],
            [
            //75-79 age=2
                //160-179 sap=0
                [44, 46, 47, 48],
                //140-159 sap=1
                [41, 42, 43, 45],
                //120-139 sap=2
                [37, 39, 40, 41],
                //100-119 sap=3
                [34, 35, 36, 37]
            ],
            [
            //70-74 age=3
                //160-179 sap=0
                [37, 38, 39, 41],
                //140-159 sap=1
                [33, 34, 35, 36],
                //120-139 sap=2
                [29, 30, 31, 32],
                //100-119 sap=3
                [26, 27, 28, 29]
            ],
            [
            //65-69 age=4
                //160-179 sap=0
                [27, 28, 30, 31],
                //140-159 sap=1
                [22, 23, 24, 26],
                //120-139 sap=2
                [18, 19, 20, 21],
                //100-119 sap=3
                [15, 16, 16, 17]
            ],
            [
            //60-64 age=5
                //160-179 sap=0
                [20, 21, 22, 24],
                //140-159 sap=1
                [16, 17, 18, 19],
                //120-139 sap=2
                [12, 13, 14, 15],
                //100-119 sap=3
                [10, 11, 11, 12]
            ],
            [
            //55-59 age=6
                //160-179 sap=0
                [14, 15, 17, 18],
                //140-159 sap=1
                [11, 12, 13, 14],
                //120-139 sap=2
                [8, 9, 10, 11],
                //100-119 sap=3
                [7, 7, 8, 9]
            ],
            [
            //50-54 age=7
                //160-179 sap=0
                [10, 11, 12, 14],
                //140-159 sap=1
                [8, 9, 9, 11],
                //120-139 sap=2
                [6, 6, 7, 8],
                //100-119 sap=3
                [4, 5, 5, 6]
            ],
            [
            //45-49 age=8
                //160-179 sap=0
                [7, 8, 9, 10],
                //140-159 sap=1
                [5, 6, 7, 8],
                //120-139 sap=2
                [4, 4, 5, 6],
                //100-119 sap=3
                [3, 3, 4, 4]
            ],
            [
            //40-49 age=9
                //160-179 sap=0
                [5, 6, 7, 8],
                //140-159 sap=1
                [4, 4, 5, 6],
                //120-139 sap=2
                [3, 3, 3, 4],
                //100-119 sap=3
                [2, 2, 2, 3]
            ]
        ], [
            //Курит smoke=1
            [
            //85-89 age=0
                //160-179 sap=0
                [65, 66, 67, 68],
                //140-159 sap=1
                [63, 64, 65, 66],
                //120-139 sap=2
                [61, 62, 63, 65],
                //100-119 sap=3
                [59, 60, 61, 63]
            ],
            [
            //80-84 age=1
                //160-179 sap=0
                [59, 60, 62, 63],
                //140-159 sap=1
                [56, 57, 59, 60],
                //120-139 sap=2
                [53, 54, 56, 57],
                //100-119 sap=3
                [50, 51, 53, 54]
            ],
            [
            //75-79 age=2
                //160-179 sap=0
                [53, 55, 56, 58],
                //140-159 sap=1
                [49, 51, 52, 53],
                //120-139 sap=2
                [46, 47, 48, 49],
                //100-119 sap=3
                [42, 43, 44, 46]
            ],
            [
            //70-74 age=3
                //160-179 sap=0
                [48, 49, 51, 52],
                //140-159 sap=1
                [43, 44, 46, 47],
                //120-139 sap=2
                [39, 40, 41, 43],
                //100-119 sap=3
                [34, 36, 37, 38]
            ],
            [
            //65-69 age=4
                //160-179 sap=0
                [41, 42, 44, 46],
                //140-159 sap=1
                [34, 36, 37, 39],
                //120-139 sap=2
                [28, 30, 31, 33],
                //100-119 sap=3
                [23, 24, 26, 27]
            ],
            [
            //60-64 age=5
                //160-179 sap=0
                [33, 35, 37, 39],
                //140-159 sap=1
                [27, 29, 30, 32],
                //120-139 sap=2
                [22, 23, 25, 26],
                //100-119 sap=3
                [17, 18, 20, 21]
            ],
            [
            //55-59 age=6
                //160-179 sap=0
                [26, 28, 31, 33],
                //140-159 sap=1
                [21, 23, 24, 26],
                //120-139 sap=2
                [16, 18, 19, 21],
                //100-119 sap=3
                [13, 14, 15, 16]
            ],
            [
            //50-54 age=7
                //160-179 sap=0
                [21, 23, 25, 28],
                //140-159 sap=1
                [16, 18, 19, 22],
                //120-139 sap=2
                [12, 13, 15, 17],
                //100-119 sap=3
                [9, 10, 11, 13]
            ],
            [
            //45-49 age=8
                //160-179 sap=0
                [16, 18, 21, 23],
                //140-159 sap=1
                [12, 14, 15, 17],
                //120-139 sap=2
                [9, 10, 12, 13],
                //100-119 sap=3
                [7, 8, 9, 10]
            ],
            [
            //40-49 age=9
                //160-179 sap=0
                [13, 15, 17, 19],
                //140-159 sap=1
                [9, 11, 12, 14],
                //120-139 sap=2
                [7, 8, 9, 10],
                //100-119 sap=3
                [5, 6, 6, 7]
            ]
        ]
    ], [
        //Мужчина sex=1
        [
            //Не курит smoke=0
            [
            //85-89 age=0
                //160-179 sap=0
                [49, 54, 59, 64],
                //140-159 sap=1
                [48, 53, 58, 63],
                //120-139 sap=2
                [47, 52, 56, 61],
                //100-119 sap=3
                [46, 50, 55, 60]
            ],
            [
            //80-84 age=1
                //160-179 sap=0
                [44, 48, 52, 56],
                //140-159 sap=1
                [42, 46, 49, 53],
                //120-139 sap=2
                [40, 43, 47, 51],
                //100-119 sap=3
                [38, 41, 45, 48]
            ],
            [
            //75-79 age=2
                //160-179 sap=0
                [40, 42, 45, 48],
                //140-159 sap=1
                [37, 39, 42, 44],
                //120-139 sap=2
                [34, 36, 39, 41],
                //100-119 sap=3
                [31, 33, 36, 38]
            ],
            [
            //70-74 age=3
                //160-179 sap=0
                [35, 37, 39, 40],
                    //140-159 sap=1
                    [32, 33, 35, 36],
                    //120-139 sap=2
                    [28, 30, 31, 33],
                    //100-119 sap=3
                    [25, 26, 28, 29]
            ],
            [
            //65-69 age=4
                //160-179 sap=0
                [26, 28, 30, 32],
                //140-159 sap=1
                [22, 24, 26, 27],
                //120-139 sap=2
                [18, 20, 21, 23],
                //100-119 sap=3
                [15, 17, 18, 19]
            ],
            [
            //60-64 age=5
                //160-179 sap=0
                [20, 23, 25, 27],
                //140-159 sap=1
                [17, 19, 20, 22],
                //120-139 sap=2
                [14, 15, 17, 18],
                //100-119 sap=3
                [11, 12, 14, 15]
            ],
            [
            //55-59 age=6
                //160-179 sap=0
                [16, 18, 20, 23],
                //140-159 sap=1
                [13, 14, 16, 18],
                //120-139 sap=2
                [10, 11, 13, 15],
                //100-119 sap=3
                [8, 9, 10, 12]
            ],
            [
            //50-54 age=7
                //160-179 sap=0
                [12, 14, 16, 19],
                //140-159 sap=1
                [10, 11, 13, 15],
                //120-139 sap=2
                [7, 9, 10, 12],
                //100-119 sap=3
                [6, 7, 8, 9]
            ],
            [
            //45-49 age=8
                //160-179 sap=0
                [9, 11, 13, 16],
                //140-159 sap=1
                [7, 8, 10, 12],
                //120-139 sap=2
                [5, 6, 8, 9],
                //100-119 sap=3
                [4, 5, 6, 7]
            ],
            [
            //40-49 age=9
                //160-179 sap=0
                [7, 9, 11, 13],
                //140-159 sap=1
                [5, 6, 8, 10],
                //120-139 sap=2
                [4, 5, 6, 7],
                //100-119 sap=3
                [3, 4, 4, 5]
            ]
        ], [
            //Курит smoke=1
            [
            //85-89 age=0
                //160-179 sap=0
                [49, 54, 59, 64],
                //140-159 sap=1
                [48, 53, 58, 63],
                //120-139 sap=2
                [47, 52, 56, 61],
                //100-119 sap=3
                [46, 50, 55, 60]
            ],
            [
            //80-84 age=1
                //160-179 sap=0
                [47, 51, 55, 59],
                //140-159 sap=1
                [45, 49, 52, 56],
                //120-139 sap=2
                [43, 46, 50, 54],
                //100-119 sap=3
                [40, 44, 48, 51]
            ],
            [
            //75-79 age=2
                //160-179 sap=0
                [45, 48, 51, 54],
                //140-159 sap=1
                [42, 44, 47, 50],
                //120-139 sap=2
                [39, 41, 44, 47],
                //100-119 sap=3
                [36, 38, 41, 43]
            ],
            [
            //70-74 age=3
                //160-179 sap=0
                [43, 45, 47, 49],
                //140-159 sap=1
                [39, 41, 42, 44],
                //120-139 sap=2
                [35, 36, 38, 40],
                //100-119 sap=3
                [31, 33, 34, 36]
            ],
            [
            //65-69 age=4
                //160-179 sap=0
                [36, 39, 42, 44],
                //140-159 sap=1
                [31, 33, 36, 38],
                //120-139 sap=2
                [26, 28, 30, 33],
                //100-119 sap=3
                [22, 24, 26, 28]
            ],
            [
            //60-64 age=5
                //160-179 sap=0
                [31, 33, 36, 40],
                //140-159 sap=1
                [25, 28, 31, 33],
                //120-139 sap=2
                [21, 23, 25, 28],
                //100-119 sap=3
                [17, 19, 21, 23]
            ],
            [
            //55-59 age=6
                //160-179 sap=0
                [25, 28, 32, 35],
                //140-159 sap=1
                [21, 23, 26, 29],
                //120-139 sap=2
                [17, 19, 21, 24],
                //100-119 sap=3
                [13, 15, 17, 19]
            ],
            [
            //50-54 age=7
                //160-179 sap=0
                [21, 24, 28, 31],
                //140-159 sap=1
                [17, 19, 22, 25],
                //120-139 sap=2
                [13, 15, 17, 20],
                //100-119 sap=3
                [10, 12, 14, 16]
            ],
            [
            //45-49 age=8
                //160-179 sap=0
                [17, 20, 24, 28],
                //140-159 sap=1
                [13, 16, 18, 22],
                //120-139 sap=2
                [10, 12, 14, 17],
                //100-119 sap=3
                [8, 9, 11, 13]
            ],
            [
            //40-49 age=9
                //160-179 sap=0
                [14, 17, 20, 24],
                //140-159 sap=1
                [11, 13, 16, 19],
                //120-139 sap=2
                [8, 10, 12, 14],
                //100-119 sap=3
                [6, 7, 9, 11]
            ]
        ]
    ]
]

//Табличные значения SCORE для молодого населения

var score1 = [
    [//Не курит
        //> 180 sap=0
        [3, 3, 4, 5, 6],
        //160-180 sap=1
        [2, 3, 3, 4, 4],
        //140-160 sap=2
        [1, 2, 2, 2, 3],
        //120-140 sap=3
        [1, 1, 1, 2, 2]
    ],
    [//Курит
        //> 180 sap=0
        [6, 7, 8, 10, 12],
        //160-180 sap=1
        [4, 5, 6, 7, 8],
        //140-160 sap=2
        [3, 3, 4, 5, 6],
        //120-140 sap=3
        [2, 2, 3, 3, 4]
    ]
];

//Таблица тактики лечения пациента
var therapy = [
    [0, 0, 0, 0, 1, 2],
    [0, 0, 0, 1, 1, 2],
    [0, 0, 1, 2, 2, 2],
    [0, 1, 2, 2, 2, 2],
    [1, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2]
]

const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

const form = document.getElementById('form');

    //Группа для расчета по глобальной шкале ССР
    const familyLipids = form.querySelector('[name="family-lipids"]');
          familyDeath = form.querySelector('[name="family-death"]');
          strokes = form.querySelector('[name="strokes"]');
          diabetes = form.querySelector('[name="diabetes"]');
          sdDamage = form.querySelector('[name="sd-damaged-organs"]');
          sdDurability = form.querySelector('[name="durability-diabetes"]');
          kidneyDisease = form.querySelector('[name="kidneys-disease"]');
          ateroReveal = form.querySelector('[name="atero-revealed"]');
          ateroSize = form.querySelector('[name="atero-size"]');
          skf = form.querySelector('[name="skf"]');
          sdType = form.querySelector('[name="diabetes-type"]');
          extreme = form.querySelector('[name="extreme"]');

//Основное событие после нажатия кнопки
function retrieveFormValue (event) {
    event.preventDefault();
//Объявление каждого элемента формы
    //Группа для расчета по шкале SCORE-2OP
    const isfemale = form.querySelector('[name="sex"]'),
          isold = form.querySelector('[name="age"]');
          issmoke = form.querySelector('[name="smoke"]');
          systolic = form.querySelector('[name="sap"]');
          tch = form.querySelector('[name="chol"]');
          hll = form.querySelector('[name="hll"]');
          hdl = form.querySelector('[name="hdl"]');
          tg = form.querySelector('[name="tg"]');


    //Управление DOM-деревом
    var result = document.createElement('section');
    var divblock = document.createElement('div');
    var hightg = document.createElement('p');
    var medicine = document.createElement('div');
    var tgmedicine = document.createElement('div');

    //Объявление условных переменных для дальнейшего изъятия

    //Результат по шкале SCORE и SCORE-2OP
    let resultScore;
    //Целевые показатели липидограммы
    var goalLipids;
    //Степень снижения ЛНП
    var differenceLowLipids;
    //Пол
    let sex;
    //Курение
    let smoke;
    //Возраст
    let age;
    //Систолическое АД
    let sap;
    //Холестерин
    let chol;
    //Факторы риска для выбора тактики лечения
    let risktherapy;
    //Показатель ЛНП для выбора тактики лечения
    let hlltheraphy;

    //Формула поиска ХС-неЛВП      
    var unHDL = tch.value - hdl.value;

    //Определение риска по SCORE-2OP
    if (isold.value >= 40) {
        //Определение пола пациента    
        if (isfemale.checked == true) {
            sex = 0;
            } else {
            sex = 1;
            }
        //Определение фактора риска курения
        if (issmoke.checked == true) {
            smoke = 0;
            } else {
            smoke = 1;
            }
        //Определение возрастной группы пациента
        if (isold.value >= 85) {
            age = 0;
            } else if (isold.value >= 80 && isold.value < 85) {
            age = 1;
            } else if (isold.value >= 75 && isold.value < 80) {
            age = 2;
            } else if (isold.value >= 70 && isold.value < 75) {
            age = 3;
            } else if (isold.value >= 65 && isold.value < 70) {
            age = 4;
            } else if (isold.value >= 60 && isold.value < 65) {
            age = 5;
            } else if (isold.value >= 55 && isold.value < 60) {
            age = 6;
            } else if (isold.value >= 50 && isold.value < 55) {
            age = 7;
            } else if (isold.value >= 45 && isold.value < 50) {
            age = 8;
            } else if (isold.value >=40 && isold.value < 45) {
            age = 9;
            }
        //Определение группы риска артериального давления
        if (systolic.value >= 160) {
            sap = 0;
            } else if (systolic.value >= 140 && systolic.value < 160) {
            sap = 1;
            } else if (systolic.value >= 120 && systolic.value < 140) {
            sap = 2;
            } else if (systolic.value >= 100 && systolic.value < 120) {
            sap = 3;
            }
        //Определение группы риска по биохимическим показателям ХС-неЛВП
        if (unHDL < 4.0) {
            chol = 0;
            } else if (unHDL >= 4.0 && unHDL < 5.0) {
            chol = 1;
            } else if (unHDL >= 5.0 && unHDL < 6.0) {
            chol = 2;
            } else if (unHDL >= 6.0) {
            chol = 3;
            }
    }

    //Определение риска по SCORE для молодого населения

    if (isold.value < 40) {
        //Определние факторв риска курения
        if (issmoke.checked == true) {
            smoke = 0;
        } else if (issmoke.checked == false) {
            smoke = 1;
        }
        //Определение группы риска по биохимическим показателям ОХС
        if (tch.value < 5) {
            chol = 0;
        } else if (tch.value >= 5 && tch.value < 6) {
            chol = 1;
        } else if (tch.value >= 6 && tch.value < 7) {
            chol = 2;
        } else if (tch.value >= 7 && tch.value < 8) {
            chol = 3;
        } else if (tch.value >= 8) {
            chol = 4;
        }
        //Определение группы риска по артериальному давлению
        if (systolic.value >= 180) {
            sap = 0;
        } else if (systolic.value >= 160 && systolic.value < 180) {
            sap = 1;
        } else if (systolic.value >= 140 && systolic.value < 160) {
            sap = 2;
        } else if (systolic.value < 140) {
            sap = 3;
        }
    }

        //Вывод результатов в консоль
        if (isold.value >=40) {
        resultScore = score2op[sex][smoke][age][sap][chol];
        } else if (isold.value < 40) {
        resultScore = score1[smoke][sap][chol];
        }
        console.log(resultScore);

        //Определение глобального сердечно-сосудсистого риска по общим данным

        if (extreme.checked == true) {
            globalScore = "Экстремальный сердечно-сосудистый риск";
            goalLipids = [4.0, 1.0, 1.0, 2.2, 1.7]
            differenceLowLipids = (hll.value - goalLipids[1]) * 100 / hll.value;
            differenceLowLipids = Math.round(differenceLowLipids);
        } else if (resultScore > 7.5 && isold.value < 50 || resultScore > 10 && isold.value >= 50 && isold.value < 70 || resultScore > 15 && isold.value >= 70 || ateroReveal.checked == true && ateroSize.value >= 50 || diabetes.checked == true && sdDamage.checked == true || diabetes.checked == true && sdDurability.value >= 20 || kidneyDisease.checked == true && skf.value < 30 || familyLipids.checked == true && familyDeath.checked == true || strokes.checked == true) {
            globalScore = "Очень высокий сердечно-сосудистый риск";
            goalLipids = [4.0, 1.4, 1.0, 2.2, 1.7];
            differenceLowLipids = (hll.value - goalLipids[1]) * 100 / hll.value;
            differenceLowLipids = Math.round(differenceLowLipids);
        } else if (chol.value >= 8.0 || hll.value >= 4.9 || systolic.value >= 180 || familyLipids.checked == true && familyDeath.checked == false || diabetes.checked == true && sdDamage.checked == false && sdDurability.value >= 10 && sdDurability.value < 20 || kidneyDisease.checked == true && skf.value >=30 && skf.value < 60 || ateroReveal.checked == true && ateroSize.value >= 25 && ateroSize.value < 50 || resultScore >= 2.5 && resultScore <= 7.5 && isold.value < 50 || resultScore >= 5 && resultScore <= 10 && isold.value >= 50 && isold.value < 70 || resultScore >= 7.5 && resultScore <= 15 && isold.value >= 70) {
            globalScore = "Высокий сердечно-сосудистый риск";
            console.log(globalScore);
            goalLipids = [4.0, 1.8, 1.0, 2.6, 1.7];
            differenceLowLipids = (hll.value - goalLipids[1]) * 100 / hll.value;
            differenceLowLipids = Math.round(differenceLowLipids);
        } else if (isold.value < 40 && diabetes.checked == true && sdDamage.checked == false && sdDurability.value < 10 && resultScore < 2.5 && isold.value < 50 || isold.value < 40 && diabetes.checked == true && sdDamage.checked == false && sdDurability.value < 10 && resultScore < 5 && isold.value >= 50 && isold.value < 70 || isold.value < 40 && diabetes.checked == true && sdDamage.checked == false && sdDurability.value < 10 && resultScore < 7.5 && isold.value >= 70) {
            globalScore = "Умеренный сердчено-сосудситый риск";
            console.log(globalScore);
            goalLipids = [4.0, 2.6, 1.0, 2.6, 1.7];
            differenceLowLipids = (hll.value - goalLipids[1]) * 100 / hll.value;
            differenceLowLipids = Math.round(differenceLowLipids);
        }  else if (resultScore < 2.5 && isold.value < 50 || resultScore < 5 && isold.value >= 50 && isold.value < 70 || resultScore < 7.5 && isold.value >= 70) {
            globalScore = "Низкий сердчено-сосудситый риск";
            console.log(globalScore);
            goalLipids = [4.0, 3.0, 1.0, 2.6, 1.7];
            differenceLowLipids = (hll.value - goalLipids[1]) * 100 / hll.value;
            differenceLowLipids = Math.round(differenceLowLipids);
        }

        //Изменение табличных значений целевых показателей в зависимости от пола
        if (sex = 0) {
            goalLipids[3] = 1.2;
        } else if (sex= 1) {
            goalLipids[3] = 1.0;
        }

        console.log(goalLipids);
        console.log(differenceLowLipids);

        //Оформление результатов через манипуляцию DOM-деревом

        if (globalScore =="Экстремальный сердечно-сосудистый риск") {
            main.replaceChild(result, main.children[1]);
            result.id = 'result';
            result.classList.add('extremal');
            result.classList.add('result')
            result.innerHTML = "<h3>Экстремальный сердечно-сосудистый риск</h3><div class='content'><p>По шкале SCORE и SCORE-2 сердечно сосудистый риск составляет: " + resultScore + "%</p><fieldset class='lipids-now'><legend>Липидограмма пациента на данный момент</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ tch.value +"</td><td>"+ hll.value +"</td><td>"+ hdl.value +"</td><td>"+ unHDL.toFixed(2) +"</td><td>"+ tg.value +"</td></tr></tbody></table></fieldset><fieldset><legend>Целевые показатели липидограммы пациента</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ goalLipids[0].toFixed(2) +"</td><td>"+ goalLipids[1].toFixed(2) +"</td><td>"+ goalLipids[2].toFixed(2) +"</td><td>"+ goalLipids[3].toFixed(2) +"</td><td>"+ goalLipids[4].toFixed(2) +"</td></tr></tbody></table></fieldset><p id='dif'>Степень снижения ХС-ЛНП составляет: "+ differenceLowLipids +"%</p></div>";
        } else if (globalScore == "Очень высокий сердечно-сосудистый риск") {
            main.replaceChild(result, main.children[1]);
            result.classList.add('very-high-risk');
            result.classList.add('result')
            result.innerHTML = "<h3>Очень высокий сердечно-сосудистый риск</h3><div class='content'><p>По шкале SCORE и SCORE-2 сердечно сосудистый риск составляет: " + resultScore + "%</p><fieldset class='lipids-now'><legend>Липидограмма пациента на данный момент</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ tch.value +"</td><td>"+ hll.value +"</td><td>"+ hdl.value +"</td><td>"+ unHDL.toFixed(2) +"</td><td>"+ tg.value +"</td></tr></tbody></table></fieldset><fieldset><legend>Целевые показатели липидограммы пациента</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ goalLipids[0].toFixed(2) +"</td><td>"+ goalLipids[1].toFixed(2) +"</td><td>"+ goalLipids[2].toFixed(2) +"</td><td>"+ goalLipids[3].toFixed(2) +"</td><td>"+ goalLipids[4].toFixed(2) +"</td></tr></tbody></table></fieldset><p id='dif'>Степень снижения ХС-ЛНП составляет: "+ differenceLowLipids +"%</p></div>";
            } else if (globalScore == "Высокий сердечно-сосудистый риск") {
                main.replaceChild(result, main.children[1]);
                result.classList.add('high-risk');
                result.classList.add('result')
                result.innerHTML = "<h3>Высокий сердечно-сосудистый риск</h3><div class='content'><p>По шкале SCORE и SCORE-2 сердечно сосудистый риск составляет: " + resultScore + "%</p><fieldset class='lipids-now'><legend>Липидограмма пациента на данный момент</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ tch.value +"</td><td>"+ hll.value +"</td><td>"+ hdl.value +"</td><td>"+ unHDL.toFixed(2) +"</td><td>"+ tg.value +"</td></tr></tbody></table></fieldset><fieldset><legend>Целевые показатели липидограммы пациента</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ goalLipids[0].toFixed(2) +"</td><td>"+ goalLipids[1].toFixed(2) +"</td><td>"+ goalLipids[2].toFixed(2) +"</td><td>"+ goalLipids[3].toFixed(2) +"</td><td>"+ goalLipids[4].toFixed(2) +"</td></tr></tbody></table></fieldset><p id='dif'>Степень снижения ХС-ЛНП составляет: "+ differenceLowLipids +"%</p></div>";
            } else if (globalScore == "Умеренный сердчено-сосудситый риск") {
                main.replaceChild(result, main.children[1]);
                result.classList.add('medium-risk');
                result.classList.add('result')
                result.innerHTML = "<h3>Умеренный сердечно-сосудистый риск</h3><div class='content'><p>По шкале SCORE и SCORE-2 сердечно сосудистый риск составляет: " + resultScore + "%</p><fieldset class='lipids-now'><legend>Липидограмма пациента на данный момент</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ tch.value +"</td><td>"+ hll.value +"</td><td>"+ hdl.value +"</td><td>"+ unHDL.toFixed(2) +"</td><td>"+ tg.value +"</td></tr></tbody></table></fieldset><fieldset><legend>Целевые показатели липидограммы пациента</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ goalLipids[0].toFixed(2) +"</td><td>"+ goalLipids[1].toFixed(2) +"</td><td>"+ goalLipids[2].toFixed(2) +"</td><td>"+ goalLipids[3].toFixed(2) +"</td><td>"+ goalLipids[4].toFixed(2) +"</td></tr></tbody></table></fieldset><p id='dif'>Степень снижения ХС-ЛНП составляет: "+ differenceLowLipids +"%</p></div>";
            } else if (globalScore == "Низкий сердчено-сосудситый риск") {
                main.replaceChild(result, main.children[1]);
                result.classList.add('low-risk');
                result.classList.add('result')
                result.innerHTML = "<h3>Низкий сердечно-сосудистый риск</h3><div class='content'><p>По шкале SCORE и SCORE-2 сердечно сосудистый риск составляет: " + resultScore + "%</p><fieldset class='lipids-now'><legend>Липидограмма пациента на данный момент</legend><table><thead><tr><th>Общий холестерин</th><th>ХС ЛНП</th><th>ХС ЛВП</th><th>ХС неЛВП</th><th>Триглицериды</th></tr></thead><tbody><tr><td>"+ tch.value +"</td><td>"+ hll.value +"</td><td>"+ hdl.value +"</td><td>"+ unHDL.toFixed(2) +"</td><td>"+ tg.value +"</td></tr></tbody></table></fieldset><p>Степень снижения ХС-ЛНП составляет: "+ differenceLowLipids +"%</p></div>";
            }

        if (tg.value > 1.7) {
            let differencetg = (tg.value - 1.7) * 100 / tg.value;
            differencetg = Math.round(differencetg);
            result.children[1].appendChild(hightg);
            hightg.textContent = "У пациента наблюдается повышение триглицеридов на "+ differencetg +"%";
        }

        //Определение тактики ведения пациента

        if (resultScore < 1 || globalScore == "Низкий сердчено-сосудситый риск") {
            risktherapy = 0;
        } else if (resultScore >= 1 && resultScore < 5 || globalScore == "Умеренный сердчено-сосудситый риск") {
            risktherapy = 1;
        } else if (resultScore >= 5 && resultScore < 10 || globalScore == "Высокий сердечно-сосудистый риск") {
            risktherapy = 2;
        } else if (resultScore >= 10 && globalScore == "Очень высокий сердечно-сосудистый риск") {
            risktherapy = 3;
        } else if (globalScore == "Очень высокий сердечно-сосудистый риск") {
            risktherapy = 4;
        } else if (globalScore =="Экстремальный сердечно-сосудистый риск") {
            risktherapy = 5;
        }

        if (hll < 1.4) {
            hlltheraphy = 0;
        } else if (hll.value >= 1.4 && hll.value < 1.8) {
            hlltheraphy = 1;
        } else if (hll.value >= 1.8 && hll.value < 2.6) {
            hlltheraphy = 2;
        } else if (hll.value >= 2.6 && hll.value < 3.0) {
            hlltheraphy = 3;
        } else if (hll.value >= 3.0 && hll.value < 4.0) {
            hlltheraphy = 4;
        } else if (hll.value >= 4.9) {
            hlltheraphy = 5;
        }
        var totaltherapy = therapy[risktherapy][hlltheraphy];

        //Отображение блока тактики ведения пациента

        if (totaltherapy == 0) {
            result.children[1].appendChild(divblock);
            divblock.innerHTML = "<fieldset class='totaltherapy'><legend>Тактика ведения пациента</legend><p>Рекомендовано для пациента модификация образа жизни, которая в себя включает:<ul><li>Соблюдение диеты с исключением жирной и жареной пищи, а также легкоусвояемых углеводов</li><li>Соблюдение физической активности</li><li>Исключение курения и употребления алкоголя</li><li>Контроль за артериальным давлением</li><li>Контроль за массой тела</li></ul></p><p>Затем посещение терапевта на повторный прием через 2-3 недели.</p></fieldset>";
        } else if (totaltherapy == 1) {
            result.children[1].appendChild(divblock);
            divblock.innerHTML = "<fieldset class='totaltherapy'><legend>Тактика ведения пациента</legend><p>Рекомендовано для пациента модификация образа жизни, которая в себя включает:<ul><li>Соблюдение диеты с исключением жирной и жареной пищи, а также легкоусвояемых углеводов</li><li>Соблюдение физической активности</li><li>Исключение курения и употребления алкоголя</li><li>Контроль за артериальным давлением</li><li>Контроль за массой тела</li></ul></p><p>А также показана лекарственная терапия по усмотрению лечащего врача.</p><p>Затем посещение терапевта на повторный прием через 2-3 недели.</p></fieldset>";
        } else if (totaltherapy == 2) {
            result.children[1].appendChild(divblock);
            divblock.innerHTML = "<fieldset class='totaltherapy'><legend>Тактика ведения пациента</legend><p>Рекомендовано для пациента модификация образа жизни, которая в себя включает:<ul><li>Соблюдение диеты с исключением жирной и жареной пищи, а также легкоусвояемых углеводов</li><li>Соблюдение физической активности</li><li>Исключение курения и употребления алкоголя</li><li>Контроль за артериальным давлением</li><li>Контроль за массой тела</li></ul></p><p>А также показана лекарственная терапия.</p><p>Затем посещение терапевта на повторный прием через 2-3 недели.</p></fieldset>";
        }
        
        if (hll.value < goalLipids[1]) {
            document.querySelector('[id="dif"]').textContent = "Целевой показатель ХС-ЛНП достигнут!";
            document.querySelector('[id="dif"]').classList.add('goal');
        }

        let atoris;

        let roxera;
    
        let roxeraPlus;
    
        let alirocumab;

        //Выбор лекарственной терапии

        //1.Режим назначения аторвастатина
        if (differenceLowLipids >= 30 && differenceLowLipids < 44) {
            atoris = "Аторвастатин по 10 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 44 && differenceLowLipids < 46) {
            atoris = "Аторвастатин по 20 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 46 && differenceLowLipids < 48) {
            atoris = "Аторвастатин по 30 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 48 && differenceLowLipids < 55) {
            atoris = "Аторвастатин 40 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 55) {
            atoris = "Аторвастатин 40 мг x 2 р/д per os";
        }
        //2.Режим назначения розувастатина
        if (differenceLowLipids >= 40 && differenceLowLipids < 46) {
            roxera = "Розувастатин 5 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 46 && differenceLowLipids < 50) {
            roxera = "Розувастатин 10 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 50 && differenceLowLipids < 52) {
            roxera = "Розувастатин 15 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 52 && differenceLowLipids < 57) {
            roxera = "Розувастатин 20 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 57) {
            roxera = "Розувастатин 20 мг x 2 р/д per os";
        }
        //3.Режим назначения статина + эзетимиба
        if (differenceLowLipids >= 60 && differenceLowLipids < 65) {
            roxeraPlus = "Розувастатин 10 мг + Эзетимиб 10 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 65 && differenceLowLipids < 70) {
            roxeraPlus = "Розувастатин 20 мг + Эзетимиб 10 мг x 1 р/д per os";
        } else if (differenceLowLipids >= 70 && differenceLowLipids < 85) {
            roxeraPlus = "Розувастатин 40 мг + Эзетимиб 10 мг x 1 р/д per os"
        }
        //4.Режим назначения алирокумаба
        if (differenceLowLipids >= 60 && differenceLowLipids) {
            alirocumab = "Алирокумаб или Эволокумаб или Инклисиран per injectio";
        }

        //Назначение гиполипидемической терапии
        if (differenceLowLipids >= 30 && differenceLowLipids < 40) {
            result.children[1].appendChild(medicine);
            medicine.innerHTML = "<fieldset><legend>Лекарственная терапия</legend><p>Рекомендовано умеренная терапия статинами:</p><ul id='medical'><li>"+ atoris +"</li></ul></fieldset>";
        } else if (differenceLowLipids >= 40 && differenceLowLipids < 50) {
            result.children[1].appendChild(medicine);
            medicine.innerHTML = "<fieldset><legend>Лекарственная терапия</legend><p>Рекомендовано умеренная терапия статинами:</p><ul id='medical'><li>"+ atoris +"</li><p>ИЛИ<p><li>"+ roxera +"</li></ul></fieldset>";
        } else if (differenceLowLipids >= 50 && differenceLowLipids < 60) {
            result.children[1].appendChild(medicine);
            medicine.innerHTML = "<fieldset><legend>Лекарственная терапия</legend><p>Рекомендовано интенсивная терапия статинами:</p><ul id='medical'><li>"+ atoris +"</li><p>ИЛИ<li>"+ roxera +"</li></ul></fieldset>";
        } else if (differenceLowLipids >= 60 && differenceLowLipids < 85) {
            result.children[1].appendChild(medicine);
            medicine.innerHTML = "<fieldset><legend>Лекарственная терапия</legend><p>Рекомендовано терапия статинами c добавлением эзетимиба:</p><ul id='medical'><li>"+ roxeraPlus +"</li></ul></fieldset>";
        }
        //5. Назначение фенофибрата
        if (tg.value >= 1.7 && tg.value <= 2.3) {
            document.querySelector('[id="medical"]').after(tgmedicine);
            tgmedicine.innerHTML = "<p>Рекомендовано назначение препаратов для снижения ТГ:</p><ul><li>Омега-3 ПНЖК по 2г x 2 р/д</li></ul>";
        } else if (tg.value > 2.3 && tg.value < 5.0) {
            document.querySelector('[id="medical"]').after(tgmedicine);
            tgmedicine.innerHTML = "<p>Рекомендовано назначение препаратов для снижения ТГ:</p><ul><li>Фенофибрат по 1 табл x 1 р/д</li><p>ИЛИ</p><li>Омега-3 ПНЖК по 2г x 2 р/д</li></ul>";
        } else if (tg.value >= 5.0) {
            document.querySelector('[id="medical"]').after(tgmedicine);
            tgmedicine.innerHTML = "<p>Рекомендовано назначение препаратов для снижения ТГ:</p><ul><li>Фенофибрат по 1 табл x 1 р/д</li><p>И</p><li>Омега-3 ПНЖК по 2г x 2 р/д</li></ul>";
        }
}

form.addEventListener('submit', retrieveFormValue);

//Создание выпадающего списка при опросе

let sdMenu1 = document.querySelector('[id="sd-damaged-organs"]');
let sdMenu2 = document.querySelector('[id="sd-durability"]');

diabetes.onclick = function() {
sdMenu1.classList.toggle('hidden');
sdMenu2.classList.toggle('hidden');
}

let isskf = document.querySelector('[id="skf"]');

kidneyDisease.onclick = function() {
    isskf.classList.toggle('hidden');
}
