import Image from 'next/image'
import PetDetailStyle from '../styles/components/PetDetail.module.scss'

function diffDay(date1, date2) {
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

function PetDetail({pet}) {
  return (
    <div className={`${PetDetailStyle.pet} card my-4`}>
      <div className={`${PetDetailStyle.petDetail__img__wrapper} bg-light`}>
        <Image
          className={`${PetDetailStyle.petDetail__img}`}
          src={pet.picture !== '' ? pet.picture : '/svg/no_image_available.svg'}
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
            { diffDay(new Date(pet.acceptTime), new Date()) } 天
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            進所原因
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.reason}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            狀態
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.adoption.name}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            品種
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.breed.name}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            類別
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.type.name}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            性別
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.sex.name}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            毛色
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.coat.name}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            編號
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            {pet.animalId}
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所
          </span>
          <address className={`${PetDetailStyle.petDetail__info__value}`}>
            <a href={pet.link} target="_blank">
              {pet.shelter.name}
            </a>
          </address>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所地址
          </span>
          <span className={`${PetDetailStyle.petDetail__info__value}`}>
            <a href={`https://www.google.com.tw/maps/place/${pet.shelter.address}`} target="_blank">
              {pet.shelter.address}
            </a>
          </span>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所電話
          </span>
          <address className={`${PetDetailStyle.petDetail__info__value}`}>
            <a href={`tel:${pet.shelter.phone}`}>
              {pet.shelter.phone}
            </a>
          </address>
        </div>
        <div className={`${PetDetailStyle.petDetail__info}`}>
          <span className={`${PetDetailStyle.petDetail__info__title}`}>
            收容所開放時間
          </span>
          <span
            className={`${PetDetailStyle.petDetail__info__value}`}
            dangerouslySetInnerHTML={{__html: pet.shelter.remark}}
          >
          </span>
        </div>
      </section>
    </div>
  )
}

export default PetDetail