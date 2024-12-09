// Get references to the form and display area
const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('Resume-Display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('Shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('Download-PDF') as HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload
// Collect input values

const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('Email') as HTMLInputElement).value
const linkedIn = (document.getElementById('LinkenIn') as HTMLInputElement).value
const phone = (document.getElementById('Contact') as HTMLInputElement).value
const dateofbirth = (document.getElementById('Date of Birth') as HTMLInputElement).value
const gender =(document.getElementById('Gender') as HTMLButtonElement).value
const education = (document.getElementById('Education') as HTMLTextAreaElement).value
const experience= (document.getElementById('Experience') as HTMLTextAreaElement).value
const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value
// Save form data in localStorage with the username as the key
const resumeData = {
name,
email,
linkedIn,
phone,
dateofbirth,
gender,
education,
experience,
skills
};
localStorage.setItem('username',JSON.stringify(resumeData)); // Saving the data locally
// Generate the resume content dynamically

const resumeHTML = `
<h2><b><u> Editable Resume</u></b></h2>
<h3><b>Personal Information</b></h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
<p><b>linkenIn:</b><span contenteditable="true"> ${linkedIn}</span></p>
<p><b>Contact:</b><span contenteditable="true"> ${phone}</span></p>
<p><b>Date Of Birth:</b><span contenteditable="true"> ${dateofbirth}</span></p>
<p><b>Gender:</b><span contenteditable="true"> ${gender}</span></p>

<h3><b>Education:</b>
<p contenteditable="true">${education}</p></h3>

<h3><b>Experience:</b> 
<p contenteditable="true">${experience}</p></h3>

<h3><b>Skills:</b>
<p contenteditable="true">${skills}</p></h3>`;
// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent('username')}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as pdf
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value = username;
(document.getElementById('name') as HTMLInputElement).value = resumeData.name;
(document.getElementById('Email') as HTMLInputElement).value = resumeData.email;
(document.getElementById('LinkedIn') as HTMLInputElement).value = resumeData.LinkenIn;
(document.getElementById('Contact') as HTMLInputElement).value = resumeData.Contact;
(document.getElementById('Date of Birth') as HTMLInputElement).value = resumeData.DateofBirth;
(document.getElementById('Gender') as HTMLInputElement).value = resumeData.Gender;
(document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
}
}
});
