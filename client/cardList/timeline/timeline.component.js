import { DataSet, Timeline } from 'vis';

export default {
    bindings: {
        milestones: '<',
    },
    template: '<md-content id="timelineContainer"></md-content>',
    controller: class TimeLineComponent {
        constructor($timeout) {
            this.$timeout = $timeout;
            this.$postLink = function() {
                this.$timeout(() => {
                    this.container = document.getElementById('timelineContainer');
                    new Timeline(this.container, new DataSet(this.milestones), {});
                })
            }
        }
    }
}