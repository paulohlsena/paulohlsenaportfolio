const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btnmenu')

menuDiv.addEventListener('click', mostrarmenu)

function mostrarmenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}