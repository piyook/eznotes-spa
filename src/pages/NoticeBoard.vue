<template>
  <div id="page">
    <header-section></header-section>
    <notes-summary></notes-summary>
  </div>
  <router-view></router-view>
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
  min-height: 90vh;
  /* width: 80vw; */
  border: 1px solid black;
  margin: 80px;
}
</style>
