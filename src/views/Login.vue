<template>
  <div class="login-view">
    <div class="login">
      <p class="title">User Repos &amp; Activity APP</p>

      <p class="github-login">
        <a
          :href="`https://github.com/login/oauth/authorize?scope=user&amp;client_id=${client_id}`"
        >
          <img src="@/assets/github.png" alt=""
        /></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      client_id: process.env.VUE_APP_CLIENT_ID,
    };
  },
};
</script>

<style scoped>
.login-view {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #2c3e50, #4ca1af); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 500px;
  height: 300px;
  display: flex;
  position: relative;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: rgba(232, 240, 255);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.title {
  position: absolute;
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
  margin-top: 10px;
  top: 0;
  text-transform: uppercase;
}

.github-login{
      width: 220px;
}
</style>
