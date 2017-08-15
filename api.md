<a name="TimerList"></a>

## TimerList
**Kind**: global class  

* [TimerList](#TimerList)
    * _instance_
        * [.setTimeout(name, callback, delay, [...args])](#TimerList+setTimeout)
        * [.setInterval(name, callback, delay, [...args])](#TimerList+setInterval)
        * [.isTimeoutCalled(name)](#TimerList+isTimeoutCalled) ⇒ <code>boolean</code>
        * [.isIntervalCalled(name)](#TimerList+isIntervalCalled) ⇒ <code>boolean</code>
        * [.getTimers()](#TimerList+getTimers) ⇒ <code>Object</code> \| <code>\*</code>
        * [.clearAll()](#TimerList+clearAll)
        * [.getTimeout(name)](#TimerList+getTimeout) ⇒ <code>\*</code>
        * [.getInterval(name)](#TimerList+getInterval) ⇒ <code>\*</code>
        * [.clearTimeout(name)](#TimerList+clearTimeout)
        * [.clearInterval(name)](#TimerList+clearInterval)
    * _static_
        * [.maxDelay()](#TimerList.maxDelay) ⇒ <code>number</code>

<a name="TimerList+setTimeout"></a>

### timerList.setTimeout(name, callback, delay, [...args])
Set timeout

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td></td><td><p>timer name</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td></td><td><p>callback function</p>
</td>
    </tr><tr>
    <td>delay</td><td><code>number</code></td><td><code>0</code></td><td><p>delay interval</p>
</td>
    </tr><tr>
    <td>[...args]</td><td><code>args</code></td><td></td><td><p>optional arguments</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
timer.setTimeout('my timer', myListener, 1000);
```
<a name="TimerList+setInterval"></a>

### timerList.setInterval(name, callback, delay, [...args])
Set interval

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td></td><td><p>timer name</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td></td><td><p>callback function</p>
</td>
    </tr><tr>
    <td>delay</td><td><code>number</code></td><td><code>0</code></td><td><p>delay interval</p>
</td>
    </tr><tr>
    <td>[...args]</td><td><code>args</code></td><td></td><td><p>optional arguments</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
timer.setInterval('my timer', myListener, 1000);
```
<a name="TimerList+isTimeoutCalled"></a>

### timerList.isTimeoutCalled(name) ⇒ <code>boolean</code>
Check if a timeout was called

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>timer name</p>
</td>
    </tr>  </tbody>
</table>

<a name="TimerList+isIntervalCalled"></a>

### timerList.isIntervalCalled(name) ⇒ <code>boolean</code>
Check if an interval was called

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>timer name</p>
</td>
    </tr>  </tbody>
</table>

<a name="TimerList+getTimers"></a>

### timerList.getTimers() ⇒ <code>Object</code> \| <code>\*</code>
Get all timers

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<a name="TimerList+clearAll"></a>

### timerList.clearAll()
Destroy all timers

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<a name="TimerList+getTimeout"></a>

### timerList.getTimeout(name) ⇒ <code>\*</code>
Get timer timeout reference

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>timer name</p>
</td>
    </tr>  </tbody>
</table>

<a name="TimerList+getInterval"></a>

### timerList.getInterval(name) ⇒ <code>\*</code>
Get timer interval reference

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>timer name</p>
</td>
    </tr>  </tbody>
</table>

<a name="TimerList+clearTimeout"></a>

### timerList.clearTimeout(name)
Destroy a timeout

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>timer name</p>
</td>
    </tr>  </tbody>
</table>

<a name="TimerList+clearInterval"></a>

### timerList.clearInterval(name)
Destroy an interval

**Kind**: instance method of [<code>TimerList</code>](#TimerList)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>timer name</p>
</td>
    </tr>  </tbody>
</table>

<a name="TimerList.maxDelay"></a>

### TimerList.maxDelay() ⇒ <code>number</code>
Get max number delay (approximately 24.8 days)

**Kind**: static method of [<code>TimerList</code>](#TimerList)  
