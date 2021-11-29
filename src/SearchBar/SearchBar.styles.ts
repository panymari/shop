import styled from 'styled-components';

export const Wrapper = styled.div`
    .search-inputs{
        display: flex;
        position: relative;
        z-index: 1;
    }
    .search-icon{
        position: absolute;
        right: 20px;
        top: 15px;
    }
    .data-result{
        position: absolute;
        background-color: #c89efd;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        padding: 20px; 
        padding-top: 50px;
        width: 500px;
        top: 48px;
    }
    p{
        margin-bottom: 10px;
        font-size: 20px;
        font-family:  Arial, Helvetica, sans-serif;
    }
`;
export const Input = styled.input`
    font-size: 20px;
    font-family:  Arial, Helvetica, sans-serif;
    outline: none;
    width: 500px;
    border: none;
    border-radius: 50px;
    padding: 20px; 
    background-color: rgba(255, 255, 255, 0.8);
    :focus{
        background-color: #c89efd;
    }
    color: white;
`;
