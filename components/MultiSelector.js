import { useState } from "react"
import dynamic from "next/dynamic"

const Select = dynamic(() => import("react-select"), {
  ssr: false,
})

function MultiSelector({placeholder, defaultValue, onChange: parentHandleChange, options}) {
  const [selectedOption, setSelectedOption] = useState(defaultValue)

  function handleChange(selectedOption) {
    parentHandleChange(selectedOption)
    return setSelectedOption(selectedOption)
  }
  
  return (
    <Select
      placeholder={placeholder}
      defaultValue={selectedOption}
      isMulti
      onChange={handleChange}
      options={options}
      className="basic-multi-select"
      classNamePrefix="filterList"
    />
  )
}

export default MultiSelector