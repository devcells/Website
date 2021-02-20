<template>
  <div class="flex items-center text-center justify-center h-screen">
    <div class="grid grid-cols-1 gap-4">
      <img
        draggable="false"
        class="devcells-logo animate__animated animate__jackInTheBox animate__delay-0.1s"
        src="/images/DevCells_NoSpace.png"
        alt="logo"
      />
      <h1 class="devcells-title animate__animated animate__backInUp">
        DevCells
      </h1>
      <div class="grid grid-cols-2 gap-4 text-center items-center">
        <a
          target="_blank"
          href="https://discord.com/atMxBEG4ne"
          class="animate__animated animate__backInLeft button rounded-full font-bold text-center text-white px-4 py-3 transition duration-300 ease-in-out"
        >
          DISCORD
        </a>
        <a
          target="_blank"
          href="https://github.com/devcells"
          class="animate__animated animate__backInRight button rounded-full font-bold text-center text-white px-4 py-3 transition duration-300 ease-in-out"
        >
          GITHUB
        </a>
      </div>
      <div
        class="flex items-center text-center align-center grid grid-cols-3 gap-4 footer mt-6"
      >
        <a href="/projects" class="animate__animated animate__backInUp"
          >Projects</a
        >
        <a href="/brandings" class="animate__animated animate__backInUp"
          >Brandings</a
        >
        <a href="/team" class="animate__animated animate__backInUp"
          >Team</a
        >
      </div>
      <p
        class="footer mt-5 animate__animated animate__backInUp"
        style="font-family: whitney"
      >
        Inspired from <a href="https://premid.app/" target="_blank">PreMid</a>.
      </p>
    </div>
  </div>
</template>
