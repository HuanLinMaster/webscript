var copy = (content) => {
	const input = document.createElement('input');
	document.body.appendChild(input);
	input.value = content; // 复制到剪切板的内容
	input.select();
	if (document.execCommand) {
		document.execCommand('copy');
		document.body.removeChild(input);
		console.log('复制成功');
	} else {
		console.error('当前浏览器不支持copy');
		document.body.removeChild(input);
	}
};
var listenandspeak = () => {
	var FirstIndex;
	for (i in spoken_list) {
		FirstIndex = Number(i);
		break;
	}
	function appendanswer(content) {
		console.log(content);
	}
	$('#jsTotalScore').html('');
	var ques_list;
	appendanswer('一，模仿朗读');
	appendanswer('自己看着念就完了');
	appendanswer('二，信息获取');
	ques_list = spoken_list[FirstIndex + 1].ques_list;
	for (var key in ques_list) {
		if (ques_list[key].answer[0][0] != undefined)
			appendanswer(key + '.' + ques_list[key].answer[0][0]);
	}
	appendanswer('三，回答问题');
	ques_list = spoken_list[FirstIndex + 2].ques_list;
	for (var key in ques_list) {
		if (ques_list[key].answer[0][0] != undefined)
			appendanswer(key + '.' + ques_list[key].answer[0][0]);
	}
	appendanswer('四，信息转述');
	ques_list = spoken_list[FirstIndex + 3].answer[0][0];
	appendanswer(ques_list);
	appendanswer('五，询问信息');
	ques_list = spoken_list[FirstIndex + 4].ques_list;
	for (var key in ques_list) {
		if (ques_list[key].answer[0][0] != undefined)
			appendanswer(key + '.' + ques_list[key].answer[0][0]);
	}
	document.onkeydown = () => {
		if (window.event.keyCode == 9) {
			console.log('结束！');
			$('.stop-record-btn').click();
		}
	};
	setInterval(() => {
		try {
			$('.jump-btn')[0].click();
		} catch (e) {}
	}, 300);
};
var txitem = [],
	txkey = 0;
var tingxie = function () {
	txitem = [];
	txkey = 0;
	for (key in temp1.data[0].ques_item) {
		txitem.push(temp1.data[0].ques_item[key].text);
		console.log(temp1.data[0].ques_item[key].text);
		let tt = temp1.data[0].ques_item[key].text;
		// let sleepTime = key * 400;
		// setTimeout(() => {
		// 	$('.int_wrap input').val(tt);
		// 	setTimeout(() => {
		// 		$('.next_step')[0].click();
		// 	}, sleepTime + 200);
		// }, sleepTime);
	}
	document.onkeydown = function () {
		if (window.event.keyCode == 9) {
			window.copy(txitem[txkey]);
			txkey++;
		}
	};
};
var szmitem = [],
	szmkey = 0;
var shouzimu = (reduce = true) => {
	// reduce = reduce | true;
	for (key in temp1.data[0].question.qus_item) {
		let tmp = temp1.data[0].question.qus_item[key].answer
			.replaceAll('"', '')
			.replaceAll('[', '')
			.replaceAll(']', '');
		if (reduce) {
			tmp = tmp.substr(1);
			console.log(22);
		}
		console.log(tmp);
		szmitem.push(tmp);
	}
	document.onkeydown = function () {
		if (window.event.keyCode == 9) {
			window.copy(szmitem[szmkey]);
			szmkey++;
		}
	};
};
var customLogo = {
	base64ToBlob(base64) {
		let urlData = base64.dataURL;
		let type = base64.type;
		let bytes = null;
		if (urlData.split(',').length > 1) {
			bytes = window.atob(urlData.split(',')[1]);
		} else {
			bytes = window.atob(urlData);
		}
		let ab = new ArrayBuffer(bytes.length);
		let ia = new Uint8Array(ab);
		for (let i = 0; i < bytes.length; i++) {
			ia[i] = bytes.charCodeAt(i);
		}
		return new Blob([ab], { type: type });
	},
	sendLogo(dataURL, type) {
		var base64data = {
			dataURL: dataURL,
			type: type,
		};
		var form = $(
			'<form id="addForm">\n' +
				'    <input type="text" name="fileType" value="1"/>\n' +
				'</form>'
		);
		var param = new FormData(form[0]);

		// var blob = dataURItoBlob(src);
		var blob1 = base64ToBlob(base64data);
		var blob2 = base64ToBlob(base64data);
		var blob3 = base64ToBlob(base64data);

		param.append('source_from', 'webpage_upload'); //在formdata加入需要的参数
		// param.append('file', blob, "--image" + new Date().getTime() + "client_signature.png");
		param.append('130', blob1, '130');
		param.append('60', blob2, '60');
		param.append('40', blob3, '40');

		$.ajax({
			url: url,
			type: 'POST',
			data: param,
			processData: false,
			dataType: 'json',
			cache: false,
			contentType: false,
			success: function (response) {
				console.log('success');
			},
		});
	},
};
var read_words = () => {
	setInterval(() => {
		console.log($('.kouyu-word span')[0].innerHTML);
	}, 200);
};
