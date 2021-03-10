<!-- prettier-ignore -->
<template>
  <main class="h-full md:h-screen w-full bg-special text-white z-50">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-8 md:py-12 flex justify-center">
        <img src="~/assets/logo-2-white.png" class="z-50" />
      </div>
      <div class="flex flex-col md:flex-row justify-between md:py-16  mb-4 ">
        <!-- Left -->
        <div class="flex flex-col justify-center md:justify-start relative items-center md:items-stretch order-2 md:order-1">
          <h3 class="coming-soon-radius">Our website in under construction</h3>
          <h1 class=" text-2xl md:text-4xl mb-4 font-light text-center md:text-left">Our platform is launching soon</h1>
          <p class="text-base coming-soon-paragraph mb-12 text-center md:text-left px-2 md:px-0">ATLAS is a market intelligence (MARKINT) SaaS platform tool used for determining, predicting, and analyzing financial markets. </p>
          <Form />
        </div>
        <!--  Right -->
        <div class="md:flex flex-col items-center md:items-stretch justify-start md:w-6/12 z-50 order-1 md:order-2">
          <h4 class="ml-4 py-4 md:py-8 text-2xl text-center md:text-left"> 1st of July </h4>
          <div class="hidden md:block">
          <CountdownTimer />
          </div>
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
