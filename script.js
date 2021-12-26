//Get the range slider and the text-content node above it.
const sliderText = document.querySelector('.slidertext');
const rangeSlider = document.querySelector('#slidervalue');
let sizeOfCanvas = Number(rangeSlider.value)

//Get the color input node and the default color inside
const colorInput = document.querySelector('#color')
const defaultColor = colorInput.value;

//Upon first loading the page, create the basic canvas
//And make it colorable
window.onload = function() {
    createCanvasDivs(sizeOfCanvas);
    colorCanvas(defaultColor);
};

//Reset the canvas on reset button click
resetButton = document.querySelector('#clear');
resetButton.addEventListener('click', clearCanvas);

//Get the node for each function button
const greyshadeButton = document.querySelector('#greyshade');
const colorButton = document.querySelector('#standard');
const rainbowButton = document.querySelector('#rainbow');

//Add event listeners for each button
colorButton.addEventListener('click', () => {

toggleButton(colorButton);
colorCanvas(document.querySelector('#color').value);

});

rainbowButton.addEventListener('click', () => {

    toggleButton(rainbowButton);
    colorCanvas('rainbow');
});

greyshadeButton.addEventListener('click', () => {

    //This is extremely important.
    //I am cloning the canvas to remove all of its children's event listeners
    //This is because stacking event listeners would prevent the function to work as intended
    let oldElement = document.querySelector('.container');
    let newElement = oldElement.cloneNode(true)
    oldElement.parentNode.replaceChild(newElement, oldElement);

    toggleButton(greyshadeButton);
    colorCanvas('greyshade');
})
 
//Handle which button is pressed
function toggleButton(node) {
    activeButton = document.querySelector('.active');

    if (activeButton === node) {
        return;
    }
    else if (activeButton === null) {
        node.classList.add('active');
        return;
    }

    activeButton.classList.remove('active');
    node.classList.add('active');

}

//This function creates and appends the divs to the container
function createCanvasDivs (numberOfDivs) {

    //Get the container node
    const containerNode = document.querySelector('.container')
    //Fetch the height of the container. This might change with media queries
    const containerSize = containerNode.offsetHeight;
    //Calculate total number of boxes and size of each.
    const totalBoxes = numberOfDivs * numberOfDivs;
    const gridBoxSize = containerSize / numberOfDivs

    //Loop over number of boxes
    for(let i = 0; i < totalBoxes; i++) {
        //Create the div and dinamically assign it a height and width
        const spawnedDiv = document.createElement('div');
        spawnedDiv.classList.add('canvasDiv')
        spawnedDiv.setAttribute('style', `height:${gridBoxSize}px; width:${gridBoxSize}px; background-color: #FFFFFF`)

        //Append it to the element div
        containerNode.appendChild(spawnedDiv);
    }

}

//Function to clear the canvas before replacing it
function clearCanvas() {
    //Get all the canvas blocks
    const canvasNodes = document.querySelectorAll('.canvasDiv');

    //Loop and delete each one
    canvasNodes.forEach(canvasBlock => {
        canvasBlock.remove();
    });

    //After wiping out the current canvas, recreate an empty one.
    //When a change in the range slider occurs, it creates a canvas of specified new size.
    let newCanvasSize = Number(rangeSlider.value)
    createCanvasDivs(newCanvasSize);

    //Trigger the event listener for the current active drawing style
    document.querySelector('.active').click();
}

//This function handles all the coloring methods available
function colorCanvas (color) {

    const canvasNodes = document.querySelectorAll('.canvasDiv');

    if (color === 'rainbow') {

        canvasNodes.forEach(canvasBlock =>  {
            canvasBlock.addEventListener('mouseenter', function () { 

                //Create three random RGB values
                let rgb0 = Math.floor(Math.random() * 256);
                let rgb1 = Math.floor(Math.random() * 256);
                let rgb2 = Math.floor(Math.random() * 256);
                //Plug them into the block
                canvasBlock.style.backgroundColor = `rgb(${rgb0}, ${rgb1}, ${rgb2})`; 
            })
        });
    }

    else if (color === 'greyshade') {
        
        canvasNodes.forEach(canvasBlock =>  {
            canvasBlock.addEventListener('mouseenter', function () { 


                if(canvasBlock.style.backgroundColor === 'rgb(0, 0, 0)') {
                    return;
                }

                //If the background color already has an opacity setting
                if(canvasBlock.style.backgroundColor.slice(0,4) === 'rgba') {
                    //Slice into the backgroundColor property to extract current opacity
                    let opacity = Number(canvasBlock.style.backgroundColor.slice(-4, -1));

                    if (opacity <= 0.9) {
                        opacity += 0.1;
                        canvasBlock.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
                    }
                }
                else {
                    canvasBlock.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
                }
            })
        });

    }

    else {
    canvasNodes.forEach(canvasBlock =>  {
        canvasBlock.addEventListener('mouseenter', function () { canvasBlock.style.backgroundColor = color; })
    }); 
    }
}

//When range changes, clear the canvas and update text-content
rangeSlider.addEventListener('input', () => { 
    clearCanvas();
    sliderText.textContent = rangeSlider.value + 'x' + rangeSlider.value; })

//When the color wheel is used to change color, check if the color button is active
//If it is switch the color now to have immediate effect.
colorInput.addEventListener('change', () => {
    activeButton = document.querySelector('.active');
    if(activeButton === colorButton) {
        colorCanvas(colorInput.value);
    }
});

