const hamburgerMenu = document.getElementById('hamburger-menu');
const navigation = document.getElementById('navigation');

hamburgerMenu.addEventListener('click', function() {
  navigation.classList.toggle('active');
});
