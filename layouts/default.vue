<template>
  <div class="main-wrapper">
    <TopMenu></TopMenu>
    <section class="content">
      <aside class="left-side">
        <h1>Добавление товара</h1>
        <TheProductForm></TheProductForm>
      </aside>
      <aside class="right-side">
        <nuxt />
      </aside>
    </section>
  </div>
</template>

<script>
import TheProductForm from "@/components/TheProductForm";
import TopMenu from "@/components/TopMenu";


export default {
  name: "default",
  components: {
    TheProductForm,
    TopMenu
  },
  beforeMount() {
    this.$store.dispatch('INIT_PROCESSING_STORE');
  }
}
</script>

<style lang="scss" scoped>
.main {
  &-wrapper {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
  }
}

.content {
  display: flex;
  flex-direction: row;
  align-items:flex-start;
  padding: 0 25px;
  @media all and (max-width: 768px) {
    padding: 0 5px;
    flex-direction: column;
    }
  }
.left-side {
  display: flex;
  flex-direction: column;
  max-width: 332px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  margin-right: 15px;
  @media all and (max-width: 768px) {
    max-width: none;
    width: 100%;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    @media all and (max-width: 450px) {
      text-align: center;
    }
  }
}


.right-side {
  display: flex;
  flex: 1 1 100%;
}



</style>
