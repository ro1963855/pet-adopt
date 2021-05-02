import Image from 'next/image'
import PetCardStyle from '../styles/components/PetCard.module.scss'

function PetCard({info}) {
  return (
    <div className={`${PetCardStyle.petCard} card`}>
      <div className={`${PetCardStyle.petCard__img__wrapper} bg-light`}>
        <Image
          className={`${PetCardStyle.petCard__img}`}
          src={info.pic !== '' ? `https://asms.coa.gov.tw/AmlApp/Upload/pic/${info.pic.replace('.', '_org.')}` : '/svg/no_image_available.svg'}
          alt="Pet Picture"
          layout="fill"
        />
      </div>
      <section className="card-body">
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            品種
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {info.BreedName}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            類別
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {info.TypeIdName}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            性別
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {info.SexName}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            毛色
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {info.CoatName}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            收容所
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {info.ShelterName}
          </span>
        </div>
      </section>
    </div>
  )
}

export default PetCard