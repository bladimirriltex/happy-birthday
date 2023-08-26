<template>
    <div class="photo-album">

        <h1><span>Mis recuerdos contigo 🐽</span></h1>

        <a class="large polaroid img1">
            <img :src="marrana11" alt="">
        </a>
        <a class="medium polaroid img2">
            <img :src="marrana2" alt="">
        </a>
        <a class="small polaroid img3">
            <img :src="marrana3" alt="">
        </a>
        <a class="medium polaroid img4">
            <img :src="marrana4" alt="">
        </a>
        <a class="small polaroid img5">
            <img :src="marrana5" alt="">
        </a>
        <a class="medium polaroid img6">
            <img :src="marrana6" alt="">
        </a>
        <a class="small polaroid img7">
            <img :src="marrana7" alt="">
        </a>
        <a class="small polaroid img8">
            <img :src="marrana8" alt="">
        </a>
        <a class="medium polaroid img9">
            <img :src="marrana9" alt="">
        </a>
        <a class="small polaroid img10">
            <img :src="marrana10" alt="">
        </a>
        <a class="large polaroid img11">
            <img :src="chiqui1" alt="">
        </a>
        <a class="small polaroid img12">
            <img :src="marrana12" alt="">
        </a>
        <a class="small polaroid img13">
            <img :src="marrana13" alt="">
        </a>
        <a class="small polaroid img14">
            <img :src="marrana14" alt="">
        </a>
        <a class="medium polaroid img15">
            <img :src="marrana15" alt="">
        </a>
        <a class="polaroid img16">
            <img :src="marrana1" alt="">
        </a>
        <a class="small polaroid img17">
            <img :src="marrana16" alt="">
        </a>
        <a class="medium polaroid img18">
            <img :src="marrana17" alt="">
        </a>
        <a class="small polaroid img19">
            <img :src="marrana18" alt="">
        </a>
        <a class="small polaroid img20">
            <img :src="marrana19" alt="">
        </a>
        <a class="polaroid img21">
            <img :src="marrana20" alt="">
        </a>
        <a class="small polaroid img22">
            <img :src="marrana21" alt="">
        </a>
        <a class="medium polaroid img23">
            <img :src="chiqui2" alt="">
        </a>



    </div>
</template>
<script setup>
import chiqui1 from "../assets/memories/chiqui1.jpg";
import chiqui2 from "../assets/memories/chiqui2.jpg";
import marrana1 from "../assets/memories/marrana1.jpg";
import marrana2 from "../assets/memories/marrana2.jpg";
import marrana3 from "../assets/memories/marrana3.jpg";
import marrana4 from "../assets/memories/marrana4.jpg";
import marrana5 from "../assets/memories/marrana5.jpg";
import marrana6 from "../assets/memories/marrana6.jpg";
import marrana7 from "../assets/memories/marrana7.jpg";
import marrana8 from "../assets/memories/marrana8.jpg";
import marrana9 from "../assets/memories/marrana9.jpg";
import marrana10 from "../assets/memories/marrana10.jpg";
import marrana11 from "../assets/memories/marrana11.jpg";
import marrana12 from "../assets/memories/marrana12.jpg";
import marrana13 from "../assets/memories/marrana13.jpg";
import marrana14 from "../assets/memories/marrana14.jpg";
import marrana15 from "../assets/memories/marrana15.jpg";
import marrana16 from "../assets/memories/marrana16.jpg";
import marrana17 from "../assets/memories/marrana17.jpg";
import marrana18 from "../assets/memories/marrana18.jpg";
import marrana19 from "../assets/memories/marrana19.jpg";
import marrana20 from "../assets/memories/marrana20.jpg";
import marrana21 from "../assets/memories/marrana21.jpg";


</script>
<style scoped>
body {
    background-color: #E9E9E9;
    color: #333;
    font-family: "Lucida handwriting", "Snell Roundhand", "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 16px;
    overflow: hidden;
}

.amp {
    font-family: Garamond, Baskerville, Georgia, serif !important;
    font-style: italic;
    font-weight: normal;
    border: none;
}

a.polaroid {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 10px 10px 20px 10px;
    width: 190px;
    border: 1px solid #BFBFBF;
    background-color: white;
    z-index: 2;
    font-size: 0.7em;
    -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    -webkit-transition: -webkit-transform 0.5s ease-in;
}

a.polaroid:hover,
a.polaroid:focus,
a.polaroid:active {
    z-index: 999;
    border-color: #6A6A6A;
    -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
}

.polaroid img {
    margin: 0 0 15px;
    width: 170px;
    height: 150px;
}

a img {
    border: none;
    display: block;
    object-fit: cover;
    object-position: center top;
}

.photo-album {
    position: relative;
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
}

.photo-album .polaroid {
    position: absolute;
}

.photo-album h1 {
    position: absolute;
    z-index: 100;
    top: 150px;
    text-align: center;
    width: 100%;
    line-height: 1.9;
}

.photo-album h1 span {
    background-color: white;
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
    padding: 0.4em 0.8em 0.3em 0.8em;
    -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border: 1px solid #6A6A6A;
}

.photo-album .small {
    width: 88px;
    padding: 6px 6px 12px 6px;
    font-size: 0.6em;
    z-index: 30;
}

.photo-album .small img {
    width: 75px;
    height: 75px;
}

.photo-album .medium {
    width: 225px;
    padding: 13px 13px 26px 13px;
    font-size: 0.8em;
    z-index: 20;
}

.photo-album .medium img {
    width: 200px;
    height: 200px;
}

.photo-album .large {
    width: 340px;
    padding: 20px 20px 30px 20px;
    font-size: 1em;
    z-index: 10;
}

.photo-album .large img {
    width: 300px;
    height: 300px;
}

.photo-album .img1 {
    bottom: 3%;
    right: 54%;
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    transform: rotate(10deg);
}

.photo-album .img2 {
    top: 50px;
    right: 20px;
    -webkit-transform: rotate(-4deg);
    -moz-transform: rotate(-4deg);
    transform: rotate(-4deg);
}

.photo-album .img3 {
    left: 34%;
    top: 3%;
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    transform: rotate(15deg);
}

.photo-album .img4 {
    top: 10px;
    left: 495px;
    -webkit-transform: rotate(-20deg);
    -moz-transform: rotate(-20deg);
    transform: rotate(-20deg);
}

.photo-album .img5 {
    bottom: 0;
    right: 0;
    -webkit-transform: rotate(1deg);
    -moz-transform: rotate(1deg);
    transform: rotate(1deg);
}

.photo-album .img6 {
    bottom: 10px;
    right: 156px;
    -webkit-transform: rotate(6deg);
    -moz-transform: rotate(6deg);
    transform: rotate(6deg);
}

.photo-album .img7 {
    bottom: 0;
    left: 400px;
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
}

.photo-album .img8 {
    bottom: -20px;
    left: 700px;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.photo-album .img9 {
    bottom: -20%;
    left: -8%;
    -webkit-transform: rotate(-4deg);
    -moz-transform: rotate(-4deg);
    transform: rotate(-4deg);
}

.photo-album .img10 {
    top: 22%;
    left: -8%;
    -webkit-transform: rotate(8deg);
    -moz-transform: rotate(8deg);
    transform: rotate(8deg);
}

.photo-album .img11 {
    top: 29%;
    right: 23%;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-16deg);
}

.photo-album .img12 {
    top: 0;
    left: 680px;
    -webkit-transform: rotate(18deg);
    -moz-transform: rotate(18deg);
    transform: rotate(18deg);
}

.photo-album .img13 {
    bottom: -17%;
    right: 74%;
    -webkit-transform: rotate(4deg);
    -moz-transform: rotate(4deg);
    transform: rotate(4deg);
}

.photo-album .img14 {
    top: 98%;
    left: 41%;
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    transform: rotate(-15deg);
}

.photo-album .img15 {
    left: 176px;
    top: 20px;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.photo-album .img15 {
    left: 16%;
    top: 71%;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.photo-album .img16 {
    left: 150px;
    top: -20px;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.photo-album .img17 {
    left: 0px;
    top: 20px;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.photo-album .img18 {
    left: 45%;
    top: 74%;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(16deg);
}

.photo-album .img19 {

    left: 13%;
    top: 67%;

    -webkit-transform: rotate(16deg);
    -moz-transform: rotate(16deg);
    transform: rotate(-16deg);
}

.photo-album .img20 {
    left: 82%;
    top: 97%;
    -webkit-transform: rotate(-16deg);
    -moz-transform: rotate(-16deg);
    transform: rotate(-16deg);
}

.photo-album .img21 {
    left: 86%;
    top: 60%;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(-8deg);
}

.photo-album .img22 {
    left: 71%;
    top: 96%;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    transform: rotate(18deg);
}

.photo-album .img23 {
    left: -5%;
    top: 18%;
    -webkit-transform: rotate(16deg);
    -moz-transform: rotate(16deg);
    transform: rotate(16deg);
}


a:hover,
a:focus {
    z-index: 5;
}
</style>
