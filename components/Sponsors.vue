<template>
  <div class="sponsors">
    <p class="title">{{ $t('sponsors.title') }}</p>
    <p class="subtitle">{{ $t('sponsors.platinum') }}</p>
    <div class="content platinum">
      <a
        v-for="sponsor in platinum"
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
    <p class="subtitle">{{ $t('sponsors.gold') }}</p>
    <div class="content gold">
      <a
        v-for="sponsor in gold"
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
    <p class="subtitle">{{ $t('sponsors.silver') }}</p>
    <div class="content silver">
      <a
        v-for="sponsor in silver"
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
    <p class="subtitle">{{ $t('sponsors.partner') }}</p>
    <div class="content partner">
      <a
        v-for="sponsor in partner"
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
  computed: {
    platinum() {
      return this.sponsors.filter((sponsor) =>
        sponsor.type.includes('platinum')
      )
    },
    gold() {
      return this.sponsors.filter((sponsor) => sponsor.type.includes('gold'))
    },
    silver() {
      return this.sponsors.filter((sponsor) => sponsor.type.includes('silver'))
    },
    partner() {
      return this.sponsors.filter((sponsor) => sponsor.type.includes('partner'))
    },
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
    width: 150px;
    max-height: 150px;
  }
  &.partner {
    width: 50px;
    max-height: 50px;
  }
  &.gold {
    width: 90px;
    max-height: 90px;
  }
  &.silver {
    width: 70px;
    max-height: 70px;
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
  .subtitle {
    font-size: 1.5rem;
    margin-top: 2rem;
    color: $blue;
    font-family: 'RousseauDeco', sans-serif;
  }
  .content {
    display: grid;
    align-items: center;
    grid-gap: 32px;
    margin: 48px;
    &.platinum {
      grid-template-columns: repeat(2, max-content);
    }
    &.gold {
      grid-template-columns: repeat(3, max-content);
    }
    &.silver {
      grid-template-columns: repeat(3, max-content);
    }
    &.partner {
      grid-template-columns: repeat(4, max-content);
    }
  }
}
</style>
