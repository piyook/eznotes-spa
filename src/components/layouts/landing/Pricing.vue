<template>
  <section>
    <h1>Pricing</h1>

    <div id="pricingCards">
      <div>
        <pricing-card>
          <template v-slot:pricingTitle><p id="title">Free</p></template>
          <template v-slot:pricingPoints>
            <p>Ten Notes Per Day</p>
            <p>Up To 100 notes Stored</p>
            <p>Free Sign-up !</p>
          </template>
        </pricing-card>
      </div>
      <div>
        <pricing-card>
          <template v-slot:pricingTitle><p id="title">Premium</p></template>
          <template v-slot:pricingPoints>
            <p>UNLIMITED Notes Per Day</p>
            <p>UNLIMITED Storage</p>
            <p>£5 Per Month</p>
            <p>Cancel At Anytime</p>
          </template>
        </pricing-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f8d6d6;
  text-align: center;
}
h1 {
  color: #d13838;
  font-size: 60px;
  font-weight: 300;
}

#title {
  background-color: #f2f20e;
  color: #d13838;
  font-size: 60px;
  font-weight: 300;
  width: 100%;
}

#pricingCards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
}

p {
  background-color: #d13838;
  width: 100%;
  color: #ffffff;
  font-weight: 300;
}
</style>
