import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import VideoCard from '../VideoCard'
import './index.css'

import {
  HomeContainer,
  BannerCard,
  BannerWebLogo,
  BannerWebCloseCard,
  HeadingCard,
  GetButtonCard,
  AllVideosCards,
  SearchInputCard,
  VideosUlCard,
} from './styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}
class Home extends Component {
  state = {
    videosData: [],
    searchInput: '',
    showBanner: true,
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachObject => ({
        channel: {
          name: eachObject.channel.name,
          profileImageUrl: eachObject.channel.profile_image_url,
        },
        id: eachObject.id,
        publishedAt: eachObject.published_at,
        thumbnailUrl: eachObject.thumbnail_url,
        title: eachObject.title,
        viewCount: eachObject.view_count,
      }))
      this.setState({videosData: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  searchVideoCard = event => {
    this.setState({searchInput: event.target.value})
  }

  filterListBySearch = () => {
    this.getAllVideos()
  }

  renderFailureView = () => <h1>hello</h1>

  renderAllVideosContainer = () => {
    const {videosData} = this.state
    return (
      <AllVideosCards>
        <VideosUlCard>
          {videosData.map(eachItem => (
            <VideoCard key={eachItem.id} videoDetails={eachItem} />
          ))}
        </VideosUlCard>
      </AllVideosCards>
    )
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  renderInprogressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  BannerCardDetails = () => (
    <BannerCard>
      <BannerWebCloseCard>
        <BannerWebLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <GrFormClose className="close-icon" onClick={this.closeBanner} />
      </BannerWebCloseCard>
      <HeadingCard>But Nxt Watch Premium prepaid plans with UPI</HeadingCard>
      <GetButtonCard type="button">GET IT NOW</GetButtonCard>
    </BannerCard>
  )

  renderDisplayVideosView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderAllVideosContainer()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderInprogressView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <HomeContainer>
        <Header />
        {showBanner ? this.BannerCardDetails() : null}
        <SearchInputCard>
          <input
            type="search"
            className="input-search"
            onChange={this.searchVideoCard}
            value={searchInput}
            placeholder="Search"
          />
          <BsSearch className="search-icon" onClick={this.filterListBySearch} />
        </SearchInputCard>

        {this.renderDisplayVideosView()}
      </HomeContainer>
    )
  }
}

export default Home
