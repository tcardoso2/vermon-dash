Versions:
=========

* Next versions: Show Detectors Widget. Show event triggers, run jobcallbacks on those event triggers. Be able to reuse the same vermon instance (singleton), ie. not having to instanciate it in the job, but just reference it.
* v 0.1.1: First vermon widget / job - environment info:
  - Prints information on the screen based SystemEnvironment attributes returned (e.g. mem, cpus, ...)
  - configuration file added in Atlasboard config folder (vermon-config.js)
  - Job creates instance of vermon in it´s own job, still not suitable nor tested for multiple widgets using same instance of vermon
* v 0.1.0: First commit: 
  - Atlasboard default dashboard
  - vermon dependencies added