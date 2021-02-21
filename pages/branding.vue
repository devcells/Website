<template>
  <div>
    <div
      style="font-family: whitney"
      class="flex items-center justify-center text-center"
    >
      <div class="grid grid-cols-1 gap-4">
        <h1 class="text-5xl md:text-xxl animate__animated animate__backInDown">
          Brand
        </h1>
        <h1 class="animate__animated animate__backInLeft">
          Our logo
          <p style="color: #b3b3b4" class="mx-auto px-4">
            ( Please do not edit, change, distort, recolor, or reconfigure the
            DevCells logo. )
          </p>
        </h1>
        <div style="overflow: hidden !important" class="projects-box">
          <div class="brand-image animate__animated animate__backInLeft">
            <img draggable="false" src="/images/DevCells_White.png" />
          </div>
          <div class="brand-image animate__animated animate__backInUp">
            <img draggable="false" src="/images/DevCells_Black.png" />
          </div>
          <div class="brand-image animate__animated animate__backInRight">
            <img draggable="false" src="/images/DevCells_Gradient.png" />
          </div>
        </div>
        <h1 class="animate__animated animate__backInLeft">Logo + Wordmark</h1>
        <div style="overflow: hidden !important" class="projects-box">
          <div
            class="brand-image-wordmark flex items-center justify-center animate__animated animate__backInLeft"
          >
            <img draggable="false" src="/images/DevCells_White_Text.png" />
          </div>
          <div
            class="brand-image-wordmark flex items-center justify-center animate__animated animate__backInUp"
          >
            <img draggable="false" src="/images/DevCells_Black_Text.png" />
          </div>
          <div
            class="brand-image-wordmark flex items-center justify-center animate__animated animate__backInRight"
          >
            <img draggable="false" src="/images/DevCells_Gradient_Text.png" />
          </div>
        </div>

        <div
          style="overflow: hidden !important"
          class="flex justify-center items-center align-center mt-5 mr-2"
        >
          <a
            href="/"
            class="animate__animated animate__backInUp button rounded-full font-bold text-center text-white px-16 py-3 transition duration-300 ease-in-out"
          >
            Go Back
          </a>
          <br><br><br><br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
*,
body,
html {
  overflow: auto;
}
</style>
