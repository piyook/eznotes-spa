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
  height: 200px;
  background-color: #f2f20e;
  color: #000000;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin: 50px;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

div:hover {
  box-shadow: 0px 0px 10px 5px #d13838;
  cursor: pointer;
}

#delete {
  font-size: 15px;
}
</style>
