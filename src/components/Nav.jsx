import React from 'react'
import styled from 'styled-components'
const Navi = styled.nav`
    width: 100%;
    height: 10vh;
    background: #036181;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
`
const Text = styled.h1`
    font-family: 'Rubik Wet Paint', cursive;
    color: white;
`
function Nav() {
  return (
    <Navi>
        <Text>HR Onboarding..</Text>
    </Navi>
  )
}

export default Nav