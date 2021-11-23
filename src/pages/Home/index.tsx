import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io'
import { controllerHome } from '../../controllers';
import {
  ButtonSearch,
  Container,
  ContainerInformationMovie,
  ContainerMovie,
  ContainerSearcher,
  Genre,
  InputSearch,
  Label,
  LabelInition,
  Poster,
  Row,
  Title,
  TitleMovie
} from './styles';

const Home: React.FC = () => {

  const [title, setTitle] = useState<any>('');
  const [movie, setMovie] = useState({
    Title: '',
    Actors: '',
    Plot: '',
    Poster: '',
    Genre: ''
  });
  const getMovie = async () => {

    let movieInformation = await controllerHome.GetMovie(title);
    if (movieInformation) {
      setMovie(movieInformation);
    }
  }

  return <Container>
    <Title> 1, 2 ,3 Claquete</Title>
    <ContainerSearcher>
      <InputSearch placeholder="Pesquisa sobre o filme" value={title} onChange={(e: React.FormEvent<HTMLInputElement>) => { setTitle(e.currentTarget.value) }} />
      <ButtonSearch onClick={getMovie}><IoIcons.IoMdSearch /></ButtonSearch>
    </ContainerSearcher>
    <ContainerMovie>
      <Poster src={movie.Poster === '' ? 'https://www.agilizarecebiveis.com.br/content/img/image_not_found.png' : movie.Poster} />
      <ContainerInformationMovie>
        <Row>
          <TitleMovie>{movie.Title}</TitleMovie>
          <Genre> 	{movie.Genre} </Genre>
        </Row>
        <div>
          <LabelInition>Atores: </LabelInition>
          <Label> 	{movie.Actors} </Label>
        </div>
        <div>
          <LabelInition>Sinopse: </LabelInition>
          <Label>{movie.Plot}</Label>
        </div>
      </ContainerInformationMovie>
    </ContainerMovie>

  </Container>;
}

export default Home;