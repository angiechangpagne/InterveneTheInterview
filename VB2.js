function appendRow() {
  
  var tbl = document.getElementById("tbl");
  let row = tbl.insertRow(tbl.rows.length),i;
  
  for(i=0;i<tbl.rows[0].cells.length; i++) {
    createCell(row.insertCell(i), i, 'row');
  }
  
}

function createCell(cell, text, style) {
  var div = document.createElement('div'), 
      txt = document.createTextNode(text);
  div.appendChild(txt);
  div.setAttribute('class', style);
  div.setAttribute('className', style);
  cell.appendChild(div);
}

// Example case. 
document.body.innerHTML = `
<table id="tbl" border="1">
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`;

appendRow();

console.log(document.body.innerHTML);