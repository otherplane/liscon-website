<template>
  <div class="auction">
    <a href="/">
      <img class="img" src="@/assets/liscon_logo.png" alt="Go back" />
    </a>
    <NFTAuction />
  </div>
</template>

<style scoped lang="scss">
.auction {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/background-2.svg');
  background-repeat: repeat;
  background-position: center;
  padding: 5rem 0 2rem 0;

  .img {
    width: 300px;
  }
}
@media (max-width: 500px) {
  .auction {
    padding-top: 5rem;
  }
}
</style>
