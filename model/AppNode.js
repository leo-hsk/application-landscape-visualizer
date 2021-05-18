/*
* Copyright (c) 2021 Ecore. All rights reserved.
*
* University:		 Frankfurt University of Applied Sciences
* Study program:	 Engineering Business Information Systems
* Module:		     Advanced Programming 2021
* Professor:		 Prof. Dr. Jung, Prof. Dr. Bremm
* Date:			     03.05.2021
*
*/

/**
 * Defines a schema for how AppNode objects are stored in the mongoDB.
 * @author Anton Roesler
 *
 */

const mongoose = require('mongoose')

const AppNodeSchema = mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    desc: String,
    tags: [String],
    version: String,
    department: [String],
    allowedUsers: Number,
    license: String,
});


module.exports = mongoose.model('AppNode', AppNodeSchema)
