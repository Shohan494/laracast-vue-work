new Vue({
    el: '#app',

    data : {
    	skills : ['no']
    },

    prop: ['skills'],

    mounted() {
    	//make an ajax request to our server

    	//fetch()/$.ajax()/$.getJson()

		axios.get('skills')
		  .then(function (response) {
		    //console.log(response);
		    //console.log(response.data);
		    this.skills = response.data;
		    console.log(skills[0]);
		  });
    }
});
