import React from 'react'
// import axios from 'axios'
import { Grid, Box, Heading, Text, Image } from '@chakra-ui/react'

import Layout from '../layout'
import { GetServerSideProps } from 'next'
import { AboutInfo } from '../interfaces/AboutInfo'
import { Description } from '../interfaces/Description'

interface AboutIprops {
  aboutInfo: AboutInfo
}

export const getServerSideProps: GetServerSideProps = async () => {
  const URL = process.env.URL_ROOT

  try {
    const responseAboutInfo = await fetch(`${URL}/api/about`)
    const aboutInfo = await responseAboutInfo.json()

    if (!aboutInfo) {
      return { notFound: true }
    }

    return {
      props: {
        aboutInfo: aboutInfo.data
      }
    }
  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
}

const About: React.FC<AboutIprops> = ({ aboutInfo }) => {
  return (
    <Layout>
      <Grid
        gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        maxWidth="1170px"
        margin="0 auto"
        width="90%"
        paddingTop="2rem"
        paddingBottom="4rem"
        gap="2rem 5rem"
      >
        <Box>
          <Heading as="h3" color="dark-blue" marginBottom="2rem">
            {aboutInfo.title}
          </Heading>

          <Box>
            {aboutInfo.description.map((item: Description) => (
              <Text
                key={item.id}
                color="dark-grayish-blue"
                marginBottom="2rem"
                fontWeight="semibold"
              >
                {item.text}
              </Text>
            ))}
          </Box>
        </Box>
        <Box>
          <Image
            loading="lazy"
            fallbackSrc="/about-loader.png"
            src="/about-work.jpeg"
            alt=""
          />
        </Box>
      </Grid>
    </Layout>
  )
}

export default About
