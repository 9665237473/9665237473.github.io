function validation(){
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;


      //Name Validation
      if(name.length < 3){
        alert("Please enter a valid name!");
        return false;
      }


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
      signUpUser();
}

function signUpUser(){

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

      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      var btnSignUp = document.getElementById("btnSignup");
      

      	
      	email = email.value;
      	password = password.value;
      	
      
      	const auth = firebase.auth();

      	
      	const promise = auth.createUserWithEmailAndPassword(email,password);
      	promise.catch(e => alert(e.message));

        console.log(promise)
        // console.log(typeof(promise.message))
        alert(promise.message)
        alert(typeof(promise.message))
        if(typeof(promise.message) === "undefined"){
            // Store
            alert("Hello")
            sessionStorage.setItem("email", "name");
            window.location.href = "index.html";
        }

      	// auth.onAuthStateChanged(firebaseUser =>{
      	// 	if(firebaseUser){
      	// 		console.log(firebaseUser);
      	// 		firebaseUser.displayName = name;
      	// 	}else{
      	// 		console.log("Not logged in");
      	// 	}

      	// });

}


