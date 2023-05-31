import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";


export function Comment({content, onDeleteComment}) {


  //criando um estado de likes
  const [likeCount, setLikecount] = useState(0);


  function handleDeleteComment(){
    console.log("deletar");

    onDeleteComment(content);
  }



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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikecount (likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </div>
  );
}