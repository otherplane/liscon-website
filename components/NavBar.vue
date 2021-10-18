<template>
  <div class="nav-container" :class="{ drop: isMenuVisible }">
    <nav class="navbar">
      <label class="responsive-menu" @click="toggleMenu">
        <a class="target-burger" :class="{ visible: isMenuVisible }">
          <ul class="buns">
            <li class="bun"></li>
            <li class="bun"></li>
          </ul>
        </a>
      </label>
      <transition name="dropdown" class="dropdown">
        <ul class="tab-container" :class="{ visible: isMenuVisible }">
          <div @click="closeMenu">
            <router-link
              v-slot="{ isExactActive, href, navigate }"
              custom
              to="/"
              class="tab"
            >
              <nav-link :href="href" class="tab" @click="navigate">
                <span class="slash">/</span>
                <span class="text" :class="{ active: isExactActive }">{{
                  $t('navbar.home')
                }}</span>
              </nav-link>
            </router-link>
          </div>
          <div @click="closeMenu">
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
          </div>
          <div @click="closeMenu">
            <router-link
              v-slot="{ isExactActive, href, navigate }"
              custom
              class="tab"
              to="/agenda"
              @click="closeMenu"
            >
              <nav-link :href="href" @click="navigate">
                <span class="slash">/</span>
                <span class="text" :class="{ active: isExactActive }">{{
                  $t('navbar.agenda')
                }}</span>
              </nav-link>
            </router-link>
          </div>
          <div @click="closeMenu">
            <router-link
              v-slot="{ isExactActive, href, navigate }"
              custom
              class="tab"
              to="/nft"
              @click="closeMenu"
            >
              <nav-link :href="href" @click="navigate">
                <span class="slash">/</span>
                <span class="text" :class="{ active: isExactActive }">{{
                  $t('navbar.nft')
                }}</span>
              </nav-link>
            </router-link>
          </div>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      displayBox: false,
      isMenuVisible: false,
    }
  },
  watch: {
    $route() {
      this.closeMenu()
    },
  },
  methods: {
    closeMenu() {
      this.isMenuVisible = false
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    displayDropDown() {
      this.displayBox = !this.displayBox
    },
    onClose() {
      this.active = false
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  position: absolute;
  left: 0;
  right: 32px;
  top: 20;
  background: transparent;
  justify-content: flex-end;
  margin: 0 auto;

  .logo-container {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    text-decoration: none;
    column-gap: 8px;

    .witnet-logo {
      grid-row: 1 / span 2;
    }
    .logo-subtitle-color {
      align-self: flex-start;
      color: $blue;
    }
    .logo-subtitle {
      align-self: flex-end;
      color: $blue;
    }
  }
  .responsive-menu {
    color: $blue;
    display: none;
    font-size: 34px;
  }
  .tab-container {
    margin-top: 4px;
    list-style: none;
    display: flex;
    align-items: center;
    & .visible {
      display: block;
      background: $light-yellow;
    }
    .tab {
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      color: $blue;
      align-items: center;
      text-decoration: none;
      font-family: 'RousseauDeco', sans-serif;
      padding: 0.5rem;

      .slash {
        color: $blue;
      }
      .text:hover {
        text-decoration: underline;
        text-decoration-color: $yellow;
        text-underline-offset: 5px;
      }
    }
  }
  .drop {
    position: absolute;
  }
}
@media screen and (max-width: 720px) {
  .drop {
    position: fixed;
    top: 0;
    overflow: hidden;
    height: 100%;
    z-index: 15;
    overflow-y: hidden;
  }
  .navbar {
    display: block;
    position: relative;
    padding: 0;
    .logo-container {
      padding: 32px;
    }
    .responsive-menu {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 8px;
      left: 88vw;
    }
    .tab-container {
      list-style: none;
      display: none;
      text-align: center;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 48px;
      cursor: pointer;
      &.visible {
        display: block;
        background: $light-yellow;
      }
      .tab {
        cursor: pointer;
        display: block;
        color: $blue;
        align-items: center;
        text-decoration: none;
        padding: 16px;
        .social {
          display: none;
        }
      }
    }
  }
}

.target-burger {
  display: block;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    opacity: opacity(0.45);
  }
  &.visible {
    ul.buns {
      li.bun {
        -webkit-transform: rotate(45deg) translateZ(0);
        transform: rotate(45deg) translateZ(0);
        &:last-child {
          -webkit-transform: rotate(-45deg) translateZ(0);
          transform: rotate(-45deg) translateZ(0);
        }
      }
    }
  }
  .buns {
    width: 1em;
    height: 1em;
    list-style: none;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1),
      color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
      color 1s cubic-bezier(0.23, 1, 0.32, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    color: $blue;
    .bun {
      width: 100%;
      height: 2px;
      background-color: $blue;
      position: absolute;
      top: 50%;
      margin-top: -0.75px;
      -webkit-transform: translateY(-3.75px) translateZ(0);
      transform: translateY(-3.75px) translateZ(0);
      -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1),
        background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
      transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
        background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
      &:last-child {
        -webkit-transform: translateY(3.75px) translateZ(0);
        transform: translateY(3.75px) translateZ(0);
      }
    }
  }
}
</style>
