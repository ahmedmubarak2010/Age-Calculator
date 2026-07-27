let birthDateInput = document.getElementById("birthDate");
let button = document.getElementById("btn");
let result = document.getElementById("result");
birthDateInput.max = new Date().toISOString().split("T")[0];
button.addEventListener("click", function () {
    let birthDate = birthDateInput.value;
    if (birthDate === "") {
        result.textContent = "Please select your birth date.";
        return;
    }
    let birth = new Date(birthDate);
    let today = new Date();
    if (birth > today) {
        result.textContent = "Birth date cannot be in the future.";
        return;
    }
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
        months = months - 1;
        let lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days = days + lastMonth.getDate();
    }
    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }
    result.textContent = "Your age is " + years + " Years, " + months + " Months, " + days + " Days";
});
