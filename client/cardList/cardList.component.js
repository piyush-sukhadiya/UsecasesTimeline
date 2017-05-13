import template from './cardList.html';

export default {
    template: template,
    controller: class CardListComponent {

        constructor($scope, $mdDialog, cardListService) {
            this.$scope = $scope;
            this.cardListService = cardListService;
            this.$mdDialog = $mdDialog;
        }

        $onInit() {
            this.cardListService.getUseCases().then((res) => {
                this.usecases = res;
            });
        }

        getMileStones(milestones) {
            return milestones.map((mileStone, index) => {
                return {
                    content: mileStone.name_en,
                    start: mileStone.start_date,
                    end: mileStone.end_date,
                    id: index
                }
            })
        }

        showTimeline(ev, useCase) {
            if (useCase && useCase.milestones.length) {
                this.milestones = this.getMileStones(useCase.milestones);
                this.$mdDialog.show({
                    template: '<timeline milestones="$ctrl.milestones"></timeline>',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    scope: this.$scope,
                    preserveScope: true,
                    clickOutsideToClose: true
                });
            }
        }
    }
}