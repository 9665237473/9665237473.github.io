function validation(){
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;


      //Email validation
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(email) == false) {
            alert('Please enter valid Email Address!');
            return false;
      }



      //Password Validation
      if(password.length < 6){
          alert("Password length should be greater than or equal to 6 characters.")
          return false;
      }
      signInUser();
}



function signInUser(){

	// alert("hello");
	var firebaseConfig = {
        apiKey: "AIzaSyDOoxB8KR1DAzqQP9JgnQzuQU2iq9Xj93Q",
        authDomain: "ride-it-right.firebaseapp.com",
        databaseURL: "https://ride-it-right.firebaseio.com",
        projectId: "ride-it-right",
        storageBucket: "ride-it-right.appspot.com",
        messagingSenderId: "869230733388",
        appId: "1:869230733388:web:91512d3ccb0ffa5217ece9",
        measurementId: "G-W6N9X8WLLQ"
      };
      firebase.initializeApp(firebaseConfig);

      var email = document.getElementById("email");
      var password = document.getElementById("password");
      var btnLogin = document.getElementById("btnLogin");     
      	
      	email = email.value;
      	password = password.value;
      	// alert(email);
      	const auth = firebase.auth();

      	
      	const promise = auth.signInWithEmailAndPassword(email,password)
        .catch(function(err) {
            alert(err)
            window.location.href = "login.html"
        });
        

      	auth.onAuthStateChanged(firebaseUser =>{
      		if(firebaseUser){
      			// console.log(firebaseUser);
            // alert(firebaseUser.email)
            if(firebaseUser.email){
                alert(firebaseUser.email)
                window.location.href = "index.html";
            }
      		}

      	});

}
