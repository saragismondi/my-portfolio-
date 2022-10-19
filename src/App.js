import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/Main';
import CaptionCarousel from './components/CaptionCarousel';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Main/>
      <CaptionCarousel/>
      <Features/>
      <Footer/>
    </ChakraProvider>
  )
}


export default App;
