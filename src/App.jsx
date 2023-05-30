import { useState } from 'react'
import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Siderbar } from './components/Siderbar';
import { Post } from './components/Post';


const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/felipe-barbos.png',
      name: 'Felipe Barbosa',
      role: 'Developer web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto projetado pelo evento NLW' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:24:00')
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer do caralho'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!' },
      { type: 'paragraph', content: 'VAI TOMAR NO CU LULA' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 23:45:00'),
  },
]



function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
