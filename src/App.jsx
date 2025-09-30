
import './App.css'
import MyMain from './assets/MyMain';
import MyHeader from './assets/MyHeader'
import MyFooter from './assets/MyFooter';

function App() {
  return (
    <>
      <div className='p-4 container'>
        <MyHeader />
        <MyMain />
        <MyFooter />
      </div>

    </>
  )
}

export default App
