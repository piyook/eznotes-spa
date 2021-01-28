<template>
  <div id="page">
    <header-section></header-section>
    <notes-summary></notes-summary>

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderSection from "../components/layouts/noticeboard/Header";
import NotesSummary from "../components/layouts/noticeboard/Notes";

export default {
  components: {
    HeaderSection,
    NotesSummary,
  },
};
</script>

<style scoped>
#page {
  background: #fce1e1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
  border: 1px solid black;
  margin: 30px;
}

@media only screen and (max-width: 750px) {
  #page {
    overflow-x: hidden;
    margin: 10px;
  }
}
</style>
