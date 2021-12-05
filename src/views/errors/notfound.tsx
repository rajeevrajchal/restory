import { Container,Center,Box,Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container maxW='container.xl' height="80vh">
            <Center h='inherit' display="flex" justifyContent="center" flexDir="column">
                <Box  w='inherit' p={4} color='black'>
                    Page Not Found
                </Box>
                <Button colorScheme='blue' onClick={() => navigate('/')}>Back To Home</Button>
            </Center>
        </Container>
    )
}

export default NotFound
