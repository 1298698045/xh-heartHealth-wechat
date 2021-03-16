<template>
	<view class="wrap">
		<div class="container">
			<div class="panel">
				<div class="cell">
					<p class="label">只通过微信回答</p>
					<div class="arrow">
						<switch :checked="checked" @change="changeSwitch" />
					</div>
				</div>
				<div class="cell">
					<p class="label">记录微信用户昵称、性别、城市</p>
					<div class="arrow">
						<switch :checked="checked" @change="changeSwitch" />
					</div>
				</div>
				<div class="cell">
					<p class="label">每部手机只能答一次</p>
					<div class="arrow">
						<switch :checked="checked" @change="changeSwitch" />
					</div>
				</div>
			</div>
		<!-- 	<div class="panel">
				<div class="cell">
					<p class="label">问卷外观</p>
					<div class="arrow">
						<span class="text">已设置</span>
						<van-icon name="arrow" size="16px" color="#999999" />
					</div>
				</div>
			</div> -->
			<div class="panel">
				<div class="cell">
					<p class="label">开始时间</p>
					<div class="arrow">
						<span class="text"  @click="setStartTimeShow">
							{{startTime?startTime:'未设置'}}
						</span>
						<van-icon name="arrow" size="16px" color="#999999" />
					</div>
				</div>
				<div class="cell">
					<p class="label">结束时间</p>
					<div class="arrow">
						<span class="text" @click="setendTimeShow">
							{{endTime?endTime:'未设置'}}
						</span>
						<van-icon name="arrow" size="16px" color="#999999" />
					</div>
				</div>
			</div>
		</div>
		<tui-datetime ref="startTime" @confirm="changeStartTime"></tui-datetime>
		<tui-datetime ref="endTime" @confirm="changeEndTime"></tui-datetime>
		<div class="add_submit">
			<button class="btn" type="default" @click="getSubmit">确定</button>
		</div>
	</view>
</template>

<script>
	import tuiDatetime from "@/components/thorui/thorui/tui-datetime/tui-datetime"
	import tuiButton from '@/components/thorui/thorui/tui-button/tui-button';
	export default {
		components:{
			tuiButton,
			tuiDatetime
		},
		data() {
			return {
				checked:true,
				value:"",
				result:"",
				startTime:"",
				endTime:""
			}
		},
		methods: {
			changeSwitch(){
				
			},
			getSubmit(){
				
			},
			setStartTimeShow(e) {
				this.$refs.startTime.show();
			},
			setendTimeShow(e) {
				this.$refs.endTime.show();
			},
			changeStartTime(e) {
				//选择的结果
				console.log(e);
				this.startTime = e.result;
			},
			changeEndTime(e) {
				//选择的结果
				console.log(e);
				this.endTime = e.result;
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		min-height: 100vh;
		background: #f3f4f4;
		padding-top: 1rpx;
		.container{
			.panel{
				background: #FFFFFF;
				margin-top: 20rpx;
				.cell{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx 0;
					margin-left: 28rpx;
					border-bottom: 2rpx solid #f5f5f5;
					.label{
						font-size: 24rpx;
						color: #999999;
					}
					.arrow{
						margin-right: 28rpx;
						display: flex;
						align-items: center;
						.text{
							font-size: 24rpx;
							color: #999999;
						}
					}
				}
				.cell:last-child{
					border: none;
				}
			}
		}
		.add_submit{
			margin-top: 72rpx;
			padding: 0 28rpx;
			.btn{
				background: #6db781;
				font-size: 36rpx;
				color: #ffffff;
				border-radius: 12rpx;
			}
		}
	}
</style>
