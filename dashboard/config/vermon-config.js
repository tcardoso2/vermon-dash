profiles = {
    default: {
      SystemEnvironment: {
        command: 'echo We Are Vermon!',
        interval: 300
      },
      MotionDetector: {
        name: 'MD 1'
      },
      MotionDetector: {
        name: 'MD 2'
      },
      BaseNotifier: {
      },
      SystemEnvironmentFilter: [
        {
          freeMemBelow: 1000,
          applyTo: 'MD 1',
          stdoutMatchesRegex: 'We Are Vermon!'
        }]
    }
  }
  
  exports.profiles = profiles
  exports.default = profiles.default