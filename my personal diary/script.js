function saveEntry() {
  const date = document.getElementById("date").value;
  const entryText = document.getElementById("entry").value;

  if (date && entryText) {
    const entryLog = document.getElementById("entries");
    const newEntry = document.createElement("div");
    newEntry.classList.add("entry");

    newEntry.innerHTML = `<p><strong>Date:</strong> ${date}</p>
                          <p>${entryText}</p>`;

    entryLog.prepend(newEntry);

    document.getElementById("date").value = '';
    document.getElementById("entry").value = '';
    alert("Diary entry saved!");
  } else {
    alert("Please fill out all fields!");
  }
}