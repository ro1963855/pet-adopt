import Image from 'next/image'
import PetDetailStyle from '../styles/components/PetDetail.module.scss'

function PetDetail({info}) {
  return (
    <div className={`${PetDetailStyle.pet} card my-4`}>
      <div className={`${PetDetailStyle.petDetail__img__wrapper} bg-light`}>
        <Image
          className={`${PetDetailStyle.petDetail__img}`}
          src={info.pic !== '' ? `https://asms.coa.gov.tw/AmlApp/Upload/pic/${info.FrontImageName}` : '/svg/no_image_available.svg'}
          alt="Pet Picture"
          layout="fill"
        />
      </div>
      <section className="card-body">
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            入所天數
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {new Date(info.AcceptDate).getDate() - new Date().getDate() + 1} 天
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            進所原因
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.ReasonName}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            狀態
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.AdoptionName}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            品種
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.VarietyName}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            類別
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.TypeIdName}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            性別
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.SexName}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            毛色
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.CoatName}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            編號
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {info.AcceptNum}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所
          </span>
          <address className={`${PetDetailStyle.petDetail__info__value}`}>
            <a href={info.link} target="_blank">
              {info.ShelterName}
            </a>
          </address>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所地址
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            <a href={`https://www.google.com.tw/maps/place/${info.Address}`} target="_blank">
              {info.Address}
            </a>
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所電話
          </span>
          <address className={`${PetDetailStyle.petDetail__info__value}`}>
            <a href={`tel:${info.Tel}`}>
              {info.Tel}
            </a>
          </address>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所開放時間
          </span>
          <span
            className={`${PetDetailStyle.petDetail__info__value}`}
            dangerouslySetInnerHTML={{__html: info.Memo}}
          >
          </span>
        </div>
      </section>
    </div>
  )
}

export default PetDetail