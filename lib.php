<!-- <script type="text/javascript">
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
</script> -->

<?php
	$response = array();
	$dbServername = "localhost";
	$dbUsername = "root";
	$dbPassword = "root";
	$dbname = "";
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if(isset($_POST['contactus'])){
	    if($conn){
			$name = $_POST['name'];
			$email = $_POST['email'];
			$number = $_POST['number'];
			$subject = $_POST['subject'];
			$message = $_POST['message'];
			$create_table = "CREATE TABLE IF NOT EXISTS contactus (
							  id int(11) NOT NULL AUTO_INCREMENT,
							  name varchar(40) NOT NULL,
							  email varchar(40) NOT NULL,
							  number varchar(40) NOT NULL,
							  subject text NOT NULL,
							  message text NOT NULL,
							  PRIMARY KEY (id)
							) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1";

			if (mysqli_query($conn, $create_table)) {
			   $sql = "INSERT INTO contactus (name, email, number, subject, message) VALUES ('".$name."','".$email."', '".$number."', '".$subject."', '".$message."')";
			    mysqli_query($conn, $sql);
				$response = array('response' => 'success');
			} else {
			    $response = array('response' => 'no_table_in_db');
			}
	    }else{
	    	$response = array('response' => 'db_connetion_fail');
	    }
	}
	if(isset($_POST['subscription'])){
		if($conn){
			$subscribeemail = $_POST['subscribeemail'];
			$create_table = "CREATE TABLE IF NOT EXISTS subscription (
							  id int(11) NOT NULL AUTO_INCREMENT,
							  subscribeemail varchar(50) NOT NULL,
							  PRIMARY KEY (id),
							  UNIQUE KEY subscribeemail (subscribeemail)
							) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1";
			if (mysqli_query($conn, $create_table)) {
			   $sql = "INSERT INTO subscription (subscribeemail) VALUES ('".$subscribeemail."')";
			    mysqli_query($conn, $sql);
				$response = array('response' => 'success');
			} else {
			    $response = array('response' => 'no_table_in_db');
			}				
		}else{
		 	$response = array('response' => 'db_connetion_fail');
		}
	}
	echo json_encode($response);
?>


