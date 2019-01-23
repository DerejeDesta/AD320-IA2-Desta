function validation(){

			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var phone = document.getElementById('phone').value;
			var state = document.getElementById('state').value;

			if (name==''|| email=='') {
				document.getElementById('errorResult').innerHTML ="Name and Email required";
				return false;
			
			} else {
				return true;
			}
		}

	