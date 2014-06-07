import PollJobsRouteMixin from '../mixins/poll-jobs-route';

export default Ember.Route.extend(PollJobsRouteMixin, {

  model: function () {
    var applicationController = this.controllerFor('application');
    var filter = applicationController.get('filter');

    return this.store.find('job', {
      filter: filter
    });
  }

});