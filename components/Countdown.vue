<template>
  <div class="countdown">
    <div class="item">{{ days }} {{ $t('countdown.days') }}</div>
    <div class="item">{{ hours }} {{ $t('countdown.hours') }}</div>
    <div class="item">{{ minutes }} {{ $t('countdown.minutes') }}</div>
    <div>{{ seconds }} {{ $t('countdown.seconds') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: 'Oct 20, 2021 00:00:00',
      now: new Date().getTime(),
      polling: null,
    }
  },
  computed: {
    distance() {
      return this.countdown - this.now
    },
    countdown() {
      return new Date(this.date).getTime()
    },
    second() {
      return 1000
    },
    minute() {
      return this.second * 60
    },
    hour() {
      return this.minute * 60
    },
    day() {
      return this.hour * 24
    },
    days() {
      return Math.floor(this.distance / this.day)
    },
    hours() {
      return Math.floor((this.distance % this.day) / this.hour)
    },
    minutes() {
      return Math.floor((this.distance % this.hour) / this.minute)
    },
    seconds() {
      return Math.floor((this.distance % this.minute) / this.second)
    },
  },
  watch: {
    distance(value) {
      if (value < 0) {
        clearInterval(this.polling)
      }
    },
  },
  beforeMount() {
    this.pollData()
  },
  beforeDestroy() {
    clearInterval(this.polling)
  },
  methods: {
    pollData() {
      this.polling = setInterval(() => {
        this.now = new Date().getTime()
      }, 0)
    },
  },
}
</script>

<style scoped lang="scss">
.countdown {
  display: flex;
  justify-content: center;
  .item {
    margin-right: 8px;
  }
}
</style>
