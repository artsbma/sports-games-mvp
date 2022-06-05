import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import MvpCard from './MvpCard'
import Results from './Results'
import Button from '@mui/material/Button';
import "./App.css";

const PageGrid = styled(Grid)({
  color: 'darkslategray',
  backgroundColor: '#41ad48',
  padding: 8,
  borderRadius: 4,
});

function App() {
  // newName and newVote for creating records
  const [newName, setNewName] = useState("");
  const [newVote, setNewVote] = useState(0);
  // votes are read from existing database
  const [votes, setVotes] = useState([]);
  // choice selected by user
  const [choice, setChoice] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const votesCollectionRef = collection(db, "votes");

  const createWork = async () => {
    await addDoc(votesCollectionRef, {name: newName, votes: Number(newVote)})
  };

  // add 1 to votes field
  const voteNow = async (id, vote) => {
    //db from config, collection name, id
    const votesDoc = doc(db, "votes", id)
    const newFields = {votes: vote +1}
    // pass in both variables
    await updateDoc(votesDoc, newFields)
  }

  // saves selection from tapping or clicking card
  const saveSelection = (id, vote) => {
    // console.log("in selection")
    setChoice({id: id, votes: vote})
  }

  const handleSubmit = async () => {
    // let votes = choice.votes
    //db from config, collection name, id
    const votesDoc = doc(db, "votes", choice.id)
    const newVote = {votes: choice.votes + 1}
    await updateDoc(votesDoc, newVote);
    setSubmitted(true);
  }

  const startOver = () => {
    console.log("in start over")
    setSubmitted(false);
    setChoice([]);
    getVotes();
  }
  // delete artwork
  const deleteWork = async (id) => {
    const votesDoc = doc(db, "votes", id);
    await deleteDoc(votesDoc);
  }

  const getVotes = async () => {
    const data = await getDocs(votesCollectionRef);
    // console.log(data);
    console.log("Firebase fetch")
    setVotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    
    getVotes();
  }, []);

  return (
    
    <div className="App">
      {!submitted ? (<>
      <h1>The Real MVP</h1>
      <h3>Which one of these works is the "most valuable player" of this exhibition?</h3>
      <p>One pick. No regrets.</p>
      <PageGrid container spacing={3} columns={12}>
      {votes.map((item) => {
        return (
            <Grid item xs={3}>
            <MvpCard choice={choice.id} id={item.id} title={item.title} img={item.img} select={() => saveSelection(item.id, item.votes)}/>
            <p>{item.votes}</p>
            {/* <button onClick={() => voteNow(item.id, item.votes)}>Vote</button> */}
            {/* <button onClick={() => {deleteWork(item.id)}}>Delete Work</button> */}
            </Grid>
          
        );
      })}
      </PageGrid>
      {!choice.id  ? '' : (<Button onClick={handleSubmit} variant="contained" size="large">Submit Vote!</Button>)}
      </>) : <Results works={votes} done={startOver}/> }
      
    </div>
  );
}

export default App;

 {/* <input
        placeholder="name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="vote"
        onChange={(event) => {
          setNewVote(event.target.value);
        }}
      />
      <button onClick={createWork}>Add Work</button> */}
