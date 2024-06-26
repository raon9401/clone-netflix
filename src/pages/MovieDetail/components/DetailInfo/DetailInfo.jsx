import React, { useState } from 'react'
import { Badge, Button } from 'react-bootstrap'
import "./DetailInfo.style.css"
import AgeIcon from '../../../../common/icon/AgeIcon/AgeIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { handleKeyAndValue } from '../../hooks/handleKeyAndValue'
import KeyAndValue from '../common/KeyAndValue'
import PreviewModal from '../../../../common/PreviewModal/PreviewModal'

const DetailInfo = ({movieDetail, id}) => {
  const [show, setShow] = useState(false);
  const handlePreviewModal = () => {
    setShow(true);
  }

  const KeyAndValueArr = movieDetail && handleKeyAndValue(movieDetail);
  return (
    movieDetail && 
    <section className="d-flex flex-column row-gap-3">
        <article className='genres-area'>
            {/* 장르 */}
            {movieDetail.genres.map((item, index) => 
                <Badge className='p-2' pill bg="danger" key={index}>{item.name}</Badge>
            )}
        </article>
        <article>
            {/* 타이틀, 예고편 modal */}
            <h1>{movieDetail.title}</h1>
            <Button onClick={() => handlePreviewModal()}>Trailer</Button>
        </article>
        <article className="d-flex column-gap-3">
            {/* 평점, 인기도, 연령 */}
            <div className="movie-info-text-wrap">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/256px-IMDb_Logo_Square.svg.png?20200218171646" alt="imdb logo" width="20" className="mr-1"/>
                {movieDetail.vote_average}
            </div>
            <div className="movie-info-text-wrap">
                <FontAwesomeIcon style={{width: "20px"}} icon={faThumbsUp} />
                    {movieDetail.popularity}
            </div>
            <AgeIcon isAdult={movieDetail.adult}/>
        </article>
        <article className="overview-text-box">
            {/* 줄거리 설명 */}
            <span>
                {movieDetail.overview}
            </span>
        </article>
        <article className='d-flex flex-column row-gap-2'>
            {/* 제작비, 수익비, 개봉일, 상영 시간 */}
            {KeyAndValueArr?.map((item, index) => 
                <KeyAndValue objectProps={item} key={index}/>
            )}
        </article>
        <PreviewModal id={id} show={show} setShow={setShow}/>

    </section>
  )
}

export default DetailInfo