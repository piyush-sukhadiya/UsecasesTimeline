import template from './newCase.html';

export default {
    template: template,
    controller: class NewCaseComponent {

        constructor($mdToast, newCaseService) {
            this.$mdToast = $mdToast;
            this.newCaseService = newCaseService;
        }

        $onInit() {
            this.resetNewUseCase();
        }

        resetNewUseCase() {
            this.newCase = {
                title: "",
                body: ""
            };
            if (this.newCaseForm) {
                this.newCaseForm.$setPristine();
                this.newCaseForm.$setValidity();
                this.newCaseForm.$setUntouched();
            }
        }

        showToast(isSuccess) {
            this.$mdToast.show(
                this.$mdToast.simple()
                .position('top right')
                .textContent(isSuccess ? 'Use case Saved Successfully.' : 'Use case Not Saved. Please Retry.')
                .hideDelay(3000)
            );
        }

        saveNewCase() {
            this.newCaseService.saveNewCase(this.newCase).then(() => {
                this.showToast(true);
                this.resetNewUseCase();
            }, () => this.showToast(false));
        }
    }
}