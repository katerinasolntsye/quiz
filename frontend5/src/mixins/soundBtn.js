export default {
    // data() {
    //     return {
    //         // hover: false,
    //         html: '<img id="zb-1" class="sound-btn" src="/images/sound-off1.svg"  alt="Звук">'
    //     }
    // },
    name: 'App',

    //   created () {
    //    window.playFunc = this.playFunc.bind(this);
    // },
    // methods: {
    //   playFunc(a) {
    //     var audio = new Audio(require(`./assets/zb-${a}.mp3`))
    //     audio.play()
    //   }
    // },
    mounted() {

        let buttonSound = document.querySelectorAll('.sound-btn');
        // console.log(buttonSound);
        let buttonSoundCards = document.querySelectorAll('.sound-btn-cards');
        // console.log(buttonSoundCards);


        let isPlaying = false;
        let currentButtonGlobal;
        let timeouts = [];

        function animateButton(btn) {
            for (let i = 1; i < 4; i++) {
                (function(i) {
                    timeouts.push(setTimeout(function() {
                        // console.log('value is ', i);
                        btn.setAttribute('src', `/images/sound-on${i}.svg`);
                    }, `${i}00`));
                })(i);
            }
            if (isPlaying) {
                // timeouts.push(setTimeout(animateButton, 300, currentButtonGlobal));
                // console.log(timeouts);
                setTimeout(animateButton, 400, currentButtonGlobal);
            } else {
                currentButtonGlobal.setAttribute('src', '/images/sound-off1.svg');
                // console.log(currentButtonGlobal);
                // for (let i = 0; i < timeouts.length; i++) {
                //     clearTimeout(timeouts[i]);
                // }
                clearTimeout(animateButton);
                // console.log('Clear Timeout' + timeouts);
            }
        }

        // function playSound(e) {
        //     e.stopPropagation();
        //     let id = this.getAttribute('id');

        //     // let allAudiosCreated = document.getElementsByTagName('audio');
        //     // console.log(allAudiosCreated);

        //     let currentAudio = new Audio(`sounds/${id}.mp3`);
        //     let currentButton = this;

        //     currentButtonGlobal = currentButton;

        //     if (!isPlaying) {
        //         isPlaying = true;
        //         currentAudio.play();

        //         animateButton(currentButtonGlobal);

        //         currentAudio.onended = () => {
        //             // currentButtonGlobal.setAttribute('src', '/images/sound-off1.svg');

        //             isPlaying = false;
        //             console.log('End');
        //             console.log('isPlaying = ' + isPlaying);
        //         };
        //     }

        //     // console.log(new Audio(sounds/${id}.mp3));
        // }

        buttonSound.forEach(btn => {
            btn.style.width = '20px';
            btn.style.cursor = 'pointer';

            btn.addEventListener('mouseover', function() {
                btn.setAttribute('src', '/images/sound-off2.svg');
            })

            btn.addEventListener('mouseout', function() {
                btn.setAttribute('src', '/images/sound-off1.svg');
            })

            // btn.addEventListener('click', function() {
            //     new Audio('sounds/Underline.mp3').play();
            // })

            btn.addEventListener('click', function playSound(e) {
                e.preventDefault();
                e.stopPropagation();
                let id = this.getAttribute('id');

                // let allAudiosCreated = document.getElementsByTagName('audio');
                // console.log(allAudiosCreated);

                let currentAudio = new Audio(`/sounds/${id}.mp3`);
                let currentButton = this;

                currentButtonGlobal = currentButton;

                if (!isPlaying) {
                    isPlaying = true;
                    currentAudio.play();

                    animateButton(currentButtonGlobal);

                    currentAudio.onended = () => {
                        // currentButtonGlobal.setAttribute('src', '/images/sound-off1.svg');

                        isPlaying = false;
                        // console.log('End');
                        // console.log('isPlaying = ' + isPlaying);
                    };
                }

                // console.log(new Audio(sounds/${id}.mp3));
            });
            // btn.addEventListener('click', playSound);
        });

        buttonSoundCards.forEach(btn => {
            btn.style.width = '100px';
        });
    },
    updated() {

        let buttonSound = document.querySelectorAll('.sound-btn');
        // console.log(buttonSound);
        let buttonSoundCards = document.querySelectorAll('.sound-btn-cards');
        // console.log(buttonSoundCards);


        let isPlaying = false;
        let currentButtonGlobal;
        let timeouts = [];

        function animateButton(btn) {
            for (let i = 1; i < 4; i++) {
                (function(i) {
                    timeouts.push(setTimeout(function() {
                        // console.log('value is ', i);
                        btn.setAttribute('src', `/images/sound-on${i}.svg`);
                    }, `${i}00`));
                })(i);
            }
            if (isPlaying) {
                // timeouts.push(setTimeout(animateButton, 300, currentButtonGlobal));
                // console.log(timeouts);
                setTimeout(animateButton, 400, currentButtonGlobal);
            } else {
                currentButtonGlobal.setAttribute('src', '/images/sound-off1.svg');
                // console.log(currentButtonGlobal);
                // for (let i = 0; i < timeouts.length; i++) {
                //     clearTimeout(timeouts[i]);
                // }
                clearTimeout(animateButton);
                // console.log('Clear Timeout' + timeouts);
            }
        }

        // function playSound(e) {
        //     e.stopPropagation();
        //     let id = this.getAttribute('id');

        //     // let allAudiosCreated = document.getElementsByTagName('audio');
        //     // console.log(allAudiosCreated);

        //     let currentAudio = new Audio(`sounds/${id}.mp3`);
        //     let currentButton = this;

        //     currentButtonGlobal = currentButton;

        //     if (!isPlaying) {
        //         isPlaying = true;
        //         currentAudio.play();

        //         animateButton(currentButtonGlobal);

        //         currentAudio.onended = () => {
        //             // currentButtonGlobal.setAttribute('src', '/images/sound-off1.svg');

        //             isPlaying = false;
        //             console.log('End');
        //             console.log('isPlaying = ' + isPlaying);
        //         };
        //     }

        //     // console.log(new Audio(sounds/${id}.mp3));
        // }

        buttonSound.forEach(btn => {
            btn.style.width = '20px';
            btn.style.cursor = 'pointer';

            btn.addEventListener('mouseover', function() {
                btn.setAttribute('src', '/images/sound-off2.svg');
            })

            btn.addEventListener('mouseout', function() {
                btn.setAttribute('src', '/images/sound-off1.svg');
            })

            // btn.addEventListener('click', function() {
            //     new Audio('sounds/Underline.mp3').play();
            // })

            btn.addEventListener('click', function playSound(e) {
                e.preventDefault();
                e.stopPropagation();
                let id = this.getAttribute('id');

                // let allAudiosCreated = document.getElementsByTagName('audio');
                // console.log(allAudiosCreated);

                let currentAudio = new Audio(`/sounds/${id}.mp3`);
                let currentButton = this;

                currentButtonGlobal = currentButton;

                if (!isPlaying) {
                    isPlaying = true;
                    currentAudio.play();

                    animateButton(currentButtonGlobal);

                    currentAudio.onended = () => {
                        // currentButtonGlobal.setAttribute('src', '/images/sound-off1.svg');

                        isPlaying = false;
                        // console.log('End');
                        // console.log('isPlaying = ' + isPlaying);
                    };
                }

                // console.log(new Audio(sounds/${id}.mp3));
            });
            // btn.addEventListener('click', playSound);
        });

        buttonSoundCards.forEach(btn => {
            btn.style.width = '100px';
        });
    }
}