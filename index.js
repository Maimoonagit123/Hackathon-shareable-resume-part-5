// Get references to the form and display area
var form = document.getElementById('Resume-form');
var resumeDisplayElement = document.getElementById('Resume-Display');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLinkElement = document.getElementById('Shareable-link');
var downloadPdfButton = document.getElementById('Download-PDF');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var linkedIn = document.getElementById('LinkenIn').value;
    var phone = document.getElementById('Contact').value;
    var dateofbirth = document.getElementById('Date of Birth').value;
    var gender = document.getElementById('Gender').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        linkedIn: linkedIn,
        phone: phone,
        dateofbirth: dateofbirth,
        gender: gender,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem('username', JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2><b><u> Editable Resume</u></b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n<p><b>linkenIn:</b><span contenteditable=\"true\"> ").concat(linkedIn, "</span></p>\n<p><b>Contact:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n<p><b>Date Of Birth:</b><span contenteditable=\"true\"> ").concat(dateofbirth, "</span></p>\n<p><b>Gender:</b><span contenteditable=\"true\"> ").concat(gender, "</span></p>\n\n<h3><b>Education:</b>\n<p contenteditable=\"true\">").concat(education, "</p></h3>\n\n<h3><b>Experience:</b> \n<p contenteditable=\"true\">").concat(experience, "</p></h3>\n\n<h3><b>Skills:</b>\n<p contenteditable=\"true\">").concat(skills, "</p></h3>");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent('username'));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as pdf
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('Email').value = resumeData.email;
            document.getElementById('LinkedIn').value = resumeData.LinkenIn;
            document.getElementById('Contact').value = resumeData.Contact;
            document.getElementById('Date of Birth').value = resumeData.DateofBirth;
            document.getElementById('Gender').value = resumeData.Gender;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
