<template>
  <section>
    <div id="formLink"><router-link to="/login">Login / Register</router-link></div>
    <div id="heroBox">
      <div id="note">The No.1<br />Notetaking App</div>
      <div id="heroText">
        <h1>EZ-Note</h1>
        <p>A sleek note taking App</p>
        <signup-button></signup-button>
      </div>
    </div>
  </section>
</template>

<script>
import SignupButton from "../../UI/SignupButton";
export default {
  components: {
    SignupButton,
  },
};
</script>

<style scoped>
section {
  background-color: #d13838;
  color: white;
  width: 100%;
  height: 625px;
  text-align: right;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #f2f20e;
}

#formLink {
  align-self: flex-end;
  padding: 30px;
}

h1 {
  font-size: 70px;
  font-weight: 300;
}

p {
  margin-top: -40px;
}
#heroBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
#heroText {
  text-align: center;
  font-size: 30px;
  font-weight: 300;
}
#note {
  width: 230px;
  height: 230px;
  background-color: white;
  transform: rotate(-20deg);
  color: black;
  text-align: center;
  font-size: 28px;
  padding-top: 50px;
  box-shadow: 5px 5px 5px #000000;
  margin: 60px;
}

@media only screen and (max-width: 750px) {
  section {
    height: 800px;
  }
}
</style>
