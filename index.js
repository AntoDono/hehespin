document.getElementById("velocity").addEventListener('change', (change) => {
    const initialValue = 50000
    const world = document.getElementById("world")
    document.getElementById("world").animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(3600deg)' }
    ], {
        duration: initialValue / document.getElementById("velocity").value || 1,
        iterations: Infinity
    })
})

document.getElementById("world").animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(3600deg)' }
], {
    duration: 50000,
    iterations: Infinity
})