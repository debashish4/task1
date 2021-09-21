<template>
  <div class="data-list">
    <div class="card" :key="index" v-for="(activity, index) in data">
      <div class="avatar">
        <img :src="activity.avatar_url" alt="" />
      </div>
      <div class="content">
        <p>
          <span><strong>
            
            Repo Name:</strong></span>
          <span>{{ activity.name }}</span>
        </p>

        <p>
          <span><strong>Login Name:</strong></span>
          <span>{{ activity.login }}</span>
        </p>
     
        <p>
          <span><strong>GIT URL:</strong></span>
          <span>{{ activity.url }}</span>
        </p>
        <p>
          <span><strong>Type:</strong></span>
          <span>{{ activity.type }}</span>
        </p>
        <p>
          <span><strong>Public:</strong></span>
          <span>{{ activity.public }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataList",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    };
  },
  props: ["data"],
};
</script>

<style scoped>
.data-list {
  text-align: initial;
}
.card {
  margin: 10px;
  width: 374px;
  height: 200px;
  float: left;
  display: flex;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
}
.avatar {
  display: flex;
  align-items: center;
  padding: 5px;
  width: 35%;
  height: 100%;
  background: #ccc;
}
.content {
  display: inline-block;
  padding: 5px;
  width: 65%;
  height: 100%;
  line-height: 1.5;
}
</style>