<template>
    <swiper
      :modules="[Autoplay , Pagination]"  
      :slides-per-view="2"
      :space-between="10"
      :loop="true"
      :pagination="{clickable: true}"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    class="my-12">
    <SwiperSlide v-for="data in dataArray" :key="data.description" class="py-12">
            <div class="bg-teal-200 border-b-4 border-indigo-500 rounded-lg">
                <div class="p-5">
                    <h1>{{data.name}}</h1>
                    <h1>{{data.address}}</h1>
                    <h1>{{data.phNo}}</h1>
                    <h1>{{data.ratings}}</h1>
                </div>
            </div>
        </SwiperSlide>
    </swiper>

  </template>

  <script setup>
    
    // Import Swiper Vue.js components

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Autoplay , Pagination} from 'swiper';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/bundle';


        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };

        // const swiperSlide = useSwiperSlide();
        // const swiper = useSwiper();
        // const Autoplay_ = useAutoplay;
        // const Pagination_= usePagination;


        const dataArray = ref ([
                { name: 'Ali',
                address: 'abcd',
                phNo: '123',
                ratings:'5 star'},
                { name: 'Ahmed',
                address: 'efgh',
                phNo: '456',
                ratings:'4 star'},
                { name: 'Usama',
                address: 'ijkl',
                phNo: '789',
                ratings:'3 star'},
                { name: 'Babar',
                address: 'mnop',
                phNo: '10 11 12',
                ratings:'2 star'},
]);
// return modules[Pagination , Autoplay ,Swiper , SwiperSlide}
  </script>
