<template>
  <nav class="navbar">
    <ul class="tab-container">
      <li class="tab">
        <router-link
          v-slot="{ isExactActive, href, navigate }"
          custom
          class="tab"
          to="/"
        >
          <nav-link :href="href" @click="navigate">
            <span class="slash">/</span>
            <span class="text" :class="{ active: isExactActive }">{{
              $t('navbar.home')
            }}</span>
          </nav-link>
        </router-link>
        <router-link
          v-slot="{ isExactActive, href, navigate }"
          custom
          class="tab"
          to="/info"
        >
          <nav-link :href="href" @click="navigate">
            <span class="slash">/</span>
            <span class="text" :class="{ active: isExactActive }">{{
              $t('navbar.info')
            }}</span>
          </nav-link>
        </router-link>
        <router-link
          v-slot="{ isExactActive, href, navigate }"
          custom
          class="tab"
          to="/agenda"
        >
          <nav-link :href="href" @click="navigate">
            <span class="slash">/</span>
            <span class="text" :class="{ active: isExactActive }">{{
              $t('navbar.agenda')
            }}</span>
          </nav-link>
        </router-link>
        <router-link
          v-slot="{ isExactActive, href, navigate }"
          custom
          class="tab"
          to="/nft"
        >
          <nav-link :href="href" @click="navigate">
            <span class="slash">/</span>
            <span class="text" :class="{ active: isExactActive }">{{
              $t('navbar.nft')
            }}</span>
          </nav-link>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  position: absolute;
  // left: 0;
  right: 0;
  top: 40px;
  background: transparent;
  justify-content: flex-end;
  margin: 0 auto;
  .tab-container {
    list-style: none;
    display: flex;
    align-items: center;
    .tab {
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      color: $blue;
      align-items: center;
      justify-content: flex-end;
      text-decoration: none;
      font-family: 'RousseauDeco', sans-serif;
      padding: 0.75rem;

      .slash {
        color: $blue;
      }
      .text:hover,
      .active {
        text-decoration: underline;
        text-decoration-color: $yellow;
        text-underline-offset: 5px;
      }
    }
  }
}
</style>
