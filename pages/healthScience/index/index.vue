<template>
	<view class="wrap">
		<div class="content">
			<div class="block_box">
				<div class="leftCont">
					<p class="title">经常醉酒？教你一招</p>
					<p class="desc">张浩医生 · 38355人看过</p>
				</div>
				<div class="rightImg">
					
				</div>
			</div>
			<div class="block_box">
				<div class="leftCont">
					<p class="title">为什么肝移植治疗效果优于其他治疗方案？</p>
					<p class="desc">协和心健康 · 55871人看过</p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.content{
	padding: 0 30rpx;
	.block_box{
		padding:49rpx 0;
		border-bottom:1rpx solid #f6f6f6;
		display:flex;
		justify-content:space-between;
		.leftCont{
			.title{
				font-size:36rpx;
				color:#333333;
				font-weight:bold;
			}
			.desc{
				font-size:28rpx;
				color:#cccccc;
				padding-top:35rpx;
			}
		}
		.rightImg{
			width: 150rpx;
			height: 150rpx;
			border-radius:10rpx;
			background:#ccc;
		}
	}
	.block_box:last-child{
		border:none;
	}
}
</style>
