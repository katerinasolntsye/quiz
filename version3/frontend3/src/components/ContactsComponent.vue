<template>
<div class="main">
<main>
    <h1>Контакты</h1>
        <!-- <p>Есть вопросы? Напишите нам, и мы с радостью на них ответим.</p> -->
        <p v-if="sended">Сообщение отправлено.</p>
        <form name="contacts" action="#" method="post" v-else>
        <p>Есть вопросы или предложения? Напишите нам.</p>
            <div class="form">
                <textarea id="contacts_message" rows="5" cols="75" v-model="userMsg" placeholder="Сообщение" :class="{ errored: smgError }"></textarea>
            </div>
            <div class="form">
                <input id="contacts_email" type="email" name="e-mail" v-model="userEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }" />
            </div>
            <div>
                <p class="padding_none" v-if="smgError">{{smgError}}</p>
                <p class="padding_none" v-if="emailError">{{emailError}}</p>
            </div>
            <div class="form">
                <input id="contacts_submit" type="button" name="send" @click="sendMsg()" value="Отправить" />
                <!-- <label title="Прикрепить файл">
					<img class="contacts_file contacts_file_img" src="images/attach-file-15.png" alt="Прикрепить файл" width="20" />
					<input class="contacts_file" type="file" name="attach" hidden/>
				</label> -->
                <label id="attach-file" title="Прикрепить файл">
                    <input id="file" class="contacts_file" type="file" name="attach" @change="showFileName()" hidden />
                </label>
                <span id="file-name" class="contacts_file">{{fileName}}</span>
                <label id="delete-file" title="Удалить файл">
					<!-- <img src="images/delete-file-15.png" alt="Удалить файл" width="20" title="Удалить файл" /> -->
					<input type="button" name="delete" @click="deleteFile()" hidden />
				</label>
            </div>
        <p style="font-size: 78%; color: #808080">Нажимая, вы принимаете условия <router-link id="contacts_privacy" to="/privacy-policy">Политики конфиденциальности</router-link>.</p>
        </form>
        <p v-if="sendError">{{sendError}}</p>
</main>
</div>
</template>
  
<script>
  // import HeaderComponent1 from './HeaderComponent1.vue'
  
export default {
    components: {
      // HeaderComponent1
    },
    data() {
        return {
            userEmail: null,
            userMsg: null,
            emailError: null,
            smgError: null,
            fileName: null,
            sended: false,
            sendError: false,
        }
    },
    methods: {
        sendMsg() {
            if(!this.userMsg) {
                this.smgError = "Введите текст сообщения.";
            } else {
                this.smgError = null;
            }

            if(!this.userEmail) {
                this.emailError = "Введите e-mail.";
            } else if(!this.validEmail(this.userEmail)) {
                this.emailError = "Введите корректный e-mail.";
            } else {
                this.emailError = null;
            }

            if(!this.smgError && !this.emailError) {
                console.log("Sending is OK");
                console.log(this.userMsg);
                console.log(this.userEmail);

                fetch('https://httpbin.org/get')
                .then((response) => {
                    console.log(response);
                    // let result = response.json()

                    this.sended = true;
                })
                .catch((error) => {
                    this.sendError = error;
                })
            } else {
                console.log("Sending is not OK");
            }
        },
        validEmail: function (userEmail) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(userEmail);
        },
        showFileName() {
            let file = document.getElementById("file").files[0];
            document.getElementById("file-name").style.display = "inline";
            document.getElementById("delete-file").style.display = "inline-block";
            // this.fileName = file.value;
            this.fileName = file.name;

            // var files = e.target.files || e.dataTransfer.files;
            // if (!files.length) return;
            // this.createImage(files[0]);

            // console.log(this);
        },
        deleteFile() {
            // console.log(document.getElementById("file").value);
            // document.getElementById("file").reset();
            // if(this.fileName != null) {
            //     console.log(document.getElementById("file").value);
            //     document.getElementById("file").reset();
            // }
            // let deleteFile = document.getElementById("deleteFile");
            let file = document.getElementById("file");
            // file.value = "";
            document.getElementById("file").value = "";
            this.fileName = file.value;
            document.getElementById("file-name").style.display = "none";
            document.getElementById("delete-file").style.display = "none";
            // document.getElementById("file-name").style.display = "none";
            // document.getElementById("delete-file").style.display = "none";
        },
    },
    mounted() {
        document.title = "FullEng – Контакты";
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

.form {
    margin: 0;
    padding-bottom: 8px;
}

textarea#contacts_message {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    resize: none;
    width: 782px;
    /* height: 151px; */
    color: #262626;
    border: 0;
    border-radius: 7px;
    outline: 0;
    margin: 0;
    padding: 4px 8px;
}

::placeholder {
    color: #b2b2b2;
}

input#contacts_email {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    width: 782px;
    color: #262626;
    border: 0;
    border-radius: 7px;
    outline: 0;
    margin: 0;
    padding: 4px 8px;
}

/* img.contacts_file {
    box-sizing: content-box;
    border: 0;
    border-radius: 100px;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
}

img.contacts_file_img {
    margin: 0 0 -10px 0;
} */

#attach-file {
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/attach-file-15.png);
    background-position: center center;
    width: 20px;
    height: 20px;
    margin: 0 8px;
}

#attach-file:hover {
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/attach-file-50.png);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#delete-file {
    display: none;
    /* display: inline-block; */
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/delete-file-15.png);
    background-position: center center;
    width: 20px;
    height: 20px;
    margin: 0 8px;
}

#delete-file:hover {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/delete-file-50.png);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

span.contacts_file {
    font-family: Times New Roman, Times, serif;
    font-size: 78%;
    box-sizing: content-box;
    border: 0;
    border-radius: 7px;
    background-color: #ffffff;
    margin: 0;
    padding: 4px 8px;
}

#file-name {
    display: none;
}

textarea#contacts_message.errored,
input#contacts_email.errored {
    border: 1px solid #c80f2e;
}

input#contacts_submit {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 7px;
    background-color: #012269;
    color: #ffffff;
    transition: all .3s;
    margin: 6px 8px 0 0;
    padding: 4px 8px;
}

input#contacts_submit:hover {
    color: #b2b2b2;
}

#contacts_privacy:link {
    color: #b2b2b2;
}

#contacts_privacy:visited {
    color: #b2b2b2;
}

#contacts_privacy:hover {
    text-decoration: underline;
    color: #808080;
}
</style>