```js
const { Stack, Map, List, OrderedMap, Set, OrderedSet, Record, Range, Repeat, Iterable, Seq, fromJS, is } = require('immutable')

// Range [ 0...Infinity ]
let rg = Range()

// Range [ 5...Infinity ]
rg = Range(5)

// Range [ 1...10 ]
rg = Range(1, 10)

// class List<T> extends Collection.Indexed<T>

// List []
let l = List()

// List [ 1, 2, 3 ]
l = List([1, 2, 3])

// List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
l = List(rg)

// 1
l.first()

// 9
l.last()

// List [ 2, 3, 4, 5, 6, 7, 8, 9 ]
l.rest()

// List [ 1, "x", 3, 4, 5, 6, 7, 8, 9 ]
l.set(1, 'x')

// List [ 1, 2, 3, 5, 6, 7, 8, 9 ]
l.delete(3)

// List [ 1, 3, 4, 5, 6, 7, 8, 9 ]
l.set(1, 'x').delete(1)

// List [ "y", 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
l.insert(0, 'y')

// List [ 1, 2, 3, "y", 5, 6, 7, 8, 9 ]
l.set(3, 'x').delete(3).insert(3, 'y')

// Repeat [ 7 Infinity times ]
let rp = Repeat(7)

// List [ 1,7, 2,7, 3,7, 4,7, 5,7, 6,7, 7,7, 8,7, 9,7 ]
l.zip(rp)

// List [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
l.push(10)

// List [ 1, 2, 3, 4, 5, 6, 7, 8 ]
l.pop()

// List [ 2, 3, 4, 5, 6, 7, 8, 9 ]
l.shift()

// List [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
l.unshift(0)

// List [ "a", "b", "c" ]
let l2 = List(['a', 'b', 'c'])

// List [ "a", "b", "c", 4, 5, 6, 7, 8, 9 ]
l.merge(l2)

// List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
l2.merge(l)

// List [ 4, 5, 6 ]
let l3 = List([4, 5, 6])

// List [ "a", "b", "c" ]
l3.merge(l2)

// List [ 4, 5, 6 ]
l2.merge(l3)

// List [ 5, 5, 5, 6, 6, 6, 7, 7 ]
l = List([5, 5, 5, 6, 6, 6, 7, 7])

// List []
l.clear()

// Set { 5, 6, 7 }
l.toSet()

Iterable.isIterable(l2) // true
Iterable.isKeyed(l2)    // false
Iterable.isIndexed(l2)  // true
Iterable.isOrdered(l2)  // true

// Set {}
let s = Set()

// Set { 6 }
s = s.add(6)

// Set { 6 }
s = s.add(6)

// Set { 6, 7 }
s = s.add(7)

// Set { 6, 7, 8 }
s = s.add(8)

// Set { 4, 5, 6 }
let s2 = l3.toSet()

// Set { 4, 5, 6, 7, 8 }
s2.union(s)

// Set { 4, 5, 6, 7, 8 }
s.union(s2)

// Set { 6 }
s2.intersect(s)

// Set { 6 }
s.intersect(s2)

// Set { 4, 5 }
s2.subtract(s)

// Set { 8, 7 }
s.subtract(s2)

// Set {}
s.clear()

// Set { 4, 5, 6, 7 }
let s3 = Set.of(4, 5, 6, 6, 7)

// Set { 4, 5, 6, 7 }
let s4 = Set.of(4, 5, 6, 7, 7)

// false
is(s, s2)

// true
is(s3, s4)

// false
Object.is(s3, s4)

// false
s3 == s4

// false
s3 === s4

// true
s3.hashCode() === s4.hashCode()

// undefined
s3.get(2)

// 5
s3.get(5)

// false
s3.includes(0)
s3.contains(0)
s3.has(0)

// true
s3.includes(6)
s3.contains(6)
s3.has(6)

Iterable.isIterable(s3) // true
Iterable.isKeyed(s3)    // false
Iterable.isIndexed(s3)  // false
Iterable.isOrdered(s3)  // false


var m1 = Map({a:1, b:1, c:1})
var m2 = Map({a:1, b:1, c:1})
assert(m1 !== m2)
assert(Object.is(m1, m2) === false)

assert(is(m1, m2) === true)

l = Repeat(7, 7).toList() // List [ 7, 7, 7, 7, 7, 7, 7 ]
l.map((x,i) => i) // List [ 0, 1, 2, 3, 4, 5, 6 ]
let s = l.toSet()

```
