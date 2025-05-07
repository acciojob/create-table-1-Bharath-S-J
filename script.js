function insert_Row() {
  // Get the table by ID
  const table = document.getElementById("sampleTable");

  // Create a new row at the beginning (index 0)
  const newRow = table.insertRow(0);

  // Create two cells in the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the text content for each cell
  cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";
}
