import { Component } from 'react';
import About from './About';
import './App.css';
import cat from './imagem/cat.jpg';
import Hello from './Hello';
import Hobbies from './Hobbies';
import Image from './Image';
import Album from './Album';
import DadosPessoas from './DadosPessoas';

class App extends Component {
  render() {
    const album01 = {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital',
      },
    };

    const lista = {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital',
      },
    };

    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar:
        'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar:
        'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
    };

    const users = [
      {
        name: 'Hello',
        lastName: 'Word',
      },
      {
        name: 'How you',
        lastName: 'doooing?',
      },
    ];

    return (
      <div className='App'>
        <div
          className='Card'
          style={{ border: '10px solid #808080' }}
        >
          {users.map((user) => (
            <Hello
              key={user.lastName}
              user={user}
            />
          ))}
        </div>
        <div
          className='Card'
          style={{ border: '10px solid blue' }}
        >
          <About />
        </div>
        <div
          className='Card'
          style={{ border: '10px solid #234800' }}
        >
          <Hobbies />
        </div>
        <div
          className='Card'
          style={{ border: '10px solid pink' }}
        >
          <Image
            source={cat}
            alternativeText='Cute cat staring'
          />
        </div>
        <div
          className='Card'
          style={{ border: '10px solid green' }}
        >
          <Album album={album01} />
        </div>
        <div
          className='Card'
          style={{ border: '10px solid purple' }}
        >
          <Album album={lista} />
        </div>
        <div
          className='Card'
          style={{ border: '10px solid darkgoldenrod' }}
        >
          <DadosPessoas nome={joao} />
          <DadosPessoas nome={amelia} />
        </div>
      </div>
    );
  }
}

export default App;
