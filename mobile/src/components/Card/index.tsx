import React from 'react'

import { CardItem, CardText, CardTitle, CardContainer, CardIcon, CardPlayIcon } from './styles'
import dimensions from '../../global/dimensions'

interface Cardas {
  title: string
  text: string
  isPlaylistCard: boolean
  execute?(): void
}

const Card: React.FC<Cardas> = ({ title, text, isPlaylistCard, execute }:Cardas) => {
  return (
    <CardItem>
      {
        !isPlaylistCard ? (
          <>
            <CardPlayIcon name="play-circle" size={dimensions.icon} onPress={() => execute ? execute() : null} />
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
              <CardContainer hasPlayButton={false}>
                <CardTitle ellipsizeMode="middle" numberOfLines={1}>
                  {title}
                </CardTitle>
                <CardText>{text}</CardText>
              </CardContainer>
              <CardIcon name="chevron-right" size={dimensions.icon} onPress={() => execute ? execute() : null}/>
            </>
          )
      }

    </CardItem>
  )
}

export default Card
