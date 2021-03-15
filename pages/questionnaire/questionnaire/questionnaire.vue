<template>
	<view class="wrap">
		<div class="header">
			<van-search
			  :value="value"
			  shape="round"
			  background="#ffffff"
			  placeholder="请输入搜索关键词"
			  :use-action-slot="true"
			>
				<view class="btn" @click="getAdd" slot="action">
					创建
				</view>
			</van-search>
		</div>
		<div class="container">
			<div class="content">
				<div class="box">
					<div class="l_box">
						<p class="name">心血管健康调查</p>
						<div class="tag">
							<p class="round"></p>
							<p class="status">已发布</p>
						</div>
					</div>
					<div class="r_box">
						<p class="total">115225</p>
						<p class="desc">答卷数量</p>
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
				value:""
			}
		},
		methods: {
			// 创建
			getAdd(){
				const url = '../add/add';
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		.header{
			padding: 20rpx 28rpx;
			.btn{
				width: 100rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				border-radius: 30rpx;
				background: #6db781;
				margin-left: 29rpx;
				font-size: 28rpx;
				color:#ffffff;
			}
		}
		.container{
			min-height: 90vh;
			padding: 25rpx 28rpx;
			background: #f3f4f3;
			.content{
				.box{
					display: flex;
					justify-content: space-between;
					padding: 50rpx 28rpx;
					background: #FFFFFF;
					margin-top: 25rpx;
					border-radius: 14rpx;
					box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
					.l_box{
						flex: 1;
						border-right: 2rpx solid #f5f5f5;
						.name{
							font-size: 36rpx;
							color:black;
						}
						.tag{
							display: flex;
							align-items: center;
							padding-top: 38rpx;
							.round{
								width: 12rpx;
								height: 12rpx;
								background: #999999;
								border-radius: 50%;
							}
							.status{
								font-size: 28rpx;
								color:#999999;
								margin-left: 10rpx;
							}
						}
					}
					.r_box{
						padding-left: 15rpx;
						text-align: center;
						.total{
							font-size: 36rpx;
							color: #6db781;
							font-weight: bold;
						}
						.desc{
							font-size: 24rpx;
							color: #b5b5b5;
							padding-top: 21rpx;
						}
					}
					
				}
			}
		}
	}
</style>
