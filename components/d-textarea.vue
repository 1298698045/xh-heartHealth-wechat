<template>
	<view class="check_wrap">
		<div class="r_block">
			<div class="title">
				<span class="required" v-if="required">*</span>
				{{title}}
			</div>
			<div class="r_box">
				<textarea class="textarea" @input="changeTextarea" :value="value" :placeholder="' '" />
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		name:"d-textarea",
		props:{
			title:String,
			required:Boolean,
			value:String
		},
		data() {
			return {
				
			};
		},
		methods:{
			changeTextarea(e){
				this.$emit('change',e);
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
				.textarea{
					width: 100%;
					min-height: 200rpx;
					padding:0 28rpx;
				}
			}
		}
	}
</style>
