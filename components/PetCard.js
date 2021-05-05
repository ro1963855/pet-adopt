import Image from 'next/image'
import PetCardStyle from '../styles/components/PetCard.module.scss'

function PetCard({pet}) {
  return (
    <div className={`${PetCardStyle.petCard} card`}>
      <div className={`${PetCardStyle.petCard__img__wrapper} bg-light`}>
        <Image
          className={`${PetCardStyle.petCard__img}`}
          src={pet.picture !== '' ? pet.picture : '/svg/no_image_available.svg'}
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
            {pet.breed.name}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            類別
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {pet.type.name}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            性別
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {pet.sex.name}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            毛色
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {pet.coat.name}
          </span>
        </div>
        <div className={`${PetCardStyle.petCard__info}`}>
          <span className={`${PetCardStyle.petCard__info__title}`}>
            收容所
          </span>
          <span className={`${PetCardStyle.petCard__info__value}`}>
            {pet.shelter.name}
          </span>
        </div>
      </section>
    </div>
  )
}

export default PetCard