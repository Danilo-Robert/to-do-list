import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            { title: "Week 1", description: "Game out vs @Broncos" },
            { title: "Week 2", description: "Practice" },
        ],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTaskField: false
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating,
                description: "Description",
            });
            this.titleTaskCreating = "";
            this.saveLocalData();
        },
        toogleEdit(index) {
            this.showDialogTaskField = !this.showDialogTaskField;
            if (index != null) this.indexTaskSelected = index;
            this.saveLocalData();
        },
        toogleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) this.indexTaskSelected = index;
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1)
            this.toogleDelete();
            this.saveLocalData();
        },
        saveLocalData() {
            localStorage.setItem('tasks', 
                JSON.stringify(this.tasks))
        }
    }
})
