import AddCardForm from 'components/Form/AddCardForm';
import Header from 'components/common/Header/Header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageContainer } from 'components/style/PageContainer';

function RegisterCard() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  const goRegisterName = () => {
    navigate('/register-name');
  };

  return (
    <PageContainer>
      <Header onClickBackButton={goHome} text={'카드 추가'} />
      <CardFormContainer>
        <AddCardForm onSubmit={goRegisterName} />
      </CardFormContainer>
    </PageContainer>
  );
}

export const CardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RegisterCard;
