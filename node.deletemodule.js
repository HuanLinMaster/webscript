const fs = require('fs');

const PATH = (process.argv[2] || './') == '.' ? './' : process.argv[2] || './';
// console.log(PATH);
function delfn(p) {
	if (fs.existsSync(p)) {
		//如果路径正确
		var list = fs.readdirSync(p); //获取该目录下资源列表
		list.forEach((v, i) => {
			//遍历该资源列表
			var path = p + '/' + v; //拼接新的路径
			var stats = fs.statSync(path); //获取每一个资源的信息
			if (stats.isFile()) {
				//如果是文件  删除
				fs.unlinkSync(path);
			} else {
				//如果是目录  调用自己
				delfn(path);
			}
		});
		fs.rmdirSync(p); //删除空目录
	}
}
const findNodeMoudle = (path) => {
	var dirs = fs.readdirSync(path);
	for (const dir of dirs) {
		try {
			let filestat = fs.lstatSync(path + '/' + dir);
			if (filestat.isFile()) continue;
		} catch (e) {
			console.log(path + '/' + dir, '无法判定');
			continue;
		}
		if (dir == 'node_modules') {
			console.log(path + '/' + dir);
			setInterval(() => {
				delfn(path + '/' + dir);
			}, 0);
		} else {
			findNodeMoudle(path + '/' + dir);
		}
	}
};

findNodeMoudle(PATH);
