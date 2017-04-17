$(document).ready(function(){
		$("form").submit(function(e) {

		    var url = $(this).attr("action"),
		    	data = $(this).serialize();
		    var callback = function(response){
		    	var jsonData = JSON.parse(response),
		    		response = jsonData.response;

		    	switch(response){
		    		case "success":
		    			alert('We Will get back to soon');
		    			break;
		    		default:
		    			alert('There was an error try again later...');
		    			break;
		    	}
		    };
		    addajaxcall(data,url,callback);

		    e.preventDefault(); // avoid to execute the actual submit of the form.
		});

		var addajaxcall = function (data,colnourl,callback){
		  	$.ajax({
			    url:url,
			    data:data,
			    type:'POST',
			    enctype: 'multipart/form-data',
			    success:function(response){
			          callback(response);
			    },
			    error:function(response){
			      alert('error in ajax call'+response);
			    }
		  	});
		};
	});