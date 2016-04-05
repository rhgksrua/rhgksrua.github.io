---
layout: post
title: Arrow function and bind
css:
- post.css
---

# {{ page.title }}

ES2015 has this new way of writing functions with arrows.

```javascript
const func = (foo) => foo > 1
```

The above code checks if `foo` is greater than 1.

Arrow functions are more useful in lexical scoping.

Ex:

```javascript
// bind()
class SomeClass {
    constructor() {
        this.foo = 'bar';
    }
    say() {
        document.addEventListener("click", function(event) {
            console.log(this.foo);
        }.bind(this));
    }
}

// arrow function
class SomeClass2 {
    constructor() {
        this.foo = 'bar';
    }
    say() {
        document.addEventListener("click", (event) => {
            console.log(this.foo);
        });
    }
}
```

The first class needs to bind `this` to the callback function, while the second class does not
because arrow function takes `this` from where it is called.  `this` in side `SomeClass2` points to
`SomeClass2`.

However, one restriction with arrow function is when it is used as a unnamed function.

```javascript

function func(e) {
    console.log(this.test);
}

const func2 = (e) => {
    console.log(this.test);
}


class SomeClass {
    constructor() {
        this.foo = 'bar';
    }
    say() {
        document.addEventListener("click", func.bind(this));
    }
}

// arrow function
class SomeClass2 {
    constructor() {
        this.foo = 'bar';
    }
    say() {
        document.addEventListener("click", func2);
    }
}

```

In this case calling `say()` in `SomeClass2` will return an error. The `this` in arrow function cannot be overwritten. `this` will always be based on the location from where it is assigned.
