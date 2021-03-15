<template>
	<view class="wrap">
		<div class="container">
			<div class="leftMsg">
				请详细描述患者的病情（具体症状、患病时长、用药情况等）。
			</div>
			<div class="rightMsg">
				一个月
			</div>
			<div class="leftMsg">
				请详细描述患者的病情（具体症状、患病时长、用药情况等）。
			</div>
		</div>
		<div class="footer"  catchtouchmove="true">
			<div class="box">
				<dix class="tagList">
					<p class="label">快速选择：</p>
					<p class="tag" :class="{'active':idx==index}" v-for="(item,index) in tagList" :key="index" @click="handCheck(item,index)">{{item}}</p>
				</dix>
				<div class="message" :class="{'active':isModelmes}">
					<div class="inp">
						<input type="text" placeholder="请详细描述您的病情（5-150字）">
					</div>
					<div class="add_icon">
						<tui-icon name="plus" color="#6db781"></tui-icon>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import tuiIcon from '@/components/thorui/thorui/tui-icon/tui-icon';
	export default {
		components:{
			tuiIcon
		},
		computed:{
			isModelmes(){
				return wx.getStorageSync('isModelmes');
			}
		},
		data() {
			return {
				idx:1,
				tagList:[
					'感冒不舒服','感冒不舒服','感冒不舒服','感冒不舒服','感冒不舒服'
				],
				keyboardHeight:''
			}
		},
		onLoad(){
			wx.onKeyboardHeightChange(res => { //监听键盘高度变化
				this.keyboardHeight = res.height;
			})
		},
		methods: {
			handCheck(item,index){
				this.idx = index;
			}
		}
	}
</script>

<style lang="scss">
.wrap{
	min-height: 100vh;
	padding-top: 1rpx;
	background: #f3f4f4;
	.container{
		padding: 0 31rpx;
		.leftMsg{
			display: inline-block;
			max-width: 648rpx;
			background: #FFFFFF;
			margin-top: 36rpx;
			border-radius: 28rpx;
			padding: 25rpx;
			box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
			font-size: 32rpx;
			border-top-left-radius: 0;
		}
		.rightMsg{
			display: inline-block;
			max-width: 648rpx;
			background: #6db781;
			margin-top: 36rpx;
			border-radius: 28rpx;
			padding: 25rpx;
			float:right;
			color: #fff;
			font-size: 32rpx;
			box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
			border-top-right-radius: 0;
		}
	}
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0;
		.box{
			.tagList{
				padding: 0 31rpx;
				display: flex;
				flex-wrap: wrap;
				.label{
					font-size: 28rpx;
					color: #aaaaaa;
				}
				.tag{
					display: inline-block;
					width: 188rpx;
					height: 54rpx;
					line-height: 54rpx;
					text-align: center;
					border: 1rpx solid #cccccc;
					font-size: 28rpx;
					color: #444444;
					border-radius: 27rpx;
					margin: 0 14rpx 14rpx 0;
					box-sizing: border-box;
				}
				.tag.active{
					color: #fff;
					background: #6db781;
					border: none;
				}
			}
			.message{
				background: #fff;
				padding: 27rpx 41rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.inp{
					flex: 1;
					input{
						width: 100%;
					}
				}
			}
			.message.active{
				padding-bottom: 50rpx;
			}
		}
	}
	
}
</style>
