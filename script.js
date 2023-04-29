const textIn = document.getElementById("in");
const textOut = document.getElementById("out");
const label = document.getElementById("label");
const swither = document.getElementById("check_type");
const toEncrypt = document.getElementById("encrypt_select");
const toDecrypt = document.getElementById("decrypt_select");

label.addEventListener("click", () => {
	navigator.clipboard.writeText(textOut.value);
	label.classList.add("success");
	setTimeout(() => {
		label.classList.remove("success");
	}, 1000);
});

toEncrypt.addEventListener("click", () => {
	//enable encrypt
	toEncrypt.classList.replace("s_disabled", "s_enabled");
	//Disable Decrypt
	toDecrypt.classList.replace("s_enabled", "s_disabled");
	// change is encrypt
	is_encrypt = true;
});
toDecrypt.addEventListener("click", () => {
	//enable decrypt
	toDecrypt.classList.replace("s_disabled", "s_enabled");
	//Disable encrypt
	toEncrypt.classList.replace("s_enabled", "s_disabled");
	// change is encrypt
	is_encrypt = false;
});

let is_encrypt = true;
function submit() {
	const invalid_char = validate(textIn.value);
	if (invalid_char.length >= 1) {
		textOut.value = `input no valido: "${invalid_char.join(", ")}" `;
		textOut.classList.add("error");
		setTimeout(() => {
			textOut.classList.remove("error");
		}, 2000);
		return;
	}
	if (is_encrypt) {
		textOut.value = encrypt(textIn.value);
		return;
	}
	textOut.value = decrypt(textIn.value);
}

function _switch() {
	is_encrypt = !is_encrypt;
	const encrypt_ = document.getElementById("encrypt_");
	const decrypt_ = document.getElementById("decrypt_");
	if (is_encrypt) {
		encrypt_.style.color = "rgb(43, 106, 224)";
		decrypt_.style.color = "rgba(43, 106, 224, 0.3)";
		return;
	}
	encrypt_.style.color = "rgba(43, 106, 224, 0.3)";
	decrypt_.style.color = "rgb(43, 106, 224)";
}

function validate(text) {
	const spReg = /[a-z \n]/;
	const split = text.split(spReg).filter((x) => x != "");
	return split;
}

function encrypt(text) {
	return text
		.replaceAll("e", "enter")
		.replaceAll("i", "imes")
		.replaceAll("a", "ai")
		.replaceAll("o", "ober")
		.replaceAll("u", "ufat");
}

function decrypt(text) {
	return text
		.replaceAll("enter", "e")
		.replaceAll("imes", "i")
		.replaceAll("ai", "a")
		.replaceAll("ober", "o")
		.replaceAll("ufat", "u");
}
