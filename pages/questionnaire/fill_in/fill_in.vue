<template>
	<view class="wrap">
		<div class="container">
			<div class="header">
				<p class="label">
					<span>*</span>
					标题
				</p>
				<div class="field_text">
					<textarea :class="{'active':isFocus}" class="textarea" 
					 v-model="name"
					 value=""
					 :show-confirm-bar="false"
					 @focus="getFocus"
					 @blur="getFocus"
					 placeholder="请输入标题" placeholder-class="placeholder" />
				</div>
			</div>
			<div class="option_wrap">
				<div class="label">选项</div>
				<div class="content">
					<div class="box">
						<div class="row" v-for="(item,index) in listData" :key="index">
							<p class="icon" @click="getItemDel(item,index)">
								<tui-icon name="offline-fill" color="#eb605a"></tui-icon>
							</p>
							<div class="filed">
								<input type="text" placeholder-class="placeholder" placeholder="请输入选项">
							</div>
							<p class="icon" @click="getChoseImage(item,index)">
								<tui-icon name="pic" v-if="item.imgUrl==''"></tui-icon>
								<image v-else :src="item.imgUrl"></image>
							</p>
						</div>
					</div>
					<div class="add_option" @click="getAddOption">
						<tui-icon name="add-fill" color="#6db781"></tui-icon>
						<p class="add_text">添加选项</p>
					</div>
				</div>
			</div>
			<div class="setting">
				<div class="label">设置</div>
				<div class="box_wrap">
					<div class="fill_text" v-if="isFill">
						<picker @change="pickerText" :value="textIdx" :range="textList">
							<div class="row">
								<p class="name">
									文本验证
								</p>
								<p class="right_value">
									{{textList[textIdx]}}
									<tui-icon name="arrowright"></tui-icon>
								</p>
							</div>
						</picker>
						<picker @change="pickerRows" :value="rowsIdx" :range="rowsNumber">
							<div class="row">
								<p class="name">
									输入框行数
								</p>
								<p class="right_value">
									{{rowsNumber[rowsIdx]}}
									<tui-icon name="arrowright"></tui-icon>
								</p>
							</div>
						</picker>
					</div>
					<div class="row" v-if="!isFill">
						<p class="name">
							切换至多选题
						</p>
						<p class="switch">
							<switch :checked="isMany" @change="changeSwitch"></switch>
						</p>
					</div>
					<div v-if="isMany">
						<picker @change="bindMinPickerChange" :value="minIdx" :range="min_array">
							<div class="row">
								<p class="name">
									最少选择
								</p>
								<p class="right_value">
									{{min_array[minIdx]}}
									<tui-icon name="arrowright"></tui-icon>
								</p>
							</div>
						</picker>
						<picker @change="bindMaxPickerChange" :value="maxIdx" :range="max_array">
							<div class="row">
								<p class="name">
									最少选择
								</p>
								<p class="right_value">
									{{max_array[maxIdx]}}
									<tui-icon name="arrowright"></tui-icon>
								</p>
							</div>
						</picker>
					</div>
					
					<div class="row">
						<p class="name">
							此题目必须回答
						</p>
						<p class="switch">
							<switch :checked="isRequired" @change="changeRequired"></switch>
						</p>
					</div>
				</div>
			</div>
			<div class="add_submit">
				<button class="btn" type="default" @click="getSubmit">确定</button>
			</div>
		</div>
	</view>
</template>

