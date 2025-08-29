1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: Below is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
getElementById- returns one element with the given id
getElementsByClassName- returns a HTMLCollection of all items with that class.
querySelector-returns the first matching elements in css selector.
querySelectorAll-returns a static NodeList of all matching elements.

2.How do you create and insert a new element into the DOM?
Ans:
const newDiv = document.createElement("div");
newDiv.textContent = "New";
document.body.appendChild(newDiv);

3.What is Event Bubbling and how does it work?
Ans:When an event occurs on an element, it is modified one after the other by its ancestors (child → parent → root) unless stopped.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Attaching one event listener to a parent instead of multiple children; the event bubbles up, and the parent handles it.

Useful for performance and handling dynamically added new elements.


5.What is the difference between preventDefault() and stopPropagation() methods?
Ans.Below is the difference between preventDefault() and stopPropagation() methods:
preventDefault()-stops the browser’s default behavior for an event.
stopPropagation()-tops the event from moving up the DOM tree.