<template>
	<view class="wrap">
		<div class="container">
			<div class="panel" :class="{'active':!isBook}">
				<div class="box"  @click="getIsCheck">
					<p class="name">心理测试</p>
					<p class="desc">
						{{'添加问卷说明'}}
					</p>
				</div>
				<div class="edit" v-if="isBook">
					<div class="row" @click="getEdit">
						<p class="icon">
							<i class="iconfont icon-bianji1" style="color:#999999;"></i>
							<!-- <van-icon name="edit" size="20px" color="#999999" /> -->
						</p>
						<p class="text">编辑</p>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="panel_box">
					<div class="top">
						<p class="label">
							<span class="require">*</span>
							1. 您的性别</p>
						<div class="cont">
							<div class="row">
								<p class="icon">
									<tui-icon name="circle" size="14" ></tui-icon>
								</p>
								<p class="val">男</p>
							</div>
							<div class="row">
								<p class="icon">
									<tui-icon name="circle" size="14" ></tui-icon>
								</p>
								<p class="val">女</p>
							</div>
						</div>
					</div>
				</div>
				<div class="panel_box">
					<div class="top">
						<p class="label">
							<span class="require">*</span>
							2. 您的症状包含哪些？
							<span class="tag">[多选题]</span>
						</p>
						<div class="cont">
							<div class="row">
								<p class="icon">
									<tui-icon name="square" size="14" ></tui-icon>
								</p>
								<p class="val">男</p>
							</div>
							<div class="row">
								<p class="icon">
									<tui-icon name="square" size="14" ></tui-icon>
								</p>
								<p class="val">女</p>
							</div>
						</div>
					</div>
				</div>
				<div class="panel_box">
					<div class="top">
						<p class="label">
							<span class="require">*</span>
							3. 请您描述一下病情
						</p>
						<div class="filed">
							<div class="inp"></div>
						</div>
					</div>
				</div>
				<div class="panel_box">
					<div class="top">
						<p class="label">
							<span class="require">*</span>
							4. 联系方式
						</p>
						<div class="filed">
							<div class="inp"></div>
						</div>
					</div>
					<div class="ActionSheet">
						<div class="box">
							<p class="icon">
								<!-- <tui-icon name="edit"></tui-icon> -->
								<i class="iconfont icon-bianji1" style="color:#ababab;"></i>
							</p>
							<p class="tag">编辑</p>
						</div>
						<div class="box">
							<p class="icon">
								<!-- <tui-icon name="edit"></tui-icon> -->
								<i class="iconfont icon-fuzhi1" style="color:#ababab;"></i>
							</p>
							<p class="tag">复制</p>
						</div>
						<div class="box">
							<p class="icon">
								<!-- <tui-icon name="edit"></tui-icon> -->
								<i class="iconfont icon-shangyi" style="color:#ababab;"></i>
							</p>
							<p class="tag">上移</p>
						</div>
						<div class="box">
							<p class="icon">
								<!-- <tui-icon name="edit"></tui-icon> -->
								<i class="iconfont icon-xiayi" style="color:#ababab;"></i>
							</p>
							<p class="tag">下移</p>
						</div>
						<div class="box">
							<p class="icon">
								<!-- <tui-icon name="edit"></tui-icon> -->
								<i class="iconfont icon-shanchu1" style="color:#ababab;"></i>
							</p>
							<p class="tag">删除</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="add_title">
			<button class="btn" type="primary" @click="getAddSubject">
				<i class="iconfont icon-tianjia"></i>
				<!-- <van-icon name="plus" color="#333333" size="18px" /> -->
				<span class="add">
					添加题目
				</span>
			</button>
		</div>
		<div class="footer" :class="{'footerActive':isModelmes}">
			<div class="block">
				<div class="box" @click="getAddSubject">
					<p class="icon">
						<i class="iconfont icon-timu" style="color:#53565B;font-size: 24px;"></i>
					</p>
					<p class="name">题目</p>
				</div>
				<div class="box" @click="getSetting">
					<p class="icon">
						<i class="iconfont icon-shezhi" style="color:#53565B;font-size: 24px;"></i>
					</p>
					<p class="name">设置</p>
				</div>
				<div class="box" @click="getPreveiew">
					<p class="icon">
						<i class="iconfont icon-yulan" style="color:#53565B;font-size: 24px;"></i>
					</p>
					<p class="name">预览</p>
				</div>
				<div class="box" @click="getSave">
					<p class="icon">
						<i class="iconfont icon-baocun" style="color:#53565B;font-size: 24px;"></i>
					</p>
					<p class="name">保存</p>
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
		data() {
			return {
				isBook:true
			}
		},
		computed:{
			isModelmes(){
				return uni.getStorageSync('isModelmes')
			}
		},
		methods: {
			getIsCheck(){
				this.isBook = !this.isBook;
			},
			getEdit(){
				uni.navigateTo({
					url:'../edit_explain/edit_explain'
				})
			},
			// 添加题目
			getAddSubject(){
				uni.navigateTo({
					url:'../addSubject/addSubject'
				})
			},
			getSetting(){
				uni.navigateTo({
					url:'../setting/setting'
				})
			},
			getPreveiew(){
				uni.navigateTo({
					url:'../preview/preview'
				})
			},
			getSave(){
				wx.showModal({
				  title: '保存成功',
				  content: '问卷保存成功，是否立即发布？',
				  cancelText:"继续编辑",
				  confirmText:"发布调查",
				  confirmColor:"#6db781",
				  success (res) {
				    if (res.confirm) {
				      console.log('用户点击确定')
				    } else if (res.cancel) {
				      console.log('用户点击取消')
				    }
				  }
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
		padding-bottom: 100px;
		.container{
			// background: #FFFFFF;
			.panel.active{
				border: none;
				box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
			}
			.panel{
				width: 100%;
				// height: 327rpx;
				box-sizing: border-box;
				border: 2rpx dashed #6db781;
				background: #FFFFFF;
				.box{
					padding:35rpx 28rpx;
					
					.name{
						font-size: 36rpx;
						color: #333333;
						font-weight: bold;
					}
					.desc{
						padding-top: 20rpx;
						font-size: 28rpx;
						color: #999999;
					}
				}
				.edit{
					display: flex;
					justify-content: center;
					border-top: 2rpx solid #dcdddf;
					padding: 20rpx 0;
					.icon{
						text-align: center;
					}
					.text{
						font-size: 28rpx;
						color: #999999;
					}
				}
			}
			.content{
				.panel_box{
					margin-top: 20rpx;
					// padding: 47rpx 0;
					background: #FFFFFF;
					.top{
						padding: 47rpx 0;
						.label{
							font-size: 31rpx;
							color: #333333;
							padding: 0 19rpx;
							font-weight: bold;
							.require{
								font-size: 21rpx;
								color: #e93323;
								padding-right: 12rpx;
							}
							.tag{
								font-size: 31rpx;
								color: #999999;
								padding-left: 10rpx;
							}
						}
						.cont{
							.row{
								display: flex;
								align-items: center;
								padding: 0 40rpx;
								margin-top: 30rpx;
								.val{
									font-size: 28rpx;
									color: #4d4d4d;
									padding-left: 31rpx;
								}
							}
						}
						.filed{
							padding:0 40rpx;
							.inp{
								width: 100%;
								height: 60rpx;
								border: 2rpx solid #cccccc;
								margin-top: 29rpx;
							}
						}
					}
					.ActionSheet{
						display: flex;
						padding: 23rpx 0;
						background: #fafbfe;
						.box{
							width: 20%;
							text-align: center;
							.tag{
								font-size: 24rpx;
								color: #999999;
							}
						}
					}
				}
			}
		}
		.add_title{
			padding: 79rpx 40rpx;
			.btn{
				background: #FFFFFF;
				border-radius: none;
				border: 2rpx dashed #cccccc;
				font-size: 32rpx;
				color: #333333;
				display: flex;
				justify-content: center;
				align-items: center;
				.add{
					margin-left: 10rpx;
				}
			}
		}
		.footer{
			width: 100%;
			position: fixed;
			bottom: 0;
			background: #FFFFFF;
			box-shadow: 0rpx -2rpx 13rpx 0rpx rgba(0, 0, 0, 0.05);
			.block{
				display: flex;
				padding:8rpx 0 47rpx 0;
				.box{
					flex: 1;
					text-align: center;
					.name{
						font-size: 24rpx;
						color: #737373;
						padding-top: 15rpx;
					}
				}
			}
		}
		.footer.footerActive{
			// padding-bottom: 10rpx;
		}
	}
</style>
