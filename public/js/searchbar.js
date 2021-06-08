

function searchbarInput(){
    const searchtext = document.getElementById("searchbar").value
    if (searchtext === ""){
        makeAllNodesFullOpacity()
    } else {
        model.nodeDataArray.forEach(node => {
            if (node.name.toLowerCase().startsWith(searchtext.toLowerCase())) {
                setOpacity(node, 1)
            }
            else {
                setOpacity(node)
            }
        })
    }
    setLinkOpacity()

}

/**
 * Adds the class active-s to the searchbar, which activates the transition and extends the searchbar.
 */
function toggleSearchbar() {
    const search = document.querySelector(".search");
    const input = document.querySelector("#searchbar");

    search.classList.toggle("active-s");
    input.focus();
};


/**
 * Removes the stroke on the diagram and clear the value in the input of the searchbar.
 */
function resetSearchInput() {
    document.getElementById("searchbar").value = "";
    removeStrokeFromAllNodesInDiagram();
};