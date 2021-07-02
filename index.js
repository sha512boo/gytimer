

const timeoutEventPool = [] 

function setCustomTimeout (func, duration = 0) {
    try {
        if (isNaN(duration) || duration < 0) duration = 0
        let startTimeout = Date.now()
        let timeout = {} 
        timeout.id = getGeneratedTimeoutID()
        timeout.interval = setInterval(() => {
            try {
                if (Date.now() >= startTimeout + duration) {
                    func()
                    clearCustomTimeout(timeout)
                }
            } catch (err) {
                clearCustomTimeout(timeout)
                console.log(err, `timeout id: ${timeout.id}`)
            }
        })
        timeoutEventPool.push(timeout)
        return timeout
    } catch (err) {
        console.log(err)
    }
} 
function clearCustomTimeout (object) {
    try {
        let timeout = getTimeoutByID(object.id)
        if (timeout) { 
            clearInterval(timeout.interval)
            timeoutEventPool.splice(timeoutEventPool.indexOf(timeout), 1)
        }
    } catch (err) {
        console.log(err)
    }
}
function isCustomTimeoutExists (object) {
    let result = !!getTimeoutByID(object.id) 
    return result
}
function getTimeoutByID (id) {
	let result = null
    for (let key in timeoutEventPool) {
        if (timeoutEventPool[key].id == id) {
            result = timeoutEventPool[key]
            break
        }
    }
	return result
} 
function getGeneratedTimeoutID () {
	let result = null
	while (!result) {
		result = getRandomInteger(1, Number.MAX_SAFE_INTEGER)
		if (!!getTimeoutByID(result)) result = null
	}
	return result
} 
function getRandomInteger (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

async function sleep (duration) {
    return new Promise((resolve) => {
        setCustomTimeout(() => {
            resolve(true)
        }, duration)
    })
}

module.exports = {
    setCustomTimeout,
    clearCustomTimeout,
    isCustomTimeoutExists,
    sleep
}