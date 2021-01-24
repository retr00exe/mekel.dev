import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <p>Made with ❤️ using <a href="https://nextjs.org/" target="_blank" style={{textDecoration: 'underline'}}>Next.js</a> & <a href="https://strapi.io/" target="_blank" style={{textDecoration: 'underline'}}>Strapi</a></p>
      </div>
    </Wrapper>
  );
}
    
const Wrapper = styled.footer.attrs({
	className: "mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto"
})`
  max-width: 800px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  .footer-container {
    padding: 1rem;
  }
  @media(min-width:768px){
    padding: 0 0;
  }
`
    
export default Footer