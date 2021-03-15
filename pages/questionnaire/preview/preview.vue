<template>
	<view class="wrap">
		<div class="header">
			<div class="subject">心理测试</div>
			<div class="cont">
				心理测试专业版提供最专业的心理测量，
				帮助了解自身心理健康状况。
				您还可以将测试结果发给心理咨询师让他帮您分析，
				并就心理问题进行在
			</div>
		</div>
		<div class="container">
			<div class="row_list">
				<d-radio title="1. 您的性别？" :required="true"
					:list="paramsList"
					:current="current"
					@change="changeRadio"
				></d-radio>
				<d-checkbox title="2. 您的症状包含哪些？" :required="true"
					:list="checkList"
					:current="checkValue"
					@change="changeCheck"
				></d-checkbox>
				<d-textarea title="3. 请您描述一下病情" :value="value" :required="true" @change="changeTextarea" ></d-textarea>
				<d-input title="4. 联系方式" :value="phone" :required="true" @change="changeInput" ></d-input>
			</div>
		</div>
		<div class="add_submit">
			<button class="btn" type="default" @click="getSubmit">提交</button>
		</div>
	</view>
</template>

<script>
	import dRadio from '@/components/d-radio';
	import dCheckbox from '@/components/d-checkbox';
	import dTextarea from '@/components/d-textarea';
	import dInput from '@/components/d-input';
	export default {
		components:{
			dRadio,
			dCheckbox,
			dTextarea,
			dInput
		},
		data() {
			return {
				paramsList:[
					{
						id:0,
						label:'男'
					},
					{
						id:1,
						label:'女'
					}
				],
				checkList:[
					{
						checked:false,
						id:1,
						label:'失眠'
					},
					{
						checked:false,
						id:2,
						label:'抑郁'
					},
					{
						checked:false,
						id:3,
						label:'无'
					}
				],
				current:-1,
				checkValue:[],
				value:"",
				phone:""
			}
		},
		onLoad(){
			uni.setNavigationBarTitle({
				title:'预览问卷'
			})
		},
		methods: {
			changeRadio(e){
				this.current = e.index;
			},
			changeCheck(e){
				if(!e.item.checked){
					this.checkValue.push(e.item.id);
					this.checkList[e.index].checked = true;
				}else {
					this.checkList[e.index].checked = false;
					let idx = this.checkList.findIndex(res=>res.id==e.item.id);
					this.checkValue.splice(idx,1);
				}
			},
			changeTextarea(e){
				this.value = e.mp.detail.value;
			},
			changeInput(e){
				this.phone = e.mp.detail.value;
			},
			getSubmit(){
				uni.showModal({
					title:'此问卷为预览状态，不能提交',
					showCancel:false
				})
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		padding-bottom: 100rpx;
		.header{
			padding-bottom: 63rpx;
			margin: 0 21rpx 0 21rpx;
			border-bottom: 2rpx dashed #ccc;
			.subject{
				font-size: 47rpx;
				font-weight: bold;
				color: #6db781;
				text-align: center;
				padding: 62rpx 0;
			}
			.cont{
				font-size: 28rpx;
				color: #4d4d4d;
			}
		}
		.container{
			margin: 56rpx 0;
		}
		.add_submit{
			margin-top: 72rpx;
			padding: 0 40rpx;
			.btn{
				background: #6db781;
				font-size: 36rpx;
				color: #ffffff;
				border-radius: 12rpx;
			}
		}
	}
</style>
