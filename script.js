const form = document.getElementById('surveyForm');
const resetBtn = document.getElementById('resetBtn');
const modalBody = document.getElementById('modalBody');
const mobileNumberPattern = /^\d{10}$/; 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;

    if (!mobileNumberPattern.test(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }


    modalBody.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    $('#exampleModal').modal('show');
});

resetBtn.addEventListener('click', function() {
    form.reset();
});
