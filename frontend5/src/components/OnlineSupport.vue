<template>
    <div>
        <img id="online-support-openbutton" src="/images/support-on-icon.png" alt="Онлайн-чат" width="60" title="Онлайн-чат" />
	<form id="online-support-form" action="https://jkorpela.fi/cgi-bin/echo.cgi" method="POST">
        <div id="online-support-header">Чат поддержки</div>
        <div id="online-support-main">
            <p class="speaker-name">Поддержка FullEng</p>
            <div class="msg">
                <span>Сообщая свой e-mail, вы соглашаетесь на обработку персональных данных в соответствии с <router-link class="privacy-link" to="/privacy-policy">Политикой конфиденциальности</router-link>.</span>
            </div>
            <form class="msg email" v-if="!emailSent">
                <label for="">Введите e-mail, чтобы продолжить:
                    <input type="email" v-model="userEmail">
                </label>
                <p v-if="emailError">{{emailError}}</p>
                <button type="button" @click="sendEmail()">Отправить</button>
            </form>
        </div>
        <div id="online-support-footer">
            <label id="attach-file" title="Прикрепить файл">
                <input id="contacts_file" type="file" name="attach" @change="showFileName(); onFileChange()" hidden />
            </label>
            <textarea name="" id="" cols="30" placeholder="Введите сообщение" v-model="userMsg"></textarea>
            <label id="send-message" title="Отправить сообщение">
                <input type="button" name="send" value="Отправить" @click="sendMsg()" hidden :disabled="!emailSent" />
            </label>
        </div>
        <div id="input-file-text">
            <span>{{fileName}}</span>
            <label id="delete-file" title="Удалить файл">
				<!-- <img src="/images/delete-file-15.svg" alt="Удалить файл" width="20" title="Удалить файл" /> -->
				<input type="button" name="delete" @click="deleteFile()" hidden />
			</label>
        </div>
        <img id="online-support-closebutton" src="/images/support-off-icon.png" alt="Закрыть чат" width="60" title="Закрыть чат" />
	</form>
    </div>
</template>

<script>
export default {
    name: 'OnlineSupport',
    data() {
        return {
            fileName: null,
            userEmail: null,
            emailError: null,
            emailSent: false,
            userMsg: null,
            userFile: null,
        }
    },
    methods: {
        sendMsg() {
            console.log(12345);
        },
        sendEmail() {
            if(!this.userEmail) {
                this.emailError = "Введите e-mail.";
            } else if(!this.validEmail(this.userEmail)) {
                this.emailError = "Введите корректный e-mail.";
            } else {
                this.emailError = null;
                this.emailSent = true;
            }
        },
        showFileName() {
            let file = document.getElementById("contacts_file").files[0];
            document.getElementById("input-file-text").style.display = "flex";
            // document.getElementById("delete-file").style.display = "inline-block";
            console.log(document.getElementById("delete-file"));
            // this.fileName = file.value;
            // this.fileName = file.name;
            if (file.name.length < 46) {
                this.fileName = file.name;
            } else {
                this.fileName = file.name.slice(0, 43) + "...";                
            }
        },
        deleteFile() {
            let file = document.getElementById("contacts_file");
            file.value = "";
            this.fileName = file.value;
            document.getElementById("input-file-text").style.display = "none";
            // document.getElementById("delete-file").style.display = "none";
        },
        onFileChange(e) { 
            // собираем файл для отправки на сервер
            var files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                this.userFile = true;
            }
        },
        validEmail: function (userEmail) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(userEmail);
        },
    },
    mounted() {
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

    // function sendMessage() {
    //     console.log(this);
    // }
    }
}
</script>

<style scoped>
#online-support-openbutton {
    display: block;
    z-index: 900;
    position: fixed;
    right: 24px;
    bottom: 18px;
    /* transition: all .3s; */
}

#online-support-openbutton:hover {
    cursor: pointer;
    content: url(../assets/support-on-icon-70.png);
}

#online-support-closebutton {
    z-index: 915;
    position: fixed;
    right: 24px;
    bottom: 18px;
}

#online-support-closebutton:hover {
    cursor: pointer;
    content: url(../assets/support-off-icon-70.png);
}

#online-support-form {
    display: none;
    z-index: 915;
    position: fixed;
    right: 24px;
    bottom: 90px;
    background-color: #ffffff;
    width: 375px;
    height: 447px;
    border: 1px solid #012169;
    border-radius: 7px;
}

#online-support-form input {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    color: #262626;
    border-width: 0;
    border-radius: 7px;
    outline: 0;
    margin: 4px 8px 8px;
    padding: 4px 8px;
}

#online-support-header {
    background-color: #012169;
    color: #ffffff;
    padding: 20px;
}

.privacy-link {
    color: #808080;
}

.privacy-link:hover {
    color: #b2b2b2;
    cursor: pointer;
    text-decoration: underline;
}

.speaker-name {
    margin: 20px 20px 0px 20px;
    padding-bottom: 3px;
    font-size: 63%;
    color: #808080;
}

.msg {
    border-radius: 7px;
    margin: 0px 20px 20px 20px;
    background: #f7f7f7;
    font-size: 71%;
    padding: 4px 8px;
}

.email {
    margin: 20px;
    background: #f0f0f0;
    display: flow-root;
}

#online-support-form .email input {
    margin: 4px 0px 8px;
    width: 100%;
}

button {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 7px;
    background-color: #012269;
    color: #ffffff;
    transition: all .3s;
    margin-bottom: 0.33em;
    padding: 4px 8px;
    float: right;
}

button:hover {
    color: #b2b2b2;
}

#online-support-footer {
    background-color: #f0f0f0;
    width: 100%;
    height: 60px;
    position: absolute;
    /* bottom: 10px; */
    bottom: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#online-support-footer textarea {
    font-family: 'Times New Roman', Times, serif;
    font-size: 71%;
    box-sizing: border-box;
    background-color: #f0f0f0;
    resize: none;
    border-width: 0;
    outline: 0;
    padding: 0;
    height: 100%;
}

#attach-file {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/attach-file-15.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#attach-file:hover {
    /* display: block; */
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/attach-file-50.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#send-message {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/send-message-15.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#send-message:hover {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/send-message-50.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#input-file-text {
    display: none;
    font-size: 71%;
    position: absolute;
    bottom: 0px;
    padding: 0 8px;
    align-items: center;
}

#delete-file {
    /* display: none; */
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/delete-file-15.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    /* margin: 0 8px; */
    margin-left: 8px;
}

#delete-file:hover {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/delete-file-50.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>