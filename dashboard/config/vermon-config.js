profiles = {
    default: {
      NodeEnvironment: {
        interval: 20000,
      	killAfter: undefined,
	      createDetectors: true 
      },
      MotionDetector: {
	      name: "MD1"
      },
      BaseNotifier: {
      }
    }
  }
  
  exports.profiles = profiles
  exports.default = profiles.default
