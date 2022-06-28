# Agenda de contatos
Aplicativo de agenda de contatos, feito com React pondo na pratica a instrução e orientação da Toti na Turma 15 de "Programador Full-Stack".

## Conteudo

- [Visão geral](#visao-geral)
  - [Rascunho](#rascunho)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Feito com](#feito-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#recursos-uteis)
- [Autor](#autor)

## Visão geral

### Rascunho

![](/public/Rascunho.jpg)
<!-- <div> 
  <img align="center" height="150em" src="/src/imagens/Contato.png" />
  <img align="center" height="150em" src="/src/imagens/Sobre.png" />
  <img align="center" height="150em" src="/src/imagens/Habilidades.png" />
</div> -->

### Links

- Codigo na web URL: [GitHub](https://github.com/Akherox/my-contact-list)
- Site ao vivo URL: [Vercel Pages](https://my-contact-list-akherox.vercel.app/)

## Meu processo

### Feito com

- React e o JSON-Server.

### O que eu aprendi (até agora)

Trabalhar com "react-router-dom" as rotas e o comportamento delas.

```jsx
<Routes>
    <Route exact path="/" element={<Contacts />}/>
    <Route exact path='/add' element={<AddContact/>}/>
</Routes>
```
Editar conteudo da API.
```jsx
<form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />
                <button onClick={Update} className="w-[80%] bg-blue-600 text-white text-xl font-Montserrat font-semibold py-4 pl-6 mt-4">Editar Contato</button>
            </form>
```
Tirar a decoração dos links do CSS.
```css
.link {
    text-decoration: none !important;
    margin-right: 10px;
}
```

### Desenvolvimento contínuo

Tenho dificuldades com os props e os states quando passam informações, vou estudar mais isso.

### Recursos úteis

- [Recurso das aulas react](https://github.com/toti-br/react-aula-1-turma-15)
- [Recurso do CSS usado](https://tailwindcss.com/)
- Estes são os recursos que usei no desenvolvimento desda "APP".

## Autor

- Website - [Bryan Bravo](https://www.linkedin.com/in/alex-bravo-008-mk)
