import './App.css';
import Cv from './pages/Cv/Cv'; 
import { Routes, Route} from "react-router-dom"
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Portfolio from './pages/Portfolio/Portfolio';
import PresUseState from './pages/UseStatesSection/PresUseState';
import UseStateObject from './pages/UseStatesSection/UseStateObject';
import UseStateToogle from './pages/UseStatesSection/UseStateToogle';
import UseStateList from "./pages/UseStatesSection/UseStateList"
import UseStateNumber from "./pages/UseStatesSection/UseStateNumber"

import PresUseEffect from './pages/UseEffectSection/PresUseEffect';
import UefVide from './pages/UseEffectSection/UefVide';
import UseEffectDependance from "./pages/UseEffectSection/UseEffectDependance"
import UseEffectReturn from "./pages/UseEffectSection/UseEffectReturn"
import StyleReact from "./pages/StyleReact/StyleReact"

import DataTableBasique from './pages/DataTable/DataTableBasique';
import DataTableFull from './pages/DataTable/DataTableFull';
import DataTableSort from './pages/DataTable/DataTableSort';

import PresUseRef from './pages/PresUseRef/PresUseRef';
import Login from './pages/Login/Login';
import AddArticle from './pages/Article/AddArticle';
import UpdateArticle from './pages/Article/UpdateArticle';
import DeleteArticle from './pages/Article/DeleteArticle';

import HKbase from "./pages/HookForm/HKbase"
import HfSelect from "./pages/HookForm/HfSelect"
import HfBlur from './pages/HookForm/HfBlur';
import FormikExemple from "./pages/HookForm/FormikExemple"
import AxiosPost from './pages/ApiSection/AxiosPost';
import AxiosGet from './pages/ApiSection/AxiosGet';

import Intro from './pages/RouterSection/Intro';
import Curseur from './components/curseur/Curseur'
import BouttonFleches from './components/boutton-fleche/BouttonFleches';


function App() {

  return (
      <Routes>
     
        <Route index element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/Portfolio" element={<Portfolio />} />

        {/* Section UseState */}
        <Route path="/PresUseState" element={<PresUseState />} />
        <Route path="/usfObject" element={<UseStateObject />} />
        <Route path="/UseStateToogle" element={<UseStateToogle />} />
        <Route path="/UseStateList" element={<UseStateList />} />
        <Route path="/UseStateNumber" element={<UseStateNumber />} />

        {/* Section UseEffect */}
        <Route path="/PresUseEffect" element={<PresUseEffect />} />
        <Route path="/UefVide" element={<UefVide />} />
        <Route path="/UseEffectDependance" element={<UseEffectDependance />} />
        <Route path="/UseEffectReturn" element={<UseEffectReturn />} />\

        {/* Section CSS */}
        <Route path="/StyleReact" element={<StyleReact />} />
        <Route path="/Test" element={<Test />} />

        {/* Section DataTable */}
        <Route path="/DataTableBasique" element={<DataTableBasique />} />
        <Route path="/DataTableSort" element={<DataTableSort />} />
        <Route path="/DataTableFull" element={<DataTableFull />} />

        <Route path="/PresUseRef" element={<PresUseRef />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />
        <Route path="/AxiosPost" element={<AxiosPost />} />
        <Route path="/AxiosGet" element={<AxiosGet />} />

        <Route path="/Intro" element={<Intro />} />





        <Route path="/HKbase" element={<HKbase />} />
        <Route path="/HfSelect" element={<HfSelect />} />
        <Route path="/HfBlur" element={<HfBlur />} />
        <Route path="/FormikExemple" element={<FormikExemple />} />
        <Route path="/curseur" element={<Curseur/>} />
        <Route path="/buttonfleche" element={<BouttonFleches />} />


        <Route path="*" element={<PageError />} />
      
      </Routes>
  );
}

export default App;