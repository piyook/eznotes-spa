<template>
  <div>
    <slot name="cardTitle"></slot>
    <slot name="cardBody"></slot>
  </div>
</template>

<style scoped>
div {
  width: 535px;
  height: 269px;
  background-color: #d13838;
  color: #ffffff;
  font-size: 30px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  box-shadow: 5px 5px 5px grey;
}
</style>
