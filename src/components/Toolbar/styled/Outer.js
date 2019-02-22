import styled from 'styled-components'

// currently not in use, need to refactor

const Outer = styled.header`
    .toolbar{
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
        background-color: orange;
        height: 56px;
    }

    .toolbar_navigation{
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 1rem;
    }

    .toolbar_logo{
        margin-left: 1rem;
    }

    .toolbar_logo a{
        color: white;
        text-decoration: none;
        font-size: 2.5rem;
    }

    .spacer{
        flex: 1;   
    }

    .toolbar_navigation-items ul{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    .toolbar_navigation-items li {
        padding: 0 0.5rem;
    }

    .toolbar_navigation-items a{
        color: white;
        text-decoration: none;  
    }

    .toolbar_navigation-items a:hover,
    .toolbar_navigation-items a:active {
        color: #fa923f;
    }

    @media(max-width: 768px){
        .toolbar_navigation-items{
            display: none;  
        }
    }
`

export default Outer