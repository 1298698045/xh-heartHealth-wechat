<template>
	<view class="wrap">
		<div class="container">
		<!-- 	<div class="panel">
				<p class="label">添加基础题型</p>
				<div class="grid_wrap">
					<div class="grid_item" @click="handleItem('')">
						<div class="row">
							<p class="icon">
								<i class="iconfont icon-danxuanti" style="color:#53565B;font-size: 20px;"></i>
							</p>
							<p class="name">单选题</p>
						</div>
					</div>
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								<i class="iconfont icon-duoxuanti" style="color:#53565B;font-size: 20px;"></i>
							</p>
							<p class="name">多选题</p>
						</div>
					</div>
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								<i class="iconfont icon-tiankongti" style="color:#53565B;font-size: 20px;"></i>
							</p>
							<p class="name">填空题</p>
						</div>
					</div>
					<div class="grid_item">
						<div class="row">
							<p class="icon">
								<i class="iconfont icon-tupianshangchuan" style="color:#53565B;font-size: 20px;"></i>
							</p>
							<p class="name">图片上传</p>
						</div>
					</div>
				</div>
			</div> -->
			<div class="panel" v-for="(item,index) in listData" :key="index">
				<p class="label">{{item.label}}</p>
				<div class="grid_wrap" @click="handleItem('')">
					<div class="grid_item" v-for="(v,idx) in item.list" :key="idx">
						<div class="row">
							<p class="icon">
								<i class="iconfont" :class="v.icon" style="color:#53565B;font-size: 24px;"></i>
							</p>
							<p class="name">{{v.name}}</p>
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
				listData:[
					{
						label:"添加基础题库",
						list:[
							{
								name:"单选题",
								icon:'icon-danxuanti'
							},
							{
								name:"多选题",
								icon:'icon-duoxuanti'
							},
							{
								name:"填空题",
								icon:'icon-tiankongti'
							},
							{
								name:"图片上传",
								icon:'icon-tupianshangchuan'
							}
						]
					},
					{
						label:"添加题目模版",
						list:[
							{
								name:"姓名",
								icon:'icon-xingming'
							},
							{
								name:"性别",
								icon:'icon-xingbie'
							},
							{
								name:"手机",
								icon:'icon-shouji'
							},
							{
								name:"日期",
								icon:'icon-riqi'
							},
							{
								name:"地区",
								icon:'icon-diqu'
							},
							{
								name:"地图",
								icon:'icon-ditu'
							}
						]
					}
				]
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
	@import url('../../../static/css/iconfont.css');
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
						border-right: 2rpx solid #f5f5f5;
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						border-bottom: 2rpx solid #f5f5f5;
						.row{
							.icon{
								text-align: center;
								// width: 44rpx;
								// height: 44rpx;
								// background: #ccc;
								// margin: 0 auto;
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
