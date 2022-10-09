import { Template } from "Template/Template";
import useFetch from "hooks/useFetch";
import Loader from "components/Loader";
import Table from "components/Table";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function MainPage() {
  const { results, loading } = useFetch();
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Template>
      <GoDashboardBtn onClick={goToDashboard}>
        <BtnText>Dashboard</BtnText>
      </GoDashboardBtn>
      {loading && results.length === 0 ? (
        <Loader />
      ) : (
        <Table results={results} />
      )}
    </Template>
  );
}

const GoDashboardBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 20px 0 0 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px grey;

  :hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    margin-left: 15px;
  }
`;

const BtnText = styled.span`
  text-align: center;
  padding: 5px 0;
`;
