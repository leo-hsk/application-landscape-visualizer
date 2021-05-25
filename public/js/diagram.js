/*
* Copyright (c) 2021 Ecore. All rights reserved.
*
* University:        Frankfurt University of Applied Sciences
* Study program:     Engineering Business Information Systems
* Module:            Advanced Programming 2021
* Professor:         Prof. Dr. Jung, Prof. Dr. Bremm
* Date:              21.04.2021
*
*/

/**
 * Contains all functions that create, update or delete parts of the gojs diagram. Especially the node and link data
 * array.
 *
 * @author Leonard Hußke , Feng Yi Lu, Anton Roesler
 */

/**
 * init function to create the model.
 */
function init() {
    diagram.model = model;
    // passing our Template Maps into our diagram
    diagram.nodeTemplate = mainTemplate;
    diagram.linkTemplateMap = linkTemplateMap;
}

/**
 * Reads user inputs and creates a new Node from the users data.
 */
function addAppNode() {
    const data = readNodeProperties();
    data._id = Date.now();
    addNodeToDiagram(data);
}

/**
 * Saves an AppNode object to the model.
 */
function addNodeToDiagram(data) {
    diagram.startTransaction("make new node");
    //if (category ==="Application"){var color = "blue"}
    //custom color setting for user
    newNode = {
        key: data._id,
        nameProperty: data.name,
        category: data.category,
        desc: data.desc,
        tags: data.tags,
        version: data.version,
        department: data.department,
        allowedUsers: data.allowedUsers,
        license: data.license,
        loc: data.loc,
        //color: color
    };
    
    handleContextMenuOptions(newNode);
    diagram.commitTransaction("update");
    pos = diagram.toolManager.contextMenuTool.mouseDownPoint;
    modelNodeWithoutFilter = model.nodeDataArray;
}

/**
 * Delete selected node from nodeDataArray.
 */
function deleteNode() {
    const id = diagram.selection.toArray()[0].key;
    const node = diagram.findNodeForKey(id);
    diagram.startTransaction();
    diagram.remove(node);
    diagram.commitTransaction("deleted node");
}


/**
 * Adds a link object to the diagram. Required fields are:
 * - _id
 * - from (_id of the from node)
 * - to (_id of the to node)
 */
function addLinkToDiagram(link) {
    diagram.startTransaction();
    model.addLinkData({
        key: link._id,
        from: link.from,
        to: link.to,
    });
    diagram.commitTransaction("update");
    modelLinkWithoutFilter = model.linkDataArray;
}






