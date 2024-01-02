function studentReg(){
    let stdName = document.getElementById("name").value;
    let stdRoll = document.getElementById("roll").value;
    let stdCourse = document.getElementById("course").value;
    let stdTable = document.getElementsByTagName("tbody")[0];
    let row = stdTable.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    cell1.textContent = stdName;
    cell2.textContent = stdRoll;
    cell3.textContent = stdCourse;
}