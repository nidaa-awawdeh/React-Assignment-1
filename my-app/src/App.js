
import './App.css';
import { post ,users } from './q3.js';

function App() {
  const name = "Hello World";
const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
  const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
  const appdata = post.map(inner => <li key={inner.id}>{ inner.title }</li> )
  const usersdetaels = users.map(use => <li key={use.id}>{use.name} + { use.email } </li>)
  return (
    <div className="App">
      <div>
     
        
        {name}<br/>
        {obj.name}
        {/* {data} <br/> */}

        <div>{data[0]}, {data[1]} ,{data[2]}</div>
        <div>
          {list[0].name} <br/>
          {list[1].name}
            {list[2].name}
        </div>
    
        <br />
        <hr />
        <div>
          {complex[0].company}<br/>
          {complex[0].jobs[0]} <br />
          {complex[0].jobs[1]} <br />
     <hr/>

              {complex[1].company}<br/>
          {complex[1].jobs[0]} <br />
          {complex[1].jobs[1]} <br />

          {/*  question three */}
          <hr/>

          {appdata}

         {usersdetaels}
        

          

        </div>

       
    
        
   </div>
    </div>
  );
}



export default App;
