<template>
  <div class="speakers-list">
    <div class="header">
      <img class="img" src="@/assets/lis-con.svg" alt="LisCon speakers" />
      <h2 class="title">{{ $t('agenda.title') }}</h2>
      <p class="subtitle">{{ $t('agenda.subtitle') }}</p>
      <a target="_blank" href="https://lisbonblockchainweek.com">
        <Button class="button">{{ $t('agenda.see_more') }}</Button>
      </a>
    </div>
    <Calendar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/triangle-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/yellow-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/rectangle-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/square-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/triangle-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/yellow-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/rectangle-frame.svg'),
          border: 'true',
        },
        {
          name: 'Sasha Tanasse',
          organization: 'Ethereum fundation',
          img: require('@/assets/speaker-example.png'),
          frame: require('@/assets/square-frame.svg'),
          border: 'true',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.speakers-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/background-2.svg');
  background-repeat: repeat;
  background-position: center;
  margin: 2rem 0;
  .header {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: repeat(3, max-content);
    text-align: left;
    align-items: center;
    column-gap: 32px;
    color: $blue;
    .img {
      padding-right: 32px;
      border-right: 1px solid $blue;
      grid-row: 1 / span 3;
    }
    .subtitle {
      font-size: 1.5rem;
    }
    .title {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .calendar {
    margin: 48px;
  }
}

@media (max-width: 680px) {
  .speakers-list {
    .header {
      grid-template-columns: 1fr;
      align-items: center;
      text-align: center;
      row-gap: 8px;
      margin: 16px;
      .title {
        margin-top: 16px;
      }
      .img {
        justify-self: center;
        border-right: none;
        border-bottom: 1px solid $blue;
        padding-right: 0;
        padding-bottom: 32px;
      }
    }
  }
}
</style>
