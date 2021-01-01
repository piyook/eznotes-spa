<template>
  <h1>Features</h1>
  <div>
    <div id="cardRow">
      <feature-card>
        <template v-slot:cardTitle>
          <p>Easy to Use</p>
        </template>
        <template v-slot:cardBody>
          <div>
            EZ-Note is intuitive to use<br />
            You'll be making notes in minutes!
          </div>
        </template>
      </feature-card>
      <feature-card>
        <template v-slot:cardTitle>
          <p>Cloud Storage</p>
        </template>
        <template v-slot:cardBody>
          Secure cloud storage<br />
          Access them from anywhere!
        </template>
      </feature-card>
    </div>

    <feature-card>
      <template v-slot:cardTitle>
        <p>Customizable</p>
      </template>
      <template v-slot:cardBody>
        Different colours and fonts<br />
        Make your notes your own!
      </template>
    </feature-card>
  </div>
</template>

<style scoped>
h1 {
  color: #d13838;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
}

p {
  font-size: 50px;
  font-weight: 300;
  color: #f2f20e;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#cardRow {
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
