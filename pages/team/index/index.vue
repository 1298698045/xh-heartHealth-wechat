<template>
	<view class="team_wrap">
		<custom-header :title="title" :backBtnClass="backBtnClass" :showBack="showBack" :containerStyle="containerStyle" :titleStyle="titleStyle" @backTap="backClick" ref="backTap"></custom-header>
		<div class="banner">
			<swiper class="swiper"
			 indicator-color="rgba(229, 229, 230, 1)"
			 indicator-active-color="rgba(81, 179, 134, 1)"
			 :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in imgList" :key="index" @click="getImg(index)">
					<view class="swiper-item">
						<div class="text_cont">
							<div class="text">
								协和医院心内科具有悠久的历史。早在中华人民共和国成立初期，由黄宛教授和方圻教授组建了协和医院内科心组，率先在国内开展了心血管专科的临床和研究工作。50年代初期，黄宛教授等从修复三导联的弦线心电图机开始到制造出十二导联心电图机，为心电图在我国的普及做出了巨大的贡献。50年代末期，在黄宛和方圻教授的领导下，心组在国内率先开展了右心导管和血液动力学监测下次...
							</div>
						</div>
					</view>
				</swiper-item>
			</swiper>
		</div>
		<div class="center">
			<scroll-view scroll-x="true" class="scroll">
				<div class="tabs">
					<p class="tab" :class="{active:num==index}" v-for="(item,index) in tabList" :key="index" @click="getSwitch(item,index)">{{item.name}}</p>
				</div>
			</scroll-view>
			<div class="content">
				<div class="block" v-for="(item,index) in list" :key="index">
					<div class="leftAvatar">
						
					</div>
					<div class="rightCont">
						<div class="head">
							<span class="name_bold">梅巨逸</span>
							<span>三级心理咨询师</span>
							<span>心理咨询科</span>
						</div>
						<div class="depart">
							<span class="tag">
								机构
							</span>
							协和心健康研究
						</div>
						<div class="desc">
							擅长：家庭心理问题,情感关系,儿童青少年心理,情绪管理,焦虑症,强迫症,婚恋情感,创伤后应激障碍,双...
						</div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import customHeader from '../../../components/custom-header/custom-header.vue';
	export default {
		components:{
			customHeader
		},
		data() {
			return {
				imgList: [
					'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1276523047,3932244811&fm=27&gp=0.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2567806224,1695502457&fm=27&gp=0.jpg'
				],
				tabList:[
					{
						name:'全部'
					},
					{
						name:'焦虑症'
					},
					{
						name:'抑郁症'
					},
					{
						name:'全部'
					},
					{
						name:'抑郁症'
					},
					{
						name:'抑郁症'
					},
				],
				num:0,
				list:[1,2,3,4,5,6],
				title:"团队介绍", // 导航文字:title,变量类型:String
				showBack:true, // 是否显示返回按钮:showBack,变量类型:Boolean
				backBtnClass: 'uni-icon uni-icon-back', // 左侧返回按钮样式类:backBtnClass,变量类型:String
				containerStyle:'background:#fff;position:sticky;top:0', // 顶部导航容器样式字符串:containerStyle,变量类型:String
				titleStyle: 'font-size:36rpx;font-weight:bold;',
				// 标题导航样式字符串:headerStyle,变量类型:String
			}
		},
		onLoad(){
			const res = uni.getSystemInfoSync();
			return res.statusBarHeight + 'px';
		},
		methods: {
			getSwitch(item,index){
				this.num = index;
			},
			backClick(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.team_wrap{
		.banner{
			padding:10rpx 30rpx;
			.swiper{
				height: 400rpx;
				.swiper-item {
					width: 100%;
					height: 100%;
					color: antiquewhite;
					padding-bottom:35rpx;
					.text_cont{
						width: 100%;
						height: 300rpx;
						background:#51b386;
						border-radius:10rpx;
						.text{
							font-size:24rpx;
							color:#fff;
							font-weight:bold;
							padding:25rpx;
						}
					}
				}
			}
			
		}
		.center{
			.scroll{
				white-space: nowrap;
				.tabs{
					width: 100%;
					display: flex;
					padding:10rpx 30rpx;
					.tab{
						width: 162rpx;
						height: 52rpx;
						line-height: 52rpx;
						font-size: 28rpx;
						color: #444444;
						border-radius: 30rpx;
						background: #f5f5f5;
						margin: 10rpx;
						text-align:center;
						box-sizing:border-box;
					}
					.tab.active{
						color: #50b089;
						font-weight:bold;
						border:1rpx solid #dae9fc;
						background:#f3fbfb;
					}
				}
			}
			.content{
				margin-top:20rpx;
				.block:last-child{
					.rightCont{
						border:none;
					}
				}
				.block{
					padding:0 30rpx;
					display:flex;
					.leftAvatar{
						margin-top:24rpx;
						width: 90rpx;
						height: 90rpx;
						border-radius:50%;
						background:#ccc;
					}
					.rightCont{
						flex:1;
						padding:24rpx;
						border-bottom:1rpx solid #f6f6f6;
						.head{
							font-size:28rpx;
							color:#000000;
							.name_bold{
								font-size:36rpx;
								color:#000000;
								font-weight:bold;
								padding-right:20rpx;
							}
							span:nth-child(2){
								padding-right:20rpx;
							}
						}
						.depart{
							font-size:28rpx;
							color:#000000;
							padding:27rpx 0 15rpx 0;
							display:flex;
							align-items:center;
							.tag{
								display:inline-block;
								width: 50rpx;
								height: 30rpx;
								line-height: 30rpx;
								text-align:center;
								border-radius:5rpx;
								background:#50b089;
								font-size:18rpx;
								color:#ffffff;
								margin-right:10rpx;
							}
						}
						.desc{
							font-size:24rpx;
							color:#666666;
						}
					}
				}
			}
		}
	}
</style>
