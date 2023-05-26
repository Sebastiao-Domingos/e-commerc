import styled,{ css} from 'styled-components'


export const Div = styled.div`
    position:relative;
    width:80%;
    min-height:30rem;
    color:#FFF;
    margin:1rem auto;
    border-radius:5px;
    padding:4rem 3rem 2rem 3rem;
    ${ props => {
      return css`
        background:${ props.colors.black };
        border: 1px dotted ${ props.colors.green1 };
      `
    }}

    &::before{
      position:absolute;
      content:"Sign up";
      font-size:1.5rem;
      top:0;
      width:100%;
      padding:25px 0;
      display:flex;
      justify-content:center;
      align-items:center;
    }

    form{
      display:flex;
      justify-content:space-between;
      border-top:1px dotted ${ props => props.colors.green1};
      width:100%;
      padding-top:10px;

      >div{
        width:25rem;
        >div{
          display:flex;
          flex-direction:column;

          label{
            margin:1rem 0;
            color:#FFF;
            font-size:1rem;
          }
          input{
            padding:10px;
            font-size:1rem;
            border-radius:3px;
          }
        }

      }
      .second{
        .pass{
            margin-bottom:2rem;
            
        }        
      }
    }

`;
