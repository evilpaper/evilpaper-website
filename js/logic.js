(function() {
  let i = 0;
  let speed = 50;
  let element = document.querySelector(".typing");
  let text = element.innerHTML;
  element.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
})();
