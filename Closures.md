# Closures no React

Como funciona os Closures no react 


Exemplo

```js

function Comment(){
  const [likes, setLikes] = useStates(0)

  function addLike(){
    setLikes(likes + 1);
  }
}


//primeiro momento
Comment(props,0)
//segundo momento
Comment(props, 1);

```

Ou seja, se tiver funções semelhantes, ela irão executar no mesmo contexto ou seja, se duplicar o setLikes várias vezes e executar, tudo se tornarar uma única execução, fazendo com que seja adicionado só 1 em vez de 10 por exemplo.



Sempre que for atualizar uma informação e essa informação for depender do valor anterior, é sempre bom utilizar essa estruturação.

```js

//duplicando essa estruturação para salvar a quantidade de likes de 2 em 2
setLikeCount((state) =>{
  return state + 1
});

setLikeCount((state) =>{
  return state + 1
});

```