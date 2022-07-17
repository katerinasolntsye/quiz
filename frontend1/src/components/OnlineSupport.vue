<template>
  <form id="online-support-button" name="attach" action="#" method="post">
		<div> 
			<label title="Онлайн-чат">
				<img src="images/support-on-icon.png" alt="Онлайн-чат" width="60" title="Онлайн-чат" />
				<input type="button" name="support" value="Онлайн-чат" hidden />
			</label>
		</div>
	</form>
</template>

<script>

</script>

<style scoped>
#online-support-openbutton {
    display: block;
    z-index: 999999998;
    position: fixed;
    right: 24px;
    bottom: 18px;
}

#online-support-closebutton {
    z-index: 999999998;
    position: fixed;
    right: 24px;
    bottom: 18px;
}

#online-support-form {
    display: none;
    z-index: 999999998;
    position: fixed;
    right: 24px;
    bottom: 90px;
    background-color: #ffffff;
    width: 375px;
    height: 447px;
    border: 1px solid #012169;
    border-radius: 7px;
}

#online-support-header {
    background-color: #012169;
    color: #ffffff;
    padding: 20px;
}

#online-support-main {
    padding: 20px;
}

#online-support-footer {
    background-color: #f0f0f0;
    width: 375px;
    height: 60px;
    position: absolute;
    bottom: 10px;
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
}
</style>