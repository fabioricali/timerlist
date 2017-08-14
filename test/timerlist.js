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
    });

    describe('setInterval', function () {
        it('should be run for 3000 ms', (done) => {

            const timer = new Timerlist();
            let calls = 0;

            timer.setInterval('myname', (param)=>{
                if(++calls === 3)
                    done();
                console.log(calls);
                console.log('hello', param);
            }, 100, 'world');

        });
    });

});