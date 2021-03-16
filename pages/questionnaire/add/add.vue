<template>
	<view class="wrap">
		<div class="container">
			<div class="content">
				<p class="label">
					<span>*</span>
					调查名称
				</p>
				<div class="field_text">
					<textarea :class="{'active':isFocus}" class="textarea" 
					 v-model="name"
					 value=""
					 :show-confirm-bar="false"
					 @focus="getFocus"
					 @blur="getFocus"
					 placeholder="请输入名称" placeholder-class="placeholder" />
				</div>
			</div>
			<div class="add_submit">
				<button class="btn" type="default" @click="getCreateWJ">创建问卷</button>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				isFocus:false
			}
		},
		methods: {
			getFocus(e){
				if(e.mp.type=='focus'){
					this.isFocus = true;
				}else if(e.mp.type=='blur'){
					this.isFocus = false;
				}
			},
			getCreateWJ(){
				if(this.name==""){
					uni.showToast({
					    title: '名称不能为空',
					    duration: 2000
					});
					return false;
				}else {
					uni.navigateTo({
						url:'../edit/edit'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		.container{
			padding: 56rpx 28rpx;
			.label{
				font-size: 32rpx;
				color: #333333;
				span{
					font-size: 21rpx;
					color:#e93323;
					padding-right: 12rpx;
				}
			}
			.field_text{
				margin-top: 30rpx;
				overflow: hidden;
				.textarea{
					width: 100%;
					height: 160rpx;
					box-shadow: rgba(220, 221, 223, 1) solid 7rpx;
					border: 2rpx solid #dcdddf;
					border-radius: 7rpx;
					font-size: 36rpx;
					padding: 0 25rpx;
					box-sizing: border-box;
				}
				.textarea.active{
					border: 2rpx solid #6db781;
				}
				.placeholder{
					color: #a9a9a9;
				}
			}
			
			.add_submit{
				margin-top: 72rpx;
				.btn{
					background: #6db781;
					font-size: 36rpx;
					color: #ffffff;
					border-radius: 12rpx;
				}
			}
		}
	}
</style>
