<template>
  <div class="wrapper">
    <div class="banner">
      <img src="@/assets/ethereum.svg" alt="" class="eth-logo" />
      <h2 class="title">{{ $t('banner.title') }}</h2>

      <div class="missions">
        <div class="mission">
          <img src="@/assets/social.svg" alt="" class="image" />
          <h3 class="text">{{ $t('banner.mission_together') }}</h3>
        </div>
        <div class="mission">
          <img src="@/assets/web3.svg" alt="" class="image" />
          <h3 class="text">{{ $t('banner.mission_celebrate') }}</h3>
        </div>
        <div class="mission">
          <img src="@/assets/cristo_rei.svg" alt="" class="image" />
          <h3 class="text">{{ $t('banner.mission_share') }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  color: white;
  background: rgba($blue, 1);
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    background-image: url('@/assets/blue_grid.svg');
    background-repeat: no-repeat;
    background-color: rgba(white, 0.5);
    background-position: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.1;
    z-index: 1;
  }

  .banner {
    max-width: 700px;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    .title {
      width: 95%;
      font-family: 'NeueMachina-Ultrabold', sans-serif;
      text-align: left;
      margin-bottom: 3rem;
    }

    .eth-logo {
      margin-bottom: 2rem;
      width: 64px;
    }

    .missions {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;

      .mission {
        display: flex;
        flex-direction: column;

        .image {
          width: 64px;
          margin-bottom: 1.25rem;
        }
        .text {
          margin: 0;
          padding: 0;
          width: 100%;
          text-align: left;
          font-size: 1rem;
          font-weight: lighter;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .wrapper {
    .banner {
      .title {
        padding: 1rem;
      }

      .missions {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        grid-gap: 1rem;

        .mission {
          padding: 1rem;
        }
      }
    }
  }
}
</style>
