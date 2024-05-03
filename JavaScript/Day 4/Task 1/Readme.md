# Diffirence between static propertities and instance methods (Mozilla Developer Network)

| Feature            | Static Properties                  | Instance Methods                       |
|--------------------|------------------------------------|----------------------------------------|
| Definition         | Belongs to the class itself        | Belongs to individual instances        |
| Access             | Accessed using the class name      | Accessed using an instance of the class|
| Shared Value       | Shared among all instances         | Unique to each instance                |
| Usage              | Ideal for storing shared data      | Used to manipulate instance-specific data|
| Example            | `MyClass.staticProperty = value;`  | `let obj = new MyClass(); obj.instanceMethod();` |
| Syntax             | `static propertyName = value;`     | `methodName() { // method body }`      |


## Static properties and Methods of Array:
### Static Propertites
1. Array[@@species]
    Returns the Array constructor.

### Static Methods
1. Array.from()
    Creates a new Array instance from an iterable or array-like object.

2. Array.fromAsync()
    Creates a new Array instance from an async iterable, iterable, or array-like object.

3. Array.isArray()
    Returns true if the argument is an array, or false otherwise.

4. Array.of()
    Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

## Instance Properties and Methods of Array:
### Instance Properties
1. Instance properties
    These properties are defined on Array.prototype and shared by all Array instances.

2. Array.prototype.constructor
    The constructor function that created the instance object. For Array instances, the initial value is the Array constructor.

#### These properties are own properties of each Array instance.

1. length
    Reflects the number of elements in an array.

### Instance methods

1. Array.prototype.at()
Returns the array item at the given index. Accepts negative integers, which count back from the last item.

2. Array.prototype.find()
Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

3. Array.prototype.findIndex()
Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

4. Array.prototype.forEach()
Calls a function for each element in the calling array.

5. Array.prototype.map()
Returns a new array containing the results of invoking a function on every element in the calling array.

6. Array.prototype.pop()
Removes the last element from an array and returns that element.

7. Array.prototype.push()
Adds one or more elements to the end of an array, and returns the new length of the array.

8. Array.prototype.sort()
Sorts the elements of an array in place and returns the array.