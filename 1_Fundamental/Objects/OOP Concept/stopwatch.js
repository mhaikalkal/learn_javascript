function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      console.warn("Stopwatch is already running");
      return;
    }

    running = true;
    console.log("started");
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      console.warn("Stopwatch is not running");
      return;
    }

    running = false;
    endTime = new Date();

    duration += (endTime.getTime() - startTime.getTime()) / 1000;
    console.log(`duration: ${duration}s`);
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
sw.start();
// sw.start();
// sw.stop();
// sw.reset();
