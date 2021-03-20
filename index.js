

const timeoutEventPool = []

module.exports = {
    setCustomTimeout: (func, duration = 0) => {
        if (isNaN(duration) || duration < 0) duration = 0
        let startTimeout = Date.now()
        let timeout = setInterval(() => {
            try {
                if (Date.now() >= startTimeout + duration) {
                    func()
                    clearInterval(timeout)
                }
            } catch (err) {
                console.log(err)
            }
        })
        timeout.id = getGeneratedTimeoutID()
        timeoutEventPool.push(timeout)
        return timeout
    }, 
    clearCustomTimeout: (object) => {
        let timeout = getTimeoutByID(object.id)
        if (timeout) {
            clearInterval(timeout)
            timeoutEventPool.splice(timeoutEventPool.indexOf(timeout), 1)
        }
    },
    isCustomTimeoutExists: (object) => {
        let result = !!getTimeoutByID(object.id) 
        return result
    }
}

const getTimeoutByID = (id) => {
	let result = null
    for (let key in timeoutEventPool) {
        if (timeoutEventPool[key].id == id) {
            result = timeoutEventPool[key]
            break
        }
    }
	return result
}

const getGeneratedTimeoutID = () => {
	let result = null
	while (!result) {
		result = getRandomInteger(1, 100000)
		if (!!getTimeoutByID(result)) result = null
	}
	return result
}

const getRandomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
