# Etch A Sketch

## Description

<p>Etch-A-Sketch is meant to display a pixel canvas for users to draw to their heart's content. As of now, it allows users to draw with a color of their own choosing, make it so their pointers leave a rainbow trail or incrementally darken each pixel until it becomes black.</p>
<p>This project was made to consolidate my knowledge of Event Listeners and DOM Manipulation, and was also a chance to add a few extra tools to my toolbox including Media Queries and Media Query Lists for responsive design. The following is not only meant to explain the project, but first and foremost as self reflection on my logic processes and the tools I have used.</p>

## Design Structure

Etch A Sketch is a front-end project built using HTML, CSS and Javascript. Font used for the title is Bebas Neue as found on Google Fonts. The project's core files are:

- **index.html**: the only webpage of the project, it houses the canvas container that is populated through javascript as well as buttons, range sliders and color pickers. These last two I had never worked with before, so I was glad to experiment and find just how useful they were for a project such as this.
- **style.css**: the stylesheet for the project. I initially attempted to style the container divs inside the canvas with a display of inline-block. While they did wrap as expected, numbers with decimals caused some pockets of empty space to appear between some pixels, so I quickly turned to the flexbox for its stretch property. This solved the issue. <br> As mentioned earlier, I attempted using media queries and flexbox came particularly in handy when rearranging the layout of the page for mobile: if computer had settings displayed side by side due to a property of flex-direction: row, changing it to column-reverse allowed me to place them vertically for a more pleasing visual effect almost effortlessly. 
- **script.js** : the most involved part of the project was the script. My approach was to have different buttons 'toggle' different drawing styles. What a click on these buttons will do is trigger the colorCanvas() function that applies a different 'mouse enter' event listener to each div on the canvas, depending on what button is clicked. The function 'createCanvas' was also built to work dinamically using a series of changeable variables, such as the size of the canvas itself and the size of each block populating it.

## Challenges

I would say working through this project was extremely helpful because it helped me discover some features of event listeners I did not know. Of course, these ended up causing some issues, so I'll discuss them here:

- **Event Listener Stacking**: when I approached this project, I took for granted the idea of having to remove each event listener when a new setting was added to avoid conflicts, but a quick test and some time working with the debugger revealed that the event listeners get called in the order they were applied. What this meant is that if I pressed on the button color, then rainbow, then color again, the canvasDiv would be colored with my color choice first, then assigned a random 'rainbow' value, and then a color again on each click. While this was harmless for the aforementioned settings, it conflicted with my Greyshade function design.
- **Greyshade**: all the other colors assigned through my functions had a value of rgb, and to distinguish them from greyshade values I made it so on the first mouse enter the color would be set to rgba, with an opacity of 0.1, the first 10% towards black. The greyshade function was then meant to slice through the first 4 letters of the node.style.backgroundColor property, and if it was 'rgba', slice the current opacity and increase it until 1 is reached. Since my event listeners stacked, however, the second pass always returned a sliced value of 'rbg(', and that was because my previously applied event listeners were converting the div to another setting underneath the hood, nullifying the effect. I solved this by cloning the parent canvas div before applying greyshade, as that automatically removed all event listeners of the element itself and all its children, while at the same time preserving the color settings. 

## Possible Additions

I might come back to this project at a later date to add a few final touches I thought of while I was developing it:

- **Click mode**: instead of coloring the Canvas on mouse enter, I could make a setting enabling the user to decide if they wish to leave a trail with their mouse or click on each individual canvasDiv to color them. It could make for more precise drawing, maybe.
- **Eraser**: Mistakes happen. Of course, the user can select white from the color wheel and simulate an eraser setting themselves, but having one there that immediately gives you access to the functionality is more user friendly. Adding these settings means, of course, reconsidering the size or arrangement of my settings div. 

