# Project 1 - Reloading Page

## CSS

- &nbsp; is for non-breaking spaces
- box-sizing: border-box; is for the border-box model: the box is the size of the content plus the size of the border
- overflow: hidden; is for the overflow: hidden model: the content is not visible when the box is too small
- position: relative; is for the position: relative model: the content is positioned relatively to the box
- box-shadow: 0 0 10px rgba(0,0,0,0.5); is for the box-shadow model: 0 for the horizontal offset, 0 for the vertical offset, 10 for the blur radius, and 0.5 for the opacity
- object-fit: cover; is for the object-fit model: the image is scaled to cover the box
- background-image: linear-gradient(to right, #f093fb 0%, #f5576c 100%); is for the background-image model: a linear gradient from #f093fb to #f5576c
- background-size: 200% 200%; is for the background-size model: the image is scaled to 200% of the box size
- animation: slide 10s infinite; is for the animation model: slide is the name of the animation, 10s is the duration, and infinite is the repeat count (infinite means repeat forever)
- @keyframes slide { is for the keyframes model: @keyframes is a preprocessor directive that defines a keyframe animation
- 0% { is for the 0% keyframe: the animation starts at 0%
- transform: translateX(-100%); is for the transform property: the image is translated to the left by 100%
- } is for the } keyframe: the animation ends at 100%

## JavaScript

# Method to access elements from HTML DOM:

- document.getElementById(id),
- document.getElementsByClassName(class),
- document.getElementsByTagName(tag)
- document.querySelector(selector),
- document.querySelectorAll(selector) // selector includes the tag name, id, and class

- getElementById is for the getElementById method: it returns the element with the given id
- querySelector is for the querySelector method: it returns the first element that matches the given selector

- .innerHTML is for the innerHTML property: it returns the HTML content of the element
- .innerText is for the innerText property: it returns the text content of the element

- forEach is for the forEach method: it loops through the array and executes the given function for each element
- forEach Method calls a function for each element in an array.
- array.forEach(function(currentValue, index, arr), thisValue)

# classList

- is for the classList property: it returns the class list of the element as an array of strings
- add is for the add method: it adds a class to the element
- remove is for the remove method: it removes a class from the element
- toggle is for the toggle method: it toggles the class of the element
- contains is for the contains method: it returns true if the element contains the given class
- item is for the item method: it returns the class at the given index
- length is for the length property: it returns the number of classes in the element

- setTimeout is for the setTimeout method: it executes the given function after the given time (in milliseconds)
- setTimeout(function, time) : function is the function to be executed, time is the time in milliseconds
