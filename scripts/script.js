//Объявление и внедрение табличных значений SCORE-2OP
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

//Объявление анализатора формы
const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

//Объявление формы
const form = document.getElementById('form');

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

//Формула поиска ХС-неЛВП
    var unHDL = tch.value - hdl.value;

//Алгоритм поиска табличных значений SCORE-2OP на основаниях полученных данных формы    
    if (isfemale.checked == true) {
        let sex = 0;
        if (issmoke.checked == true) {
            let smoke = 0;
            if (systolic.value >= 160) {
                let sap = 0;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 140 && systolic.value < 160) {
                let sap = 1;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 120 && systolic.value < 140) {
                let sap = 2;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 0 && systolic.value < 120) {
                let sap = 3;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            }
        } else {
            let smoke = 1;
            if (systolic.value >= 160) {
                let sap = 0;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 140 && systolic.value < 160) {
                let sap = 1;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 120 && systolic.value < 140) {
                let sap = 2;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 0 && systolic.value < 120) {
                let sap = 3;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            }
        }
    } else {
        let sex = 1;
        if (issmoke.checked == true) {
            let smoke = 0;
            if (systolic.value >= 160) {
                let sap = 0;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 140 && systolic.value < 160) {
                let sap = 1;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 120 && systolic.value < 140) {
                let sap = 2;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 0 && systolic.value < 120) {
                let sap = 3;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            }
        } else {
            let smoke = 1;
            if (systolic.value >= 160) {
                let sap = 0;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 140 && systolic.value < 160) {
                let sap = 1;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 120 && systolic.value < 140) {
                let sap = 2;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            } else if (systolic.value >= 0 && systolic.value < 120) {
                let sap = 3;
                if (isold.value >= 85) {
                    let age = 0;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 80 && isold.value < 85) {
                    let age = 1;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 75 && isold.value < 80) {
                    let age = 2;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 70 && isold.value < 75) {
                    let age = 3;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 65 && isold.value < 70) {
                    let age = 4;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 60 && isold.value < 65) {
                    let age = 5;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 55 && isold.value < 60) {
                    let age = 6;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 50 && isold.value < 55) {
                    let age = 7;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >= 45 && isold.value < 50) {
                    let age = 8;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                } else if (isold.value >=40 && isold.value < 45) {
                    let age = 9;
                    if (unHDL >= 0 && unHDL < 4.0) {
                        let chol = 0;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 4.0 && unHDL < 5.0) {
                        let chol = 1;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 5.0 && unHDL < 6.0) {
                        let chol = 2;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    } else if (unHDL >= 6.0) {
                        let chol = 3;
                        let resultScore = score2op[sex][smoke][age][sap][chol];
                        console.log(resultScore);
                    }
                }
            }
        }
    }

    if (ateroReveal.checked == true && ateroSize.value >= 50 || diabetes.checked == true && sdDamage.checked == true || sdDurability.value >= 20 || kidneyDisease.checked == true || familyLipids.checked == true && familyDeath.checked == true || strokes.checked == true) {
        globalScore = "Очень высокий сердечно-сосудистый риск";
        console.log(globalScore);
    } else if (chol >= 8.0 || hll >= 4,9 || systolic >= 180 || familyLipids.checked == true && familyDeath.checked == false || diabetes.checked == true && sdDamage.checked == false && sdDurability >= 10 && sdDurability < 20) {
        globalScore = "Средний сердечно-сосудистый риск";
        console.log(globalScore);
    }

}

//Объявление функции кнопки
form.addEventListener('submit', retrieveFormValue);

//Глобальная шкала сердечно-сосудистых заболеваний
