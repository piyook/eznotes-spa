<template>
  <div id="board">
    <slot name="title"></slot>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding-top: 20px;
  width: 300px;
  height: 400px;
  background-color: #f2f20e;
  color: #000000;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin: 50px;
  border: 2px solid rgb(220, 220, 220);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
}

#board:hover {
  transform: scale(1.15);
  cursor: pointer;
}

#delete {
  font-size: 15px;
}
</style>
