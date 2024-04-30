#Difference Between ES05 Functions and ES06 Functions

| Feature              | ES5 Functions                                      | ES6 Functions (Arrow Functions)                                |
|----------------------|-----------------------------------------------------|-----------------------------------------------------------------|
| Syntax               | Function declaration: function functionName() {}    | Arrow function: const functionName = () => {}                 |
| Arguments Object     | Has access to the `arguments` object               | Does not have its own `arguments` object                      |
| New Keyword          | Can be used with the `new` keyword for object creation | Cannot be used with `new` to create objects                   |
| Use of `arguments`   | Can access function arguments via `arguments`       | Does not have its own `arguments` object                      |
| Binding of `this`    | `this` value determined by how the function is called | `this` value determined by surrounding scope    |
| Implicit Return      | Requires explicit `return` statement                | Implicit return if function body is a single expression       |
| Callback Functions   | Can be used as callback functions                   | Can be used as callback functions                             |
