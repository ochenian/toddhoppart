import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Logo from "../assets/svg/logo.inline.svg"

const ThanksPage = () => (
  <Layout>
    <PageContainer>
      <Header>
        <Link to="/">
          <StyledLogo />
        </Link>
      </Header>
      <ThanksText>Thanks!</ThanksText>
      <ReplyText>We'll be in touch shortly</ReplyText>
    </PageContainer>
  </Layout>
)

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 20%;

  font-family: monospace;
`

const ThanksText = styled.div`
`

const ReplyText = styled.div`
  font-size: 0.5em;

  margin: 1em 0;
`

const StyledLogo = styled(Logo)`
  width: 50%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`


export default ThanksPage
