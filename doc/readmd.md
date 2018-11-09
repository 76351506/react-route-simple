# 高阶函数
	操作函数的函数
	function fun(fn){
		let a = 123;
		return fn(a)
	}
	fun((val)=>{
		console.log(val);
	});

# 高阶组件
	定义: 函数接受一个组件作为参数，返回一个新的组件
	意义: 提升组件的复用性，减少冗余代码

# 路由
	安装 yarn add react-router-dom --save
	import { BrowserRouter as Router,Route, Switch} from "react-router-dom"
	react-router 分两种模式  
		history (浏览器历史)  像一个真实的连接  BrowserRouter webpack-dev-server historyApiFallback
		hash (锚点连接) #/   HashRouter
	render 函数用来渲染组件 返回一段jsx的语法，接受两种类型的参数 jsx 或者 class 定义的组件

# 组件的通讯方式
	1、父-子
		this.props接受来自父级组件的参数，子组件不关心父级组件的数据来源
	2、子-父
		this.props接受来自父级组件的一个回调函数，执行函数并传参
	3、兄弟
		1、跨级组件（父向更深层次的组件通讯） context 老版本 废弃
			父级组件需要定义 childContextTypes 来设置子组件参数的数据类型，通过 getChildContext() return
			子组件需要定义 要接受参数的 数据类型 contextTypes, 直接通过 this.context

		2、同级组件通讯 eventbus （插件 events） 通过一个全局对象，订阅与发布
		3、同级组件通讯 通过一个组件包裹兄弟组件，子1-父 父-子2 （将兄弟组件通讯变为了，两次父子通讯）
		4、redux flux
		5、context 新版本
		6、没有嵌套关系的通讯 通过一个匿名函数完成数据的传参

# props 验证
	组件接受父级组件参数，约束数据类型， 如果数据类型不符合，会抛出一个警告，并不会影响你代码的执行
	react 15.5以后的版本中移除了 PropTypes 所以我们需要下载一个包
	yarn add prop-types --save
