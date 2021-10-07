<template>
  <div class="speakers">
    <p class="title">{{ $t('speakers.title') }}</p>
    <div class="content">
      <img
        class="img"
        src="@/assets/speaker-section.svg"
        alt="liscon speakers"
      />
      <p class="text">{{ $t('speakers.section_content') }}</p>
      <a href="/speakers">
        <Button class="button" type="primary">{{
          $t('speakers.see_all')
        }}</Button></a
      >
    </div>
    <img class="break" src="@/assets/section-break.svg" alt="liscon speakers" />
  </div>
</template>

<style lang="scss" scoped>
.speakers {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/background-1.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  border-bottom: 1px solid #b8aca7;
  padding: 4rem 0;

  .title {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: $blue;
    font-family: 'RousseauDeco', sans-serif;
  }
  .break {
    position: relative;
    bottom: -5rem;
    padding: 0 16px;
    background: $background;
  }
  .content {
    display: grid;
    margin: 16px;
    grid-template-columns: 1fr 1fr;
    max-width: 750px;
    align-items: flex-start;
    text-align: left;
    grid-gap: 40px;
    .text {
      align-self: flex-end;
      font-size: 1rem;
      color: $dark-blue;
    }
    .img {
      justify-self: center;
      grid-row: 1 / span 2;
      width: 100%;
    }
  }
}

@media (max-width: 680px) {
  .speakers {
    .title {
      font-size: 10vw;
    }

    .content {
      grid-template-columns: 1fr;
    }
  }
}
</style>
