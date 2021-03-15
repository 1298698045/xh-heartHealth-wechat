<template>
	<view class="check_wrap">
		<div class="r_block">
			<div class="title">
				<span class="required" v-if="required">*</span>
				{{title}}
				<span class="tag">[多选题]</span>
			</div>
			<div class="r_box">
				<div class="r_row" v-for="(item,index) in list" :key="index" @click="handleItem(item,index)">
					<p class="icon">
						<tui-icon name="circle-fill" v-if="item.checked" color="#6db781"></tui-icon>
						<tui-icon name="circle-fill" v-else></tui-icon>
					</p>
					<p class="label">
						{{item.label}}
					</p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import tuiIcon from '@/components/thorui/thorui/tui-icon/tui-icon';
	export default {
		name:"d-checkbox",
		props:{
			title:String,
			required:Boolean,
			list:Array,
			current:Array
		},
		components:{
			tuiIcon
		},
		data() {
			return {
				
			};
		},
		methods:{
			handleItem(item,index){
				this.$emit('change',{item,index})
			}
		}
	}
</script>

<style lang="scss">
	.check_wrap{
		background: #FFFFFF;
		padding-bottom: 65rpx;
		.r_block{
			.title{
				padding: 0 19rpx;
				font-size: 31rpx;
				color: #333333;
				font-weight: bold;
				margin-bottom: 35rpx;
				.required{
					color: #e93323;
					padding-right: 12rpx;
				}
				.tag{
					font-size: 31rpx;
					color: #999999;
					padding-left: 10rpx;
				}
			}
			.r_box{
				margin: 0 40rpx;
				border: 2rpx solid #e0e0e0;
				border-radius: 5rpx;
				.r_row{
					padding: 27rpx 33rpx;
					border-bottom: 2rpx solid #e0e0e0;
					display: flex;
					align-items: center;
					.label{
						padding-left: 19rpx;
						font-size: 32rpx;
						color: #4d4d4d;
					}
				}
				.r_row:last-child{
					border: none;
				}
			}
		}
	}
</style>
