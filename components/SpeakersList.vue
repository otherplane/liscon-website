<template>
  <div class="speakers-list">
    <div class="header">
      <img class="img" src="@/assets/lis-con.svg" alt="LisCon speakers" />
      <h2 class="title">{{ $t('speakers.title') }}</h2>
      <p class="subtitle">{{ $t('speakers_list.become_speaker') }}</p>
      <a href="/speakers">
        <Button class="button" type="disable">{{
          $t('speakers_list.apply')
        }}</Button>
      </a>
    </div>
    <div class="speakers-strip">
      <Speaker
        v-for="speaker in speakers"
        :key="speaker.name"
        :frame="speaker.frame"
        :name="speaker.name"
        :organization="speaker.organization"
        :img="speaker.img"
        :border="speaker.border"
      />
    </div>
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
  text-align: center;
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
  .speakers-strip {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 24px;
    margin: 48px;
  }
}
@media (max-width: 1200px) {
  .speakers-list {
    .speakers-strip {
      grid-template-columns: repeat(3, max-content);
      row-gap: 32px;
    }
  }
}
@media (max-width: 680px) {
  .speakers-list {
    .header {
      grid-template-columns: 1fr;
      row-gap: 8px;
      margin: 16px;
      .title {
        margin-top: 16px;
      }
      .img {
        border-right: none;
        border-bottom: 1px solid $blue;
        padding-right: 0;
        padding-bottom: 32px;
      }
    }
    .speakers-strip {
      grid-template-columns: repeat(2, max-content);
    }
  }
}
</style>
