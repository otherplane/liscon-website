<template>
  <div class="main">
    <Marquee />
    <NavBar />
    <div class="content">
      <Hero />
      <Banner />
      <Participate />
      <Footer />
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
