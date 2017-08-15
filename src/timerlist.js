/**
 * @ignore
 */
const ERROR_MESSAGE = [
    'name must be a string',
    'callback must be a function',
    'delay must be a number',
];

class TimerList {

    /**
     * @constructor
     * @example
     * const TimerList = require('timerlist');
     * const timer = new TimerList();
     * timer.setTimeout('myTimer', ()=>{
     *      console.log('my timer is running');
     * }, 1000);
     */
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
     * Create timer
     * @param params {Object}
     * @private
     * @ignore
     */
    _createTimer(params) {
        if(typeof params.name !== 'string')
            throw new Error(ERROR_MESSAGE[0]);

        if(typeof params.callback !== 'function')
            throw new Error(ERROR_MESSAGE[1]);

        if(typeof params.delay !== 'number')
            throw new Error(ERROR_MESSAGE[2]);

        params.args.unshift(params.callback, params.delay);

        if(params.type === 'timeout') {

            if (this.getTimeout(params.name))
                this.clearTimeout(params.name);

            this.timers.timeout[params.name] = setTimeout.apply(this, params.args);
        } else {

            if (this.getInterval(params.name))
                this.clearInterval(params.name);

            this.timers.interval[params.name] = setInterval.apply(this, params.args);
        }
    }

    /**
     * Set timeout
     * @param name {string} timer name
     * @param callback {Function} callback function
     * @param delay=0 {number} delay interval
     * @param [args] {...args} optional arguments
     * @example
     * timer.setTimeout('my timer', myListener, 1000);
     */
    setTimeout(name, callback, delay = 0, ...args) {
        this._createTimer({
            type: 'timeout',
            name: name,
            callback: callback,
            delay: delay,
            args: args
        });
    }

    /**
     * Set interval
     * @param name {string} timer name
     * @param callback {Function} callback function
     * @param delay=0 {number} delay interval
     * @param [args] {...args} optional arguments
     * @example
     * timer.setInterval('my timer', myListener, 1000);
     */
    setInterval(name, callback, delay = 0, ...args) {
        this._createTimer({
            type: 'interval',
            name: name,
            callback: callback,
            delay: delay,
            args: args
        });
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
        return this.timers.interval[name]._called;
    }

    /**
     * Get all timers
     * @returns {{timeout: {}, interval: {}}|*}
     */
    getTimers() {
        return this.timers;
    }

    /**
     * Destroy all timers
     */
    clearAll() {
        for(let i in this.timers.timeout){
            if(this.timers.timeout.hasOwnProperty(i))
                this.clearTimeout(this.timers.timeout[i]);
        }
        for(let i in this.timers.interval){
            if(this.timers.interval.hasOwnProperty(i))
                this.clearTimeout(this.timers.interval[i]);
        }
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
module.exports._ERROR_MESSAGE = ERROR_MESSAGE;