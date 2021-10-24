document.addEventListener("DOMContentLoaded", () => {

    // get the form input and fire the event in response to the submit
    const newHomeworkForm = document.getElementById("create-task-form");

    newHomeworkForm.addEventListener("submit", createNewHomework);
    
    // get the form input and fire the event in response to the submit
    const newSemesterForm = document.getElementById("create-semester-form");

    newSemesterForm.addEventListener("submit", createNewSemester);

    // get the form input and fire the event in response to the submit
    const newWeekForm = document.getElementById("create-week-form");

    newWeekForm.addEventListener("submit", createNewWeek);

})

// Creating and adding a new homework and it's descriptions/details


const createNewHomework = homework => {
    // stop from trying to submit the form
    homework.preventDefault();

    const newHomeworkDescription = document.getElementById("new-task-description")
    const newHomework = document.createElement("li");
    newHomework.innerText = newHomeworkDescription.value;

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    appendNewHomework(newHomework);

    // delete button added to screen
    appendNewHomework(deleteButton);
    deleteButton.addEventListener('click', deleteAssignment);

    homework.target.reset();

}

const appendNewHomework = homework => {
    document.getElementById("assignments_list").appendChild(homework);
}

const deleteAssignment = () => {
    let tasks = document.getElementById("assignments_list");
    tasks.remove();
}

// Creating and adding a new semester and it's descriptions/details

const createNewSemester = semester => {
    // stop from trying to submit the form
    semester.preventDefault();

    const newSemesterDescription = document.getElementById("new-semester-description")
    const newSemester = document.createElement("p");
    newSemester.innerText = newSemesterDescription.value;

    appendNewSemester(newSemester);
    semester.target.reset();

}

const appendNewSemester = semester => {
    document.getElementById("semester").appendChild(semester);
}

// Creating and adding a new week and it's descriptions/details

const createNewWeek = week => {
    // stop from trying to submit the form
    week.preventDefault();

    const newWeekDescription = document.getElementById("new-week-description")
    const newWeek = document.createElement("p");
    newWeek.innerText = newWeekDescription.value;

    appendNewWeek(newWeek);
    week.target.reset();

}

const appendNewWeek = week => {
    document.getElementById("week").appendChild(week);
}