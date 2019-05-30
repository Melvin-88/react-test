import styled from 'styled-components';

export const theme = {
    fg: "#271b8e",
    border: "#271b8e",
    bg: "white"
};

export const invertTheme = {
    fg: "white",
    border: "palevioletred",
    bg: "palevioletred"
};

export const FormWrapper = styled.div`
  width: 650px;
  background: #fff;
  margin: 100px auto;
  padding: 45px;
  h1{
    margin-bottom: 35px;
  }
`;

export const Wrapper = styled.div`
  padding: 0 15px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Head = styled.header`
  margin: 25px 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.table`
  width: 100%;
  background: #fff;
  border: 1px solid #cccccc;
`;

export const TableHead = styled.thead`
  border-bottom: 2px solid #000;
`;

export const TH = styled.th`
  padding: 10px;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  vertical-align: middle;
`;

export const TR = styled.tr`
  border-bottom: 1px solid #cccccc;
    &:last-of-type{
        border-bottom: none;
    }
    &:nth-child(even){
        background: #eaeaea;
    }
  td {
    padding: 10px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    vertical-align: middle;
    &:last-of-type{
        text-align: center;
    }
    button{
        margin: 0 5px;
    }
  }
`;

export const Empty = styled.td`
    padding: 10px;
    text-align: center;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h1{
        margin: 0
    }
`;

export const Pagination = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    li{
        min-width: 30px;
        height: 30px;
        text-align: center;
        background: #fff;
        border-radius: 8px;
        margin: 0 10px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            padding: 0 5px;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;

export const BtnRow = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
`;

export const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.border};
  background: ${props => props.theme.bg};
  min-width: 100px;
  font-size: 1em;
  margin: 0.5em 0;
  padding: 0.25em 1em;
  &:disabled{
    &:hover{
        color: ${props => props.theme.fg};
        background: ${props => props.theme.bg};
    }
  }
  border-radius: 3px;
    a{
        text-decoration: none;
    }
  &:hover{
    cursor: pointer;
    color: ${props => props.theme.bg};
    background: ${props => props.theme.fg};
        a{
            cursor: pointer;
            color: ${props => props.theme.bg};
        }
    }
`;

export const InputField = styled.label`
    display: block;
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    textarea {
        width: 100%;
        color: #000000;
        padding: 5px 15px;
        font-size: 14px;
        resize: none;
        border-bottom: solid 1px #012a79;
    }
    input {
        display: block;
        height: 30px;
        line-height: 30px;
        width: 100%;
        border-bottom: solid 1px #012a79;
        padding: 0 15px;
        font-size: 14px;
        color: #000000;
    }
    &.error_border,
    &.value.error_border {
        position: relative;
        ::-webkit-input-placeholder {
            color: #d0021b;
        }
        ::-moz-placeholder {
            color: #d0021b;
        }
        :-ms-input-placeholder {
            color: #d0021b;
        }
        :-moz-placeholder {
            color: #d0021b;
        }
        input,
        textarea {
            color: #d0021b;
            border-color: #d0021b !important;
        }
        span.error {
            color: #d0021b;
            position: absolute;
            bottom: -15px;
            right: 0px;
            font-size: 11px;
            font-weight: 500;
            line-height: 13px;
        }
        .title {
            color: #d0021b;
        }
    }
    .title {
        position: absolute;
        height: 30px;
        line-height: 30px;
        left: 15px;
        top: 0;
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        z-index: 1;
        transform: scale(1) translate(0px, 0px);
        transform-origin: left top 0px;
        pointer-events: none;
        user-select: none;
        font-family: 'GothamProItalic', sans-serif;
        font-size: 14px;
        text-transform: capitalize;
        color: #5e5e5e;
        opacity: 0.7;
        font-weight: 500;
    }
    &.value {
        input,
        textarea {
            border-bottom: 1px solid #012a79;
            & + .title {
                transform: scale(0.75) translate(-20px, -25px);
                color: #000021;
                font-size: 17px;
                font-weight: 400;
            }
        }
    }
    input:focus,
    textarea:focus {
        border-bottom: 1px solid #012a79;
        & + .title {
            transform: scale(0.75) translate(-20px, -25px);
            color: #000021;
            font-size: 17px;
            font-weight: 400;
            opacity: 1;
        }
    }
`;