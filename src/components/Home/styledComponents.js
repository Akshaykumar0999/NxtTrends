import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`
export const BannerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 95%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin-top: 10px;
`
export const BannerWebLogo = styled.img`
  width: 200px;
  height: 45px;
`
export const BannerWebCloseCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`
export const HeadingCard = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #1e293b;
`
export const GetButtonCard = styled.button`
  height: 40px;
  width: 120px;
  color: #212121;
  border: 1px solid #212121;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
`
export const AllVideosCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`
export const SearchInputCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 32px;
  border-radius: 5px;
  margin-top: 10px;
`
export const VideosUlCard = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
`
