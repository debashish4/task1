<template>
  <div class="data-list">
    <div class="card" :key="index" v-for="(repo, index) in data">
      <div class="avatar">
        <img :src="repo.avatar_url" alt="" />
      </div>
      <div class="content">
        <p>
          <span><strong>Name:</strong></span>
          <span>{{ repo.repoName }}</span>
        </p>

        <p>
          <span><strong>Allow Forking:</strong></span>
          <span>{{ repo.allow_forking }}</span>
        </p>
     
        <p>
          <span><strong>GIT URL:</strong></span>
          <span>{{ repo.git_url }}</span>
        </p>
        <p>
          <span><strong>Open Issues:</strong></span>
          <span>{{ repo.open_issues }}</span>
        </p>
        <p>
          <span><strong>Language:</strong></span>
          <span>{{ repo.language }}</span>
        </p>
        <p>
          <span><strong>Watchers:</strong></span>
          <span>{{ repo.watchers }}</span>
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