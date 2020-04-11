<template>
    <div class="registerPage">
        <div class="inner">
            <group>
                <x-input placeholder="姓名" v-model="username" :min="2" :max="8" required should-toast-error>
                    <i slot="label" class="iconfont icon-icon" style="font-size:20px;margin-right:5px;"></i>
                </x-input>
                <x-input :type="passType" placeholder="密码" v-model="password" :min="6" :max="16" show-clear required>
                    <i slot="label" class="iconfont icon-mima"  style="font-size:20px;margin-right:5px;"></i>
                    <i slot="right" v-show="password.length" class="iconfont icon-zhaoshangxiaochengxu-mimabukejian" :class="passType === 'password' ? ' icon-zhaoshangxiaochengxu-mimabukejian' : 'icon-kejian'" style="font-size:20px;margin-right:5px;" @click="passType === 'password' ? passType = 'text' : passType = 'password';"></i>
                </x-input>
            </group>
            <Box  gap="40px  0">
                <x-button @click.native="loginHandle">登录</x-button>
                <x-button @click.native="registerHandle">注册</x-button>
            </Box>
        </div>
        <div class="bottom">
            © 2020 隐私政策 京ICP证080268号 京ICP备10005211号
        </div>
    </div>
</template>

<script>
import { XInput, XButton,Group,Box,CheckIcon   } from 'vux'
import { base64 } from 'vux'
export default {
    components: {
        XInput,
        XButton,
        Group,
        Box,
        CheckIcon  
    },
    data() {
        return {
            username: '',            // 用户名
            password:'',            // 密码
            passType: 'password',
            demo: false,
            
        
        };
    },
    created() {
        
    },
    methods: {
        /**
         * 注册操作
         */
        registerHandle() {
            this.$http.post('http://localhost:8082/register', {
                user: this.username.trim(),
                pass: base64.encode(this.password.trim())
            }).then(({data}) => {
                this.$vux.toast.text(data.msg, 'top')
            }).catch(err => {
                this.$vux.toast.text('服务器出错啦！', 'top')
            })
        },
        /**
         * 登录操作
         */
        loginHandle() {
            this.$http.post('http://localhost:8082/login', {
                user: this.username.trim(),
                pass: base64.encode(this.password.trim())
            }).then (({data}) => {
                if(data.ok) {
                    this.$vux.toast.text('登录成功.', 'top');
                    this.$router.push({path: '/home'})
                    return false;
                }
                this.$vux.toast.text(data.msg, 'top')
            }).catch(err => {
                this.$vux.toast.text('服务器出错啦！', 'middle')
            })
        }
    }
};
</script>

<style scoped>
    .registerPage{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top:0;
        background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
    }
    .registerPage .inner{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80vw;
    }
    .registerPage .weui-cells{
        background-color: transparent !important;
    }
    .registerPage .weui-input{
        color:#fff !important;
    }
    .bottom{
        position: absolute;
        bottom: 3vw;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        font-size: 12px;
    }

</style>
