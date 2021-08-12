<template>
  <div class="marquee">
    <div class="marquee__inner" aria-hidden="true">
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
      <span>lisbon, portugal · oct 20-21 /</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee {
  position: relative;
  overflow: hidden;
  background: $blue;
  color: #e7e5e1;
  font-weight: lighter;
  padding: 1rem;

  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 20s linear infinite;

  span {
    min-width: fit-content;
  }

  /* animation-play-state: paused; */
}

.marquee span {
  font-size: 0.875rem;
  margin: 0 0.2rem;
}

/* .marquee:hover .marquee__inner {
  animation-play-state: running;
} */

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>
