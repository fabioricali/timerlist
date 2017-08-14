class TimerList {

    constructor() {
        this.timers = {
            timeout: {},
            interval: {}
        };
    }

    /**
     * Get max number delay (approximately 24.8 days)
     * @returns {number}
     */
    static maxDelay() {
        return 2147483647;
    }

    /**
     * Set timeout
     * @param name {string} timer name
     * @param callback {Function} callback function
     * @param delay=0 {number} delay interval
     * @param args {...args} optional arguments
     */
    setTimeout(name, callback, delay = 0, ...args) {
        if(typeof name !== 'string')
            throw new Error('name must be a string');

        if(typeof callback !== 'function')
            throw new Error('callback must be a function');

        if(typeof delay !== 'number')
            throw new Error('delay must be a number');

        console.log(TimerList.maxDelay());

        args.unshift(callback, delay);
        this.timers.timeout[name] = setTimeout.apply(this, args);
    }

    /**
     * Set interval
     * @param name {string} timer name
     * @param callback {Function} callback function
     * @param delay=0 {number} delay interval
     * @param args {...args} optional arguments
     */
    setInterval(name, callback, delay = 0, ...args) {
        if(typeof name !== 'string')
            throw new Error('name must be a string');

        if(typeof callback !== 'function')
            throw new Error('callback must be a function');

        if(typeof delay !== 'number')
            throw new Error('delay must be a number');

        args.unshift(callback, delay);
        this.timers.interval[name] = setInterval.apply(this, args);
    }

    /**
     * Check if a timeout was called
     * @param name {string} timer name
     * @returns {boolean}
     */
    isTimeoutCalled(name) {
        return this.timers.timeout[name]._called;
    }

    /**
     * Check if an interval was called
     * @param name {string} timer name
     * @returns {boolean}
     */
    isIntervalCalled(name) {
        return this.timers.timeout[name]._called;
    }

    /**
     * Get timer timeout reference
     * @param name {string} timer name
     * @returns {*}
     */
    getTimeout(name) {
        return this.timers.timeout[name];
    }

    /**
     * Get timer interval reference
     * @param name {string} timer name
     * @returns {*}
     */
    getInterval(name) {
        return this.timers.interval[name];
    }

    /**
     * Destroy a timeout
     * @param name {string} timer name
     */
    clearTimeout(name) {
        clearTimeout(this.timers.timeout[name]);
        delete this.timers.timeout[name];
    }

    /**
     * Destroy an interval
     * @param name {string} timer name
     */
    clearInterval(name) {
        clearInterval(this.timers.interval[name]);
        delete this.timers.interval[name];
    }
}

module.exports = TimerList;