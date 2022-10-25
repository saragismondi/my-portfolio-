import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image
  } from '@chakra-ui/react';
  
  export default function Main() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Full Stack Web Developer{' '}
            <br/> 
            <Text as={'span'} color={'#e06377'}>
            {' '}Sara Gismondi
            </Text>
          </Heading>
          
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'#e06377'}
              bg={'#e06377'}
              _hover={{ bg: '#e06377' }}>
              My Projects
            </Button>
            <Button rounded={'full'} px={6}  bg={'#eeac99'}  _hover={{ bg: '#e06377' }}>
              My Skills
            </Button>
          </Stack>
         
        </Stack>
      </Container>
    );
  }
  