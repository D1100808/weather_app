import { ref } from "vue"

const getData = async () => {
    const info = ref(null)
    const error = ref(null)

            const res = await fetch(
              'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e863cdf64c98a0cba2d3ed41200a115b'
            )
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err=>console.log(err))

        

    return { info, error, load };
}

export default getData;