var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
var canvas_content = require("./model").canvas_content
app.post("/save",function (req, res,next) {
var canvasName = req.body.canvasName;
var  canvasId = req.body.canvasId;
var  creator = req.body.creator;
var lists0 = req.body.lists0;
var lists1 = req.body.lists1;
var lists2 = req.body.lists2;
var editInfo = JSON.parse(req.body.editInfo);
var list0 = [];
var list1 = [];
var list2 = [];
    for(var o in editInfo){
      if(editInfo[o].index1 == 0){
          var newData ={"editor":editInfo[o].editor, "content":lists0[editInfo[o].index2]};
          list0.push(newData);
      }
     else if(editInfo[o].index1 == 1){
          var newData ={"editor":editInfo[o].editor, "content":lists1[editInfo[o].index2]};
          list1.push(newData);
      }else if(editInfo[o].index1 == 2){
          var newData ={"editor":editInfo[o].editor, "content":lists2[editInfo[o].index2]};
          list2.push(newData);
      }else{
          console.log("err:meiyouduiyingdeneirong");
      }

    }

mongoose.connect("mongodb://localhost/canvas",function (err) {
     if(err){
         console.log("连接失败");
     }else{
         console.log("连接成功");
         var doc1 = new canvas_content({canvasName: canvasName,creator:creator,lists0:list0,lists1:list1,lists2:list2})
         doc1.save(function (err, doc) {
           if(err){
               console.log(err);
           }else{
               console.log(doc);
           }
         })
     }
    }

);
})



