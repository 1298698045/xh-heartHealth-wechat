<template>
	<view class="wrap">
		<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="appLoginWx">授权登陆</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			
		},
		methods: {
			appLoginWx(){
				uni.getProvider({
					service:"oauth",
					success:res=>{
						if(~res.provider.indexOf('weixin')){
							uni.login({
								provider: 'weixin',
								success: loginRes=> {
									console.log(JSON.stringify(loginRes));
									uni.getUserInfo({
									  provider: 'weixin',
									  success: infoRes=>{
										console.log('用户昵称为：' + infoRes.userInfo.nickName);
										uni.redirectTo({
											url:'../../index/index'
										})
									  },
									  fail: () => {
										  uni.showToast({title:"微信登录授权失败",icon:"none"});
									  }
									});
								},
								fail: () => {
									uni.showToast({title:"微信登录授权失败",icon:"none"});
								}
							});
						}else{
                            uni.showToast({
                                title: '请先安装微信或升级版本',
                                icon:"none"
                            });
                        }
					}
				})
			},
			// 校验是否授权
			getSettins(){
				uni.getSetting({
					 success(res) {
						console.log("授权：",res);
					   if (!res.authSetting['scope.userInfo']) {
							//这里调用授权
							console.log("当前未授权");
					   } else {
							//用户已经授权过了
							console.log("当前已授权");
					   }
					 }
				})
			}
		}
	}
</script>

<style>

</style>
