live link : https://nimostic.github.io/B12-A5-Emergency-Hotline/


1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById is used to select one element that has a specific ID. IDs are unique, so it always returns a single element.
getElementsByClassName selects all elements that share the same class and returns a live HTMLCollection. You can loop over it like an array.
querySelector can select the first element that matches any CSS selector (ID, class, or tag).
querySelectorAll selects all elements that match a CSS selector and returns a static NodeList.

2. How to create and insert a new element into the DOM:
You can create a new element using document.createElement() and then insert it using appendChild, prepend, or insertBefore.

3. What is Event Bubbling and how does it work:
Event bubbling is when an event triggered on an element bubbles up through its parent elements. For example, if you click a button inside a div, the click event first happens on the button, then the div, then the body, and so on up to the document.

4. What is Event Delegation in JavaScript? Why is it useful:
   
Event delegation is a technique where you attach a single event listener to a parent element instead of each child element. The parent handles events on its children using event.target.
Why it’s useful:
You don’t need many listeners for many elements.
It works for dynamically created elements added later.

5. Difference between preventDefault() and stopPropagation() methods:

preventDefault() stops the default action of an element. For example, stopping a form from submitting or a link from opening a new page.
stopPropagation() stops the event from bubbling (or capturing) up the DOM tree. It doesn’t prevent the default action, just stops the event from moving up.
