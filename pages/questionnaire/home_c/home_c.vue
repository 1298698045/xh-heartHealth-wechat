<template>
	<view class="wrap">
		<div class="tabs">
			<div class="tab" :class="{'active':idx==index}"
				@click="handleTab(item,index)"
			 v-for="(item,index) in tabs" :key="index">
				<p class="name">{{item}}</p>
				<p class="bottom"></p>
			</div>
		</div>
		<div class="container">
			<div class="box" v-for="(item,index) in list" :key="index">
				<div class="icon">
					<i class="iconfont icon-timu1" style="color:#6db781;"></i>
				</div>
				<div class="rightCont">
					<p class="name">
						{{item.name}}
					</p>
					<p class="total">共{{item.total}}题</p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs:[
					'待填问卷',
					'已填问卷'
				],
				idx:0,
				list:[
					{
						name:'心血管健康调查——协和心1...',
						total:12
					},
					{
						name:'心血管健康调查——协和心2...',
						total:13
					},
					{
						name:'心血管健康调查——协和心3...',
						total:14
					},
					{
						name:'心血管健康调查——协和心4...',
						total:15
					},
					{
						name:'心血管健康调查——协和心5...',
						total:16
					}
				]
			}
		},
		methods: {
			handleTab(item,index){
				this.idx = index;
			}
		}
	}
</script>

<style lang="scss">
	@import url('../../../static/css/iconfont.css');
	.wrap{
		min-height: 100vh;
		background: #f3f4f3;
		.tabs{
			display: flex;
			padding: 22rpx 0 30rpx 0;
			background: #FFFFFF;
			.tab{
				flex:1;
				.name{
					text-align: center;
					font-size: 31rpx;
					color:#666666;
					padding-bottom: 28rpx;
				}
				.bottom{
					width: 60rpx;
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
		.container{
			padding: 0 40rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.box{
				width: 320rpx;
				height: 216rpx;
				border-radius: 14rpx;
				box-shadow: 0rpx 0rpx 47rpx 0rpx rgba(0, 0, 0, 0.02);
				background: #FFFFFF;
				margin-top: 40rpx;
				display: flex;
				padding-bottom: 33rpx;
				// padding: 33rpx 39rpx;
				.icon{
					// width: 23rpx;
					// height: 32rpx;
					// background: #ccc;
					margin:33rpx 0 0 39rpx;
					text-align: center;
				}
				.rightCont{
					font-size: 30rpx;
					color: black;
					margin:30rpx 39rpx 0 18rpx;
					.total{
						text-align: center;
						font-size: 24rpx;
						color: #b5b5b5;
						padding-top: 41rpx;
					}
				}
			}
		}
	}
</style>
