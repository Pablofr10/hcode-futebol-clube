<template>
  <section>
    <div class="container">
      <HcodeSectionNewsIndividual
        img-name="news1.jpg"
        img-info="Notícia 1"
        news-title="Começamos os treinos para a nova temporada."
        news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
        ipsam optio praesentium rem, ad repellat officiis corrupti quos natus
        hic, tenetur culpa soluta. Deserunt deleniti quisquam ex atque sed.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugiat
        possimus temporibus. Voluptas accusantium, ullam consectetur error dolor
        excepturi autem fuga obcaecati aspernatur dolore, ut, deserunt expedita
        culpa nam enim?"
        news-date="01/01/2020"
      />

      <HcodeSectionNewsIndividual
        img-name="news2.jpg"
        img-info="Notícia 2"
        news-title="Jogo de quarta feira termina empatado."
        news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
        ipsam optio praesentium rem, ad repellat officiis corrupti quos natus
        hic, tenetur culpa soluta. Deserunt deleniti quisquam ex atque sed.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugiat
        possimus temporibus. Voluptas accusantium, ullam consectetur error dolor
        excepturi autem fuga obcaecati aspernatur dolore, ut, deserunt expedita
        culpa nam enim?"
        news-date="01/03/2020"
      />
      <HcodeSectionNewsIndividual
        img-name="news3.jpg"
        img-info="Notícia 3"
        news-title="A inauguração do estágio foi um sucesso."
        news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
        ipsam optio praesentium rem, ad repellat officiis corrupti quos natus
        hic, tenetur culpa soluta. Deserunt deleniti quisquam ex atque sed.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugiat
        possimus temporibus. Voluptas accusantium, ullam consectetur error dolor
        excepturi autem fuga obcaecati aspernatur dolore, ut, deserunt expedita
        culpa nam enim?"
        news-date="01/03/2020"
      />
    </div>
  </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual';

export default {
  components: {
    HcodeSectionNewsIndividual,
  },
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: orange;
}
</style>
