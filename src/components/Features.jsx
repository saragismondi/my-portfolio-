import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { VscSmiley } from "react-icons/vsc";
import { DiPostgresql, DiNpm, DiJavascript1,DiResponsive, DiVisualstudio, DiGit, DiBootstrap } from "react-icons/di";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={100} >
        <Feature
          icon={<Icon as={DiPostgresql} w={10} h={10} color='#e06377' />}
          title={'Postgresql'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
         icon={<Icon as={DiNpm} w={10} h={10} color='#e06377' />}
          title={'Npm'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
           icon={<Icon as={DiJavascript1} w={10} h={10} color='#e06377' />}
          title={'Javascript'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={DiResponsive} w={10} h={10} color='#e06377' />}
          title={'Responsive Desing'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
         icon={<Icon as={DiVisualstudio} w={10} h={10} color='#e06377' />}
          title={'Visual Studio'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
         icon={<Icon as={DiGit} w={10} h={10} color='#e06377' />}
          title={'Git'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
          <Feature
         icon={<Icon as={DiBootstrap} w={10} h={10} color='#e06377' />}
          title={'Bootstrap'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
         icon={<Icon as={VscSmiley} w={10} h={10} color='#e06377' />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}