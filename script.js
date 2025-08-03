function firstChar(text) {
  text = text.trim();
  if (text === "") {
    return '';
  }
  return text[0];
}

// const text = prompt("Enter text:");
alert(firstChar(text));
