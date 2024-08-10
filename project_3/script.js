let contain = document.getElementById("demo");

let btn = document.getElementById("btn");

let student = [
    // {name: "Lalit", per: 89, school: "Pj school"},
    // {name: "Ketan", per: 90, school: "Pj school"},
    // {name: "Rahul", per: 84, school: "Pj school"},
    // {name: "Rakesh", per: 69, school: "Pj school"},
    // {name: "Roshni", per: 89, school: "Pj school"},
];


function print(){
    let text = "";

    text += "<table border= 2px>";

    text += `<tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>School</th>
            <th>Action</th>
    </tr>`;

    student.forEach((v, i)=> {
        // console.log(v.name, i);
        text += `<tr>
            <td>${v.name}</td>
            <td>${v.per}</td>
            <td>${v.school}</td>
            <td><input type= "button" value= "Delete" id="del" onclick = "remove(${i})"><input type= "button" value= "Update" id="up" onclick = "update(${i})"></td>
        </tr>`;
    });



    text += "</table>";
    contain.innerHTML = text;
}


btn.addEventListener("click", function(){
    let studentIndex = document.getElementById("update").value;

    let names = document.getElementById("name").value;
    let pers = document.getElementById("pers").value;
    let schools = document.getElementById("schools").value;
    
    // console.log(names);
    if (studentIndex != "") {
        student[studentIndex].name = names;
        student[studentIndex].per = pers;
        student[studentIndex].school = schools;

        document.getElementById("update").value = "";
      }
    else{
        let d = {
            name : names,
            per : pers,
            school : schools,
        };
        student.push(d);
    }print();

});

function remove(i){
    // console.log(i);
    student.splice(i,1);
    print();
}

function update(i){
    let name = student[i].name;
    let per = student[i].per;
    let school = student[i].school;

    // console.log(name);
    document.getElementById("name").value = name;
    document.getElementById("pers").value = per;
    document.getElementById("schools").value = school;

    document.getElementById("update").value = i;
}

print();