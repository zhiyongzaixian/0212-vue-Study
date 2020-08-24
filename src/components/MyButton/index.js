import MyButton	from './MyButton'


// 如果向外暴露的是函数，那么该函数就是install
export default (Vue) => {
	Vue.component('MyButton', MyButton);
	Vue.prototype.showTip = function(msg){
		alert(msg);
	}
	
}