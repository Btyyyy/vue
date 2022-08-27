<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登陆表单 -->
    <van-form @submit="onSubmit">
      <van-field
      v-model="user.mobile"
      name="手机号"
      placeholder="请舒服手机号">
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
        </van-field>

      <van-field
      v-model="user.code"
      name="验证码"
      placeholder="请舒服验证码">
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
         <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button>
        </template>
      </van-field>

       <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    async onSubmit () {
      // 获取表单数据
      const user = this.user
      // 表单验证
      // 提交表单登陆
      try {
        const res = await login(user)
        console.log('登陆成功', res)
      } catch (err) {
        console.log('登陆失败', err)
      }
      // 根据响应处理后续
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }

  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
