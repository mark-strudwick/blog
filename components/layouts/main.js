import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="homepage" />
                <meta name="author" content="Mark Strudwick" />
                <meta property="og:site_name" content="Mark Strudwick's Homepage" />
                <meta property="og:type" content="website" />
                <title>Mark Strudwick - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
            {children}

            <Footer />
        </Container>
        </Box>
    )
}

export default Main
