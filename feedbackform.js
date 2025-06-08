
function validateForm() {
    let isValid = true;

    // Clear all previous error messages
    clearErrors();

    // Get form field values
    const firstName = document.getElementById("firstName").value.trim();
    const familyName = document.getElementById("familyName").value.trim();
    const location = document.getElementById("location").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const fields = [firstName, familyName, location, comment];

    // Validate first name
    if (firstName === "") {
        document.getElementById("firstName-error").textContent = "*First name is required";
        isValid = false;
    }

    // Validate family name
    if (familyName === "") {
        document.getElementById("familyName-error").textContent = "*Family name is required";
        isValid = false;
    }

    // Validate location
    if (location === "") {
        document.getElementById("location-error").textContent = "*Country/City is required";
        isValid = false;
    }

    // Validate comment
    if (comment === "") {
        document.getElementById("comment-error").textContent = "*Comment is required";
        isValid = false;
    }

    // Validate user has not input text containing "<"
    for (let field of fields) {
        if (field.toLowerCase().includes("<")) {
            alert('User input contains forbidden code');
            return false;
        }
    }

    return isValid;
}

// Clears all previous error messages
function clearErrors() {
    document.getElementById("firstName-error").textContent = "";
    document.getElementById("familyName-error").textContent = "";
    document.getElementById("location-error").textContent = "";
    document.getElementById("comment-error").textContent = "";
}

// Populates the form fields when clicking on a particular table row
function populateFields(row) {
    const cells = row.getElementsByTagName('td');
    document.getElementById('firstName').value = cells[1].textContent;
    document.getElementById('familyName').value = cells[2].textContent;
    document.getElementById('location').value = cells[3].textContent;
    document.getElementById('comment').value = cells[4].textContent;
}
