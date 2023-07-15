import {BsDot} from 'react-icons/bs'
import './index.css'
import {
  VideoCardContainer,
  ThumbnailImage,
  ProfileImage,
  DetailsCard,
  VideoDetailsAre,
  Title,
  OtherDescriptionCard,
  OtherDescription,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    publishedAt,
    channel,
    title,
    id,
    thumbnailUrl,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <VideoCardContainer>
      <ThumbnailImage src={thumbnailUrl} alt={id} />
      <DetailsCard>
        <ProfileImage src={profileImageUrl} alt={id} />
        <VideoDetailsAre>
          <Title>{title}</Title>
          <OtherDescriptionCard>
            <OtherDescription>{name}</OtherDescription>
            <BsDot className="dot-icons" />
            <OtherDescription>{viewCount}</OtherDescription>
            <BsDot className="dot-icons" />
            <OtherDescription>{publishedAt}</OtherDescription>
          </OtherDescriptionCard>
        </VideoDetailsAre>
      </DetailsCard>
    </VideoCardContainer>
  )
}

export default VideoCard
