'use strict'

function getNum(arr) {
	let str;

	arr.splice(0, 1, '+380 (' + arr[0]);
	arr.splice(1, 1, arr[1] + ') ');
	arr.splice(4, 1, arr[4] + '-');
	arr.splice(6, 1, arr[6] + '-');

	str = arr.join('');

	return str;
}

document.body.addEventListener('click', (e) => {
	let target = e.target,
		arr = [];

	if (target && target.classList.contains('btn')) {

		let phone = document.querySelector('.phone').value,
			res = document.querySelector('.res');

		console.log(phone);

		if (phone != '') {
			arr = phone.split('');
			res.value = getNum(arr);
		} else {
			res.value = 'Введите номер';
		}
	}

});