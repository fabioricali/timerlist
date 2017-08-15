<div align="center">
<br/><br/>
<h1>TimerList</h1>
<br/><br/>
Timerlist is a small module that allows you to have a reference of your timers.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/timerlist" target="_blank"><img src="https://travis-ci.org/fabioricali/timerlist.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/timerlist?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/timerlist/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

### Node.js
```
npm install timerlist --save
```

## Example
```javascript
const TimerList = require('timerlist');
const timer = new TimerList();

// Adds a timeout timer
timer.setTimeout('my timer', ()=>{
    console.log('timer boom');
}, 2000);

// Adds an interval timer
timer.setInterval('my timer', ()=>{
    console.log('timer next');
}, 100);

// Passing params to listener
timer.setTimeout('my timer', (param)=>{
    console.log('a param', param);
}, 2000, 'Hello');
```

### API Documentation
See <a href="https://github.com/fabioricali/timerlist/blob/master/api.md">https://github.com/fabioricali/timerlist/blob/master/api.md</a>

### Browser

#### Local
```html
<script src="node_modules/timerlist/dist/timerlist.min.js"></script>
```

#### CDN unpkg
```html
<script src="https://unpkg.com/timerlist/dist/timerlist.min.js"></script>
```

#### CDN jsDeliver
```html
<script src="https://cdn.jsdelivr.net/npm/timerlist/dist/timerlist.min.js"></script>
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/timerlist/blob/master/CHANGELOG.md">here</a>

## License
Flak is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>