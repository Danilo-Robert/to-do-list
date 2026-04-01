import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "error",
    text: "Teste!!!"
  }),
  actions: {
    notifyAlert() {
        this.showAlert = true;
        setTimeout(() => {
            this.showAlert = false;
        }, 3000);
    },
    notifyAlertCreated() {
      this.type = "success";
      this.text = "Tarefa criada com sucesso!";
      this.notifyAlert();
    },
    notifyAlertDeleted() {
      this.type = "warning";
      this.text = "Tarefa deletada com sucesso!";
      this.notifyAlert();
    },
    notifyAlertUpdated() {
      this.type = "info";
      this.text = "Tarefa atualizada com sucesso";
      this.notifyAlert();
    }
  }
})