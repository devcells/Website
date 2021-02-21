<template>
  <div>
    <div class="flex items-center justify-center text-center h-screen">
      <div class="grid grid-cols-1 gap-4">
        <h1 class="text-5xl md:text-xxl animate__animated animate__backInDown">
          Our Team
        </h1>
        <div style="font-family: whitney" class="projects-box">
          <a
            v-for="member in members"
            :key="member.login"
            :href="`https://github.com/${member.login}`"
            ><div
              class="animate__animated animate__jackInTheBox bg-gray-900 h-15 flex items-center p-2 rounded-xl shadow"
            >
              <div class="ml-1 flex items-center space-x-4">
                <img
                  draggable="false"
                  :src="member.avatar_url"
                  class="w-12 h-12 rounded-full"
                />
              </div>
              <div class="p-3">
                <div class="font-semibold">
                  {{ member.login }}
                </div>
              </div>
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
      members: [],
    };
  },
  created() {
    axios({
      url: "https://api.github.com/orgs/devcells/members",
      method: "GET",
    })
      .then((response) => {
        this.members = response.data;
      })
      .catch((err) => {
        this.$router.push("/");
      });
  },
};
</script>
