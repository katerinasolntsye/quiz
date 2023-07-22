export default {
    name: 'App',
    mounted() {
        for (let i = 1;; i++) {
            let fromWritingOpened = document.getElementById(`start-writing-${i}`);
            let fromWritingClosed = document.getElementById(`close-writing-${i}`);
            console.log(document.getElementById(`writing-${i}`));

            fromWritingOpened.onclick = (function() {
                // console.log("It is OK");

                fromWritingOpened.style.display = "none";
                fromWritingClosed.style.display = "block";
                document.getElementById(`writing-${i}`).style.display = "block";
            });

            fromWritingClosed.onclick = (function() {
                fromWritingOpened.style.display = "block";
                fromWritingClosed.style.display = "none";
                document.getElementById(`writing-${i}`).style.display = "none";
            });
        }
    }
}