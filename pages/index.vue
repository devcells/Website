<template>
  <div class="flex items-center text-center justify-center h-screen">
    <div class="grid grid-cols-1 gap-4">
      <img
        draggable="false"
        class="devcells-logo animate__animated animate__jackInTheBox animate__delay-0.1s"
        src="/assets/images/DevCells_NoSpace.png"
        alt="logo"
      />
      <h1 class="animate__animated animate__backInUp text-5xl md:text-xxl">
        DevCells
      </h1>
      <div class="grid grid-cols-2 gap-4 text-center items-center">
        <a
          target="_blank"
          href="https://discord.devcells.party/"
          class="animate__animated animate__backInLeft button rounded-full font-bold text-center text-white px-4 py-3 transition duration-300 ease-in-out"
        >
          <i class="fab fa-discord"></i> DISCORD
        </a>
        <a
          target="_blank"
          href="https://github.com/devcells"
          class="animate__animated animate__backInRight button rounded-full font-bold text-center text-white px-4 py-3 transition duration-300 ease-in-out"
        >
          <i class="fab fa-github"></i> GITHUB
        </a>
      </div>
      <div
        class="flex items-center text-center whitney align-center grid grid-cols-3 gap-4 footer mt-6"
      >
        <a href="/projects" class="animate__animated animate__backInUp"
          >Projects</a>
        <a href="/branding" class="animate__animated animate__backInUp"
          >Branding</a>
        <a href="/team" class="animate__animated animate__backInUp"
        >Team</a>
      </div>
      <p
        class="footer mt-5 animate__animated animate__backInUp whitney"
      >
        Inspired from <a href="https://premid.app/" target="_blank">PreMid</a>
      </p>
     <div
        class="flex items-center text-center whitney align-center justify-center footer mt-2"
      >
        <a href="https://instagram.devcells.party/" class="mr-12 animate__animated animate__backInUp"
          ><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.devcells.party/" class="animate__animated animate__backInUp"
          ><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
		name: "Home",
    head:  {
      title: 'Home - DevCells'
    }
  }
</script>