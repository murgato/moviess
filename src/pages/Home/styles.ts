import styled from "styled-components";

const colorPrimary = "#251A1A";
const secondaryColor = "#E23B1E";
const defaultButtonColor = "#25396A";

export const Container = styled.div`
  background-color: ${colorPrimary};
  color: ${secondaryColor};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 4rem;
  text-transform: uppercase;
`;

export const ContainerSearcher = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const Label = styled.label`
  font-size: 2rem;
  text-align: justify;
`;
export const LabelInition = styled(Label)`
  font-size: 2rem;
  font-weight: bold;
`;
const InputDefault = styled.input`
  border-radius: 6px;
  height: 3vh;
  width: 18vw;
  font
`;

export const InputSearch = styled(InputDefault)`
  &:focus {
    border: 1px solid red;
    outline: none;
  }
  font-size: 2rem;
  padding: 1rem;
`;

export const ButtonSearch = styled.button`
  height: 4vh;
  width: 2.5vw;
  font-size: 3rem;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 26%;
  background-color: ${defaultButtonColor};
  color: #f5f3e7;
  margin-left: 10px;
`;

export const ContainerMovie = styled.div`
  background-color: #f5f3e7;
  color: #9d0b0b;
  display: flex;
  padding: 2rem;
  width: 88rem;
`;

export const Poster = styled.img`
  height: 45rem;
  width: 33rem;
  margin-right: 10px;
`;
export const ContainerInformationMovie = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleMovie = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
`;
export const Genre = styled.label`
  margin-bottom: 23px;
`;
