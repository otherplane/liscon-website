<template>
  <div class="participate">
    <p class="title">{{ $t('participate.title') }}</p>
    <div class="buttons">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://app.unlock-protocol.com/checkout?redirectUri=http%3A%2F%2Fliscon.org%2F&paywallConfig=%7B%22locks%22%3A%7B%220xeA9265a4ffA137523e83D68D4160325A936ec8b9%22%3A%7B%22network%22%3A1%7D%7D%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0xeA9265a4ffA137523e83D68D4160325A936ec8b9%2Ficon%22%2C%22metadataInputs%22%3A%5B%7B%22name%22%3A%22Name%22%2C%22type%22%3A%20%22text%22%2C%22required%22%3A%20true%7D%2C%7B%22name%22%3A%22Email%22%2C%22type%22%3A%20%22email%22%2C%22required%22%3A%20true%7D%2C%7B%22name%22%3A%22Where%20are%20you%20coming%20from%3F%22%2C%22type%22%3A%20%22text%22%2C%22required%22%3Afalse%7D%5D%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0xeA9265a4ffA137523e83D68D4160325A936ec8b9%2Ficon%22%2C%22callToAction%22%3A%7B%22default%22%3A%22Purchase%20the%20early-bird%2C%20discounted%20tickets%20for%20LisCon%3A%20Lisbon%27s%20largest%20blockchain%20conference%20on%20October%2020-21.%20Note%3A%20discounted%20tickets%20for%20Portuguese%20citizens%20%26%20students%20will%20be%20available%20at%20a%20later%20date%22%7D%7D"
        ><Button>{{ $t('participate.buy_ticket') }}</Button></a
      >
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfNQA3MKkbA8RQBi6WElz0iLxVW4QG8bBd0HRYeMBAqDdSNAA/viewform"
        ><Button>{{ $t('participate.apply_to_speak') }}</Button></a
      >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfNQA3MKkbA8RQBi6WElz0iLxVW4QG8bBd0HRYeMBAqDdSNAA/viewform"
        rel="noopener noreferrer"
        target="_blank"
        ><Button class="button">{{ $t('participate.sponsor') }}</Button></a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.participate {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/building.svg');
  background-repeat: no-repeat;
  background-position: center;
  margin: 2rem 0;

  .title {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: $blue;
    font-family: 'RousseauDeco', sans-serif;
  }

  .buttons {
    display: flex;

    .button {
      margin-right: 1rem;
    }
  }
}

@media (max-width: 680px) {
  .participate {
    .title {
      font-size: 10vw;
    }

    .buttons {
      flex-direction: column;

      .button {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
