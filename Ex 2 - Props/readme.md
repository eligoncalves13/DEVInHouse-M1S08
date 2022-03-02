# Ex 2 - Props

O que são as props de um componente no ReactJs? Cite um exemplo de declaração de componente com suas props.

_____

**Props** significa propriedades, são argumentos passados para os componentes de React, por meio de atributos HTML. 

Exemplo:

```
//JSX
function Hello(props) {
  return <div>Hello, {props.who}!</div>;
}

//Render
const element = <Hello who="Earth" />
ReactDOM.render(element, document.getElementById('root'));
```

A `props` é passada como argumento do componente e o mesmo retorna com a propriedade de forma dinâmica. 