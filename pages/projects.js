import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Projects = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <p>Projects to be added!</p>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects