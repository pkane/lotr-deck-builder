import styled from "styled-components";

export const Wrapper = styled.section`
    font-family: sans-serif;
    width: 50vw;

    ul.character-sheet {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        
        li.character-card {
            padding: 30px;
            cursor: pointer;
            background: #f5eece;
            border: 3px solid #b87316;
            border-radius: 20px;
            font-size: 22px;
            font-weight: bold;
            font-family: serif;            
        }
    }
`;

export const ModalBackgroundStyled = styled.div`
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  padding: 40px;
  align-items: flex-start;
  gap: 24px;
  width: max-content;

  .icon {
    height: 63px;
    width: 63px;
    display: block;
    transform: scale(1.125);
  }

  .close-btn {
    position: absolute;
    height: 40px;
    width: 30px;
    top: 20px;
    right: 20px;
    z-index: 1;
    color: transparent;
    background: lightgray;
    border-radius: 60px;
    border: 2px solid #acacac;
    text-indent: -9999px;
    outline: none;

    svg {
      font-size: 1.5em;
    }

    &:hover {
      cursor: pointer;
      border-color: black;

      &:before {
        color: black;
      }
    }    
    
    &:before {
      position: absolute;
      content: 'X';
      display: block;
      color: #292929;
      font-weight: 700;
      font-family: system-ui;
      top: 6px;
      left: 50%;
      transform: translateX(-50%); 
      text-indent: 0;
    }
  } 
`;

export const CharacterCardDiv = styled.div`
    .character-details {
      width: 100%;

      h2 {
        font-family: serif;
        font-size: 40px;
        margin: 0;
      }

      .character-details-list {
        display: grid;
        padding: 20px;
        gap: 6px;
        background: #f5eece;
        border: 3px solid #b87316;
        border-radius: 3px;
        color: black;
        font-family: serif;
        font-weight: 500;
        grid-auto-flow: column; 
  
          li {
              list-style: none;
              border: 2px solid #707074;
              background: #fefefe;
              min-width: 70px;         
  
              .detail-category {
                width: 100%;
                display: block;
                background: #eedda0;
                font-weight: 700;
                border-bottom: 1px solid #a4a4a4;
                padding: 3px 6px;
                box-sizing: border-box;            
              }

              .detail-value {
                padding: 3px 8px;
              }
          }
      }      
    }
`