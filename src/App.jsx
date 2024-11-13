import { Header } from './components/Header';
import {Post} from './Post';

import './global.css';

export function App() {

  return (
    <div>
      <Header/>
      <Post 
      author="Ray Antoniel" 
      content="esse texto é meramente ilustrativo é apenas um teste e está sendo escrito sem muito critério ou pontuação por favor não avalie isso ok"
      />
      <Post
      author="Samuca"
      content="esse texto é meramente ilustrativo é apenas um teste e está sendo escrito sem muito critério ou pontuação por favor não avalie isso ok só que agora para um outro possível usuário super real"
      />
    </div>
  )
}