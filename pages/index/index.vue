<template>
	<view class="wrap">
		<div class="head_nav">
			<div class="title" :style="{ paddingTop: statuHeight + 'rpx', lineHeight:titleHeight+'rpx' }">协和心健康</div>
		</div>
		<div class="back_bottom">
			<div class="banner" @click="getRoute">
				<image class="img" src="../../static/images/banner.jpg"></image>
			</div>
			<div class="center">
				<div class="cloumn_container">
					<div class="block">
						<div class="box" @click="getRouteWJ">
							<div class="icon">
								<image src="../../static/images/icon_1.png"></image>
							</div>
							<p class="name">健康调研</p>
							<p class="desc">自评自诊</p>
						</div>
						<div class="box" @click="getRouteMesssage">
							<div class="icon"> 
								<image src="../../static/images/icon_2.png"></image>
							</div>
							<p class="name">留言咨询</p>
							<p class="desc">及时反馈</p>
						</div>
						<div class="box" @click="getRouterPerson">
							<div class="icon">
								<image src="../../static/images/icon_3.png"></image>
							</div>
							<p class="name">个人中心</p>
							<p class="desc">随访会员</p>
						</div>
					</div>
					<div class="notice_back">
						<p>
							第一次心健康随访需注册信息才能查看
						</p>
						
					</div>
				</div>
				<div class="healthy">
					<div class="row_top" @click="handleMore">
						<p class="title">健康科普</p>
						<p class="icon_right">
							<span class="more">更多</span>
							<van-icon name="arrow" size="18" color="#aaaaaa" />
						</p>
					</div>
					<div class="u_tabs">
						<div class="tab" v-for="(item,index) in tabList" :key="index" @click="changeTab(item,index)">
							<span class="name" :class="{'active':activeIdx==index}">{{item.name}}</span>
						</div>
					</div>
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
				</div>
				<div class="evaluating healthy">
					<div class="row_top">
						<p class="title">心理评测</p>
						<p class="icon_right">
							<span class="more">更多</span>
							<van-icon name="arrow" size="18" color="#aaaaaa" />
						</p>
					</div>
					<div class="panel_wrap">
						<div class="panel">
							<p class="title">今天你抑郁了么</p>
							<p class="desc">国际标准抑郁症测试</p>
							<div class="bottom_text">
								20个问题   预计需2分钟  115225人已测
							</div>
						</div>
						<div class="panel gre">
							<p class="title">今天你抑郁了么</p>
							<p class="desc">国际标准抑郁症测试</p>
							<div class="bottom_text">
								20个问题   预计需2分钟  115225人已测
							</div>
						</div>
						<div class="panel yel">
							<p class="title">今天你抑郁了么</p>
							<p class="desc">国际标准抑郁症测试</p>
							<div class="bottom_text">
								20个问题   预计需2分钟  115225人已测
							</div>
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
				statuHeight:"",
				titleHeight:"",
				activeIdx:0,
				tabList:[
					{
						name:'精选'
					},
					{
						name:'冠心病防治'
					},
					{
						name:'空气污染'
					},
					{
						name:'流行病学'
					}
				],
				navHeight:"",
				paddintHeight:""
			}
		},
		onLoad() {
			let systemInfo = uni.getSystemInfoSync();
			 
			let pxToRpxScale = 750 / systemInfo.windowWidth; //px转换到rpx的比例
			let fontSize = systemInfo.fontSizeSetting * pxToRpxScale;// 用户设置的字体大小
			let statuHeight = systemInfo.statusBarHeight * pxToRpxScale; //状态栏的高度
			let titleHeight = 44 * pxToRpxScale; //导航栏高度，这个一般是固定的
			this.statuHeight = statuHeight;
			this.titleHeight = titleHeight;
			this.navHeight = statuHeight + titleHeight;
			this.paddintHeight = this.navHeight + 75;
			console.log(statuHeight,titleHeight,'statuHeight')
		},
		methods: {
			changeTab(itme,index){
				this.activeIdx = index;
			},
			getRoute(){
				uni.navigateTo({
					url:"../team/index/index"
				})
			},
			getRouteWJ(){
				uni.navigateTo({
					url:"../questionnaire/questionnaire/questionnaire"
				})
			},
			getRouterPerson(){
				uni.navigateTo({
					url:'../personalCenter/personalCenter'
				})
			},
			getRouteMesssage(){
				uni.navigateTo({
					url:'../message/message'
				})
			},
			// 更多健康科普
			handleMore(){
				uni.navigateTo({
					url:'../news/news'
				})
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		min-height: 100vh;
		background:#f4f4f4;
		.head_nav{
			width: 100%;
			// height: 300rpx;
			background-image: url('../../static/images/bg_1_top.png');
			background-size: 100% 100%;
			position: sticky;
			top: 0;
			z-index: 9999;
			.title{
				// height: 88rpx;
				// line-height: 88rpx;
				// padding-top: 88rpx;
				padding-left: 24rpx;
				color: white;
				font-weight: bold;
			}
		}
		.back_bottom{
			width: 100%;
			height: 150rpx;
			background-image: url("../../static/images/bg_2_bottom.png");
			background-size: 100% 100%;
			position: relative;
			padding-top: 41rpx;
			.banner{
				width: 702rpx;
				margin: 0 auto;
				height: 240rpx;
				// position: absolute;
				// top: 20rpx;
				// left: 24rpx;
				box-shadow: 0rpx 14rpx 70rpx 0rpx rgba(0, 0, 0, 0.1);
				.img{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
			.center{
				// padding-top: 150rpx;
				// background: #fff;
				// margin-top:500rpx;
				margin-top: 47rpx;
				.cloumn_container{
					background:#fff;
					padding-bottom:20rpx;
					.block{
						display:flex;
						justify-content:space-between;
						padding:0 40rpx;
						.box{
							// width: 144rpx;
							// padding: 10rpx;
							// text-align:center;
							.icon{
								width: 100rpx;
								height: 100rpx;
								margin:auto;
								image{
									width: 100%;
									height:100%;
								}
							}
							.name{
								font-size:28rpx;
								color:#333333;
								font-weight:bold;
								margin-top:10rpx;
								padding:5rpx 0;
							}
							.desc{
								font-size:24rpx;
								color:#999999;
							}
						}
					}
					.notice_back{
						width: 692rpx;
						height: 99rpx;
						line-height: 99rpx;
						color:#A1C3B9;
						font-size:30rpx;
						background-image:url('../../static/images/zc.png');
						background-size:100% 100%	;
						margin:30rpx auto;
						p{
							padding-left:90rpx;
						}
					}
				}
				.healthy{
					margin-top:20rpx;
					background:#fff;
					padding: 40rpx 31rpx;
					.row_top{
						display:flex;
						align-items: center;
						justify-content:space-between;
						.title{
							font-size:36rpx;
							color:#333333;
							font-weight:bold;
						}
						.icon_right{
							display:flex;
							align-items: center;
							.more{
								font-size:28rpx;
								color:#aaaaaa;
							}
						}
					}
					.u_tabs{
						margin-top:62rpx;
						display:flex;
						align-items:center;
						justify-content:space-between;
						.tab{
							font-size:32rpx;
							.name{
								display:inline-block;
								padding-bottom:25rpx;
								border-bottom:7rpx solid transparent;
								color:#666666;
							}
							.name.active{
								color:#609786;
								border-bottom:7rpx solid #609786;
							}
						}
						
					}
					.content{
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
						.block_box_text{
							padding:49rpx 0;
							border-bottom:1rpx solid #f6f6f6;
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
						}
					}
				}
				.evaluating{
					.panel_wrap{
						.panel.gre{
							background:#f4fbfc;
						}
						.panel.yel{
							background:#fefaf3;
						}
						.panel{
							padding:38rpx 32rpx;
							background:#f6f9fe;
							border-radius:10rpx;
							margin-top:20rpx;
							.title{
								font-size:32rpx;
								font-weight:bold;
								color:#444444;
							}
							.desc{
								font-size:24rpx;
								color:#aaaaaa;
								padding:17rpx 0;
							}
							.bottom_text{
								font-size:24rpx;
								color:#666666;
								// e5e7e8
							}
						}
					}
				}
			}
		}
		

	}
</style>
