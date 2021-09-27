<template>
  <div class="sponsors">
    <p class="title">{{ $t('sponsors.title') }}</p>
    <div class="content">
      <a
        v-for="sponsor in sponsors"
        :key="sponsor.url"
        class="link"
        target="_blank"
        :href="sponsor.url"
      >
        <img
          :title="sponsor.name"
          :class="[sponsor.type, 'img']"
          :src="require(`@/assets/${sponsor.img}`)"
          alt="liscon sponsors"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { SPONSORS } from '@/constants'
export default {
  data() {
    return {
      sponsors: SPONSORS,
    }
  },
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%) contrast(70%) brightness(110%);
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: grayscale(0%);
  }
  &.round {
    border-radius: 50%;
  }
  &.platinum {
    width: 70px;
    max-height: 70px;
  }
  &.partner {
    width: 50px;
    max-height: 60px;
  }
  &.gold {
    width: 150px;
    max-height: 150px;
  }
  &.silver {
    width: 90px;
    max-height: 90px;
  }
}
.sponsors {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  .title {
    font-size: 3.5rem;
    margin-top: 2rem;
    color: $blue;
    font-family: 'RousseauDeco', sans-serif;
  }
  .content {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(7, max-content);
    grid-gap: 32px;
    margin: 48px;
  }
}
@media (max-width: 1200px) {
  .sponsors {
    .content {
      grid-template-columns: repeat(3, max-content);
      row-gap: 32px;
    }
  }
}
@media (max-width: 680px) {
  .sponsors {
    .content {
      grid-template-columns: repeat(2, max-content);
    }
  }
}
</style>
