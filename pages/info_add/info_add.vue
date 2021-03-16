<template>
	<view class="wrap">
		<div class="head_nav" :class="{'active':isNav}">
			<div class="title" :style="{ paddingTop: statusHeight + 'rpx', lineHeight:titleHeight+'rpx' }">
				<van-icon name="arrow-left" size="20px" :color="iconColor" @click="getNavBack" />
				个人中心
			</div>
		</div>
		<div class="container">
			<div class="boxContent">
				<p class="title">为您提供可靠、便捷、有温度的医疗服务</p>
				<div class="panel">
					<div class="field">
						<p class="label">
							姓名
							<span>*</span>
						</p>
						<p class="inp">
							<input type="text" placeholder="请填写真实姓名">
						</p>
					</div>
					<div class="field">
						<p class="label">
							请填写真实姓名
							<span>*</span>
						</p>
						<p class="inp">
							<input type="text" placeholder="请填写18位数字">
						</p>
					</div>
					<div class="field">
						<p class="label">
							性别
							<span>*</span>
						</p>
						<p class="inp">
							<input type="text" placeholder="请选择">
							<i class="iconfont icon-youjiantou" style="color:#999999;"></i>
						</p>
					</div>
					<div class="field">
						<p class="label">
							联系方式
							<span>*</span>
						</p>
						<p class="inp">
							<input type="text" placeholder="请填写11位数字手机号码">
						</p>
					</div>
					<div class="field">
						<p class="label">
							验证码
							<span>*</span>
						</p>
						<p class="inp">
							<input type="text" placeholder=" ">
						</p>
					</div>
				</div>
				<div class="footer">
					<button class="btn">立即注册</button>
					<div class="row">
						<p class="radio" :class="{'active':isCheck}" @click="changeRadio"></p>
						<p class="label">我已阅读并同意：</p>
						<p class="name">
							《用户服务协议》、《用户隐私协议》
						</p>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusHeight:"",
				titleHeight:"",
				isCheck:false
			}
		},
		onLoad(){
			let systemInfo = uni.getSystemInfoSync();
			let pxToRpxScale = 750 / systemInfo.windowWidth; //px转换到rpx的比例
			let fontSize = systemInfo.fontSizeSetting * pxToRpxScale;// 用户设置的字体大小
			let statusHeight = systemInfo.statusBarHeight * pxToRpxScale; //状态栏的高度
			let titleHeight = 44 * pxToRpxScale; //导航栏高度，这个一般是固定的
			this.statusHeight = statusHeight;
			this.titleHeight = titleHeight;
		},
		methods: {
			changeRadio(){
				this.isCheck = !this.isCheck;
			},
			getNavBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
@import url('../../static/css/iconfont.css');
.wrap{
	min-height: 100vh;
	background: #f3f4f3;
	.head_nav.active{
		background: #fff;
		.title{
			color:black;
		}
	}
	.head_nav{
		width: 100%;
		// height: 300rpx;
		background-image: url(../../static/images/bg_1_top.png);
		background-size: 100% 100%;
		position: sticky;
		top: 0;
		z-index: 9999;
		.title{
			// height: 88rpx;
			// line-height: 88rpx;
			// padding-top: 88rpx;
			padding-left: 28rpx;
			color: white;
			font-weight: bold;
			display: flex;
			align-items: center;
		}
	}
	.container{
		width: 100%;
		height: 186rpx;
		background-image: url(../../static/images/bg.png);
		background-size: 100% 100%;
		position: relative;
		.boxContent{
			width: 100%;
			position: absolute;
			top: 0;
			z-index: 999;
			.title{
				font-size: 28rpx;
				color: #ffffff;
				margin: 0 30rpx;
			}
			.panel{
				// height: 500rpx;
				border-radius: 14rpx;
				box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
				background: #fff;
				margin: 17rpx 30rpx 40rpx 30rpx;
				padding: 19rpx 24rpx;
				.field:last-child{
					border: none;
				}
				.field{
					padding: 31rpx 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 2rpx solid #cccccc;
					.label{
						font-size: 35rpx;
						color: #333333;
						span{
							color: #ec6e41;
							margin-left: 10rpx;
						}
					}
					.inp{
						display: flex;
						align-items: center;
						.iconfont{
							font-size: 20rpx;
							margin-left: 21rpx;
						}
						input{
							flex: 1;
							text-align: right;
							font-size: 30rpx;
						}
					}
				}
			}
		}
		.footer{
			padding: 0 24rpx;
			.btn{
				border-radius: 11rpx;
				background: #6db781;
				border: none;
				color: #FFFFFF;
				font-size: 36rpx;
			}
			.row{
				margin-top: 35rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.radio{
					width: 23rpx;
					height: 23rpx;
					box-sizing: border-box;
					border: 2rpx solid #6db781;
					border-radius: 50%;
				}
				.radio.active{
					background: #6db781;
				}
				.label{
					font-size: 24rpx;
					color: #333333;
					margin-left: 18rpx;
				}
				.name{
					font-size: 24rpx;
					color: #6db781;
				}
			}
		}
	}
}
</style>
