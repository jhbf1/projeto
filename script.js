function toggleTheme() {
  const body = document.body
  body.classList.toggle("dark-theme")
  body.classList.toggle("light-theme")
  if (HTML.classList.contains("light")) {
    HTML.classList.remove("light")
  } else {
    HTML.classList.add("light")
  }
  Image.setattribute("src", ".assets/images/avatar-light.png")
}
