<template>
  <div class="auction--container">
    <div v-if="nfts.length" class="nfts-list">
      <div v-for="nft in nfts" :key="nft.title" class="nft-card">
        <a
          :href="nft.auctionUrl"
          class="auction--link"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <section class="nft--asset">
          <div v-if="nft.assetUrl.includes('mp4')" class="video--container">
            <div class="padding"></div>
            <div class="asset--wrapper">
              <video
                :src="nft.assetUrl"
                loop=""
                autoplay=""
                muted=""
                playsinline=""
                class="video"
              ></video>
            </div>
          </div>
          <div v-else class="image--container">
            <div class="padding"></div>
            <div class="asset--wrapper">
              <img :src="nft.assetUrl" class="image" />
            </div>
          </div>
        </section>
        <section class="nft--info">
          <div class="info--wrapper">
            <h2>{{ nft.title }}</h2>
            <div>
              <h4>{{ nft.artist }}</h4>
              <h5>{{ nft.collection }}</h5>
            </div>
          </div>
          <div class="btn--wrapper">
            <Button type="style" class="">{{ $t('nft.go_to_auction') }}</Button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import nfts from '../nfts.json'

export default {
  data() {
    return {
      nfts,
    }
  },
}
</script>

<style scoped lang="scss">
.auction--container {
  margin-top: 48px;
  width: 80%;
  margin-right: -2rem;
  .nfts-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2rem;
    .nft-card {
      flex-basis: calc(25% - 2rem);
      max-width: calc(25% - 2rem);
      border: 1px solid $grey;
      background-color: $light-yellow;
      position: relative;
      transition: all 0.3s ease;
      will-change: transform;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:hover {
        transform: translateY(-4px);
        box-shadow: rgba(0, 0, 0, 0.1) 0 10px 20px 0;
        cursor: pointer;
        h2 {
          text-decoration: underline;
          -webkit-text-decoration-color: #f4bd03;
          text-decoration-color: #f4bd03;
          text-underline-offset: 3px;
        }
      }
      @media (max-width: 1500px) {
        flex-basis: calc(33.33% - 2rem);
        max-width: calc(33.33% - 2rem);
      }
      @media (max-width: 1150px) {
        flex-basis: calc(50% - 2rem);
        max-width: calc(50% - 2rem);
      }
      @media (max-width: 650px) {
        flex-basis: calc(100% - 2rem);
        max-width: calc(100% - 2rem);
      }
      .auction--link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .asset--wrapper {
        position: absolute;
        inset: 0;
      }
      .padding {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
      }
      .video--container {
        position: relative;
        overflow: hidden;
        video {
          max-width: 100%;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .image--container {
        position: relative;
        overflow: hidden;
        img {
          max-width: 100%;
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
      .nft--asset {
        border-bottom: 1px solid #cbc2bb;
        flex: 1;
      }
      .nft--info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        h2 {
          font-size: 22px;
          padding: 1rem 1rem 0;
          line-height: 1.2;
        }
        h4 {
          color: $dark_blue;
          padding: 1rem 1rem 0;
          font-size: 18px;
        }
        h5 {
          padding: 1rem;
          font-size: 14px;
        }
        .info--wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .btn--wrapper {
          padding: 1rem;
          border-top: 1px solid #cbc2bb;
          display: flex;
          align-items: center;
          button {
            width: 100%;
            font-size: 18px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
