<template>
  <div class="wrapper">
    <div class="footer">
      <div class="top">
        <img src="@/assets/liscon_white.svg" alt="" class="eth-logo" />
        <h4 class="title">{{ $t('footer.title') }}</h4>
        <div class="links">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdcrMAhYN79_PMScP_NZ9tLhHNojayXonHOJw7uQoJ6HPNaFg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('footer.invitation_letter') }}</a
          >
          <a @click="openPdf">{{ $t('footer.terms') }}</a>
        </div>
      </div>
      <div class="bottom">
        <p class="copyright">@2021 LisCon</p>
        <!-- <a
          href="mailto:liscon@yoursite.com"
          target="_blank"
          rel="noopener noreferrer"
          ><img class="media" src="@/assets/email.svg" alt="Email us"
        /></a> -->

        <a
          href="https://twitter.com/0xliscon"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="media"
            src="@/assets/twitter.svg"
            alt="Follow us on twitter"
        /></a>

        <a
          href="https://t.me/liscon2021"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="media"
            src="@/assets/telegram.svg"
            alt="Join the telegram group"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openPdf() {
      const pdf = require('../assets/terms-conditions.pdf')
      window.open(pdf)
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  color: white;
  background: $dark_blue;
  display: flex;
  justify-content: center;

  .footer {
    max-width: 900px;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .top {
      display: grid;
      grid-template: 1fr / repeat(auto-fit, 1fr);
      grid-gap: 16px;

      .links {
        display: flex;
        flex-direction: column;
        // align-self: flex-end;
        // justify-self: flex-end;
        margin-bottom: 8px;
        text-align: right;

        a {
          color: $white;
          margin-bottom: 8px;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .title {
        width: 90%;
        text-align: left;
        margin-bottom: 2rem;
        font-size: 1rem;
        max-width: 300px;
        font-weight: lighter;
      }

      .eth-logo {
        grid-column: 1 / span 2;
        margin-bottom: 0.4rem;
        width: 160px;
      }
    }

    .bottom {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr auto auto auto;
      align-items: center;

      .copyright {
        text-align: left;
        font-weight: bold;
        font-size: 1rem;
      }

      .media {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
