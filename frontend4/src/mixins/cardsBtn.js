export default {
    name: 'App',
    mounted() {
        for (let i = 1;; i++) {
            let fromCardsOpened = document.getElementById(`start-cards-${i}`);
            let fromCardsClosed = document.getElementById(`close-cards-${i}`);
            // console.log(fromCardsOpened);

            fromCardsOpened.onclick = (function() {
                // console.log("It is OK");

                fromCardsOpened.style.display = "none";
                fromCardsClosed.style.display = "block";
                document.getElementById(`cards-${i}`).style.display = "block";
            });

            fromCardsClosed.onclick = (function() {
                fromCardsOpened.style.display = "block";
                fromCardsClosed.style.display = "none";
                document.getElementById(`cards-${i}`).style.display = "none";
            });
        }
    }
    // mounted() {

    //     // document.addEventListener('DOMContentLoaded', function() {
    //     /* Cards task 1 */

    //     let fromCardsOpened1 = document.getElementById('start-cards-1');
    //     let fromCardsClosed1 = document.getElementById('close-cards-1');
    //     // console.log(fromCardsOpened1);

    //     fromCardsOpened1.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened1.style.display = "none";
    //         fromCardsClosed1.style.display = "block";
    //         document.getElementById('cards-1').style.display = "block";
    //     });

    //     fromCardsClosed1.onclick = (function() {
    //         fromCardsOpened1.style.display = "block";
    //         fromCardsClosed1.style.display = "none";
    //         document.getElementById('cards-1').style.display = "none";
    //     });

    //     /* Cards task 2 */

    //     let fromCardsOpened2 = document.getElementById('start-cards-2');
    //     let fromCardsClosed2 = document.getElementById('close-cards-2');
    //     // console.log(fromCardsOpened52);

    //     fromCardsOpened2.onclick = (function() {
    //         fromCardsOpened2.style.display = "none";
    //         fromCardsClosed2.style.display = "block";
    //         document.getElementById('cards-2').style.display = "block";
    //     });

    //     fromCardsClosed2.onclick = (function() {
    //         fromCardsOpened2.style.display = "block";
    //         fromCardsClosed2.style.display = "none";
    //         document.getElementById('cards-2').style.display = "none";
    //     });

    //     /* Cards task 3 */

    //     let fromCardsOpened3 = document.getElementById('start-cards-3');
    //     let fromCardsClosed3 = document.getElementById('close-cards-3');
    //     // console.log(fromCardsOpened3);

    //     fromCardsOpened3.onclick = (function() {
    //         fromCardsOpened3.style.display = "none";
    //         fromCardsClosed3.style.display = "block";
    //         document.getElementById('cards-3').style.display = "block";
    //     });

    //     fromCardsClosed3.onclick = (function() {
    //         fromCardsOpened3.style.display = "block";
    //         fromCardsClosed3.style.display = "none";
    //         document.getElementById('cards-3').style.display = "none";
    //     });

    //     /* Cards task 4 */

    //     let fromCardsOpened4 = document.getElementById('start-cards-4');
    //     let fromCardsClosed4 = document.getElementById('close-cards-4');
    //     // console.log(fromCardsOpened4);

    //     fromCardsOpened4.onclick = (function() {
    //         fromCardsOpened4.style.display = "none";
    //         fromCardsClosed4.style.display = "block";
    //         document.getElementById('cards-4').style.display = "block";
    //     });

    //     fromCardsClosed4.onclick = (function() {
    //         fromCardsOpened4.style.display = "block";
    //         fromCardsClosed4.style.display = "none";
    //         document.getElementById('cards-4').style.display = "none";
    //     });

    //     /* Cards task 5 */

    //     let fromCardsOpened5 = document.getElementById('start-cards-5');
    //     let fromCardsClosed5 = document.getElementById('close-cards-5');
    //     // console.log(fromCardsOpened5);

    //     fromCardsOpened5.onclick = (function() {
    //         fromCardsOpened5.style.display = "none";
    //         fromCardsClosed5.style.display = "block";
    //         document.getElementById('cards-5').style.display = "block";
    //     });

    //     fromCardsClosed5.onclick = (function() {
    //         fromCardsOpened5.style.display = "block";
    //         fromCardsClosed5.style.display = "none";
    //         document.getElementById('cards-5').style.display = "none";
    //     });

    //     /* Cards task 6 */

    //     let fromCardsOpened6 = document.getElementById('start-cards-6');
    //     let fromCardsClosed6 = document.getElementById('close-cards-6');
    //     // console.log(fromCardsOpened6);

    //     fromCardsOpened6.onclick = (function() {
    //         fromCardsOpened6.style.display = "none";
    //         fromCardsClosed6.style.display = "block";
    //         document.getElementById('cards-6').style.display = "block";
    //     });

    //     fromCardsClosed6.onclick = (function() {
    //         fromCardsOpened6.style.display = "block";
    //         fromCardsClosed6.style.display = "none";
    //         document.getElementById('cards-6').style.display = "none";
    //     });

    //     /* Cards task 7 */

    //     let fromCardsOpened7 = document.getElementById('start-cards-7');
    //     let fromCardsClosed7 = document.getElementById('close-cards-7');
    //     // console.log(fromCardsOpened7);

    //     fromCardsOpened7.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened7.style.display = "none";
    //         fromCardsClosed7.style.display = "block";
    //         document.getElementById('cards-7').style.display = "block";
    //     });

    //     fromCardsClosed7.onclick = (function() {
    //         fromCardsOpened7.style.display = "block";
    //         fromCardsClosed7.style.display = "none";
    //         document.getElementById('cards-7').style.display = "none";
    //     });

    //     /* Cards task 8 */

    //     let fromCardsOpened8 = document.getElementById('start-cards-8');
    //     let fromCardsClosed8 = document.getElementById('close-cards-8');
    //     // console.log(fromCardsOpened8);

    //     fromCardsOpened8.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened8.style.display = "none";
    //         fromCardsClosed8.style.display = "block";
    //         document.getElementById('cards-8').style.display = "block";
    //     });

    //     fromCardsClosed8.onclick = (function() {
    //         fromCardsOpened8.style.display = "block";
    //         fromCardsClosed8.style.display = "none";
    //         document.getElementById('cards-8').style.display = "none";
    //     });

    //     /* Cards task 9 */

    //     let fromCardsOpened9 = document.getElementById('start-cards-9');
    //     let fromCardsClosed9 = document.getElementById('close-cards-9');
    //     // console.log(fromCardsOpened1);

    //     fromCardsOpened9.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened9.style.display = "none";
    //         fromCardsClosed9.style.display = "block";
    //         document.getElementById('cards-9').style.display = "block";
    //     });

    //     fromCardsClosed9.onclick = (function() {
    //         fromCardsOpened9.style.display = "block";
    //         fromCardsClosed9.style.display = "none";
    //         document.getElementById('cards-9').style.display = "none";
    //     });

    //     /* Cards task 10 */

    //     let fromCardsOpened10 = document.getElementById('start-cards-10');
    //     let fromCardsClosed10 = document.getElementById('close-cards-10');
    //     // console.log(fromCardsOpened10);

    //     fromCardsOpened10.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened10.style.display = "none";
    //         fromCardsClosed10.style.display = "block";
    //         document.getElementById('cards-10').style.display = "block";
    //     });

    //     fromCardsClosed10.onclick = (function() {
    //         fromCardsOpened10.style.display = "block";
    //         fromCardsClosed10.style.display = "none";
    //         document.getElementById('cards-10').style.display = "none";
    //     });

    //     /* Cards task 11 */

    //     let fromCardsOpened11 = document.getElementById('start-cards-11');
    //     let fromCardsClosed11 = document.getElementById('close-cards-11');
    //     // console.log(fromCardsOpened11);

    //     fromCardsOpened11.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened11.style.display = "none";
    //         fromCardsClosed11.style.display = "block";
    //         document.getElementById('cards-11').style.display = "block";
    //     });

    //     fromCardsClosed11.onclick = (function() {
    //         fromCardsOpened11.style.display = "block";
    //         fromCardsClosed11.style.display = "none";
    //         document.getElementById('cards-11').style.display = "none";
    //     });

    //     /* Cards task 12 */

    //     let fromCardsOpened12 = document.getElementById('start-cards-12');
    //     let fromCardsClosed12 = document.getElementById('close-cards-12');
    //     // console.log(fromCardsOpened12);

    //     fromCardsOpened12.onclick = (function() {
    //         // console.log("It is OK");

    //         fromCardsOpened12.style.display = "none";
    //         fromCardsClosed12.style.display = "block";
    //         document.getElementById('cards-12').style.display = "block";
    //     });

    //     fromCardsClosed12.onclick = (function() {
    //         fromCardsOpened12.style.display = "block";
    //         fromCardsClosed12.style.display = "none";
    //         document.getElementById('cards-12').style.display = "none";
    //     });
    //     // });
    // }
}