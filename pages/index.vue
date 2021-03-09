<!-- prettier-ignore -->
<template>
  <main class="h-screen w-full bg-special text-white z-50">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-12 flex justify-center">
        <img src="~/assets/logo-2-white.png" class="z-50" />
      </div>
      <div class="flex justify-between py-16">
        <!-- Left -->
        <div class="flex flex-col justify-start relative">
          <h3 class="coming-soon-radius">Our website in under construction</h3>
          <h1 class="text-5xl mb-4 font-light">We are coming soon</h1>
          <p class="coming-soon-paragraph mb-12">Lorem ipsum dolor 
            sit amet consectetur 
          adipisicing elit sed eiu sit amet consectetur adipisicing
          </p>
          <Input />
        </div>
        <!--  Right -->
        <div class="flex items-center justify-start md:w-6/12 z-50">
          <client-only>
            <vac :end-time="new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000)">
              <span
                slot="process"
                slot-scope="{ timeObj }"
                class="text-5xl"
                
                >
                <div class="flex justify-between w-full items-center mb-12">
                    <div class="mt-2 p-5 w-40 rounded-lg shadow-xl">
                      <span class="bg-special-2 p-8">{{`${timeObj.d}`}} </span> 
                      <!-- <span class="unit px-4"> : </span>  -->
                    </div>
                    <div class="mt-2 p-5 w-40 rounded-lg shadow-xl">
                      <span class="bg-special-2 p-8">{{`${timeObj.h}`}} </span> 
                      <!-- <span class="unit px-4"> : </span>   -->
                    </div>
                    <div class="mt-2 p-5 w-40 rounded-lg shadow-xl">
                      <span class="bg-special-2  p-8">{{`${timeObj.m}`}} </span> 
                      <!-- <span class="unit px-4"> : </span>  -->
                    </div>
                    <div class="mt-2 p-5 w-40 rounded-lg shadow-xl"><span class="bg-special-2 p-8">{{`${timeObj.s}`}} </span>   </div>
                </div>
                <div class="text-center flex justify-between w-full items-center">
                    <div class="mt-2 px-5 w-40 text-sm uppercase font-bold"> Days </div>
                    <div class="mt-2 px-5 w-40 text-sm uppercase font-bold"> Hours </div>
                    <div class="mt-2 px-5 w-40 text-sm uppercase font-bold"> Minutes </div>
                    <div class="mt-2 px-5 w-40 text-sm uppercase font-bold"> Seconds </div>
                </div>
              </span>
              <span slot="finish">Done!</span>
            </vac>
          </client-only>
        </div>
      </div>
      <!-- Footer -->
      <Footer />
    </div>
  </main>
</template>

<!-- eslint-disable -->
<script>

</script>