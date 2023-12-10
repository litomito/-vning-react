var data = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var result = data.tasks.filter(function(name) {
    return name.complete === false && name.priority !== "Low";
})
.map(function(array) {
    return { name: array.title + " (" + array.id + ")" };
})

console.log(result);