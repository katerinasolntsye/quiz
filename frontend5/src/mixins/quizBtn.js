export default {
    name: 'App',
    mounted() {
        for (let i = 1;; i++) {
            let fromQuizOpened = document.getElementById(`start-quiz-${i}`);
            let fromQuizClosed = document.getElementById(`close-quiz-${i}`);
            // console.log(fromQuizOpened);

            fromQuizOpened.onclick = (function() {
                // console.log("It is OK");

                fromQuizOpened.style.display = "none";
                fromQuizClosed.style.display = "block";
                document.getElementById(`quiz-${i}`).style.display = "block";
            });

            fromQuizClosed.onclick = (function() {
                fromQuizOpened.style.display = "block";
                fromQuizClosed.style.display = "none";
                document.getElementById(`quiz-${i}`).style.display = "none";
            });
        }
    }
    // mounted() {

    //     // document.addEventListener('DOMContentLoaded', function() {
    //     /* Quiz task 1 */

    //     let fromQuizOpened1 = document.getElementById('start-quiz-1');
    //     let fromQuizClosed1 = document.getElementById('close-quiz-1');
    //     // console.log(fromQuizOpened1);

    //     fromQuizOpened1.onclick = (function() {
    //         // console.log("It is OK");

    //         fromQuizOpened1.style.display = "none";
    //         fromQuizClosed1.style.display = "block";
    //         document.getElementById('quiz-1').style.display = "block";
    //     });

    //     fromQuizClosed1.onclick = (function() {
    //         fromQuizOpened1.style.display = "block";
    //         fromQuizClosed1.style.display = "none";
    //         document.getElementById('quiz-1').style.display = "none";
    //     });

    //     /* Quiz task 2 */

    //     let fromQuizOpened2 = document.getElementById('start-quiz-2');
    //     let fromQuizClosed2 = document.getElementById('close-quiz-2');
    //     // console.log(fromQuizOpened52);

    //     fromQuizOpened2.onclick = (function() {
    //         fromQuizOpened2.style.display = "none";
    //         fromQuizClosed2.style.display = "block";
    //         document.getElementById('quiz-2').style.display = "block";
    //     });

    //     fromQuizClosed2.onclick = (function() {
    //         fromQuizOpened2.style.display = "block";
    //         fromQuizClosed2.style.display = "none";
    //         document.getElementById('quiz-2').style.display = "none";
    //     });

    //     /* Quiz task 3 */

    //     let fromQuizOpened3 = document.getElementById('start-quiz-3');
    //     let fromQuizClosed3 = document.getElementById('close-quiz-3');
    //     // console.log(fromQuizOpened3);

    //     fromQuizOpened3.onclick = (function() {
    //         fromQuizOpened3.style.display = "none";
    //         fromQuizClosed3.style.display = "block";
    //         document.getElementById('quiz-3').style.display = "block";
    //     });

    //     fromQuizClosed3.onclick = (function() {
    //         fromQuizOpened3.style.display = "block";
    //         fromQuizClosed3.style.display = "none";
    //         document.getElementById('quiz-3').style.display = "none";
    //     });

    //     /* Quiz task 4 */

    //     let fromQuizOpened4 = document.getElementById('start-quiz-4');
    //     let fromQuizClosed4 = document.getElementById('close-quiz-4');
    //     // console.log(fromQuizOpened4);

    //     fromQuizOpened4.onclick = (function() {
    //         fromQuizOpened4.style.display = "none";
    //         fromQuizClosed4.style.display = "block";
    //         document.getElementById('quiz-4').style.display = "block";
    //     });

    //     fromQuizClosed4.onclick = (function() {
    //         fromQuizOpened4.style.display = "block";
    //         fromQuizClosed4.style.display = "none";
    //         document.getElementById('quiz-4').style.display = "none";
    //     });

    //     /* Quiz task 5 */

    //     let fromQuizOpened5 = document.getElementById('start-quiz-5');
    //     let fromQuizClosed5 = document.getElementById('close-quiz-5');
    //     // console.log(fromQuizOpened5);

    //     fromQuizOpened5.onclick = (function() {
    //         fromQuizOpened5.style.display = "none";
    //         fromQuizClosed5.style.display = "block";
    //         document.getElementById('quiz-5').style.display = "block";
    //     });

    //     fromQuizClosed5.onclick = (function() {
    //         fromQuizOpened5.style.display = "block";
    //         fromQuizClosed5.style.display = "none";
    //         document.getElementById('quiz-5').style.display = "none";
    //     });

    //     /* Quiz task 6 */

    //     let fromQuizOpened6 = document.getElementById('start-quiz-6');
    //     let fromQuizClosed6 = document.getElementById('close-quiz-6');
    //     // console.log(fromQuizOpened6);

    //     fromQuizOpened6.onclick = (function() {
    //         fromQuizOpened6.style.display = "none";
    //         fromQuizClosed6.style.display = "block";
    //         document.getElementById('quiz-6').style.display = "block";
    //     });

    //     fromQuizClosed6.onclick = (function() {
    //         fromQuizOpened6.style.display = "block";
    //         fromQuizClosed6.style.display = "none";
    //         document.getElementById('quiz-6').style.display = "none";
    //     });
    //     // });
    // }
}