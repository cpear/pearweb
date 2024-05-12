function expandNav(element) {
  let currentDisplaysetting = document.getElementById(element).style.display;

  if (currentDisplaysetting === 'flex') {
    document.getElementById(element).style.display = 'none';
  }
  else{
    document.getElementById(element).style.display = 'flex';
  }

}
