import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Siderbar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'>

      </img>

      <div className={styles.profile}>

        <Avatar src="https://avatars.githubusercontent.com/u/107758173?s=400&u=0ef04fa58eba8b90b29b041da0ea715c588419fb&v=4" />

        <strong>Felipe Barbosa</strong>
        <span>Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}