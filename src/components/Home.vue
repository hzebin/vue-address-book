<template>
  <div>
    <h1>通讯录</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="userInfo.name" placeholder="请输入姓名"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="userInfo.gender" placeholder="请输入性别"></el-input>
      </el-col>
      <el-col :span="6">
        <el-date-picker
                v-model="userInfo.birthday"
                type="date"
                placeholder="选择出生日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-input v-model="userInfo.phoneNum" placeholder="请输入手机号码"></el-input>
      </el-col>
    </el-row>

    <el-button type="primary" class="addBtn" @click="addUser">添加</el-button>

    <el-table
            :data="tableData"
            style="width: 100%">
      <!--index可以设置序号-->
      <el-table-column
              type="index"
              label="序号"
              width="180">
      </el-table-column>
      <!--<el-table-column-->
              <!--label="序号"-->
              <!--width="180">-->
        <!--序号-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.$index + 1}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="gender"
              label="性别">
      </el-table-column>
      <el-table-column
              prop="birthday"
              label="出生日期">
      </el-table-column>
      <el-table-column
              prop="phoneNum"
              label="手机号码">
      </el-table-column>
      <el-table-column
              label="操作">
        <template slot-scope="scope">  <!--scope可以用来获取哪一行-->
          <el-button type="primary" icon="el-icon-edit" circle @click="editUserBtn(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="delUserBtn(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--编辑user弹窗-->
    <el-dialog
            title="编辑该用户的信息"
            :visible.sync="editUserInfoDialogVisible"
            width="30%"
            :before-close="handleClose">
      <span>
        <el-form ref="form" :model="editUserInfoObj" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="editUserInfoObj.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="editUserInfoObj.gender"></el-input>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker
              v-model="editUserInfoObj.birthday"
              type="date"
              placeholder="选择出生日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="editUserInfoObj.phoneNum"></el-input>
          </el-form-item>

        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserInfoDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfoSumbitBtn">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      //添加user信息
      addUser() {
        //合法性校验
        if (!this.userInfo.name) {
          this.$message({
            message: '姓名不能为空',
            type: 'warning'
          });
          return;
        }
        if (!this.userInfo.gender) {
          this.$message({
            message: '性别不能为空',
            type: 'warning'
          });
          return;
        }
        if (!this.userInfo.birthday) {
          this.$message({
            message: '出生日期不能为空',
            type: 'warning'
          });
          return;
        }
        //正则表达式校验手机号码
        if (!/^1[3-9]\d{9}$/.test(this.userInfo.phoneNum)) {
          this.$message({
            message: '手机号码不合法',
            type: 'warning'
          });
          return;
        }
        //往表格增加数据
        this.tableData.push(this.userInfo);
        //添加完成，清空数据
        this.userInfo = {
          name: '',
          gender: '',
          phoneNum: '',
          birthday: ''
        };
      },
      //删除user信息
      delUserBtn(index) {
        console.log(index);
        //原生vue删除
        this.tableData.splice(index, 1);
      },
      editUserBtn(index, userInfo) {
        console.log(userInfo);
        this.editUserInfoIndex = index;
        this.editUserInfoObj = userInfo;
        this.editUserInfoDialogVisible = true;
      },
      handleClose() {
        this.editUserInfoDialogVisible = false
      },
      editUserInfoSumbitBtn() {
        this.tableData.splice(this.editUserInfoIndex, 1, this.editUserInfoObj);
        this.editUserInfoDialogVisible = false
      }
    },
    data() {
      return {
        userInfo: {
          name: '',
          gender: '',
          phoneNum: '',
          birthday: ''
        },
        tableData: [{
          name: '王小虎',
          gender: '男',
          birthday: '2016-05-02',
          phoneNum: '13131313131'
        }],
        editUserInfoDialogVisible: false,
        editUserInfoIndex: '',
        editUserInfoObj: {
          name: '',
          gender: '',
          phoneNum: '',
          birthday: ''
        }
      }
    }
  }
</script>

<style scoped>
  .addBtn {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>