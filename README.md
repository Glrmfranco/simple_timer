# calculo__IMC

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### Screenshot

![](/images/Screenshot 2022-04-11 170024.png)

### Links

- Live Site URL: [Link](https://glrmfranco.github.io/simple_timer/)

## My process

### Built with

- Semantic HTML5 markup

- CSS custom properties

- JavaScript
  

### What I learned

Capture event by target using :

```document.addEventListener('click', (event) => {
document.addEventListener('click', (event) => {
    const et = event.target
    }
```

clearInterval and setInterval for timing :

```
function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = getHora(segundos)
    }, 1000);
}
```



## Author

- Github - [Guilherme](https://github.com/Glrmfranco)
