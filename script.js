// 1) Get Elements
var employeeForm = document.getElementById('employeeForm');
var employeeTable = document.getElementById('employeeTable');
var employees = [];

// 2) Insert Employee
employeeForm.addEventListener("submit" , (e)=>{
    
    e.preventDefault();
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var salary = document.getElementById('salary').value;
    var phone = document.getElementById('phone').value;     
    employees.push({id , name , salary, phone})
    renderEmployees();
    employeeForm.reset();
})

// 3) Read Employee
function renderEmployees(){
    employeeTable.innerHtml='';
    employees.forEach( function(item , index , arrey){
        var row = document. createElement('tr');
        row.innerHTML=`
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.salary}</td>
        <td>${item.phone}</td>
        <td><button class="btn btn-danger ">Delete</button></td>
        <td><button class="btn btn-warning ">Update</button></td>
        `
        employeeTable.appendChild(row);
    } )
        
}

