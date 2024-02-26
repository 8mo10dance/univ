call()

async function call() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/tasks')
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}
