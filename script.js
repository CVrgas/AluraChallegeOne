const textIn = document.getElementById("in");
const textOut = document.getElementById("out");
const toEncrypt = document.getElementById("encrypt_select");
const toDecrypt = document.getElementById("decrypt_select");

textOut.addEventListener("click", () => {
	navigator.clipboard.writeText(textOut.value);
	textOut.classList.add("success");
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
	if (!validate(textIn.value)) {
		return;
	}
	if (is_encrypt) {
		textOut.value = encrypt(textIn.value);
		return;
	}
	textOut.value = decrypt(textIn.value);
}

function validate(text) {
	const regex = /[^a-z \n]/g;

	// match return no matching element ("!", "0-9"...).
	if (text.match(regex) == null) {
		return true;
	}

	//if return any element is not valid.
	textOut.value = `input no valido: "${text.match(regex).join(", ")}" `;
	textOut.classList.add("error");
	setTimeout(() => {
		textOut.classList.remove("error");
	}, 2000);

	return false;
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
