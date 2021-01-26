<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>
<script>
export default {};
</script>

<style>
html,
body {
  font-family: "Roboto";
}

.container-centre {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
.route-enter-active {
  transition: all 0.8s ease-in-out;
}

.route-leave-active {
  transition: all 0.2s ease-out;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0%);
}

.route-leave-to {
  opacity: 0;
}
.route-leave-from {
  opacity: 1;
}
</style>
