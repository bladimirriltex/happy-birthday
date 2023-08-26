<template>
    <div class="wrapper-countdown">

        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>

        <div class="wrapper">
            <img :src="img12" class="img-countdown">
        </div>
        <div>
            <h1>Tu cumpleaños en</h1>
            <div class="countdown-wrapper">

                <div class="countdown-item">
                    <SVGCircle :radius="daysRadius" />
                    {{ days }}
                    <span>días</span>
                </div>
                <div class="countdown-item">
                    <SVGCircle :radius="hoursRadius" />
                    {{ hours }}
                    <span>Horas</span>
                </div>
                <div class="countdown-item">
                    <SVGCircle :radius="minutesRadius" />
                    {{ minutes }}
                    <span>Minutos</span>
                </div>
                <div class="countdown-item">
                    <SVGCircle :radius="secondsRadius" />
                    {{ seconds }}
                    <span>Segundos</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onBeforeUnmount, computed } from 'vue';
import moment from 'moment-timezone';
import SVGCircle from '../components/SVGCircle.vue';
import img12 from '../assets/img/12.png';
import router from '../router';

const targetDateTime = moment.tz("02/09/2023 23:59:59", "DD/MM/YYYY HH:mm:ss", "America/Lima");

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let interval = null;

const isHappyBirthday = ref(false);


interval = setInterval(() => {
    const now = moment();
    const countdown = moment.duration(targetDateTime.diff(now));

    if (now.isBefore(targetDateTime)) {
        days.value = countdown.days();
        hours.value = countdown.hours();
        minutes.value = countdown.minutes();
        seconds.value = countdown.seconds();
        localStorage.setItem("isHappyBirthday", isHappyBirthday.value)
    }else{
        isHappyBirthday.value = true;
        localStorage.setItem("isHappyBirthday", isHappyBirthday.value)
        router.push('/happy-birthday-jarlin')
        clearInterval(interval);
    }


}, 1000);

onBeforeUnmount(() => {
    if (interval) {
        clearInterval(interval);
    }
});

const mapNumber = (number, in_min, in_max, out_min, out_max) => {
    return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const daysRadius = computed(() => {
    return mapNumber(days.value, 30, 0, 0, 360);
});

const hoursRadius = computed(() => {
    return mapNumber(hours.value, 24, 0, 0, 360);
});

const minutesRadius = computed(() => {
    return mapNumber(minutes.value, 60, 0, 0, 360);
});

const secondsRadius = computed(() => {
    return mapNumber(seconds.value, 60, 0, 0, 360);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato');

body {
    overflow: hidden;
}

.wrapper-countdown {
    background-image: url('../assets/img/space-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    margin: 0;
    animation: animateBg 50s linear infinite;
    overflow: hidden;
}

h1 {
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    color: white;
}

.countdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.countdown-item {
    color: #f5f5f5;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 30px;
    margin: 10px;
    padding-top: 10px;
    position: relative;
    width: 100px;
    height: 100px;
}

.countdown-item span {
    color: #f9f9f9;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.countdown-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
}


.wrapper {
    display: flex;
    justify-content: center;
}


.img-countdown {
    width: 200px;
    border-radius: 5%;
    transition: transform 0.3s;
    animation: fly 0.7s alternate infinite;
}


@keyframes fly {
    from {
        transform: translateY(0.4em);
    }

    to {
        transform: translateY(-0.2em);
    }
}



.star {
    position: absolute;
    top: -20%;
    right: -30%;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    animation: animate 3s linear infinite;
}

.star::before {
    content: '';
    position: absolute;

    transform: translateY(-0%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
}

@keyframes animate {
    0% {
        transform: rotate(220deg) translateX(200px);
        opacity: 1;
    }

    70% {
        opacity: 1;

    }

    100% {
        transform: rotate(220deg) translateX(-280px);
        opacity: 0;
    }

}

.star:nth-child(1) {
    top: 300px;
    right: 10px;
    left: 500px;
    animation-delay: 0;
    animation-duration: 2s;
}

.star:nth-child(2) {
    top: 400px;
    right: 300px;
    left: 200px;
    animation-delay: 0.2s;
    animation-duration: 3s;
}

.star:nth-child(3) {
    top: 50px;
    right: 600px;
    left: 100px;
    animation-delay: 0.4s;
    animation-duration: 2s;
}

.star:nth-child(4) {
    top: 100px;
    right: 300px;
    left: 500px;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
}
</style>
  