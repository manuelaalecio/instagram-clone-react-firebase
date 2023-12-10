import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={8} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={'bold'}
          _hover={{ color: 'gray.400' }}
          cursor={'pointer'}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name='Dan Abrahmov' followers={1392} avatar='https://bit.ly/dan-abramov' />
      <SuggestedUser name='Ryan Florence' followers={567} avatar='https://bit.ly/ryan-florence' />
      <SuggestedUser name='Christian Nwamba' followers={759} avatar='https://bit.ly/code-breast' />

      <Box fontSize={12} color={'gray.500'} mt={5}>
        © 2023 build By <Link href="https://github.com/manuelaalecio" target='_blank' color={'gray.500'} fontSize={14}>Manuela Alecio</Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
