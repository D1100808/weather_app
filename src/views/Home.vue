<template>

  <div class="main">

    <div class="input">
      <Input @city="handleVal"/>
    </div>
  
    <!-- Weather -->
      <div class="container" v-if="weather">
        <CityName :weather="weather" :icon="icon" :localTime="localTime"/>
      </div>
      
      <div class="error" v-if="error" style="color:red">
        {{error}}
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import CityName from '@/components/CityName.vue'
import Input from '../components/Input.vue'
export default {
  name: "Home",
  components: { CityName, Input },
  setup() {
    const weather = ref('');
    const cityName = ref("");
    const error = ref('')
    const icon = ref('')
    const localTime = ref('')


    // For Input Values
    const handleVal = async (val) => {
      if (val) {
        cityName.value = val.value
        
        Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=e863cdf64c98a0cba2d3ed41200a115b`)
            .then(res => res.ok && res.json() || Promise.reject(res)),
          fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=b76a91eecd144298a58ed54d03d44e89&location=${cityName.value}`)
            .then(res => res.ok && res.json() || Promise.reject(res))
        ]).then(data => {
          icon.value = data[0].weather[0].icon
          weather.value = Object.assign({}, data[0]);
          localTime.value = data[1].datetime
        }).catch(err => {
          error.value = 'City Not Found'
        })
      }
      weather.value = ''
      error.value = ''
    }

    return { weather, error, cityName, handleVal, icon, localTime };
    }
}
</script>

<style>
.main{
    background-color: #b9faf8;
    width: 800px;
    height: 800px;
    margin: 0 auto;
  }
</style>