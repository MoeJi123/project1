

var tbody = d3.select("#to-do-list");

data.forEach((city) => {
    var row = tbody.append("tr");
    Object.entries(city)).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var select_data = d3.select("tbody");

select_data.html("");
  
  // append stats to the list

  filteredData.forEach((filteredDataRow) => {
    var selectRow = select_data.append("tr");
    Object.values(filteredDataRow).forEach((cell) => {
        var selectCell = selectRow.append("td");
        selectCell.text(cell);
    }
   )}
 );

  }
