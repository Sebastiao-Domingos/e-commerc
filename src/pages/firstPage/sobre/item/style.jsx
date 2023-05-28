import styled from "styled-components"

export const Div = styled.div`
    width:100%;
    height:28rem;
    position:relative;
    display:flex;

    img{
        width:50%;
        height:100%;
    }

    >div{
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:${ props =>props.colors.black};
        padding:3rem;
        color:#ffffff;

        h2 , p{ line-height:2rem;}
        h2{
            margin-bottom:2rem;
            color:${ props => props.colors.green1};
            padding-left:10px;
            border-left:2px solid;
        }

        h3{
            text-align:right;
            margin-bottom:2rem;
            font-weight:200;
            font-size:.9rem;
            color:${ props => props.colors.green1};    
        }
    }
`;