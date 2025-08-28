1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:  getElementById returns a single element if not found, it returns null, the getElementsByClassName method returns an HTMLCollection, and the querySelector finds the
first element and querySelectorAll find all elements that match a CSS selector.

2. How do you create and insert a new element into the DOM?
ans: First, use the document.createElement() method to create  a new HTML element, then add content or attributes to it then use appendChild() adds at the end inside a parent

3. What is Event Bubbling and how does it work?
ans: Event Bubbling is when we click on a child element, and the event first runs on that element, then automatically goes up to its parent.

4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation is adding an event listener to a parent element to listen to the parent and handle the child. it's useful for performance, dynamic elements and
cleaner code. It also saves memory.

5. What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() is used to stop the browser’s default action. stopPropagation() stops the event from bubbling up to parent elements.
