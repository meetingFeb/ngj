// pages/camera/camera.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgsrc: []
	},

	chooseImage: function () {
		const that = this;
		wx.chooseMedia({
			count: 1,
			mediaType: ['image'],
			sourceType: ['album', 'camera'],
			maxDuration: 30,
			camera: 'back',
			success(res) {
				// res.tempFiles.forEach(item => that.data.imgsrc.push(item.tempFilePath));
				console.log(res);
				// that.setData({
				// 	imgsrc: that.data.imgsrc
				// })
				wx.uploadFile({
					url: 'http://127.0.0.1:8000/api/predict/',
					filePath: res.tempFiles[0].tempFilePath,
					name: 'image',
					formData: {
						'user': 'test'
					},

					success: function (resu) {
						const data= JSON.parse(resu.data);
						if (resu.statusCode === 200) {
						
							wx.navigateTo({
								url: `../details/details?predict=${data.predict}&imageSrc=${encodeURIComponent(res.tempFiles[0].tempFilePath)}`, // 跳转到结果A页面  
								success(res) {
									console.log(res);
								}, fail(res) {
									console.log(res);
								}
							});
						}


						// do something

						// console.log(res.statusCode);
					},
					fail: function (res) {
						console.log('上传失败', res)
					}
				})




			},
			fail(res) {
				console.log("失败");
				console.log(res)
			}
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})