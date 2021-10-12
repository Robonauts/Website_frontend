const navslide = () => {
  const burger = document.querySelector(".burger");
  const navlinks = document.querySelector(".navlinks");

  burger.addEventListener("click", () => {
    navlinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navslide();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXGtg40s3x4N_xYYHN_VNJQd8Th6iX-ho",
  authDomain: "robonauts-d6d2e.firebaseapp.com",
  projectId: "robonauts-d6d2e",
  storageBucket: "robonauts-d6d2e.appspot.com",
  messagingSenderId: "510250473915",
  appId: "1:510250473915:web:c6171f13a8e853696dcc9e",
};

// Initialize Firebase
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("FormData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;

  //Save Form Data To Firebase
  db.doc()
    .set({
      fname: firstName,
      lname: lastName,
      email: email,
      number: number,
      message: message,
    })
    .then(() => {
      console.log("Data saved");
    })
    .catch((error) => {
      console.log(error);
    });

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("message").value = "";

  //alert
  alert("Your Form Has Been Submitted Successfully");
});
