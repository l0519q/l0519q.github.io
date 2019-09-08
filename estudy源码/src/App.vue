<template>
  <a-layout id="app">
    <a-layout-header class="header flexrow">
      <h2>蝉壳 eStudy</h2>
      <div class="right flexrow" v-if="loggedIn"> 
        <div class="flexrow" v-if="isTeacher">
          <h4>{{ info.name }}</h4>
          <a-button class="vcenter" icon="file-add" type="primary" @click="showAssignment = true">新建作业</a-button>
        </div>
        <div class="flexrow" v-else>
          <h4 class="flexcol">
            <span>{{ info.full_name }}</span>
            <span>学号：{{ info.name }}</span>
          </h4>
          <h5 class="flexcol">
            <span v-for="(org, index) in student.orgs" :key="`${org}_${index}`">{{ org }}</span>
          </h5>
          <div>
            <span class="label">{{ student.stats.uncommitted }}个作业待提交</span>
            <span class="label">{{ student.stats.revising }}个作业待批改</span>
            <span class="label">{{ student.stats.improvable }}个作业需完善</span>
            <span class="label">{{ student.stats.finished }}个作业已完成</span>
          </div>         
        </div>
        <a class="vcenter" href="http://vipgit.chanke.xyz" target="_blank">
          <a-button icon="home">代码仓库</a-button>
        </a>
        <a-button class="vcenter" icon="logout" @click="$store.dispatch('user/logout')">退出</a-button>
      </div>
    </a-layout-header>
    <a-layout-content>
      <Authorization v-if="!loggedIn"></Authorization>
      <div v-else>
        <Teacher v-if="isTeacher" :teacher="teacher"></Teacher>
        <Student v-else :student="student"></Student>
      </div>
      <a-modal v-model="showAssignment" :footer="null">
            <form>
              <a-form-item label="课程">
                <a-select name="org_id" v-model="createAssignmentForm.org_id">
                  <a-select-option :key="`org_${index}`" v-for="(org,index) in teacher.orgs" :value="org.id">{{ org.full_name }}</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="作业名称">
                <a-input v-model="createAssignmentForm.name" name="name"></a-input>
              </a-form-item>
              <a-form-item label="开始/结束时间">               
                <a-range-picker v-model="createAssignmentForm.time_range"></a-range-picker>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" @click="createAssignment">提交</a-button>
              </a-form-item>
            </form>
          </a-modal>
    </a-layout-content>
  </a-layout>
</template>

<script>
  import {mapState} from "vuex"
  import {api} from "./utils/api"
  import Authorization from "./components/Authorization"
  import Teacher from "./components/Teacher"
  import Student from "./components/Student"
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
  import moment from 'moment';
  import 'moment/locale/zh-cn';
  moment.locale("zh-cn");
  export default {
    name: "app",
    data() {
      return {
        student: {
          orgs: [],
          stats: [],
          assignments: []
        },
        teacher: {
          orgs: [],
          assignments: []
        },
        createAssignmentForm: {
          org_id: "",
          name: "",
          time_range: [moment(),moment()]
        },
        showAssignment: false
      }
    },
    computed: { 
      ...mapState("user", ["info", "loggedIn"]),
      isTeacher() {
        return this.info.is_admin > 0;
      }
    },
    created() {
      if (this.loggedIn) {
        this.loadDetails();
      }
    },
    watch: {
      loggedIn(val) {
        if (val) {
          this.loadDetails();
        }
      }
    },
    components: {
      Authorization,
      Teacher,
      Student
    },
    methods: {
      loadDetails() {
        if (this.isTeacher) {
          api.get("/teacher/detail").then(data => {
            this.teacher.orgs = data.orgs;
            this.teacher.assignments = data.assignments;
          })
        } else {
          api.get("/student/detail").then(data => {
            console.log(data);
            this.student.orgs = data.orgs;
            this.student.stats = data.stats;
            this.student.assignments = data.assignments;
          })
        }
      },
      createAssignment(){
        const newForm = {
          org_id: this.createAssignmentForm.org_id,
          name: this.createAssignmentForm.name,
          start_time: this.createAssignmentForm.time_range[0].format("YYYY-MM-DD"),
          end_time: this.createAssignmentForm.time_range[1].format("YYYY-MM-DD")
        }
        api.post("/teacher/createAssignment", newForm).then(data => {
          this.teacher.assignments.unshift(data);      
        }).finally(() => {
          this.showAssignment = false;
        })       
      }
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
  .header {
    color: white;
    font-size: 1.1em;
    h2, h4, h5 {
      color: white;
    }
    .right > .flexrow > * {
      margin-right: 25px;
    }
    .label {
      padding: 0 5px;
    }
  }
  .flexrow {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .right {
    margin-left: auto;
  }
  .flexcol {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    height: 100%;
    span {
      flex: 1;
      max-height: 20px;
      line-height: 20px;
    }
  }
  .vcenter {
    align-self: center;
  }
</style>
