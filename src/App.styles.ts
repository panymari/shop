import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
    .products{
        margin: 80px;
    }
`;

export const StyledButton = styled(IconButton)`
    color: white;
    width: 50px;
    height: 50px;
    :hover{
        opacity: 80%;
    }
`;

export const Toolbar = styled.div`
    justify-content: space-between;
    display: flex;
    padding: 20px;
`;
