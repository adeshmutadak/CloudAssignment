function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const gender = [...genderElements].filter(el => el.checked).map(el => el.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate the form (add your validation logic here)
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert('All fields are required. Please fill out the form completely.');
        return false;
    }

    // Display the results in a popup
    const popup = document.getElementById('popup');
    const popupResults = document.getElementById('popup-results');
    popupResults.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
    popup.style.display = 'block';

    return false;
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    // Reset the form
    document.getElementById('surveyForm').reset();
}
