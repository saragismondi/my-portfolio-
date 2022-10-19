import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
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
            <Text as={'span'} color={'orange.400'}>
            {' '}Sara Gismondi
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Hi! I´m Sara and I am a Full-Stack Web Developer Jr!. For a long time, I studied Logic so I´m a logician but now I´m so happy to have the possibility to apply it in conjunction with all the technologies that I learned in Henry Bootcamp, where I formed myself with their intensive course for Full-Stack Web Developer, which counts with 800+ hours of practicing and learning.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
        
        </Stack>
      </Container>
    );
  }
  