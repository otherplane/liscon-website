<template>
  <div class="talks">
    <a href="/">
      <img class="img" src="@/assets/liscon_logo.png" alt="Go back" />
    </a>
    <Calendar />
  </div>
</template>

<style scoped lang="scss">
.talks {
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
  .talks {
    padding-top: 8rem;
  }
}
</style>
