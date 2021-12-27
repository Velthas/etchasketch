# Etch A Sketch

## Description

<p>Etch-A-Sketch is meant to display a pixel canvas for users to draw to their heart's content. As of now, it allows users to draw with a color of their own choosing, make it so their pointers leave a rainbow trail or incrementally darken each pixel until it becomes black.</p>
<p>This project was made to consolidate my knowledge of Event Listeners and DOM Manipulation, and was also a chance to add a few extra tools to my toolbox including Media Queries and Media Query Lists for responsive design. The following is not only meant to explain the project, but first and foremost as self reflection on my logic processes and the tools I have used.</p>

## Design Structure

<p>Etch A Sketch is a front-end project built using HTML, CSS and Javascript. Font used for the title is Bebas Neue as found on Google Fonts. The project's core files are:</p>
- **index.html**: the only webpage of the project, it houses the canvas container that is populated through javascript as well as buttons, range sliders and color pickers. These last two I had never worked with before, so I was glad to experiment and find just how useful they were for a project such as this.
- **style.css**: the stylesheet for the project. I initially attempted to style the container divs inside the canvas with a display of inline-block. While they did wrap as expected, numbers with decimals caused some pockets of empty space to appear between some pixels, so I quickly turned to the flexbox for its stretch property. This solved the issue. <br> As mentioned earlier, I attempted using media queries and flexbox came particularly in handy when rearranging the layout of the page for mobile: if computer had settings displayed side by side due to a property of flex-direction: row, changing it to column-reverse allowed me to place them vertically for a more pleasing visual effect almost effortlessly. 
- **script.js** : the most involved part of the project was the script. My approach was to have different buttons 'toggle' different drawing styles. What a click on these buttons will do is trigger the colorCanvas() function that applies a different 'mouse enter' event listener to each div on the canvas, depending on what button is clicked. The function 'createCanvas' was also built to work dinamically using a series of changeable variables, such as the size of the canvas itself and the size of each block populating it.

## Difficulties

