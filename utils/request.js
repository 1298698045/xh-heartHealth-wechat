const baseUrl = "XXXXXXXXX"; // 测试环境
const $http = {
	/*
	url 路径地址
	data 传递的数据
	methods 请求类型 POST
	dataType  数据格式转成
	token token数据
	headers  headers头部数据
	*/
	httpRequest: function({
		url,
		data,
		methods,
		dataType，
		token,
		headers
	}) {
		return new Promise(function(resolve, reject) {
			uni.request({
				url: baseUrl + url,
				data: data || {},
				method: methods || "GET",
				dataType: dataType || "JSON",
				header:  {
					"token": uni.getStorageSync('SESSION').token || '',
					"Content-Type": headers || "application/x-www-form-urlencoded"
				},
				success: function(res) {
					// 判断接口是否正常
					if (res.statusCode === 200) {
						// 返回成功后对数据进行处理,这儿返回状态是字符串（根据后端返回为准） 转换
						let resData = res.data;
						if (resData.status === 1) {//接口连接成功调用
							resolve(resData);
						} else if (resData.status === -1) {//接口连接失败调用
							resolve(resData)
						}
					}else{
						uni.hideLoading();
						uni.showToast({
							title: '网络繁忙！',
							icon: 'none',
							duration: 2000
						});
					}		
				},
				fail: function(err) {
					uni.hideLoading();
					reject(err);
				}
			})
		})
	}
}
export default $http;