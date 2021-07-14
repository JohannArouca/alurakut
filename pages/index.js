import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar (props) {
  return(
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
      
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      
      <hr/>

      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'johannarouca';
  const [comunidades, setComunidades] = React.useState([{
    id: '13213543534151435134',
    titulo: 'Eu odeio acordar cedo',
    imagem: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas'
  ]


  return (
    <>
      <AlurakutMenu/>

      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={usuarioAleatorio}/> 
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo (a)
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();

              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString,
                titulo: dadosDoForm.get('titulo'),
                imagem: dadosDoForm.get('imagem'),
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }}>
              
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="titulo" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="imagem" 
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>

            </form>
          </Box>  
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.titulo}`}>
                      <img src={itemAtual.imagem}/>
                      <span>{itemAtual.titulo}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>   
        </div>
      </MainGrid>
    </>
  )
}
