import { Link } from 'gatsby';
import styled from 'styled-components';

const Anchor = styled(Link)`
    color:${props => props.color ? props.color : '#ccc'};
    text-decoration:none;
    padding:1rem;
    margin-right:2rem;
    position:relative;

    :last-of-type{
        margin-right:0;
    }

    ::before{
        content:'';
        position:absolute;
        width:0;
        height:1px;
        bottom:0;
        left:0;
        border-bottom:1px solid ${props => props.color ? props.color : '#909090'};
        transition:.3s;
    }

    :hover::before{
        width:100%;
    }
`

export default Anchor
