<template>
<div class="container text-center">

    <div class="row justify-content-center mt-1">
        <div class="col-4 p-3 border bg-light rounded">
            <img :src="`https://openweathermap.org/img/w/${icon}.png`" style="background:#b9faf8; margin-bottom:5px; width: 60px;">
            <div class="card-body">
                <h5 class="card-title">{{weather.main.temp || 0}}°C</h5>
                <p class="card-text"><i class="bi bi-geo-alt-fill"></i>
                    {{weather.sys.country}}, {{weather.name}}
                </p>
            </div>
        </div>
    </div>


    <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 py-4">
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Ощущается как</p>
                <h5>{{weather.main.feels_like || 0}} °C</h5>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Влажность</p>
                <h5>{{weather.main.humidity || 0}} %</h5>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Мин температура</p>
                <h5>{{weather.main.temp_min || 0}} °C</h5>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Макс температура</p>
                <h5>{{weather.main.temp_max || 0}} °C</h5>
            </div>
        </div>

        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Облачность</p>
                <h5>{{weather.clouds.all ||0}} %</h5>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Видимость</p>
                <h5>{{weather.visibility / 1000 || 0}} км</h5>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Местное время</p>
                <h5>{{localTime || 0}}</h5>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light info">
                <p>Скорость ветра</p>
                <h5>{{weather.wind.speed || 0}} м/сек</h5>
            </div>
        </div>
    </div>



</div>

</template>

<script>
export default {
    props: ['weather', 'icon', 'localTime'],
    setup() {
        

        return { }
    }
}
</script>

<style>
.row p{
    color: gray;
}

.row h5{
    font-weight: bold;
    margin-bottom: 5px;
}
.info{
    height: 95px;
    width: 250px;
    margin: 3px auto;
}
</style>