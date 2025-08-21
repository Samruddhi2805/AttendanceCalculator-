function calculateAttendance(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from fields
    const name = document.getElementById("name").value.trim();
    const month = document.getElementById("month").value.trim();
    const attended = parseInt(document.getElementById("daysAttended").value);
    const total = parseInt(document.getElementById("Totalworkingdays").value);
    const resultDiv = document.getElementById("result");

    // Calculate percentage
    if (attended > total) {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Error: Days attended cannot exceed total working days.";
        return;
    }

    const percentage = ((attended / total) * 100).toFixed(2);

    // Show result
    resultDiv.style.color = "green";
    resultDiv.textContent = `${name}'s Attendance in ${month} is ${percentage}%`;

    // Add data to table
    let table = document.getElementById("attendend");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = attended + " / " + total;
    row.insertCell(2).innerText = percentage + "%";

    // Clear form fields
    document.getElementById("attendanceForm").reset();
}

// Attach handler when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("attendanceForm").addEventListener("submit", calculateAttendance);
});