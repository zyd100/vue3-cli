<template>
  <el-form :model="form" ref="form" class="login-ruleForm">
    <el-form-item prop="name">
      <el-input placeholder="手机号" v-model="form.name">
        <template #prefix>
          <icon-user theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="form-code">
        <el-input placeholder="短信验证码" v-model="form.name">
          <template #prefix>
            <icon-user theme="outline" size="16" fill="#999" />
          </template>
        </el-input>
        <el-button type="primary" class="code-btn">获取验证码</el-button>
      </div>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password">
        <template #prefix>
          <icon-lock theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="确认密码" type="password" v-model="form.password">
        <template #prefix>
          <icon-lock theme="outline" size="16" fill="#999" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="login-check">
        <el-checkbox v-model="checkedPwd">我同意xxx隐私政策</el-checkbox>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-btn" round>注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        form: {
          name: '',
          password: '',
        },
        checkedPwd: false,
      });
      return {
        ...toRefs(state),
      };
    },
  };
</script>

<style lang="scss" scoped>
  .login-ruleForm {
    margin-top: 1rem;
    :deep(.el-input__prefix) {
      top: 2px;
      padding: 0 4px;
    }
    .login-methods {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .login-btn {
      width: 100%;
      margin-bottom: 1rem;
    }
    .login-check {
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
    .form-code {
      display: flex;
      align-content: center;
      justify-content: space-between;
      .code-btn {
        margin-left: 1rem;
      }
    }
  }
</style>
