<template>
  <div class="hero">
    <div class="logo">
      <img class="icon" src="@/assets/liscon_logo.png" />
      <p class="subtitle date">{{ $t('hero.title_subtitle') }}</p>
      <p class="subtitle location">{{ $t('hero.location') }}</p>
      <Button type="style" class="count">
        <Countdown />
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 540px;
  background-image: url('@/assets/grid.svg');
  background-repeat: no-repeat;
  background-position: 50% 42%;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0 1rem;
    margin-top: 40px;

    .icon {
      margin-bottom: 1rem;
      width: 300px;
    }

    .count {
      width: 100%;
      font-size: 1.125rem;
    }
    .location {
      margin-bottom: 1rem;
    }
    .subtitle {
      font-family: 'RousseauDeco', sans-serif;
      color: $blue;
      font-size: 2rem;
      text-align: left;
    }
  }
}
</style>
