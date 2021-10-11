<template>
  <div class="agenda">
    <div class="content">
      <div class="day-switch">
        <div
          v-for="day in days"
          :key="day.key"
          class="day"
          :class="{ current: currentDay === day.key }"
          @click="setCurrentDay(day.key)"
        >
          <p>{{ day.name }}</p>
          <p>{{ day.key }}</p>
        </div>
      </div>
      <div v-if="filteredEvents.length" class="events-list">
        <div
          v-for="event in filteredEvents"
          :key="event.fullSpeaker"
          class="row"
          :class="{ current: event.current }"
        >
          <p class="col">{{ event.startTime }} - {{ event.endTime }}</p>
          <p class="col">{{ event.fullSpeaker }}</p>
          <p class="col">{{ event.title }}</p>
          <div class="col categories">
            <p class="label" :class="{ current: event.current }">
              {{ event.room }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { convertTime12to24 } from '../utils'
import agenda from '../agenda.json'
import { DAYS } from '@/constants.js'

export default {
  data() {
    return {
      days: DAYS,
      selected: { label: 'All' },
      filteredEvents: [],
      currentDay: new Date().getUTCDate() === 21 ? '21' : '20',
      currentEvent: null,
      isModalVisible: false,
      events: agenda.map((talk) => {
        let fullSpeaker = ''
        if (talk.type === 'panel') {
          fullSpeaker = talk.speaker
        } else if (talk.speaker && talk.company) {
          fullSpeaker = `${talk.speaker} - ${talk.company}`
        } else if (!talk.company) {
          fullSpeaker = `${talk.speaker}`
        } else if (!talk.speaker) {
          fullSpeaker = `${talk.company}`
        }

        return {
          ...talk,
          fullSpeaker,
        }
      }),
    }
  },
  watch: {
    currentDay() {
      this.filterEvents()
    },
  },
  mounted() {
    // Show events for the default day
    this.filterEvents()
  },
  methods: {
    setCurrentDay(day) {
      this.currentDay = day
    },
    showModal(event) {
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.position = 'fixed'
      this.$nextTick(() => {
        this.currentEvent = event
      })
    },
    closeModal() {
      this.currentEvent = null
      this.$nextTick(() => {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      })
    },
    filterEvents() {
      const toNumber = (num) =>
        parseInt(convertTime12to24(num).replace(':', ''))
      this.filteredEvents = this.events
        .filter((event) => event.day === this.currentDay)
        .sort((ev1, ev2) => toNumber(ev1.startTime) - toNumber(ev2.startTime))
    },
  },
}
</script>

<style scoped lang="scss">
.appear-enter-active {
  transition: all 0.3s ease-in-out;
}
.appear-leave-active {
  transition: all 0.3s ease-in-out;
}
.appear-enter,
.appear-leave-to {
  transform: translate(-50%, -50%);
  opacity: 0;
}
.current {
  color: $blue;
  &.label {
    border: 1px solid $blue;
  }
}
.agenda {
  margin-top: 48px;
  display: grid;
  grid-template: max-content 1fr / 1fr;
  grid-row-gap: 34px;
  width: 80%;
  justify-content: center;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $grey;
    padding: 34px 0;
  }
  .content {
    display: grid;
    grid-template: max-content 1fr / 1fr;
    grid-row-gap: 34px;
    .day-switch {
      display: flex;
      justify-content: space-around;
    }
    .row {
      display: grid;
      grid-template-columns: 285px 1fr minmax(150px, 1fr) 150px;
      padding: 24px;
      font-size: 18px;
      grid-column-gap: 34px;
      align-items: center;
      justify-items: baseline;
      border-bottom: 1px solid $grey;
    }
    .svg-container {
      cursor: pointer;
    }
    .col {
      // margin: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &.categories {
        justify-content: flex-end;
      }

      .label {
        border: 1px solid $black;
        width: max-content;
        padding: 4px 8px;
      }
      .current {
        &.label {
          border: 1px solid $blue;
        }
      }
    }
    .day {
      margin: 16px;
      font-size: 24px;
      cursor: pointer;
      text-align: center;
    }
  }
}
@media (max-width: 930px) {
  .agenda {
    justify-content: flex-start;
    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .select {
        align-self: flex-end;
        margin-top: 24px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      // grid-template-columns: 70px 1fr;
      // grid-column-gap: 24px;
      // justify-content: flex-start;

      .day-switch {
        // flex-direction: column;
        // justify-content: initial;
      }

      .events-list {
        .row {
          display: flex;
          flex-direction: column;

          .col {
            text-align: center;
            margin: 8px;

            &.categories {
              justify-content: center;
              margin-right: 0;
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
