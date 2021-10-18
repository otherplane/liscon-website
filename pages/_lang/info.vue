<template>
  <div class="wrapper">
    <NavBar />
    <div class="info">
      <a class="img-wrapper" href="/">
        <img class="img" src="@/assets/liscon_logo.png" alt="Go back" />
      </a>

      <h2 class="title">The Venue</h2>
      <h3 class="text">📍LxFactory</h3>
      <p class="text">R. Rodrigues de Faria 103, 1300-501 Lisboa</p>
      <a
        href="https://goo.gl/maps/WCCL4RM2SUnm21br8"
        target="_blank"
        rel="noopener noreferrer"
        >Find on google maps</a
      >

      <h2 class="title">Covid Measures</h2>
      <p class="text">Health and safety are a priority at LisCon.</p>

      <p class="text">
        All ticket holders must have EU vaccine certificates or a negative PCR
        test result valid for 72 hours or a negative Antigen test result valid
        for 48 hours or a valid recovery certificate to gain entry to the event.
      </p>

      <p class="text">
        Masks are mandatory and must be worn indoors at all times.
      </p>

      <p class="text">
        Liscon has ensured all appropriate measures as set by the Portuguese
        health authorities in October are adhered to.
      </p>

      <p class="text">
        Any attendee disrespectful of sanitary measures will be refused the
        right of entry.
      </p>

      <h2 class="title">
        What if I took a PCR or Antigen test outside of the EU?
      </h2>

      <p class="text">
        If you have taken a PCR Test 72h before or Antigen Test 48h before the
        event, we will accept it. Vaccination cards from outside the EU will not
        be accepted.
      </p>

      <h2 class="title">
        What if I don’t have an EU vaccine certificate or PCR/Antigen test?
      </h2>
      <p class="text">
        There are several pharmacies in Lisbon to do an Antigen test, results
        take typically 15 mins. You can find the list of pharmacies
        <a
          href="https://www.lisboa.pt/lisboaprotege/saude"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >
        accepted by the European Union Health Committee.
      </p>
      <p class="text">
        4 mins walk from our venue is Farmácia do Calvário,
        <a
          ref="noopener noreferrer"
          href="https://goo.gl/maps/GjQAggeR91uzjbFe9"
          target="_black"
          >R. José Dias Coelho 2, 1300-328 Lisboa</a
        >
      </p>

      <h2 class="title">How do we check it?</h2>

      <p class="text">EU vaccine passport</p>
      <p class="text">OR</p>
      <p class="text">A PCR test with negative result, valid for 72 hours</p>
      <p class="text">OR</p>
      <p class="text">
        An Antigen test with negative result, valid for 48 hours
      </p>

      <p class="text">A valid QR code will be scanned upon entry.</p>

      <h2 class="title">Will UK Covid Pass be accepted?</h2>
      <p class="text">
        Yes. Entry requirements to Portugal from UK has just changed and now UK
        Covid Pass are accepted
        <a
          ref="noopener noreferrer"
          href="https://www.gov.uk/foreign-travel-advice/portugal/entry-requirements"
          >https://www.gov.uk/foreign-travel-advice/portugal/entry-requirements</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('@/assets/background-2.svg');
  background-repeat: repeat;
  background-position: center;
  padding: 0 1rem 1rem 1rem;

  .info {
    padding: 5rem 0 2rem 0;
    display: flex;
    max-width: 700px;
    flex-direction: column;
    min-height: 400px;
    justify-content: center;

    .img-wrapper {
      width: 100%;
      text-align: center;
      margin-bottom: 48px;
      .img {
        width: 300px;
      }
    }

    .title {
      font-size: 1.5rem;
      margin: 1.5rem 0 1.5rem 0;
    }

    .text {
      font-size: 1rem;
      margin-bottom: 2rem;
      line-height: 1.5;
    }
  }
}
@media (max-width: 500px) {
  .wrapper .info {
    padding-top: 5rem;
  }
}
</style>
