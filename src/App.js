import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/Main';
import CaptionCarousel from './components/CaptionCarousel';
import Footer from './components/Footer';
import Features from './components/Features';
import SplitScreen from './components/SplitScreen';
import NavLink from './components/NavLink';
import SecondSplit from './components/SecondSplit';
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      {/* <NavLink/> */}
      <Main/>
      <SplitScreen/>
      <Features/>
      <CaptionCarousel/>
      <SecondSplit/>
      <Footer/>
    </ChakraProvider>
  )
}


export default App;
