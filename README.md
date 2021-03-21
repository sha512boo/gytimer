
<snippet>
<content><![CDATA[
# ${1:gytimer}

When working in a project, I encountered incorrect work of the usual setTimeout timeout function, so I decided to write a custom function.

## Installation

$ npm install gytimer

## Usage 
```javascript
const { setCustomTimeout, clearCustomTimeout, isCustomTimeoutExists, sleep } = require('gytimer') 

const firstTimeout = setCustomTimeout(() => {
    console.log("This timeout wouldn't work!")
}, 1000)

if (isCustomTimeoutExists(firstTimeout)) clearCustomTimeout(firstTimeout)

setCustomTimeout(() => {
    console.log("This timeout would work!")
}, 1000)


let defaultTimeoutStart = Date.now()
setTimeout(() => {
    console.log(`Default timeout has worked for ${Date.now() - defaultTimeoutStart} ms (Condition: 1000 ms)`) // Default timeout has worked for 1064 ms (Condition: 1000 ms) 
}, 1000)

let customTimeoutStart = Date.now()
setCustomTimeout(() => {
    console.log(`Custom timeout has worked for ${Date.now() - customTimeoutStart} ms (Condition: 1000 ms)`) // Custom timeout has worked for 1012 ms (Condition: 1000 ms) + has worked correctly
}, 1000)



async function testSleep (duration) {
    let sleepStart = Date.now()
    console.log("Sleep started")
    for (let key in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        await sleep(duration)
        console.log(key)
    }
    console.log(`Log after sleep has sent (${Date.now() - sleepStart})`) // 20050ms
}

testSleep(2000)
```
## Credits
sha512boo
## License
ISC
</content>
</snippet>
