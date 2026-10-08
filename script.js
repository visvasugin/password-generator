}

    if (password.length >= 12) {
        score++;
    }


    // Check uppercase

    if (/[A-Z]/.test(password)) {
        score++;
    }


    // Check lowercase

    if (/[a-z]/.test(password)) {
        score++;
    }


    // Check numbers

    if (/[0-9]/.test(password)) {
        score++;
    }


    // Check symbols

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    // Display strength

    if (score <= 2) {

        strengthText.textContent = "Weak";

        strengthText.style.color = "#ef4444";

        strengthFill.style.width = "25%";

        strengthFill.style.background = "#ef4444";

    }

    else if (score <= 4) {

        strengthText.textContent = "Medium";

        strengthText.style.color = "#f59e0b";

        strengthFill.style.width = "50%";

        strengthFill.style.background = "#f59e0b";

    }

    else if (score <= 5) {

        strengthText.textContent = "Strong";

        strengthText.style.color = "#22c55e";

        strengthFill.style.width = "75%";

        strengthFill.style.background = "#22c55e";

    }

    else {

        strengthText.textContent = "Very Strong";

        strengthText.style.color = "#06b6d4";

        strengthFill.style.width = "100%";

        strengthFill.style.background = "#06b6d4";

    }
}


// Generate button

generateBtn.addEventListener("click", generatePassword);


// Copy password

copyBtn.addEventListener("click", async function () {

    const password = passwordInput.value;


    if (password === "") {

        copyMessage.textContent = "Generate a password first.";

        copyMessage.style.color = "#ef4444";

        return;
    }


    try {

        await navigator.clipboard.writeText(password);

        copyMessage.textContent = "Password copied!";

        copyMessage.style.color = "#22c55e";

    }

    catch (error) {

        copyMessage.textContent =
            "Unable to copy password.";

        copyMessage.style.color = "#ef4444";
    }

});