
import './App.css';
import Suggestions from './componenets/Suggestions'
import Search from './componenets/Search'
function App() {
  return (
    <div className="h-screen w-screen bg-slate-900 overflow-hidden relative  flex flex-col">
 
        <Search/>
        <Suggestions/>
   
     <div className=' absolute h-[300px] w-[300px] rounded-full bg-gradient-to-r from-sky-500  z-0 top-0 -left-24 blur-xl '></div>
     <div className=' absolute md:h-[900px] md:w-[900px] rounded-full bg-gradient-to-l  from-indigo-700     z-0 -bottom-52 -right-52 blur-xl'></div>
   
    </div>
  );
}

export default App;
