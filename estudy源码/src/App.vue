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
        <a href="http://vipgit.chanke.xyz/" target="_blank">
          <a-button icon="home">代码仓库</a-button>
        </a>
        <a-button class="vcenter" icon="logout" @click="$store.dispatch('user/logout')">退出</a-button>
      </div>
    </a-layout-header>

    <a-layout-content>
      <Authorization v-if="!loggedIn"></Authorization>
      <div v-else>
        <Teacher v-if="isTeacher" :teacher="teacher">老师页面</Teacher>
        <Student v-else :student="student">学生页面</Student>
      </div>

      <a-modal v-model="showAssignment" :footer="null">
        <a-form>
          <a-form-item label="课程" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <a-select v-model="createAssignmentForm.org_id">
              <a-select-option v-for="(org, index) in teacher.orgs" :key="`${org}_${index}`" :value="org.id">
                {{ org.full_name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="作业名称" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <a-input v-model="createAssignmentForm.name"></a-input>
          </a-form-item>
          <a-form-item label="开始/结束时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">  
            <a-locale-provider :locale="zh_CN">             
              <a-range-picker v-model="createAssignmentForm.time_range"></a-range-picker> 
            </a-locale-provider>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 18, offset: 6 }">
            <a-button type="primary" @click="saveAssignment">保存</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Authorization from './components/Authorization'
import Teacher from './components/Teacher'
import Student from './components/Student'
import {mapState} from 'vuex'
import {api} from './utils/api'
// 引入 ant design 本地化
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale("zh-cn");

export default {
  components: {
    Authorization,
    Teacher,
    Student
  },
  data() {
    return {
      zh_CN,
      showAssignment: false,
      student: {
        orgs: [],
        assignments: [],
        stats: {}
      },
      teacher: {
        orgs: [],
        assignments: []
      },
      createAssignmentForm: {
        org_id: '',
        name: '',
        time_range: [moment(), moment()]
      }
    }
  },
  created() {
    if (this.loggedIn) {
      this.loadDetails();
    }
  },
  computed: {
    ...mapState('user', ['info', 'loggedIn']),
    isTeacher() {
      return this.info.is_admin > 0;
    }
  },
  watch: {
    loggedIn(val) {
      if (val) {
        this.loadDetails();
      }
    }
  },
  methods: {
    loadDetails() {
      if (this.isTeacher) {
        api.get('/teacher/detail').then(data => {
          this.teacher.orgs = data.orgs;
          this.teacher.assignments = data.assignments;
        })
      } else {
        api.get('/student/detail').then(data => {
          this.student.orgs = data.orgs;
          this.student.assignments = data.assignments;
          this.student.stats = data.stats;
        })
      }
    },
    saveAssignment() {
      const form = {
        org_id: this.createAssignmentForm.org_id,
        name: this.createAssignmentForm.name,
        start_time: this.createAssignmentForm.time_range[0].format('YYYY-MM-DD'),
        end_time: this.createAssignmentForm.time_range[1].format('YYYY-MM-DD')
      };
      api.post('/teacher/createAssignment', form).then(data => {
        this.teacher.assignments.unshift(data);
      }).finally(() => {
        this.showAssignment = false;
      });
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }
  .header {
    color: #fff;
    font-size: 1.1em;
    h2, h4, h5 {
      margin-bottom: 0;
      color: #fff;
    }
    .right > .flexrow > *,
    .right > a {
      margin-right: 25px;
    }
    .label {
      padding: 0 5px;
    }
  }
  .flexrow {
    display: flex;
  }
  .right {
    margin-left: auto;
  }
  .flexcol {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
