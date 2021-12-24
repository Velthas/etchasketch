const numberOfDivs = 5;

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
        spawnedDiv.setAttribute('style', `height:${gridBoxSize}px; width:${gridBoxSize}px; background-color: #FDFDDF`)

        //Append it to the element div
        containerNode.appendChild(spawnedDiv);
    }

}

//Function to clear the canvas before replacing it
function clearCanvas() {
    const canvasNodes = document.querySelectorAll('.canvasDiv');

    canvasNodes.forEach(canvasBlock => {
        canvasBlock.remove();
    });
}
