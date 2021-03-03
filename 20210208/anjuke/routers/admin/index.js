const express = require('express');
const config = require('../../config');
const common = require('../../libs/common');
const path = require('path');
const fs = require('fs');

let router = express.Router();

module.exports = router;

// for(let i=0;i<4;i++){
// 	console.log(common.uuidv4())
// }

// //进入所有的admin相关页面之前，都要校验用户身份-如果没登录过->去登陆(/admin/login)
// //'所有路由拦截、除了/admin/login'
// router.use((req,res,next)=>{
// 	if(!req.session['admin_ID']&&req.url!='/login'){
// 		res.redirect('/admin/login');	//重定向
// 	}else{
// 		next();
// 	}
// });

// //服务端-渲染login页面
// router.get('/login',(req,res)=>{
// 	let error_msg='';
// 	res.render('login',{error_msg:error_msg});
// });

// //login-post接口
// router.post('/login',(req,res)=>{
// 	// delete req.session['admin_ID']
// 	// console.log(req.session)

// 	let {user,pass}=req.body;	//经过bodyParser中间件解析
// 	let error_msg='';

// 	//判断两次
// 	if(user==config.root_username){
// 		if(common.md5(pass)==config.root_password){
// 			console.log('超级管理员已登录');
// 			req.session['admin_ID']='1';
// 			res.redirect('/admin/');	//重定向到admin根路径
// 		}else{
// 			showError('用户名或密码出现错误');
// 		}
// 	}else{
// 		//非超级管理员
// 		req.db.query(`SELECT * FROM admin_table WHERE username='${user}'`,(err,data)=>{
// 			if(err){
// 				showError('数据库出错');
// 			}else if(data.length<=0){
// 				showError('用户名或密码出现错误');
// 			}else{
// 				if(common.md5(pass)==data[0].password){
// 					console.log('普通管理员登录成功');
// 					req.session['admin_ID']=data[0].ID;
// 					res.redirect('/admin/');	//重定向到admin根路径
// 				}else{
// 					showError('用户名或密码出现错误');
// 				}
// 			}	
// 		});
// 	}
// 	function showError(msg){
// 		res.render('login',{error_msg:msg});
// 	}
// });
/****************以上是后台session方式验证身份的*****************/


router.use((req, res, next) => {
	if (!req.cookies['admin_token'] && req.url != '/login') {
		res.redirect('/admin/login'); //重定向
	} else {
		if (req.url == '/login') {
			if (!req.cookies['admin_token']) {
				next()
			} else {
				res.redirect('/admin/'); //重定向到admin根路径
			}

		} else {
			req.db.query(`SELECT * FROM admin_token_table WHERE ID='${req.cookies['admin_token']}'`, (err, data) => {
				if (err) {
					res.sendStatus(500);
				} else if (data.length <= 0) {
					res.redirect('/admin/login'); //重定向
				} else {
					req.admin_id = data[0]['admin_ID'];
					next();
				}
			});
		}
	}
});

//服务端-渲染login页面
router.get('/login', (req, res) => {
	let error_msg = '';
	res.render('login', {
		error_msg: error_msg
	});
});

//login-post接口
router.post('/login', (req, res) => {
	// delete req.session['admin_ID']
	// console.log(req.session)

	let {
		user,
		pass
	} = req.body; //经过bodyParser中间件解析
	let error_msg = '';

	//设置token
	function setToken(id) {
		let ID = common.uuidv4();
		let oDate = new Date();
		oDate.setMinutes(oDate.getMinutes() + 20); //现在时间基础上再加20分钟--token的过期时间
		let t = Math.floor(oDate.getTime() / 1000); //秒-取整

		//插入数据库id(token)
		req.db.query(`INSERT INTO admin_token_table (ID,admin_ID,expires) VALUES('${ID}','${id}',${t})`, (err) => {
			if (err) {
				res.sendStatus(500)
			} else {
				//cokkie插入token
				res.cookie('admin_token', ID);
				res.redirect('/admin/'); //重定向到admin根路径
			}
		});
	}


	//判断两次
	if (user == config.root_username) {
		if (common.md5(pass) == config.root_password) {
			console.log('超级管理员已登录');
			setToken(1);
		} else {
			showError('用户名或密码出现错误');
		}
	} else {
		//非超级管理员
		req.db.query(`SELECT * FROM admin_table WHERE username='${user}'`, (err, data) => {
			if (err) {
				showError('数据库出错');
			} else if (data.length <= 0) {
				showError('用户名或密码出现错误');
			} else {
				if (common.md5(pass) == data[0].password) {
					console.log('普通管理员登录成功');
					setToken(data[0].ID);
				} else {
					showError('用户名或密码出现错误');
				}
			}
		});
	}

	function showError(msg) {
		res.render('login', {
			error_msg: msg
		});
	}
});
/****************以上是后台token方式验证身份的*****************/



