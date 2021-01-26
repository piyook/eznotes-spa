<template>
  <div>
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
  height: 300px;
  background-color: #f2f20e;
  color: #000000;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin: 50px;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
}

div:hover {
  transform: scale(1.3);
  cursor: pointer;
}

#delete {
  font-size: 15px;
}
</style>
