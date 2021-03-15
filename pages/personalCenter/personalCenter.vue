<template>
	<view class="wrap">
		<div class="head_nav" :class="{'active':isNav}">
			<div class="title" :style="{ paddingTop: statusHeight + 'rpx', lineHeight:titleHeight+'rpx' }">
				<van-icon name="arrow-left" size="20px" :color="iconColor" @click="getNavBack" />
				个人中心
			</div>
		</div>
		<!-- <div class="navBar" :style="{height:statusHeight+'px'}">
			<div class="nav" :style="navStyle">
				<div class="flex"  :style="sizeHiehgt">
					<van-icon name="arrow-left" size="20px" :color="iconColor" @click="getNavBack" />
					<p class="titile" :style="color">
						个人中心
					</p>
				</div>
			</div>
		</div> -->
		<div class="container">
			<div class="content">
				<div class="info">
					<div class="row">
						<div class="avatar"></div>
						<div class="name">
							我
						</div>
					</div>
					<div class="row">
						<div class="avatar active">
							<tui-icon name="plus" color="#fff"></tui-icon>
						</div>
					</div>
				</div>
				<div class="panelWrap">
					<div class="tabs">
						<div class="tab" :class="{'active':idx==index}"
							@click="handleTab(item,index)"
						 v-for="(item,index) in tabs" :key="index">
							<p class="name">{{item}}</p>
							<p class="bottom"></p>
						</div>
					</div>
					<div class="pan_cont">
						<div class="box">
							<p class="dian"></p>
							<div class="time">02月20日</div>
							<p class="title">心血管防治</p>
							<div class="block">
								<div class="img">
									 <!-- <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
									                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video> -->
								</div>
								<div class="text">
									<p class="name">
										得了糖尿病，少吃饭、多吃菜？
									</p>
									<p class="times">14:31:03 </p>
								</div>
							</div>
							<p class="title">糖尿病</p>
							<div class="block">
								
							</div>
						</div>
						<div class="box">
							<p class="dian"></p>
							<div class="time">02月20日</div>
							<p class="title">心血管防治</p>
							<div class="block">
								
							</div>
							<p class="title">糖尿病</p>
							<div class="block">
								
							</div>
						</div>
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
		data() {
			return {
				navStyle:"",
				sizeHiehgt:"",
				statusHeight:"",
				titleHeight:"",
				color:"color:#fff",
				iconColor:"#fff",
				tabs:[
					'动态',
					'收藏',
					'健康测试'
				],
				idx:0,
				navheadStyle:"",
				isNav:false
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
			// this.navheadStyle = `padding-top:${statusHeight}rpx;line-height:${titleHeight}rpx`;
			this.navStyle = `width:${750}rpx;height:${statusHeight+titleHeight}rpx;`;
			this.sizeHiehgt = `margin-top:${titleHeight}rpx;line-height:${titleHeight}rpx;`
		},
		onPageScroll(e){
			if(e.scrollTop>1){
				this.navStyle = `width:${750}rpx;height:${this.statusHeight+this.titleHeight}rpx;background:white;`;
				this.color = 'color:black';
				this.iconColor = '#333';
				this.isNav = true;
			}else {
				this.isNav = false;
				this.color = 'color:#fff';
				this.iconColor = '#fff';
				this.navStyle = `width:${750}rpx;height:${this.statusHeight+this.titleHeight}rpx;background:none;`;
			}
		},
		methods: {
			getNavBack(){
				uni.navigateBack({
					delta:1
				})
			},
			initNavigation(){
				return {
					width:'750rpx',
					height:'88rpx',
					left:'28rpx',
					top:'88rpx',
					statusBarHeight:'88rpx',
					opacity:'.8',
					windowHeight:'750rpx'
				}
			},
			handleTab(item,index){
				this.idx = index;
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		min-height: 100vh;
		background: #f3f4f4;
		.head_nav.active{
			background: #fff;
			.title{
				color:black;
			}
		}
		.head_nav{
			width: 100%;
			// height: 300rpx;
			background: #76d6a8;
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
		.navBar{
			width: 100%;
			// height: 833rpx;
			// background-image: linear-gradient(to bottom, #76d6a8, #fff);
			position: sticky;
			z-index: 9999;
			background: #76d6a8;
			.nav{
				position: fixed;
				top: 0;
				z-index: 999;
				.flex{
					display: flex;
					align-items: center;
					padding-left: 28rpx;
					.titile{
						font-size: 37rpx;
						// color: #FFFFFF;
						font-weight:bold;
						padding-left: 10rpx;
					}
				}
			}
		}
		.container{
			width: 100%;
			height: 600rpx;
			// position: fixed;
			background-image: linear-gradient(to bottom, #76d6a8, #fff);
			.content{
				padding:0 24rpx;
				position: relative;
				.info{
					display: flex;
					.row{
						position: relative;
						margin-right: 36rpx;
						.avatar{
							width: 96rpx;
							height: 96rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							background: #fff;
							border:2rpx solid #5eab86; 
							border-radius: 50%;
						}
						.avatar.active{
							background: #5eab86;
						}
						.name{
							position: absolute;
							width: 96rpx;
							height: 36rpx;
							background: #50b089;
							border-radius: 18rpx;
							bottom: -10rpx;
							z-index: 999;
							text-align: center;
							font-size: 24rpx;
							color: #fff;
						}
					}
				}
				 .panelWrap:before{
					content: "";
					border: 10px solid transparent;
					border-bottom-color: #fff;
					position: absolute;
					left: 48rpx;
					top: 67px;
					margin-top: -20px;
					display: block;
					z-index: 9999;
				}
				.panelWrap{
					width: 702rpx;
					margin: 31rpx auto;
					background: #fff;
					border-radius: 13rpx;
					.tabs{
						display: flex;
						padding: 33rpx 51rpx;
						.tab{
							// flex:1;
							margin-right: 61rpx;
							.name{
								text-align: center;
								font-size: 32rpx;
								color:#999999;
								font-weight: bold;
								padding-bottom: 28rpx;
							}
							.bottom{
								width: 40rpx;
								height: 4rpx;
								margin:auto;
								background: transparent;
							}
							.bottom.active{
								background: #6db781;
							}
						}
						.tab.active{
							.name{
								color: #6db781;
							}
							.bottom{
								background: #6db781;
							}
						}
					}
					.pan_cont{
						height: 65vh;
						overflow: scroll;
						padding: 0 30rpx;
						.box{
							width: 100%;
							border-left: 2rpx solid #dcdddf;
							padding:0 0 40rpx 30rpx;
							box-sizing: border-box;
							position: relative;
							.dian{
								width: 14rpx;
								height: 14rpx;
								background: #5eab86;
								border-radius: 50%;
								position: absolute;
								left: -8rpx;
								top:0;
							}
							.time{
								width: 120rpx;
								height: 36rpx;
								line-height: 36rpx;
								background: #aeb2b7;
								text-align: center;
								font-size: 24rpx;
								color: #fff;
								border-radius: 18rpx;
							}
							.title{
								font-size: 31rpx;
								color: #444444;
								font-weight: bold;
								padding: 24rpx 0;
							}
							.block{
								width: 602rpx;
								height: 180rpx;
								background: #f5f5f5;
								border-radius: 13rpx;
								display: flex;
								.img{
									flex: 1;
									height: 180rpx;
									border-radius: 13rpx;
									background: #ccc;
									image{
										width: 100%;
										height: 100%;
									}
								}
								.text{
									width: 282rpx;
									padding: 37rpx 31rpx;
									.name{
										font-size: 27rpx;
										color: #000000;
									}
									.times{
										font-size: 24rpx;
										color: #aaaaaa;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
