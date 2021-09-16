<template>
  <div class="speaker">
    <img
      class="frame"
      :src="frame"
      :style="{ backgroundImage: `url(${img})` }"
    />
    <p class="text name">{{ name }}</p>
    <p class="text organization">{{ organization }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    frame: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.speaker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  .text {
    font-size: 1rem;
    color: $blue;
  }
  .frame {
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    width: 125px;
    top: 0;
    bottom: 0;
    z-index: 10;
  }
  .img-container {
    width: 100px;
    .img {
      width: 100%;
      position: relative;
    }
  }
  .name {
    margin-top: 16px;
    font-weight: 600;
  }
}
@media (max-width: 680px) {
  .speaker {
    width: 150px;
  }
}
</style>
