<template>
  <nav class="navbar">
    <ul class="tab-container">
      <li class="tab">
        <a class="tab" href="/agenda">
          <span class="slash">/</span>
          <span class="text">{{ $t('navbar.agenda') }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

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
  .tab-container {
    list-style: none;
    display: flex;
    align-items: center;
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
}
</style>
