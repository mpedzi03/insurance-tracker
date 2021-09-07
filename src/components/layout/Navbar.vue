<template>
  <div id="navbar">
    <ul>
      <li>Overview</li>
      <li>Health</li>
      <li>Dental</li>
      <li>Vision</li>
      <li>Auto</li>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#navbar {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-right: 15px;
  border: 2px solid #ffffff;
  border-radius: 15px;
  padding: 5px 10px;
}

li:hover {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  font-weight: 600;
}

li:active {
  background-color: #fff000;
}
</style>