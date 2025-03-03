function processPeopleData(people) {
    if (!people.length) return console.log("No data available");

    let minimumAgeOfPerson = people.reduce((min, person) => person.age < min.age ? person : min, people[0]);
    console.log(`Min Age: ${minimumAgeOfPerson.age}, Name: ${minimumAgeOfPerson.name}`);

    let maximumAgeOfPerson = people.reduce((max, person) => person.age > max.age ? person : max, people[0]);
    console.log(`Max Age: ${maximumAgeOfPerson.age}, Name: ${maximumAgeOfPerson.name}`);

    let sortedByMinimumAge = [...people].sort((a, b) => a.age - b.age);
    console.log("Sorted by Minimum Age:", sortedByMinimumAge);

    let sortedByMaximumAge = [...people].sort((a, b) => b.age - a.age);
    console.log("Sorted by Maximum Age:", sortedByMaximumAge);
}

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
];

processPeopleData(people);