router.get('/', (req, res, next) => {
	res.redirect('/admin/house');
});

//house页面渲染
router.get('/:table', (req, res) => {
	const {table}=req.params;
	console.log(table)
	
	if(!config[`show_in_admin_${table}`]){
		res.sendStatus(404)
	}else{
		
	
	//分页
	const size = 10;
	let page = req.query['page'];

	if (!page) {
		page = 1;
	} else if (!/^[1-9]\d*$/.test(page)) {
		page = 1;
	}

	let start = (page - 1) * size;

	//搜索--1=1表示所有情况都要
	let like_seg = '1=1';
	if (req.query['keyWord']) {
		let keyWord = req.query['keyWord'];
		let keys = keyWord.split(/\s+/g);

		//['a','禾',...]=>["'%a%'","'%禾%'",...]
		like_seg = keys.map(item => `title LIKE '%${item}%'`).join(' OR ');
	}
	
	let aFildes=[];
	let aFildesJson={};
	config[`show_in_admin_${table}`].split(',').forEach(str=>{
		let [str_key,shr_name]=str.split(':');
		aFildes.push(str_key);
		aFildesJson[str_key]=shr_name;	
	})
	console.log(aFildes);
	console.log('------------------')
	console.log(aFildesJson);
	console.log('------------------')
	//获取数据
	req.db.query(`SELECT ${aFildes.join(',')} FROM ${table}_table WHERE ${like_seg} LIMIT ${start},${size}`, (err,
		res_data) => {
		if (err) {
			res.sendStatus(500),
				res.end();
		} else {

			req.db.query(`SELECT COUNT(*) AS c FROM ${table}_table WHERE ${like_seg}`, (err, data) => {
				if (err) {
					res.sendStatus(500);
					console.log(err)
				} else if (data.length == 0) {
					res.sendStatus(500);
				} else {
					res.render('index', {
						data: res_data,
						page_count: Math.ceil(data[0].c / size),
						cur_page: page,
						keyword: req.query['keyWord'],
						headerData:aFildesJson,
					}); //向上取整ceil
				}
			})
		}
	})
	}
})

//house-新增||修改-接口请求
router.post('/house', (req, res) => {
	//data_type:0新增：1修改
	let seave_type = req.body['seave_type'];
	//时间
	let sale_time = req.body['sale_time'] ? Math.floor(new Date(req.body['sale_time']).getTime() / 1000) : req.body[
		'sale_time'];
	let submit_time = req.body['submit_time'] ? Math.floor(new Date(req.body['submit_time']).getTime() / 1000) : req.body[
		'submit_time'];
	
	req.body['sale_time'] = sale_time;
	req.body['submit_time'] = submit_time;
	
	
	if (seave_type == '1') {
		const fileds = ['title', 'sub_title', 'position_main', 'position_second', 'ave_pice', 'area_min', 'area_max', 'tel',
			'sale_time', 'submit_time', 'building_type'
		];
		let arr = [];
		fileds.forEach(key => {
			arr.push(`${key}='${req.body[key]}'`);
		})

		//修改sql
		let up_sql = `UPDATE house_table SET ${arr.join(',')} WHERE ID='${req.body.old_id}'`;
		console.log(up_sql)
		req.db.query(up_sql, err => {
			if (err) {
				res.sendStatus(500);
			} else {
				res.redirect('/admin/house');
			}
		});
	} else {



		

		//文件-图片
		let aImgPath = [];
		let aImgRealPath = [];
		let aPropertyImgPath = [];
		let aPropertyImgRealPath = [];
		if (req.files.length > 0) {


			for (let i = 0; i < req.files.length; i++) {
				//获取源文件拓展名
				let ext = path.extname(req.files[i].originalname);
				let newName = req.files[i].path.replace(/\\/g, '\\\\') + ext;
				//files分类
				if (req.files[i].fieldname == 'main_img_path') {
					req.body['main_img_path'] = req.files[i].filename + ext;
					req.body['main_img_real_path'] = newName;
				} else if (req.files[i].fieldname == 'img_paths') {
					aImgPath.push(req.files[i].filename + ext);
					aImgRealPath.push(newName);
				} else if (req.files[i].fieldname == 'property_img_paths') {
					aPropertyImgPath.push(req.files[i].filename + ext);
					aPropertyImgRealPath.push(newName);
				}
			}
			//文件重命名
			let i = 0
			_next();

			function _next() {
				//获取源文件拓展名
				let ext = path.extname(req.files[i].originalname);
				let newName = req.files[i].path.replace(/\\/g, '\\\\') + ext;
				//重命名:fs.rename('旧文件.txt路径名', '新文件.txt路径名',(err)=>{})
				fs.rename(req.files[i].path, newName, (err) => {
					if (err) {
						res.sendStatus(500, 'rename error');
					} else {
						i++;
						if (i >= req.files.length) {

						} else {
							_next();
						}
					}
				});
			}

			req.body['img_paths'] = aImgPath.join(',');
			req.body['img_real_paths'] = aImgRealPath.join(',');

			req.body['property_img_paths'] = aPropertyImgPath.join(',');
			req.body['property_img_real_paths'] = aPropertyImgRealPath.join(',');
		}

		req.body['admin_ID'] = req.admin_id;
		req.body['ID'] = common.uuidv4();

		let arrField = [];
		let arrValue = [];

		for (let name in req.body) {
			if (name != 'seave_type' && name !='old_id') {
				arrField.push(name);
				arrValue.push(req.body[name]);
			}
		};

		//新增表单写入到数据库
		let sql = `INSERT INTO house_table (${arrField.join(',')}) VALUES('${arrValue.join("','")}')`;

		req.db.query(sql, err => {
			if (err) {
				res.sendStatus(500);
				console.log(err)
			} else {
				res.redirect('/admin/house');
			}
		})
	}
})

