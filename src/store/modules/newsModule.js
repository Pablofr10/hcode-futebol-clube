export default {
  state: {
    news: [
      {
        id: 1,
        titulo: 'Futebol está de volta as terças.',
        conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
            ipsam optio praesentium rem, ad repellat officiis corrupti quos natus
            hic, tenetur culpa soluta. Deserunt deleniti quisquam ex atque sed.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugiat
            possimus temporibus. Voluptas accusantium, ullam consectetur error dolor
            excepturi autem fuga obcaecati aspernatur dolore, ut, deserunt expedita
            culpa nam enim?`,
        date: '2020-01-01',
        img: 'news1.jpg',
        imgDesc: 'Notícia 1',
      },
      {
        id: 2,
        titulo: 'Jogo de quarta feira termina empatado.',
        conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
            ipsam optio praesentium rem, ad repellat officiis corrupti quos natus
            hic, tenetur culpa soluta. Deserunt deleniti quisquam ex atque sed.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugiat
            possimus temporibus. Voluptas accusantium, ullam consectetur error dolor
            excepturi autem fuga obcaecati aspernatur dolore, ut, deserunt expedita
            culpa nam enim?`,
        date: '2020-01-18',
        img: 'news2.jpg',
        imgDesc: 'Notícia 2',
      },
      {
        id: 3,
        titulo: 'A inauguração do estádio foi um sucesso.',
        conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
            ipsam optio praesentium rem, ad repellat officiis corrupti quos natus
            hic, tenetur culpa soluta. Deserunt deleniti quisquam ex atque sed.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugiat
            possimus temporibus. Voluptas accusantium, ullam consectetur error dolor
            excepturi autem fuga obcaecati aspernatur dolore, ut, deserunt expedita
            culpa nam enim?`,
        date: '2020-02-04',
        img: 'news3.jpg',
        imgDesc: 'Notícia 3',
      },
    ],
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getNewsFromId: (state) => (id) => {
      let notice = state.news.find((item) => item.id == id);

      return notice;
    },
  },
};
