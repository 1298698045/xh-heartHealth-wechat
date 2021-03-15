<template>
	<view class="wrap">
		<div class="container">
			<div class="panel">
				<p class="label">添加基础题型</p>
				<div class="grid_wrap">
					<div class="grid_item" @click="handleItem('')">
						<div class="row">
							<p class="icon">
								
							</p>
							<p class="name">单选题</p>
						</div>
					</div>
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								
							</p>
							<p class="name">多选题</p>
						</div>
					</div>
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								
							</p>
							<p class="name">填空题</p>
						</div>
					</div>
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								
							</p>
							<p class="name">图片上传</p>
						</div>
					</div>
				</div>
			</div>
			<div class="panel">
				<p class="label">添加题目模版</p>
				<div class="grid_wrap">
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								
							</p>
							<p class="name">单选题</p>
						</div>
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
				
			}
		},
		methods: {
			handleItem(){
				uni.navigateTo({
					url:'../fill_in/fill_in'
				})
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		min-height: 100vh;
		background: #f3f4f4;
		.container{
			padding: 0 28rpx;
			.panel{
				.label{
					font-size: 24rpx;
					color: #ababab;
					padding: 17rpx 0;
				}
				.grid_wrap{
					background: #FFFFFF;
					display: flex;
					flex-wrap: wrap;
					border-radius: 13rpx;
					box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
					.grid_item{
						width: 25%;
						height: 184rpx;
						border-collapse: collapse;
						border-right: 1rpx solid #f5f5f5;
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						.row{
							.icon{
								width: 44rpx;
								height: 44rpx;
								background: #ccc;
								margin: 0 auto;
							}
							.name{
								font-size: 26rpx;
								color: #999999;
								padding-top: 21rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
