    const SignInButton = document.getElementById("login");
    const SignUpButton = document.getElementById("register");

    const SignInForm = document.getElementById("sign-in-form");
    const SignUpForm = document.getElementById("sign-up-form");

    

    //function to show the signUpForm
    function showSignUpForm() {
        SignInForm.style.display = "none";
        SignUpForm.style.display = "";
        SignUpButton.style.background = "#2e86c1";
        SignUpButton.style.transition = " .5s ease";
        SignInButton.style.background = "none";
        
    }

    //function to show the signInForm 
    function showSignInForm() {
        SignUpForm.style.display = "none";
        SignInForm.style.display = "";
        SignUpButton.style.background = "";
        SignInButton.style.background = "#2e86c1";
    }

    SignUpButton.addEventListener("click", () =>{
        showSignUpForm();

    });
    SignInButton.addEventListener("click", () =>{
        showSignInForm();
    });

   

