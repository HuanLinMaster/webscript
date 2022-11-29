var course_num = document.getElementsByClassName('course-item').length;
// 开始刷
document.getElementsByClassName('button ant-btn ant-btn-primary')[0].click();

(() => {
	let buttons = document.getElementsByClassName('ant-btn ant-btn-link');
	for (const button of buttons) {
		if (button.innerHTML == '<span>开始学习</span>') {
			button.click();
			break;
		}
	}
})();

(()=>{
    let buttons = document.getElementsByClassName(
        'btn ant-btn ant-btn-primary ant-btn-sm ant-btn-background-ghost'
    );
})()