//删除/批量删除
router.get('/house/delete', (req, res) => {
	let ID = req.query['id'];
	let aID = ID.split(',')

	let b_err = false;
	aID.forEach(item => {
		if (!/^(\d|[a-f]){32}$/.test(item)) {
			b_err = true
		}
	})
	if (b_err) {
		res.sendStatus(400);
	} else {
		let id_index = 0;
		id_next();

		function id_next() {
			let ID = aID[id_index];
			//1、删除相关连的图片
			req.db.query(`SELECT * FROM house_table WHERE ID='${ID}'`, (err, data) => {
				if (err) {
					res.sendStatus(500);
					console.log(err);
				} else if (data.length <= 0) {
					res.sendStatus(404)
				} else {
					let arr = [];
					data[0]['main_img_real_path'] && arr.push(data[0]['main_img_real_path']);
					if (data[0]['img_real_paths']) {
						data[0]['img_real_paths'].split(',').forEach(item => {
							arr.push(item)
						});
					}
					if (data[0]['property_img_real_paths']) {
						data[0]['property_img_real_paths'].split(',').forEach(item => {
							arr.push(item)
						});
					}

					if (arr.length > 0) {
						let i = 0;
						_next();

						function _next() {
							fs.unlink(arr[i], err => {
								if (err) {
									res.sendStatus(500);
									console.log(err)
								} else {
									i++
									if (i >= arr.length) {
										//删除完成
										//2、删除数据本身

										req.db.query(`DELETE FROM house_table WHERE ID='${ID}'`, err => {
											if (err) {
												res.sendStatus(500);
												console.log(err)
											} else {
												id_index++;
												if (id_index >= aID.length) {
													res.redirect('/admin/house');
												} else {
													id_next()
												}
											}
										})
									} else {
										_next()
									}
								}
							})

						}
					} else {
						req.db.query(`DELETE FROM house_table WHERE ID='${ID}'`, err => {
							if (err) {
								res.sendStatus(500);
								console.log(err)
							} else {
								id_index++;
								if (id_index >= aID.length) {
									res.redirect('/admin/house');
								} else {
									id_next()
								}
							}
						})

					}

				}
			})
		}
	}
});

//获取详情
router.get('/house/get_data', (req, res) => {
	let id = req.query.id;
	if (!id) {
		res.sendStatus(404)
	} else if (!/^[\da-f]{32}$/.test(id)) {
		res.sendStatus(400);
	} else {
		req.db.query(`SELECT * FROM house_table WHERE ID='${id}'`, (err, data) => {
			if (err) {
				res.sendStatus(500)
			} else if (data.length <= 0) {
				res.sendStatus(500)
			} else {
				res.send(data[0]);
			}
		})
	}
})
