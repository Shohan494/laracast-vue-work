new Vue({
    el: '#app',

    mounted() {
    	//make an ajax request to our server

    	//fetch()/$.ajax()/$.getJson()

		axios.get('skills')
		  .then(function (response) {
		    // handle success
		    console.log(response);
		  });
    }
});
