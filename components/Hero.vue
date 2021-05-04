<template>
  <div class="hero">
    <img class="logo" src="~/assets/logo.jpg" />
    <h1 class="title">
      {{ $t('hero.title') }}
    </h1>
    <p class="text">{{ $t('hero.date') }}</p>
    <p class="text">{{ $t('hero.place') }}</p>
    <h2 class="text">{{ $t('hero.about') }}</h2>
    <p class="text">{{ $t('hero.mission_together') }}</p>
    <p class="text">{{ $t('hero.mission_celebrate') }}</p>
    <p class="text">{{ $t('hero.mission_share') }}</p>

    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfZSURrFgott0YsjLCmnCxvOUFEqRiwACbWq6Uv-blAImY_yw/viewform"
      ><button>Call for volunteers</button></a
    >
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  text-align: center;

  .logo {
    width: 300px;
  }
  .title {
    color: black;
  }

  .text {
    margin-bottom: 1rem;
  }
}
</style>
