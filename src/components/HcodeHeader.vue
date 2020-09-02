<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand">
        <a href class="link navbar-brand mr-auto">
          <img
            src="./../assets/logo.svg"
            alt="Hcode Treinamentos"
            class="img d-inline-block alignt-top"
            id="logo"
          />
          Futebol Clube
        </a>

        <div class="links mr-2">
          <router-link class="btn mr-5" to="/">Inicio</router-link>
          <router-link class="btn mr-5" to="/news">Notícias</router-link>

          <a href="#" class="btn mr-5">Classificações</a>
          <select
            name="championship"
            id="select-championship"
            class="form-control"
            @change="$emit('select-championship', $event.target.value)"
          >
            <option
              v-for="(camp, index) in campeonato"
              v-bind:key="index"
              :value="camp"
              >{{ camp }}</option
            >
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      campeonato: [
        'Campeonato Brasileiro',
        'Campeonato Espanhol',
        'Campeonato Inglês',
        'Campeonato Italiano',
      ],
    };
  },
};
</script>

<style scoped>
header {
  background-color: #000;
}
#logo {
  width: 150px;
  height: 100%;
}
.links {
  display: inline-flex;
}
.link {
  color: #d48e23;
  font-size: 30px;
  font-family: 'Rajdhani';
}
.links a {
  color: #fff;
}
.links a:focus {
  outline: none !important;
  box-shadow: none !important;
}
.link-active {
  background: peachpuff;
  color: #000 !important;
}
</style>
