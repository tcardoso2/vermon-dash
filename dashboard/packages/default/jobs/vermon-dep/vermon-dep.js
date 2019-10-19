/**
 * Job: vermon-dep
 * This Jobs injects initiates vermon and injects it into
 * the dependencies.app.vermon variable.
 * It is not a great way to inject a custom object, but till the time
 * I've not found a good way on how to do it without customizing the
 * Atlasboard itself.
 * Dependencies: This relies on the existance ofr dependencies.app
 */

let vermon = require('../../../../../../vermon/main');
//require('vermon');

module.exports = {

  /**
   * Executed on job initialisation (only once)
   * @param config
   * @param dependencies
   */
  onInit: function (config, dependencies) {
    dependencies.app.vermon = vermon;
    vermon.setLogLevel('info');
    vermon.configure('config/vermon-config.js');

    vermon.watch().then((environment) => {
      dependencies.logger.info(`Watching environment ${environment.name}.`);
    }).catch((e) => {
      throw new Error('TODO: Error thrown! Handle with a Job callbak in the future!');
    });
  }
};