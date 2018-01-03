module.exports = function(app){

  /// Task ///
  var Task=require('./models/task');

  //GET
  findAllTasks=function(req,res){
    Task.find(function(err,user){
      if (!err){
        res.send(user);
      }
      else console.log(err);
    });
  }



  //POST
  addTask = function(req,res){
    console.log("POST");
    console.log(req.body);

    var task = new Task({
      "taskid": req.body.taskid,
      "class": req.body.class,
      "text": req.body.text,
      "endtime":req.body.endtime
    });

    task.save(function(err){
      if (!err) console.log("Task Saved!");
      else console.log(err);
    });
    res.send(task);
  }

  //Delete
  deleteTask = function(req,res){
    Task.findOneAndRemove({taskid:req.params.taskid},(err,task1)=>{
      if (!err){
      var response = {
        message: "Todo successfully deleted",
        task: task1
    };
    res.status(200).send(response);
  }
  else
      {console.log(err);} 
    });


  }

  /// Classes ///

  var Classes=require('./models/classes');

  findAllClasses=function(req,res){
    Classes.find(function(err,classes){
      if (!err){
        res.send(classes);
      }
      else console.log(err);
    });
  }

  addClass = function(req,res){
    console.log("POST");
    console.log(req.body);

    var classes = new Classes({
      "className": req.body.className,
      "color": req.body.color,
      "secColor": req.body.secColor
    });

    classes.save(function(err){
      if (!err) console.log("Class Saved!");
      else console.log(err);
    });
    res.send(classes);
  }


  app.get('/tasks',findAllTasks);
  app.post('/tasks',addTask);
  app.post('/class',addClass);
  app.get('/class',findAllClasses);
  app.delete('/tasks/:taskid',deleteTask);
}
