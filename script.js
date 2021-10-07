function makeUpper() {
    document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
}

function makeLower() {
  document.getElementById("text").value = document.getElementById("text").value.toLowerCase();
}

function makeProper() {
  let strArray = document.getElementById("text").value.split(" ");
  let current;
  let newStr = "";
  for (let i = 0; i < strArray.length; i++) {
      current = strArray[i].length > 1 ? strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1) : strArray[i].toUpperCase();
      newStr += current + " ";
  }
  document.getElementById("text").value = newStr.trim();
}

function makeSentence() {
  let text = document.getElementById("text").value.toLowerCase();
  document.getElementById("text").value = sentenceCase(text);

  function sentenceCase(str) {
      let n = str.split(".");
      let vFinal = "";
      for (let i = 0; i < n.length; i++) {
          let spacePut = "";
          let spaceCount = n[i].replace(/^(\s*).*$/, "$1").length;
          n[i] = n[i].replace(/^\s+/, "");
          let newString = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
          for (let j = 0; j < spaceCount; j++) {
              spacePut = spacePut + " ";
          }
          vFinal = vFinal + spacePut + newString + ".";
      }
      vFinal = vFinal.substring(0, vFinal.length - 1);
      return vFinal;
  }
}

function saveFile() {
  function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
    download("text.txt", document.getElementById("text").value);

}
