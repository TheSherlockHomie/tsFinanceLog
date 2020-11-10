const character: string = `mario`;
console.log(character);

const inputs = document.querySelectorAll(`input`);
console.log(inputs);

inputs.forEach((input) => {
	console.log(input);
});

let circumference = (radius: number): number => {
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

//set up a type alias
type stringOrNum = string | number;

const greet = (name: stringOrNum): void => {
	console.log(`Hello, ${name}!`);
};
greet(`KK`);
greet(12);

//Function signature (prototype in C++ speak)
let arithmetic: (a: number, b: number, c: string) => number;

//Now actually define the function
arithmetic = (a: number, b: number, operation: string) => {
	if (operation === "add") {
		return a + b;
	} else {
		return a - b;
	}
};
