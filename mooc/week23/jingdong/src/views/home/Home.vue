<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from "./StaticPart";
import Nearby from "./Nearby";
import Docker from "./Docker";
export default {
  name: "Home",
  components: { StaticPart, Nearby, Docker },
};
</script>

<style lang="scss" scoped>
@import "../../style/variable.scss";
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0rem;
  overflow-y: auto;
  // background: palevioletred;
  padding: 0 0.18rem 0.15rem 0.18rem;
}
</style>
