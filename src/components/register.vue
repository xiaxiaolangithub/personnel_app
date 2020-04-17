<template>
    <div class="registerPage">
        <div>
            <x-header style="background:#000;">
                <span>登录</span>
                <x-icon slot="overwrite-left" type="ios-close-empty" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;" @click="$router.push({path: '/home'})"></x-icon>
            </x-header>
        </div>
        <div class="top">
            <div class="logo">
                <img src="@/assets/images/reg/jd.png" alt="">
            </div>
            <h3>京东账号</h3>
            <p>正品低价有保障，好物好货上京东</p>
        </div>
        <div class="inner">
            <group>
                <x-input placeholder="姓名" v-model="username" :min="2" :max="8" required should-toast-error class="username">
                    <i slot="label" class="iconfont icon-icon" style="font-size:20px;margin-right:5px;"></i>
                </x-input>
                <x-input :type="passType" placeholder="密码" v-model="password" :min="6" :max="16" show-clear required>
                    <i slot="label" class="iconfont icon-mima"  style="font-size:20px;margin-right:5px;"></i>
                    <i slot="right" v-show="password.length" class="iconfont icon-zhaoshangxiaochengxu-mimabukejian" :class="passType === 'password' ? ' icon-zhaoshangxiaochengxu-mimabukejian' : 'icon-kejian'" style="font-size:20px;margin-right:5px;" @click="passType === 'password' ? passType = 'text' : passType = 'password';"></i>
                </x-input>
            </group>
            <Box  gap="40px  0">
                <x-button @click.native="validate('log')" class="login_btn">登录</x-button>
                <x-button @click.native="validate('reg')" class="reg_btn">注册账号</x-button>
            </Box>
        </div>
        <div class="bottom">遇到问题</div>
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
         * 用户名密码是否已输入
         */
        validate(info) {
            if(this.username.trim().length === 0 || this.password.trim().length === 0) {
                this.$vux.toast.text('用户名和密码不能为空！', 'top');
                return false;
            }
            info === 'log' ? this.loginHandle() : this.registerHandle();
        },
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
                this.$vux.toast.text('服务器出错啦！', 'top')
            })
        }
    }
};
</script>

<style scoped lang="less">
    .registerPage{
        background: #fff;
        left: 0;
        right: 0;
        position: absolute;
        bottom: 0;
        top:0;
        .top{
            .logo{
                display: flex;
                justify-content: center;
            }
            img{
                height:3rem;
            }
            h3{
                font-size: 0.5rem;
                display: flex;
                justify-content: center;
            }
            p{
                font-size: 0.35rem;
                display: flex;
                justify-content: center;
                color:#726f6f;
            }
        }
        .inner{
            padding:1rem;
            // 用 /deep/可以来修改vux组件的样式
            /deep/ .weui-cells{
                background-color: transparent;
                
            }
            /deep/ .weui-input{
                font-size: 0.45rem;
            }
        }
        .bottom{
            position: absolute;
            bottom: 0.3rem;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            font-size: 0.35rem;
            color:#2d8cf0;
        }

        /deep/  .vux-header {
            display: flex;
            align-items: center;
            justify-content:center;
            height: 1rem ;
            .vux-header-title{
                span{
                    font-size: 0.4rem;
                }
            }
        }
        /deep/ .weui-btn {
            height: 1rem;
        }
        .login_btn,.reg_btn{
            font-size: 0.4rem;
            background-color: rgba(45, 140, 240, 0.6);
            color:#fff;
            border-radius: 0.4rem;
            font-weight: bold;
            margin-bottom:0.4rem;
        }
        .reg_btn{
            color:#2d8cf0;
            background: #eee;
        }
        /deep/.vux-input-icon.weui-icon-warn:before, .vux-input-icon.weui-icon-success:before{
            font-size: 0.48rem;
        }
        /deep/ .weui-icon-clear{
            font-size: 0.45rem;
        }
        /deep/ .weui-cells:before{
            border-top:none;
        }
    }

</style>
