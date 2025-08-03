function firstChar(text) {
  text = text.trim();
  return text === '' ? '' : text[0];
}

const input = prompt("Enter text:");
alert(firstChar(input));
