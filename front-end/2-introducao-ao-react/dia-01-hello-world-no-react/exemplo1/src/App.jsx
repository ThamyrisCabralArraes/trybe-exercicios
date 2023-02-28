import { Component } from 'react';
import About from './About';
import './App.css';
import cat from './imagem/cat.jpg'
import Hello from './Hello';
import Hobbies from './Hobbies';
import Image from './Image';
import Album from './Album';

class App extends Component {
  
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const lista = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div className='App'>
        <Hello />
        <About />
        <Hobbies />
        <Image source={cat} alternativeText='Cute cat staring'/>
        <Album album={ album01 } />
        <Album album={ lista } />
      </div>
    );
  }
}

export default App;
