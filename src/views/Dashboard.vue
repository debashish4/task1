<template>
  <div class="dashboard">
    <h1>Github Repo and acitivity list</h1>
    <input-box @text="fetchData"></input-box>
    <p class="err">{{ errMsg }}</p>
    <div class="list">
      <h2 class="table-title">{{ tableTitle }}</h2>
      <repo-list v-if="dataCategory === 'repo'" :data="repoData"></repo-list>
      <activity-list
        v-else-if="dataCategory === 'activity'"
        :data="activityData"
      ></activity-list>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import InputBox from "@/components/InputBox";
import RepoList from "@/components/RepoList";
import ActivityList from "@/components/ActivityList";
import {
  getAccessToken,
  gitHubUserRepos,
  gitHubUserActivities,
} from "@/network/api.js";
export default {
  name: "Dashboard",
  data() {
    return {
      repoData: [],
      activityData: [],
      dataCategory: "",
      errMsg: "",
      tableTitle: "",
    };
  },
  mounted() {
    let code = this.$route["query"]["code"];
    this.saveClientCode(code);
    getAccessToken(this.client_id, this.client_secret, this.client_code).then(
      (res) => {
        this.saveAccessToken(res.data);
      }
    );
  },

  methods: {
    ...mapActions(["saveClientCode", "saveAccessToken"]),
    fetchRepoData(data) {
      this.repoData =  [];
      gitHubUserRepos(this.access_token, data)
        .then((res) => {
          this.errMsg = "";
          const repoData = res.data.map((repo) => {
            return {
              repoName: repo.name,
              allow_forking: repo.allow_forking,
              git_url: repo.git_url,
              avatar_url: repo.owner.avatar_url,
              language: repo.language,
              open_issues: repo.open_issues,
              watchers: repo.watchers,
            };
          });
          if (repoData.length) {
            this.repoData = [...repoData];
          } else {
            this.errMsg =
              "No Data Found! Please try with different github username";
          }
        })
        .catch((err) => {
          this.tableTitle = "";
          this.errMsg = err;
        });
    },

    fetchActivityData(data) {
      this.activityData = [];
      gitHubUserActivities(this.access_token, data)
        .then((res) => {
          this.errMsg = "";
          const activityData = res.data.map((activity) => {
            return {
              name: activity.repo.name,
              login: activity.actor.login,
              url: activity.actor.url,
              avatar_url: activity.actor.avatar_url,
              type: activity.type,
              public: activity.public,
            };
          });

          if (activityData.length) {
            this.activityData = [...activityData];
          } else {
            this.tableTitle = "";
            this.errMsg =
              "No Data Found! Please try with different github username";
          }
        })
        .catch((err) => {
          this.errMsg = err;
        });
    },
    fetchData(data) {
      this.dataCategory = data.category;
      this.tableTitle = "";
      if (data.category === "repo") {
        this.tableTitle = `${data.text}'s Repository list`;
        this.fetchRepoData(data.text);
      } else {
        this.tableTitle = `${data.text}'s Activity list`;
        this.fetchActivityData(data.text);
      }
    },
  },
  computed: {
    ...mapState(["client_id", "client_secret", "client_code", "access_token"]),
  },
  components: {
    InputBox,
    RepoList,
    ActivityList,
  },
};
</script>

<style scoped>
.dashboard {
  background: url("../assets/webb.png");
}
h1 {
  margin: 30px;
}
.table-title {
  text-transform: capitalize;
}
.list {
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 250px);
  overflow-y: scroll;
}
.err {
  color: rgb(240, 90, 90);
}
</style>
