# Ex 3 - Renderização condicional

Do que se trata a renderização condicional? Cite um exemplo de componente renderizado condicionalmente ?

_______

A **renderização condicional** mostra ou esconde algum elemento do componente a ser renderizado conforme alguma condição, para isso utiliza o IF com algumas abordagens diferentes. No caso de utilizar apenas o IF a condição se restringe ao bloco total do componente. 

*Exemplo*:

```
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

ReactDOM.render(
  <Goal isGoal={true} />,
  document.getElementById('root')
);
```

Para incorporar a expressão em *JSX*, utiliza o IF com o operador lógico *&&* e encapsula em chaves. Nesse caso as expressões são interpretadas, e caso todas sejam TRUE, retorna a última. 

*Exemplo*: 

```
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
ReactDOM.render(
  <Garage cars={cars} />,
  document.getElementById('root')
);
```

Podemos também utilizar ternários quando dois blocos se alteram dado uma certa condição. 

Exemplo:

```
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);
```

