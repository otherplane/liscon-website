<template>
  <div class="main">
    <NavBar />
    <div class="content">
      <Hero />
      <Banner />
      <Sponsors />
      <Participate />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
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
