const Timerlist = require('../src/timerlist');
const be = require('bejs');

describe('timerlist', function () {
    this.timeout(5000);

    describe('setTimeout', function () {
        it('should be run after 100 ms', (done) => {

            const timer = new Timerlist();

            timer.setTimeout('myname', (param)=>{
                console.log('hello', param);
                done();
            }, 100, 'world');

        });
        it('reset timeout, should be run once', (done) => {

            const timer = new Timerlist();

            timer.setTimeout('myname', (param)=>{
                console.log('hello', param);
                done();
            }, 1000, 'world');

            timer.setTimeout('myname', (param)=>{
                console.log('hello', param);
                done();
            }, 1000, 'world');

        });
    });

    describe('setInterval', function () {
        it('should be run for 300 ms', (done) => {

            const timer = new Timerlist();
            let calls = 0;

            timer.setInterval('myname', (param)=>{
                if(++calls === 3) {
                    console.log(timer.getInterval('myname'));
                    // destroy timer
                    timer.clearInterval('myname');
                    done();
                }
                console.log(calls);
                console.log('hello', param);
            }, 100, 'world');

        });

        it('reset interval, should be run once', (done) => {

            const timer = new Timerlist();

            console.log(timer.getTimers());

            timer.setInterval('myname', (param)=>{
                console.log('hello', param);
                done();
            }, 1500, 'world');

            timer.setInterval('myname', (param)=>{
                console.log('hello', param);
                done();
            }, 1500, 'world');

        });
    });

    describe('clearTimeout', function () {
        it('undefined, should be return void', () => {

            const timer = new Timerlist();

            timer.clearTimeout('myname');

        });
        it('should be return undefined', () => {

            const timer = new Timerlist();
            timer.setTimeout('myname', ()=>{}, 2000);
            be.err.object(timer.getTimeout('myname'));
            timer.clearTimeout('myname');
            be.err.undefined(timer.getTimeout('myname'));
        });
    });

    describe('clearInterval', function () {
        it('undefined, should be return void', () => {

            const timer = new Timerlist();

            timer.clearInterval('myname');

        });
        it('should be return undefined', () => {

            const timer = new Timerlist();
            timer.setInterval('myname', ()=>{}, 2000);
            be.err.object(timer.getInterval('myname'));
            timer.clearInterval('myname');
            be.err.undefined(timer.getInterval('myname'));
        });
    });

    describe('clearAll', function () {
        it('should be return empty timers list', () => {

            const timer = new Timerlist();

            timer.setTimeout('myname1', ()=>{}, 100);
            timer.setTimeout('myname2', ()=>{}, 100);
            timer.setTimeout('myname3', ()=>{}, 100);

            timer.setInterval('myname1', ()=>{}, 100);
            timer.setInterval('myname2', ()=>{}, 100);
            timer.setInterval('myname3', ()=>{}, 100);

            let {timeout, interval} = timer.getTimers();
            be.err.not.empty(timeout);
            be.err.not.empty(interval);

            timer.clearAll();

            let {timeout1, interval1} = timer.getTimers();
            be.err.empty(timeout1);
            be.err.empty(interval1);
        });
    });

    describe('maxDelay', function () {
        it('should be return a number', ()=>{
            be.err.equal(Timerlist.maxDelay(), 2147483647);
        })
    });

    describe('isTimeoutCalled', function () {
        it('should be return true', (done)=>{
            const timer = new Timerlist();
            timer.setTimeout('myname', ()=>{}, 500);
            setTimeout(()=>{
                be.err(done).true(timer.isTimeoutCalled('myname'));
            }, 600);
        });
        it('should be return false', ()=>{
            const timer = new Timerlist();
            timer.setTimeout('myname', ()=>{}, 500);
            be.err.false(timer.isTimeoutCalled('myname'));
        });
    });

    describe('isIntervalCalled', function () {
        it('should be return true', (done)=>{
            const timer = new Timerlist();
            timer.setInterval('myname', ()=>{}, 500);
            setTimeout(()=>{
                be.err(done).true(timer.isIntervalCalled('myname'));
                timer.clearInterval('myname');
            }, 600);
        });
        it('should be return false', ()=>{
            const timer = new Timerlist();
            timer.setInterval('myname', ()=>{}, 500);
            be.err.false(timer.isIntervalCalled('myname'));
            timer.clearInterval('myname');
        });
    });

    describe('_createTimer', function () {
        it('undefined name, should be return error', (done)=>{
            const timer = new Timerlist();
            try {
                timer._createTimer({
                    type: 'timeout'
                });
            } catch (e) {
                console.log(e.message);
                be.err(done).equal(e.message, Timerlist._ERROR_MESSAGE[0]);
            }
        });

        it('undefined callback, should be return error', (done)=>{
            const timer = new Timerlist();
            try {
                timer._createTimer({
                    name: 'myname',
                    type: 'timeout'
                });
            } catch (e) {
                console.log(e.message);
                be.err(done).equal(e.message, Timerlist._ERROR_MESSAGE[1]);
            }
        });

        it('undefined delay, should be return error', (done)=>{
            const timer = new Timerlist();
            try {
                timer._createTimer({
                    name: 'myname',
                    callback: ()=>{},
                    type: 'timeout'
                });
            } catch (e) {
                console.log(e.message);
                be.err(done).equal(e.message, Timerlist._ERROR_MESSAGE[2]);
            }
        });
    });

});