<template>
  <div class="speakers">
    <p class="title">{{ $t('sponsors.title') }}</p>
    <div class="content">
      <a
        v-for="sponsor in sponsors"
        :key="sponsor.url"
        class="link"
        taget="_blank"
        :href="sponsor.url"
      >
        <img
          :class="[sponsor.type, 'img']"
          :src="require(`@/assets/${sponsor.img}.png`)"
          alt="liscon speakers"
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
  &.bronze {
    width: 80px;
  }
  &.gold {
    width: 150px;
  }
  &.silver {
    width: 100px;
  }
}
.speakers {
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
    grid-template-columns: repeat(4, max-content);
    grid-gap: 32px;
    margin: 48px;
  }
}
@media (max-width: 1200px) {
  .speakers {
    .content {
      grid-template-columns: repeat(3, max-content);
      row-gap: 32px;
    }
  }
}
@media (max-width: 680px) {
  .speakers {
    .content {
      grid-template-columns: repeat(2, max-content);
    }
  }
}
</style>
