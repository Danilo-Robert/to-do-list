import { defineStore } from 'pinia'
import { useAlertStore } from './alert.ts';

const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [ ],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTaskField: false
    }),
    actions: {
        addTask() {
            if(this.titleTaskCreating.length <= 4) return;
            this.tasks.push({
                title: this.titleTaskCreating,
                description: "Description",
                done: false
            });
            this.titleTaskCreating = "";
            this.saveLocalData();
            alertStore.notifyAlert();
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
        },
        getTasks() {
            let items = localStorage.getItem('tasks')
            if (items)
                this.tasks = JSON.parse(items);
        },
        toogleDoneTask(index){
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }
    }
})
