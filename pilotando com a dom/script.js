const element = document.querySelector("h1");
const input = document.querySelector("input[type=text]");
const body = document.querySelector("body");

{
  element.textContent = "Fala Dev!";
  console.log(element.textContent);

  element.innerText = "Javascript é animal!";
  console.log(element.innerText);

  element.innerHTML = "Vamos aprender <em>React</em>!";

  input.value = "Isso é um input";
  console.log(input.value);

  element.setAttribute("id", "title");
  console.log(element.getAttribute("id"));

  element.removeAttribute("id");

  console.log(element);

  console.log(element.getAttribute("class"));

  element.removeAttribute("class");

  console.log(element.getAttribute("class"));

  element.setAttribute("class", "title header bold");
}

{
  console.log(body.style.backgroundColor);
  body.style.backgroundColor = "lightBlue";
  console.log(body.style.backgroundColor);

  const em = document.querySelector("em");
  em.classList.add("active", "otherClass");
  em.classList.remove("active", "otherClass");
  em.classList.toggle("active");
}
