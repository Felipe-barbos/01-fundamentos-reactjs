import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";


export function Comment() {
  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/107758173?s=400&u=0ef04fa58eba8b90b29b041da0ea715c588419fb&v=4" alt="" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Barbosa</strong>
              <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:54">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom manito, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  );
}