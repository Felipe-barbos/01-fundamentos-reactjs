import { format, formatDistanceToNow, set } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

  // estado onde irá receber o ultimo valor enviado pela função
  const [newCommentText, setNewCommentText] = useState('');

  console.log(newCommentText);

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  });

  const publisehdDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  //criando um useState de comentários
  const  [comments, setComments] = useState([
    'Post muito foda, viu cara, meus parabéns!'
  ]);

  //estado = variáveis monitoradas pelo component

  //função que permite criar um novo comentário
function handleCreateNewComment(){

  event.preventDefault();
  
 
  //imutabilidade função onde irá adicionar um novo comentário no array
  setComments([...comments, newCommentText]);

  setNewCommentText('');
 
}

//função que envia no novo comentário digitado para o estado newCommentText
function handleNewCommentChange(){

  //serve para retirar notificação do textarea
  event.target.setCustomValidity('')
  //função onde irá capturar os valores digitados e enviá-los para o estado  newCommentText
  setNewCommentText(event.target.value);
}

function deleteComment(commentToDelete){

  //Aplicando imutabilidade ao deletar um comentário imutabilidade --> as variáveis não sofrem mutação, nós criamos um novo valr/espaço

  const commentsWithoudDeletedOne = comments.filter(comment => {
    return comment !== commentToDelete;
  });

  setComments(commentsWithoudDeletedOne);
}

function handleNewCommentInvalid(){
  
  //Server para alterar as informações de avisa no textarea
  event.target.setCustomValidity('Este campo é obrigatório!');
}

const isNewCommentEmpty = (newCommentText.length === 0);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publisehdDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a key={line.content} href="#">{line.content}</a></p>
          }
        })}

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

        <strong>Deixei seu feedback</strong>

        <textarea 
        name="comment"
        placeholder='Deixe um comentário'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        >

        </textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        
         {comments.map(comment =>{
            return (
              <Comment 
                key={comment} 
                content={comment} 
                onDeleteComment={deleteComment}/>
                )
          }

        )}
        
      </div>

    </article>
  );
}