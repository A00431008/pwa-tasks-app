# Task App (Progressive Web App - PWA)

This app is a simple task (or ToDo app) that lets users add tasks, view them, mark them complete and delete them. This app uses localstorage for storing data and service workers for offline functionality.

# Installation Instructions

    - Clone the repository
    - In the project folder, open command prompt and run `npm install` to install all dependencies
    - Build the app with `npm run build`
    - Serve the build app `npm install -g serve` then `serve -s build`


# Features and instructions
    - **Add Tasks**: Type any task and click on the add button and the task will be added to the list
    - **View Tasks**: The added tasks are listed in the viewing pane. Tasks in red are pending tasks and tasks in green are completed tasks
    - **Delete Tasks**: In any task, click on `Mark as Complete` button to complete the task. Then delete button will appear which removes the task when clicked
    - **Offline Functionality**: The app works offline and users can use it without connection to the internet