Vue.component('tasklist', {
  
  data: function () {
    return {
      tasks: [		
  				{description: 'Go to school', completed: true},
				{description: 'Go to college', completed: false},
				{description: 'Go to store', completed: true},
				{description: 'Go to home', completed: false}
			]
    };
  },
  template: '<div><task v-for="task in tasks">{{task.description}}</task></div>'

})


Vue.component('task', {

template: '<li><slot></slot></li>'

});


new Vue({
	el: "#root"
});


