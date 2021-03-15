<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		created(){
			 uni.getSystemInfo({
				success: (res) => {
					let modelmes = res.model; //手机品牌
					if (modelmes.indexOf('iPhone X') != -1) {　　//XS,XR,XS MAX均可以适配,因为indexOf()会将包含'iPhone X'的字段都查出来
					  uni.setStorageSync('isModelmes',true);
					}else {
					  uni.setStorageSync('isModelmes',false);
					}
				},
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
