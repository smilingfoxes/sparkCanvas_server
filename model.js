var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sparkCanvas');

var canvas_authority_Schema = mongoose.Schema({
    //canvasId: Number,
    canvasName: String,
    creator: String,
    invitee: [{name: String}]
});

var canvas_authority = mongoose.model('canvas_authority', canvas_authority_Schema);

var canvas_content_Schema = mongoose.Schema({
    canvasName: String,
    canvasId: String,
    creator: String,
    lists0: [{editor: String, content: String }],
    lists1: [{editor: String, content: String }],
    lists2: [{editor: String, content: String }]
});
var canvas_content = mongoose.model("canvas_content",canvas_content_Schema);

module.exports = {
    canvas_authority : canvas_authority,
    canvas_content: canvas_content
};
