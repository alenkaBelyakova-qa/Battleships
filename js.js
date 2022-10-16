var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var checkNum = [];
var hitsLeft = 3;
var mistakes = 0;
var isSunk = false;

while(!isSunk) {
	let guess = prompt("Привет! Это мини-игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-х палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):", "");
	if (guess == null) {
		alert("Жаль,что ты покинул игру :(");
		break;
	} else if (isNaN(guess) || guess < 0 || guess > 6) {
		alert("Ошибка ввода! Нужно ввести число от 0 до 6");
	} else if (guess == location1 || guess == location2 || guess == location3) {
		if (checkNum.includes(guess)) {
			alert("Ты уже отгадал это число, попробуй снова");
		} else {
			checkNum.push(guess);
			hitsLeft--;
			if (hitsLeft != 0) {
				alert("Поздравляю, ты попал, но нужно ещё попаданий - " + hitsLeft + "!");
			} else {
				isSunk = true;
			}
		}
	} else {
		alert("Ты не попал, попробуй ещё раз :|");
		mistakes++;
	}
		if (isSunk) alert("Поздравляю, ты потопил корабль, твоя оценка " + (10 - mistakes) + "/10!");
}