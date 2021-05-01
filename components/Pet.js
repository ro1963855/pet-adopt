import Image from 'next/image'
import PetStyle from '../styles/components/Pet.module.scss'

function Pet({info}) {
  return (
    <div className={`${PetStyle.pet} card`}>
      <div className={`${PetStyle.pet__img__wrapper}`}>
        <Image
          className={`${PetStyle.pet__img}`}
          src={info.pic !== '' ? `https://asms.coa.gov.tw/AmlApp/Upload/pic/${info.pic}` : '/svg/no_image_available.svg'}
          alt="Pet Picture"
          layout="fill"
        />
      </div>
      <section>
        <div className={`${PetStyle.pet__info}`}>
          <span className={`${PetStyle.pet__info__title}`}>
            品種
          </span>
          <span className={`${PetStyle.pet__info__value}`}>
            {info.BreedName}
          </span>
        </div>
        <div className={`${PetStyle.pet__info}`}>
          <span className={`${PetStyle.pet__info__title}`}>
            類別
          </span>
          <span className={`${PetStyle.pet__info__value}`}>
            {info.TypeIdName}
          </span>
        </div>
        <div className={`${PetStyle.pet__info}`}>
          <span className={`${PetStyle.pet__info__title}`}>
            性別
          </span>
          <span className={`${PetStyle.pet__info__value}`}>
            {info.SexName}
          </span>
        </div>
        <div className={`${PetStyle.pet__info}`}>
          <span className={`${PetStyle.pet__info__title}`}>
            毛色
          </span>
          <span className={`${PetStyle.pet__info__value}`}>
            {info.CoatName}
          </span>
        </div>
        <div className={`${PetStyle.pet__info}`}>
          <span className={`${PetStyle.pet__info__title}`}>
            收容所
          </span>
          <span className={`${PetStyle.pet__info__value}`}>
            {info.ShelterName}
          </span>
        </div>
      </section>
    </div>
  )
}

export default Pet