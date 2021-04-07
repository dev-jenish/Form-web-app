// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVPz006vdJyYP7d8YDmWAO-3P9NGnVVxg",
    authDomain: "registration-form-7d069.firebaseapp.com",
    projectId: "registration-form-7d069",
    storageBucket: "registration-form-7d069.appspot.com",
    messagingSenderId: "297087416492",
    appId: "1:297087416492:web:4c5112cb7b313d243f8709"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference formInfo collections
  let formInfo = firebase.database().ref("infos");

//Listen for a submit
document.querySelector(".formcont").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // if(document.querySelector('input[name="gender"]:checked') == false) {
    //     alert("Please select your gender");
    // }
    
    if(document.querySelector('input[name="gender"]:checked') == null) {
        alert("Please select your gender!");
    }
    // get input values
    let firstName = document.querySelector(".firstname1").value;
    let lastName = document.querySelector(".lastname1").value;
    let email = document.querySelector(".email1").value;
    let collegeName = document.querySelector(".collegename1").value;
    let phoneNumber = document.querySelector(".phonenumber1").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    

    saveFormInfo(firstName, lastName, email, collegeName, phoneNumber, gender);
    document.querySelector(".formcont").reset();
}

// Save ifos to firebase
function saveFormInfo(firstName, lastName, email, collegeName, phoneNumber, gender) {
    let newFormInfo = formInfo.push();

    newFormInfo.set({
        Firstname: firstName,
        Lastname: lastName,
        Email: email,
        Collegename: collegeName,
        Phonenumber: phoneNumber,
        Gender: gender,
    })
}

let w = screen.width;
let x = document.getElementById("gendercont");
let y = document.getElementById("submitbtn11");

if (w <= 645) {
    document.querySelector(".formleftcont").appendChild(x);
    document.querySelector(".formleftcont").appendChild(y);
}




// firebase deploy --only hosting