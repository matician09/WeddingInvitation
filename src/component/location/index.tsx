import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 고속버스, 시외버스 이용시
            <br />
            <b>청주시외버스터미널</b>
            <br />
            시외버스터미널정류장(2055) 승차<br />
            버스노선번호:105번,101번,114번<br />
            반송말 정류장에서 하차<br /> 
            - 택시 이용시 약 25분 소요<br />
            <br />
            <b>청주여객터미널(청주대정류소)</b>
            <br />
            청주대,뉴시스정류장 (1512) 승차<br />
            114번,105번 <br />
            반송말정류장 하차 (15분소요)<br />
            - 택시 이용시 약 10분 소요<br />
          </div>
          <div />
          <div className="content">
            * 고속철도 (KTX, SRT) 이용시
            <br />
            <b>오송역5(1447)</b> 에서 509번 승차<br />
            사창사거리 정류장(1553)에서 105번,114번 환승<br />
            반송말 정류장에서 하차<br />
            - 택시 이용시 약 25분 소요<br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용 <b>트리웨딩</b> 검색
            <br />
            (주차 요금은 무료입니다)
            <br />
            충북 청주시 청원구 주중동 116-12 (충청대로 255)
            <br />
            <b>트리웨딩</b>
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
