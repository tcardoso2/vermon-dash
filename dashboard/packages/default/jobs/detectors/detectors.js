/**
 * Job: detectors
 *
 * Expected configuration:
 *
 * ## PLEASE ADD AN EXAMPLE CONFIGURATION FOR YOUR JOB HERE
 * { 
 *   myconfigKey : [ 
 *     { serverUrl : 'localhost' } 
 *   ]
 * }
 */
let hasRun = false;
module.exports = {

  /**
   * Executed on job initialisation (only once)
   * @param config
   * @param dependencies
   */
  onRun: function (config, dependencies) {

    /*
    This is a good place for initialisation logic, like registering routes in express:

    dependencies.logger.info('adding routes...');
    dependencies.app.route("/jobs/mycustomroute")
        .get(function (req, res) {
          res.end('So something useful here');
        });
    */
    if (!hasRun) {
      hasRun = true;
      var jobWorker = this;
      vermon = dependencies.app.vermon;
      vermon.GetMotionDetectors().forEach((detector) => {
        detector.on('hasDetected', (oldState, newState, env) => {
          jobWorker.pushUpdate({title: config.widgetTitle, detectors: vermon.GetMotionDetectors()});
        })
      });  
    }
  }
};