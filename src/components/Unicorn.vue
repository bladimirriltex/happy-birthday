<template>
    <div class="unicorn">
        <div class="face">
            <div class="cheek"></div>
            <div class="snoot">
                <div class="nose">
                    <div class="nostril"></div>
                </div>
            </div>
            <div class="eye">
                <div class="eyelashes"></div>
            </div>
            <div class="ear"></div>
            <div class="horn"></div>
            <div class="mane top"></div>
            <div class="mane mid"></div>
        </div>
        <div class="neck">
            <div class="mane end"></div>
        </div>
    </div>
</template>

<script setup>


</script>


<style scoped>
.unicorn {
    position: absolute;
    left: 45%;
    top: 40%;
}

.face {
    height: 6rem;
    width: 8rem;
    background: #EFEEEF;
    border-radius: 4rem;
    transform: rotate(20deg);
}

.face *,
.neck * {
    position: absolute;
}

.cheek {
    width: 3rem;
    height: 3rem;
    background: radial-gradient(#ECCBDF 5%, #EFEEEF 70%);
    top: 2rem;
    left: 4rem;
    border-radius: 50%;
    z-index: 1;
}

.snoot {
    height: 7rem;
    width: 14rem;
    background: #EFEEEF;
    left: -5rem;
    border-radius: 4rem;
    transform: rotate(-40deg);
}

.nose {
    height: 7rem;
    width: 3.5rem;
    background: #E4A3CA;
    border-radius: 50% 0 0 50%;
}

.nostril {
    height: 2rem;
    width: 1rem;
    background: #5A5056;
    top: 1.5rem;
    left: 1rem;
    border-radius: 50%;
}

.eye {
    width: 2.5rem;
    height: 1rem;
    background: #332A2F;
    left: 3rem;
    border-radius: 3rem 3rem 0 0;
}

.eye::after {
    content: "";
    height: 1rem;
    width: 1.5rem;
    background: #EFEEEF;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    border-radius: 3rem 3rem 0 0;
}

.eyelashes {
    height: 1rem;
    width: 0.5rem;
    background: #332A2F;
    top: -0.5rem;
    left: 1rem;
}

.eyelashes::before {
    content: "";
    height: 1rem;
    width: 0.5rem;
    background: #332A2F;
    position: absolute;
    top: 0.25rem;
    left: -1rem;
    transform: rotate(-40deg);
}

.eyelashes::after {
    content: "";
    height: 1rem;
    width: 0.5rem;
    background: #332A2F;
    position: absolute;
    top: 0.25rem;
    left: 1rem;
    transform: rotate(30deg);
}

.ear {
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-bottom: 4rem solid #EFEEEF;
    top: -5rem;
    left: 2.5rem;
    transform: rotate(-5deg);
    z-index: 1;
}

.ear::after {
    content: "";
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-bottom: 2rem solid #E4A3CA;
    position: absolute;
    top: 0.75rem;
    left: -0.75rem;
}

.horn {
    height: 7rem;
    width: 3rem;
    background: repeating-linear-gradient(-25deg,
            #FFE3AA,
            #FFE3AA 0.5rem,
            #bea97e 1rem,
            #bea97e 0.5rem);
    top: -7rem;
    left: -0.5rem;
    transform: rotate(-55deg);
    z-index: -1;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    -webkit-clip-path: polygon(50% 0, 0 100%, 100% 100%);
}

.mane.top {
    height: 2rem;
    width: 4rem;
    top: -1.5rem;
    left: 1.5rem;
    border-radius: 50%;
    box-shadow: 7px 1rem 0 6px #A891B6;
    transform: rotate(140deg);
}

.mane.top::before {
    content: "";
    height: 2rem;
    width: 3rem;
    position: absolute;
    top: 2.5rem;
    left: -3rem;
    border-radius: 50%;
    box-shadow: 5px 1rem 0 6px #FFEAD9;
    transform: rotate(260deg);
}

.mane.top::after {
    content: "";
    height: 2rem;
    width: 4rem;
    position: absolute;
    top: -0.5rem;
    left: -2rem;
    border-radius: 50%;
    box-shadow: 5px 1rem 0 6px #C6E8D7;
    transform: rotate(100deg);
}

.mane.mid {
    height: 2rem;
    width: 4rem;
    top: -1rem;
    left: 4.5rem;
    border-radius: 50%;
    box-shadow: 3px 1rem 0 8px #FFCBC1;
    transform: rotate(250deg);
    z-index: -1;
}

.mane.mid::before {
    content: "";
    height: 2rem;
    width: 4rem;
    position: absolute;
    left: -2rem;
    border-radius: 50%;
    box-shadow: 5px 1rem 0 6px #AFC8FF;
    transform: rotate(40deg);
}

.mane.mid::after {
    content: "";
    height: 2rem;
    width: 4rem;
    position: absolute;
    top: 1rem;
    left: -1rem;
    border-radius: 50%;
    box-shadow: 0 1rem 0 0.5rem #FF9CEE;
    transform: rotate(40deg);
    z-index: -1;
}

.neck {
    position: absolute;
    height: 5rem;
    width: 3rem;
    background: #EFEEEF;
    left: 5rem;
    top: 5rem;
    transform: skew(-20deg);
    z-index: -1;
}

.mane.end {
    height: 2rem;
    width: 4rem;
    top: 1rem;
    border-radius: 50%;
    box-shadow: 3px 1rem 0 8px #B6EDB6;
    transform: rotate(270deg);
}

.mane.end::before {
    content: "";
    height: 3rem;
    width: 5rem;
    position: absolute;
    left: 1rem;
    border-radius: 50%;
    box-shadow: 5px 1rem 0 6px #CCAAFF;
}

.mane.end::after {
    content: "";
    height: 3rem;
    width: 5rem;
    position: absolute;
    top: 0.5rem;
    left: -0.5rem;
    border-radius: 50%;
    box-shadow: 5px 1rem 0 6px #FFBDBD;
    transform: rotate(30deg);
    z-index: -1;
}
</style>