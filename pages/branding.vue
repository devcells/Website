<template>
  <div>
    <div class="flex items-center justify-center text-center">
      <div class="grid grid-cols-1 gap-2">
        <h1 class="text-5xl md:text-xxl animate__animated animate__backInDown">
          Brand
        </h1>
        <h1 class="whitney animate__animated animate__backInLeft">
          Our logo
          <p class="gr-text whitney mx-auto px-4">
            ( Please do not edit, change, distort, recolor, or reconfigure the
            DevCells logo. )
          </p>
        </h1>
        <div style="overflow: hidden !important" class="projects-box">
          <div class="brand-image animate__animated animate__backInLeft">
            <img draggable="false" src="/assets/images/DevCells_White.png" />
          </div>
          <div class="brand-image animate__animated animate__backInUp">
            <img draggable="false" src="/assets/images/DevCells_Black.png" />
          </div>
          <div class="brand-image animate__animated animate__backInRight">
            <img draggable="false" src="/assets/images/DevCells_Gradient.png" />
          </div>
        </div>
        <h1 class="animate__animated animate__backInLeft whitney">
          Logo + Wordmark
        </h1>
        <div style="overflow: hidden !important" class="projects-box">
          <div
            class="brand-image-wordmark flex items-center justify-center animate__animated animate__backInLeft"
          >
            <img draggable="false" src="/assets/images/DevCells_White_Text.png" />
          </div>
          <div
            class="brand-image-wordmark flex items-center justify-center animate__animated animate__backInUp"
          >
            <img draggable="false" src="/assets/images/DevCells_Black_Text.png" />
          </div>
          <div
            class="brand-image-wordmark flex items-center justify-center animate__animated animate__backInRight"
          >
            <img draggable="false" src="/assets/images/DevCells_Gradient_Text.png" />
          </div>
        </div>
        <div class="flex justify-center items-center align-center mt-5">
          <a
            href="/"
            class="animate__animated animate__backInUp button rounded-full font-bold text-center text-white px-16 py-3 transition duration-300 ease-in-out"
          >
            <i class="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
		name: "Branding",
    head:  {
      title: 'Branding - DevCells'
    }
  }
</script>
<style>
*,
body,
html {
  overflow: visible;
}
</style>
