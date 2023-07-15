import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled(LoginContainer)`
  width: 90%;
  height: 55%;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 60%;
  }
`
export const WebsiteLogoImage = styled.img`
  width: 150px;
  height: 40px;
  margin-bottom: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95%;
  margin-top: 15px;
`
export const InputCard = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  margin-top: 8px;
  color: #231f20;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #7e858e;
`
export const InputLabelCard = styled.label`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #616e7c;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const CheckBoxCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  margin-top: 8px;
`
export const CheckBoxLabelCard = styled.label`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  margin-left: 5px;
`
export const LoginButton = styled.button`
  width: 95%;
  background-color: #3b82f6;
  border-radius: 8px;
  height: 40px;
  margin-top: 15px;
  color: #ffffff;
  font-size: 15px;
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #ff0b37;
  margin-top: 0px;
  text-align: left;
  width: 95%;
`
