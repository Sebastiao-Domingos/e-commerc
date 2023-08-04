import styled,{css} from 'styled-components'

export const Div = styled.section`
    width:100%;
    min-height:40rem;
    background:#fefefe;

    
    .contentText{
        padding:24px 6%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-shadow:0 0 5px #ccc;
        background:#f1ecec;

        h2{
            font-size:1.9rem;
            color:${ props => props.colors.green1};
        }

        ul{
            list-style:none;
        }

        >ul{
            >li{
                position:relative;
                color:#fefefe;
                border:1px solid;
                padding:10px 7px;
                width:8rem;
                font-size:.9rem;
                transition:all .5s;
                background: ${ props => props.colors.blue };


                >svg{
                    margin-left:10px;
                    transition:all .5s;
                }

                ul{
                    position:absolute; 
                    display:none;
                    top:33px; 
                    left:-1px;
                    background:${ props => props.colors.blue};
                    width:8rem;
                    border:1px solid #fefefe;
                    border-top-color:transparent;
                    padding:10px;
                    transition:all .4s;

                    li{
                        margin:10px 0;
                        color:#fefefe;
                        padding:5px 0;
                        cursor:pointer;
                        &:not(:last-child){
                            border-bottom:1px solid ${ props => props.colors.green1 };  
                        }
                    }
                }


                &:hover{
                    border-radius: 3px 3px 0 0;
                    border-bottom-color:transparent;

                    >svg{
                        transform:rotateX(180deg);
                    }

                    >ul{
                        display:block;
                        border-radius:0 0 3px 3px;
                    }
                }
            }
        }
    }

    .containerProducts{
        display: ${ props => props.moreDetale ? "flex" : "block"};
        section{
            width:${ props => props.moreDetale ? "45%" : "100%"};
            padding:3rem ${ props => props.moreDetale ? "1rem" : "6%"} 3rem 6%;
            display:flex;
            flex-wrap:wrap;
            gap:97px;
            justify-content:start;

            ${ props => props.moreDetale && css`
                max-height:63rem;
                overflow-y:scroll;


                &::-webkit-scrollbar{
                    display:none;
                    border-radius:5px;
                    border:1px dotted ${ props.colors.black};
                    transition:all .6s ease-in-out;
                }

                &::-webkit-scrollbar-thumb{
                    background:${ props.colors.black};
                    border-radius:5px;
                    border:1px dotted ${ props.colors.black};
                }

                &:hover::-webkit-scrollbar {
                    display:block;
                }
                
            `}
        }
        aside{
            width:${ props => props.moreDetale ? "55%" : "0%"};
            display:${ props => props.moreDetale ? "block" : "none"};
            padding-right:6%;
        }
    }
`;
