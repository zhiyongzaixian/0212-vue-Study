let obj = {
	username: 'wade'
}
// obj.username = 'wade'

// Object.defineProperty用于给指定的对象添加扩展属性
Object.defineProperty(obj, 'sex', {
	get(){
		console.log('get()')
		return '男'
	},
	set(newValue){
		// 监视当前的扩展属性
		console.log('set()');
		console.log(newValue);
	}
})

console.log(obj)

// 模拟Vue数据劫持代理
let myThis = {
	
}

let data = {
	username: 'wade',
	age: 38,
	sex: '男'
}



for(let myKey in data){
	Object.defineProperty(myThis, myKey, {
		get(){
			console.log('get()')
			return data[myKey]
		},
		set(newValue){
			console.log('set()')
			// 千万不要在set方法中直接修改扩展属性，容易出现死循环
			// myThis[myKey] = newValues
			data[myKey] = newValue;
		}
	})
}

console.log('myThis', myThis)

myThis.username = 'curry'
console.log(myThis.username)