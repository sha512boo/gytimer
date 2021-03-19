
<snippet>
    <content><![CDATA[
# ${1:gytimer}

When working in a project, I encountered incorrect work of the usual setTimeout timeout function, so I decided to write a custom function.

## Installation

$ npm install gytimer

## Usage 

`const { setCustomTimeout, clearCustomTimeout, isCustomTimeoutExists } = require('./gytimer')` 

`const firstTimeout = setCustomTimeout(() => {`
    `console.log("This timeout wouldn't work!")`
`}, 1000)`

`if (isCustomTimeoutExists(firstTimeout)) clearCustomTimeout(firstTimeout)`

`setCustomTimeout(() => {`
    `console.log("This timeout would work!")`
`}, 1000)`


`let defaultTimeoutStart = Date.now()`
`setTimeout(() => {`
    console.log(`Default timeout has worked for ${Date.now() - defaultTimeoutStart} ms (Condition: 1000 ms)`)
}, 1000)`

`let customTimeoutStart = Date.now()`
`setCustomTimeout(() => {`
    `console.log(`Custom timeout has worked for ${Date.now() - customTimeoutStart} ms (Condition: 1000 ms)`)`
`}, 1000)` 
## Credits
sha512boo
## License
ISC
</content>
    <tabTrigger>readme</tabTrigger>
</snippet>