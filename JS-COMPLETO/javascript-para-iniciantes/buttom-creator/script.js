const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);


const handleStyle = {
  backgroundColor: 'azul',
  element: btn,
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value + 'px';
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  texto(value){
    this.element.innerText = value;
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem';
  },
  color(value){
    this.element.style.color = value;
  },
};

function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  
  handleStyle[name](value);
}