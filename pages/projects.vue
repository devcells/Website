<template>
  <div>
    <div class="flex items-center justify-center text-center h-screen">
      <div class="grid grid-cols-1 gap-4">
        <h1 class="text-5xl md:text-xxl animate__animated animate__backInDown">
          Projects
        </h1>
        <div style="font-family: whitney" class="projects-box">
          <a
            v-for="project in projects"
            :key="project.name"
            :href="project.html_url"
          >
            <div
              class="project-card break-words animate__animated animate__jackInTheBox"
            >
              <span class="text-1xl md:text-xl">{{ project.name }}</span>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </a>
        </div>
        <div class="flex justify-center items-center align-center mt-5">
          <a
            href="/"
            class="animate__animated animate__backInUp button rounded-full font-bold text-center text-white px-16 py-3 transition duration-300 ease-in-out"
          >
            <i class="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    axios({
      url: "https://api.github.com/orgs/devcells/repos",
      method: "GET",
    })
      .then((response) => {
        this.projects = response.data.filter(
          (project) => project.name !== "devcells.github.io"
        );
      })
      .catch((err) => {
        this.$router.push("/");
      });
  }
};
</script>
