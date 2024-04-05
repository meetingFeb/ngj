// pages/user/protocol.js
Component({

	options: {
		styleIsolation: "shared"
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		checked: {
			type: Boolean,
			value: false
		}
	},
	observers: {
		checked: function (newchecked) {
			// console.log(newchecked);
			this.setData({
				isChecked: newchecked
			})
		}
	},
	lifetimes:{
		created(){},
		attached(){},
		
		detached(){},
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		isChecked: false
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		updatrChecked() {
			this.setData({
				isChecked: !this.data.isChecked
			}),
				this.triggerEvent('changeChecked', this.data.isChecked)
		}
	}
})