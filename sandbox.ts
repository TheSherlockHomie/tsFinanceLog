const character: string = `mario`;
console.log(character);

const inputs = document.querySelectorAll(`input`);
console.log(inputs);

inputs.forEach((input) => {
	console.log(input);
});

let circumference = (radius: number) => {
	return 2 * radius * Math.PI;
};
console.log(circumference(2.5));

let mixed: (string | number)[] = [`aa`, 10, `bb`, 4];
mixed.push(`3`);
mixed = [`3`, `human`, 32];

let randomObject: {
	type: string;
	name: string;
	color: boolean;
} = {
	type: `yay?`,
	name: `not applicable`,
	color: false,
};
console.log(randomObject);
