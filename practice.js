const persons = [{
        Name: "Nishad Shirsat",
        Age: 26,
        Marks: 10
    },
    {
        Name: "Shubham Avachar",
        Age: 28,
        Marks: 20
    }, {
        Name: "Saket Shirsat",
        Age: 23,
        Marks: 15
    },
]

const data = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(result => console.log(result));

}

const result = persons.map((person, index) => {
    let newPerson = {
        ...person,
        Marks: person.Marks + 5,
        City: 'Washim'
    };
    // newPerson.Marks = person.Marks + 5;
    return newPerson;
});

console.log(result);
data();