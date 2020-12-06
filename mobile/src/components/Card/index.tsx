import React from 'react'
import { CardItem, CardText, CardTitle, CardContainer, CardIcon, CardPlayIcon } from './styles'
import image from '../../assets/img_stretching.png'
import dimensions from '../../global/dimensions'
import { Image } from 'react-native'

interface CardData {
  title: string
  text: string
  isPlaylistCard: boolean
  execute?(): void
}

const Card: React.FC<CardData> = ({ title, text, isPlaylistCard, execute }:CardData) => {
  return (
    <CardItem style={{ elevation: 3 }}>
      {
        !isPlaylistCard ? (
          <>
            <CardPlayIcon name="play-circle" size={60} style={{ left: 16 }} onPress={() => execute ? execute() : null} />
            <CardContainer hasPlayButton>
              <CardTitle ellipsizeMode="middle" numberOfLines={1}>
                {title}
              </CardTitle>
              <CardText>{text}</CardText>
            </CardContainer>
            <CardIcon name="arrow-right" size={dimensions.icon} onPress={() => execute ? execute() : null}/>
          </>
        )
          : (
            <>
              <Image source={image} style={{ width: 50, height: 100, left: 20, marginRight: 8 }}/>
              <CardContainer hasPlayButton={false}>
                <CardTitle ellipsizeMode="middle" numberOfLines={1}>
                  {title}
                </CardTitle>
                <CardText>{text}</CardText>
              </CardContainer>
              <CardIcon name="chevron-right" size={dimensions.icon} onPress={() => execute ? execute() : null} style={{ right: 20 }}/>
            </>
          )
      }

    </CardItem>
  )
}

export default Card
