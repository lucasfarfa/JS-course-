'use strict';

/** Objects allows us to group values or other objects to build more complex structures.
 * 
 * Data sets: arrays,  allows us to store sequences of values, is written as a list of values.
 * 
 * let list = [2, 3, 4, 5, 6, 9, ...];
 * console.log(list[0]); -> 2
 * console.log(list[2]); -> 4
 * The first index of the array is zero. So the first element is retrieved with list[0]
 * 
 * Properties: You can access to a property in JS with a dot a with a squarte backets.
 * value.x or value[x] --> access property on value.
 * When using a dot, the word after de dot is the literal name of the property.
 * When using [], the expression between the [] is evaluated to get the property name
 * 
 * value.x fetches the property of value name 'x' and value[x] tries to evaluate the
 * expression x and uses the result as the poroperty name.
 * 
 * ex -> array.lenght or array["length"]. The dot way is more easier than de [] option
 * 
 */

/** Methods: properties that contain functions
 * 
 * you can always check all arrays methods online
 * 
 * let sequence = [1, 2, 3];
 * sequence.push(4);
 * sequence.push(5);
 * console.log(sequence); -> [1, 2, 3, 4, 5]
 * console.log(sequence.pop()); -> 5
 * console.log(sequence); -> [1, 2, 3, 4]
 * 
 * The push method adds values to the end of an array, and the pop methood does the oposite removing the last value in the array and
 * returning it.
 */

/** Objects: 
 * Values of the type object are arbitrary collections of properties.
 * Sintax: 
 *  let object = {
 *      squirrel: false,
 *      events: ["work", "pizza", "running"]
 *  };
 * console.log(object.squirrel); -> false
 * You can create your own properties.
 * 
 * Inside the braces, there is a list of properties separated by commas. Each property has a name follower by a colon and value. 
 * Properties whose names arent valid binding names or valid numers have to be quoted. ex
 *      work: "Went to work",
 *      "touched tree": "Hola ka ce"
 * 
 * Reading a property that does not exist will return you the value "undefined"
 */

let anObject = {left: 1, right: 2};
console.log(anObject.left); // -> 1

// Delete operator removes the named property from the object. 
delete anObject.left;
console.log(anObject.left); // -> undefined

console.log("left" in anObject); // -> false
console.log("right" in anObject); // -> true

/** The binary @in operator tells you wheter than object has a property with that name */

/** find out what properties an object has. 
 * Give and object and it returns an array of strings.
*/
console.log(Object.keys({x: 0, y: 0, z: 2})); // -> ["x", "y", "z"]

/** OBJECT ASSING copies all properties from one obj into another */
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA); // -> {a: 1, b: 3, c: 4}

/** MUTABILITY:
 * 
 * let obj1 = {value: 10};
 * let obj2 = obj1;
 * let obj3 = {value: 10};
 * 
 * console.log( obj1 == obj2); -> true
 * console.log( obj1 == obj3); -> false
 * 
 * obj1.value = 15;
 * console.log(obj2.value); -> 15
 * console.log(obj3.value); -> 10
 * 
 * The obj1 an obj2 bindings grasp the same object, wcich is why changing obj1 also changes obj2. They are
 * said to have the same identity. The binding object3 points to a different object, which initially contains the 
 * same properties as obj1 but lives a separate life.
 * But, you cannot change a const obj.
 * 
 * const score = {visitors: 0, home: 0}; --> ok
 * 
 * // not allowed.
 * score.visitors = 1;
 * score = {visitors: 1, home: 1};
 */

for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}

// Thhe word of after a viarable definition will loop over the elemtes of the value given after of.
// This works not only for arrays but also for stirngs and some data structures.

/** shift and unshitf
 * 
 * adding and removing things at the star of an array (the best way)
 * 
 ** indefOf(); -> sear for a speceifc value, returns the index at wich value was found or -1 if it wasnt fount.
 ** use lastIndefOf to sear at the end.
 * Both takes an optional second argument that indicates where to star searching.
 * 
 * 
 ** slie -> takes start and end inidices and returns an array that has only the elementes between them.
 *
 ** concat -> concat 2 arrays. 
 */

 /** STRING METHODS.
  * 
  * trim -> removes whitespaces from the star and end of a tring 
  * "      okay   \n  ".trim(); -> okay
  * 
  * padStart -> adds a pad to a tring at the start.
  * ex: String(6).padStart(3, "0"); // number of pad, char
  * ->006
  * 
  * repeat-> repeats string.
  * split and join -> splits or join strings
  */

 /** MATH OBJETC -> A LOT OF PROPERTIES, random max min cos sin PI floor ceil */

 /** DESTRUCTURING
  * 
  * let {name} = {name: "lucas", age: 20};
  * console.log(name); // te traes del obj el atributo name
  */