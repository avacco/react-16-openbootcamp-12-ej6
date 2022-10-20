import { Button, IconButton } from '@mui/material/';
import React, {useState, useEffect} from 'react';
import { getChiste } from '../services/axios.service';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckNorris = () => {
  
  const [chiste, setChiste] = useState(null);
  let [gusta, setGusta] = useState(0);
  let [noGusta, setNoGusta] = useState(0);

  useEffect(() => {
    getRandomChiste();
  }, []);

  const getRandomChiste = () => {
    getChiste()
    .then((response) => {
      if(response.status === 200){
        setChiste(response.data);
      }
    })
    .catch((error) => {
      alert(`Algo ha ido mal: ${error}`);
    })
  }
  
  const meGusta = () => {
    setGusta(gusta+1);
    getRandomChiste();
  }

  const noMeGusta = () => {
    setNoGusta(noGusta+1);
    getRandomChiste();
  }

  return (
    <div>
      <h1>Chistes de Chuck Norris (en inglés)</h1>

          { chiste != null ?
            (
          
            <div>
              <h2>{chiste.value}</h2>
            </div>
            )
            :
            (
              <h2>. . .</h2>
            )
          }
          <div>
            <IconButton aria-label="like" size="large" onClick={() => meGusta()}>
              <ThumbUpIcon fontSize="inherit" color='success'/>
            </IconButton>
            <Button variant="contained" onClick={() => getRandomChiste()}>Nuevo chiste</Button>
            <IconButton aria-label="like" size="large" onClick={() => noMeGusta()}>
              <ThumbDownIcon fontSize="inherit" color='error' />
            </IconButton>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Me gusta</th>
                  <th>No me gusta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{gusta}</td>
                  <td>{noGusta}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  );
}

export default ChuckNorris;
