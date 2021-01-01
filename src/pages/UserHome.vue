<template>
  <div id="page">
    <header-section></header-section>
    <boards-summary></boards-summary>
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from "../components/layouts/userhome/Header";
import BoardsSummary from "../components/layouts/userhome/Boards";
import FooterSection from "../components/layouts/userhome/Footer";

export default {
  components: {
    HeaderSection,
    BoardsSummary,
    FooterSection,
  },
};
</script>

<style scoped>
#page {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
