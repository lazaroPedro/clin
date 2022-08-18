/*console.log('Hello!');

const activeClass = 'active';
const list = document.querySelectorAll('li.navItem');

addEventListener(click, document.i)*/

const list = document.querySelectorAll('.navItem')
function activeLink(){
  list.forEach((item) => 
  item.classList.remove('active'))
  this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click', activeLink))