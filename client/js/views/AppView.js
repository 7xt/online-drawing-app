// AppView.js
// This view will be responsible for instantiating the entire app. Other views will be instantiated on creation of this view. 

var app = app || {};

app.AppView = Backbone.View.extend({
  initialize: function() {
     this.pictureView = new app.PictureView({
       model: new app.PictureModel(),
       container: d3.select('.container')
     });

     this.timerView = new app.TimerView({
      model: new app.TimerModel()
     });
     debugger;
     $('.container').append(this.timerView.render());
     debugger;
  }

});

