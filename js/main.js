// "use strict";

document.addEventListener('DOMContentLoaded', function() {

    console.log('Документ загружен');

    /* Tooltip - Всплывающая подсказка */

    let buttonTip = document.querySelectorAll('.tooltip');

    buttonTip.forEach(btntip => {
        let buttonID = btntip.getAttribute('id').slice(3);
        let tooltip = document.getElementById(`tip-${buttonID}`);

        let onMouseMove = (event) => {
            tooltip.style.left = event.pageX + 'px';
            tooltip.style.top = event.pageY + 'px';
        }

        btntip.addEventListener('mouseover', function() {
            console.log(buttonID);
            tooltip.style.display = 'block';
            document.addEventListener('mousemove', onMouseMove);
        });

        btntip.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });

    /* Sound button - Кнопка со звуком */

    let buttonSound = document.querySelectorAll('.sound-button');
    // console.log(buttonSound);

    let isPlaying = false;
    let currentButtonGlobal;
    let timeouts = [];

    function animateButton(btn) {
        for (i = 1; i < 4; i++) {
            (function(i) {
                timeouts.push(setTimeout(function() {
                    console.log('value is ', i);
                    btn.setAttribute('src', `images/sound-on${i}.png`);
                }, `${i}00`));
            })(i);
        }
        if (isPlaying) {
            // timeouts.push(setTimeout(animateButton, 300, currentButtonGlobal));
            // console.log(timeouts);
            setTimeout(animateButton, 400, currentButtonGlobal);
        } else {
            currentButtonGlobal.setAttribute('src', 'images/sound-off1.png');
            console.log(currentButtonGlobal);
            // for (let i = 0; i < timeouts.length; i++) {
            //     clearTimeout(timeouts[i]);
            // }
            clearTimeout(animateButton);
            console.log('Clear Timeout' + timeouts);
        }
    }

    function playSound() {
        let id = this.getAttribute('id');

        // let allAudiosCreated = document.getElementsByTagName('audio');
        // console.log(allAudiosCreated);

        let currentAudio = new Audio(`sounds/${id}.mp3`);
        let currentButton = this;

        currentButtonGlobal = currentButton;

        if (!isPlaying) {
            isPlaying = true;
            currentAudio.play();

            animateButton(currentButtonGlobal);

            currentAudio.onended = () => {
                // currentButtonGlobal.setAttribute('src', 'images/sound-off1.png');

                isPlaying = false;
                console.log('End');
                console.log('isPlaying = ' + isPlaying);
            };
        }

        // console.log(new Audio(`sounds/${id}.mp3`));
    }

    buttonSound.forEach(btn => {
        btn.addEventListener('mouseover', function() {
            btn.setAttribute('src', 'images/sound-off2.png');
        })

        btn.addEventListener('mouseout', function() {
            btn.setAttribute('src', 'images/sound-off1.png');
        })

        // btn.addEventListener('click', function() {
        //     new Audio('sounds/Underline.mp3').play();
        // })

        btn.addEventListener('click', playSound);
    });

    /* Check task form - Проверка формы задания*/

    let tastForm = document.querySelectorAll('.tast_form');
    let taskQuestion = document.querySelectorAll('.task_question');
    let taskAnswer = document.querySelectorAll('.task_answer');
    let tastRadio = document.querySelectorAll('input[type="radio"]');
    // console.log(tastRadio);
    let tastButton = document.querySelectorAll('.tast_button');
    let tastButtonResults = document.querySelectorAll('.task-check-button-results');
    let tastButtonTip = document.querySelectorAll('.task-check-button-tip');

    /*
    function checkTaskForm() {
    	let currentTaskForm = this;
    	let currenttaskQuestion = currentTaskForm.querySelectorAll('.task_question');
    	let currentTastRadio = currenttaskQuestion.querySelectorAll('input[type="radio"]');
    	console.log(currenttaskQuestion);
    	
    	let radioValue = currentTastRadio.getAttribute("value");
    	
    	/*
    	for (question = 0; question > currenttaskQuestion.length; question++) {
    		if (currentTastRadio.checked !== 0) {}
    	}
    	*/

    /*
    let question;
    let value1;
    let value2;
    let choice;
		
    for (question = 1; question <= 3; question++) {
    	var q = document.forms['quiz'].elements['q'+question];
    	
    	for (var i = 0; i < q.length; i++) {
    		if (q[i].checked) {
    			choice = q[i].value;
    		}
    	}
    	
    	if (choice == "value1") {
    		value1++;
    	}
    	
    	if (choice == "value2") {
    		value2++;
    	}
    }
    */
    /*}
	
    checkTaskForm();
    */

    /* Online support button - Кнопка онлайн-чата поддержки */

    let buttonSupportOpen = document.getElementById('online-support-openbutton');
    let buttonSupportClose = document.getElementById('online-support-closebutton');
    let formOnlineSupport = document.getElementById('online-support-form');

    buttonSupportOpen.addEventListener('click', function() {
        buttonSupportOpen.style.display = 'none';
        formOnlineSupport.style.display = 'block';
    });

    buttonSupportClose.addEventListener('click', function() {
        buttonSupportOpen.style.display = 'block';
        formOnlineSupport.style.display = 'none';
    });

    /* Online support form - Форма онлайн-чата поддержки */

    function sendMessage() {
        console.log(this);
    }

    /* Registration form - Форма регистрации*/

    $("#regForm").submit(function(e) {
        e.preventDefault();

        let regFormData = getRegformData();
        let backendLink = "https://httpbin.org/post";
        let request = new XMLHttpRequest();

        request.open("POST", backendLink);
        request.setRequestHeader("Accept", "application/json");
        request.setRequestHeader("Content-Type", "application/json");
        request.onload = () => console.log(request.responseText);
        request.send(regFormData);
    });

    // function onChange() {
    //     let password = document.querySelector("input[name='password1']");
    //     let confirm = document.querySelector("input[name='password2']");
    //     if (confirm.value === password.value) {
    //         confirm.setCustomValidity('');
    //     } else {
    //         confirm.setCustomValidity('Пароли не совпадают.');
    //     }
    // }

    function getRegformData() {
        let data = {};
        data.name = $("input[name='name']")[0].value;
        data.surname = $("input[name='surname']")[0].value;
        data.email = $("input[name='e-mail']")[0].value;
        data.tel = $("input[name='tel']")[0].value;
        data.password1 = $("input[name='password1']")[0].value;
        data.password2 = $("input[name='password2']")[0].value;
        data.day = $("select[name='day']")[0].value;
        data.month = $("select[name='month']")[0].value;
        data.year = $("select[name='year']")[0].value;
        data.country = $("select[name='country']")[0].options[$("select[name='country']")[0].selectedIndex].innerHTML;
        data.city = $("input[name='city']")[0].value;
        console.log(data);
        let json = JSON.stringify(data);
        console.log(json);
        return json;
    }

    /* Login form - Форма входа */

    $("#loginForm").submit(function(e) {
        e.preventDefault();

        let loginFormData = getLoginformData();
        let backendLink = "https://httpbin.org/post";
        let request = new XMLHttpRequest();

        request.open("POST", backendLink);
        request.setRequestHeader("Accept", "application/json");
        request.setRequestHeader("Content-Type", "application/json");
        request.onload = () => console.log(request.responseText);
        request.send(loginFormData);
    });

    function getLoginformData() {
        let data = {};
        data.email = $("input[name='e-mail']")[0].value;
        data.password1 = $("input[name='password1']")[0].value;
        console.log(data);
        let json = JSON.stringify(data);
        console.log(json);
        return json;
    }

    /*  Quiz task - опросное задание */

    $(document).ready(function() {

        var $progressValue = 0;
        var resultList1 = [];
        var resultList2 = [];

        /** Random shuffle questions **/
        function shuffleArray(question) {
            var shuffled = question.sort(function() {
                return .5 - Math.random();
            });
            return shuffled;
        }

        function shuffle(a) {
            for (var i = a.length; i; i--) {
                var j = Math.floor(Math.random() * i);
                var _ref = [a[j], a[i - 1]];
                a[i - 1] = _ref[0];
                a[j] = _ref[1];
            }
        }

        /*** Return shuffled question ***/
        function generateQuestions(quizdata) {
            var questions = shuffleArray(quizdata);
            return questions;
        }

        /*** Return list of options ***/
        function returnOptionList(opts, i, id) {

            var optionHtml = `<li class="quizLi myoptions${id}">` +
                `<input class="quizInput${id}" value="${opts}" name="optRdBtn${id}" type="radio" id="${id}rd_${i}">` +
                `<label class="quizLabel" for="${id}rd_${i}">${opts}</label>` +
                '<div class="bullet">' +
                '<div class="line zero"></div>' +
                '<div class="line one"></div>' +
                '<div class="line two"></div>' +
                '<div class="line three"></div>' +
                '<div class="line four"></div>' +
                '<div class="line five"></div>' +
                '<div class="line six"></div>' +
                '<div class="line seven"></div>' +
                '</div>' +
                '</li>';

            return optionHtml;
        }

        /** Render Options **/
        function renderOptions(optionList, id) {
            var ulContainer = $('<ul class="quizUl">').attr('id', `optionList${id}`);
            for (var i = 0, len = optionList.length; i < len; i++) {
                var optionContainer = returnOptionList(optionList[i], i, id)
                ulContainer.append(optionContainer);
            }
            $(`#answerOptions${id}`).html('').append(ulContainer);

            let allButtonSound = document.querySelectorAll('.sound-button');
            allButtonSound.forEach(btn => {
                btn.addEventListener('mouseover', function() {
                    btn.setAttribute('src', 'images/sound-off2.png');
                })

                btn.addEventListener('mouseout', function() {
                    btn.setAttribute('src', 'images/sound-off1.png');
                })

                btn.addEventListener('click', playSound);
            });
        }

        /** Render question **/
        function renderQuestion(question, id) {
            $(`#question${id}`).html("<h1>" + question + "</h1>");
        }

        /** Render quiz :: Question and option **/
        function renderQuiz(questions, index, id) {
            var currentQuest = questions[index];
            renderQuestion(currentQuest.question, id);
            renderOptions(currentQuest.options, id);
            console.log("Question");
            console.log(questions[index]);
        }

        /** Return correct answer of a question ***/
        function getCorrectAnswer(questions, index) {
            return questions[index].answer;
        }

        /** pushanswers in array **/
        function correctAnswerArray(resultByCat) {
            var arrayForChart = [];
            for (var i = 0; i < resultByCat.length; i++) {
                arrayForChart.push(resultByCat[i].correctanswer);
            }

            return arrayForChart;
        }
        /** Generate array for percentage calculation **/
        function genResultArray(results, wrong) {
            var resultByCat = resultByCategory(results);
            var arrayForChart = correctAnswerArray(resultByCat);
            arrayForChart.push(wrong);
            return arrayForChart
        }

        /** percentage Calculation **/
        function percentCalculation(array, total) {
            var percent = array.map(function(d, i) {
                return (100 * d / total).toFixed(2);
            });
            return percent;
        }

        /*** Get percentage for chart **/
        function getPercentage(resultByCat, wrong) {
            var totalNumber = resultList.length;
            var wrongAnwer = wrong;
            //var arrayForChart=genResultArray(resultByCat, wrong);
            //return percentCalculation(arrayForChart, totalNumber);
        }

        /** count right and wrong answer number **/
        function countAnswers(results) {

            var countCorrect = 0,
                countWrong = 0;

            for (var i = 0; i < results.length; i++) {
                if (results[i].iscorrect == true)
                    countCorrect++;
                else countWrong++;
            }

            return [countCorrect, countWrong];
        }

        /**** Categorize result *****/
        function resultByCategory(results) {

            var categoryCount = [];
            var ctArray = results.reduce(function(res, value) {
                if (!res[value.category]) {
                    res[value.category] = {
                        category: value.category,
                        correctanswer: 0
                    };
                    categoryCount.push(res[value.category])
                }
                var val = (value.iscorrect == true) ? 1 : 0;
                res[value.category].correctanswer += val;
                return res;
            }, {});

            categoryCount.sort(function(a, b) {
                return a.category - b.category;
            });

            return categoryCount;
        }


        /** Total score pie chart**/
        function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {

            $("#" + _cir_progress_id).find("._text_incor").html("Неверные: " + _incorrect);
            $("#" + _cir_progress_id).find("._text_cor").html("Верные: " + _correct);

            var unchnagedPer = _upto;

            _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

            var _progress = 0;

            var _cir_progress = $("#" + _cir_progress_id).find("._cir_P_y");
            var _text_percentage = $("#" + _cir_progress_id).find("._cir_Per");

            var _input_percentage;
            var _percentage;

            var _sleep = setInterval(_animateCircle, 25);

            function _animateCircle() {
                //2*pi*r == 753.6 +xxx=764
                _input_percentage = (_upto / 100) * 764;
                _percentage = (_progress / 100) * 764;

                _text_percentage.html(_progress + '%');

                if (_percentage >= _input_percentage) {
                    _text_percentage.html('<tspan x="50%" dy="0em">' + unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">верных ответов</tspan>');
                    clearInterval(_sleep);
                } else {

                    _progress++;

                    _cir_progress.attr("stroke-dasharray", _percentage + ',764');
                }
            }
        }

        function renderBriefChart(correct, total, incorrect) {
            var percent = (100 * correct / total);
            if (Math.round(percent) !== percent) {
                percent = percent.toFixed(2);
            }

            totalPieChart(percent, '_cir_progress', correct, incorrect)

        }
        /*** render chart for result **/
        function renderChart(data) {
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Verbal communication",
                        "Non-verbal communication",
                        "Written communication",
                        "Incorrect"
                    ],
                    datasets: [{

                        data: data,
                        backgroundColor: ['#e6ded4',
                            '#968089',
                            '#e3c3d4',
                            '#ab4e6b'
                        ],
                        borderColor: ['rgba(239, 239, 81, 1)',
                            '#8e3407',
                            'rgba((239, 239, 81, 1)',
                            '#000000'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    pieceLabel: {
                        render: 'percentage',
                        fontColor: 'black',
                        precision: 2
                    }
                }

            });
        }

        /** List question and your answer and correct answer  
    
        *****/
        function getAllAnswer(results) {
            var innerhtml = "";
            for (var i = 0; i < results.length; i++) {

                var _class = ((results[i].iscorrect) ? "item-correct" : "item-incorrect");
                var _classH = ((results[i].iscorrect) ? "h-correct" : "h-incorrect");


                var _html = '<div class="_resultboard ' + _class + '">' +
                    '<div class="_header">' + results[i].question + '</div>' +
                    '<div class="_yourans ' + _classH + '">' + results[i].clicked + '</div>';

                var html = "";
                if (!results[i].iscorrect)
                    html = '<div class="_correct">' + results[i].answer + '</div>';
                _html = (_html + html) + '</div>';
                innerhtml += _html;
            }

            $(".allAnswerBox").html('').append(innerhtml);

            let allButtonSound = document.querySelectorAll('.sound-button');
            allButtonSound.forEach(btn => {
                btn.addEventListener('mouseover', function() {
                    btn.setAttribute('src', 'images/sound-off2.png');
                })

                btn.addEventListener('mouseout', function() {
                    btn.setAttribute('src', 'images/sound-off1.png');
                })

                btn.addEventListener('click', playSound);
            });
        }
        /** render  Brief Result **/
        function renderResult(resultList) {

            var results = resultList;
            console.log(results);
            var countCorrect = countAnswers(results)[0],
                countWrong = countAnswers(results)[1];


            renderBriefChart(countCorrect, results.length, countWrong);
        }

        function renderChartResult() {
            var results = resultList;
            var countCorrect = countAnswers(results)[0],
                countWrong = countAnswers(results)[1];
            var dataForChart = genResultArray(results, countWrong);
            renderChart(dataForChart);
        }

        /** Insert progress bar in html **/
        function getProgressindicator(length) {
            var progressbarhtml = " ";
            for (var i = 0; i < length; i++) {
                progressbarhtml += '<div class="my-progress-indicator progress_' + (i + 1) + ' ' + ((i == 0) ? "active" : "") + '"></div>';
            }
            $(progressbarhtml).insertAfter(".my-progress-bar");
        }

        /*** change progress bar when next button is clicked ***/
        function changeProgressValue() {
            $progressValue += 9;
            if ($progressValue >= 100) {

            } else {
                if ($progressValue == 99) $progressValue = 100;
                $('.my-progress')
                    .find('.my-progress-indicator.active')
                    .next('.my-progress-indicator')
                    .addClass('active');
                $('progress').val($progressValue);
            }
            $('.js-my-progress-completion').html($('progress').val() + '% complete');

        }

        function addClickedAnswerToResult(questions, presentIndex, clicked, id) {
            var correct = getCorrectAnswer(questions, presentIndex);
            var result = {
                index: presentIndex,
                question: questions[presentIndex].question,
                clicked: clicked,
                iscorrect: (clicked == correct) ? true : false,
                answer: correct,
                category: questions[presentIndex].category
            };
            `resultList${id}.push(result);`

            console.log("result");
            console.log(result);
            console.log(`resultList${id}`);

        }

        /* ph1 Lesson 5 Quiz 1 */

        let fromQuizOpened51 = document.getElementById('start-quiz-5-1');
        let fromQuizClosed51 = document.getElementById('close-quiz-5-1');
        console.log(fromQuizOpened51);

        document.getElementById('quizBody-5-1').style.display = "none";

        fromQuizOpened51.onclick = (function() {

            fromQuizOpened51.style.display = "none";
            fromQuizClosed51.style.display = "block";
            document.getElementById('quizBody-5-1').style.display = "block";

            let presentIndex51 = 0;
            let clicked51 = 0;

            let quizdata51 = [{
                    question: "Как называется буква <span class='bold_blue'>Aa</span>?",
                    options: ["<img id='zb-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-1' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-18' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-5' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                    ],
                    answer: "<img id='zb-1' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                    category: 1
                },
                {
                    question: "Как называется буква <span class='bold_blue'>Bb</span>?",
                    options: ["<img id='zb-16' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zk-6' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-2' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-23' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                    ],
                    answer: "<img id='zb-2' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                    category: 2
                },
                {
                    question: "Как называется буква <span class='bold_blue'>Cc</span>?",
                    options: ["<img id='zb-20' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zk-36' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zk-29' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-3' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                    ],
                    answer: "<img id='zb-3' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                    category: 3
                },
                {
                    question: "Как называется буква <span class='bold_blue'>Dd</span>?",
                    options: ["<img id='zk-11' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-4' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-7' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-21' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                    ],
                    answer: "<img id='zb-4' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                    category: 1
                },
                {
                    question: "Как называется буква <span class='bold_blue'>Ee</span>?",
                    options: ["<img id='zb-5' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zk-14' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                        "<img id='zb-1' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                    ],
                    answer: "<img id='zb-5' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                    category: 2
                },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Ff</span>?",
                //     options: ["<img id='zb-6' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-21' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-22' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-43' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-6' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Gg</span>?",
                //     options: ["<img id='zb-10' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-23' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-7' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-13' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-7' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Hh</span>?",
                //     options: ["<img id='zk-24' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-32' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-14' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-8' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-8' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Ii</span>?",
                //     options: ["<img id='zb-26' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-5' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-27' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Jj</span>?",
                //     options: ["<img id='zk-13' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-7' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-28' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-10' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-10' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Kk</span>?",
                //     options: ["<img id='zb-17' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-11' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-29' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-51' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-11' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Ll</span>?",
                //     options: ["<img id='zb-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-12' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-27' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-30' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-12' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Mm</span>?",
                //     options: ["<img id='zb-13' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-45' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-31' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='me' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-13' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Nn</span>?",
                //     options: ["<img id='zb-14' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-24' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-8' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-32' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-14' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Oo</span>?",
                //     options: ["<img id='zb-15' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-10' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-21' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-15' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Pp</span>?",
                //     options: ["<img id='zb-19' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-16' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-35' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-34' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-16' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Qq</span>?",
                //     options: ["<img id='zk-51' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-17' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-22' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-45' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-17' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Rr</span> в британском варианте произношения?",
                //     options: ["<img id='zb-16' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-18' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-35' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-19' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-18' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Rr</span> в американском варианте произношения?",
                //     options: ["<img id='zk-35' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-18' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-19' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-16' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-19' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Ss</span>?",
                //     options: ["<img id='zk-36' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-28' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-3' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-20' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-20' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Tt</span>?",
                //     options: ["<img id='zb-4' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-38' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-21' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-6' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-21' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Uu</span>?",
                //     options: ["<img id='zb-5' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-22' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-41' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-50' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-22' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Vv</span>?",
                //     options: ["<img id='zb-23' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-43' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-45' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-44' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-23' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Ww</span>?",
                //     options: ["<img id='zk-45' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-22' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-23' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-24' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-24' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Xx</span>?",
                //     options: ["<img id='zk-24' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='iks' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-25' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-52' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-25' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Yy</span>?",
                //     options: ["<img id='zb-9' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-26' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-41' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-22' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-26' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 2
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Zz</span> в британском варианте произношения?",
                //     options: ["<img id='zb-27' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-46' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='the' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-28' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-27' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 3
                // },
                // {
                //     question: "Как называется буква <span class='bold_blue'>Zz</span> в американском варианте произношения?",
                //     options: ["<img id='zb-28' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='the' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zk-46' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //         "<img id='zb-27' class='sound-button' src='images/sound-off1.png' alt='Звук' />"
                //     ],
                //     answer: "<img id='zb-28' class='sound-button' src='images/sound-off1.png' alt='Звук' />",
                //     category: 1
                // }
            ];
            let questions51 = generateQuestions(quizdata51);
            renderQuiz(questions51, presentIndex51, "-5-1");
            getProgressindicator(questions51.length);

            $("#answerOptions-5-1").on('click', '.myoptions-5-1>input.quizInput-5-1', function(e) {
                clicked51 = $(this).val();

                if (questions51.length == (presentIndex51 + 1)) {
                    $("#submit-5-1").removeClass('hidden');
                    $("#next-5-1").addClass("hidden");
                } else {

                    $("#next-5-1").removeClass("hidden");
                }

            });



            $("#next-5-1").on('click', function(e) {
                e.preventDefault();
                addClickedAnswerToResult(questions51, presentIndex51, clicked51, 1);

                $(this).addClass("hidden");

                presentIndex51++;
                renderQuiz(questions51, presentIndex51, "-5-1");
                changeProgressValue();
            });

            $("#submit-5-1").on('click', function(e) {
                addClickedAnswerToResult(questions51, presentIndex51, clicked51, 1);
                $('#multipleChoiceQues-5-1').hide();
                $("#resultArea-5-1").show();
                renderResult(resultList1);

            });




            $("#resultArea-5-1").on('click', '.viewchart', function() {
                $(".resultPage2").show();
                $(".resultPage1").hide();
                $(".resultPage3").hide();
                renderChartResult();
            });

            $("#resultArea-5-1").on('click', '#backBtn-5-1', function() {
                $(".resultPage1").show();
                $(".resultPage2").hide();
                $(".resultPage3").hide();
                renderResult(resultList1);
            });

            $("#resultArea-5-1").on('click', '#viewanswer-5-1', function() {
                $(".resultPage3").show();
                $(".resultPage2").hide();
                $(".resultPage1").hide();
                getAllAnswer(resultList1);
            });

            $("#resultArea-5-1").on('click', '#replay-5-1', function() {
                window.location.reload(true);
            });

        });

        fromQuizClosed51.onclick = (function() {

            fromQuizOpened51.style.display = "block";
            fromQuizClosed51.style.display = "none";

            document.getElementById('quizBody-5-1').style.display = "none";
        });

        /* ph1 Lesson 5 Quiz 2 */

        let fromQuizOpened52 = document.getElementById('start-quiz-5-2');
        let fromQuizClosed52 = document.getElementById('close-quiz-5-2');

        document.getElementById('quizBody-5-2').style.display = "none";

        fromQuizOpened52.onclick = (function() {

            fromQuizOpened52.style.display = "none";
            fromQuizClosed52.style.display = "block";
            document.getElementById('quizBody-5-2').style.display = "block";

            let presentIndex52 = 0;
            let clicked52 = 0;

            let quizdata52 = [{
                    question: "Как пишется буква <img id='zb-1' class='sound-button' src='images/sound-off1.png' alt='Звук' />?",
                    options: ["Ii",
                        "Aa",
                        "eı",
                        "Ee"
                    ],
                    answer: "Aa",
                    category: 1
                },
                {
                    question: "Как пишется буква <img id='zb-2' class='sound-button' src='images/sound-off1.png' alt='Звук' />?",
                    options: ["Pp",
                        "bi:",
                        "Bb",
                        "Vv"
                    ],
                    answer: "Bb",
                    category: 2
                },
                {
                    question: "Как пишется буква <img id='zb-3' class='sound-button' src='images/sound-off1.png' alt='Звук' />?",
                    options: ["Ss",
                        "si:",
                        "ci:",
                        "Cc"
                    ],
                    answer: "Cc",
                    category: 3
                }
            ];
            let questions52 = generateQuestions(quizdata52);
            renderQuiz(questions52, presentIndex52, "-5-2");
            getProgressindicator(questions52.length);

            $("#answerOptions-5-2").on('click', '.myoptions-5-2>input.quizInput-5-2', function(e) {
                clicked52 = $(this).val();

                if (questions52.length == (presentIndex52 + 1)) {
                    $("#submit-5-2").removeClass('hidden');
                    $("#next-5-2").addClass("hidden");
                } else {

                    $("#next-5-2").removeClass("hidden");
                }

            });



            $("#next-5-2").on('click', function(e) {
                e.preventDefault();
                addClickedAnswerToResult(questions52, presentIndex52, clicked52, 2);

                $(this).addClass("hidden");

                presentIndex52++;
                renderQuiz(questions52, presentIndex52, "-5-2");
                changeProgressValue();
            });

            $("#submit-5-2").on('click', function(e) {
                addClickedAnswerToResult(questions52, presentIndex52, clicked52, 2);
                $('#multipleChoiceQues-5-2').hide();
                $("#resultArea-5-2").show();
                renderResult(resultList2);

            });




            $("#resultArea-5-2").on('click', '.viewchart', function() {
                $(".resultPage2").show();
                $(".resultPage1").hide();
                $(".resultPage3").hide();
                renderChartResult();
            });

            $("#resultArea-5-2").on('click', '#backBtn-5-2', function() {
                $(".resultPage1").show();
                $(".resultPage2").hide();
                $(".resultPage3").hide();
                renderResult(resultList2);
            });

            $("#resultArea-5-2").on('click', '#viewanswer-5-2', function() {
                $(".resultPage3").show();
                $(".resultPage2").hide();
                $(".resultPage1").hide();
                getAllAnswer(resultList2);
            });

            $("#resultArea-5-2").on('click', '#replay-5-2', function() {
                window.location.reload(true);
            });

        });

        fromQuizClosed52.onclick = (function() {

            fromQuizOpened52.style.display = "block";
            fromQuizClosed52.style.display = "none";

            document.getElementById('quizBody-5-2').style.display = "none";
        });

    });
});