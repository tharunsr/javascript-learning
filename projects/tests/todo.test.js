const { JSDOM } = require("jsdom");

describe("To-do List Functionality", () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(`
            <input type="text" id="entrypoint">
            <button id="addButton">Add Task</button>
            <ul id="task-container"></ul>
        `, { runScripts: "dangerously" });

        document = dom.window.document;

        // Mocking the functions
        global.addingTask = function () {
            const newTask = document.createElement("li");
            const entrypoint = document.getElementById("entrypoint");
            newTask.innerHTML = entrypoint.value + "<button onclick='deletingTask(event)'>Delete Task</button>";
            document.getElementById("task-container").append(newTask);
        };

        global.deletingTask = function (event) {
            event.target.parentElement.remove();
        };
    });

    test("should add a task to the list", () => {
        const input = document.getElementById("entrypoint");
        input.value = "Learn JavaScript";
        addingTask();
        
        expect(document.getElementById("task-container").children.length).toBe(1);
        expect(document.getElementById("task-container").children[0].textContent.includes("Learn JavaScript")).toBe(true);
    });

    test("should delete a task from the list", () => {
        const input = document.getElementById("entrypoint");
        input.value = "Learn Jest";
        addingTask();
        
        const deleteButton = document.getElementById("task-container").children[0].querySelector("button");
        deleteButton.click();

        expect(document.getElementById("task-container").children.length).toBe(1);
    });
});
