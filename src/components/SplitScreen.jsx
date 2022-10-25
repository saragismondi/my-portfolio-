import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'30vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#eeac99',
                  zIndex: -1,
                }}>
                 I´m a  very curious logician
              </Text>
              <br />{' '}
              <Text color={'#e06377'} as={'span'}>
              who loves problem solving.
              </Text>{' '}
            </Heading>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'#eeac99'}
                color={'black'}
                px={6}
                _hover={{
                  bg: '#e06377',
                  
                }}>
                Contact me!
              </Button>
              {/* <Button rounded={'full'}>my Linkedin</Button> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://user-images.githubusercontent.com/82971303/197573736-40fc9a56-9c70-4283-a81d-06d6dd477c15.png' 
            }
          />
        </Flex>
      </Stack>
    );
  }