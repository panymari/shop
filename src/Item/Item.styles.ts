import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;


    button{
        border-radius: 0 0 20px 20px;
    }

    img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div{
        font-family:  Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
    .discription-close{
        white-space: unset;
        overflow: unset;
        text-overflow: unset;
    }
    .discription-open{
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .see-more{
        border: none;
        background-color: transparent;
        font-family:  Arial, Helvetica, sans-serif;
        font-style: italic;
        color: blue;
        padding: 0;
    }
`;