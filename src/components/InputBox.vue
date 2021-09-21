<template>
  <div class="input-component">
    <div>
      <input class="input-text" v-model="text" placeholder="Enter github Username eg:microsoft, reactjs, vuejs" />
      <button :disabled="!text" @click="$emit('text', {text,category})">Fetch</button>
    </div>
    <div class="options">
      <div class="option repo">
        <input id="repo" type="radio" v-model="category" value="repo" />
        <label for="repo">Repo</label>
      </div>
      <div class="option activity">
        <input id="activity" type="radio" v-model="category" value="activity" />
        <label for="activity">Activity</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return {
      text: "",
      category: "repo"
    };
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.input-text {
  width: 300px;
  border: 1px solid rgb(128, 128, 128);
  height: 40px;
  padding: 10px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.input-text:active,
.input-text:focus,
.input-text:focus-visible {
  outline: none;
}

button {
  height: 40px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid rgb(128, 128, 128);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.options {
  display: flex;
  justify-content: center;
  margin: 20px 0
}
.option {
  padding:0 10px
}
</style>
