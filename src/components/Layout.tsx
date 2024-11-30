import { type PropsWithChildren, type FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from '@emotion/styled'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAX_WIDTH } from '@/constants/styles'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout

const Main = styled.main`
  max-width: ${MAX_WIDTH}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  padding: 20px;
  margin: auto;
`