<script>
	import tuiIcon from "@/components/thorui/thorui/tui-icon/tui-icon"
	export default {
		components:{
			tuiIcon
		},
		data() {
			return {
				name:"",
				isFocus:false,
				listData:[
					{
						imgUrl:"",
						value:"",
						placeholder:"请输入选项"
					},
					{
						imgUrl:"",
						value:"",
						placeholder:"请输入选项"
					}
				],
				isMany:false, // 多选/单选
				isFill:false, // 填空
				isRequired:false,
				minIdx:0,
				min_array:[
					'不限'
				],
				maxIdx:0,
				max_array:[
					'不限'
				],
				textIdx:0,
				textList:['无','整数','小数','日期'],
				rowsNumber:[1,2,3,4],
				rowsIdx:0,
				subjectType:'' // 题目类型
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'单选题'
			})
		},
		methods: {
			getFocus(e){
				if(e.mp.type=='focus'){
					this.isFocus = true;
				}else if(e.mp.type=='blur'){
					this.isFocus = false;
				}
			},
			getItemDel(item,index){
				this.listData.splice(index,1)
			},
			getAddOption(){
				this.listData.push(
					{
						imgUrl:"",
						value:"",
						placeholder:"请输入选项"
					}
				)
			},
			changeSwitch(e){
				this.isMany = e.mp.detail.value;
			},
			changeRequired(e){
				this.isRequired = e.mp.detail.value;
			},
			bindMinPickerChange(e){
				this.minIdx = e.mp.detail.value;
			},
			bindMaxPickerChange(e){
				this.maxIdx = e.mp.detail.value;
			},
			pickerText(e){
				this.textIdx = e.mp.detail.value;
			},
			pickerRows(e){
				this.rowsIdx = e.mp.detail.value;
			},
			getChoseImage(item,index){
				uni.chooseImage({
				  count: 1,
				  sizeType: ['original', 'compressed'],
				  sourceType: ['album', 'camera'],
				  success (res) {
				    // tempFilePath可以作为img标签的src属性显示图片
				    const tempFilePaths = res.tempFilePaths[0];
					item.imgUrl = tempFilePaths;
				  }
				})
			},
			getSubmit(){
				if(this.name==""){
					uni.showToast({
					    title: '标题不能为空',
					    duration: 2000
					});
					return false;
				}else {
					uni.navigateBack({
						delta:2
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.wrap{
		min-height: 100vh;
		background: #f3f4f4;
		padding-bottom: 100rpx;
		.container{
			.header{
				background: #FFFFFF;
				padding: 56rpx 28rpx;
				.label{
					font-size: 24rpx;
					color: #adb1b3;
					span{
						font-size: 21rpx;
						color:#e93323;
						padding-right: 12rpx;
					}
				}
				.field_text{
					margin-top: 18rpx;
					overflow: hidden;
					.textarea{
						width: 100%;
						height: 124rpx;
						box-shadow: rgba(220, 221, 223, 1) solid 7rpx;
						border: 2rpx solid #dcdddf;
						border-radius: 7rpx;
						font-size: 36rpx;
						padding:0 23rpx;
						// padding: 33rpx 25rpx;
						box-sizing: border-box;
					}
					.textarea.active{
						border: 2rpx solid #6db781;
					}
					.placeholder{
						color: #a9a9a9;
					}
				}
			}
			.option_wrap{
				.label{
					font-size: 24rpx;
					color: #ababab;
					padding: 17rpx 28rpx;
				}
				.content{
					background: #FFFFFF;
					.box{
						border-bottom: 2rpx solid #dcdddf;
						.row{
							display: flex;
							align-items:center;
							margin-left: 28rpx;
							border-bottom: 2rpx solid #dcdddf;
							padding: 34rpx 28rpx 34rpx 0;
							.filed{
								flex: 1;
								margin:0 21rpx;
								font-size: 28rpx;
								.placeholder{
									color: #a9a9a9;
								}
							}
							.icon{
								image{
									width: 38rpx;
									height: 38rpx;
								}
							}
						}
						.row:last-child{
							border:none;
						}
					}
					.add_option{
						padding:33rpx 28rpx;
						display: flex;
						align-items: center;
						.add_text{
							padding-left: 21rpx;
							color: #6db781;
							font-size: 32rpx;
						}
					}
				}
			}
			.setting{
				.label{
					padding: 17rpx 28rpx;
					font-size: 24rpx;
					color: #ababab;
				}
				.box_wrap{
					background: #FFFFFF;
					.row{
						display: flex;
						justify-content: space-between;
						align-items:center;
						padding: 32rpx 0;
						margin-left: 28rpx;
						border-bottom: 2rpx solid #dcdddf;
						.name{
							font-size: 32rpx;
							color: #333333;
						}
						.switch{
							margin-right: 28rpx;
						}
						.right_value{
							font-size: 28rpx;
							color: #ababab;
							margin-right: 28rpx;
							display: flex;
							align-items: center;
						}
					}
					// .row:last-child{
					// 	border: none;
					// }
				}
			}
			.add_submit{
				margin-top: 72rpx;
				padding: 0 28rpx;
				.btn{
					height: 92rpx;
					line-height: 92rpx;
					background: #6db781;
					font-size: 36rpx;
					color: #ffffff;
					border-radius: 12rpx;
				}
			}
		}
	}
</style>
