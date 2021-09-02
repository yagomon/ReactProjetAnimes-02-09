import React, { useState } from "react";
import Titulo from "./components/titulo.js"
import './App.css';
import './components/titulo.css'



export default function App() {
  const [animes, setAnimes] = useState([
    {
      nome: "Tensei shitara Slime Datta Ken 2",
      imagemUrl: "https://1.bp.blogspot.com/-7YJ_4GAm7tk/X05puczPtJI/AAAAAAAAOoc/_S-Ga7TBO4QCswPGsZcKl0wdgyHFl35SgCLcBGAsYHQ/s640/FotoJet%2B%25287%2529.png",
        resumo:"Segunda Temporada, Depois de ser morto por um ladrão que fugia, um rapaz normal de 37 anos se encontra reencarnado em um outro mundo como um slime cego com habilidades únicas. Com um novo nome “Rimuru Tempest” ele chegou depois de conhecer seu novo amigo, o “nível de catástrofe”, Dragão da Tempestade Verudora. Então, ele começa sua vida de slime em outro mundo com seu crescente número de seguidores",
    },
    {
      nome: "Jujutsu Kaisen",
      imagemUrl: "https://stat.ameba.jp/user_images/20210221/13/blue-bell-knoll/d8/25/j/o0750103714899658012.jpg",
      resumo:"Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições que assolam o nosso dia-a-dia. Maldições avassalam o mundo todo, levando as pessoas a sofrer terríveis acidentes, levando até mesmo à morte. E para piorar, Maldições só podem ser exorcizadas por outras Maldições. Itadori Yuji é um garoto com tremenda força física que leva uma vida colegial absolutamente normal. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, ele engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Desse momento em diante, Gojo e o Ryomen-Sukuna compartilham o mesmo corpo. Orientado pelo mais poderoso dos feiticeiros, Gojo Satoru, Itadori se matricula no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heroica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição, uma vida da qual ele nunca mais conseguirá se desvencilhar.",
    },
    {
      nome: "Bokutachi no Remake",
      imagemUrl: "https://animeyabu.com/capas/bokutachi-no-remake-episodios-online.jpg",
      resumo:"A história acompanha um homem de 28 anos que se vê desempregado depois que a empresa que trabalha faliu. Ele decide voltar para a casa de seus pais até saber o que fazer da vida, mas, subitamente, acorda no seu corpo de 10 anos atrás, onde acabou de entrar para universidade. Por mais que meio confuso, o homem decide aproveitar a oportunidade e começar a refazer sua vida, para que assim possa ter um futuro melhor e seguir seu sonho de ser game design.",
    },
    {
      nome: "Genjitsu Shugi Yuusha no Oukoku Saikenki",
      imagemUrl: "https://64.media.tumblr.com/188476f0fa6736c879b19e6507d43a52/da362651298b3f00-e0/s1280x1920/96fcfd947b4475b8c44dde7ee2432db747acfff0.jpg",
      resumo:"A história acompanha um garoto chamado Souma, que foi invocado em um outro mundo como herói, mas, após apresentar vários planos e estratégias para reerguer a econômica e poder militar do reino, recebeu o direito de governar no lugar do rei. Não somente isso, ele também ganhou o direito de se casar com a princesa, se tornando o noivo dela. Agora, ao lado de outras cinco pessoas que também já haviam sido recrutadas antes, ele precisa governar para trazer de volta a glória daquele reino, aproveitando ao máximo das habilidades de seus subordinados.",
    },
    {
      nome: "Naruto Shippuden",
      imagemUrl: "https://pm1.narvii.com/6846/0f366012b75e069b9397e87ee2f0e39215b81645v2_hq.jpg",
      resumo:"Dois anos e meio se passaram após a partida de Uzumaki Naruto e Jiraiya da vila de Konoha, para um treinamento a parte com Naruto. Logo ao voltar à vila os primeiros a encontrá-lo foram Sakura e Konohamaru. Agora Naruto e seus amigos não tem apenas que se preocupar com o resgate de Sasuke, mas também com uma organização chamada Akatsuki, que está atrás dos Jinchuurikis (ninjas que carregam um Bijuu em seus corpos, junto a isso inumeros outros acontecimentos ocorrem ao longo da série.",  
    },
  ]);
  
  
  //acessar os itens individuais
  const [nomeAnime, setNomeAnime] = useState("");
  const [imagemUrlAnime, setImagemUrlAnime] = useState("");
  const [resumoAnime, setResumoAnime] = useState("");

  //usar estado para esconder e mostrar algo na tela
  const [showCadastro, setShowCadastro] = useState(false);
  const toggle = ()=>{
    setShowCadastro(!showCadastro);
  }

  // adicionar novos
  const adicionaAnime = (evento) => {
    evento.preventDefault();
    setAnimes([
        ...animes,
        {
        nome:nomeAnime,
        imagemUrl:imagemUrlAnime,
        resumo:resumoAnime
        }
    ]);
    setNomeAnime("");
    setImagemUrlAnime("");
    setResumoAnime("")
  }

//  Componentes
  
  //Botão que faz aparecer o cadastro
  function BotaoCadastro(){
    return(
      <button id="toggle" type="button" onClick={toggle}>{showCadastro ? 'Esconder Cadastro' : 'Cadastrar Novo Anime'}</button>
    )
  }

  //Imagem do anime
  function Imagem(props){
    return(
      <img src={props.img} alt={props.nome} />
    )
  };
  //Nome do anime h3
  function NomeAnime(props){
    return(
      <h3>{props.nome}</h3>
    )  
  };

  //Resumo do anime p
  function Resumo(props){
    const resumo= props.resumo;
    const pre= resumo.substr(0,359);

    const [leiaMais,setLeiaMais]= useState(false);
    const nome= leiaMais? 'Esconder <<':'Leia Mais >>'
    setLeiaMais(pre + "...") 


    return (
      <>
      <p>{leiaMais}</p>
      <a onClick={()=>{setLeiaMais(!resumo)
      }} >{nome}</a>
      {resumo}
      </>
    )
  };

  //Roda pé
  function Footer(){
    return(
      <footer><p>© Projeto de estudo em React JS Entregue a Blue EdTech ©</p></footer>
    )
  }


  return(
  <div className="screen">
    <Titulo textopre="Meus" textopos=""/>        

    <section className="buttonToggle">
      <div id="buttonToggle">
        <BotaoCadastro />
      </div>
    </section>
    {showCadastro && (
      <form onSubmit={adicionaAnime}>
        <h2>Cadastre um novo anime:</h2>
        <div className='input'>
        <input placeholder="digite o nome do anime" 
        value={nomeAnime} 
        onChange={(evento) => {
          setNomeAnime(evento.target.value)
        }}
        type="text"/>
        
        <input placeholder="digite a url da imagem" 
        value={imagemUrlAnime} 
        onChange={(evento) => {
          setImagemUrlAnime(evento.target.value)
        }}
        type="text"/>
        
        <input placeholder="digite o resumo do anime" 
        value={resumoAnime} 
        onChange={(evento) => {
          setResumoAnime(evento.target.value)
        }}
        type="text"/>
        </div>
        <div className='screenCadastrar'>
        <button className='cadastrar' type="submit">Salvar</button>
        </div>
      </form>
    )}
      
    <ul className="containerScreen">
      {animes.map((anime) => (
        <li className="container">
        <NomeAnime nome={anime.nome} />
        <Imagem img={anime.imagemUrl} nome={anime.nome} />
        <Resumo resumo={anime.resumo} />
        </li>
        ))}
    </ul>

    <Footer/>

  </div>
  )
}    

       
