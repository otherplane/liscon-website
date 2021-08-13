<template>
  <button :class="[type, 'button']">
    <div class="wrapper">
      <div class="triangle-top-left" />
      <div class="triangle-top-right" />
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="wrapper">
      <div class="triangle-bottom-left" />
      <div class="triangle-bottom-right" />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'secondary', 'primary', 'disable', 'style'].includes(
          value
        )
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 1rem;
  outline: 0;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'RousseauDeco', sans-serif;
  width: fit-content;
  height: fit-content;
  background: $yellow;
  box-sizing: border-box;
  min-width: 180px;
  position: relative;
  text-align: center;
  letter-spacing: -0.02em;
  line-height: 1rem;
}
.wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.triangle-top-left {
  width: 0;
  height: 0;
  border-top: 8px solid $white;
  border-right: 8px solid transparent;
}
.triangle-top-right {
  width: 0;
  height: 0;
  border-top: 8px solid $white;
  border-left: 8px solid transparent;
}
.triangle-bottom-right {
  width: 0;
  height: 0;
  border-bottom: 8px solid $white;
  border-left: 8px solid transparent;
}
.triangle-bottom-left {
  width: 0;
  height: 0;
  border-bottom: 8px solid $white;
  border-right: 8px solid transparent;
}
.content {
  padding: 10px 16px 5px 16px;
}
.secondary {
  border: 2px solid $grey;
  background: $grey;
  color: $white;
  &:hover {
    opacity: 0.8;
  }
}
.style {
  border: 2px solid $yellow;
  background: $yellow;
  color: $dark-yellow;
  cursor: auto;
}
.disable {
  opacity: 0.8;
  cursor: no-drop;
  border: 2px solid $grey;
  background: $grey;
  color: $white;
}
.default {
  border: 2px solid $yellow;
  background: $yellow;
  color: $dark-yellow;
  &:hover {
    opacity: 0.8;
  }
}
.primary {
  border: 2px solid $yellow;
  background: $yellow;
  color: $dark-yellow;
  &:hover {
    opacity: 0.8;
  }
}
</style>
